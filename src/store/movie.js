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
        },
        pushIntoMovies (state, movies) {
            state.movies.push(...movies)
        }
    },
    actions: {
        async searchMovies ({ state,commit }) {
            commit('updateState', {
                loading: true
            })
            const res = await axios.get(`http://www.omdbapi.com/?apikey=114d3b62&s=${state.title}&page=1`)         
            const pageLength = Math.ceil(res.data.totalResults / 10)

            commit('updateState', {
                movies: res.data.Search,
            })

            if (pageLength > 1) {
                for (let i =2; i <= pageLength; i += 1) {
                    if ( i > 4) break
                    const resMore = await axios.get(`http://www.omdbapi.com/?apikey=114d3b62&s=${state.title}&page=${i}`)
                    commit ('pushIntoMovies',resMore.data.Search)
                }
            }

            commit('updateState', {
                loading: false
            })
        }
    }
}