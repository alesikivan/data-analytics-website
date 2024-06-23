import { useEffect, useState } from "react"
import { Skeleton } from 'primereact/skeleton'

import { translater } from "../../../utils/localization/localization"
import { NewsPreview } from "./components/previews/NewsPreview"
import { useNavigate } from "react-router-dom"
import { News as NewsInterface } from "../../../api/interfaces"
import { API } from "../../../api"
import { AxiosResponse } from "axios"

export const News = () => {
  const [news, setNews] = useState<NewsInterface[]>([])
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  const loadNews = () => {
    setLoading(true)

    API.getNews()
      .then((response: AxiosResponse<NewsInterface[]>) => {
        const { data } = response

        setNews(data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }

  useEffect(() => {
    loadNews()
  }, [])

  if (loading) return <NewsPreview />

  if (news.length === 0) {
    return (
      <div className="w-full flex align-items-center justify-content-center">
        <span className="app-gray-color">{translater("noNewsMessage")}</span>
      </div>
    )
  }

  return (
    <>
      <div className="w-full flex flex-wrap gap-4 justify-content-center align-items-stretch">
        {
          news.map(newsItem => {
            return (
              <div
                key={newsItem.id}
                onClick={() => navigate('/current-news/' + newsItem.id)}
                className="flex flex-column gap-3 align-items-center justify-content-center cursor-pointer shadow-1 p-4 w-18rem border-round-lg app-hover">
                <img src={newsItem.img} alt="news-image" className="max-w-12rem" />

                <span className="app-gray-color text-sm">
                  {newsItem.date}
                </span>

                <span className="max-w-20rem text-center app-font-bold app-header-color">
                  {newsItem.title}
                </span>
              </div>
            )
          })
        }
      </div>
    </>
  )
}