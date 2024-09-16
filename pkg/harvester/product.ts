//@ts-nocheck
import {
  NODE,
  CONFIG_MAP,
  NAMESPACE,
  VIRTUAL_TYPES,
  MANAGEMENT,
  PVC,
  NETWORK_ATTACHMENT,
  MONITORING,
  LOGGING,
  STORAGE_CLASS,
  SECRET
} from '@shell/config/types';
import {
  STATE,
  NAME_UNLINKED,
  NAME as NAME_COL,
  AGE,
  NAMESPACE as NAMESPACE_COL,
  LOGGING_OUTPUT_PROVIDERS,
  OUTPUT,
  CLUSTER_OUTPUT,
  CONFIGURED_PROVIDERS,
  SUB_TYPE,
  ADDRESS,
} from '@shell/config/table-headers';
import { HCI, VOLUME_SNAPSHOT } from './types';
import {
  IMAGE_DOWNLOAD_SIZE,
  FINGERPRINT,
  IMAGE_PROGRESS,
  SNAPSHOT_TARGET_VOLUME,
} from './config/table-headers';

const TEMPLATE = HCI.VM_VERSION;
const MONITORING_GROUP = 'Monitoring & Logging::Monitoring';
const LOGGING_GROUP = 'Monitoring & Logging::Logging';

export const PRODUCT_NAME = 'harvester';

export const IP_POOL_HEADERS = [
  STATE,
  NAME_COL,
  {
    name: 'subnet',
    labelKey: 'harvester.ipPool.subnet.label',
    value: 'subnetDisplay',
  },
  {
    name: 'availableIP',
    labelKey: 'harvester.ipPool.availableIP.label',
    value: 'status.available',
  },
  AGE
];