export async function serviciosCanciones(){

    const URI="https://api.spotify.com/v1/artists/6n21XaDAuqpceTXBiypR9W/top-tracks?market=US"
    const TOKEN="Bearer BQB50gvcPtjUeP6aplZARx-RKdf365uZUeqgOE7pMeV-_21w8DblmGhh1jJh2uau57v-45hvLWWSxywbHY_6F3rJWf8djuwoKiwV-F_0cToLQNM2UurA6JefXwWyuEYVYNASBRk1ZucJcJAKai-LKXEbZ_462KA56Q4J-qXvDjQRw6CQgQATeMIrl3IQOxIzdiU"
    const PETICION={
        method:"GET",
        headers:{Authorization:TOKEN},
        
    }

    let respuesta=await fetch(URI,PETICION);

    let canciones=await respuesta.json();

    return canciones;

}