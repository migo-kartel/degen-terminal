import axios from "axios";

export const getPortfolio = async (ethAddress: string) => {
    var username = process.env.NEXT_PUBLIC_ZERION_API_KEY;
    var password = '';
    var basicAuth = 'Basic ' + btoa(username + ':' + password);

    const options = {
        method: 'GET',
        url: `https://api.zerion.io/v1/wallets/${ethAddress}/portfolio`,
        headers: {
          accept: 'application/json',
          authorization: basicAuth
        }
    };
    
    return axios
        .request(options)
        .then(function (response) {
            return response.data.data;
        })
        .catch(function (error) {
            console.error(error);
            return null;
        });
}
