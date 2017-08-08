
let search    = document.getElementById("search");
let button    = document.querySelector("button");
  // console.log(search.value);

// console.log(bar);


button.addEventListener('click', function(){
  let container = document.getElementById("container");

  while(container.firstChild){
    container.removeChild(container.firstChild);
  }
  let bar = search.value;
fetch("https://recipepuppyproxy.herokuapp.com/api/?q=" + bar)
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log(response.status);
        return;
      }
      response.json().then(function(data) {
        // console.log("Here is the data:", data);
        for (var i = 0; i < data.results.length; i++) {
          let el1 = document.createElement("div");
          el1.classList.add("el1");
          if (!data.results[i].thumbnail) {
            el1.innerHTML = `<h1>${data.results[i].title}</h1>
            <a href= "${data.results[i].href}"><img src="http://via.placeholder.com/350x150"></a>`;
            container.appendChild(el1);
          } else {
            el1.innerHTML = `<h1 link="${data.results[i].href}">${data.results[i].title}</h1>
            <a href= "${data.results[i].href}"><img src=${data.results[i].thumbnail}></a>`;
            container.appendChild(el1);
          }


          //  create a div
          //  add content
          //  += header (url)
          //  += img (url)
          //  add myDiv to .container
        }



          // one.innerHTML += `<h1>${data.results[1].title}</h1>
          // <a href=${data.results[1].href}""><img src=${data.results[1].thumbnail}></a>`
          // two.innerHTML += `<h1>${data.results[2].title}</h1>
          // <a href=${data.results[2].href}""><img src=${data.results[2].thumbnail}></a>`
          // three.innerHTML += `<h1>${data.results[3].title}</h1>
          // <a href=${data.results[3].href}""><img src=${data.results[3].thumbnail}></a>`
          // four.innerHTML += `<h1>${data.results[5].title}</h1>
          // <a href=${data.results[5].href}""><img src=${data.results[5].thumbnail}></a>`
          // five.innerHTML += `<h1>${data.results[9].title}</h1>
          // <a href=${data.results[9].href}""><img src=${data.results[9].thumbnail}></a>`
          // six.innerHTML += `<h1>${data.results[6].title}</h1>
          // <a href=${data.results[6].href}""><img src=${data.results[6].thumbnail}></a>`
          // seven.innerHTML += `<h1>${data.results[7].title}</h1>
          // <a href=${data.results[7].href}""><img src=${data.results[7].thumbnail}></a>`
          // eight.innerHTML += `<h1>${data.results[8].title}</h1>
          // <a href=${data.results[8].href}""><img src=${data.results[8].thumbnail}></a>`

      });
    }
  )
  .catch(function(err) {
    console.log("Fetch Error :-S", err);
  });
})
