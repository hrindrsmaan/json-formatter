// src/components/json-ld.tsx
type WebApplicationStructuredData = {
  "@context": "https://schema.org";
  "@type": "WebApplication";
  name: string;
  description: string;
  applicationCategory: string;
  operatingSystem: string;
  offers: {
    "@type": "Offer";
    price: string;
    priceCurrency: string;
  };
  featureList: string[];
};

export function JsonLd({ data }: { data: WebApplicationStructuredData }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
