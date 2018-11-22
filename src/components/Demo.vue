<template>
  <div class="wrapper">
    <text class="button" @click="jump">Jump(HelloWorld)</text>
    <image style="width:200px;height:100px" src="https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=411817872,1406473049&fm=173&app=25&f=JPG?w=218&h=146&s=71A121BF428A78F3492C33E803003026"/>
  </div>
</template>

<script>
  var navigator = weex.requireModule('navigator')
  var modal = weex.requireModule('modal')

  export default {
    methods: {
      // jump () {
      //   // this.$router.push({name: '/Demo'})
      //   navigator.push({
      //     url: 'http://10.9.8.123:8082/dist/components/HelloWorld.js',
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