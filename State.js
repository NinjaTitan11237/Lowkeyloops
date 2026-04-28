export const state = {
  search: "",
  category: "all",
  sort: "none"
};

export let cart = JSON.parse(localStorage.getItem("cart")) || [];
export let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

export function save(){
  localStorage.setItem("cart", JSON.stringify(cart));
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
}
