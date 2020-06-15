<template>
  <div class="prop-item">
    {{ prop.name }}
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  props: {
    prop: {
      type: Object,
      default: null,
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
      border-radius: 5px;
      padding: 5px 10px;
      margin: 10px;
    }
</style>
