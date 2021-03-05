import stocks from '../../data/stocks'

export default {
    state:{
        stocks:[]
    },
    mutations:{
        setStocks(state, stocks){
            state.stocks = stocks
        },
        randomizeStocks(state){
            state.stocks.forEach(stc => {
                stc.price = Math.random(stc.price * (1 + Math.random() - 0.45))
            });
        }
    },
    actions: {
        buyStock({ commit }, order){
           commit('buyStock', order) 
        },
        initStocks({commit}){
            commit('setStocks', stocks)
        },
        randomizeStocks({ commit }){
            commit('randomizeStocks')
        }
    },
    getters:{
        stocks(state){
            return state.stocks
        }
    }
}