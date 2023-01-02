const ActionType = {
    GET_CONTACT: 'GET_CONTACT',
    EDIT_CONTACT: 'EDIT_CONTACT',
    CREATE_CONTACT: 'CREATE_CONTACT',
    REMOVE_CONTACT: 'REMOVE_CONTACT'
}

function GetContactAction(contact) {
    return {
        type: ActionType.GET_CONTACT,
        payload: {
            contact
        }
    }
}

function CreateContactAction(contact) {
    return {
        type: ActionType.CREATE_CONTACT,
        payload: {
            contact
        }
    }
}

function EditContactAction(contact) {
    return {
        type: ActionType.EDIT_CONTACT,
        payload: {
            contact
        }
    }
}

function RemoveContactAction(contact) {
    return {
        type: ActionType.REMOVE_CONTACT,
        payload: {
            contact
        }
    }
}

export { ActionType, GetContactAction, CreateContactAction, EditContactAction, RemoveContactAction }