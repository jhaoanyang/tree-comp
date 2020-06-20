<template>
  <div class="prop-item">
    {{ foundItem('propPool', id).name }}
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  props: {
    id: {
      type: Number,
      default: NaN,
    },
  },
  computed: {
    ...mapState([
      'propPool',
    ]),
    ...mapGetters([
      'foundItem',
    ]),
  },
};
</script>

<style>
    .prop-item {
      background-color: #FFD700;
      border-radius: 5px;
      height: 30px;
      padding: 5px 10px;
      margin: 10px;
    }
</style>
