import { Action } from "@ngrx/store";
import { Tutorial } from "./../models/tutorial.model";
import * as TutorialActions from "./../actions/tutorial.actions";

const initialState: Tutorial = {
  name: "First Tutorial",
  url: "http://google.com"
};

export function reducer(state: Tutorial[], action: TutorialActions.Actions) {
  switch (action.type) {
    case "[TUTORIAL] Add":
      return [...state, action.payload];
    default:
      return state;
  }
}
