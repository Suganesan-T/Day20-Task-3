var title = document.createElement("h1")
title.innerHTML = "Harry Potter Spells"

document.body.append(title)

var container = document.createElement("div")
container.className = "container"

var row = document.createElement("div")
row.className = "row"

async function foo(){
    var api = await fetch("https://hp-api.onrender.com/api/spells")
    var res = await api.json()
    bar(res)
}
foo()

function bar(res){
    for(i=1;i<=res.length;i++){
        var column = document.createElement("div")
        column.className = "col-md-12"
        column.innerHTML = `<div class="card">
        <div class="card-header">
          ${[i]}) Spell <i class="fa fa-magic" aria-hidden="true"></i>
        </div>
        <div class="card-body">
          <h5 class="card-title">${res[i].name}</h5>
          <p class="card-text">Description: ${res[i].description}</p>
        </div>
      </div>`

      row.append(column)
      container.append(row)
      document.body.append(row)
    }
}

