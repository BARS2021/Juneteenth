var collapsible = document.getElementsByClassName("collapsible");

for (var index = 0; index < collapsible.length; index++) {
  function expand() {
    var collapsibleContent = this.nextElementSibling;
    if (collapsibleContent.style.maxHeight){
      this.style.color = "white";
      this.style.backgroundColor = "black";
      collapsibleContent.style.maxHeight = null;
    }
    else {
      this.style.color = "black";
      this.style.backgroundColor = "#00ff00";
      collapsibleContent.style.maxHeight = collapsibleContent.scrollHeight + "px";
    }
  }
  collapsible[index].addEventListener("click", expand);
}

//
