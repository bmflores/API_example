/* Author: Bryan Flores
 Date: 11/10/2021
*/

// click event listeners for the submit/search buttons
document.getElementById('movie-text-button').addEventListener('click', get_results_search);
document.getElementById('movie-dropdown-button').addEventListener('click', get_results_dropwdown);

// variables to access specific HTML components as a whole
var movie_search_text = document.querySelector('#movie-search');
var movie_search_text_button = document.querySelector('#movie-text-button');
var movie_search_dropdown = document.querySelector('#movie-dropdown');
var movie_search_dropdown_button = document.querySelector('#movie-dropdown-button');

// onfocus is used to keep the corresponding submit/search button enabled while setting the other submit/search button as disabled
// code derived from a previous ITP140 lab; do not remember the reason for having function (); would appreciate explanation
movie_search_text.onfocus = function() { get_focus ('movie-search') };
movie_search_dropdown.onfocus = function() { get_focus ('movie-dropdown')};
function get_focus(id) {
    if (id=='movie-search') {
        movie_search_dropdown_button.disabled = true;
        movie_search_text_button.disabled = false;
    }
    if (id=='movie-dropdown') {
        movie_search_text_button.disabled = true;
        movie_search_dropdown_button.disabled = false;
    }
}

// functions for the click event listeners
// using different methods, the variable for the movie title has its spaces replaced by '+' signs and converted to lowercase to insert in the URL
function get_results_search () {
    var movieTitle = document.getElementById('movie-search').value;
    var movieTitleSearch = movieTitle.split(' ').join('+').toLowerCase();

    fetch('https://www.omdbapi.com/?apikey=7b30615b&t='+ movieTitleSearch + '&plot=full&r=json')
    .then(function(response) {return response.json();})
    .then(function(json) {
        document.getElementById('movie-title').innerHTML = json.Title
        document.getElementById('movie-director').innerHTML = json.Director
        document.getElementById('movie-plot').innerHTML = json.Plot
        document.getElementById('movie-actors').innerHTML = json.Actors
        document.getElementById('movie-poster').src = json.Poster
    });
}
function get_results_dropwdown () {
    var movieTitle = document.getElementById('movie-dropdown').value;
    var movieTitleSearch = movieTitle.split(' ').join('+').toLowerCase();

    fetch('https://www.omdbapi.com/?apikey=7b30615b&t='+ movieTitleSearch + '&plot=full&r=json')
    .then(function(response) {return response.json();})
    .then(function(json) {
        document.getElementById('movie-title').innerHTML = json.Title
        document.getElementById('movie-director').innerHTML = json.Director
        document.getElementById('movie-plot').innerHTML = json.Plot
        document.getElementById('movie-actors').innerHTML = json.Actors
        document.getElementById('movie-poster').src = json.Poster
    });    
}
