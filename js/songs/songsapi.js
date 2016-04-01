// $(document).ready(function(){
//   $(".search").on("click", apiCall)
// })
//
//
// function apiCall(){
//   var keyword = $("#search-keyword").val();
//   $.ajax({
//     url: "http://localhost:3000/songs/",
//     dataType: 'json',
//     method: 'GET',
//   }).done ( function(response){
//     songs = response.filter(function(s){
//       return keyword.match(s.)
//     })
//     console.log(response);
//     outputResults(response);
//   });
// }
//
// function outputResults(response){
//   $(".index").empty();
//   $('.stuff').append("<p>"+response.artist+"</p>")
//   $('.stuff').append("<p>"+response.title+"</p>")
//   $('.stuff').append("<img src = '"+response.album_art+"'>")
// }
