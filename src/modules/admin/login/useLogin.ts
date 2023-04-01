import { LOGIN } from '@/gql'
import { RootState } from '@/stores/appStore'
import { useLazyQuery } from '@apollo/client'
import { Form, message } from 'antd'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'

const useLogin = () => {
  const router = useRouter()
  const authStore = useSelector((state: RootState) => state.auth)
  const [messageApi, contextHolder] = message.useMessage()
  const [form] = Form.useForm()

  const [loginQuery, { loading: loadingLogin }] = useLazyQuery<
    {
      login: {
        token: string
      }
    },
    {
      argsLogin: {
        username: string
        password: string
      }
    }
  >(LOGIN, {
    onCompleted: ({ login }) => {
      localStorage.setItem('token', login.token)
      router.push('/admin')
    },
    onError() {
      messageApi.open({
        type: 'error',
        content: 'Tài khoản hoặc mật khẩu không đúng',
      })
    },
  })

  const handleClickLogin = () => {
    form
      .validateFields()
      .then((values) => {
        loginQuery({
          variables: {
            argsLogin: {
              username: values.username,
              password: values.password,
            },
          },
          fetchPolicy: 'network-only',
        })
      })
      .catch(({ errorFields }) => {
        console.error(errorFields)
      })
  }

  return {
    authStore,
    handleClickLogin,
    loadingLogin,
    contextHolder,
    form,
  }
}

export default useLogin
