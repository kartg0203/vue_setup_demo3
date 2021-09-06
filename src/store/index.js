import { createStore } from 'vuex'

export default createStore({
  state: {
    num1: 11,
    num2: 22,
  },
  getters: {
    double1(state) {
      return state.num1 * 2;
    }
  },
  mutations: {
    changenum1(state, payload) {
      state.num1 = payload;
    }
  },
  actions: {
    timecnum1({ commit }, payload) {
      setTimeout(() => {
        commit('changenum1', payload);
      }, 5000);
    }
  },
  modules: {
  }
})
