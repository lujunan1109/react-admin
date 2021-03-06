//封装axios
import axios from 'axios'

import { message } from 'antd'

export default (url, data = {}, type = 'GET') => {
  return new Promise((resolve, reject) => {
    let promise
    if (type === 'GET') {
      promise = axios.get(url, {
        params: data
      })
    } else {
      promise = axios.post(url, data)
    }
    promise.then((res) => {
      resolve(res.data)
    }).catch((error) => {
      // reject(error)
      message.error('请求发生错误' + error.message)
    })

  })
}