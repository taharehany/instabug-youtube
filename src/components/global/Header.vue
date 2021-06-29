<template>
	<header>
		<div class="container">
			<div class="header-content">
				<div class="header-logo-part">
					<a href="">
						<img src="@/assets/images/logo.png" alt="" />
					</a>
				</div>
				<div class="header-search-part">
					<input
						class="search-input"
						type="text"
						placeholder="search"
						v-model="this.header_search_value"
					/>
					<input
						@click="getSearchValue"
						class="search-submit"
						type="submit"
					/>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
export default {
	name: "Header",
	data() {
		return {
			header_search_value: "",
		};
	},
	methods: {
		getSearchValue() {
			localStorage.setItem("search", this.header_search_value);
			// window.location.reload();
			console.log(this.header_search_value);
		},
		// handleSearch(event) {
		// 	localStorage.setItem("search", event.target.value);
		// 	window.location.reload();
		// },
	},
};
</script>

<style scoped></style>
