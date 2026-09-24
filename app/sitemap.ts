import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.clarobalance.com",
      lastModified: new Date(),
    },
    {
      url: "https://www.clarobalance.com/psycholoog-hasselt",
      lastModified: new Date(),
    },
    {
      url: "https://www.clarobalance.com/coaching-hasselt",
      lastModified: new Date(),
    },
    {
      url: "https://www.clarobalance.com/burn-out-begeleiding-limburg",
      lastModified: new Date(),
    },
    {
      url: "https://www.clarobalance.com/relatiebegeleiding-hasselt",
      lastModified: new Date(),
    },
    {
  url: "https://www.clarobalance.com/ouder-en-gezinsbegeleiding-hasselt",
  lastModified: new Date(),
},
  ];
}