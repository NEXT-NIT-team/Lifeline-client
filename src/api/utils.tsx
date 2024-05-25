import axios, { AxiosHeaders, AxiosResponse } from 'axios';
import { useEffect } from 'react';
import useAuth from '../hooks/useAuth';


const instance = axios.create({
	baseURL: "http://192.168.1.99:3000/v1",
	timeout: 15000,
	headers: {
		'x-api-key': "4076dd20bc7d957a9132d66aecaae2cc",
	}
});


const response = (res: AxiosResponse) => res.data;


export const requests = {
	get: (url: string) => instance.get(url).then(response),
	post: (url: string, body: {}, headers?: any) => instance.post(url, body, { headers }).then(response),
	put: (url: string, body: {}, headers?: any) => instance.put(url, body, { headers }).then(response),
	delete: (url: string) => instance.delete(url).then(response),
};


const AxiosInterceptor = ({ children }: any) => {

  const {auth, isLogged} = useAuth()


	useEffect(() => {

		// @request interceptor
		const onRequest = (req: any) => {

			// client preferred language
			req.headers['accept-language'] = 'en';
			// jwt token
			if (isLogged && auth.tokens) req.headers.Authorization = 'Bearer ' + auth.tokens.accessToken;

			return req;
		}

		// @response interceptor 
		const onReponse = (res: any) => {
			return res.data;
		}

		// @error interceptor 
		const onError = (err: any) => {

			alert(JSON.stringify(err))
			// setSnack(err.response.data.message, {variant: Variant.DANGER});
			// setSnack(err.response?.data?.message || "something bad happend", { variant: Variant.DANGER, visible: true })

			console.log("\nStatus : " + err.response?.status + "\n Body : ")
			console.log(err)
			return Promise.reject(err);
		}

		const responseInterceptor = instance.interceptors.response.use(onReponse, onError);
		const requestInterceptor = instance.interceptors.request.use(onRequest, onError);

		return () => {
			instance.interceptors.response.eject(responseInterceptor);
			instance.interceptors.request.eject(requestInterceptor);
		}

	}, [auth, isLogged])

	return children;
}

export { AxiosInterceptor }