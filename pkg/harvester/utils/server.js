import semver from 'semver';
import { HCI } from '../types';

export function serverVersion(getters) {
  if (process.env.VUE_APP_SERVER_VERSION) {
    return process.env.VUE_APP_SERVER_VERSION;
  }

  try {
    const v = getters['harvester/byId'](HCI.SETTING, 'server-version')?.value;

    return `v-${semver.major(v)}.${semver.minor(v)}.${semver.patch(v)}`;
  } catch (error) {}

  return '';
}

