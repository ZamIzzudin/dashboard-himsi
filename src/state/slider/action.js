const ActionType = {
    GET_ALL_SLIDER: 'GET_ALL_SLIDER',
    CREATE_SLIDER: 'CREATE_SLIDER',
    EDIT_SLIDER: 'EDIT_SLIDER',
    REMOVE_SLIDER: 'REMOVE_SLIDER'
}

function GetAllSliderAction(slider) {
    return {
        type: ActionType.GET_ALL_SLIDER,
        payload: {
            slider
        }
    }
}

function CreateSliderAction(slider) {
    return {
        type: ActionType.CREATE_SLIDER,
        payload: {
            slider
        }
    }
}

function EditSliderAction(slider) {
    return {
        type: ActionType.EDIT_SLIDER,
        payload: {
            slider
        }
    }
}

function RemoveSliderAction(slider) {
    return {
        type: ActionType.REMOVE_SLIDER,
        payload: {
            slider
        }
    }
}


export { ActionType, GetAllSliderAction, CreateSliderAction, EditSliderAction, RemoveSliderAction }