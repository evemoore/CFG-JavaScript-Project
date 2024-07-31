// load more items

const loadButton = document.getElementById('loadButton');
const secondGrid = document.getElementById('secondGrid');
loadButton.addEventListener('click', function() {
  document.getElementById('loadButton').style.display = "none";
  document.getElementById('secondGrid').style.display = "grid";
});

                          
// creating an array of items added to basket, calculate total number of items in basket, show item and price in basket table //
// DECLARE VARIABLES //
let itemsArray = [];

let priceArray = [];

var basketTable = document.getElementById('basketTable');
let basketNumber = document.getElementById('basketNumber');
  

// FIRST GRID ITEM //
const  button1 = document.getElementById('button1');
button1.addEventListener('click', function() {
  const item1 = document.getElementById('description1').textContent;
  itemsArray.push(item1);
    
  basketNumber.textContent = itemsArray.length;
  
  const price1WithSymbol = document.getElementById('price1').textContent;
  const price1WithoutSymbol = price1WithSymbol.replace('$', '');
  const price1 = parseInt(price1WithoutSymbol);
  priceArray.push(price1);
  
  var newRow = basketTable.insertRow();
  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  cell1.innerHTML = item1;
  cell2.innerHTML = "$" + price1;
});

// SECOND GRID ITEM //
const  button2 = document.getElementById('button2');
button2.addEventListener('click', function() {
  const item2 = document.getElementById('description2').textContent;
  itemsArray.push(item2);
    
  basketNumber.textContent = itemsArray.length;
  
  const price2WithSymbol = document.getElementById('price2').textContent;
  const price2WithoutSymbol = price2WithSymbol.replace('$', '');
  const price2 = parseInt(price2WithoutSymbol);
  priceArray.push(price2);
  
  var newRow = basketTable.insertRow();
  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  cell1.innerHTML = item2;
  cell2.innerHTML = "$" + price2;
});

// THIRD GRID ITEM //
const  button3 = document.getElementById('button3');
button3.addEventListener('click', function() {
  const item3 = document.getElementById('description3').textContent;
  itemsArray.push(item3);
    
  basketNumber.textContent = itemsArray.length;
  
  const price3WithSymbol = document.getElementById('price3').textContent;
  const price3WithoutSymbol = price3WithSymbol.replace('$', '');
  const price3 = parseInt(price3WithoutSymbol);
  priceArray.push(price3);
  
  var newRow = basketTable.insertRow();
  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  cell1.innerHTML = item3;
  cell2.innerHTML = "$" + price3;
});

// FOURTH GRID ITEM //
const  button4 = document.getElementById('button4');
button4.addEventListener('click', function() {
  const item4 = document.getElementById('description4').textContent;
  itemsArray.push(item4);
    
  basketNumber.textContent = itemsArray.length;
  
  const price4WithSymbol = document.getElementById('price4').textContent;
  const price4WithoutSymbol = price4WithSymbol.replace('$', '');
  const price4 = parseInt(price4WithoutSymbol);
  priceArray.push(price4);
  
  var newRow = basketTable.insertRow();
  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  cell1.innerHTML = item4;
  cell2.innerHTML = "$" + price4;
});

// FIFTH GRID ITEM //
const  button5 = document.getElementById('button5');
button5.addEventListener('click', function() {
  const item5 = document.getElementById('description5').textContent;
  itemsArray.push(item5);
    
  basketNumber.textContent = itemsArray.length;
  
  const price5WithSymbol = document.getElementById('price5').textContent;
  const price5WithoutSymbol = price5WithSymbol.replace('$', '');
  const price5 = parseInt(price5WithoutSymbol);
  priceArray.push(price5);
  
  var newRow = basketTable.insertRow();
  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  cell1.innerHTML = item5;
  cell2.innerHTML = "$" + price5;
});

// SIXTH GRID ITEM //
const  button6 = document.getElementById('button6');
button6.addEventListener('click', function() {
  const item6 = document.getElementById('description6').textContent;
  itemsArray.push(item6);
    
  basketNumber.textContent = itemsArray.length;
  
  const price6WithSymbol = document.getElementById('price6').textContent;
  const price6WithoutSymbol = price6WithSymbol.replace('$', '');
  const price6 = parseInt(price6WithoutSymbol);
  priceArray.push(price6);
  
  var newRow = basketTable.insertRow();
  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  cell1.innerHTML = item6;
  cell2.innerHTML = "$" + price6;
});

