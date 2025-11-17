import * as fs from 'fs';
import * as path from 'path';

// Campaign data - sync this with client/pages/CampaignDetail.tsx
const campaigns = [
  'diesel',
  'redox',
  'vibram',
  'millionvvv',
  'mott-projec-x-adidas',
  'dj-gordo',
  'dvm-studio',
  'bemba',
  'lust-panama',
  'us-projec',
  'concerts-party',
];

const baseUrl = 'https://www.bylit.studio';
const currentDate = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format

function generateSitemap(): string {
  const urls: string[] = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    '  <!-- Home Page -->',
    '  <url>',
    `    <loc>${baseUrl}/</loc>`,
    `    <lastmod>${currentDate}</lastmod>`,
    '    <changefreq>weekly</changefreq>',
    '    <priority>1.0</priority>',
    '  </url>',
    '',
    '  <!-- Work Page -->',
    '  <url>',
    `    <loc>${baseUrl}/work</loc>`,
    `    <lastmod>${currentDate}</lastmod>`,
    '    <changefreq>weekly</changefreq>',
    '    <priority>0.9</priority>',
    '  </url>',
    '',
    '  <!-- Campaign Pages -->',
  ];

  campaigns.forEach((campaign) => {
    urls.push(
      '  <url>',
      `    <loc>${baseUrl}/campaign/${campaign}</loc>`,
      `    <lastmod>${currentDate}</lastmod>`,
      '    <changefreq>monthly</changefreq>',
      '    <priority>0.8</priority>',
      '  </url>',
      ''
    );
  });

  urls.push('</urlset>');

  return urls.join('\n');
}

// Generate and write sitemap
const sitemap = generateSitemap();
const outputPath = path.join(process.cwd(), 'public', 'sitemap.xml');

fs.writeFileSync(outputPath, sitemap, 'utf-8');

console.log(`✅ Sitemap generated successfully at ${outputPath}`);
console.log(`📅 Last modified date: ${currentDate}`);
console.log(`📊 Total URLs: ${campaigns.length + 2}`); // campaigns + home + work
