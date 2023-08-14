import axios, { AxiosResponse } from "axios"
import { FeedbackRequest, HubSpotLoginRequest, LoginRequest, LoginServerResponse, MessageServerResponse, UploadResumeRequest } from "./interfaces"

const path = (path: string) => process.env.SERVER_API + path

// AUTH
const hubspotLogin = (data: HubSpotLoginRequest): Promise<AxiosResponse<MessageServerResponse>> => 
  axios.post( path('/auth/hubspot-login'), data )

const login = (data: LoginRequest): Promise<AxiosResponse<LoginServerResponse>> => 
  axios.post( path('/auth/login'), data )


// CONTENT
const getLanguages = (): Promise<AxiosResponse<any>> => 
  axios.get( path('/content/languages') )

const setLanguages = (data: Object): Promise<AxiosResponse<any>> => 
  axios.put( path('/content/languages/update'), data )

// FEEDBACK
const uploadResume = (data: UploadResumeRequest): Promise<AxiosResponse<MessageServerResponse>> => 
  axios.post( path('/feedback/resume'), data, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
  
const contactUs = (data: FeedbackRequest): Promise<AxiosResponse<MessageServerResponse>> => 
  axios.post( path('/feedback/contact-us'), data)

export const API = {
  hubspotLogin,
  getLanguages,
  uploadResume,
  contactUs,
  login,
  setLanguages
}
