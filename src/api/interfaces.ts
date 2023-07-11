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

export interface UploadResumeRequest {
  name: string,
  surname: string,
  email: string,
  resume: File | null,
  coveringLetter: string
}

export interface LoginRequest {
  login: string,
  password: string
}

export interface LoginServerResponse {
  token: string,
  message: string
}