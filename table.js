function visibility(columnId) {
    let contents = document.querySelectorAll(`#` + columnId);
    for (let i = 2; i < contents.length; i++) {
        if (contents[i].style.visibility == "hidden") {
            contents[i].style.visibility = "visible";
        }
        else {
            contents[i].style.visibility = "hidden";
        }
    }
};

var table = document.querySelector(".table");
var columns = document.querySelectorAll(".table-head__cell")
var border = document.querySelectorAll(".border");
var captionHeight = 70;

for (let i = 0; i < border.length; i++) {
    if (i == 0) {
        border[i].style.left = `${table.offsetLeft + columns[i].offsetWidth}px`;
        border[i].style.height = `${table.offsetHeight - captionHeight}px`;
        border[i].style.top = `${table.offsetTop + captionHeight}px`;
    }
    else {
        border[i].style.left = `${border[i - 1].offsetLeft + columns[i].offsetWidth}px`;
        border[i].style.height = `${table.offsetHeight - captionHeight}px`;
        border[i].style.top = `${table.offsetTop + captionHeight}px`;
    }
}

function resize() {
    for (let i = 0; i < border.length; i++) {
        if (i == 0) {
            border[i].style.left = `${table.offsetLeft + columns[i].offsetWidth}px`;
            border[i].style.height = `${table.offsetHeight - captionHeight}px`;
            border[i].style.top = `${table.offsetTop + captionHeight}px`;
        }
        else {
            border[i].style.left = `${border[i - 1].offsetLeft + columns[i].offsetWidth}px`;
            border[i].style.height = `${table.offsetHeight - captionHeight}px`;
            border[i].style.top = `${table.offsetTop + captionHeight}px`;
        }
    }
}

document.getElementsByTagName("BODY")[0].onresize = () => resize();

function mouseDown(event, borderNumber) {
    var borderNum = borderNumber;

    var leftColumn = columns[borderNum];
    var leftColumnWidth = columns[borderNum].offsetWidth;
    var rightColumn = columns[borderNum + 1];
    var rightColumnWidth = columns[borderNum + 1].offsetWidth;
    const minWidth = 100;

    var previousColumnsWidth = 0;

    if (borderNumber > 0) {
        for (let i = 0; i < borderNumber; i++) {
            previousColumnsWidth += columns[i].offsetWidth;
        }
    }

    const mouseStart = event.clientX;

    function moveBorder(event) {
        var mouseEnd = event.clientX;
        var mouseDiff = mouseStart - mouseEnd;

        if (leftColumnWidth < minWidth && event.clientX >= (previousColumnsWidth + minWidth)) {
            border[borderNum].style.left = `${mouseEnd}px`;
            leftColumn.style.width = `${leftColumnWidth + mouseDiff}px`;
            rightColumn.style.width = `${rightColumnWidth - mouseDiff}px`;
        }
        else if (rightColumnWidth < minWidth && event.clientX <= (previousColumnsWidth + leftColumnWidth + minWidth)) {
            border[borderNum].style.left = `${mouseEnd}px`;
            leftColumn.style.width = `${leftColumnWidth - mouseDiff}px`;
            rightColumn.style.width = `${rightColumnWidth + mouseDiff}px`;
        }
        else if (event.clientX < (previousColumnsWidth + minWidth) || event.clientX > (previousColumnsWidth + leftColumnWidth + (rightColumnWidth - minWidth))) {
            console.log("hi");
            return false;
        }
        else {
            border[borderNum].style.left = `${mouseEnd}px`;
            leftColumn.style.width = `${leftColumnWidth - mouseDiff}px`;
            rightColumn.style.width = `${rightColumnWidth + mouseDiff}px`;
        }
    };

    document.addEventListener("mousemove", moveBorder);
    document.addEventListener("mouseup", (event) => {
        document.removeEventListener("mousemove", moveBorder);
    });
};
