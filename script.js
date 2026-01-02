const button = document.querySelector(".toggle-btn");
const info = document.getElementById("project-info");

button.addEventListener("click", function () {
    if (info.style.display === "none") {
        info.style.maxHeight = "200px";
        button.textContent = "Less Info";
    } else {
        info.style.display = "none";
        button.textContent = "More Info";
    }
});
