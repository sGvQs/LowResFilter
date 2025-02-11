declare module 'dom-to-image' {
  const domToImage: {
    toPng(node: View, options?: any): Promise<string>;
    toSvg(node: View, options?: any): Promise<string>;
    toJpeg(node: View, options?: any): Promise<string>;
    toBlob(node: View, options?: any): Promise<Blob>;
    toPixelData(node: View, options?: any): Promise<Uint8ClampedArray>;
  };

  export default domToImage;
}
