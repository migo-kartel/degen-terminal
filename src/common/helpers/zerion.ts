import axios from "axios";

export const getPortfolio = async (ethAddress: string) => {
    const url = process.env.NEXT_PUBLIC_ZERION_URL;
    const username = process.env.NEXT_PUBLIC_ZERION_API_KEY;
    const password = '';
    const basicAuth = 'Basic ' + btoa(username + ':' + password);

    const options = {
        method: 'GET',
        url: `${url}/crypto-wallet/${ethAddress}`,
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
