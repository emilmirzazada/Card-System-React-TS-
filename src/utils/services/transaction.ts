import { Axios } from "../axios";
import {  IDepositRq, IWithdrawRq } from "../interfaces/models";
import { getJWT, getUserId } from './../index';


export const getCards = async (flag:any) => {
    const resp = await Axios.get(`Card?flag=${flag}`, getJWT());

    return resp
};

export const getVendors = async () => {
    const resp = await Axios.get('Vendor', getJWT());

    return resp
};


export const getTransactions = async (id: any) => {
    const resp = await Axios.get(`Transaction?userId=${id}`, getJWT());

    return resp
};

export const addDepositService = ({ amount,cardVal: selectedCard,vendorVal:selectedVendor}: IDepositRq) => {
    return Axios.post(`Deposit`,
        {
            cardId: selectedCard,
            vendorId: selectedVendor,
            amount: amount,
            status: 0,
            type: 0,
            clientId: getUserId()
        },
        getJWT()
    );
}


export const withdrawService = ({ amount,cardVal: selectedCard,vendorVal:selectedVendor}: IWithdrawRq) => {
    return Axios.post(`Withdraw`,
        {
            cardId: selectedCard,
            vendorId: selectedVendor,
            amount: amount,
            status: 0,
            type: 1,
            clientId: getUserId()
        },
        getJWT()
    );
}