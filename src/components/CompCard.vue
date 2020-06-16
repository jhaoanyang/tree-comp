<template>
  <div class="comp-card">
    <h3>
      {{ foundComp(compId).name }}
    </h3>
    <hr>
    <draggable
      :list="foundComp(compId).propItems"
      group="a"
      @change="log"
    >
      <PropItem
        v-for="(prop) in foundComp(compId).propItems"
        :key="prop.id"
        :prop-id="prop.id"
      />
    </draggable>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import draggable from 'vuedraggable';

import PropItem from '@/components/PropItem.vue';

export default {
  components: {
    PropItem,
    draggable,
  },
  props: {
    compId: {
      type: Number,
      default: NaN,
    },
  },
  computed: {
    ...mapState([
      'compPool',
      'propPool',
    ]),
    ...mapGetters([
      'foundComp',
    ]),
  },
  methods: {
    log() {
      console.log(this.compPool);
    },
  },
};
</script>

<style>
.comp-card {
  background-color: #DAA520;
  display: inline-block;
  min-height: 200px;
  width: 200px;
  padding: 10px;
  margin: 10px;
}
</style>
