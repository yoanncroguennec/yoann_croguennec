// sitemap.ts (frontend/utilitaire)

// Liste des routes de ton site (peut être utilisée pour un menu, footer, etc.)
export const sitemap = [
  { url: "/", label: "Accueil" },
  { url: "/about", label: "À propos" },
  { url: "/contact", label: "Contact" },
  { url: "/blog", label: "Blog" },
];

// Fonction pour générer un sitemap XML (string) côté client (ex: export ou affichage)
export function generateSitemapXML(siteUrl: string) {
  const urlsXML = sitemap
    .map(
      ({ url }) => `
    <url>
      <loc>${siteUrl}${url}</loc>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>`,
    )
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urlsXML}
</urlset>`;
}
