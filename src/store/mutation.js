export default {
    SET_LOGIN_DATA(state, data) {
        this.state.token = data.token
        this.state.isLogin = true
    },
    SET_LOGOUT_DATA(state) {
        this.state.token = ''
    }
}