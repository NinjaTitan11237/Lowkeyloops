import { products } from "./data.js";
import { state, cart, wishlist, save } from "./state.js";

/* FILTER */
export function getProducts(){
let res=[...products];

if(state.search)
res=res.filter(p=>p.name.toLowerCase().includes(state.search));

if(state.category!=="all")
res=res.filter(p=>p.category===state.category);

if(state.sort==="low") res.sort((a,b)=>a.price-b.price);
if(state.sort==="high") res.sort((a,b)=>b.price-a.price);

return res;
}

/* PRODUCTS */
export function renderProducts(){
const grid=document.getElementById("productGrid");
const list=getProducts();

if(list.length===0){
grid.innerHTML="<p class='text-center col-span-3'>No products found</p>";
return;
}

grid.innerHTML=list.map(p=>`
<div class="card bg-white dark:bg-gray-800 p-4 rounded-xl">

<img src="${p.image}" class="mb-3 rounded">

<h3>${p.name}</h3>
<p>₹${p.price}</p>

<button class="addBtn mt-2 bg-neutral-200 dark:bg-neutral-700 px-3 py-2 rounded-full"
${p.stock===0?"disabled":""}
data-id="${p.id}">
Add to Cart
</button>

</div>
`).join("");

document.querySelectorAll(".addBtn").forEach(b=>{
b.onclick=()=>addToCart(Number(b.dataset.id));
});
}

/* CART */
export function addToCart(id){
let item=cart.find(i=>i.id===id);

if(item) item.qty++;
else{
let p=products.find(x=>x.id===id);
cart.push({id:id,name:p.name,price:p.price,qty:1});
}

save();renderCart();
}

export function renderCart(){
const c=document.getElementById("cartItems");

if(cart.length===0){
c.innerHTML="<p>🛒 Empty cart</p>";
return;
}

let total=0;

c.innerHTML=cart.map(i=>{
let sub=i.price*i.qty;
total+=sub;

return`
<div class="mb-3">
<p>${i.name} × ${i.qty}</p>
<p>₹${sub}</p>
</div>`;
}).join("");

c.innerHTML+=`<h3>Total: ₹${total}</h3>`;
}
