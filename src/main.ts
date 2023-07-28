import { createApp } from "vue";
import "@/assets/scss/global.scss";
import "@/assets/fonts/fonts.scss";
import App from "./App.vue";
/**
 * 状态管理
 */
import { createPinia } from "pinia";
import piniaPluginPersist from "pinia-plugin-persist";
import { getRouter } from "./router";

//element-ui
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

//ant-ui
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

createApp(App)
  .use(Antd)
  .use(ElementPlus)
  .use(getRouter())
  // 使用pinia代替vuex缓存
  .use(createPinia().use(piniaPluginPersist))
  .mount("#app");
