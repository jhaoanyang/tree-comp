<template>
  <div class="home">
    <comp-card
      v-for="(comp, index) in compPool"
      :key="index"
      :comp-index="index"
    />
  </div>
</template>

<script>
import CompCard from '@/components/CompCard.vue';
import { mapState, mapMutations } from 'vuex';

import initState from './test-initState';

export default {
  name: 'Home',
  components: {
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
