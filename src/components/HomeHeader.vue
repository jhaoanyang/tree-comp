<template>
  <div>
    <header>
      <h1>Tree-Comp</h1>
      <div>
        <input
          type="file"
          accept=".json"
          @change="importHandleChange"
        >
        <button
          @click="exportHandleClick"
        >
          Export
        </button>
      </div>
    </header>
    <div class="back" />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  data() {
    let pool;
    return {
      pool,
    };
  },
  computed: {
    ...mapState([
      'compPool',
      'propPool',
    ]),
  },
  methods: {
    ...mapActions([
      'loadState',
    ]),
    importHandleChange(e) {
      const reader = new FileReader();
      reader.onload = (event) => {
        this.loadState(JSON.parse(event.target.result));
      };
      reader.readAsText(e.target.files[0]);
    },
    exportHandleClick() {
      const data = {
        compPool: this.compPool,
        propPool: this.propPool,
      };
      const url = `data:application/json;charset=utf-8,${encodeURIComponent(JSON.stringify(data))}`;
      const a = document.createElement('a');
      a.href = url;
      a.download = 'tree-comp.json';
      a.click();
    },
  },

};
</script>

<style lang="scss">
header {
  align-items: center;
  background-color: #d6efc7;
  display: flex;
  height: 100px;
  justify-content: space-between;
  padding: 20px;
  position: fixed;
  width: 100vw;
  z-index: 2;

  h1 {
    display: inline;
  }

  input {
    background-color: #96bb7c;
    border: 0px;
    margin: 10px;
    padding: 2px 10px;
  }

  button {
    background-color: #96bb7c;
    border: 0px;
    margin: 10px;
    padding: 5px 10px;
  }
}

.back {
  height: 100px;
}
</style>
