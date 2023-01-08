const ActionType = {
    GET_ALL_PARTNER: 'GET_ALL_PARTNER',
    CREATE_PARTNER: 'CREATE_PARTNER',
    EDIT_PARTNER: 'EDIT_PARTNER',
    REMOVE_PARTNER: 'REMOVE_PARTNER'
}

function GetAllPartnerAction(partner) {
    return {
        type: ActionType.GET_ALL_PARTNER,
        payload: {
            partner
        }
    }
}

function CreatePartnerAction(partner) {
    return {
        type: ActionType.CREATE_PARTNER,
        payload: {
            partner
        }
    }
}

function EditPartnerAction(partner) {
    return {
        type: ActionType.EDIT_PARTNER,
        payload: {
            partner
        }
    }
}

function RemovePartnerAction(partner) {
    return {
        type: ActionType.REMOVE_PARTNER,
        payload: {
            partner
        }
    }
}


export { ActionType, GetAllPartnerAction, CreatePartnerAction, EditPartnerAction, RemovePartnerAction }