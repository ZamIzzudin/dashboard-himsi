const ActionType = {
    GET_ALL_FAQ: 'GET_ALL_FAQ',
    CREATE_NEW_FAQ: 'CREATE_NEW_FAQ',
    EDIT_FAQ: 'EDIT_FAQ',
    REMOVE_FAQ: 'REMOVE_FAQ'
}

function GetAllFAQAction(faq) {
    return {
        type: ActionType.GET_ALL_FAQ,
        payload: { faq }
    }
}

function CreateFAQAction(faq) {
    return {
        type: ActionType.CREATE_NEW_FAQ,
        payload: { faq }
    }
}
function EditFAQAction(faq) {
    return {
        type: ActionType.EDIT_FAQ,
        payload: { faq }
    }
}
function RemoveFAQAction(faq) {
    return {
        type: ActionType.REMOVE_FAQ,
        payload: { faq }
    }
}

export { ActionType, GetAllFAQAction, CreateFAQAction, EditFAQAction, RemoveFAQAction }