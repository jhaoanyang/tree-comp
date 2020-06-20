<template>
  <li>
    <div class="tree-card">
      <h3>
        {{ foundItem('treePool', id).name }}
      </h3>
      <hr>
      <draggable
        v-model="dragListFromVuex"
        group="comp"
        @change="log"
      >
        <comp-card
          v-for="comp in foundItem('treePool', id).compList"
          :id="comp.id"
          :key="comp.id"
        />
      </draggable>
      <hr>
    </div>
    <template
      v-if="foundItem('treePool', id).subTrees.length !== 0"
    >
      <ul>
        <tree-card
          v-for="tree in foundItem('treePool', id).subTrees"
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
      'foundItem',
    ]),
    dragListFromVuex: {
      get() {
        return this.foundItem('treePool', this.id).compList;
      },
      set(value) {
        console.log('treeid', this.id, value);
      },
    },
  },
  methods: {
    // console 記得刪
    log() {
      console.table(this.foundItem('treePool', this.id).compList);
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
