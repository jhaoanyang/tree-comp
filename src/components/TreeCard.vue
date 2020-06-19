<template>
  <li>
    <div class="tree-card">
      <h3>
        {{ foundTree(id).name }}
      </h3>
      <hr>
      <draggable
        v-model="dragListFromVuex"
        group="comp"
        @change="log"
      >
        <comp-card
          v-for="comp in foundTree(id).compList"
          :id="comp.id"
          :key="comp.id"
        />
      </draggable>
      <hr>
    </div>
    <template
      v-if="foundTree(id).subTrees.length !== 0"
    >
      <ul>
        <tree-card
          v-for="tree in foundTree(id).subTrees"
          :id="tree"
          :key="tree"
        />
      </ul>
    </template>
  </li>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import draggable from 'vuedraggable';

import CompCard from '@/components/CompCard.vue';

export default {
  name: 'TreeCard',
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
      'treePool',
    ]),
    ...mapGetters([
      'foundTree',
    ]),
    dragListFromVuex: {
      get() {
        return this.foundTree(this.id).compList;
      },
      set(value) {
        console.log('treeid', this.id, value);
      },
    },
  },
  methods: {
    // console 記得刪
    log() {
      console.table(this.foundTree(this.id).compList);
    },
    // console 記得刪
  },
};
</script>

<style lang="scss">
.tree-card {
  background-color: #96bb7c;
  border-radius: 10px;
  display: inline-block;
  min-height: 40px;
  padding: 10px;
  width: 240px;
}
</style>
