import { useState } from "react"
import { Button } from 'primereact/button'
import { InputSwitch } from "primereact/inputswitch"
import clsx from "clsx"

type Props = {
  text: string,
  title: string,
  id: number
}

export const HiddenText = ({ title, text, id }: Props) => {
  const [isHidden, setIsHidden] = useState(id !== 0)

  const toggleText = () => {
    setIsHidden(!isHidden)
  }

  return (
    <div className='cookies-items flex flex-column'>
      <div className='w-full flex align-items-center justify-content-between'>
        <h4 className="cookies-item-title">{title}</h4>

        <InputSwitch
          className='app-switch'
          checked={true} 
          onChange={(e) => { }} />
      </div>

      <div className="hidden-text-block flex flex-column">
        <Button 
          icon={clsx("pi pi-plus", {
            "pi-minus": !isHidden
          })}
          onClick={toggleText}
          className="p-button p-component p-button-icon-only p-button-outlined p-button-rounded p-button-secondary"
          style={{ width: "25px", height: "25px" }} />

        {
          isHidden 
          ? null 
          : <span className="text-sm">{ text }</span>
        }
      </div>
    </div>
  )
}
