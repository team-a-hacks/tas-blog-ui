<template>
  <div class="comment-form">
    <el-form ref="comment">
      <el-form-item>
        <el-col
          class="icon-box"
          :span="2"
        >
          <UserIcon :icon="icon" />
        </el-col>
        <el-col :span="22">
          <el-input
            type="textarea"
            v-model="comment"
          />
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-button
          class="comment-btn"
          :disabled="!comment"
          @click="postComment"
        >
          Comment
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import UserIcon from '~/components/UserIcon'
export default {
  data () {
    return {
      comment: '',
      icon: ''
    }
  },
  components: {
    UserIcon
  },
  methods: {
    postComment () {
      // ここにaxiosの処理を書く
      this.comment = ''
      this.$message({
        showClose: true,
        message: 'コメントしました。',
        duration: 2000,
        type: 'success'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.comment-form {
  max-width: 960px;
  .icon-box {
    height: 50px;
    width: 50px;
    background-color: #7b7b7b;
    margin-right: 10px;
  }
  .comment-btn {
    float: right;
    margin-right: 20px;
  }
}
</style>