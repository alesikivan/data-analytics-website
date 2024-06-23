import { Skeleton } from 'primereact/skeleton'

export const NewsItemPreview = () => {
  const newsAmount = 1
  return (
    <div className="w-full flex align-items-center justify-content-center flex-wrap gap-3">
      {
        new Array(newsAmount).fill(0).map((item, index) => {
          return (
            <div key={index} className='flex flex-column align-items-center'>
              <Skeleton height="10rem" width="15rem" className="mb-2"></Skeleton>
              <Skeleton height="2rem" width="15rem" className="mb-2"></Skeleton>
            </div>
          )
        })
      }
    </div>
  )
}