import { ActionType } from "./action";

export default function PartnerReducer(partner = [], action = {}) {
    switch (action.type) {
        case ActionType.GET_ALL_PARTNER:
            return partner = action.payload.partner
        case ActionType.CREATE_PARTNER:
            return partner = action.payload.partner
        case ActionType.EDIT_PARTNER:
            return partner = action.payload.partner
        case ActionType.REMOVE_PARTNER:
            return partner = action.payload.partner
        default:
            return partner;
    }
}