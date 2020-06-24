import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    treePool: [],
    sectionComp: [],
    compPool: [],
    propPool: [],
  },
  getters: {
    foundItem: (state) => (poolName, id) => state[poolName].find((item) => item.id === id),
  },
  mutations: {
    LOAD_STATE(state, payload) {
      Object.assign(state, payload);
    },
    UPLOAD_LIST(state, { payload, getters }) {
      const {
        poolName, id, listName, newList,
      } = payload;
      getters.foundItem(poolName, id)[listName] = newList;
    },
  },
  actions: {
    loadState({ commit }, payload) {
      commit('LOAD_STATE', { payload });
    },
    uploadList({ commit, getters }, payload) {
      commit('UPLOAD_LIST', { payload, getters });
    },
  },
  modules: {},
});
