/**
 *针对weex的多端本地资源加载
 **/
export function getImageFile (imageName) {
  if (!weex || !weex.config || !weex.config.env) {
    return
  }
  let _dotPoint = (imageName + '').lastIndexOf('.')
  let _pureFileName = (imageName + '').slice(0, _dotPoint)
  // let _imageFormat = (imageName + '').slice(_dotPoint)
  // 平台信息
  let _platform = weex.config.env.platform
  if (_platform === 'android') {
    let _filePrefix = 'local:///'
    return _filePrefix + _pureFileName
  }
  if (_platform === 'iOS') {
    return ''
  }
  if (_platform === 'Web') {
    let _filePrefix = '../../src/assets/icons/'
    return _filePrefix + imageName
  }
}

/*
*针对路由的封装
* 在调用的时候要进行pc区分，应为path会有所不同
*/
export function goPageRoute (router, navigatorww, pathWebObj, pathNative) { // router: web,h5端的this.$router, navigation:原生weex 的navigation
  // const env = weex.config.env || WXEnvironment
  // var navigator = weex.requireModule('navigator')
  // navigatorww.push({url: pathNative, animated: 'true'})
  weex.config.env.platform === 'Web' ? router.push({...pathWebObj}) : (() => {
    var navigator = weex.requireModule('navigator')
    navigator.push({url: pathNative, animated: 'true'})
  })()
}
