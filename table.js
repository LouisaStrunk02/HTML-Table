function changeVisibility(columnName) {
  let contents = document.getElementsByClassName(columnName);
  for (let i = 0; i < contents.length; i++) {
    if (contents[i].style.visibility == "hidden") {
      contents[i].style.visibility = "visible";
    }
    else {
      contents[i].style.visibility = "hidden";
    }
  }
};
