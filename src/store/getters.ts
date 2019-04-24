import { GetterTree } from "vuex"

import State from "./state"

// GetterTree<[current state], [root state]>
const getters: GetterTree<State, State> = {
  events(state: State): Array<any> {
    return state.events
  }
}

export default getters
