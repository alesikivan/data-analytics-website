import axios, { AxiosResponse } from "axios"
import { HubSpotLoginRequest, MessageServerResponse } from "./interfaces"

const path = (path: string) => process.env.SERVER_API + path

// AUTH
const hubspotLogin = (data: HubSpotLoginRequest): Promise<AxiosResponse<MessageServerResponse>> => 
  axios.post( path('/auth/hubspot-login'), data )

export const API = {
  hubspotLogin
}
