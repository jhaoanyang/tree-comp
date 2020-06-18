import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    treePool: Array,
    sectionComp: Array,
    compPool: Array,
    propPool: Array,
  },
  getters: {
    foundTree: (state) => (id) => state.treePool.find((item) => item.id === id),
    foundSectionComp: (state) => (id) => state.sectionComp.find((item) => item.id === id),
    foundComp: (state) => (id) => state.compPool.find((item) => item.id === id),
    foundProp: (state) => (id) => state.propPool.find((item) => item.id === id),
  },
  mutations: {
    LOAD_STATE(state, obj) {
      state.treePool = obj.treePool;
      state.sectionComp = obj.sectionComp;
      state.compPool = obj.compPool;
      state.propPool = obj.propPool;
    },
  },
  actions: {},
  modules: {},
});
