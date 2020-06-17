import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sectionComp: Array,
    CompPool: Array,
    propPool: Array,
  },
  getters: {
    foundSectionComp: (state) => (id) => state.sectionComp.find((item) => item.id === id),
    foundComp: (state) => (id) => state.compPool.find((item) => item.id === id),
    foundProp: (state) => (id) => state.propPool.find((item) => item.id === id),
  },
  mutations: {
    LOAD_STATE(state, obj) {
      state.sectionComp = obj.sectionComp;
      state.compPool = obj.compPool;
      state.propPool = obj.propPool;
    },
  },
  actions: {},
  modules: {},
});
