<template>
	<div class="video-wrapper">
		<div class="container">
			<div class="search-filtering">
				<h3 class="search-results-numbers" v-if="this.SearchData.items > 0">
					About {{ this.SearchData.pageInfo.totalResults }} filters results
				</h3>
			</div>
			<div
				class="search-video-details"
				v-for="search in SearchData.items"
				:key="search.id.videoId"
			>
				<div class="video-thumbnail">
					<router-link :to="`/video/${search.id.videoId}`">
						<img
							:src="search.snippet.thumbnails.medium.url"
							:height="search.snippet.thumbnails.medium.height"
							:width="search.snippet.thumbnails.medium.width"
							alt=""
						/>
					</router-link>
				</div>
				<div class="video-text">
					<h2 class="video-subtitle">{{ search.snippet.title }}</h2>
					<p class="video-subtitle-details">
						{{ search.snippet.description }}
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState } from "vuex";

export default {
	name: "SearchResults",
	components: {},
	data() {
		return {};
	},
	computed: {
		...mapState(["SearchData"]),
	},
	async created() {
		await this.$store.dispatch("getSearchData");
	},
};
</script>
