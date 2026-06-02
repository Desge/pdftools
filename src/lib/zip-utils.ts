// ─── ZIP Download Utility ───
// Uses JSZip to bundle multiple files into a single ZIP and trigger download.

import JSZip from "jszip";

/**
 * Bundle multiple files into a ZIP archive and trigger a browser download.
 */
export async function createZipAndDownload(
  files: { name: string; data: Uint8Array; mime: string }[],
  zipFilename: string
): Promise<void> {
  const zip = new JSZip();

  for (const file of files) {
    zip.file(file.name, file.data, { binary: true });
  }

  const blob = await zip.generateAsync({ type: "blob" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = zipFilename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);

  // Revoke after a short delay to allow the download to start
  setTimeout(() => URL.revokeObjectURL(url), 5000);
}
