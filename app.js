let toppings = [
  {
    name: "Peanut Butter Cups",
    image:
      "https://www.shugarysweets.com/wp-content/uploads/2020/08/peanut-butter-cups-44-720x720.jpg",
    price: 0.75,
    sku: "475983P",
  },
];

let iceCream = [
  {
    name: "Vanilla",
    image:
      "https://images.unsplash.com/photo-1570197788417-0e82375c9371?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dmFuaWxsYSUyMGljZSUyMGNyZWFtfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    price: 2.0,
    sku: "123P",
  },
];

let vessels = [
  {
    name: "Waffle Cone",
    image:
      "https://images.unsplash.com/photo-1559703248-dcaaec9fab78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aWNlJTIwY3JlYW0lMjBjb25lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    price: 0.5,
    sku: "494r3P",
  },
];

function drawToppings() {
  let toppingsElem = document.getElementById("toppings-cards");
  let template = "";

  for (let i = 0; i < toppings.length; i++) {
    let topping = toppings[0];

    template += `
      <div class="col-6 col-md-4">
          <div class="card topping-card">
              <img
                  src="${topping.image}"
                  alt="${topping.name}"
                  />
              <div class="card-body">
                  <div
                      class="d-flex align-items-center justify-content-between"
                      >
                        <p><b>${topping.name}</b></p>
                        <p>Price: $${topping.price}</p>
                  </div>
              </div>
          </div>
      </div>
      `;
  }

  toppingsElem.innerHTML = template;

  console.log("drawToppings");
}

function drawIceCream() {
  let iceCreamElem = document.getElementById("ice-cream-cards");
  let template = "";

  for (let i = 0; i < iceCream.length; i++) {
    let topping = iceCream[0];
  }

  template += `
        
        `;
}

drawToppings();
