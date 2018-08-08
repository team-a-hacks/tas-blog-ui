<template>
	<div class="post">
		<div class="post-contents">
			<el-row>
				<el-col span="24" class="top-conter">
					<img
						class="photo-style"
						src="~/static/sample1.png"
					>
					<h2 class="page-title">てすとおぉ</h2>
				</el-col>
				<el-col span="24">
					<span class="post-text">
					</span>
				</el-col>
			</el-row>
		</div>
		<div class="comments">
			<CommentForm />
			<CommentList />
		</div>
	</div>
</template>

<script>
import CommentList from '~/components/CommentList'
import CommentForm from '~/components/CommentForm'
export default {
	components: {
		CommentList,
		CommentForm
	}
}
</script>
<style lang="scss" scoped>
.top-conter {
	position: relative;
	.photo-style {
		width: 100%;
	}
	.page-title {
		position: absolute;
		text-align: center;
		color: #ffffff;
		bottom: 0;
		right: 0;
		left: 0;
	}
}
</style>

