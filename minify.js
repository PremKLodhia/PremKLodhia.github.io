const fs = require('fs');

function minifyCss(inputPath, outputPath) {
  let css = fs.readFileSync(inputPath, 'utf8');
  // Remove comments
  css = css.replace(/\/\*[\s\S]*?\*\//g, '');
  // Normalize whitespace
  css = css.replace(/\s+/g, ' ');
  // Remove whitespace around symbols safely without relying on shell variable expansion
  css = css.replace(/\s*\{\s*/g, '{');
  css = css.replace(/\s*\}\s*/g, '}');
  css = css.replace(/\s*:\s*/g, ':');
  css = css.replace(/\s*;\s*/g, ';');
  css = css.replace(/\s*,\s*/g, ',');
  css = css.replace(/;}/g, '}');
  css = css.trim();
  fs.writeFileSync(outputPath, css, 'utf8');
  console.log(`Minified ${inputPath} -> ${outputPath} (${css.length} bytes)`);
}

minifyCss('style.css', 'style.min.css');
