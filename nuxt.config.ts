// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["/assets/css/main.css"],
  app: {
    head: {
      title: "Reaction Time Test",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content:
            "Test and improve your reaction time with the Reaction Time Test web application.",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/flash.png" }],
    },
  },
})
