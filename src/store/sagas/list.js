import { call, put } from "redux-saga/effects";

import { services } from "../services";

import { Creators as ListActions } from "../actions/list";

const genericImage = "https://st2.depositphotos.com/1765488/7352/i/950/depositphotos_73528389-stock-photo-fresh-exotic-fruits-in-mercado.jpg";

export function* getImageRequest(action) {
    try {
        const image = yield call(services.getImages, action.product.product);
        yield put(ListActions.getImageSuccess(action.product, image));
    } catch(error) {
        console.log("Erro: " , error);
        yield put(ListActions.getImageFailure(action.product, genericImage));
    }
}