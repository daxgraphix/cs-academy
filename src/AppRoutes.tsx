import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { PageRoute, ProgramPillar, TrainingProgram, ResourceItem, BlogPost } from './types';
import {
  ProgramsPageSkeleton,
  BlogPageSkeleton,
  ProgramDeepDiveSkeleton,
  VibeCodingSkeleton
} from './components/SkeletonLoaders';

// Lazy load pages
const HomePage = lazy(() => import('./pages/HomePage').then(module => ({ default: module.HomePage })));
const FeaturesPage = lazy(() => import('./pages/FeaturesPage').then(module => ({ default: module.FeaturesPage })));
const PricingPage = lazy(() => import('./pages/PricingPage').then(module => ({ default: module.PricingPage })));
const ProgramsPage = lazy(() => import('./pages/ProgramsPage').then(module => ({ default: module.ProgramsPage })));
const ProgramDeepDivePage = lazy(() => import('./pages/ProgramDeepDivePage').then(module => ({ default: module.ProgramDeepDivePage })));
const LearningFormatsPage = lazy(() => import('./pages/LearningFormatsPage').then(module => ({ default: module.LearningFormatsPage })));
const ForOrganizationsPage = lazy(() => import('./pages/ForOrganizationsPage').then(module => ({ default: module.ForOrganizationsPage })));
const ResourcesPage = lazy(() => import('./pages/ResourcesPage').then(module => ({ default: module.ResourcesPage })));
const BlogPage = lazy(() => import('./pages/BlogPage').then(module => ({ default: module.BlogPage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then(module => ({ default: module.AboutPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(module => ({ default: module.ContactPage })));
const VibeCodingPage = lazy(() => import('./pages/VibeCodingPage').then(module => ({ default: module.VibeCodingPage })));

// Simple Loading Fallback
const PageLoader = () => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-4">
    <div className="w-10 h-10 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
    <div className="text-xs font-mono font-bold text-red-600 animate-pulse uppercase tracking-widest">
      Loading Experience...
    </div>
  </div>
);

interface AppRoutesProps {
  setCurrentRoute: (route: PageRoute) => void;
  handleOpenBooking: (prefill?: any) => void;
  handleOpenProgramModal: (program: ProgramPillar) => void;
  handleOpenTrainingModal: (training: TrainingProgram) => void;
  handleOpenResourceModal: (resource: ResourceItem) => void;
  handleOpenBlogArticleModal: (post: BlogPost) => void;
}

export const AppRoutes: React.FC<AppRoutesProps> = ({
  setCurrentRoute,
  handleOpenBooking,
  handleOpenProgramModal,
  handleOpenTrainingModal,
  handleOpenResourceModal,
  handleOpenBlogArticleModal
}) => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={
          <HomePage
            setCurrentRoute={setCurrentRoute}
            openBookingModal={handleOpenBooking}
            openProgramModal={handleOpenProgramModal}
            openTrainingDetailModal={handleOpenTrainingModal}
            openResourceModal={handleOpenResourceModal}
            openBlogArticleModal={handleOpenBlogArticleModal}
          />
        } />
        <Route path="/home" element={
          <HomePage
            setCurrentRoute={setCurrentRoute}
            openBookingModal={handleOpenBooking}
            openProgramModal={handleOpenProgramModal}
            openTrainingDetailModal={handleOpenTrainingModal}
            openResourceModal={handleOpenResourceModal}
            openBlogArticleModal={handleOpenBlogArticleModal}
          />
        } />
        <Route path="/features" element={
          <FeaturesPage
            setCurrentRoute={setCurrentRoute}
            openBookingModal={handleOpenBooking}
          />
        } />
        <Route path="/pricing" element={
          <PricingPage
            setCurrentRoute={setCurrentRoute}
            openBookingModal={handleOpenBooking}
          />
        } />
        <Route path="/programs" element={
          <Suspense fallback={<ProgramsPageSkeleton />}>
            <ProgramsPage
              setCurrentRoute={setCurrentRoute}
              openProgramModal={handleOpenProgramModal}
              openBookingModal={handleOpenBooking}
            />
          </Suspense>
        } />
        <Route path="/programs/ai" element={
          <Suspense fallback={<ProgramDeepDiveSkeleton />}>
            <ProgramDeepDivePage
              slug="ai"
              setCurrentRoute={setCurrentRoute}
              openBookingModal={handleOpenBooking}
            />
          </Suspense>
        } />
        <Route path="/programs/cybersecurity" element={
          <Suspense fallback={<ProgramDeepDiveSkeleton />}>
            <ProgramDeepDivePage
              slug="cybersecurity"
              setCurrentRoute={setCurrentRoute}
              openBookingModal={handleOpenBooking}
            />
          </Suspense>
        } />
        <Route path="/programs/digital-skills" element={
          <Suspense fallback={<ProgramDeepDiveSkeleton />}>
            <ProgramDeepDivePage
              slug="digital-skills"
              setCurrentRoute={setCurrentRoute}
              openBookingModal={handleOpenBooking}
            />
          </Suspense>
        } />
        <Route path="/learning-formats" element={
          <LearningFormatsPage
            openBookingModal={handleOpenBooking}
          />
        } />
        <Route path="/for-organizations" element={
          <ForOrganizationsPage
            openBookingModal={handleOpenBooking}
          />
        } />
        <Route path="/resources" element={
          <ResourcesPage
            openResourceModal={handleOpenResourceModal}
          />
        } />
        <Route path="/blog" element={
          <Suspense fallback={<BlogPageSkeleton />}>
            <BlogPage
              openBlogArticleModal={handleOpenBlogArticleModal}
            />
          </Suspense>
        } />
        <Route path="/about" element={
          <AboutPage
            openBookingModal={handleOpenBooking}
          />
        } />
        <Route path="/contact" element={
          <ContactPage
            openBookingModal={() => handleOpenBooking()}
          />
        } />
        <Route path="/vibe-coding" element={
          <Suspense fallback={<VibeCodingSkeleton />}>
            <VibeCodingPage
              setCurrentRoute={setCurrentRoute}
              openBookingModal={handleOpenBooking}
            />
          </Suspense>
        } />
        {/* Fallback */}
        <Route path="*" element={
          <HomePage
            setCurrentRoute={setCurrentRoute}
            openBookingModal={handleOpenBooking}
            openProgramModal={handleOpenProgramModal}
            openTrainingDetailModal={handleOpenTrainingModal}
            openResourceModal={handleOpenResourceModal}
            openBlogArticleModal={handleOpenBlogArticleModal}
          />
        } />
      </Routes>
    </Suspense>
  );
};
