 <template>
  <div class="main-container">
    <!--header-->
    <div class="header-wrapper">
      <HomeHeader  @getLeftModal = "_getLeftModal"/>
    </div>
    <!--content-->
    <div class="content-wrapper">
      <ListHome/>
      <Recommend/>
    </div>
    <!--bottom-->
    <div class="bottom-wrapper">
      <Player/>
    </div>
  </div>
</template>
<script>
import HomeHeader from '@/BaseCompoents/Header'
import Player from '@/BaseCompoents/Player'
import Recommend from '@/components/musicSubPage/Recommend'
import ListHome from '@/components/ListHome'
import Modal from '@/BaseCompoents/Modal'
export default {
  name: 'Login',
  data () {
    return {
      data: [1, 3, 4]
    }
  },
  methods: {
    goWexDemo () {
      this.$router.push({name: 'WexDemo'})
    },
    _getLeftModal () {
      // this.$router.push({name: 'WexDemo'})
      this.$refs.Modal.openBottomPopup()
    }
  },
  components: {
    HomeHeader,
    Recommend,
    Player,
    Modal,
    ListHome
  }
}
</script>
<style lang="scss" scoped>
  @import '~/scss/minin.scss';
  .main-container{
    position: fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
  }
  .header-wrapper{
    height:80px;
    position: fixed;
    top:0;
    left:0;
    right:0
  }
  .content-wrapper{
    position: fixed;
    top:80px;
    left:0;
    right:0;
  }
  .bottom-wrapper{
    position: absolute;
    bottom:0;
  }
</style>
