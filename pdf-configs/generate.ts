import { copyFile, mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const chrome =
  process.env.CHROME_PATH ?? "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
if (!(await Bun.file(chrome).exists())) {
  throw new Error(
    "Chrome is required. Install Google Chrome or set CHROME_PATH to its executable.",
  );
}

const root = resolve(import.meta.dir, "..");
const output = resolve(Bun.argv[2] ?? resolve(root, "README.pdf"));
const markdown = await Bun.file(resolve(root, "README.md")).text();
const css = await Bun.file(resolve(import.meta.dir, "style.css")).text();
const html = `<!doctype html>
<html lang="ja">
<head>
<meta charset="utf-8"><title>職務経歴書</title>
<base href="${pathToFileURL(`${root}/`).href}">
<style>${css}</style>
</head>
<body class="markdown-body">${Bun.markdown.html(markdown)}</body>
</html>`;

const directory = await mkdtemp(join(tmpdir(), "resume-pdf-"));
try {
  const htmlPath = join(directory, "resume.html");
  const pdfPath = join(directory, "resume.pdf");
  await Bun.write(htmlPath, html);
  const renderer = Bun.spawn(
    [
      chrome,
      "--headless",
      "--no-first-run",
      "--no-pdf-header-footer",
      `--user-data-dir=${join(directory, "profile")}`,
      `--print-to-pdf=${pdfPath}`,
      pathToFileURL(htmlPath).href,
    ],
    { stdout: "ignore", stderr: "pipe" },
  );
  const [exitCode, stderr] = await Promise.all([
    renderer.exited,
    new Response(renderer.stderr).text(),
  ]);
  if (exitCode !== 0) throw new Error(`Chrome exited with ${exitCode}.\n${stderr}`);

  const pdf = Bun.file(pdfPath);
  if (!(await pdf.exists()) || (await pdf.slice(0, 5).text()) !== "%PDF-") {
    throw new Error(`Chrome did not produce a PDF.\n${stderr}`);
  }
  await copyFile(pdfPath, output);
} finally {
  await rm(directory, { recursive: true, force: true });
}
console.log(`Generated ${output}`);
