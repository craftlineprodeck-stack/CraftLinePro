// The only file that loads fonts. Swap the faces here; tokens.css maps them to
// `font-sans` (body) and `font-display` (headings) through neutral variables.
import { Inter, Oswald } from 'next/font/google';

const body = Inter({
  variable: '--font-body',
  subsets: ['latin'],
  display: 'swap',
});

const display = Oswald({
  variable: '--font-display-face',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

/** className for <html>: defines --font-body and --font-display-face. */
export const fontVariables: string = `${body.variable} ${display.variable}`;
