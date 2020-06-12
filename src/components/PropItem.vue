<template>
  <div class="prop-item">
    {{ propPool[propIndex] }}
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  props: {
    propIndex: {
      type: Number,
      default: NaN,
    },
  },
  computed: {
    ...mapState([
      'propPool',
    ]),
  },
};
</script>

<style>
    .prop-item {
      background-color: #FFD700;
      display: inline-block;
      padding: 5px 10px;
      margin: 5px;
    }
</style>
