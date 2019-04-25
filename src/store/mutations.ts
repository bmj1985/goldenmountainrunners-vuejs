import { MutationTree } from "vuex"

import State from "./state"

const mutations: MutationTree<State> = {
    listEvents(state: State, payload: Array<any>) {
        state.events = payload
    }
}

export default mutations
