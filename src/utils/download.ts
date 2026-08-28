import { jsPDF } from 'jspdf';
import { ResourceItem } from '../types';
import { siteConfig } from '../config/site';

const MARGIN = 18;
const PAGE_WIDTH = 210;
const PAGE_HEIGHT = 297;
const CONTENT_WIDTH = PAGE_WIDTH - MARGIN * 2;
const ACCENT: [number, number, number] = [185, 28, 28];
const DARK: [number, number, number] = [23, 23, 23];
const MUTED: [number, number, number] = [115, 115, 115];
const HAIRLINE: [number, number, number] = [220, 220, 220];

const setText = (doc: jsPDF, rgb: [number, number, number]) => {
  doc.setTextColor(rgb[0], rgb[1], rgb[2]);
};

const setFill = (doc: jsPDF, rgb: [number, number, number]) => {
  doc.setFillColor(rgb[0], rgb[1], rgb[2]);
};

const setDraw = (doc: jsPDF, rgb: [number, number, number]) => {
  doc.setDrawColor(rgb[0], rgb[1], rgb[2]);
};

const addFooter = (doc: jsPDF, pageNum: number, total: number) => {
  const y = PAGE_HEIGHT - 12;
  setDraw(doc, HAIRLINE);
  doc.setLineWidth(0.2);
  doc.line(MARGIN, y - 4, PAGE_WIDTH - MARGIN, y - 4);
  setText(doc, MUTED);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.text(`${siteConfig.academyName}  |  ${siteConfig.shortName}`, MARGIN, y);
  doc.text(`Page ${pageNum} of ${total}`, PAGE_WIDTH - MARGIN, y, { align: 'right' });
  doc.text(siteConfig.email, PAGE_WIDTH / 2, y, { align: 'center' });
};

const ensureSpace = (doc: jsPDF, y: number, needed: number, onPage: number): number => {
  if (y + needed > PAGE_HEIGHT - 22) {
    addFooter(doc, onPage, doc.getNumberOfPages());
    doc.addPage();
    return MARGIN;
  }
  return y;
};

const writeWrapped = (
  doc: jsPDF,
  text: string,
  x: number,
  y: number,
  maxWidth: number,
  lineHeight: number
): number => {
  const lines = doc.splitTextToSize(text, maxWidth);
  for (const line of lines) {
    doc.text(line, x, y);
    y += lineHeight;
  }
  return y;
};

const addSection = (
  doc: jsPDF,
  title: string,
  bullets: string[],
  startY: number,
  pageRef: () => number,
  withNumbers = true
): number => {
  let y = ensureSpace(doc, startY, 14, pageRef());
  setText(doc, DARK);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.text(title.toUpperCase(), MARGIN, y);
  y += 2;
  setDraw(doc, ACCENT);
  doc.setLineWidth(0.6);
  doc.line(MARGIN, y, MARGIN + 18, y);
  y += 6;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  bullets.forEach((b, i) => {
    y = ensureSpace(doc, y, 12, pageRef());
    setFill(doc, ACCENT);
    if (withNumbers) {
      doc.circle(MARGIN + 2.5, y - 1.2, 1.6, 'F');
      setText(doc, [255, 255, 255]);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(7);
      doc.text(String(i + 1), MARGIN + 2.5, y - 0.5, { align: 'center' });
    } else {
      doc.rect(MARGIN + 1, y - 2, 1.5, 1.5, 'F');
    }
    setText(doc, DARK);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    y = writeWrapped(doc, b, MARGIN + 7, y, CONTENT_WIDTH - 7, 4.6);
    y += 2;
  });
  return y + 4;
};

