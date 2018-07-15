import JSONP from 'jsonp'
import axios from 'axios'
import { Modal } from 'antd'

class Axios {
  static jsonp (options) {
    return new Promise((resolve, reject) => {
      JSONP(options.url, {
        param: 'callback'
      }, function (err, response) {
        if (response.status === 'success') {
          resolve(response)
        } else {
          reject(response.message)
        }
      })
    })
  }
  static ajax (options) {
    if (options.data && options.data.params.isShowLoading !== false) {
      let loading = document.getElementById('ajaxLoading')
      loading.style.display = 'block'
    }
    const baseApi = 'https://easy-mock.com/mock/5b4573ebe851f60dd3e9e6d5/mockapi'
    return new Promise((resolve, reject) => {
      axios({
        url: options.url,
        method: options.method,
        baseURL: baseApi,
        timeout: 5000,
        param: (options.data && options.data.params) || ''
      }).then((response) => {
        if (options.data && options.data.params.isShowLoading !== false) {
          let loading = document.getElementById('ajaxLoading')
          loading.style.display = 'none'
        }
        if (response.status === 200) {
          let res = response.data
          if (res.code === 0) {
            resolve(res)
          } else {
            Modal.info({
              title: '提示',
              content: res.msg
            })
          }
        } else {
          reject(response.data)
        }
      })
    })
  }
}
export default Axios
