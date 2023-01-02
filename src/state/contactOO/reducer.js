import { ActionType } from "./action";

export default function ContactReducer(contact = {}, action = {}) {
    switch (action.type) {
        case ActionType.GET_CONTACT:
            return contact = action.payload.contact
        case ActionType.CREATE_CONTACT:
            return contact = action.payload.contact
        case ActionType.REMOVE_CONTACT:
            return contact = action.payload.contact
        case ActionType.EDIT_CONTACT:
            return contact = action.payload.contact
        default:
            return contact;
    }
}