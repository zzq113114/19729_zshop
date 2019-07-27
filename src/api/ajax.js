	/**
	 * ====================================================================
	 *功 能：ajax  请求函数模块
   * 返回值对象：promise对象
	----------------------------------------------------------------------
	 *修改记录 ：
	 *日 期  版本 修改人 修改内容
     *
	 *2019-07-27 v0.0.1 zhangzhenqing 创建
	====================================================================
	 */
	import axios from 'axios'

  export default  function ajax (url,data={},type='GET') {
    return new Promise(function (resolve, reject) {
//成功了返回resolve，失败了reject
      let promise

      if (type === 'GET') {
        // 准备url query参数数据
        let dataStr = '' //数据拼接字符串
        Object.keys(data).forEach(key => {
          dataStr += key + '=' + data[key] + '&'
        })
        if (dataStr !== '') {
          dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'))
          url = url + '?' + dataStr
        }
        // 发送get请求
        promise = axios.get(url)
      } else {
        // 发送post请求
        promise = axios.post(url, data)
      }

      promise.then(response => {//成功了
        resolve(response.data)//最终返回值
      })
        .catch(error => {//失败了
          reject(error)
        })
    })
  }
