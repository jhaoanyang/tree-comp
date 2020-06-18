<template>
  <section>
    <h1>{{ foundSectionComp(id).name }}</h1>
    <draggable
      class="comp-card-grid"
      :list="foundSectionComp(id).compList"
      group="b"
      @change="log"
    >
      <comp-card
        v-for="comp in foundSectionComp(id).compList"
        :id="comp"
        :key="comp"
      />
    </draggable>
  </section>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import draggable from 'vuedraggable';

import CompCard from '@/components/CompCard.vue';

export default {
  components: {
    CompCard,
    draggable,
  },
  props: {
    id: {
      type: Number,
      default: NaN,
    },
  },
  computed: {
    ...mapState([
      'sectionComp',
    ]),
    ...mapGetters([
      'foundSectionComp',
    ]),
  },
  methods: {
    // console 記得刪
    log() {
      console.table(this.sectionComp);
    },
    // console 記得刪
  },
};
</script>

<style>
.comp-card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, 200px);
  grid-column-gap: 20px;
}
</style>
