// 定义一个state
const state = {
    count : 0
}

const mutations = {
    ChangeCount: () => {
        state.count = state.count + 1 
    }
}

export default {
    namespaced: true,
    state,
    mutations
}