import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    compPool: [],
    propPool: [],
  },
  getters: {
    foundComp: (state) => (id) => state.compPool.find((item) => item.id === id),
    foundProp: (state) => (id) => state.propPool.find((item) => item.id === id),
  },
  mutations: {
    LOAD_STATE(state, obj) {
      state.compPool = obj.compPool;
      state.propPool = obj.propPool;
    },
  },
  actions: {},
  modules: {},
});
