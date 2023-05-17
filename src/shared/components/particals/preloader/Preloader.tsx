import { CSSProperties } from "react"

type Props = {
  height?: string,
  width?: string,
  radius?: string,
}

export const Preloader = ({ height = '50px', width = '100%', radius = '4px' }: Props) => {
  const styles: CSSProperties = {
    width: width,
    minWidth: width,
    height: height,
    borderRadius: radius
  }

  return <div style={styles} className="preloader-component"></div>
}
