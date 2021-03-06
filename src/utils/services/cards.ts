import { Axios } from "../axios";
import {  ICardRq } from "../interfaces/models";
import { getJWT } from './../index';

export const getCards = async () => {
    const resp = await Axios.get('Card?flag=2', getJWT());

    return resp
};


export const getTypes = async () => {
    const resp = await Axios.get('Enum/GetCardTypes', getJWT());

    return resp
};

export const getStates = async () => {
    const resp = await Axios.get('Enum/GetCardStates', getJWT());

    return resp
};


export const addCardService = ({ numberVal, cvvVal,validVal,typeVal,
    expirationDateVal}: ICardRq) => {
    return Axios.post(`Card`,
        {
            number: numberVal,
            cvv: cvvVal,
            valid: validVal,
            type: typeVal,
            expirationDate: expirationDateVal
        },
        getJWT()
    );
}