import { useRouter } from 'next/router'

const useLayoutFull = () => {
  const router = useRouter()

  if (
    router.route === '/admin/login' &&
    typeof window !== 'undefined' &&
    window.localStorage.getItem('token')
  ) {
    router.push('/admin')
  }

  return {}
}

export default useLayoutFull
