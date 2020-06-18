<template>
  <section>
    <h1>sec-tree</h1>
    <ul class="tree">
      <tree-card
        :id="0"
      />
    </ul>
  </section>
</template>

<script>
import TreeCard from '@/components/TreeCard.vue';

export default {
  components: {
    TreeCard,
  },
};
</script>

<style lang="scss">

.tree {
  text-align: center;

  ul {
    text-align: center;
    position: relative;
    padding: 1rem 0;
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 50%;
      border-left: 1px solid;
      width: 0;
      height: 1rem;
    }
  }

  li {
    display: inline-block;
    vertical-align: top;
    padding: 1rem .5rem 0 .5rem;
    position: relative;
    &::before,
    &::after {
      content: "";
      position: absolute;
      top: 0;
      right: 50%;
      border-top: 1px solid;
      width: 50%;
      height: 1rem;
    }
    &::after {
      right: auto;
      left: 50%;
      border-left: 1px solid;
    }

    &:only-child::after,
    &:only-child::before {
      display: none;
    }
    &:only-child {
      padding-top: 0;
    }

    &:first-child::before,
    &:last-child::after {
      border: 0 none;
    }
    &:first-child::after{
      border-radius: 5px 0 0 0;
    }
    &:last-child::before {
      border-right: 1px solid;
      border-radius: 0 5px 0 0;
    }
  }
}

</style>
