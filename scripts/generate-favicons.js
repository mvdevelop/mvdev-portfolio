/**
 * Script para gerar favicons e web manifest
 * Usa o ícone existente como base
 */
// eslint-disable-next-line @typescript-eslint/no-require-imports
const fs = require("fs");
// eslint-disable-next-line @typescript-eslint/no-require-imports
const path = require("path");

const OUTPUT_DIR = path.join(__dirname, "..", "public");
const PRIMARY_COLOR = "#4d8be9";

/**
 * Creates a simple SVG favicon generator
 * This creates basic favicons since we don't have image processing libraries
 */
function generateFavicons() {
  console.log("🎨 Gerando favicons...");

  // Create 16x16 favicon
  const favicon16 = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
  <rect width="16" height="16" rx="2" fill="${PRIMARY_COLOR}"/>
  <text x="8" y="11" font-family="Arial, sans-serif" font-size="10" font-weight="bold" fill="white" text-anchor="middle">M</text>
</svg>`;

  // Create 32x32 favicon
  const favicon32 = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
  <rect width="32" height="32" rx="4" fill="${PRIMARY_COLOR}"/>
  <text x="16" y="22" font-family="Arial, sans-serif" font-size="20" font-weight="bold" fill="white" text-anchor="middle">M</text>
</svg>`;

  // Create 180x180 apple touch icon
  const appleTouchIcon = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="180" height="180" viewBox="0 0 180 180" xmlns="http://www.w3.org/2000/svg">
  <rect width="180" height="180" rx="36" fill="${PRIMARY_COLOR}"/>
  <text x="90" y="120" font-family="Arial, sans-serif" font-size="100" font-weight="bold" fill="white" text-anchor="middle">M</text>
</svg>`;

  // Write SVG files
  fs.writeFileSync(path.join(OUTPUT_DIR, "favicon-16x16.svg"), favicon16);
  fs.writeFileSync(path.join(OUTPUT_DIR, "favicon-32x32.svg"), favicon32);
  fs.writeFileSync(path.join(OUTPUT_DIR, "apple-touch-icon.svg"), appleTouchIcon);

  console.log("✅ Favicons SVG criados");
  console.log("   - public/favicon-16x16.svg");
  console.log("   - public/favicon-32x32.png");
  console.log("   - public/apple-touch-icon.svg");
}

/**
 * Creates the site.webmanifest file
 */
function generateManifest() {
  console.log("\n📱 Gerando site.webmanifest...");

  const manifest = {
    name: "MvDev Portfolio - Vinicius Dilly",
    short_name: "MvDev",
    description: "Full Stack Developer Portfolio specializing in Backend Engineering",
    start_url: "/",
    display: "standalone",
    background_color: "#071108",
    theme_color: "#4d8be9",
    orientation: "portrait-primary",
    icons: [
      {
        src: "/favicon-16x16.svg",
        sizes: "16x16",
        type: "image/svg+xml"
      },
      {
        src: "/favicon-32x32.svg",
        sizes: "32x32",
        type: "image/svg+xml"
      },
      {
        src: "/apple-touch-icon.svg",
        sizes: "180x180",
        type: "image/svg+xml"
      }
    ]
  };

  fs.writeFileSync(
    path.join(OUTPUT_DIR, "site.webmanifest"),
    JSON.stringify(manifest, null, 2)
  );

  console.log("✅ site.webmanifest criado");
}

/**
 * Creates an Open Graph image placeholder
 */
function generateOGPlaceholder() {
  console.log("\n🖼️ Criando imagem OG placeholder...");

  const ogContent = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#071108"/>
  <rect x="50" y="50" width="1100" height="530" fill="none" stroke="#4d8be9" stroke-width="2" opacity="0.3"/>
  <text x="600" y="280" font-family="Arial, sans-serif" font-size="72" font-weight="bold" fill="white" text-anchor="middle">MvDev</text>
  <text x="600" y="350" font-family="Arial, sans-serif" font-size="32" fill="#a5adb8" text-anchor="middle">Full Stack Developer · Backend Engineering</text>
  <line x1="100" y1="450" x2="1100" y2="450" stroke="#4d8be9" stroke-width="2"/>
  <text x="100" y="500" font-family="Arial, sans-serif" font-size="24" fill="#6b7280">vinicius dilly</text>
  <text x="100" y="530" font-family="Arial, sans-serif" font-size="20" fill="#6b7280">mvdevelop.com.br</text>
</svg>`;

  fs.writeFileSync(path.join(OUTPUT_DIR, "images", "og-placeholder.svg"), ogContent);
  console.log("✅ Imagem OG placeholder criada em public/images/og-placeholder.svg");
}

// Run generators
try {
  generateFavicons();
  generateManifest();
  generateOGPlaceholder();
  console.log("\n✨ Todos os assets gerados com sucesso!");
} catch (error) {
  console.error("❌ Erro ao gerar assets:", error.message);
  process.exit(1);
}
