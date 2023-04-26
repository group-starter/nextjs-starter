import useLayoutFull from "./useLayoutFull"

type TProps = {
  children?: React.ReactNode
}

const LayoutFull: React.FC<TProps> = ({ children }) => {
  useLayoutFull()
  return <>{children}</>
}

export default LayoutFull
