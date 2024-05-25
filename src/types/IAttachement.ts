
import IUser from "./IUser";

export const enum AttachmentAs {
  AVATAR = 'AVATAR',
  COVER = 'COVER',
  MESSAGE = 'MESSAGE',
  ECHOGRAPHIE = 'ECHOGRAPHIE',
  X_RAY = 'X-RAY',
  STATE = 'STATE',
}


export default interface IAttachement {
  _id: string;
  user: IUser;
  fieldname?: string;
  originalname?: string;
  encoding: string;
  mimetype: string,
  size?: number,
  destination?: string,
  filename?: string,
  path: string,
  createdAt: Date,
  as: AttachmentAs
}