function visibility(columnId) {
  let contents = document.getElementsByName(columnId);
  for (let i = 0; i < contents.length; i++) {
    if (contents[i].style.visibility == "hidden") {
      contents[i].style.visibility = "visible";
    }
    else {
      contents[i].style.visibility = "hidden";
    }
  }
};
