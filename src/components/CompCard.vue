<template>
  <div class="comp-card">
    <h3>
      {{ foundComp.name }}
    </h3>
    <hr>
    <draggable>
      <PropItem
        v-for="(prop, index) in foundComp.propItems"
        :key="index"
        :prop="prop"
      />
    </draggable>
  </div>
</template>

<script>
import { mapState } from 'vuex';
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
    foundComp() {
      return this.compPool.find((item) => item.id === this.compId);
    },
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
