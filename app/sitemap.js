export default function sitemap() {
    const baseUrl = "https://www.rkvindustrialsolutions.com";

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/services`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/products`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/industries`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/privacy`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/terms`,
            lastModified: new Date(),
        },
    ];
}