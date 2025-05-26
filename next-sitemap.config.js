// next-sitemap.config.js

/** @type {import('next-sitemap').IConfig} */
const siteUrl = "https://www.yoann-croguennec.fr/"; // Remplace par l’URL de ton site

module.exports = {
  siteUrl, // L’URL principale de ton site
  generateRobotsTxt: true, // Génère aussi un fichier robots.txt
  sitemapSize: 5000, // Nombre max de pages par sitemap (utile pour gros sites)
};
