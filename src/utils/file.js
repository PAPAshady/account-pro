import { writeFile } from 'fs/promises';
import path from 'path';

export async function saveFileToDisk(file, name, dirName) {
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const uniqueName = `${name}-${Date.now()}`;
  const fileFormat = path.extname(file.name);
  const fileName = `${uniqueName}${fileFormat}`;

  const filePath = path.join(process.cwd(), 'public', 'images', dirName, fileName);
  await writeFile(filePath, buffer);
  return `/images/${dirName}/${fileName}`;
}
