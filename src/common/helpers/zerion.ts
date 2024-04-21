import axios from "axios";

export const getPortfolio = async (ethAddress: string) => {
    const url = process.env.NEXT_PUBLIC_ZERION_URL;
    const options = {
        method: 'GET',
        url: `${url}/crypto-wallet/${ethAddress}`,
        headers: {
          accept: 'application/json',
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
