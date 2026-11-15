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

const HTML_FILE = path.join(__dirname, "..", "public", "pdf", "mvmd-pt-resume.html");
const PDF_OUTPUT = path.join(__dirname, "..", "public", "pdf", "mvmd-pt-resume.pdf");

async function generatePDF() {
  console.log("🚀 Iniciando geração do PDF do currículo em português...");

  if (!fs.existsSync(HTML_FILE)) {
    console.error(`❌ Arquivo HTML não encontrado: ${HTML_FILE}`);
    process.exit(1);
  }

  let browser;
  try {
    browser = await puppeteer.launch({
      headless: "new",
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });

    const page = await browser.newPage();
    await page.setViewport({ width: 1200, height: 800 });

    const htmlUrl = `file://${HTML_FILE.replace(/\\/g, "/")}`;
    await page.goto(htmlUrl, { waitUntil: "networkidle0" });
    await page.waitForFunction(() => document.fonts.ready).catch(() => {});

    await page.pdf({
      path: PDF_OUTPUT,
      format: "A4",
      printBackground: true,
      margin: { top: "20mm", bottom: "20mm", left: "20mm", right: "20mm" },
    });

    console.log(`✅ PDF gerado com sucesso: ${PDF_OUTPUT}`);
    console.log(`📄 Tamanho: ${(fs.statSync(PDF_OUTPUT).size / 1024).toFixed(2)} KB`);
  } catch (error) {
    console.error("❌ Erro ao gerar PDF:", error.message);
    process.exit(1);
  } finally {
    if (browser) await browser.close();
  }
}

generatePDF();
