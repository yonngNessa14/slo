import axios from 'axios';
export const endPoint = 'https://dozie.com.ng/api/v1';

export const apiFunctions = {
    userLogin: async fd => postAPIsNoToken('rest-auth/login/', fd),
    getForums: async token => getAPIs('forums', token),
    getMyForum: async token => getAPIs('forums/my_forum', token),
    joinForum: async (token, fd) => postAPIs('forums/join_forum/', token, fd),
    getSecurities: async token => getAPIs('investments', token),
    mySecurities: async token => getAPIs('user_investments', token),
    transactionsHistory: async token => getAPIs('transactions', token),
    newTransaction: async (token, fd) =>
        postAPIs('investments/create_transaction/', token, fd),
    bankPaymentSecurity: async (token, fd) =>
        postAPIs('investments/create_bank_transfer_transaction/', token, fd),
    cardPaymentSecurity: async (token, fd) =>
        postAPIs('investments/pay_investment/', token, fd),
};

export const getAPIs = (path, token) => {
    return new Promise((resolve, reject) => {
        axios
            .get(`${endPoint}/${path}`, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `JWT ${token}`,
                },
            })
            .then(result => {
                resolve(result.data);
            })
            .catch(error =>
                reject({ status: 500, msg: 'Connection Error. Please try again later' }),
            );

        setTimeout(
            () =>
                reject({ status: 500, msg: 'Connection Error. Please try again later' }),
            10000,
        );
    });
};

export const postAPIs = (path, token, fd) => {
    return new Promise((resolve, reject) => {
        axios
            .post(`${endPoint}/${path}`, fd, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `JWT ${token}`,
                },
            })
            .then(result => {
                resolve(result.data);
            })
            .catch(error =>
                reject({ status: 500, msg: 'Connection Error. Please try again later' }),
            );

        setTimeout(
            () =>
                reject({ status: 500, msg: 'Connection Error. Please try again later' }),
            10000,
        );
    });
};

export const postAPIsNoToken = (path, fd) => {
    return new Promise((resolve, reject) => {
        axios
            .post(`${endPoint}/${path}`, fd, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then(result => {
                resolve(result.data);
            })
            .catch(error =>
                reject({ status: 500, msg: 'Connection Error. Please try again later' }),
            );

        setTimeout(
            () =>
                reject({ status: 500, msg: 'Connection Error. Please try again later' }),
            10000,
        );
    });
};
