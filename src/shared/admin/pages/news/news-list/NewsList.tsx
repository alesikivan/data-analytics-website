import { useEffect, useState } from "react"
import { DataTable, DataTableRowReorderParams } from 'primereact/datatable'
import { Column } from 'primereact/column'

import { Menu } from "../../../components/Menu"
import { translater } from "../../../../../utils/localization/localization"
import { MessageServerResponse, News } from "../../../../../api/interfaces"
import { Button } from "primereact/button"
import { Tooltip } from "primereact/tooltip"
import { API } from "../../../../../api"
import { AxiosResponse } from "axios"
import { CreateButton } from "./components/CreateButton"
import { UpdateButton } from "./components/UpdateButton"
import { RemoveButton } from "./components/RemoveButton"
import { successNotification } from "../../../../../redux/actions/notificationsActions"

export const NewsList = () => {
  const [news, setNews] = useState<News[]>([])
  const [loading, setLoading] = useState(false)

  const resaveOrder = (e: DataTableRowReorderParams) => {
    setLoading(true)
    const ids = e.value.map((news: News) => news.id)

    console.log(ids)

    API.resaveNewsOrder(ids)
      .then((response: AxiosResponse<MessageServerResponse>) => {
        const { data: { message } } = response

        successNotification(message)
        setLoading(false)
        loadNews()
      })
      .catch(() => setLoading(false))
  }

  const loadNews = () => {
    setLoading(true)

    API.getNews()
      .then((response: AxiosResponse<News[]>) => {
        const { data } = response

        setNews(data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }

  useEffect(() => {
    loadNews()
  }, [])

  return (
    <div className="w-full flex flex-column gap-3">
      <Menu />

      <div className="flex gap-2">
        <CreateButton loadNews={loadNews} />
      </div>

      <DataTable
        className="w-full"
        reorderableRows
        onRowReorder={resaveOrder}
        lazy
        loading={loading}
        value={news}
        tableStyle={{ minWidth: '50rem' }}>

        <Column
          rowReorder
          className="justify-content-center"
          style={{ maxWidth: "90px" }} />

        <Column field="title" header="Title"></Column>

        <Column field="date" header="Date"></Column>

        <Column
          className="justify-content-center"
          header={'Content'}
          body={(row: News) => {
            return (
              <>
                <img style={{ maxWidth: "100px" }} src={row.img} alt="news-preview" />
              </>
            )
          }}
        />

        {/* <Column
          className="justify-content-center"
          header={'Order'}
          body={(row: News) => {
            const { order = 0 } = row

            return order
          }}
        /> */}

        <Column
          className="justify-content-center"
          header={'Preview'}
          body={(row: News) => {
            const text = row.content
            const maxLength = 30

            if (text.length <= maxLength) {
              return text; // Возвращаем полный текст
            }

            return text.substring(0, maxLength) + '..';
          }}
        />

        <Column
          className="justify-content-center"
          header={translater("actionsColumn")}
          key={'actions'}
          body={(row: News) => {
            return (
              <div className="flex gap-2">
                <UpdateButton loadNews={loadNews} news={row} />

                <RemoveButton loadNews={loadNews} news={row} />
              </div>
            )
          }}
        />
      </DataTable>
    </div>
  )
}