// import { FieldErrors } from "react-hook-form"

type Props = {
  errors: any,
  keyword: string
}

export const ErrorBlock = ({ errors, keyword }: Props) => {
  return (
    <>
      { errors[keyword] && 
        <p className="m-0 mb-3 text-red-500">
          { errors[keyword].message }
        </p>
      }
    </>
  )
}