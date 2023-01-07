const ActionType = {
    GET_ALL_BIDANG: 'GET_ALL_BIDANG',
    CREATE_BIDANG: 'CREATE_BIDANG',
    EDIT_BIDANG: 'EDIT_BIDANG',
    REMOVE_BIDANG: 'REMOVE_BIDANG'
}

function GetAllBidangAction(bidang) {
    return {
        type: ActionType.GET_ALL_BIDANG,
        payload: {
            bidang
        }
    }
}

function CreateBidangAction(bidang) {
    return {
        type: ActionType.CREATE_BIDANG,
        payload: {
            bidang
        }
    }
}

function EditBidangAction(bidang) {
    return {
        type: ActionType.EDIT_BIDANG,
        payload: {
            bidang
        }
    }
}

function RemoveBidangAction(bidang) {
    return {
        type: ActionType.REMOVE_BIDANG,
        payload: {
            bidang
        }
    }
}

export { ActionType, GetAllBidangAction, CreateBidangAction, EditBidangAction, RemoveBidangAction }