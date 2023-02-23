function addSearch() {
    let v = document.querySelector("body");
    v.classList.add("search_show");
} 

function removeSearch() {
    let v = document.querySelector("body");
    v.classList.remove("search_show");
}

const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;")
})

document.addEventListener('click', () => {
    cursor.classList.add("expand");

    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500)
})


/* Cursor */

