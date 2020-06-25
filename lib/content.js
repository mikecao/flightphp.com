import fs from 'fs';
import path from 'path';
import rehype from 'rehype';
import prism from '@mapbox/rehype-prism';
import remark from 'remark';
import html from 'remark-html';

export async function getMarkdownContent(lang = 'en') {
  const dir = path.join(process.cwd(), 'content', lang);
  const files = fs.readdirSync(dir);
  const obj = {};

  for (const file of files) {
    const id = file.replace(/\.md$/, '');
    const fullPath = path.join(dir, file);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const htmlContent = await remark().use(html).process(fileContents);
    const content = await rehype().use(prism).process(htmlContent.toString());

    obj[id] = content.toString();
  }

  return obj;
}
