import { mainEndpoint } from "../constants/endpoint";

export const optionInterceptor = async (options: any) => {
    const opt = {...options};
    let token = '';

    const authorizationHeader = `Bearer ${token}`;

    opt.headers = {
        'Content-Type': 'application/json',
        Authorization: authorizationHeader,
        ...opt.headers,
    }
    return opt;
}

export const combineRequestData = async (
    httpResponse: Response,
): Promise <any> => {
    if([200, 201, 204].includes(httpResponse.status) === false){
        try{
            const res = await httpResponse.json();
            throw new Error (JSON.stringify(res));
        }catch(e: any) {
            throw new Error (`${httpResponse.status}: ${e.message}`);
        }
    }
    return httpResponse.json();
}

export const fetcher = async (path: string, options?: any) => {
    const requestOptions = await optionInterceptor(options);

    return fetch(`${mainEndpoint}${path}`, requestOptions);    
};

export default fetcher;