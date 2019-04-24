import { ActionContext, ActionTree } from "vuex"

import State from "./state"

const BASE_URL =
  "https://us-central1-goldenmountainrunnersco.cloudfunctions.net/webApi/api/v1"

// ActionTree<[current state], [root state]>
const actions: ActionTree<State, State> = {
  //   updateColor({ commit }: ActionContext<State, State>, newColor: string): void {
  //     commit(COLOR, newColor)
  //   },
  listEvents(
    { commit }: ActionContext<State, State>,
    events: Array<any>
  ): void {
    fetch(`${BASE_URL}/events/`)
      .then(response => response.json())
      .then(events => {
        console.log(Object.values(events.events))
        commit("listEvents", Object.values(events.events))
      })
  }
}

export default actions
