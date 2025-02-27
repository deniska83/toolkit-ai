import { dirname, join, resolve } from 'path';
import { fileURLToPath } from 'url';

export function resolveFromSrc(relativePath: string) {
  const currentFileURL = import.meta.url;
  const currentFilePath = fileURLToPath(currentFileURL);
  const currentDirPath = dirname(currentFilePath);
  const rootPath = resolve(currentDirPath, '../..');
  return join(rootPath, '/src', relativePath);
}
