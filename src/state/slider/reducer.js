import { ActionType } from "./action";

export default function SliderReducer(slider = [], action = {}) {
    switch (action.type) {
        case ActionType.GET_ALL_SLIDER:
            return slider = action.payload.slider
        case ActionType.CREATE_SLIDER:
            return slider = action.payload.slider
        case ActionType.EDIT_SLIDER:
            return slider = action.payload.slider
        case ActionType.REMOVE_SLIDER:
            return slider = action.payload.slider
        default:
            return slider;
    }
}