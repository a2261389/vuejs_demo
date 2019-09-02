export default {
    SET_LOGIN_DATA(state, data) {
        state.token = data.token
        state.isLogin = true
    },
    SET_LOGOUT_DATA(state) {
        state.token = ''
    }
}