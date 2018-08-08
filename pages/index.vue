<template>
  <div>
		<header>

		</header>
    <div class="photo-slide">
	    <!-- よく見られている記事の写真を５枚縦回転で回す -->
    </div>
    <div class="article-list">
			<el-row :gutter="20">
				<el-col :span="8" v-for="item in articles" :key="item.title">
          <PostListItem :postItem="item"/>
        </el-col>
			</el-row>
   </div> 
  </div>
</template>
<script>
import PostListItem from '~/components/PostListItem.vue'
export default {
  components: {
    PostListItem
  },
  data () {
		return {
			articles: [{ 
        title: 'マリオ',
        date: '2028-01-10'
       },
      { title: 'カロン',
        date: '2020-01-11' 
       },
      { title: 'ヨッシー',
        date: '2020-01-10'
       },
      { title: 'ワルイージ',
        date: '2020-01-10'
       },
      { title: 'テレサ',
        date: '2028-01-10'
         },
      { title: 'ジュゲム',
        date: '2028-01-10'
      },
      { title: 'キノピオ',
        date: '2020-01-11' 
       },
      { title: 'ノコノコ',
        date: '2020-01-11' 
       },
      { title: 'ヘイホー',
        date: '2020-01-11' 
       }]
    }
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }
	header{
		height: 100px;
    background-color: palegoldenrod;
	}
	.photo-slide {
		height: 200px;
		background-color: aqua;
	}
	.article-list{
    display: flex;
    justify-content: center;
    margin-top: 3%;
	}
	.el-row {
    width: 100%;
    margin-bottom: 20px;
    /* &:last-child {
      margin-bottom: 0;
		} */
  }
  .el-col {
    border-radius: 4px;
    width: 33%;
    margin-bottom: 22px;
    /* margin-left: 10%;
    padding-left: 10px;
    padding-right: 10px; */
    text-align: center;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
