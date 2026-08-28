import React from 'react';
import { SEO } from '../components/SEO';
import { PlatformFeaturesSection } from '../components/PlatformFeaturesSection';
import { PageRoute } from '../types';
import { ArrowRight } from 'lucide-react';

interface FeaturesPageProps {
  setCurrentRoute: (route: PageRoute) => void;
  openBookingModal: (prefill?: { program?: string }) => void;
}

export const FeaturesPage: React.FC<FeaturesPageProps> = ({
  setCurrentRoute,
  openBookingModal
}) => {
  return (
    <div className="pt-28 pb-20 bg-[var(--bg-primary)] text-[var(--text-primary)] min-h-screen">
      <SEO
        title="Platform Features"
        description="Explore the features of CS Academy's learning platform. Interactive AI labs, cybersecurity simulations, and more."
      />
      {/* Platform Features Main Interactive Section */}
      <PlatformFeaturesSection openBookingModal={openBookingModal} />

      {/* Quick Navigation Footer Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center space-y-6">
        <div className="p-8 sm:p-12 rounded-[2.5rem] glass-card border-[var(--border-color)] space-y-4 shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-[var(--text-primary)]">
            Ready to Explore Our Pricing & Plans?
          </h3>
          <p className="text-sm text-[var(--text-secondary)] max-w-xl mx-auto font-medium">
            Get started for free or upgrade to Premium for full course access, quizzes, certificates, and live sessions.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => setCurrentRoute('pricing')}
              className="btn-primary"
            >
              <span>View Pricing Plans</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => setCurrentRoute('programs')}
              className="btn-secondary"
            >
              <span>Browse All Courses</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
