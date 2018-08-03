<template>
  <div class="comment-item">
    <el-row>
      <el-col
        class="icon-box"
        :span="2"
      >
        <!-- TODO: ここにユーザーのアイコンを表示する -->
        <!-- <img /> -->
      </el-col>
      <el-col :span="20">
        <div>
          <span class="comment-user"> {{ comment.user.nickname }} </span>
          <span class="comment-date"> {{ commentAt(comment.createdAt) }} </span>
        </div>
        <div>
          <p class="comment-message"> {{ comment.message }} </p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { someDaysAgo } from '~/assets/js/date-format.js'
export default {
  props: {
    comment: {
      type: Object
    }
  },
  methods: {
    commentAt (date) {
      return someDaysAgo(date)
    }
  }
}
</script>

<style lang="scss" scoped>
.comment-item {
  margin-top: 10px;
  margin-bottom: 10px;
}
.icon-box {
  height: 50px;
  width: 50px;
  background-color: #7b7b7b;
  margin-right: 10px;
}
.comment-user {
  font-weight: bold;
  color: #2b2b2b;
  font-size: 12px;
}
.comment-date {
  font-size: 12px;
  color: #4b4b4b;
}
.comment-message {
  font-size: 14px;
}
</style>