import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {
    foundTree: (state) => (id) => state.treePool.find((item) => item.id === id),
    foundSectionComp: (state) => (id) => state.sectionComp.find((item) => item.id === id),
    foundComp: (state) => (id) => state.compPool.find((item) => item.id === id),
    foundProp: (state) => (id) => state.propPool.find((item) => item.id === id),
  },
  mutations: {
    LOAD_STATE(state, obj) {
      Object.assign(state, obj);
    },
  },
  actions: {},
  modules: {},
});
