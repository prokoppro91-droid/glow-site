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

const card = p=>`<div class="pcard">
  <div class="pimg"><img src="img/${p.img}" alt="${p.name}" loading="lazy"></div>
  <span class="cat">${p.cat}</span><h4>${p.name}</h4>
  <div class="row"><span class="price">${p.price}</span><button class="add" title="Замовити">+</button></div></div>`;
document.getElementById("col1").innerHTML = PRODUCTS.filter(p=>p.col===1).map(card).join("");
document.getElementById("col2").innerHTML = PRODUCTS.filter(p=>p.col===2).map(card).join("");

// ---- instagram-сітка ----
const IGIMGS=["close1.jpg","prod1.jpg","prod5.jpg","close2.jpg","prod3.jpg","prod6.jpg","prod8.jpg","about.jpg"];
document.getElementById("iggrid").innerHTML = IGIMGS.map(i=>
  `<a href="${IG}" target="_blank"><img src="img/${i}" alt="Instagram" loading="lazy"></a>`).join("");

// ---- замовлення ----
const toast=document.getElementById("toast"); let tmr;
document.addEventListener("click", e=>{
  if(!e.target.closest(".add")) return;
  toast.textContent="Відкриваю Instagram для замовлення…";
  toast.style.opacity="1"; toast.style.transform="translateX(-50%) translateY(0)";
  clearTimeout(tmr); tmr=setTimeout(()=>{toast.style.opacity="0";toast.style.transform="translateX(-50%) translateY(20px)";},2200);
  window.open(IG,"_blank");
});

// ---- прелоадер ----
const hidePre=()=>document.getElementById("pre").classList.add("hide");
window.addEventListener("load",()=>setTimeout(hidePre,2200));
setTimeout(hidePre,3000);

// ---- поява при скролі ----
const io=new IntersectionObserver(es=>es.forEach(en=>{if(en.isIntersecting){en.target.classList.add("in");io.unobserve(en.target);}}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>io.observe(el));

// ---- легкий паралакс блоба ----
const blob=document.querySelector(".blob");
if(blob) window.addEventListener("scroll",()=>{const y=window.scrollY; if(y<800) blob.style.transform=`translateY(${y*0.12}px)`;});
