<template>
  <div class="comp-card">
    <h3>
      {{ foundComp(id).name }}
    </h3>
    <hr>
    <draggable
      :list="foundComp(id).propList"
      group="a"
      @change="log"
    >
      <PropItem
        v-for="(prop) in foundComp(id).propList"
        :id="prop"
        :key="prop"
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
    id: {
      type: Number,
      default: NaN,
    },
  },
  computed: {
    ...mapState([
      'compPool',
    ]),
    ...mapGetters([
      'foundComp',
    ]),
  },
  methods: {
  // console 記得刪
    log() {
      console.table(this.compPool);
    },
  // console 記得刪
  },
};
</script>

<style>
.comp-card {
  background-color: #DAA520;
  border-radius: 10px;
  min-height: 200px;
  padding: 10px;
  width: 200px;
}
</style>
