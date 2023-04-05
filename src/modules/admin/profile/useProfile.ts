import { SINGLE_UPLOAD } from '@/gql'
import { useMutation } from '@apollo/client'
import { UploadChangeParam, UploadFile } from 'antd/es/upload'

const useAdminProfile = () => {
  const [singleUploadMutation, { loading }] = useMutation<
    {
      singleUpload: {
        filename: string
      }
    },
    any
  >(SINGLE_UPLOAD, {
    onCompleted(data) {
      console.log(data)
    },
    onError(error) {
      console.log(error)
    },
  })
  const handleChangeUpload = (info: UploadChangeParam<UploadFile<any>>) => {
    if (info.file.status === 'done') {
      console.log(info.file)
      singleUploadMutation({
        variables: {
          file: info.file.originFileObj,
        },
      })
    }
  }
  return {
    handleChangeUpload,
  }
}

export default useAdminProfile
