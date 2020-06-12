<template>
  <div class="comp-card">
    {{ compPool[compIndex] }}
    <hr>
    <draggable>
      <PropItem
        v-for="(prop, index) in propPool"
        :key="index"
        :prop-index="index"
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
    compIndex: {
      type: Number,
      default: NaN,
    },
  },
  computed: {
    ...mapState([
      'compPool',
      'propPool',
    ]),
  },
};
</script>

<style>
.comp-card {
  background-color: #DAA520;
  min-height: 200px;
  width: 400px;
  padding: 10px;
  margin: 10px;
}
</style>
