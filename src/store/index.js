
import { createStore } from 'vuex'

const store = createStore({
    state () {
        return {
            mobile: '',
            userMess:{},
            userMenu:{}
        }
    },
    mutations: {
        set_mobile(state,payload){
            state.mobile = payload;
        },
        set_userMess(state,payload){
            state.userMess = payload;
        },
        set_userMenu(state,payload){
            state.userMenu = payload;
        }
    }
})
export default store