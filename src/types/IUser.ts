import IAttachement from "./IAttachement";

export default interface IUser {
  _id: string;
  firstname: string;
  lastname: string;
  name: string;
  tel: number;
  email: string;
  role: string;
  password: string;
  verified: boolean;
  enabled: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  details: {
    isMale: boolean;
    followed_doctors: IUser[],
    docs: IAttachement[]
    blood_presure: number[]
    blood_sugar_level: number
    height: number
    weight: number
  }
}