// SEVENTH GRID ITEM //
const  button7 = document.getElementById('button7');
button7.addEventListener('click', function() {
  const item7 = document.getElementById('description7').textContent;
  itemsArray.push(item7);
    
  basketNumber.textContent = itemsArray.length;
  
  const price7WithSymbol = document.getElementById('price7').textContent;
  const price7WithoutSymbol = price7WithSymbol.replace('$', '');
  const price7 = parseInt(price7WithoutSymbol);
  priceArray.push(price7);
  
  var newRow = basketTable.insertRow();
  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  cell1.innerHTML = item7;
  cell2.innerHTML = "$" + price7;
});

// EIGHTH GRID ITEM //
const  button8 = document.getElementById('button8');
button8.addEventListener('click', function() {
  const item8 = document.getElementById('description8').textContent;
  itemsArray.push(item8);
    
  basketNumber.textContent = itemsArray.length;
  
  const price8WithSymbol = document.getElementById('price8').textContent;
  const price8WithoutSymbol = price8WithSymbol.replace('$', '');
  const price8 = parseInt(price8WithoutSymbol);
  priceArray.push(price8);
  
  var newRow = basketTable.insertRow();
  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  cell1.innerHTML = item8;
  cell2.innerHTML = "$" + price8;
});

// NINETH GRID ITEM //
const  button9 = document.getElementById('button9');
button9.addEventListener('click', function() {
  const item9 = document.getElementById('description9').textContent;
  itemsArray.push(item9);
    
  basketNumber.textContent = itemsArray.length;
  
  const price9WithSymbol = document.getElementById('price9').textContent;
  const price9WithoutSymbol = price9WithSymbol.replace('$', '');
  const price9 = parseInt(price9WithoutSymbol);
  priceArray.push(price9);
  
  var newRow = basketTable.insertRow();
  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  cell1.innerHTML = item9;
  cell2.innerHTML = "$" + price9;
});

// TENTH GRID ITEM //
const  button10 = document.getElementById('button10');
button10.addEventListener('click', function() {
  const item10 = document.getElementById('description10').textContent;
  itemsArray.push(item10);
    
  basketNumber.textContent = itemsArray.length;
  
  const price10WithSymbol = document.getElementById('price10').textContent;
  const price10WithoutSymbol = price10WithSymbol.replace('$', '');
  const price10 = parseInt(price10WithoutSymbol);
  priceArray.push(price10);
  
  var newRow = basketTable.insertRow();
  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  cell1.innerHTML = item10;
  cell2.innerHTML = "$" + price10;
});

// ELEVENTH GRID ITEM //
const  button11 = document.getElementById('button11');
button11.addEventListener('click', function() {
  const item11 = document.getElementById('description11').textContent;
  itemsArray.push(item11);
    
  basketNumber.textContent = itemsArray.length;
  
  const price11WithSymbol = document.getElementById('price11').textContent;
  const price11WithoutSymbol = price11WithSymbol.replace('$', '');
  const price11 = parseInt(price11WithoutSymbol);
  priceArray.push(price11);
  
  var newRow = basketTable.insertRow();
  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  cell1.innerHTML = item11;
  cell2.innerHTML = "$" + price11;
});

// TWELVETH GRID ITEM //
const  button12 = document.getElementById('button12');
button12.addEventListener('click', function() {
  const item12 = document.getElementById('description12').textContent;
  itemsArray.push(item12);
    
  basketNumber.textContent = itemsArray.length;
  
  const price12WithSymbol = document.getElementById('price12').textContent;
  const price12WithoutSymbol = price12WithSymbol.replace('$', '');
  const price12 = parseInt(price12WithoutSymbol);
  priceArray.push(price12);
  
  var newRow = basketTable.insertRow();
  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  cell1.innerHTML = item12;
  cell2.innerHTML = "$" + price12;
});

// THIRTEENTH GRID ITEM //
const  button13 = document.getElementById('button13');
button13.addEventListener('click', function() {
  const item13 = document.getElementById('description13').textContent;
  itemsArray.push(item13);
    
  basketNumber.textContent = itemsArray.length;
  
  const price13WithSymbol = document.getElementById('price13').textContent;
  const price13WithoutSymbol = price13WithSymbol.replace('$', '');
  const price13 = parseInt(price13WithoutSymbol);
  priceArray.push(price13);
  
  var newRow = basketTable.insertRow();
  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  cell1.innerHTML = item13;
  cell2.innerHTML = "$" + price13;
});

