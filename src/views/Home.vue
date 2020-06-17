<template>
  <div class="home">
    <home-header />
    <section-tree />
    <section-comp
      v-for="section in sectionComp"
      :id="section.id"
      :key="section.id"
    />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

import HomeHeader from '@/components/HomeHeader.vue';
import SectionTree from '@/components/SectionTree.vue';
import SectionComp from '@/components/SectionComp.vue';

import initState from './test-initState';

export default {
  name: 'Home',
  components: {
    HomeHeader,
    SectionTree,
    SectionComp,
  },

  // 測試用
  data() {
    return {
      initState,
    };
  },
  // 開發測試用

  computed: {
    ...mapState([
      'sectionComp',
    ]),
  },
  mounted() {
    this.LOAD_STATE(initState);
  },
  methods: {
    ...mapMutations([
      'LOAD_STATE',
    ]),
  },
};
</script>

<style>
</style>
