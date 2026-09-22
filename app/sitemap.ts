import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://clarobalance.com",
      lastModified: new Date(),
    },
    {
      url: "https://clarobalance.com/psycholoog-hasselt",
      lastModified: new Date(),
    },
    {
      url: "https://clarobalance.com/coaching-hasselt",
      lastModified: new Date(),
    },
    {
      url: "https://clarobalance.com/burn-out-begeleiding-limburg",
      lastModified: new Date(),
    },
    {
      url: "https://clarobalance.com/relatiebegeleiding-hasselt",
      lastModified: new Date(),
    },
    {
  url: "https://clarobalance.com/ouder-en-gezinsbegeleiding-hasselt",
  lastModified: new Date(),
},
  ];
}