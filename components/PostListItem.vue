<template>
    <div class="article-list">
			{{ postItem.title }} <br>
			{{ postItem.date }}
    </div>



</template>
<script> 
export default {
	props: {
		postItem: {
			type: Object
		}
	},
	data () {
		return {
			
		}
	}
}
</script>

<style scoped>

</style>

