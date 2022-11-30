

/* function render_cart() {
    document.getElementById("main_block").innerHTML = "";
    let prod_id;
    let 
    
  
    for (let i = 0; i < localStorage.length; i++) {
    



}
} */
/* 
var div = document.createElement("div");
    let prod_index = String(i + 1);
    let code = '<div class="main-list"><table class="zoom"><tbody><tr><td><img width="200px" height="200px" src="'+ pathway +' (' + prod_index + ').jpg"></td></tr><tr><td><b>'+prod+' #' + prod_index + '</b></td></tr><tr><td>£39.99</td></tr><tr><td><button class="buy_bt" onclick="">Buy</button></td></tr></tbody> </table> </div>';
    let string_i = String(i + 1);
    div.id = "div" + String(i);
    div.innerHTML = code;
    console.log(code);    //debugging  
    document.getElementById("tabloid").appendChild(div); */
    document.onload = csvToArr(csvString);
    /* const csvString = `
    Series_reference,Period,Data_value,Suppressed,STATUS,UNITS,Magnitude,Subject,Group,Series_title_1,Series_title_2,Series_title_3,Series_title_4,Series_title_5
    BDCQ.SEA1AA,2011.06,80078,,F,Number,0,Business Data Collection - BDC,Industry by employment variable,Filled jobs,"Agriculture, Forestry and Fishing",Actual,,
    BDCQ.SEA1AA,2011.09,78324,,F,Number,0,Business Data Collection - BDC,Industry by employment variable,Filled jobs,"Agriculture, Forestry and Fishing",Actual,,
    BDCQ.SEA1AA,2011.12,85850,,F,Number,0,Business Data Collection - BDC,Industry by employment variable,Filled jobs,"Agriculture, Forestry and Fishing",Actual,,
    ` */
    function csvToArr(stringValue) {
        // Add logic
        const formattedString = stringValue.trim().split('\n');
        console.log('formattedString: ', formattedString)
      }

      
      