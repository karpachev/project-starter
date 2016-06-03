requirejs.config({
    paths: {
        jquery: "https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min",
        bootstrap: "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min"
    },
    shim: {
        bootstrap: {
            deps: ['jquery']
        }
    }
});
//Define dependencies and pass a callback when dependencies have been loaded
require(["jquery", "bootstrap"], function ($) {
    //Bootstrap and jquery are ready to use here
    //Access jquery and bootstrap plugins with $ variable
    console.log($("head"))
});