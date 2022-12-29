const ActionType = {
    GET_ALL_LINK: 'GET_ALL_LINK',
    CREATE_NEW_LINK: 'CREATE_NEW_LINK',
    EDIT_LINK: 'EDIT_LINK',
    REMOVE_LINK: 'REMOVE_LINK'
}

function GetAllLinkAction(link) {
    return {
        type: ActionType.GET_ALL_LINK,
        payload: { link }
    }
}

function CreateLinkAction(link) {
    return {
        type: ActionType.CREATE_NEW_LINK,
        payload: { link }
    }
}
function EditLinkAction(link) {
    return {
        type: ActionType.EDIT_LINK,
        payload: { link }
    }
}
function RemoveLinkAction(link) {
    return {
        type: ActionType.REMOVE_LINK,
        payload: { link }
    }
}

export { ActionType, GetAllLinkAction, CreateLinkAction, EditLinkAction, RemoveLinkAction }