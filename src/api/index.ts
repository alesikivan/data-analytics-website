import axios, { AxiosResponse } from "axios"
import { FeedbackRequest, HubSpotLoginRequest, LoginRequest, LoginServerResponse, MessageServerResponse, News, UploadResumeRequest } from "./interfaces"

const getWebsiteUrl = () => {
  const website = `${location.origin}/api`

  if (website.includes('localhost'))
    return 'http://localhost:4004/api'

  return website
}

const urlPath = getWebsiteUrl()

const path = (path: string) => urlPath + path

// AUTH
const hubspotLogin = (data: HubSpotLoginRequest): Promise<AxiosResponse<MessageServerResponse>> =>
  axios.post(path('/auth/hubspot-login'), data)

const login = (data: LoginRequest): Promise<AxiosResponse<LoginServerResponse>> =>
  axios.post(path('/auth/login'), data)


// CONTENT
const getLanguages = (): Promise<AxiosResponse<any>> =>
  axios.get(path('/content/languages'))

const setLanguages = (data: Object): Promise<AxiosResponse<any>> =>
  axios.put(path('/content/languages/update'), data)

// FEEDBACK
const uploadResume = (data: UploadResumeRequest): Promise<AxiosResponse<MessageServerResponse>> =>
  axios.post(path('/feedback/resume'), data, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })

const contactUs = (data: FeedbackRequest): Promise<AxiosResponse<MessageServerResponse>> =>
  axios.post(path('/feedback/contact-us'), data)

// NEWS
const getNews = (): Promise<AxiosResponse<News[]>> =>
  axios.get(path('/news'))

const getCurrentNewsAmount = (): Promise<AxiosResponse<{ amount: number }>> =>
  axios.get(path('/news/current-news-amount'))

const resaveNewsOrder = (ids: string[]): Promise<AxiosResponse<MessageServerResponse>> =>
  axios.post(path('/news/resave-news-order'), { ids })

const createNews = (data: any): Promise<AxiosResponse<MessageServerResponse>> =>
  axios.post(path('/news/create'), data)

const updateNews = (data: any): Promise<AxiosResponse<MessageServerResponse>> =>
  axios.post(path('/news/update'), data)

const removeNews = (id: any): Promise<AxiosResponse<MessageServerResponse>> =>
  axios.post(path('/news/remove'), { id })

const getNewsById = (id: any): Promise<AxiosResponse<News>> =>
  axios.post(path('/news/get-news'), { id })

export const API = {
  hubspotLogin,
  getLanguages,
  getNewsById,
  createNews,
  updateNews,
  removeNews,
  uploadResume,
  contactUs,
  login,
  setLanguages,
  getNews,
  getCurrentNewsAmount,
  resaveNewsOrder
}
