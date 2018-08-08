<template>
  <div class="user-icon">
    <img
      v-if="icon === ''"
      src="~/static/profile.png"
      :width="width"
      :height="height"
    />
    <img
      v-else
      id="icon"
      :width="width"
      :height="height"
    />
  </div>
</template>

<script>
export default {
  props: {
    // icon 画像のbase64データ
    icon: {
      type: String,
      default: ''
    },
    // width 画像の幅
    width: {
      type: Number,
      default: 50,
    },
    // height 画像の高さ
    height: {
      type: Number,
      default: 50,
    }
  },
  methods: {
    // TODO: ここは実際にデータが入ってくるようになったら実装
    decodeBase64 () {
      let iconElm = document.getElementById("icon")
      iconElm.src = data
      return ''
    }
  }
}
</script>