// ─── Type declarations for gif.js ───
declare module "gif.js" {
  interface GIFEncoderOptions {
    width?: number;
    height?: number;
  }

  export class GIFEncoder {
    constructor(width: number, height: number);
    setDelay(milliseconds: number): void;
    setFrameRate(fps: number): void;
    setDispose(disposalCode: number): void;
    setRepeat(repeat: number): void;
    setTransparent(color: number | null): void;
    addFrame(imageData: Uint8ClampedArray | number[]): void;
    finish(): void;
    setQuality(quality: number): void;
    setDither(dither: boolean | string): void;
    setGlobalPalette(palette: boolean | number[]): void;
    getGlobalPalette(): number[] | null;
    out: ByteArray;
  }

  export class ByteArray {
    page: number;
    pages: Uint8Array[];
    cursor: number;
    getData(): string;
    writeByte(val: number): void;
    writeUTFBytes(string: string): void;
    writeBytes(array: number[], offset?: number, length?: number): void;
  }
}
