import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  metadataBase: new URL('https://www.rkvindustrialsolutions.com'),

  title: {
    default: 'RKV Industrial Solutions | Industrial Procurement & MRO Supply',
    template: '%s | RKV Industrial Solutions',
  },

  description:
    'RKV Industrial Solutions provides MRO global sourcing, CAPEX industrial material supply, procurement consulting, audits and industrial support.',

  keywords: [
    'RKV Industrial Solutions',
    'RKV',
    'industrial procurement',
    'MRO sourcing',
    'MRO global sourcing',
    'CAPEX material supply',
    'industrial material supply',
    'procurement consulting',
    'industrial sourcing',
    'industrial products',
  ],

  alternates: {
    canonical: '/',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  openGraph: {
    title:
      'RKV Industrial Solutions | Industrial Procurement & MRO Supply',
    description:
      'Industrial procurement, MRO sourcing, CAPEX material supply and procurement support from RKV Industrial Solutions.',
    url: 'https://www.rkvindustrialsolutions.com/',
    siteName: 'RKV Industrial Solutions',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: '/images/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'RKV Industrial Solutions',
      },
    ],
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

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'RKV Industrial Solutions',
  alternateName: 'RKV',
  url: 'https://www.rkvindustrialsolutions.com',
  logo: 'https://www.rkvindustrialsolutions.com/brand/favicon.png',
  description:
    'RKV Industrial Solutions provides industrial procurement, MRO global sourcing, CAPEX material supply, procurement consulting and industrial support.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />

        {children}

        <Footer />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </body>
    </html>
  );
}