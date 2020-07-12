const apiKey = 'JbP20lY0lw2Vr05g24QkaCqmUCiDhdNJ'



export default function getGifs({keyword = 'mapache'}={}){
    const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`

    return fetch(apiUrl)
    .then(res => res.json())
    .then(response=>{
      const {data = []} = response
      const gifs = data.map(image => image.images
        .downsized_medium.url)
        return gifs
    })
}
