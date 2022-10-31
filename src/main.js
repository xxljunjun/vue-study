import Vue from "vue";
import App from "./App.vue";
// import ElementUI from "element-ui";
import router from "./router";
import store from "./store/";
import http from "@/utils/api";
import "element-ui/lib/theme-chalk/index.css";
import "@/styles/element.scss";
import "@/styles/element-variables.scss";
import messagebox from "@/components/my-element/validate";
import animated from "animate.css";
import JsonExcel from "vue-json-excel"; //导出excel表格
import lottie from "vue-lottie";
import img from "@/utils/img";

Vue.use(animated);
// Vue.use(ElementUI);
Vue.component("downloadExcel", JsonExcel);
Vue.component("lottie", lottie);
Vue.prototype.$http = http;
Vue.prototype.$MessageBox = messagebox;
Vue.prototype.$img = img;
require("@/mock/index.js");

//事件总线通信
const eventBus = new Vue();
Vue.prototype.$eventBus = eventBus;
// 阻止启动生产消息
Vue.config.productionTip = false;

import {
  Pagination,
  Dialog,
  Menu,
  Submenu,
  Input,
  InputNumber,
  Radio,
  Checkbox,
  CheckboxGroup,
  Switch,
  Button,
  Table,
  TableColumn,
  Tooltip,
  Breadcrumb,
  BreadcrumbItem,
  Form,
  FormItem,
  Tabs,
  TabPane,
  Slider,
  Row,
  Col,
  Upload,
  Rate,
  Cascader,
  Transfer,
  Aside,
  Link,
  PageHeader,
  Badge,
  MenuItem,
  MenuItemGroup,
  Container,
  Header,
  Main,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DatePicker,
  Select
} from "element-ui";
Vue.use(Select);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
  Vue.use(Container)
Vue.use(Header)
Vue.use(Main);
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Pagination);
Vue.use(Badge);
Vue.use(Dialog);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(Input);
Vue.use(InputNumber);
Vue.use(Radio);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(Switch);
Vue.use(Button);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Tooltip);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Slider);
Vue.use(Row);
Vue.use(Col);
Vue.use(Upload);
Vue.use(Rate);
Vue.use(Cascader);
Vue.use(Transfer);
Vue.use(Aside);
Vue.use(Link);
Vue.use(PageHeader);
Vue.use(DatePicker);

// Vue.use(Loading.directive);

// Vue.prototype.$loading = Loading.service;
// Vue.prototype.$msgbox = MessageBox;
// Vue.prototype.$alert = MessageBox.alert;
// Vue.prototype.$confirm = MessageBox.confirm;
// Vue.prototype.$prompt = MessageBox.prompt;
// Vue.prototype.$notify = Notification;
// Vue.prototype.$message = Message;

// 根容器创建,Vue环境
new Vue({
  router,
  store,
  render: (h) => h(App),
  el: "#app",
});
