import { RouteRecordRaw } from 'vue-router';
import { PRODUCT_NAME } from '../config/harvester-manager';

import Root from '../pages/c/_cluster/index.vue';
import ListHarvesterMgrResource from '../pages/c/_cluster/_resource/index.vue';
import CreateHarvesterMgrResource from '../pages/c/_cluster/_resource/create.vue';
import ViewHarvesterMgrResource from '../pages/c/_cluster/_resource/_id.vue';
import ClusterListPage from '../list/harvesterhci.io.management.cluster.vue';

const routes = [
  {
    path:      '/harvesterManager/clusters',
    name:      `${ PRODUCT_NAME }-c-cluster-list-page`,
    component: ClusterListPage,
  },
];

export default routes;
