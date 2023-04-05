import { Button, Upload } from 'antd'
import { NextPage } from 'next'
import { UploadOutlined } from '@ant-design/icons'
import useAdminProfile from '@/modules/admin/profile/useProfile'

const Profile: NextPage = () => {
  const { handleChangeUpload } = useAdminProfile()
  return (
    <div>
      <div>Profile</div>
      <Upload onChange={handleChangeUpload} accept=".pdf" action="">
        <Button icon={<UploadOutlined />}>Click to Upload</Button>
      </Upload>
    </div>
  )
}

export default Profile
