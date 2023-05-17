import { ObjectId } from "bson"

export type MongoId = ObjectId | string

export type Gender = 'Male' | 'Female'

export interface MessageServerResponse {
  message: string
}

export interface HubSpotLoginRequest {
  name: string,
  surname: string,
  email: string,
  gender: Gender
}