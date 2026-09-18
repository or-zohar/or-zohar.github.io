export type Slide =
  | { type: 'image'; src: ImageMetadata; alt: string }
  | { type: 'video'; src: string; poster: string };
