//alert("test")



fetch("https://raw.githubusercontent.com/jamesmontemagno/app-monkeys/master/MonkeysApp/monkeydata.json")
.then((response) => response.json())
.then((data) => {
    const monkeys = data;
    getMonkey(monkeys);
})

function getMonkey(monkeys){
    console.log(monkeys)

    let myHTML = "";
    
    for(a = 0; a<monkeys.length ; a++)
    {
        myHTML +=`
        <div class="card" style="width: 18rem;">
  <img src=${monkeys[a].Image} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${monkeys[a].Name}</h5>
    <p class="card-text">${monkeys[a].Details}</p>
    <p class="card-text">Population: ${monkeys[a].Population}</p>
    <p class="card-text">Longitude: ${monkeys[a].Longitude}</p>
    <p class="card-text">${monkeys[a].Location}</p>
    <a href="#" class="btn btn-primary">Details</a>
  </div>
</div>
        `

    }

    document.getElementById("demo").innerHTML = myHTML;
}



/*


<div class="card">
            <div class="card-body">
              <h5 class="card-title">Trystan</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
            </div>
            <img src="..." class="card-img-bottom" alt="...">
          </div>





fetch("https://raw.githubusercontent.com/jamesmontemagno/app-monkeys/master/MonkeysApp/monkeydata.json")
.then((response) => response.json())
.then((data) => {
    console.log(data);

    
})
fetch("https://raw.githubusercontent.com/jamesmontemagno/app-monkeys/master/MonkeysApp/monkeydata.json")
.then((response) => response.json())
.then((data) => {
    console.log(data);

    
})
*/