import {createStore} from 'vuex';
import authModule from "./modules/auth";
import shopModule from "@/store/modules/shop";

const store = createStore({
    modules:{
        auth: authModule,
        shop: shopModule
    }

})

export default store;