var collapsible = document.getElementsByClassName("collapsible");

for (var index = 0; index < collapsible.length; index++) {
  function expand() {
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      this.style.color = "white";
      this.style.backgroundColor = "black";
      content.style.maxHeight = null;
    } else {
      this.style.color = "black";
      this.style.backgroundColor = "#00ff00";
      content.style.maxHeight = content.scrollHeight + "px";
    }
  }
  collapsible[index].addEventListener("click", expand);
}
