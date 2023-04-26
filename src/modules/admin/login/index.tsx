import LayoutFull from '@/components/layouts/layoutFull/layoutFull'
import { NextPageWithLayout } from '@/pages/_app'
import { Button, Checkbox, Form, Input } from 'antd'
import type { ReactElement } from 'react'
import useLogin from './useLogin'

const Father = ({ children }: { children: any }) => {
  console.log('render father')
  return (
    <div>
      FATHER
      {children}
    </div>
  )
}

const LoginPage: NextPageWithLayout = () => {
  const { handleClickLogin, loadingLogin, contextHolder, form } = useLogin()
  return (
    <Father>
      <div>
        {contextHolder}
        <Form
          form={form}
          name="basic"
          className="mt-[10%] m-auto"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={handleClickLogin}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button
              type="primary"
              onClick={handleClickLogin}
              loading={loadingLogin}
            >
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Father>
  )
}

LoginPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutFull>{page}</LayoutFull>
}

export default LoginPage