// FOURTEENTH GRID ITEM //
const  button14 = document.getElementById('button14');
button14.addEventListener('click', function() {
  const item14 = document.getElementById('description14').textContent;
  itemsArray.push(item14);
    
  basketNumber.textContent = itemsArray.length;
  
  const price14WithSymbol = document.getElementById('price14').textContent;
  const price14WithoutSymbol = price14WithSymbol.replace('$', '');
  const price14 = parseInt(price14WithoutSymbol);
  priceArray.push(price14);
  
  var newRow = basketTable.insertRow();
  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  cell1.innerHTML = item14;
  cell2.innerHTML = "$" + price14;
});

// FIFTEENTH GRID ITEM //
const  button15 = document.getElementById('button15');
button15.addEventListener('click', function() {
  const item15 = document.getElementById('description15').textContent;
  itemsArray.push(item15);
    
  basketNumber.textContent = itemsArray.length;
  
  const price15WithSymbol = document.getElementById('price15').textContent;
  const price15WithoutSymbol = price15WithSymbol.replace('$', '');
  const price15 = parseInt(price15WithoutSymbol);
  priceArray.push(price15);
  
  var newRow = basketTable.insertRow();
  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  cell1.innerHTML = item15;
  cell2.innerHTML = "$" + price15;
});

// SIXTEENTH GRID ITEM //
const  button16 = document.getElementById('button16');
button16.addEventListener('click', function() {
  const item16 = document.getElementById('description16').textContent;
  itemsArray.push(item16);
    
  basketNumber.textContent = itemsArray.length;
  
  const price16WithSymbol = document.getElementById('price16').textContent;
  const price16WithoutSymbol = price16WithSymbol.replace('$', '');
  const price16 = parseInt(price16WithoutSymbol);
  priceArray.push(price16);
  
  var newRow = basketTable.insertRow();
  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  cell1.innerHTML = item16;
  cell2.innerHTML = "$" + price16;
});

// SEVENTEETH GRID ITEM //
const  button17 = document.getElementById('button17');
button17.addEventListener('click', function() {
  const item17 = document.getElementById('description17').textContent;
  itemsArray.push(item17);
    
  basketNumber.textContent = itemsArray.length;
  
  const price17WithSymbol = document.getElementById('price17').textContent;
  const price17WithoutSymbol = price17WithSymbol.replace('$', '');
  const price17 = parseInt(price17WithoutSymbol);
  priceArray.push(price17);
  
  var newRow = basketTable.insertRow();
  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  cell1.innerHTML = item17;
  cell2.innerHTML = "$" + price17;
});

// EIGHTEENTH GRID ITEM //
const  button18 = document.getElementById('button18');
button18.addEventListener('click', function() {
  const item18 = document.getElementById('description18').textContent;
  itemsArray.push(item18);
    
  basketNumber.textContent = itemsArray.length;
  
  const price18WithSymbol = document.getElementById('price18').textContent;
  const price18WithoutSymbol = price18WithSymbol.replace('$', '');
  const price18 = parseInt(price18WithoutSymbol);
  priceArray.push(price18);
  
  var newRow = basketTable.insertRow();
  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  cell1.innerHTML = item18;
  cell2.innerHTML = "$" + price18;
});

// NINETEENTH GRID ITEM //
const  button19 = document.getElementById('button19');
button19.addEventListener('click', function() {
  const item19 = document.getElementById('description19').textContent;
  itemsArray.push(item19);
    
  basketNumber.textContent = itemsArray.length;
  
  const price19WithSymbol = document.getElementById('price19').textContent;
  const price19WithoutSymbol = price19WithSymbol.replace('$', '');
  const price19 = parseInt(price19WithoutSymbol);
  priceArray.push(price19);
  
  var newRow = basketTable.insertRow();
  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  cell1.innerHTML = item19;
  cell2.innerHTML = "$" + price19;
});

// TWENTIETH GRID ITEM //
const  button20 = document.getElementById('button20');
button20.addEventListener('click', function() {
  const item20 = document.getElementById('description20').textContent;
  itemsArray.push(item20);
    
  basketNumber.textContent = itemsArray.length;
  
  const price20WithSymbol = document.getElementById('price20').textContent;
  const price20WithoutSymbol = price20WithSymbol.replace('$', '');
  const price20 = parseInt(price20WithoutSymbol);
  priceArray.push(price20);
  
  var newRow = basketTable.insertRow();
  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  cell1.innerHTML = item20;
  cell2.innerHTML = "$" + price20;
});

// TWENTY-FIRST GRID ITEM //
const  button21 = document.getElementById('button21');
button21.addEventListener('click', function() {
  const item21 = document.getElementById('description21').textContent;
  itemsArray.push(item21);
    
  basketNumber.textContent = itemsArray.length;
  
  const price21WithSymbol = document.getElementById('price21').textContent;
  const price21WithoutSymbol = price21WithSymbol.replace('$', '');
  const price21 = parseInt(price21WithoutSymbol);
  priceArray.push(price21);
  
  var newRow = basketTable.insertRow();
  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  cell1.innerHTML = item21;
  cell2.innerHTML = "$" + price21;
});

