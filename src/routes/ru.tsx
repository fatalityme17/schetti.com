import { createFileRoute } from "@tanstack/react-router";
import { EditorialHome } from "@/components/editorial-home";

export const Route = createFileRoute("/ru")({
  head: () => ({
    meta: [
      { title: "Ольга Щетти — ИТ-Фрилансер" },
      {
        name: "description",
        content:
          "Одностраничный сайт и подходящие цифровые модули для малого бизнеса в регионе DACH — понятно и без технического стресса.",
      },
      { property: "og:title", content: "Ольга Щетти — ИТ-Фрилансер" },
      {
        property: "og:description",
        content: "Ваш бизнес онлайн — без стресса. Сайт как основа, модули по потребности.",
      },
      { property: "og:url", content: "https://schetti.com/ru" },
    ],
    links: [
      { rel: "canonical", href: "https://schetti.com/ru" },
      { rel: "alternate", hrefLang: "de", href: "https://schetti.com/" },
      { rel: "alternate", hrefLang: "ru", href: "https://schetti.com/ru" },
      { rel: "alternate", hrefLang: "x-default", href: "https://schetti.com/" },
    ],
  }),
  component: () => <EditorialHome language="ru" />,
});
