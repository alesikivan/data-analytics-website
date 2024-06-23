import { Button } from "primereact/button"
import { Dialog } from "primereact/dialog"
import { InputText } from "primereact/inputtext"
import { useState } from "react"
import ReactQuill from 'react-quill'
import { API } from "../../../../../../api"
import { MessageServerResponse, News } from "../../../../../../api/interfaces"
import { AxiosResponse } from "axios"
import { successNotification } from "../../../../../../redux/actions/notificationsActions"
import { editorModules } from "./CreateButton"
import { InputNumber } from "primereact/inputnumber"

type Props = {
  loadNews: Function,
  news: News
}

export const UpdateButton = ({ loadNews, news: newsItem }: Props) => {
  const [dialogVisible, setDialogVisible] = useState(false)
  const [loading, setLoading] = useState(false)
  const [news, setNews] = useState(newsItem)

  const save = () => {
    setLoading(true)

    API.updateNews(news)
      .then((response: AxiosResponse<MessageServerResponse>) => {
        const { data: { message } } = response

        successNotification(message)

        setDialogVisible(false)
        setLoading(false)

        loadNews()
      })
      .catch(() => setLoading(false))
  }

  return (
    <>
      <Button
        icon="pi pi-pencil"
        className="custom-target-icon-update-extension p-button p-component p-button-icon-only p-button-outlined border-circle"
        style={{ width: "50px", height: "50px" }}
        onClick={() => {
          setDialogVisible(true)
        }} />

      <Dialog
        header="Update news"
        visible={dialogVisible}
        modal
        resizable={true}
        maximizable={true}
        headerClassName="surface-50"
        contentClassName="surface-50"
        className='form-dialog-window'
        contentStyle={{ minHeight: '400px' }}
        style={{ minWidth: '800px' }}
        onHide={() => setDialogVisible(false)}>

        <div className="flex flex-column mt-1 w-full gap-2">
          <label>Title</label>
          <InputText
            className="w-full"
            placeholder="Title"
            value={news.title} onChange={(e) => setNews(prev => ({ ...prev, title: e.target.value }))} />

          <label>Image link</label>
          <InputText
            className="w-full"
            placeholder="Image link"
            value={news.img} onChange={(e) => setNews(prev => ({ ...prev, img: e.target.value }))} />

          <label>Date</label>
          <InputText
            className="w-full"
            placeholder="Date"
            value={news.date} onChange={(e) => setNews(prev => ({ ...prev, date: e.target.value }))} />

          {/* <label>News serial number (0 - the first, 1 - the second and so on)</label>
          <InputNumber
            className="w-full"
            placeholder="Order"
            min={0}
            value={news.order || 0}
            onChange={(e) =>
              setNews((prev) => ({ ...prev, order: e.value ? e.value : 0 }))
            }
          /> */}

          <label>Webpage content</label>  
          <ReactQuill
            theme="snow"
            modules={editorModules}
            value={news.content}
            onChange={(value) => setNews(prev => ({ ...prev, content: value }))} />

          <Button
            label="Save news"
            disabled={loading}
            className="app-bg-color app-font-bold app-border-radius text-white border-none"
            onClick={() => save()} />

        </div>

      </Dialog>
    </>
  )
}