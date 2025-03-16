export const stylesheet = "./pdf-configs/style.css";
export const body_class = "markdown-body";
export const marked_options = {
	headerIds: false,
	smartypants: true,
};
export const pdf_options = {
	format: "A4",
	margin: "25mm 15mm",
	printBackground: true,
	headerTemplate:
		"<style>\n  section {\n    margin: 0 auto;\n    font-size: 9px;\n  }\n</style>",
	footerTemplate:
		'<section>\n  <div>\n    <span class="pageNumber"></span>\n    / <span class="totalPages"></span>\n  </div>\n</section>',
};
export const stylesheet_encoding = "utf-8";
