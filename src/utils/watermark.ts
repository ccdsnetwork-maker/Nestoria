/*
  Nestoria Image Watermark Utility

  This prepares the watermark workflow.
  Final watermark application should happen during
  server-side upload processing before saving images.
*/


export const WATERMARK_TEXT = "Nestoria";


export function getWatermarkText() {
  return WATERMARK_TEXT;
}
