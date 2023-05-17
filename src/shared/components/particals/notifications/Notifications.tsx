import { Toast } from 'primereact/toast'
import { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import Parser from 'html-react-parser'
import { RootState } from '../../../../redux/reducers/rootReducer'

export const Notifications = () => {
    const toast = useRef<Toast>(null)

    const { list } = useSelector((state: RootState) => state.notifications)

    useEffect(() => {
      const prepared = list.map(notification => {
        notification.detail = Parser(String(notification.detail))

        return notification
      })
      
      if (toast.current)
        toast.current.show(prepared)
      
    }, [list])

    return <Toast className='custom-notification' ref={toast} />
}