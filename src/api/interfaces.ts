import { ObjectId } from "bson"

export type MongoId = ObjectId | string

export type ClientGender = 'Male' | 'Female' | 'Diverse'
export type ClientType = 'Student' | 'Company'

export interface MessageServerResponse {
  message: string
}

export interface HubSpotLoginRequest {
  name: string,
  surname: string,
  email: string,
  gender: ClientGender,
  type: ClientType
}