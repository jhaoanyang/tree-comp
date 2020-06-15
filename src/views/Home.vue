<template>
  <div class="home">
    <home-header />
    <section>
      <comp-card
        v-for="comp in compPool"
        :key="comp.id"
        :comp-id="comp.id"
      />
    </section>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

import HomeHeader from '@/components/HomeHeader.vue';
import CompCard from '@/components/CompCard.vue';

import initState from './test-initState';

export default {
  name: 'Home',
  components: {
    HomeHeader,
    CompCard,
  },
  data() {
    return {
      initState,
    };
  },
  computed: {
    ...mapState([
      'compPool',
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
section {
  padding: 120px 20px;
}
</style>
