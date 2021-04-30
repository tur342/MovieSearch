import axios from 'axios'

export default {
    namespaced: true,
    state: () => ({
        title: '',
        loading: false,
        movies: []
    }),
    getters: {},
    mutations: {
        updateState (state, payload) {
            Object.keys(payload).forEach(key => {
                state[key] = payload[key]
            })
        }
    },
    actions: {
        async searchMovies ({ state,commit }) {
            commit('updateState', {
                loading: true
            })
            const res = await axios.get(`http://www.omdbapi.com/?apikey=114d3b62&s=${state.title}`)         
            
            commit('updateState', {
                movies: res.data.Search,
                loading: false
            })
        }
    }
}