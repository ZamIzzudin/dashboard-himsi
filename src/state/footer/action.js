const ActionType = {
    GET_INFO_FOOTER: 'GET_INFO_FOOTER',
    EDIT_INFO_FOOTER: 'EDIT_INFO_FOOTER'
}

function GetInfoFooterAction(data) {
    return {
        type: ActionType.GET_INFO_FOOTER,
        payload: {
            data
        }
    }
}

function EditInfoFooterAction(data) {
    return {
        type: ActionType.EDIT_INFO_FOOTER,
        payload: {
            data
        }
    }
}

export { ActionType, GetInfoFooterAction, EditInfoFooterAction }