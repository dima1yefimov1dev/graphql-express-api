import { ObjectId } from "mongodb";

export interface ICreateProduct {
  title: string,
  description: string,
  price: string,
}

export interface ICreateUser {
  name: string,
  username: string,
  password: string,
  email: string,
}

export interface IPayload {
  id: string | ObjectId,
  username: string
}

export interface ILogin extends Omit<ICreateUser, 'email' | 'name'> {
};