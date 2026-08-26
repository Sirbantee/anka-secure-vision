import { createFileRoute } from "@tanstack/react-router";
import { NotFoundScreen } from "@/components/site/NotFoundScreen";

export const Route = createFileRoute("/$")({
  head: () => ({
    meta: [
      { title: "Page not found | ANKA Security Services" },
      { name: "robots", content: "noindex" },
      {
        name: "description",
        content: "This page could not be found on the ANKA Security Services website.",
      },
    ],
  }),
  component: NotFoundScreen,
});
