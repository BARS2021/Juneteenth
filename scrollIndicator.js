window.onscroll = function indicateScroll() {
  var scrollTotal = document.documentElement.scrollHeight;
  var scrolledAmount = document.documentElement.scrollTop;
  var scrollPosition = scrollTotal - document.documentElement.clientHeight;
  var scrollPercentage = (scrolledAmount / scrollPosition) * 100;
  document.getElementById("scrollIndicator").style.width = scrollPercentage + "%";
};
