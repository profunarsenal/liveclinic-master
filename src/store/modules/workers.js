import ServiceApi from '@/services/serviceApi';
const service = new ServiceApi();

export default {
  state () {
    return {
      workers: [],
    }
  },

  getters: {
    workers(state) {
      return state.workers;
    },

    otherWorkers: (state) =>  (id) => {
      return state.workers.filter((item) => item.id !== +id);
    },

    worker: (state) =>  (id) => {
       return state.workers.find((item) => item.id === +id);
    }
  },
  
  mutations: {
    setWorkers(state, workers) {
      state.workers = workers;
    }
  },

  actions: {
    async getWorkers({commit}) {
      const workers = await service.workers.getWorkers();
      commit('setWorkers', workers);
    }
  }
}