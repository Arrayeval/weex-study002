<template>
  <div class="wrapper">
    <text class="button" @click="jump">Jump</text>
    <div class="view">
      <text>this is helloworld page</text>
      <image style="width:200px;height:100px" src="https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=4193706269,1876192182&fm=173&app=25&f=JPEG?w=218&h=146&s=12C6BC4C5EF3BAC05A0C54B10300F081"/>
      <SliderBar/>
    </div>
  </div>
</template>

<script>
  import SliderBar from '@/components/SliderBar'
  var navigator = weex.requireModule('navigator')
  var modal = weex.requireModule('modal')

  export default {
    components: {
      SliderBar
    },
    methods: {
      // jump (event) {
      //   // console.log('will jump',  weex.config.bundleUrl)
      //   // const toUrl = 'http://127.0.0.1:8080/dist/Demo.js'
      //   navigator.push({
      //     url: 'http://10.9.8.123:8082/dist/components/Demo.js',
      //     animated: "true"
      //   }, event => {
      //     modal.toast({ message: 'callback: ' + event })
      //   })
      // }
    }
  };
</script>

<style scoped>
  .wrapper {
    flex-direction: column;
    justify-content: center;
    width:750px;
    height:600px;
  }
  .button {
    font-size: 60px;
    width: 450px;
    text-align: center;
    margin-top: 30px;
    margin-left: 150px;
    padding-top: 20px;
    padding-bottom: 20px;
    border-width: 2px;
    border-style: solid;
    color: #666666;
    border-color: #DDDDDD;
    background-color: #F5F5F5
  }
</style>