const baseUrl = 'https://www.rkvindustrialsolutions.com';

const services = [
  'mro-global-sourcing',
  'capex-material-supply',
  'procurement-consulting',
  'installation-commissioning-maintenance-repair',
  'procurement-audit',
  'internal-audit',
  'digital-marketing',
  'graphic-design',
  'mechanical-design-3d-cad-service',
  'all-mechanical-work',
  'safety-industrial-equipment-supply',
];

const industries = [
  'automotive',
  'fmcg',
  'food-beverage',
  'alcoholic-beverages',
  'hospitality',
  'manufacturing',
  'pharmaceutical',
  'power-energy',
  'retail',
  'oil-gas',
  'defence',
  'health-safety',
];

const products = [
  'mro-products',
  'instrumentation-automation',
  'packaging-solutions',
  'industrial-machinery',
  'corporate-gifts',
  'infrastructure-solutions',
];

export default function sitemap() {
  const mainPages = [
    '',
    '/about',
    '/services',
    '/products',
    '/industries',
    '/contact',
    '/privacy',
    '/terms',
  ];

  const servicePages = services.map(
    (slug) => `/services/${slug}`
  );

  const industryPages = industries.map(
    (slug) => `/industries/${slug}`
  );

  const productPages = products.map(
    (slug) => `/products/${slug}`
  );

  const allPages = [
    ...mainPages,
    ...servicePages,
    ...industryPages,
    ...productPages,
  ];

  return allPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
  }));
}