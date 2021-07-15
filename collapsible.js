var collapsible = document.getElementsByClassName("collapsible");

for (var index = 0; index < collapsible.length; index++) {
  function expand() {
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
      this.style.color = "white";
      this.style.backgroundColor = "black";
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      this.style.color = "black";
      this.style.backgroundColor = "#00ff00";
    }
  }
  collapsible[index].addEventListener("click", expand);
}