const addOverview = (
  doc: jsPDF,
  description: string,
  audience: string,
  startY: number,
  pageRef: () => number
): number => {
  let y = ensureSpace(doc, startY, 30, pageRef());
  setText(doc, DARK);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.text('OVERVIEW', MARGIN, y);
  y += 2;
  setDraw(doc, ACCENT);
  doc.setLineWidth(0.6);
  doc.line(MARGIN, y, MARGIN + 18, y);
  y += 6;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  y = writeWrapped(doc, description, MARGIN, y, CONTENT_WIDTH, 4.8);
  y += 4;

  setText(doc, DARK);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  y = ensureSpace(doc, y, 12, pageRef());
  doc.text('WHO THIS IS FOR', MARGIN, y);
  y += 2;
  setDraw(doc, ACCENT);
  doc.line(MARGIN, y, MARGIN + 18, y);
  y += 6;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  y = writeWrapped(doc, audience, MARGIN, y, CONTENT_WIDTH, 4.8);
  return y + 4;
};

const addMetadataStrip = (
  doc: jsPDF,
  resource: ResourceItem
): number => {
  const stripY = 60;
  setFill(doc, [245, 245, 245]);
  doc.rect(MARGIN, stripY, CONTENT_WIDTH, 18, 'F');
  setDraw(doc, HAIRLINE);
  doc.setLineWidth(0.2);
  doc.rect(MARGIN, stripY, CONTENT_WIDTH, 18, 'S');

  setText(doc, MUTED);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7);
  const col1X = MARGIN + 4;
  const col2X = MARGIN + CONTENT_WIDTH / 2 + 2;
  const labelY = stripY + 5;
  doc.text('CATEGORY', col1X, labelY);
  doc.text('FORMAT', col2X, labelY);
  setText(doc, DARK);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.text(resource.category, col1X, labelY + 5);
  doc.text(resource.format, col2X, labelY + 5);

  setText(doc, MUTED);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7);
  doc.text('LEVEL', col1X, labelY + 10);
  doc.text('READING TIME', col2X, labelY + 10);
  setText(doc, DARK);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.text(resource.level, col1X, labelY + 15);
  doc.text(resource.readingTime, col2X, labelY + 15);
  return stripY + 24;
};

const drawCover = (doc: jsPDF, resource: ResourceItem): number => {
  setFill(doc, DARK);
  doc.rect(0, 0, PAGE_WIDTH, 110, 'F');
  setFill(doc, ACCENT);
  doc.rect(0, 110, PAGE_WIDTH, 4, 'F');

  setText(doc, [255, 255, 255]);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.text(`${siteConfig.academyName}  |  ${resource.category.toUpperCase()}`, MARGIN, 22);

  setText(doc, [255, 255, 255]);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(22);
  const titleLines = doc.splitTextToSize(resource.title, CONTENT_WIDTH);
  let ty = 42;
  for (const line of titleLines) {
    doc.text(line, MARGIN, ty);
    ty += 9;
  }

  setText(doc, [200, 200, 200]);
  doc.setFont('helvetica', 'italic');
  doc.setFontSize(10);
  const tagline = '"Learn AI. Build Digital Skills. Stay Cyber Safe."';
  doc.text(tagline, MARGIN, 100);

  return addMetadataStrip(doc, resource);
};

const addPage = (doc: jsPDF, resource: ResourceItem): void => {
  doc.addPage();
  setText(doc, MUTED);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.text(resource.title, MARGIN, 14);
  setDraw(doc, HAIRLINE);
  doc.setLineWidth(0.2);
  doc.line(MARGIN, 17, PAGE_WIDTH - MARGIN, 17);
};

/**
 * Generates a professionally formatted PDF for a toolkit and triggers
 * a client-side download. The document includes a cover page, a
 * metadata strip, an overview, key highlights, ways to use, the
 * extracted preview content, and a contact page.
 */
