var movieList = [
  { title: "Star Wars: Return of the Jedi", year: "1977", length: 125, rating: "8.4", genre: "sci-fi" },
  { title: "The Matrix Revolutions", year: "2003", length: 129, rating: "6.7", genre: "sci-fi" },
  { title: "Omen : The Final Conflict", year: "1981", length: 108, rating: "6.7", genre: "horror" },
  { title: "Gladiator", year: "2000", length: 155, rating: "8.5", genre: "historical" },
  { title: "The Patriot", year: "2000", length: 165, rating: "7.1", genre: "historical" },
  { title: "The Shawshank Redemption", year: "1994", length: 142, rating: "9.3", genre: "drama" },
  { title: "The Matrix Reloaded", year: "2003", length: 138, rating: "7.2", genre: "sci-fi" }
];

function getMovieTitle( index ){
  console.log(movieList[index].title);
}
console.log("name of the movie:");
console.log(getMovieTitle(5));

function addMovie( movie ){
  movieList.push(movie);
    console.log(movieList);
}

var newMovie = {title: "Hackshaw Ridge", year: "2017", length: 165, rating: "8.5", genre: "historical"};
console.log(addMovie(newMovie));

function movieByRating(){
  movieList.sort(function(a, b) {
    return ((a.rating) - (b.rating));
});
console.log(" Movie list after sort: " );
  console.log(movieList);
}
console.log(movieByRating());

function findByTitle( title ){
  for(var i=0;i<movieList.length;i++)
  {
    var tmp=movieList[i].title.search(/Gladiator/)
    if(tmp>0)
    {
      console.log(movieList[i].title);
    
    }
  }
}

console.log(findByTitle("Hackshaw"));
