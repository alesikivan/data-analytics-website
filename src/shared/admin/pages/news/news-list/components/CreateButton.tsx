import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { InputNumber } from 'primereact/inputnumber';
import { useEffect, useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import { API } from "../../../../../../api";
import { MessageServerResponse } from "../../../../../../api/interfaces";
import { AxiosResponse } from "axios";
import { successNotification } from "../../../../../../redux/actions/notificationsActions";

import ImageResize from 'quill-image-resize-module-react'
import BlotFormatter from 'quill-blot-formatter'

if (Quill) {
  Quill.register('modules/imageResize', ImageResize)
  Quill.register('modules/blotFormatter', BlotFormatter)
}

type Props = {
  loadNews: Function;
};

type News = {
  title: string;
  img: string;
  date: string;
  content: string;
};

export const editorModules = {
  toolbar: {
    container: [
      ["bold", "italic", "underline"], // Форматирование текста
      [{ header: 1 }, { header: 2 }], // Заголовки
      [{ list: "ordered" }, { list: "bullet" }], // Списки
      [{ indent: "-1" }, { indent: "+1" }], // Отступы
      [{ direction: "rtl" }], // Направление текста
      [{ size: ["small", false, "large", "huge"] }], // Размер шрифта
      [{ header: [1, 2, 3, 4, 5, 6, false] }], // Заголовки
      [{ color: [] }, { background: [] }], // Цвет текста и фона
      [{ font: [] }], // Шрифты
      [{ align: [] }], // Выравнивание
      ["link", "image"], // Вставка ссылок, изображений и видео
      // ["insertImageUrl"] // Добавим кнопку для вставки изображения по URL
    ],
    handlers: {
      'image': function () {
        const url = prompt('Enter image URL');
        if (url) {
          console.log(url)
          const range = (this as any).quill.getSelection();
          (this as any).quill.insertEmbed(range.index, 'image', url);
        }
      }
    }
  },
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false
  },
  blotFormatter: {},
};


const defaultNewsData = {
  title: "",
  img: "",
  date: "",
  content: "",
}

export const CreateButton = ({ loadNews }: Props) => {
  const [dialogVisible, setDialogVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [news, setNews] = useState<News>(defaultNewsData);

  const save = () => {
    setLoading(true);

    API.createNews(news)
      .then((response: AxiosResponse<MessageServerResponse>) => {
        const {
          data: { message },
        } = response;

        successNotification(message);

        closeDialog()
        setLoading(false);

        loadNews();
      })
      .catch(() => setLoading(false));
  }

  const closeDialog = () => {
    setDialogVisible(false)

    setNews(defaultNewsData)
  }

  // const setCurrentNewsAmount = () => {
  //   API.getCurrentNewsAmount()
  //     .then((response: AxiosResponse<{ amount: number }>) => {
  //       const {
  //         data: { amount },
  //       } = response;

  //       console.log(response)

  //       setNews((prev) => ({ ...prev, order: amount }))
  //     })
  //     .catch(() => setLoading(false))
  // }

  return (
    <>
      <Button
        label="Create news"
        className="app-bg-color app-font-bold app-border-radius text-white border-none"
        onClick={() => {
          setDialogVisible(true);
          // setCurrentNewsAmount()
        }}
      />

      <Dialog
        header="Create news"
        visible={dialogVisible}
        modal
        resizable
        maximizable
        headerClassName="surface-50"
        contentClassName="surface-50"
        className="form-dialog-window"
        contentStyle={{ minHeight: "400px" }}
        style={{ minWidth: "800px" }}
        onHide={() => closeDialog()}
      >
        <div className="flex flex-column mt-1 w-full gap-2">
          <label>Title</label>
          <InputText
            className="w-full"
            placeholder="Title"
            value={news.title}
            onChange={(e) =>
              setNews((prev) => ({ ...prev, title: e.target.value }))
            }
          />

          <label>Image link</label>
          <InputText
            className="w-full"
            placeholder="Image link"
            value={news.img}
            onChange={(e) =>
              setNews((prev) => ({ ...prev, img: e.target.value }))
            }
          />

          <label>Date</label>
          <InputText
            className="w-full"
            placeholder="Date"
            value={news.date}
            onChange={(e) =>
              setNews((prev) => ({ ...prev, date: e.target.value }))
            }
          />

          {/* <label>News serial number (0 - the first, 1 - the second and so on)</label>
          <InputNumber
            className="w-full"
            placeholder="Order"
            min={0}
            value={news.order}
            onChange={(e) =>
              setNews((prev) => ({ ...prev, order: e.value ? e.value : 0 }))
            }
          /> */}

          <label>Webpage content</label>
          <ReactQuill
            theme="snow"
            value={news.content}
            modules={editorModules}
            onChange={(value) =>
              setNews((prev) => ({ ...prev, content: value }))
            }
          />

          <Button
            label="Save news"
            disabled={loading}
            className="app-bg-color app-font-bold app-border-radius text-white border-none"
            onClick={() => save()}
          />
        </div>
      </Dialog>
    </>
  );
};
