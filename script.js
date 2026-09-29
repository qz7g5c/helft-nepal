const guides = [
  {de:"Dan Bahadur Tamang", en:"Dan Bahadur Tamang", known:true},
  ...Array.from({length:7},(_,i)=>({de:`Guide ${i+2} – Name folgt`,en:`Guide ${i+2} – name to follow`,known:false}))
];
let lang="de";
const cards=document.getElementById("guideCards");
function renderCards(){
  cards.innerHTML=guides.map(g=>`
    <article class="card">
      <div class="portrait">${lang==="de"?"Foto folgt":"Photo to follow"}</div>
      <p class="status">${g.known?(lang==="de"?"Profil wird vervollständigt":"Profile to be completed"):(lang==="de"?"Platzhalter":"Placeholder")}</p>
      <h3>${g[lang]}</h3>
      <p>${lang==="de"?"Alter · Familie · persönliche Geschichte · Auswirkungen auf die Angehörigen":"Age · family · personal story · impact on relatives"}</p>
    </article>`).join("");
}
function setLang(next){
  lang=next; document.documentElement.lang=next;
  document.querySelectorAll("[data-de][data-en]").forEach(el=>el.textContent=el.dataset[next]);
  document.getElementById("deBtn").classList.toggle("active",next==="de");
  document.getElementById("enBtn").classList.toggle("active",next==="en");
  renderCards();
}
document.getElementById("deBtn").addEventListener("click",()=>setLang("de"));
document.getElementById("enBtn").addEventListener("click",()=>setLang("en"));
renderCards();