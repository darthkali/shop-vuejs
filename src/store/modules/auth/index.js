import axios from "axios";

const apikey = process.env.VUE_APP_FIREBASE_WEB_API_KEY
let timer

const state = {
    userId: null,
    token: null,
}

const mutations = {
    setUser(state, payload) {
        state.userId = payload.userId;
        state.token = payload.token;
    }
}

const actions = {
    auth(context, payload) {
        let url = ""
        if (payload.mode === "signin") {
            url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apikey}`
        } else if (payload.mode === "signup") {
            url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apikey}`
        } else {
            return
        }
        const authDO = {
            email: payload.email,
            password: payload.password,
            returnSecureToken: true
        }
        return axios.post(url, authDO)
            .then((response) => {

                // const expiresIn = Number(response.data.expiresIn) * 1000;
                const expiresIn = 3 * 1000;
                const expDate = new Date().getTime() + expiresIn;

                // Daten im LocalStorage speichern
                localStorage.setItem("userId", response.data.localId);
                localStorage.setItem("token", response.data.idToken);
                localStorage.setItem("expiresIn", expDate);

                timer = setTimeout(() => {
                    context.dispatch("autoSignout");
                }, expiresIn);

                context.commit("setUser", {
                    userId: response.data.localId,
                    token: response.data.idToken
                })
            })
            .catch(error => {
                // https://firebase.google.com/docs/reference/rest/auth#section-error-format
                throw new Error(error.response.data.error.message || 'UNKNOWN_ERROR');
            })
    }
    ,

    signup(context, payload) {
        const signupDO = {
            ...payload,
            mode: "signup"
        }
        return context.dispatch("auth", signupDO)
    }
    ,

    signin(context, payload) {
        const signinDO = {
            ...payload,
            mode: "signin"
        }
        return context.dispatch("auth", signinDO)
    },

    signout(context) {
        localStorage.removeItem("userId");
        localStorage.removeItem("token");
        localStorage.removeItem("expiresIn");

        clearTimeout(timer)

        context.commit("setUser", {
            userId: null,
            token: null
        })
    },


    autoSignout(context) {
        context.dispatch("signout");
    }

}
const getters = {}

const authModule = {
    state,
    mutations,
    actions,
    getters
}

export default authModule