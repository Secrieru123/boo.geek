// main module / entry point


import TMDBService from "./services/TMDBService.mjs"

let tmdbs = new TMDBService();
tmdbs.get({
   url: "/movie/latest",
   method: "GET",
   onSuccess: (data) => { console.log(data) }
})

tmdbs.getMovies()