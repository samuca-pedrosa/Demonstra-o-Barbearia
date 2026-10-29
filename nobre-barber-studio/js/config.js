/* ===== CONFIGURAÇÃO CENTRAL — edite aqui para um cliente real ===== */
const CONFIG={
 name:"Nobre Barber Studio",
 whatsapp:"",            // ex.: "5584999999999" (só números, formato internacional). Vazio = modo demonstrativo
 images:{hero:"",about:"",experience:""}, // ex.: "assets/images/hero.jpg"; vazio = arte demonstrativa
 instagram:"",           // ex.: "https://instagram.com/seuperfil"
 address:"",             // vazio = "localização será informada"
 mapsUrl:"",             // link do Google Maps, quando houver endereço real
 hours:[["Segunda a sexta","09:00 – 20:00"],["Sábado","09:00 – 18:00"],["Domingo","Fechado"]],
 slots:["09:00","10:00","11:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00"],
 services:[
  {id:"trad",name:"Corte tradicional",desc:"Tesoura e máquina, finalizado com navalha e produto.",price:40,min:40},
  {id:"deg",name:"Corte degradê",desc:"Transição suave e precisa, do zero ao comprimento ideal.",price:45,min:45},
  {id:"barba",name:"Barba completa",desc:"Toalha quente, modelagem e hidratação.",price:30,min:30},
  {id:"combo",name:"Corte + barba",desc:"O ritual completo, do corte ao acabamento.",price:65,min:75},
  {id:"acab",name:"Acabamento e sobrancelha",desc:"Contornos limpos e sobrancelha alinhada.",price:15,min:15},
  {id:"kids",name:"Corte infantil",desc:"Cuidado e paciência para os pequenos.",price:35,min:30}],
 team:[
  {id:"rafael",photo:"",name:"Rafael Mendes",role:"Especialista em degradê",bio:"Obsessão por transições limpas e simetria."},
  {id:"lucas",photo:"",name:"Lucas Andrade",role:"Especialista em cortes clássicos",bio:"Tesoura, pente e elegância atemporal."},
  {id:"gabriel",photo:"",name:"Gabriel Costa",role:"Especialista em barba e acabamento",bio:"Navalha firme e olhar para os detalhes."}],
 gallery:[ /* src vazio = arte demonstrativa; ou use "https://.../foto.jpg" */
  {cap:"Degradê",alt:"Ilustração demonstrativa de corte degradê",cls:"w2 h2"},
  {cap:"Corte clássico",alt:"Ilustração demonstrativa de corte clássico",cls:""},
  {cap:"Barba",alt:"Ilustração demonstrativa de barba alinhada",cls:"h2"},
  {cap:"Acabamento",alt:"Ilustração demonstrativa de acabamento",cls:""},
  {cap:"Ambiente",alt:"Ilustração demonstrativa de ambiente",cls:"w2"},
  {cap:"Detalhes",alt:"Ilustração demonstrativa de detalhes",cls:""}]
};
/* ================================================================== */
