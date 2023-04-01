import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'
import { GET_ME } from '@/gql'
import { useDispatch } from 'react-redux'
import { setState } from '@/stores/slices/authSlice'

const useLayoutAdmin = () => {
  const dispatch = useDispatch()
  const router = useRouter()

  const { loading } = useQuery<{
    getMe: {
      _id: string
    }
  }>(GET_ME, {
    onCompleted: ({ getMe }) => {
      dispatch(setState({ currentUser: getMe }))
    },
    onError() {
      localStorage.removeItem('token')
      router.push('/admin/login')
    },
  })

  return {
    loading,
  }
}

export default useLayoutAdmin
