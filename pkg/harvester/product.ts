import { IPlugin } from '@shell/core/types';
import { PRODUCT_NAME, BLANK_CLUSTER } from './config/harvester';

export function init($plugin: IPlugin, store: any) {
  const { product } = $plugin.DSL(store, PRODUCT_NAME);

  const isSingleProduct = process.env.rancherEnv === PRODUCT_NAME;

  product({
    inStore:               'management',
    showNamespaceFilter:   true,
    hideKubeShell:         true,
    hideKubeConfig:        true,
    showClusterSwitcher:   true,
    hideCopyConfig:        true,
    hideSystemResources:   true,
    hideNamespaceLocation: true,
    weight:                100,
    to:                    {
      name:      `${ PRODUCT_NAME }-c-cluster`,
      path:      `/${ PRODUCT_NAME }/c/:cluster`,
      params:      {
        product: PRODUCT_NAME,
        cluster: BLANK_CLUSTER,
        pkg:     PRODUCT_NAME
      }
    }
  });
}
