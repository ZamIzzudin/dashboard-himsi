import { ActionType } from "./action";

export default function EventReducer(event = [], action = {}) {
    switch (action.type) {
        case ActionType.GET_ALL_EVENT:
            return event = action.payload.event
        case ActionType.CREATE_EVENT:
            return event = action.payload.event
        case ActionType.EDIT_EVENT:
            return event = action.payload.event
        case ActionType.REMOVE_EVENT:
            return event = action.payload.event
        default:
            return event;
    }
}