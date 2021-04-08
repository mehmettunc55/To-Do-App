




// Create a new list item when clicking on the "Add" button
function newElement() {
  let li = document.createElement("li");
  let inputValue = document.getElementById("myInput").value;
  let listedRow = document.createTextNode(inputValue);
  li.appendChild(listedRow);
  document.getElementById("myUL").appendChild(li);
  document.getElementById("myInput").value = ""; // yazilan input kutusunu bos yapiyor tekrar

  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  let close = document.getElementsByClassName("close");
  let i;
  for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
  let div = this.parentElement;
  div.style.display = "none";
  }
}
}

// Click on a close button to hide the current list item
