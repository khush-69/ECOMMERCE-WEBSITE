let x = document.getElementById("products")
let prods = [
  {
    name: " Red Color T-Shirt",
    price: "20$",
    Image: "buy-1.jpg",
    description: "A bright red coloured tshirt of Puma"
  },
  {
    name: "Nike Trouser",
    price: "45$",
    Image: "category-1.jpg",
    description: "Nike Trousers available in all sizes"
  },
  {
    name: " HRX Shoes",
    price: "80$",
    Image: "buy-2.jpg",
    description: "HRX Shoes available in sizes between IN 6 to IN 10"
  },
  {
    name: "Titan Watch",
    price: "55$",
    Image: "product-8.jpg",
    description: "A Watch in Black Colour"
  },
  {
    name: "Puma Sports T-Shirt",
    price: "30$",
    Image: "product-6.jpg",
    description: "Puma Sports T-Shirt in all sizes"
  },
  {
    name: "MI Band Smart Watch",
    price: "26$",
    Image: "exclusive.png",
    description: "A MI Band Smart Watch best to use while doing Outdoor Workouts"
  },
];

// prods.map((a) => a.Image);
// x.innerHTML = "";
x.innerHTML=`<h2 class="title">Top Products</h2>`;
for (let i = 0; i <= prods.length; i = i + 3) {
  x.innerHTML += `<div class="products">
<div class="smallcont">
<div class="row">
    <div class="col-3">
        <img src=${
          prods[i].Image
        } alt="" height="180px" width="120px" class="imgp">
        <h4 class="prod1">${prods[i].name}</h4>
        <p class="price">${prods[i].price}</p>
        <p style="text-align:center; margin-top:5px;">${prods[i].description}</p>
    </div>
    <div class="col-3">
        <img src="${
          prods[i + 1].Image
        }" alt="" height="180px" width="120px" class="imgp">
        <h4 class="prod1">${prods[i + 1].name}</h4>
        <p class="price">55$</p>
        <p style="text-align:center; margin-top:5px;">${prods[i+1].description}</p>
    </div>
    <div class="col-3">
        <img src="${
          prods[i + 2].Image
        }" alt="" height="180px" width="120px" class="imgp">
        <h4 class="prod1">${prods[i + 2].name}</h4>
        <p class="price">${prods[i + 2].price}</p>
        <p style="text-align:center; margin-top:5px;">${prods[i+2].description}</p>
    </div>
</div>
</div>
</div>`
}
function search(){
    let input=document.getElementById("search").value;
    let show="";
    show+=`<h4 style="margin-bottom:20px;">Results for your search are:</h4>`
    for(let i=0;i<prods.length;i++)
    {
        if(input=="")
        {
            location.replace("./products.html");
        }
        else if(prods[i].name.toLowerCase().includes(input)||prods[i].name.toUpperCase().includes(input))
        {
            show+=`<div class="search">
            <img src="${
              prods[i].Image
            }" alt="" height="50px" width="50px" class="imgp">
            <h4 class="prod1">${prods[i].name}</h4>
            <p class="price">${prods[i].price}</p>
            <p style="text-align:center; margin-top:5px;">${prods[i].description}</p>
        </div>`;
        }
    }
    document.getElementById("search_prod").innerHTML=show;
}
