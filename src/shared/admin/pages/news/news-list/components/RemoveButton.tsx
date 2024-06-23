import { Button } from "primereact/button"
import { Dialog } from "primereact/dialog"
import { InputText } from "primereact/inputtext"
import { useState } from "react"
import ReactQuill from 'react-quill'
import { API } from "../../../../../../api"
import { MessageServerResponse, News } from "../../../../../../api/interfaces"
import { AxiosResponse } from "axios"
import { successNotification } from "../../../../../../redux/actions/notificationsActions"

type Props = {
  loadNews: Function,
  news: News
}

export const RemoveButton = ({ loadNews, news: newsItem }: Props) => {
  const [loading, setLoading] = useState(false)
  const [news, setNews] = useState(newsItem)

  const remove = () => {
    setLoading(true)

    API.removeNews(news.id)
      .then((response: AxiosResponse<MessageServerResponse>) => {
        const { data: { message } } = response

        successNotification(message)

        setLoading(false)

        loadNews()
      })
      .catch(() => setLoading(false))
  }

  return (
    <>
      <Button
        icon="pi pi-trash"
        className="custom-target-icon-delete-extension p-button p-component  p-button-icon-only p-button-outlined p-button-danger border-circle"
        disabled={loading}
        style={{ width: "50px", height: "50px" }}
        onClick={() => remove()} />
    </>
  )
}