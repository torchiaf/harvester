<script>
import Loading from '@shell/components/Loading';
import { HCI } from '../../../../../types';
import NovncConsoleWrapper from '../../../../../components/novnc/NovncConsoleWrapper.vue';

export default {
  components: { NovncConsoleWrapper, Loading },

  async fetch() {
    this.rows = await this.$store.dispatch('harvester/findAll', { type: HCI.VMI });
  },

  data() {
    return { uid: this.$route.params.uid };
  },

  computed: {
    vmi() {
      const vmiList = this.$store.getters['harvester/all'](HCI.VMI) || [];

      const vmi = vmiList.find( (VMI) => {
        return VMI?.metadata?.ownerReferences?.[0]?.uid === this.uid;
      });

      return vmi;
    },
  },

  mounted() {
    window.addEventListener('beforeunload', () => {
      this.$refs.console.close();
    });
  },

  head() {
    return { title: this.vmi?.metadata?.name };
  },
};
</script>

<template>
  <Loading v-if="$fetchState.pending" />
  <NovncConsoleWrapper
    v-else
    ref="console"
    v-model:value="vmi"
    class="novnc-wrapper"
  />
</template>

<style>
HTML, BODY, MAIN, #__nuxt, #__layout, #app, .vm-console, .vm-console > DIV, .vm-console > DIV > DIV {
  height: 100%;
}
</style>
