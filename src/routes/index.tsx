import { createFileRoute } from "@tanstack/react-router";
import { EditorialHome } from "@/components/editorial-home";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Olga Schetti — IT-Freiberuflerin" },
      {
        name: "description",
        content:
          "Onepage-Website und passende digitale Bausteine für kleine Unternehmen im DACH-Raum — verständlich und ohne Technikstress.",
      },
      { property: "og:title", content: "Olga Schetti — IT-Freiberuflerin" },
      {
        property: "og:description",
        content: "Ihr Unternehmen digital — ohne Stress. Website als Basis, Module nach Bedarf.",
      },
      { property: "og:url", content: "https://schetti.com/" },
    ],
    links: [
      { rel: "canonical", href: "https://schetti.com/" },
      { rel: "alternate", hrefLang: "de", href: "https://schetti.com/" },
      { rel: "alternate", hrefLang: "ru", href: "https://schetti.com/ru" },
      { rel: "alternate", hrefLang: "x-default", href: "https://schetti.com/" },
    ],
  }),
  component: () => <EditorialHome language="de" />,
});
