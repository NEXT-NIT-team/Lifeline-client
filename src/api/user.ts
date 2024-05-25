
import { requests } from './utils';

export const UserAPI = {
  reset: (): Promise<any> => requests.delete('user/change-password'),
  logout: (): Promise<any> => requests.delete('user/logout'),
  get: () => requests.get(`user`),
  findById: (id: string): Promise<any> => requests.get(`user/${id}`),
  setAvatar: (avatar: any): Promise<any> =>
    requests.post('user/update/avatar', avatar, { ['Content-Type']: 'multipart/form-data' }),
  identity: (form: FormData): Promise<any> => requests.post('user/identity', form),
};
