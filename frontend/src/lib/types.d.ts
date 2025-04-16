declare namespace React {
  interface ReactNode {}
  type FC<P = {}> = React.FunctionComponent<P>;
  interface FunctionComponent<P = {}> {
    (props: P, context?: any): React.ReactElement<any, any> | null;
  }
  interface ReactElement<P = any, T extends string | JSXElementConstructor<any> = string | JSXElementConstructor<any>> {}
  type JSXElementConstructor<P> = ((props: P) => ReactElement<any, any> | null);
  interface ImgHTMLAttributes<T> extends HTMLAttributes<T> {
    alt?: string;
    crossOrigin?: "anonymous" | "use-credentials" | "";
    decoding?: "async" | "auto" | "sync";
    height?: number | string;
    loading?: "eager" | "lazy";
    referrerPolicy?: string;
    sizes?: string;
    src?: string;
    srcSet?: string;
    useMap?: string;
    width?: number | string;
  }
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    [key: string]: any;
  }
  interface AriaAttributes {}
  interface DOMAttributes<T> {}
}

// Next.js Image
declare module 'next/image' {
  const Image: any;
  export default Image;
}

// Metadata
declare module 'next' {
  interface Metadata {
    title?: string;
    description?: string;
  }
}

// Swiper
declare module 'swiper/react' {
  const Swiper: any;
  const SwiperSlide: any;
  export { Swiper, SwiperSlide };
}

declare module 'swiper/modules' {
  export const Navigation: any;
  export const Pagination: any;
  export const Scrollbar: any;
  export const A11y: any;
}

// Swiper CSS
declare module 'swiper/css';
declare module 'swiper/css/navigation';
declare module 'swiper/css/pagination'; 
