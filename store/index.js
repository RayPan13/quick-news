const state = () => {
    return {
        isOpen: false,
    }
}

const actions = {
    updateNav(context, status) {
        context.commit('toggleNav', status)
    },
}

const mutations = {
    toggleNav(state, payload) {
        state.isOpen = payload
    },
}

const getters = {
    // ...
}

export default {
    state,
    actions,
    mutations,
    getters,
    namespaced: true,
}
