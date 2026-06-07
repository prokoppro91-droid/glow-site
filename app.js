// ---- товари ----
const PRODUCTS = [
  {img:"prod1.jpg", cat:"Сироватка", name:"Освітлювальна сироватка з вітаміном C", price:"890 грн", col:1},
  {img:"prod2.jpg", cat:"Крем",      name:"Зволожувальний крем з керамідами",     price:"760 грн", col:1},
  {img:"prod3.jpg", cat:"Тонер",     name:"Заспокійливий тонер з центелою",        price:"540 грн", col:1},
  {img:"prod4.jpg", cat:"Очищення",  name:"Гідрофільна олія для зняття макіяжу",   price:"620 грн", col:1},
  {img:"prod5.jpg", cat:"Маска",     name:"Нічна відновлювальна маска",            price:"810 грн", col:2},
  {img:"prod6.jpg", cat:"Есенція",   name:"Есенція з муцином равлика",             price:"950 грн", col:2},
  {img:"prod7.jpg", cat:"Догляд очей",name:"Крем для зони навколо очей з пептидами",price:"700 грн", col:2},
  {img:"prod8.jpg", cat:"SPF",       name:"Сонцезахист SPF 50+ без білих слідів",  price:"680 грн", col:2},
];
const IG = "https://www.instagram.com/face_expert_anna";

function card(p){
  return `<div class="pcard">
    <div class="pimg"><img src="img/${p.img}" alt="${p.name}" loading="lazy"></div>
    <span class="cat">${p.cat}</span>
    <h4>${p.name}</h4>
    <div class="row"><span class="price">${p.price}</span>
    <button class="add" data-n="${p.name}" title="Замовити">+</button></div>
  </div>`;
}
document.getElementById("col1").innerHTML = PRODUCTS.filter(p=>p.col===1).map(card).join("");
document.getElementById("col2").innerHTML = PRODUCTS.filter(p=>p.col===2).map(card).join("");

// ---- замовлення (через Instagram Direct) ----
const toast = document.getElementById("toast");
let tmr;
document.addEventListener("click", e=>{
  const b = e.target.closest(".add");
  if(!b) return;
  toast.textContent = "Відкриваю Instagram для замовлення…";
  toast.style.opacity="1"; toast.style.transform="translateX(-50%) translateY(0)";
  clearTimeout(tmr); tmr=setTimeout(()=>{toast.style.opacity="0";toast.style.transform="translateX(-50%) translateY(20px)";},2200);
  window.open(IG, "_blank");
});

// ---- прелоадер ----
window.addEventListener("load", ()=> setTimeout(()=>document.getElementById("pre").classList.add("hide"), 700));
setTimeout(()=>document.getElementById("pre").classList.add("hide"), 2600); // запобіжник

// ---- поява при скролі ----
const io = new IntersectionObserver(es=>es.forEach(en=>{ if(en.isIntersecting){en.target.classList.add("in"); io.unobserve(en.target);} }), {threshold:.14});
document.querySelectorAll(".reveal").forEach(el=>io.observe(el));
