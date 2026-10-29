const $=s=>document.querySelector(s),brl=n=>"R$ "+n.toFixed(2).replace(".",",").replace(",00","");
const art=i=>{const a=["#2a2118","#1f1c19","#33281c","#171717"][i%4],l=[...Array(14)].map((_,k)=>`<path d='M${30+k*26} 40Q${50+k*24} 250 ${30+k*26} 460' stroke='#B88A56' stroke-opacity='${.08+(k%4)*.05}' fill='none'/>`).join("");
 const s=`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 500'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='${a}'/><stop offset='1' stop-color='#101010'/></linearGradient></defs><rect width='400' height='500' fill='url(#g)'/>${l}<circle cx='200' cy='210' r='70' fill='none' stroke='#B88A56' stroke-opacity='.5'/><text x='200' y='440' text-anchor='middle' font-family='serif' font-size='15' letter-spacing='4' fill='#A5A19B'>IMAGEM DEMONSTRATIVA</text></svg>`;
 return "data:image/svg+xml,"+encodeURIComponent(s)};
const bg=(el,i,src)=>{el.style.backgroundImage=`url("${src||art(i)}")`};
const IM=CONFIG.images||{};
document.querySelector(".hero").style.setProperty("--hero",`url("${IM.hero||art(0)}")`);
document.querySelectorAll("[data-art]").forEach(e=>bg(e,+e.dataset.art,{0:IM.about,3:IM.experience}[e.dataset.art]));
const st={svc:null,bar:null};
// services
$("#services").innerHTML=CONFIG.services.map(s=>`<article class="svc" id="c-${s.id}"><div class="row"><h3>${s.name}</h3><span class="price">${brl(s.price)}</span></div><p>${s.desc}</p><div class="dur">Duração estimada · ${s.min} min</div><button class="btn ghost sm" data-svc="${s.id}">Escolher serviço</button></article>`).join("");
$("#o-svc").innerHTML=CONFIG.services.map(s=>`<span><input type="radio" name="svc" id="r-${s.id}" value="${s.id}"><label for="r-${s.id}">${s.name} · ${brl(s.price)}</label></span>`).join("");
$("#o-bar").innerHTML=[{id:"",name:"Sem preferência"},...CONFIG.team].map(b=>`<span><input type="radio" name="bar" id="b-${b.id||"any"}" value="${b.id}"><label for="b-${b.id||"any"}">${b.name}</label></span>`).join("");
$("#team").innerHTML=CONFIG.team.map((b,i)=>`<article class="pro" id="p-${b.id}"><div class="frame" role="img" aria-label="Foto demonstrativa de ${b.name}" data-art="${i+1}"></div><h3>${b.name}</h3><p class="role">${b.role}</p><p>${b.bio}</p><button class="btn ghost sm" data-bar="${b.id}">Escolher profissional</button></article>`).join("");
document.querySelectorAll(".pro .frame").forEach((e,i)=>bg(e,+e.dataset.art,CONFIG.team[i].photo));
$("#gal").innerHTML=CONFIG.gallery.map((g,i)=>`<button class="${g.cls}" data-i="${i}" data-cap="${g.cap}" aria-label="Ampliar: ${g.cap}"></button>`).join("");
document.querySelectorAll("#gal button").forEach(b=>bg(b,+b.dataset.i+1,CONFIG.gallery[+b.dataset.i].src));
$("#tm").innerHTML+=CONFIG.slots.map(t=>`<option>${t}</option>`).join("");
const today=new Date();today.setMinutes(today.getMinutes()-today.getTimezoneOffset());$("#dt").min=today.toISOString().slice(0,10);
// summary
const fmtD=v=>v?v.split("-").reverse().join("/"):"";
function sum(){const s=CONFIG.services.find(x=>x.id===st.svc),b=CONFIG.team.find(x=>x.id===st.bar);
 $("#s-svc").textContent=s?s.name:"—";$("#s-pr").textContent=s?brl(s.price):"—";$("#s-du").textContent=s?s.min+" min":"—";
 $("#s-bar").textContent=st.bar===null?"—":(b?b.name:"Sem preferência");
 $("#s-dt").textContent=$("#dt").value&&$("#tm").value?fmtD($("#dt").value)+" às "+$("#tm").value:"—";$("#s-nm").textContent=$("#nm").value.trim()||"—";
 document.querySelectorAll(".svc").forEach(c=>c.classList.toggle("sel",c.id==="c-"+st.svc));
 document.querySelectorAll(".pro").forEach(c=>c.classList.toggle("sel",c.id==="p-"+st.bar));}
