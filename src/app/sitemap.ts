import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://paganicustomfloripa.com.br";

  const routes = [
    "",
    "/sobre",
    "/servicos",
    "/portfolio",
    "/contato",
    "/angel-eyes",
    "/instalacao-de-drl",
    "/mascara-negra",
    "/projetor-biled",
    "/restauracao-de-farol",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
