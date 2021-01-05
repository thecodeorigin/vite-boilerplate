import { createStore } from 'vuex'
import { home } from './home'

export const store = createStore({
  state: () => {},
  getters: {},
  mutations: {},
  actions: {},
  // Import modules
  modules: {
    home,
  },
})