function pick(k,v,go){st[k]=v;const r=document.getElementById((k==="svc"?"r-":"b-")+(v||"any"));if(r)r.checked=true;sum();if(go)$("#agendar").scrollIntoView()}
document.addEventListener("click",e=>{const a=e.target.closest("[data-svc]"),b=e.target.closest("[data-bar]");if(a)pick("svc",a.dataset.svc,true);if(b)pick("bar",b.dataset.bar,true)});
$("#bf").addEventListener("change",e=>{if(e.target.name==="svc")st.svc=e.target.value;if(e.target.name==="bar")st.bar=e.target.value;sum()});
$("#bf").addEventListener("input",sum);
// whatsapp
const wa=t=>{const n=(CONFIG.whatsapp||"").replace(/\D/g,"");const m=$("#msg");
 if(!n){m.className="msg on";m.textContent="Modo demonstrativo: nenhum número de WhatsApp está configurado, então nenhuma conversa foi aberta. Configure CONFIG.whatsapp para ativar.";return false}
 window.open("https://wa.me/"+n+"?text="+encodeURIComponent(t),"_blank","noopener");return true};
$("#bf").addEventListener("submit",e=>{e.preventDefault();const E={svc:st.svc?"":"Escolha um serviço.",bar:st.bar===null?"Escolha um barbeiro ou “sem preferência”.":"",dt:!$("#dt").value?"Informe a data.":$("#dt").value<$("#dt").min?"Escolha uma data a partir de hoje.":"",tm:$("#tm").value?"":"Escolha um horário.",nm:$("#nm").value.trim().length<2?"Informe seu nome.":""};
 let bad=0;for(const k in E){$("#e-"+k).textContent=E[k];if(E[k])bad++}
 if(bad){$("#msg").className="msg";return}
 const s=CONFIG.services.find(x=>x.id===st.svc),b=CONFIG.team.find(x=>x.id===st.bar);
 const t=`Olá! Gostaria de solicitar um agendamento na ${CONFIG.name}.\n\nNome: ${$("#nm").value.trim()}\nServiço: ${s.name}\nBarbeiro: ${b?b.name:"Sem preferência"}\nData desejada: ${fmtD($("#dt").value)}\nHorário desejado: ${$("#tm").value}\nValor estimado: ${brl(s.price)}\n\nPoderiam confirmar a disponibilidade?`;
 if(wa(t)){$("#msg").className="msg on";$("#msg").textContent="Solicitação preparada no WhatsApp. O horário só estará garantido após a confirmação da equipe."}});
const quick=()=>{if((CONFIG.whatsapp||"").replace(/\D/g,""))wa(`Olá! Gostaria de agendar um horário na ${CONFIG.name}.`);else{$("#agendar").scrollIntoView();wa("")}};
$("#wa").onclick=quick;$("#wa2").onclick=quick;
// location / footer
$("#addr").textContent=CONFIG.address||"Endereço fictício: a localização será informada em uma versão real.";
if(CONFIG.mapsUrl){$("#maps").href=CONFIG.mapsUrl;$("#maps").hidden=false}
$("#hrs").innerHTML=CONFIG.hours.map(h=>`<li><span>${h[0]}</span><span>${h[1]}</span></li>`).join("");
$("#f-svc").innerHTML=CONFIG.services.slice(0,4).map(s=>`<li>${s.name}</li>`).join("");
$("#f-ct").innerHTML=`<li>${CONFIG.whatsapp?"WhatsApp configurado":"WhatsApp: modo demonstrativo"}</li>`+(CONFIG.instagram?`<li><a href="${CONFIG.instagram}" target="_blank" rel="noopener">Instagram</a></li>`:"");
$("#yr").textContent=new Date().getFullYear();
// header / menu
const hd=$("#top"),nav=$("#nav"),bu=$("#burger");
const sc=()=>hd.classList.toggle("solid",scrollY>30||nav.classList.contains("open"));addEventListener("scroll",sc,{passive:true});sc();
bu.onclick=()=>{const o=nav.classList.toggle("open");bu.setAttribute("aria-expanded",o);sc()};
nav.addEventListener("click",e=>{if(e.target.closest("a")){nav.classList.remove("open");bu.setAttribute("aria-expanded",false);sc()}});
addEventListener("keydown",e=>{if(e.key==="Escape"&&nav.classList.contains("open")){nav.classList.remove("open");bu.focus()}});
// reveal
const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add("in");io.unobserve(x.target)}}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(e=>io.observe(e));
// modal
const dlg=$("#dlg");let gi=0;
const show=i=>{gi=(i+CONFIG.gallery.length)%CONFIG.gallery.length;const g=CONFIG.gallery[gi];bg($("#dimg"),gi+1,g.src);$("#dimg").setAttribute("aria-label",g.alt);$("#dcap").textContent=g.cap};
$("#gal").addEventListener("click",e=>{const b=e.target.closest("button");if(b){show(+b.dataset.i);dlg.showModal()}});
$("#dc").onclick=()=>dlg.close();$("#dp").onclick=()=>show(gi-1);$("#dn").onclick=()=>show(gi+1);
dlg.addEventListener("click",e=>{if(e.target===dlg)dlg.close()});
dlg.addEventListener("keydown",e=>{if(e.key==="ArrowLeft")show(gi-1);if(e.key==="ArrowRight")show(gi+1)});
