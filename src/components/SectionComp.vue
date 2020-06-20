<template>
  <section>
    <h1>{{ foundItem('sectionComp', id).name }}</h1>
    <draggable
      v-model="dragListFromVuex"
      class="comp-card-grid"
      group="comp"
      @change="log"
    >
      <comp-card
        v-for="comp in foundItem('sectionComp', id).compList"
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
      'foundItem',
    ]),
    dragListFromVuex: {
      get() {
        return this.foundItem('sectionComp', this.id).compList;
      },
      set(value) {
        console.log('compid', this.id, value);
      },
    },
  },
  methods: {
    // console 記得刪
    log() {
      console.table(this.foundItem('sectionComp', this.id).compList);
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
