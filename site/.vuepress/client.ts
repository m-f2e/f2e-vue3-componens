import { defineClientConfig } from '@vuepress/client'
// @ts-ignore
import uiDesign from "@m-f2e/vue3-ui";
import "@m-f2e/vue3-ui/style";

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.use(uiDesign);

  },
  setup() {},
  rootComponents: [],
})
