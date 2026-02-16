import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const plusJakarta = Plus_Jakarta_Sans({
  weight: ['300', '400', '600', '800'],
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

export const metadata = {
  title: 'K H A N Portfolio',
  description: 'Portfolio of Ramzan Khan - Full-Stack Developer & AI/ML Specialist',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (window.history.scrollRestoration) {
                window.history.scrollRestoration = 'manual';
              }
            `,
          }}
        />
      </head>
      <body className={`${plusJakarta.variable} font-sans antialiased`} style={{ fontFamily: 'var(--font-plus-jakarta), Plus Jakarta Sans, sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
