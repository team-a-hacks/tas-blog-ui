<template>
  <div class="post-form">
    <el-form :model="post">
      <el-container>
          <el-main>
            <el-form-item label="Title">
              <el-input v-model="post.title"></el-input>
            </el-form-item>
            <el-form-item label="Content">
              <el-input type="textarea" :rows="15" v-model="post.content"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">送信</el-button>
            </el-form-item>
          </el-main>
          <el-aside width="200">
            <el-form-item label="PostDate">
              <el-date-picker
                v-model="post.postDate"
                type="datetime"
                placeholder="Select date and time">
              </el-date-picker>
            </el-form-item>
          </el-aside>
      </el-container>
    </el-form>
  </div>  
</template>
<script>
export default {
  data () {
    return {
      post: {
        title: '',
        content: '',
        postDate: ''
      }
    }
  },
  methods: {
    onSubmit () {
      console.log(this.post)
      return
    }
  }
}
</script>
<style scoped>
.el-main{
  background: #f4f4f4;
}
</style>