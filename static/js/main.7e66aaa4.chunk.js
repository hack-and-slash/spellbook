(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e){e.exports=[[{name:"Apodrecimento",description:"Esta magia apodrece comida e bebida, deteriorando-a e tornando-a impr\xf3pria para o consumo.",stats:["Alcance: toque","Dura\xe7\xe3o: permanente"]},{name:"Arma aben\xe7oada",description:"Esta magia permite ao cl\xe9rigo aben\xe7oar qualquer arma natural de pedra ou de madeira n\xe3o m\xe1gica, concedendo lhe um b\xf4nus de +1 no ataque. A arma aben\xe7oada recebe ainda um b\xf4nus de +1d4 no dano causado.",stats:["Alcance: toque","Dura\xe7\xe3o: 1d4 turnos +1 turno/n\xedvel"]},{name:"Cativar animais",description:"Com esta magia \xe9 poss\xedvel acalmar e conquistar a confian\xe7a de animais selvagens e criaturas n\xe3o inteligentes. Os animais podem fazer uma jogada de prote\xe7\xe3o para resistir e mesmo assim apenas ser\xe3o cativados caso a inten\xe7\xe3o do cl\xe9rigo seja realmente sincera. Caso o cl\xe9rigo esteja com segundas inten\xe7\xf5es (como enganar, comer, ca\xe7ar, aprisionar e etc.), os animais perceber\xe3o e sequer precisar\xe3o fazer a jogada de prote\xe7\xe3o. Animais que forem cativados seguir\xe3o o cl\xe9rigo, que pode ainda lhes treinar e ensinar pequenos truques.",stats:["Alcance: raio de 3 metros + 1 metro/n\xedvel","Dura\xe7\xe3o: permanente","Jogada de prote\xe7\xe3o: JP+SAB nega"]},{name:"C\xedrculo de f\xe9",description:"Com esta magia, um grupo de cl\xe9rigos consegue ampliar os efeitos das magias lan\xe7adas pelo cl\xe9rigo mais poderoso do grupo, que deve ficar ao centro enquanto os outros fazem um c\xedrculo com as m\xe3os e entoam c\xe2nticos sagrados ao seu redor. O cl\xe9rigo no centro do grupo lan\xe7a o c\xedrculo de f\xe9 e, para cada cl\xe9rigo que estiver compondo o c\xedrculo, ser\xe1 considerado como se fosse um n\xedvel mais alto, at\xe9 um m\xe1ximo de +5. O ganho de n\xedveis tamb\xe9m pode ser utilizado para afastar mortos-vivos, e os efeitos desse c\xedrculo durar\xe3o at\xe9 o cl\xe9rigo principal descansar.",stats:["Alcance: toque","Dura\xe7\xe3o: especial (ver texto)"]},{name:"Comando",description:"Esta magia permite ao cl\xe9rigo dar uma ordem simples e direta a um alvo que falhe em uma jogada de prote\xe7\xe3o modificada pela Sabedoria. A v\xedtima deve entender a linguagem do cl\xe9rigo e obedecer\xe1 \xe0 ordem cegamente. As ordens mais comuns costumam ser pare, volte, fuja, corra, caia, renda-se, etc.",stats:["Alcance: raio de 10 metros + 3 metros/n\xedvel","Dura\xe7\xe3o: 1d4 turnos + 1 turno/ n\xedvel","Jogada de prote\xe7\xe3o: JP+SAB nega"]},{name:"Constri\xe7\xe3o",description:"O cl\xe9rigo consegue animar todas as plantas dentro de um raio de at\xe9 10 metros para que agarrem e apertem todos os seres vivos que passarem por ali. Todos que tentem se locomover ter\xe3o sua movimenta\xe7\xe3o reduzida em 1 metro para cada 6 turnos que passarem na \xe1rea.",stats:["Alcance: raio de 10 metros + 3 metros/n\xedvel","Dura\xe7\xe3o: 1d6 turnos + 1 turno/n\xedvel"]},{name:"Criar \xe1gua",description:"",stats:[]},{name:"Causar ferimentos",description:"",stats:[]},{name:"Curar ferimentos",description:"",stats:[]},{name:"Detectar alinhamento",description:"",stats:[]},{name:"Detectar magia",description:"",stats:[]},{name:"Detectar mortos-vivos",description:"",stats:[]},{name:"Detectar venenos",description:"",stats:[]},{name:"Luz",description:"",stats:[]},{name:"Prote\xe7\xe3o contra calor/frio",description:"",stats:[]},{name:"Prote\xe7\xe3o contra alinhamento",description:"",stats:[]},{name:"Purificar alimentos",description:"",stats:[]},{name:"Remover medo",description:"",stats:[]},{name:"Santu\xe1rio",description:"",stats:[]}]]},15:function(e){e.exports=[[{name:"Abrir/Trancar"},{name:"Animar corda"},{name:"Apagar"},{name:"Detectar magia"},{name:"Detectar mortos-vivos"},{name:"Disco flutuante"},{name:"Enfeiti\xe7ar pessoas"},{name:"Escudo arcano"},{name:"Expandir/Encolher"},{name:"Ilus\xe3o"},{name:"Ler idiomas"},{name:"Ler magias"},{name:"Luz"},{name:"M\xe3os flamejantes"},{name:"Mensagem"},{name:"M\xedsseis m\xe1gicos"},{name:"Patas de aranha"},{name:"Prote\xe7\xe3o contra alinhamento"},{name:"Salto"},{name:"Servo invis\xedvel"},{name:"Sono"},{name:"Toque chocante"},{name:"Ventriloquismo"}]]},25:function(e,a,o){e.exports=o(38)},37:function(e,a,o){},38:function(e,a,o){"use strict";o.r(a);var n=o(0),t=o.n(n),r=o(10),s=o.n(r),i=o(11),m=o(12),c=o(22),u=o(13),d=o(23),l=o(21),p=o(24),g=o(16),v=o.n(g),f=o(14),h=o(15),b=function(e){return e.map(function(e){return e.map(function(e){return Object(p.a)({},e,{id:v()()})})})},q=b(f),E=(b(h),o(20)),A=function(e){return t.a.createElement(E.a,{initialValues:{name:"",type:""},onSubmit:console.log},function(a){var o=a.values,n=a.handleBlur,r=a.handleChange,s=a.handleSubmit;return e.updateSearchFilter(o.name,o.type),t.a.createElement("form",{onSubmit:s},t.a.createElement("input",{type:"text",name:"name",className:"field",onChange:r,onBlur:n,value:o.name,placeholder:"Nome da magia"}),t.a.createElement("select",{name:"type",className:"field",onChange:r,onBlur:n,value:o.type},t.a.createElement("option",{value:""},"Tipo da magia"),t.a.createElement("option",{value:"holy"},"Divina"),t.a.createElement("option",{value:"arcane"},"Arcana")))})},C=function(e){var a=t.a.useState({name:"",type:""}),o=Object(l.a)(a,2),n=o[0],r=o[1];return t.a.createElement("section",null,t.a.createElement(A,{updateSearchFilter:function(e,a){e===n.name&&a===n.type||r({name:e,type:a})}}),q.map(function(e){return e.filter(function(e){return e.name.toLowerCase().includes(n.name.toLowerCase())}).map(function(e){return t.a.createElement("div",{key:e.id},e.name)})}))},j=(o(37),function(e){function a(){return Object(i.a)(this,a),Object(c.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return t.a.createElement("section",null,t.a.createElement("h1",null,"Spellbook"),t.a.createElement(C,null))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(t.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,1,2]]]);
//# sourceMappingURL=main.7e66aaa4.chunk.js.map