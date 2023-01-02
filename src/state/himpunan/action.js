const ActionType = {
    GET_DATA_HIMPUNAN: 'GET_DATA_HIMPUNAN',
    EDIT_DATA_HIMPUNAN: 'EDIT_DATA_HIMPUNAN'
}

function GetDataHimpunanAction(data) {
    return {
        type: ActionType.GET_DATA_HIMPUNAN,
        payload: {
            data
        }
    }
}

function EditDataHimpunanAction(data) {
    return {
        type: ActionType.EDIT_DATA_HIMPUNAN,
        payload: {
            data
        }
    }
}

export { ActionType, GetDataHimpunanAction, EditDataHimpunanAction }