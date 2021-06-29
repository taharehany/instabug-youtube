<template>
	<Header />
	<div class="video-wrapper">
		<iframe
			:src="`https://www.youtube.com/embed/${this.video.id}`"
			frameborder="0"
		></iframe>
	</div>
</template>

<script>
import axios from "axios";
import Header from "../components/global/Header.vue";
let api_key = "AIzaSyCXPBtK3xeum4Hkk3r5hRlOxTGw_x1xoyE";

export default {
	name: "SingleVideo",
	components: {
		Header,
	},
	data() {
		return {
			video: "",
		};
	},
	mounted() {
		axios
			.get(
				`https://youtube.googleapis.com/youtube/v3/videos?part=snippet`,
				{
					headers: {
						"Content-Type": "application/json",
					},
					params: {
						id: this.video.id,
						key: api_key,
					},
				}
			)
			.then((singleVideoApi) => {
				// console.log(singleBlogApi.data.data.blogs[0]);
				this.video = singleVideoApi.data.items[0];
				console.log(this.video);
			})
			.catch((error) => {
				console.log(error);
			});
	},
};
</script>
