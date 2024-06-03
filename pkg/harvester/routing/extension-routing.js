// Don't forget to create a VueJS page called index.vue in the /pages folder!!!
import Dashboard from '../pages/index.vue';
import Home from '../list/harvesterhci.io.dashboard.vue';
import { PRODUCT_NAME, BLANK_CLUSTER } from '../config/harvester';

const routes = [
  {
    name:      `${ PRODUCT_NAME }-c-cluster`,
    path:      `/${ PRODUCT_NAME }/c/:cluster`,
    component: Home,
    meta:      {
      product: PRODUCT_NAME,
      cluster: BLANK_CLUSTER,
      pkg:     PRODUCT_NAME
    }
  }
];

export default routes;
