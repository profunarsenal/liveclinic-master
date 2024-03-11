import { createStore } from 'vuex';
import workers from '@/store/modules/workers';
import articles from '@/store/modules/articles';

export default createStore({
  state () {
    return {
      menuBurger: false,
      scrollToSection: false
    }
  },

  getters: {
    isOpenMenuBurger(state) {
      return state.menuBurger;
    },

    needScrollToSection(state) {
      return state.scrollToSection;
    }
  },

  mutations: {
    closeMenu(state) {
      state.menuBurger = false;
    },

    toggleMenu(state) {
      state.menuBurger = !state.menuBurger;
    },

    onScroll(state) {
      state.scrollToSection = true;
    },

    offScroll(state) {
      state.scrollToSection = false;
    }
  },

  modules: {
    articles,
    workers
  }
});