// TWENTY-SECOND GRID ITEM //
const  button22 = document.getElementById('button22');
button22.addEventListener('click', function() {
  const item22 = document.getElementById('description22').textContent;
  itemsArray.push(item22);
    
  basketNumber.textContent = itemsArray.length;
  
  const price22WithSymbol = document.getElementById('price22').textContent;
  const price22WithoutSymbol = price22WithSymbol.replace('$', '');
  const price22 = parseInt(price22WithoutSymbol);
  priceArray.push(price22);
  
  var newRow = basketTable.insertRow();
  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  cell1.innerHTML = item22;
  cell2.innerHTML = "$" + price22;
});

// TWENTY-THIRD GRID ITEM //
const  button23 = document.getElementById('button23');
button23.addEventListener('click', function() {
  const item23 = document.getElementById('description23').textContent;
  itemsArray.push(item23);
    
  basketNumber.textContent = itemsArray.length;
  
  const price23WithSymbol = document.getElementById('price23').textContent;
  const price23WithoutSymbol = price23WithSymbol.replace('$', '');
  const price23 = parseInt(price23WithoutSymbol);
  priceArray.push(price23);
  
  var newRow = basketTable.insertRow();
  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  cell1.innerHTML = item23;
  cell2.innerHTML = "$" + price23;
});

// TWENTY-FOURTH GRID ITEM //
const  button24 = document.getElementById('button24');
button24.addEventListener('click', function() {
  const item24 = document.getElementById('description24').textContent;
  itemsArray.push(item24);
    
  basketNumber.textContent = itemsArray.length;
  
  const price24WithSymbol = document.getElementById('price24').textContent;
  const price24WithoutSymbol = price24WithSymbol.replace('$', '');
  const price24 = parseInt(price24WithoutSymbol);
  priceArray.push(price24);
  
  var newRow = basketTable.insertRow();
  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  cell1.innerHTML = item24;
  cell2.innerHTML = "$" + price24;
});

//reveal basket table when hovering over, if basket empty then display message  
const basketImg = document.getElementById('basketImg');
const emptyBasket = document.getElementById('emptyBasket');
var basketTable = document.getElementById('basketTable');

basketImg.addEventListener('mouseover', function() {
  if (itemsArray.length < 1) {
    emptyBasket.style.display = 'block';
  } else {
    basketTable.style.display = 'block';
  }
  
  // creating total row for basket 
  let sum = 0;
  for (let i = 0; i < priceArray.length; i++) {
    sum += priceArray[i];
  }
  var totalRow = basketTable.insertRow();
  var cell1 = totalRow.insertCell(0);
  var cell2 = totalRow.insertCell(1);
  cell1.innerHTML = "Total:";
  cell2.innerHTML = "$" + sum;
});
  


// hide table or paragraph when mouse moves off image
var basketTable = document.getElementById('basketTable');

 basketImg.addEventListener('mouseout', function() {
   if (itemsArray.length === 0) {
     emptyBasket.style.display = 'none';
   } else {
     basketTable.style.display = 'none';   
   }
   var rowCount = basketTable.rows.length;
   basketTable.deleteRow(rowCount - 1);
});


// Newsletter popup
const newsletterPopup = document.getElementById("newsletterPopup");
const subscribeButton = document.getElementById("subscribeButton");
const cross = document.getElementById("cross");


//loading popup
document.addEventListener("DOMContentLoaded", function () {
 setTimeout(function () {
   document.getElementById("newsletterPopup").style.display = "block";
 }, 5000);
});

//removing popup
cross.addEventListener("click", function () {
newsletterPopup.style.display = "none";
});

//displaying a thankyou message after subscribing
subscribeButton.addEventListener("click", function () {
  let firstName = document.getElementById("firstName").value;
  const thankyouParagraph = document.createElement('p');
  thankyouParagraph.setAttribute("id", "thankyouParagraph");
  const thankyouText = document.createTextNode(`Thank you ${firstName}, check your email for the code!`);
  thankyouParagraph.appendChild(thankyouText);
  const subscribeForm = document.getElementById('subscribeForm');
  newsletterPopup.appendChild(thankyouParagraph);
  subscribeForm.style.display = "none"; 
}); 

// Prevent page reload when subscribe button is clicked
subscribeButton.addEventListener("click", function (event) {
    event.preventDefault();
  });
