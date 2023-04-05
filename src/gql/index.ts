import { gql } from '@apollo/client'

export const LOGIN = gql`
  query login($argsLogin: ILogin!) {
    login(argsLogin: $argsLogin) {
      token
    }
  }
`

export const GET_ME = gql`
  query getMe {
    getMe {
      _id
      fullName
    }
  }
`

export const SINGLE_UPLOAD = gql`
  mutation singleUpload($file: Upload!) {
    singleUpload(file: $file) {
      filename
    }
  }
`
