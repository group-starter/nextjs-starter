import { RootState } from '@/stores/appStore'
import { setState } from '@/stores/slices/authSlice'
import { Button } from 'antd'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'

const DashBoard: NextPage = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const authStore = useSelector((state: RootState) => state.auth)

  const handleClickLogout = () => {
    // vi next chay tren ca client va server nen phai check window co thi se o client
    if (typeof window !== 'undefined') {
      localStorage.removeItem('token')
    }
    dispatch(setState({ currentUser: null }))
    router.push('/admin/login')
  }
  return (
    <div>
      DASHBOARD ADMIN
      <div>{JSON.stringify(authStore.currentUser || {})}</div>
      <Button onClick={handleClickLogout}>Logout</Button>
    </div>
  )
}

export default DashBoard
