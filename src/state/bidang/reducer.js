import { ActionType } from "./action";

export default function BidangReducer(bidang = [], action = {}) {
    switch (action.type) {
        case ActionType.GET_ALL_BIDANG:
            return bidang = action.payload.bidang
        case ActionType.CREATE_BIDANG:
            return bidang = action.payload.bidang
        case ActionType.EDIT_BIDANG:
            return bidang = action.payload.bidang
        case ActionType.REMOVE_BIDANG:
            return bidang = action.payload.bidang
        default:
            return bidang;
    }
}