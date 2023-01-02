import { ActionType } from "./action";

export default function HimpunanReducer(himpunan = {}, action = {}) {
    switch (action.type) {
        case ActionType.GET_DATA_HIMPUNAN:
            return himpunan = action.payload.data
        case ActionType.EDIT_DATA_HIMPUNAN:
            return himpunan = action.payload.data
        default:
            return himpunan;
    }
}