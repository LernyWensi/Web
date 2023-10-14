const buttons = document.querySelector("nav").querySelectorAll("button");
const iframe = document.querySelector("iframe");

const map = {
    css: "css-test/css-test.html",
    tableA: "tableA/tableA.html",
    tableB: "tableB/tableB.html",
    formA: "formA/formA.html",
    formB: "formB/formB.html",
};

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        iframe.classList.contains("hidden") && iframe.classList.toggle("hidden");
        iframe.src = `pages/${map[button.id]}`;
    });
});

document.addEventListener("click", (e) => {
    if (Array.from(buttons).some((button) => button === e.target) || iframe.classList.contains("hidden")) return;

    iframe.classList.toggle("hidden");
});
