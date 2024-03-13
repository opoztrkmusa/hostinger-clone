const aElements = document.querySelectorAll("#aElement");
const iElements = document.querySelectorAll("#iElement");

aElements.forEach((aElement, index) => {
    aElement.addEventListener("mouseover", function() {
        iElements[index].classList.add("rotate");
    });

    aElement.addEventListener("mouseout", function() {
        iElements[index].classList.remove("rotate");
    });
});
