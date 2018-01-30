$(document).ready(function() {

    if(! "jekyll_var" in window){
        console.log("in if statement");
    var title = jekyll_var("title", "page")||"TITLE";
    }
    console.log("Page Title is: " + title);
    console.log("page_title is: " + page_title);
});