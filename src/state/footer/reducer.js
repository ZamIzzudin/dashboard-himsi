import { ActionType } from "./action";

export default function FooterReducer(footer = {}, action = {}) {
    switch (action.type) {
        case ActionType.GET_INFO_FOOTER:
            return footer = action.payload.data
        case ActionType.EDIT_INFO_FOOTER:
            return footer = action.payload.data
        default:
            return footer;
    }
}