import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    compPool: ['title', 'searchbar'],
    propPool: ['API/GET', 'BUTTON'],
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
