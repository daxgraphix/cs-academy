import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogType?: string;
  twitterCard?: string;
  canonicalUrl?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title = "CS Academy | Practical AI & Cybersecurity Training",
  description = "Practical AI, cybersecurity and digital skills training for Africa. Hands-on project based learning. Mobile-friendly. M-Pesa accepted.",
  keywords = "AI training Tanzania, cybersecurity training Tanzania, digital skills Africa",
  ogTitle,
  ogDescription,
  ogType = "website",
  twitterCard = "summary_large_image",
  canonicalUrl = "https://academy.cyberswahili.co.tz"
}) => {
  const { i18n } = useTranslation();
  const siteTitle = title.includes("CS Academy") ? title : `${title} | CS Academy`;

  return (
    <Helmet>
      {/* Language attribute for SEO */}
      <html lang={i18n.language} />

      {/* Standard metadata tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph tags */}
      <meta property="og:title" content={ogTitle || siteTitle} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />

      {/* Twitter tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={ogTitle || siteTitle} />
      <meta name="twitter:description" content={ogDescription || description} />
    </Helmet>
  );
};
