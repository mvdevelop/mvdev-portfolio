/**
 * Script para gerar automaticamente o PDF do currículo em português
 * Usa Puppeteer (já instalado no projeto) para renderizar o HTML como PDF
 *
 * Uso: node scripts/generate-pt-pdf.js
 */
// eslint-disable-next-line @typescript-eslint/no-require-imports
const puppeteer = require("puppeteer");
// eslint-disable-next-line @typescript-eslint/no-require-imports
const path = require("path");
// eslint-disable-next-line @typescript-eslint/no-require-imports
const fs = require("fs");

const FILES = [
  { html: "mvmd-en-resume.html", pdf: "mvmd-en-resume.pdf", lang: "English" },
  { html: "mvmd-pt-resume.html", pdf: "mvmd-pt-resume.pdf", lang: "Portuguese" },
];

async function generatePDF(htmlFile, pdfOutput, langName) {
  const fullPath = path.join(__dirname, "..", "public", "pdf", htmlFile);

  if (!fs.existsSync(fullPath)) {
    console.error(`❌ HTML file not found: ${fullPath}`);
    return false;
  }

  let browser;
  try {
    browser = await puppeteer.launch({
      headless: "new",
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });

    const page = await browser.newPage();
    await page.setViewport({ width: 1200, height: 800 });

    const htmlUrl = `file://${fullPath.replace(/\\/g, "/")}`;
    await page.goto(htmlUrl, { waitUntil: "networkidle0" });
    await page.waitForFunction(() => document.fonts.ready).catch(() => {});

    await page.pdf({
      path: pdfOutput,
      format: "A4",
      printBackground: true,
      margin: { top: "20mm", bottom: "20mm", left: "20mm", right: "20mm" },
    });

    const sizeKB = (fs.statSync(pdfOutput).size / 1024).toFixed(2);
    console.log(`✅ ${langName} PDF generated: ${path.basename(pdfOutput)} (${sizeKB} KB)`);
    return true;
  } catch (error) {
    console.error(`❌ Error generating ${langName} PDF:`, error.message);
    return false;
  } finally {
    if (browser) await browser.close();
  }
}

async function main() {
  console.log("🚀 Starting PDF generation for all resume versions...\n");

  let successCount = 0;
  for (const { html, pdf, lang } of FILES) {
    const outputPath = path.join(__dirname, "..", "public", "pdf", pdf);
    const ok = await generatePDF(html, outputPath, lang);
    if (ok) successCount++;
  }

  console.log(`\n✨ Done! ${successCount}/${FILES.length} PDF(s) generated successfully.`);

  if (successCount === 0) {
    process.exit(1);
  }
}

main();
