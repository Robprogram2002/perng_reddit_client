export interface ImageObject {
  publicId: string;
  url: string;
}

export interface ImageColor {
  type: 'color' | 'image';
  value: string;
}
