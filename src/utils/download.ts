import { ResourceItem } from '../types';
import { siteConfig } from '../config/site';

/**
 * Generates a plain-text representation of a toolkit and triggers a
 * client-side download. Used by both the resource cards and the
 * resource detail modal so the export logic lives in one place.
 */
export const downloadResource = (resource: ResourceItem): void => {
  const title = resource.title;
  const description = resource.description;
  const audience = resource.targetAudience;
  const keyHighlights = resource.keyHighlights;
  const useCases = resource.useCases;

  const labels = {
    format: 'Format',
    category: 'Category',
    description: 'DESCRIPTION',
    audience: 'AUDIENCE',
    keyHighlights: 'KEY HIGHLIGHTS',
    useCases: 'WAYS TO USE',
    preview: 'GUIDE & CHECKLIST CONTENT',
    tagline: '"Learn AI. Build Digital Skills. Stay Cyber Safe."',
    cta: 'To book training or learn more:',
    web: 'Web'
  };

  const content = `=====================================================
${title}
${labels.format}: ${resource.format} | ${labels.category}: ${resource.category}
CS ACADEMY | Powered by CyberSwahili
${labels.tagline}
=====================================================

${labels.description}:
${description}

${labels.audience}:
${audience}

${labels.keyHighlights}:
${keyHighlights.map((h, i) => `${i + 1}. ${h}`).join('\n')}

${labels.useCases}:
${useCases.map((u, i) => `${i + 1}. ${u}`).join('\n')}

${labels.preview}:
${(resource.previewContent || []).join('\n\n')}

====================================================
${labels.cta}
Email: ${siteConfig.email}
${labels.web}: https://academy.cyberswahili.co.tz
====================================================`;

  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = resource.downloadName.replace('.pdf', '.txt');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};
