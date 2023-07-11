
type Props = {
  errors: any,
  keyword: string
}

export const ErrorBlock = ({ errors, keyword }: Props) => {
  return (
    <>
      { errors[keyword] && 
        <p className="m-0 mb-1 text-red-500 text-sm">
          { errors[keyword].message }
        </p>
      }
    </>
  )
}