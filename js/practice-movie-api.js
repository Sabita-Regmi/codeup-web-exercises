



var keys='a59f7df0867407cfac82eec065d46e26';


let getMovies=()=> {
    return fetch('https://api.themoviedb.org/3/movie/550?api_key=a59f7df0867407cfac82eec065d46e26')
        .then(response => {
            // console.log(response)
            let result = response.json();
            return console.log(result);

        })
 }
getMovies();
// function jokeGenerator(){
//     var url = 'https://api.themoviedb.org/3/movie/550?api_key=a59f7df0867407cfac82eec065d46e26';
//     var response=$.ajax(url);
//     console.log(response);
    // response.done(function(data) {
    //
    //     $("#post").html("<p class='card-header text-warning'>"+data.value.joke+"</p>"+
    //         "<iframe src='https://giphy.com/embed/3o6ozvv0zsJskzOCbu' width='350' height='350' frameBorder='0' class='giphy-embed' allowFullScreen></iframe>"
    //     );
    // });