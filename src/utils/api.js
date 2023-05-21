import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZDRlYzkwMDIyMjMxM2JmYmFhZTJlZjFkMTA5YTQ0ZCIsInN1YiI6IjY0NjhiZWQ1MzNhMzc2MDEwMWZhYzMzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NSwWN6yku5CVPdno9JJifbv3yvrePzktWJT_9azlQJY";

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};