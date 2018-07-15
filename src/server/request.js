import axios from '../../axios/index'

class Request {
  getList (url, dataSource) {
    axios.ajax({
      url: url,
      method: 'get',
      data: {
        params: {
          page: 1
        }
      }
    }).then((res) => {
      if (res.code === 0) {
        this.setState({
          dataSource1: res.result.list
        })
      }
    })
  }
}
export default Request
