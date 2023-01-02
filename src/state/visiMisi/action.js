const ActionType = {
    GET_VISI_MISI: 'GET_VISI_MISI',
    EDIT_VISI_MISI: 'EDIT_VISI_MISI'
}

function GetVisiMisiAction(visiMisi) {
    return {
        type: ActionType.GET_VISI_MISI,
        payload: {
            visiMisi
        }
    }
}

function EditVisiMisiAction(visiMisi) {
    return {
        type: ActionType.EDIT_VISI_MISI,
        payload: {
            visiMisi
        }
    }
}

export { ActionType, GetVisiMisiAction, EditVisiMisiAction }