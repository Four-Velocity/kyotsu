/* Open external nav links in new tab and add material/arrow-top-right icon */

const externalNavs = [
    "coverage"
]
let navs = document.getElementsByClassName("md-nav__item")

for (let nav of  navs) {
    let navChildren = nav.children;
    if (navChildren.length === 1 && navChildren[0].localName === "a") {
        let a = navChildren[0];
        if (externalNavs.includes(a.children[0].innerHTML.toLowerCase().trim())) {
            a.setAttribute("target", "_blank");
            a.innerHTML+='' +
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">' +
                '<path d="M5 17.59 15.59 7H9V5h10v10h-2V8.41L6.41 19 5 17.59Z"></path>' +
                '</svg>';
        }
    }
}
