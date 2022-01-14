
class TMDBService {
    constructor() {
        this.accessKey = "?api_key=12ae610128a593574c3c7c2812c00665"
        this.baseUrl = "https://api.themoviedb.org/3"
    }
    getMovies() {
        console.log("{ This is the data }")
    }
    
    get(options) {
        let xhr = new XMLHttpRequest()
        xhr.open(options.method, `${this.baseUrl+options.url+this.accessKey}`)
        xhr.send()

        xhr.onload = () => {
            const data = JSON.parse(xhr.responseText)
            options.onSuccess(data)
        }
    }
}

export default TMDBService 

