<template>
  <div>
    <CommentListItem
      v-for="comment in comments"
      :key="comment.id"
      :comment="comment"
    />
  </div>
</template>

<script>
import CommentListItem from '~/components/CommentListItem.vue'
export default {
  props: {
    comments: {
      type: Array
    }
  },
  components: {
    CommentListItem
  },
  // TODO:: 一旦モックデータを表示APIができたらちゃんとしたデータを表示する
  created() {
    this.comments = [
      { id: 'aaaa', user: { nickname: 'スーパーマリオ' }, message: 'やっふうぅぅぅぅ！！！！', createdAt: '2018-08-03T12:02:01Z' },
      { id: 'bbbb', user: { nickname: 'スーパーマリオ' }, message: 'やっふうぅぅぅぅ！！！！', createdAt: '2017-08-02T12:02:01Z' },
      { id: 'cccc', user: { nickname: 'スーパーマリオ' }, message: 'I’m bookmarking this for next year, we went to s pumpkin patch in the North East this year & it was so disappointing, it was just supermarket pumpkins positioned in straw & hay!', createdAt: '2018-05-02T12:02:01Z' }
    ]
  }
}
</script>

<style lang="scss" scoped>
</style>