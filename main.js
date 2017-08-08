let one    = document.getElementById("one");
let two    = document.getElementById("two");
let three  = document.getElementById("three");
let four   = document.getElementById("four");
let five   = document.getElementById("five");
let six    = document.getElementById("six");
let seven  = document.getElementById("seven");
let eight  = document.getElementById("eight");
let search = document.getElementById("search");

fetch("https://recipepuppyproxy.herokuapp.com/api/?q=bacon")
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log(response.status);
        return;
      }
      response.json().then(function(data) {
        // console.log("Here is the data:", data);
        for (var i = 0; i < data.results.length; i++) {
          // console.log( "should be result", data.results[i]);
        }

          one.innerHTML += `<h1>${data.results[1].title}</h1>
          <a href=${data.results[1].href}""><img src=${data.results[1].thumbnail}></a>`
          two.innerHTML += `<h1>${data.results[2].title}</h1>
          <a href=${data.results[2].href}""><img src=${data.results[2].thumbnail}></a>`
          three.innerHTML += `<h1>${data.results[3].title}</h1>
          <a href=${data.results[3].href}""><img src=${data.results[3].thumbnail}></a>`
          four.innerHTML += `<h1>${data.results[5].title}</h1>
          <a href=${data.results[5].href}""><img src=${data.results[5].thumbnail}></a>`
          five.innerHTML += `<h1>${data.results[9].title}</h1>
          <a href=${data.results[9].href}""><img src=${data.results[9].thumbnail}></a>`
          six.innerHTML += `<h1>${data.results[6].title}</h1>
          <a href=${data.results[6].href}""><img src=${data.results[6].thumbnail}></a>`
          seven.innerHTML += `<h1>${data.results[7].title}</h1>
          <a href=${data.results[7].href}""><img src=${data.results[7].thumbnail}></a>`
          eight.innerHTML += `<h1>${data.results[8].title}</h1>
          <a href=${data.results[8].href}""><img src=${data.results[8].thumbnail}></a>`

      });
    }
  )
  .catch(function(err) {
    console.log("Fetch Error :-S", err);
  });
