import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { PageRoute, ProgramPillar, TrainingProgram, ResourceItem, BlogPost } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
import { ScrollProgress } from './components/ScrollProgress';
import { WhatsAppFAB } from './components/WhatsAppFAB';
import { useApp } from './context/AppContext';

// Modals
import { BookingModal } from './components/BookingModal';
import { ProgramDetailModal } from './components/ProgramDetailModal';
import { TrainingDetailModal } from './components/TrainingDetailModal';
import { ResourceViewModal } from './components/ResourceViewModal';
import { BlogArticleModal } from './components/BlogArticleModal';

import { AppRoutes } from './AppRoutes';
import { ProgramsPageSkeleton, BlogPageSkeleton, ProgramDeepDiveSkeleton, VibeCodingSkeleton } from './components/SkeletonLoaders';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const { theme } = useApp();
  const location = useLocation();
  const navigate = useNavigate();

  // Map path to PageRoute for Navbar compatibility
  const getRouteFromPath = (path: string): PageRoute => {
    if (path === '/') return 'home';
    const route = path.substring(1).split('/')[0];
    return route as PageRoute;
  };

  const currentRoute = getRouteFromPath(location.pathname);

  const setCurrentRoute = (route: PageRoute) => {
    const path = route === 'home' ? '/' : `/${route}`;
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Modal states
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [bookingPrefill, setBookingPrefill] = useState<{
    program?: string;
    format?: string;
    duration?: string;
    organizationType?: string;
  } | undefined>(undefined);

  const [selectedProgram, setSelectedProgram] = useState<ProgramPillar | null>(null);
  const [selectedTraining, setSelectedTraining] = useState<TrainingProgram | null>(null);
  const [selectedResource, setSelectedResource] = useState<ResourceItem | null>(null);
  const [selectedBlogArticle, setSelectedBlogArticle] = useState<BlogPost | null>(null);

  // Modal Triggers
  const handleOpenBooking = (prefill?: {
    program?: string;
    format?: string;
    duration?: string;
    organizationType?: string;
  }) => {
    setBookingPrefill(prefill);
    setIsBookingModalOpen(true);
  };

  const handleOpenProgramModal = (program: ProgramPillar) => {
    setSelectedProgram(program);
  };

  const handleOpenTrainingModal = (training: TrainingProgram) => {
    setSelectedTraining(training);
  };

  const handleOpenResourceModal = (resource: ResourceItem) => {
    setSelectedResource(resource);
  };

  const handleOpenBlogArticleModal = (post: BlogPost) => {
    setSelectedBlogArticle(post);
  };

  return (
    <div
      className={`min-h-screen flex flex-col font-sans antialiased transition-colors duration-300 scroll-smooth ${
        theme === 'dark'
          ? 'bg-[var(--bg-primary)] text-[var(--text-primary)] selection:bg-[var(--accent-red-safe)] selection:text-white'
          : 'bg-[var(--bg-primary)] text-[var(--text-primary)] selection:bg-[var(--accent-red-safe)] selection:text-white'
      }`}
    >
      {/* Fixed Navigation Header */}
      <Navbar
        currentRoute={currentRoute}
        setCurrentRoute={setCurrentRoute}
        openBookingModal={() => handleOpenBooking()}
      />

      {/* Main Content Area */}
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="flex-grow"
        >
          <AppRoutes
            setCurrentRoute={setCurrentRoute}
            handleOpenBooking={handleOpenBooking}
            handleOpenProgramModal={handleOpenProgramModal}
            handleOpenTrainingModal={handleOpenTrainingModal}
            handleOpenResourceModal={handleOpenResourceModal}
            handleOpenBlogArticleModal={handleOpenBlogArticleModal}
          />
        </motion.div>
      </AnimatePresence>

      {/* Site Footer */}
      <Footer
        setCurrentRoute={setCurrentRoute}
        openBookingModal={() => handleOpenBooking()}
      />

      {/* Interactive Modals */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        prefill={bookingPrefill}
      />

      <ProgramDetailModal
        program={selectedProgram}
        onClose={() => setSelectedProgram(null)}
        openBookingModal={handleOpenBooking}
      />

      <TrainingDetailModal
        training={selectedTraining}
        onClose={() => setSelectedTraining(null)}
        openBookingModal={handleOpenBooking}
      />

      <ResourceViewModal
        resource={selectedResource}
        onClose={() => setSelectedResource(null)}
      />

      <BlogArticleModal
        post={selectedBlogArticle}
        onClose={() => setSelectedBlogArticle(null)}
        openBookingModal={handleOpenBooking}
      />

      <BackToTop />
      <ScrollProgress />
      <WhatsAppFAB />
    </div>
  );
}
