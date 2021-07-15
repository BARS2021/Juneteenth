window.onscroll = function indicateScroll() {
  var scrollTotal = document.documentElement.scrollHeight;
  var scrolledAmount = document.documentElement.scrollTop;
  var scrollHeight = scrollTotal - document.documentElement.clientHeight;
  var scrollPercentage = (scrolledAmount / scrollHeight) * 100;
  document.getElementById("scrollIndicator").style.width = scrollPercentage + "%";
}
