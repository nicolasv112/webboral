import { SITE } from "@config";
import { defineCollection, z } from "astro:content";

const propuestas = defineCollection({
  schema: z.object({
    author: z.string().default(SITE.author),
    pubDatetime: z.date(),
    title: z.string(),
    modalidad: z.string(),
    ubicacion: z.string(),
    disponibilidad: z.string(),
    vacantes: z.number(),
    empresa: z.string(),
    tags: z.array(z.string()).default(["others"]),
    description: z.string(),
  }),
});

export const collections = { propuestas };
