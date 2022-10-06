//Conseguir acessar a API por fetch
//Tentar listar os produtos no console
//Trazer apenas 10 produtos

const produtos = async () => {
  const options = {
    method: "GET",
    mode: "cors",
    cache: "default",
  };
  const busca = await fetch("https://dummyjson.com/products", options);
  const json = await busca.json();
  for (let i = 0; i < 30; i++) {
    const div = document.createElement("div");
    div.setAttribute("class", "produtos");
    div.innerHTML = `<h1 id="title${i}"></h1><p id="description${i}"></p><div id="foto${i}"></div><h2 id="price${i}"></h2><button>Comprar</button>`;
    document.querySelector("main").appendChild(div);

    document.querySelector("#title" + i).innerHTML = json.products[i].title;
    document.querySelector("#description" + i).innerHTML = json.products[i].description;
    document.querySelector("#price" + i).innerHTML = "R$" + json.products[i].price;
    document.querySelector("#foto" + i).innerHTML = `<img src="${json.products[i].images[0]}" alt="" width="167" heigth="88" class="foto">`;
  }
};

produtos();
