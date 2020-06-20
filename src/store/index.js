import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {
    foundItem: (state) => (poolName, id) => state[poolName].find((item) => item.id === id),
  },
  mutations: {
    LOAD_STATE(state, obj) {
      Object.assign(state, obj);
    },
  },
  actions: {},
  modules: {},
});
