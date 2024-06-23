import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Parser from "html-react-parser"

import { translater } from "../../../../utils/localization/localization"
import { API } from "../../../../api"
import { News } from "../../../../api/interfaces"
import { AxiosResponse } from "axios"
import { NewsItemPreview } from "./previews/NewsItemPreview"

export const NewsItem = () => {
  const [news, setNews] = useState<null | News>(null)
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()
  const { id } = useParams()

  const loadNews = () => {
    setLoading(true)


    if (id)
      API.getNewsById(id)
        .then((response: AxiosResponse<News>) => {
          const { data } = response

          setNews(data)

          setLoading(false)
        })
        .catch(() => setLoading(false))
  }

  useEffect(() => {
    loadNews()
  }, [id])

  if (loading) return <NewsItemPreview />

  if (!news) {
    return (
      <div className="w-full flex align-items-center justify-content-center">
        <span className="app-gray-color">{translater("noNewsItemMessage")}</span>
      </div>
    )
  }

  return (
    <div className="w-full flex-column align-items-center justify-content-center">
      <span className="text-center text-xl app-color flex align-items-center justify-content-center">{news.title}</span>

      <div className="w-full news-content">
        {Parser(news.content)}
      </div>
    </div>
  )
}