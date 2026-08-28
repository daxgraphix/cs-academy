import React from 'react';
import { useApp } from '../context/AppContext';

const SkeletonBase = ({ className }: { className: string }) => {
  const { theme } = useApp();
  return (
    <div className={`animate-pulse rounded ${
      theme === 'dark' ? 'bg-neutral-800' : 'bg-neutral-200'
    } ${className}`} aria-hidden="true" />
  );
};

export const ProgramsPageSkeleton = () => {
  const { theme } = useApp();
  return (
    <div className={`pt-28 pb-20 min-h-screen transition-colors duration-300 ${
      theme === 'dark' ? 'bg-[#0B0B0B]' : 'bg-neutral-50'
    }`} aria-busy="true" aria-label="Loading programs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header Skeleton */}
        <div className="text-center max-w-3xl mx-auto space-y-4 pt-4">
          <div className="flex justify-center">
            <SkeletonBase className="h-6 w-48 rounded-full" />
          </div>
          <div className="flex justify-center">
            <SkeletonBase className="h-12 w-3/4 sm:h-16" />
          </div>
          <div className="space-y-2">
            <SkeletonBase className="h-4 w-full" />
            <SkeletonBase className="h-4 w-5/6 mx-auto" />
          </div>
        </div>

        {/* Search & Filter Bar Skeleton */}
        <div className={`p-6 sm:p-8 rounded-3xl border shadow-xl space-y-6 ${
          theme === 'dark' ? 'bg-[#141414] border-neutral-800' : 'bg-white border-neutral-300'
        }`}>
          <SkeletonBase className="h-12 w-full rounded-2xl" />
          <div className="flex flex-wrap gap-2 pt-1">
            {[1, 2, 3, 4, 5].map(i => (
              <SkeletonBase key={i} className="h-8 w-24 rounded-xl" />
            ))}
          </div>
        </div>

        {/* Academy Deep Dive Cards Skeleton */}
        <div className="space-y-12">
          <SkeletonBase className="h-8 w-48" />
          {[1, 2].map(i => (
            <div key={i} className={`border rounded-3xl p-8 sm:p-12 space-y-8 ${
              theme === 'dark' ? 'bg-[#171717] border-neutral-800' : 'bg-white border-neutral-300'
            }`}>
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-neutral-800/40">
                <div className="flex items-center gap-4">
                  <SkeletonBase className="w-14 h-14 rounded-2xl" />
                  <div className="space-y-2">
                    <SkeletonBase className="h-3 w-20" />
                    <SkeletonBase className="h-8 w-48" />
                  </div>
                </div>
                <div className="flex gap-3">
                  <SkeletonBase className="h-10 w-32 rounded-xl" />
                  <SkeletonBase className="h-10 w-32 rounded-xl" />
                </div>
              </div>
              <div className="grid lg:grid-cols-12 gap-8">
                <div className="lg:col-span-6 space-y-4">
                  <SkeletonBase className="h-6 w-3/4" />
                  <div className="space-y-2">
                    <SkeletonBase className="h-4 w-full" />
                    <SkeletonBase className="h-4 w-full" />
                    <SkeletonBase className="h-4 w-2/3" />
                  </div>
                </div>
                <div className="lg:col-span-6 space-y-3">
                  <SkeletonBase className="h-4 w-40" />
                  <SkeletonBase className="h-16 w-full rounded-xl" />
                  <SkeletonBase className="h-16 w-full rounded-xl" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modular Courses Skeleton */}
        <div className="space-y-8 pt-8">
          <SkeletonBase className="h-8 w-64" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map(i => (
              <div key={i} className={`border rounded-3xl p-6 space-y-5 ${
                theme === 'dark' ? 'bg-[#171717] border-neutral-800' : 'bg-white border-neutral-300'
              }`}>
                <div className="flex justify-between">
                  <SkeletonBase className="h-4 w-24 rounded-full" />
                  <SkeletonBase className="h-4 w-16" />
                </div>
                <SkeletonBase className="h-7 w-full" />
                <div className="space-y-2">
                  <SkeletonBase className="h-3 w-full" />
                  <SkeletonBase className="h-3 w-full" />
                </div>
                <div className="pt-4 border-t border-neutral-800/40 flex justify-between items-center">
                  <SkeletonBase className="h-4 w-20" />
                  <SkeletonBase className="h-8 w-24 rounded-xl" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const BlogPageSkeleton = () => {
  const { theme } = useApp();
  return (
    <div className={`pt-28 pb-20 min-h-screen transition-colors duration-300 ${
      theme === 'dark' ? 'bg-[#0B0B0B]' : 'bg-white'
    }`} aria-busy="true" aria-label="Loading blog posts">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 pt-4">
          <div className="flex justify-center">
            <SkeletonBase className="h-6 w-64 rounded-full" />
          </div>
          <div className="flex justify-center">
            <SkeletonBase className="h-12 w-3/4 sm:h-16" />
          </div>
          <div className="space-y-2">
            <SkeletonBase className="h-4 w-full" />
            <SkeletonBase className="h-4 w-5/6 mx-auto" />
          </div>
        </div>

        {/* Search and Filter */}
        <div className={`flex flex-col md:flex-row gap-4 items-center justify-between p-4 rounded-2xl border ${
          theme === 'dark' ? 'bg-[#171717] border-neutral-800' : 'bg-neutral-50 border-neutral-300'
        }`}>
          <SkeletonBase className="h-10 w-full md:w-80 rounded-xl" />
          <div className="flex gap-2 overflow-x-auto w-full md:w-auto">
            {[1, 2, 3, 4].map(i => (
              <SkeletonBase key={i} className="h-8 w-20 rounded-xl shrink-0" />
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map(i => (
            <div key={i} className={`border rounded-3xl p-6 space-y-6 ${
              theme === 'dark' ? 'bg-[#171717] border-neutral-800' : 'bg-neutral-50 border-neutral-300'
            }`}>
              <div className="flex justify-between">
                <SkeletonBase className="h-5 w-20" />
                <SkeletonBase className="h-4 w-24" />
              </div>
              <div className="space-y-3">
                <SkeletonBase className="h-7 w-full" />
                <SkeletonBase className="h-7 w-3/4" />
                <div className="space-y-2 pt-2">
                  <SkeletonBase className="h-3 w-full" />
                  <SkeletonBase className="h-3 w-full" />
                  <SkeletonBase className="h-3 w-1/2" />
                </div>
              </div>
              <div className="flex gap-2">
                <SkeletonBase className="h-5 w-12 rounded" />
                <SkeletonBase className="h-5 w-12 rounded" />
              </div>
              <div className="pt-4 border-t border-neutral-800/40 flex justify-between items-center">
                <SkeletonBase className="h-4 w-24" />
                <SkeletonBase className="h-4 w-20" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const ProgramDeepDiveSkeleton = () => {
  const { theme } = useApp();
  return (
    <div className={`pt-28 pb-20 min-h-screen transition-colors duration-300 ${
      theme === 'dark' ? 'bg-[#0B0B0B]' : 'bg-white'
    }`} aria-busy="true" aria-label="Loading program details">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="flex justify-between items-center">
          <SkeletonBase className="h-4 w-32" />
          <SkeletonBase className="h-8 w-24" />
        </div>

        {/* Hero Banner Skeleton */}
        <div className={`border rounded-3xl p-8 sm:p-14 space-y-8 ${
          theme === 'dark' ? 'bg-[#171717] border-neutral-800' : 'bg-neutral-50 border-neutral-300'
        }`}>
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-6">
              <SkeletonBase className="h-6 w-32 rounded-full" />
              <SkeletonBase className="h-16 w-3/4" />
              <SkeletonBase className="h-6 w-1/2" />
              <div className="space-y-2">
                <SkeletonBase className="h-4 w-full" />
                <SkeletonBase className="h-4 w-full" />
                <SkeletonBase className="h-4 w-2/3" />
              </div>
              <div className="flex gap-4 pt-4">
                <SkeletonBase className="h-12 w-48 rounded-xl" />
                <SkeletonBase className="h-12 w-40 rounded-xl" />
              </div>
            </div>
            <div className="lg:col-span-4 flex justify-center">
              <SkeletonBase className="w-52 h-52 rounded-3xl" />
            </div>
          </div>
        </div>

        {/* Syllabus Skeleton */}
        <div className="space-y-8">
          <div className="flex flex-col items-center space-y-4">
            <SkeletonBase className="h-10 w-64" />
            <SkeletonBase className="h-4 w-48" />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className={`p-6 rounded-2xl border space-y-4 ${
                theme === 'dark' ? 'bg-[#171717] border-neutral-800' : 'bg-neutral-50 border-neutral-300'
              }`}>
                <SkeletonBase className="h-4 w-20 rounded" />
                <SkeletonBase className="h-6 w-3/4" />
                <SkeletonBase className="h-12 w-full rounded-xl" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const VibeCodingSkeleton = () => {
  const { theme } = useApp();
  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'dark' ? 'bg-[#090909]' : 'bg-[#f7f4ee]'
    }`} aria-busy="true" aria-label="Loading Vibe Coding">
      <div className="relative pt-32 pb-20 md:pt-44 md:pb-32 text-center max-w-7xl mx-auto px-4">
        <div className="flex justify-center mb-8">
          <SkeletonBase className="h-6 w-64 rounded-full" />
        </div>
        <div className="flex justify-center mb-8">
          <SkeletonBase className="h-20 w-3/4 sm:h-32" />
        </div>
        <div className="space-y-4 mb-12">
          <SkeletonBase className="h-5 w-full max-w-2xl mx-auto" />
          <SkeletonBase className="h-5 w-3/4 max-w-xl mx-auto" />
        </div>
        <div className="flex justify-center">
          <SkeletonBase className="h-16 w-64 rounded-full" />
        </div>
      </div>

      <div className="py-12 border-y border-neutral-800/20">
        <div className="max-w-7xl mx-auto px-4 flex justify-around opacity-40">
          {[1, 2, 3, 4].map(i => <SkeletonBase key={i} className="h-8 w-24" />)}
        </div>
      </div>

      <div className="py-24 max-w-7xl mx-auto px-4">
        <SkeletonBase className="h-[400px] w-full rounded-[3rem]" />
      </div>
    </div>
  );
};
