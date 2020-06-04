$(function(){ 
    $.get("https://shielded-bayou-12986.herokuapp.com/sections/",
    function(data) {
    $('body').append( "Name: " + data.name ) // John
            .append( "Coach: " + data.coach ); //  2pm
    }, "json");    
})