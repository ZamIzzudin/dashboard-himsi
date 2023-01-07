import { ActionType } from "./action";

export default function DivisiReducer(divisi = [], action = {}) {
    switch (action.type) {
        case ActionType.GET_ALL_DIVISI:
            return divisi = action.payload.divisi
        case ActionType.CREATE_DIVISI:
            return divisi = action.payload.divisi
        case ActionType.EDIT_DIVISI:
            return divisi = action.payload.divisi
        case ActionType.REMOVE_DIVISI:
            return divisi = action.payload.divisi
        default:
            return divisi;
    }
}