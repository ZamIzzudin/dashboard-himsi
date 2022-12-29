const ActionType = {
    GET_ALL_BERITA: 'GET_ALL_BERITA',
    CREATE_NEW_BERITA: 'CREATE_NEW_BERITA',
    EDIT_BERITA: 'EDIT_BERITA',
    REMOVE_BERITA: 'REMOVE_BERITA',
}

function GetAllBeritaAction(berita) {
    return {
        type: ActionType.GET_ALL_BERITA,
        payload: {
            berita
        }
    }
}

function CreateBeritaAction(berita) {
    return {
        type: ActionType.CREATE_NEW_BERITA,
        payload: {
            berita
        }
    }
}


function EditBeritaAction(berita) {
    return {
        type: ActionType.EDIT_BERITA,
        payload: {
            berita
        }
    }
}


function RemoveBeritaAction(berita) {
    return {
        type: ActionType.REMOVE_BERITA,
        payload: {
            berita
        }
    }
}


export { ActionType, GetAllBeritaAction, CreateBeritaAction, EditBeritaAction, RemoveBeritaAction }