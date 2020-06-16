<template>
  <div class="prop-item">
    {{ foundProp(propId).name }}
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  props: {
    propId: {
      type: Number,
      default: NaN,
    },
  },
  computed: {
    ...mapState([
      'propPool',
    ]),
    ...mapGetters([
      'foundProp',
    ]),
  },
};
</script>

<style>
    .prop-item {
      background-color: #FFD700;
      border-radius: 5px;
      padding: 5px 10px;
      margin: 10px;
    }
</style>
