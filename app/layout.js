import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  metadataBase: new URL('https://www.rkvindustrialsolutions.com'),

  title: {
    default: 'RKV Industrial Solutions | Industrial Sourcing & Procurement',
    template: '%s | RKV Industrial Solutions',
  },

  description:
    'RKV Industrial Solutions provides industrial sourcing, MRO products, CAPEX material supply, procurement consulting, and reliable industrial support across India.',

  keywords: [
    'industrial sourcing',
    'industrial procurement',
    'MRO products',
    'MRO sourcing',
    'CAPEX material supply',
    'industrial material supplier',
    'industrial suppliers India',
    'procurement services India',
    'industrial sourcing India',
    'procurement consulting',
  ],

  authors: [
    {
      name: 'RKV Industrial Solutions',
    },
  ],

  creator: 'RKV Industrial Solutions',

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: 'https://www.rkvindustrialsolutions.com/',
  },

  openGraph: {
    title: 'RKV Industrial Solutions | Industrial Sourcing & Procurement',
    description:
      'Industrial sourcing, MRO products, CAPEX material supply, procurement consulting, and industrial support across India.',
    url: 'https://www.rkvindustrialsolutions.com/',
    siteName: 'RKV Industrial Solutions',
    locale: 'en_IN',
    type: 'website',
  },

  icons: {
    icon: [
      {
        url: '/brand/favicon.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        url: '/brand/favicon.ico',
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}