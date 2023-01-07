import { ActionType } from "./action";

export default function PengurusReducer(pengurus = [], action = {}) {
    switch (action.type) {
        case ActionType.GET_ALL_PENGURUS:
            return pengurus = action.payload.pengurus
        case ActionType.CREATE_PENGURUS:
            return pengurus = action.payload.pengurus
        case ActionType.EDIT_PENGURUS:
            return pengurus = action.payload.pengurus
        case ActionType.REMOVE_PENGURUS:
            return pengurus = action.payload.pengurus
        default:
            return pengurus;
    }
}