import React, { useState } from 'react';
import { smartFrameworkSteps } from '../data/smartFramework';
import { useApp } from '../context/AppContext';
import { 
  CheckCircle2, 
  Lightbulb, 
  Shield, 
  Layers, 
  Search, 
  KeyRound
} from 'lucide-react';

export const SmartFramework: React.FC = () => {
  const { theme } = useApp();
  const [activeLetter, setActiveLetter] = useState<string>('S');

  const activeStep = smartFrameworkSteps.find(s => s.letter === activeLetter) || smartFrameworkSteps[0];

  const getStepIcon = (letter: string) => {
    switch (letter) {
      case 'S':
        return <Lightbulb className="w-5 h-5" />;
      case 'M':
        return <KeyRound className="w-5 h-5" />;
      case 'A':
        return <Layers className="w-5 h-5" />;
      case 'R':
        return <Search className="w-5 h-5" />;
      case 'T':
        return <Shield className="w-5 h-5" />;
      default:
        return <Shield className="w-5 h-5" />;
    }
  };

  return (
    <section 
      id="smart-framework-section" 
      className="py-24 border-y transition-colors duration-300 bg-[var(--bg-secondary)] text-[var(--text-primary)] border-[var(--border-color)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 animate-reveal">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--accent-red-subtle)] border border-[var(--accent-red-safe)]/20 text-[var(--accent-red-strong)] text-xs font-mono font-bold uppercase tracking-wider glow-accent">
            <span>THE CS ACADEMY METHOD</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--text-primary)]">
            {(
              <>THE AI <span className="keyword-highlight">S.M.A.R.T.</span> FRAMEWORK</>
            )}
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-[var(--text-secondary)] text-balance">
            Our proprietary 5-step model guiding learners from curiosity to confident, safe technological output.
          </p>
          <div className="mx-auto flex max-w-2xl items-center justify-center gap-2 rounded-full border px-4 py-2 text-[11px] font-bold uppercase tracking-[0.14em] border-[var(--border-color)] bg-[var(--bg-primary)] text-[var(--text-muted)] animate-reveal-delay-1">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-red-strong)]" />
            <span>Understand, Build, Verify, Apply safely</span>
          </div>
        </div>

        {/* Interactive Desktop Grid + Mobile Cards */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* S M A R T Letter Selector Column (5 cols on lg) */}
          <div className="lg:col-span-5 space-y-2.5 flex flex-col justify-between">
            {smartFrameworkSteps.map((step) => {
              const isSelected = activeLetter === step.letter;
              return (
                <button
                  key={step.letter}
                  id={`smart-step-btn-${step.letter}`}
                  onClick={() => setActiveLetter(step.letter)}
                  aria-pressed={isSelected}
                  className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 flex items-center justify-between group hover-icon-bounce ${
                    isSelected
                      ? 'bg-[var(--bg-primary)] border-[var(--accent-red-safe)] shadow-lg ring-1 ring-[var(--accent-red-safe)]/40 translate-x-1'
                      : 'bg-[var(--bg-tertiary)]/80 border-[var(--border-color)] hover:border-[var(--accent-red-safe)]/30 hover:bg-[var(--bg-tertiary)]'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    {/* Letter Badge */}
                    <div className={`w-12 h-12 rounded-xl font-extrabold text-xl flex items-center justify-center transition-all duration-300 ${
                      isSelected
                        ? 'bg-[var(--accent-red-strong)] text-white shadow-[0_8px_20px_rgba(255,59,48,0.3)] scale-110'
                        : 'bg-[var(--bg-elevated)] text-[var(--text-muted)] group-hover:text-[var(--text-primary)]'
                    }`}>
                      {step.letter}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className={`text-base font-extrabold tracking-tight uppercase transition-colors duration-300 ${
                          isSelected 
                            ? 'text-[var(--text-primary)]'
                            : 'text-[var(--text-secondary)]'
                        }`}>
                          {step.word}
                        </span>
                      </div>
                      <p className={`text-xs line-clamp-1 mt-0.5 transition-colors duration-300 ${
                        isSelected ? 'text-[var(--text-secondary)]' : 'text-[var(--text-muted)]'
                      }`}>
                        {step.meaning}
                      </p>
                    </div>
                  </div>

                  <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 icon-glow ${
                    isSelected ? 'text-[var(--accent-red-safe)] scale-125' : 'text-[var(--text-muted)]'
                  }`}>
                    {getStepIcon(step.letter)}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detailed Spotlight Panel (7 cols on lg) */}
          <div className="lg:col-span-7 border rounded-[2rem] p-8 sm:p-10 flex flex-col justify-between shadow-2xl relative overflow-hidden bg-[var(--bg-primary)] border-[var(--border-color)] glass-card">
            
            {/* Subtle watermark background letter */}
            <div className="absolute right-6 -bottom-10 font-black text-[180px] text-[var(--text-muted)]/10 select-none pointer-events-none">
              {activeStep.letter}
            </div>

            <div className="space-y-6 relative z-10">
              
              {/* Header Badge */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[var(--accent-red-strong)] text-white flex items-center justify-center font-black text-lg shadow-sm">
                    {activeStep.letter}
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-[var(--accent-red-safe)] uppercase">
                      Core Competency Pillar
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)]">{activeStep.word}</h3>
                  </div>
                </div>
                <div className="text-xs font-mono px-3 py-1 border rounded-lg bg-[var(--bg-secondary)] border-[var(--border-subtle)] text-[var(--text-muted)]">
                  Step {activeStep.letter === 'S' ? '1' : activeStep.letter === 'M' ? '2' : activeStep.letter === 'A' ? '3' : activeStep.letter === 'R' ? '4' : '5'} / 5
                </div>
              </div>

              {/* Meaning statement */}
              <div className="p-4 rounded-2xl border text-sm font-semibold bg-[var(--bg-tertiary)]/80 border-[var(--border-color)] text-[var(--text-secondary)]">
                "{activeStep.meaning}"
              </div>

              {/* Description */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-muted)]">
                  What You Will Practice:
                </h4>
                <p className="text-sm sm:text-base leading-relaxed text-[var(--text-secondary)]">
                  {activeStep.description}
                </p>
              </div>

              {/* Practical Real-World Example */}
              <div className="p-5 rounded-2xl border space-y-2 bg-[var(--bg-tertiary)] border-[var(--border-color)]">
                <div className="flex items-center gap-2 text-xs font-extrabold text-[var(--accent-red-safe)] uppercase tracking-wider">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Real-World Application in Action:</span>
                </div>
                <p className="text-xs sm:text-sm italic text-[var(--text-secondary)]">
                  "{activeStep.practicalExample}"
                </p>
              </div>

            </div>

            {/* Bottom Methodology Footnote */}
            <div className="pt-6 mt-6 border-t flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs relative z-10 border-[var(--border-color)] text-[var(--text-muted)]">
              <span>Integrated into all CS Academy live courses and institutional workshops.</span>
              <span className="text-[var(--accent-red-strong)] font-bold">
                CS Academy Method
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
