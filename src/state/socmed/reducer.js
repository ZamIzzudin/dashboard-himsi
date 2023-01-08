import { ActionType } from "./action";

export default function SocmedReducer(socmed = [], action = {}) {
    switch (action.type) {
        case ActionType.GET_ALL_SOCMED:
            return socmed = action.payload.socmed
        case ActionType.EDIT_SOCMED:
            return socmed = action.payload.socmed
        default:
            return socmed
    }
}