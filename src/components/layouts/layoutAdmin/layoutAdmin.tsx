import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { Spin } from 'antd'
import useLayoutAdmin from './useLayoutAdmin'

type TProps = {
  children?: React.ReactNode
}

const LayoutAdmin: React.FC<TProps> = ({ children }) => {
  const { loading } = useLayoutAdmin()

  if (loading) {
    return <Spin className="absolute top-1/2 left-1/2" />
  }

  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default LayoutAdmin
