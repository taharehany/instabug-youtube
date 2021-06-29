import { createStore } from "vuex";
import axios from "axios";

// let search_value = "spongebob";
let api_key = "AIzaSyCbKo2xdO6m3IqPLSHm4-Ldc_jXMG5cCxY";

export default createStore({
	state: {
		isLoading: false,
		SearchData: [],
		search_value: localStorage.getItem("search") || "spongebob",
	},
	mutations: {
		SET_DATA_SEARCH(state, SearchData) {
			state.SearchData = SearchData;
		},
	},
	actions: {
		getSearchData({ commit }) {
			axios
				.get(
					"https://youtube.googleapis.com/youtube/v3/search?part=snippet",
					{
						headers: {
							"Content-Type": "application/json",
						},
						params: {
							q: this.state.search_value,
							key: api_key,
							maxResults: 3,
						},
					}
				)
				.then((SearchDataApi) => {
					let SearchData = SearchDataApi.data;
					commit("SET_DATA_SEARCH", SearchData);
					console.log(SearchData);
				})
				.catch((error) => {
					console.log(error);
				});
		},
	},
	modules: {},
});
