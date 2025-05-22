import 'astro/astro-jsx';

declare global {
  namespace JSX {
    // type Element = astroHTML.JSX.Element // We want to use this, but it is defined as any.
    type Element = HTMLElement;
  }

  type DataLayer = Array<Record<string, object | string | number>>;
  interface Window {
    dataLayer: DataLayer;
  }
  declare const dataLayer: DataLayer;
}
