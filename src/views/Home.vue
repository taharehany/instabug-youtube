<template>
	<div class="home">
		<Header />
		<SearchResults />
	</div>
</template>

<script>
import { mapState } from "vuex";
// @ is an alias to /src
import Header from "../components/global/Header.vue";
import SearchResults from "../components/SearchResults.vue";

export default {
	name: "Home",
	components: {
		Header,
		SearchResults,
	},
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
