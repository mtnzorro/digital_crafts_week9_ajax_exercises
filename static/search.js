$('#search-form').submit(function(event){
  event.preventDefault();

function getData(callback){
  $.get('/search', $('#search-form').serialize(), callback);
}
  getData(function(stuff){
    if(stuff.length === 0){
      $('#result-list').append('<p>' +'You have no taste in movies.  Please try again.' + '</p>');
    }
    else {
    $('#result-list').append('<p>' + 'Found ' + stuff.length+ ' result(s):'  + '</p>');
   stuff.forEach(function(stuffs){
     $('#result-list').append('<li>' + stuffs.title  + '</li>');
     $('#result-list').append('<li>' + stuffs.url  + '</li>');
   });
  }
});
});
