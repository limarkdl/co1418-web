                                  /* SpreadSheet object to store our data. Since we need to be able to have an access to this
                                                                            SpreadSheet with dynamical names, it's an object */



var prodIsDisplayed;                                                        // Service variable to store the type of items which are displayed
let index = localStorage.length;                                            // Variable which controls and store the size of localStorage


document.onload = render_grid('UCLan_Hoodie');                              // Rendering UCLan Hoodies as default on load

function render_grid(name_of_product) {                                     // Function which creates grid with products and displays it
    document.getElementById("tabloid").innerHTML = "";                      // Reset tabloid element to be able to display new grid
    prodIsDisplayed = name_of_product;                                      // Setting up global variable the displayed type of items, to be able to see which type of items is displayed
    for (let i = 0; i < products[name_of_product].length; i++) {
        var div = document.createElement("div");                            // Creating grid element
        let code = `<div onclick="item_redirect('`+prodIsDisplayed+`','`+i+`')"> 
<table class="zoom">
               <tbody>
               <tr>
                    <td><img src="`+ products[name_of_product][i].imagesrcIs + `" alt="product image" width="200px" height="200px"></td>
               </tr>
               <tr>
                    <td><a href="item.html" style="font-size: x-large">`+ products[name_of_product][i].typeIs + `</a></td>
               </tr>
               <tr>
                    <td>`+ products[name_of_product][i].colorIs + `</td>
               </tr>
               <tr>
                    <td style="width:250px">`+ products[name_of_product][i].descriptionIs + `</td>
               </tr>
               <tr>
               <td><table>
               <tbody>
               <tr>
                    <td>`+ products[name_of_product][i].priceIs + `</td>
                    <td><button id="bt_buy`+ i + `" onclick="itemAddToCart(` + i + `)" style="width:100px;height:50px">BUY</button></td>
               </tr>
               </tbody>
               </table></td>
               </tr>
               </tbody>
               </table>
</div>`;                                                                    // Dynamic code for grid element, which allows us to display every item from spreadsheet
        div.id = "div" + String(i);                                         // Applying id for each grid element, to link every div element and item's ID with each other
        div.innerHTML = code;                                               // Inserting completed code to created grid element
        document.getElementById("tabloid").appendChild(div);                // Appending created element to main element - tabloid
    }

};


function itemAddToCart(i) {
    var obj = {
        name_of_p: products[prodIsDisplayed].at(i).typeIs,
        id: i
    };                                                                      // Creating object dynamically 
    localStorage.setItem(index, JSON.stringify(obj));                       // Pushing created object into localStorage

                                                                            // Visualization of adding to the shopping cart 
    document.getElementById("bt_buy" + i).innerText = "ADDED";
    document.getElementById("bt_buy" + i).style.backgroundColor = "green";
    setTimeout(() => {
        document.getElementById("bt_buy" + i).innerText = "BUY";
        document.getElementById("bt_buy" + i).style.backgroundColor = "";
    }, "1000");


    index++;                                                                //Increasing the index pointer to the next free space in localStorage array
    
}

function item_redirect(type, i) {
    var chosen = {
        type_of: type, 
        id: i
    };
    sessionStorage.setItem('Item',JSON.stringify(chosen) );
    console.log(sessionStorage.getItem('Item'));
}












