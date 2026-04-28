import { state } from "./state.js";
import { renderProducts, renderCart } from "./ui.js";

/* SEARCH */
document.getElementById("searchInput").oninput=e=>{
state.search=e.target.value.toLowerCase();
renderProducts();
};

/* FILTER */
document.querySelectorAll(".filterBtn").forEach(b=>{
b.onclick=()=>{
state.category=b.dataset.cat;
renderProducts();
};
});

/* SORT */
document.getElementById("sortSelect").onchange=e=>{
state.sort=e.target.value;
renderProducts();
};

/* DARK MODE */
document.getElementById("darkToggle").onclick=()=>{
document.documentElement.classList.toggle("dark");
};

/* PANELS */
document.getElementById("cartToggle").onclick=()=>{
document.getElementById("cartPanel").classList.toggle("translate-x-full");
};

document.getElementById("wishlistToggle").onclick=()=>{
document.getElementById("wishlistPanel").classList.toggle("-translate-x-full");
};

/* INIT */
renderProducts();
renderCart();
