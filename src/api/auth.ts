import User from '../types/IUser';
import { requests } from './utils';

const AuthAPI = {
	status: (): Promise<any> => requests.get('auth/status'),
	exists: (email: string): Promise<any> => requests.get(`auth/exists/${email}`),
	existsTel: (tel: string): Promise<any> => requests.get(`auth/exists/phone/${tel}`),
	getSMS: (email: string): Promise<any> => requests.get(`auth/2factor/email/${email}`),

	login: (credentials: any): Promise<any> => requests.post('auth/login', credentials),
	signup: (user: User): Promise<any> => requests.post('auth/signup', user),
	refresh: (refreshToken: string): Promise<any> => requests.post('auth/refresh', refreshToken),
};

export default AuthAPI