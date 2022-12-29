import { ActionType } from "./action";

export default function UserReducer(users = [], action = {}) {
    switch (action.type) {
        case ActionType.GET_ALL_USER:
            return users = action.payload.users
        case ActionType.EDIT_ACCESS_USER:
            return users = action.payload.users
        case ActionType.MAKE_NEW_USER_ACCESS:
            return users = action.payload.users
        case ActionType.REMOVE_USER_ACCESS:
            return users = action.payload.users
        default:
            return users;
    }
}