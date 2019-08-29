import '../plugins/axios'

export default {
    login(context, data) {
        if (data === {}) return
        return axios.post(process.env.VUE_APP_API_URL + '/user', {
            account: data.loginName,
            password: data.loginPassword,
        })
            .then(function (response) {
                if (response.status === 200) {
                    context.commit('SET_LOGIN_DATA', response.data)
                    return 200
                }
            })
            .catch(function (error) {
                console.log(error);
                return error
            });
    },
    logout(state) {
        state.commit('SET_LOGOUT_DATA')
    }
}