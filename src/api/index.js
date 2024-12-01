import axios from "axios";

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMDczZTBhMjAwMGM5MWZlMmFjMzdiMDRmZDE5MzMzOCIsIm5iZiI6MTcyNzk0MTk1Mi4xMzIsInN1YiI6IjY2ZmU0ZDQwMTU5MmVmMWJhOTg0ZDBkNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.klXEz8x7_JwkEOBSQW-1lzd9VYcdqv3_RktaI0Oy4mM'
    }
})

export default api