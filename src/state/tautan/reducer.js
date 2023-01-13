import { ActionType } from "./action";

export default function TautanReducer(tautan = [], action = {}) {
    switch (action.type) {
        case ActionType.GET_ALL_TAUTAN:
            return tautan = action.payload.link
        case ActionType.CREATE_NEW_TAUTAN:
            return tautan = action.payload.link
        case ActionType.EDIT_TAUTAN:
            return tautan = action.payload.link
        case ActionType.REMOVE_TAUTAN:
            return tautan = action.payload.link
        default:
            return tautan;
    }
}