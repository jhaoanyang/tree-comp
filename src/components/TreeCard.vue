<template>
  <li>
    <div>
      {{ foundTree(id).name }}
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

export default {
  name: 'TreeCard',
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
  },
};
</script>

<style scoped>
div {
  border: .5px solid;
  display: inline-block;
  height: 240px;
  padding: .2rem .5rem;
  text-align: center;
  width: 240px;
}
</style>
