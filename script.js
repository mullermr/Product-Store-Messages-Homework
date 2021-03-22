var products = [
  {
    id:0,
    name:"Apples",
    price:"2.99",
    image:"https://banner2.kisspng.com/20180310/jyw/kisspng-plum-tomato-apple-fuji-vector-two-apples-5aa49732abbf96.2950483615207360507035.jpg",
    color:"red"
  },
  {
    id:1,
    name:"Bananas",
    price:"2.50",
    image:"https://icon2.kisspng.com/20180125/cyq/kisspng-banana-powder-fruit-cavendish-banana-banana-5a6a705e555d06.3110857015169250223497.jpg",
    color:"gold"
  },
  {
    id:2,
    name:"oranges",
    price:"3.50",
    image: "https://icon2.kisspng.com/20180308/wlw/kisspng-south-africa-blood-orange-mandarin-orange-tangelo-south-africa-imports-of-oranges-5aa10d936cc6c7.6226563815205042114456.jpg",
    color:"orange"
  }
];

// Function to create the Pop Up div
function displayInfo(product){
  // Declaring the variables for the pop up div tag
  var that = this;
  this.ele = document.createElement("div");
  this.ele.classList.add("popUp");
  this.itemImg = document.createElement("img");
  this.itemImg.src = product.image;
  this.itemName = document.createElement("p");
  this.itemPrice = document.createElement("p");
  
  // Setting variables to product information
  this.itemName.innerHTML = "Name: " + product.name;
  this.itemPrice.innerHTML = "Price: $" + product.price;
  
  // appending variables into the div tag 
  this.ele.appendChild(this.itemImg);
  this.ele.appendChild(this.itemName);
  this.ele.appendChild(this.itemPrice);
  
  // Event listener to have the Pop up disapper 
  this.ele.addEventListener("click", function(){
    that.ele.style.display = "none";
  });
  
  
  // Appending the div tag to the body
  document.body.appendChild(this.ele);
}

// Function to create the div tag to display the items 
function displayItem(product){
  //Declaring the variables for the items
  var that = this;
  this.ele = document.createElement("div");
  this.ele.classList.add("product");
  this.eleitemImg = document.createElement("img");
  this.eleitemImg.src = product.image;
  this.elename = document.createElement("p");
  this.eleprice = document.createElement("p");
  
  // Setting the variables to the product information
  this.elename.innerHTML = "Name: " + product.name;
  this.eleprice.innerHTML = "Price: $" + product.price;
  
  // Appending the variables into the div
  this.ele.appendChild(this.eleitemImg);
  this.ele.appendChild(this.elename);
  this.ele.appendChild(this.eleprice);
  
  // Event listeners in order to change the border color 
  this.ele.addEventListener("mouseover", function(){
    that.ele.style.borderColor = product.color;
  })
  
  this.ele.addEventListener("mouseout", function(){
    that.ele.style.borderColor = "black";
  })
  
  // Event listeners to make pop up display
  this.ele.addEventListener("click", function(){
    var itemInfo = new displayInfo(product);
  });
  
  // Appending the div into the body
  document.body.appendChild(this.ele)
}

// Function to create the products
function createItems(products){
  // Declaring variables
  var that = this;
  this.itemInfo = document.createElement("div");
  this.itemInfo.classList.add("popUp");
  this.items = [];
  
  // For loop to loop through the products array
  for(var i = 0; i < products.length; i++){
    this.items.push(new displayItem(products[i]));
  }
}

// Creating the variable cart to create items
var cart = new createItems(products)