import { ActionType } from "./action";

export default function BeritaReducer(berita = [], action = {}) {
    switch (action.type) {
        case ActionType.GET_ALL_BERITA:
            return berita = action.payload.berita
        case ActionType.CREATE_NEW_BERITA:
            return berita = action.payload.berita
        case ActionType.EDIT_BERITA:
            return berita = action.payload.berita
        case ActionType.REMOVE_BERITA:
            return berita = action.payload.berita
        default:
            return berita;
    }
}