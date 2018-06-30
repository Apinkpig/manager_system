import JSONP from 'jsonp'

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
}
export default Axios
