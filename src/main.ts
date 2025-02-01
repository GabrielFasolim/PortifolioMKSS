import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import "./index.css";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { faSquarePhone } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faLaptop } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

library.add(faEnvelope);
library.add(faBars);
library.add(faHouse);
library.add(faCircleInfo);
library.add(faBriefcase);
library.add(faUserGroup);
library.add(faSquarePhone);
library.add(faXmark);
library.add(faInstagram);
library.add(faLinkedinIn);
library.add(faLaptop);
library.add(faCode);
library.add(faMagnifyingGlass);

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);

app.use(ElementPlus).mount("#app");
