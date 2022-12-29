import { ActionType } from "./action";

export default function CollageLinkReducer(collageLink = [], action = {}) {
    switch (action.type) {
        case ActionType.GET_ALL_LINK:
            return collageLink = action.payload.link
        case ActionType.CREATE_NEW_LINK:
            return collageLink = action.payload.link
        case ActionType.EDIT_LINK:
            return collageLink = action.payload.link
        case ActionType.REMOVE_LINK:
            return collageLink = action.payload.link
        default:
            return collageLink;
    }
}