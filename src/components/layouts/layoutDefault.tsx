import Navbar from '../navbar'
import Footer from '../footer'

type TProps = {
  children?: React.ReactNode
}

const LayoutDefault: React.FC<TProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default LayoutDefault
