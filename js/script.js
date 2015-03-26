$ = jQuery = require('jquery');
var bootstrap = require('bootstrap');
var risBka = require('ris-bka');

$(function() {
  var searchField = $("input[name='search']");


  searchField.on('keydown', function(event) {
    if (event.which !== 13) { // not pressed enter
      return
    }

    event.preventDefault();
    console.log('You pressed enter!');

    risBka.getVersion(function(soapBody) {
      $('#results').html('version: ' + soapBody);
    }, function(error) {
      $('#results').html('version: ' + error);
    });




    //$('#results').html('test');
  });

});
