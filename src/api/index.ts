import axios, { AxiosResponse } from "axios"
import { HubSpotLoginRequest, MessageServerResponse, UploadResumeRequest } from "./interfaces"

const path = (path: string) => process.env.SERVER_API + path

// AUTH
const hubspotLogin = (data: HubSpotLoginRequest): Promise<AxiosResponse<MessageServerResponse>> => 
  axios.post( path('/auth/hubspot-login'), data )

// CONTENT
const getLanguages = (): Promise<AxiosResponse<any>> => 
  axios.get( path('/content/languages') )

// FEEDBACK
const uploadResume = (data: UploadResumeRequest): Promise<AxiosResponse<MessageServerResponse>> => 
  axios.post( path('/feedback/resume'), data, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })

export const API = {
  hubspotLogin,
  getLanguages,
  uploadResume
}