export const downloadResource = (resource: ResourceItem): void => {
  const doc = new jsPDF({ unit: 'mm', format: 'a4' });

  const pageRef = () => doc.getNumberOfPages();

  // Cover page
  let y = drawCover(doc, resource);
  y = addOverview(doc, resource.description, resource.targetAudience, y, pageRef);
  y = addSection(doc, 'Key Highlights', resource.keyHighlights, y, pageRef);

  // Ways to use, with new page if close to bottom
  if (y > 230) {
    addPage(doc, resource);
    y = MARGIN + 8;
  }
  y = addSection(doc, 'Ways to Use This Toolkit', resource.useCases, y, pageRef, false);

  // Preview content
  if (resource.previewContent && resource.previewContent.length > 0) {
    addPage(doc, resource);
    y = MARGIN + 8;
    setText(doc, DARK);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(14);
    doc.text('PREVIEW & EXTRACTED CONTENT', MARGIN, y);
    y += 2;
    setDraw(doc, ACCENT);
    doc.setLineWidth(0.8);
    doc.line(MARGIN, y, MARGIN + 24, y);
    y += 8;

    resource.previewContent.forEach((snippet, i) => {
      y = ensureSpace(doc, y, 14, pageRef());
      setFill(doc, ACCENT);
      doc.roundedRect(MARGIN, y - 4, 6, 6, 1, 1, 'F');
      setText(doc, [255, 255, 255]);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8);
      doc.text(String(i + 1).padStart(2, '0'), MARGIN + 3, y, { align: 'center' });

      // Try to split a heading from body
      const emDashIdx = snippet.indexOf(' — ');
      const colonIdx = snippet.indexOf(': ');
      let heading = '';
      let body = snippet;
      if (emDashIdx > -1 && emDashIdx < 80) {
        heading = snippet.slice(0, emDashIdx).trim();
        body = snippet.slice(emDashIdx + 3).trim();
      } else if (colonIdx > -1 && colonIdx < 80) {
        heading = snippet.slice(0, colonIdx).trim();
        body = snippet.slice(colonIdx + 2).trim();
      }

      let textX = MARGIN + 9;
      if (heading) {
        setText(doc, DARK);
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(10);
        doc.text(heading.toUpperCase(), textX, y);
        y += 4.4;
      }
      setText(doc, [55, 55, 55]);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9.5);
      y = writeWrapped(doc, body, textX, y, CONTENT_WIDTH - 9, 4.4);
      y += 4;
    });
  }

  // Contact / closing page
  addPage(doc, resource);
  y = MARGIN + 8;
  setFill(doc, DARK);
  doc.rect(MARGIN, y, CONTENT_WIDTH, 70, 'F');
  setFill(doc, ACCENT);
  doc.rect(MARGIN, y, 4, 70, 'F');

  setText(doc, [255, 255, 255]);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(16);
  doc.text('Continue Your Learning Journey', MARGIN + 10, y + 14);

  setText(doc, [220, 220, 220]);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.text('CS Academy offers practical AI, coding, and cybersecurity training', MARGIN + 10, y + 22);
  doc.text('designed for East African learners, professionals, and SMEs.', MARGIN + 10, y + 27);
  doc.text('Book a cohort, schedule in-house training, or request a workshop.', MARGIN + 10, y + 32);

  setText(doc, [255, 255, 255]);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.text('EMAIL', MARGIN + 10, y + 44);
  doc.text('PHONE', MARGIN + 10, y + 52);
  doc.text('WEB', MARGIN + 10, y + 60);
  setText(doc, [200, 200, 200]);
  doc.setFont('helvetica', 'normal');
  doc.text(siteConfig.email, MARGIN + 30, y + 44);
  doc.text(siteConfig.phoneDisplay, MARGIN + 30, y + 52);
  doc.text('https://academy.cyberswahili.co.tz', MARGIN + 30, y + 60);

  setText(doc, MUTED);
  doc.setFont('helvetica', 'italic');
  doc.setFontSize(8);
  y += 82;
  doc.text(
    `Free Open Educational Resource by ${siteConfig.academyName} (Powered by ${siteConfig.parentOrg}).`,
    MARGIN,
    y
  );
  doc.text('This document is part of the CS Academy public toolkits series.', MARGIN, y + 4);

  // Footers on every page
  const total = doc.getNumberOfPages();
  for (let p = 1; p <= total; p++) {
    doc.setPage(p);
    addFooter(doc, p, total);
  }

  doc.save(resource.downloadName);
};
