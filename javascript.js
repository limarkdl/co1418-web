document.body.onload = grid_products;
function grid_products(prod_id) {
  document.getElementById("tabloid").innerHTML = "";
  let prod = "Hoodie";
  let pathway = "hoodies/hoodie";  
  } if (prod_id == "Jumper") {
    prod = "Jumper";
    pathway = "jumpers/jumper";
  } else if (prod_id == "T-Shirt") {
    prod = "T-Shirt";
    pathway = "tshirt/tshirt";
  }
  for (let i = 0; i < 32; i++) {
    var div = document.createElement("div");
    let prod_index = String(i + 1);
    let code = '<div class="main-list"><table class="zoom"><tbody><tr><td><img width="200px" height="200px" src="'+ pathway +' (' + prod_index + ').jpg"></td></tr><tr><td><b>'+prod+' #' + prod_index + '</b></td></tr><tr><td>£39.99</td></tr><tr><td><button class="buy_bt" onclick="">Buy</button></td></tr></tbody> </table> </div>';
    let string_i = String(i + 1);
    div.id = "div" + String(i);
    div.innerHTML = code;
    console.log(code);    //debugging  
    document.getElementById("tabloid").appendChild(div);
  }
