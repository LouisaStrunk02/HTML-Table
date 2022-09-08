function visibility(columnId) {
    let contents = document.querySelectorAll(`#` + columnId);
    for (let i = 1; i < contents.length; i++) {
        if (contents[i].style.visibility == "hidden") {
            contents[i].style.visibility = "visible";
        }
        else {
            contents[i].style.visibility = "hidden";
        }
    }
};
