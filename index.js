   $('form').on('submit', function (e) {
       e.preventDefault();
       var api = 'https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=';
       var title = $('input#search').val();
       var url = api + title;
       var page = 'https://en.wikipedia.org/?curid=';
       $.getJSON(url, function (result) {

           var obj = result.query.pages;
           Object.keys(obj).forEach(function (key) {
               var li = $('<div class = "item"></div>');
               li.html(`<div class="content">
                        <a class = "header" target = '_blank' href = ${page}${key}>${obj[key].title}</a>
                        <div class='description'>${obj[key].extract}</div>
                        </div>`);
               $('#message').append(li);

           });
       })

   })
