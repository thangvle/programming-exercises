/**
 * Return "image", "document", or "other" based on the file extension.
 *
 * - image: jpg, png, gif
 * - document: pdf, doc, txt
 * - other: anything else
 *
 * Use: str.endsWith()
 *
 * @example
 * categorizeFile("photo.jpg") // → "image"
 * categorizeFile("report.pdf") // → "document"
 * categorizeFile("data.csv") // → "other"
 */
export function categorizeFile(filename: string): string {
  throw new Error("Not implemented");
}
