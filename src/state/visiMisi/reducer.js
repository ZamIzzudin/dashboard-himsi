import { ActionType } from "./action";

export default function VisiMisiReducer(visiMisi = {}, action = {}) {
    switch (action.type) {
        case ActionType.GET_VISI_MISI:
            return visiMisi = action.payload.visiMisi
        case ActionType.EDIT_VISI_MISI:
            return visiMisi = action.payload.visiMisi
        default:
            return visiMisi;
    }
}