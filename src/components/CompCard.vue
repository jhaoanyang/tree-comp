<template>
  <div class="comp-card">
    <h3>
      {{ foundComp(id).name }}
    </h3>
    <hr>
    <draggable
      v-model="dragListFromVuex"
      group="prop"
      @change="log(id)"
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
    dragListFromVuex: {
      get() {
        return this.foundComp(this.id).propList;
      },
      set(value) {
        console.log('cardid', this.id, value);
      },
    },
  },
  methods: {
  // console 記得刪
    log() {
      console.table(this.foundComp(this.id).propList);
    },
  // console 記得刪
  },
};
</script>

<style>
.comp-card {
  background-color: #eebb4d;
  border-radius: 10px;
  display: inline-block;
  margin: 10px;
  min-height: 200px;
  padding: 10px;
  width: 200px;
}
</style>
