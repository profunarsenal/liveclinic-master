import ServiceApi from '@/services/serviceApi';
const service = new ServiceApi();

export default {
  state () {
    return {
      articles: [],
    }
  },

  getters: {
    articles(state) {
      return state.articles;
    },

    sliderArticles: (state) =>  (id) => {
      return state.articles.filter((item) => item.id !== +id);
    },

    article: (state) =>  (id) => {
       return state.articles.find((item) => item.id === +id);
    }
  },
  
  mutations: {
    setArticles(state, articles) {
      state.articles = articles;
    }
  },

  actions: {
    async getArticles({commit}) {
      const articles = await service.articles.getArticles();
      commit('setArticles', articles);
    }
  }
}