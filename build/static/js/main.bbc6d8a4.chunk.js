(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,n,t){e.exports=t(40)},40:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),u=t(13),c=t.n(u),o=t(15),i=t(2),l=function(e){var n=e.addPerson,t=e.newName,a=e.newNumber,u=e.handleNameChange,c=e.handleNumberChange;return r.a.createElement("form",{onSubmit:n},r.a.createElement("div",null,"nimi: ",r.a.createElement("input",{value:t,onChange:u})),r.a.createElement("div",null,"numero: ",r.a.createElement("input",{value:a,onChange:c})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"lis\xe4\xe4")))},m=function(e){var n=e.persons,t=e.deletoi;return r.a.createElement("div",null,n.map(function(e){return r.a.createElement("div",{key:e.id},r.a.createElement("p",null,e.name," ",e.number),r.a.createElement("button",{onClick:function(){return t(e.id)}},"poista"))}))},s=function(e){var n=e.newSearch,t=e.handleSearchChange;return r.a.createElement("div",null,"rajaa n\xe4ytett\xe4vi\xe4: ",r.a.createElement("input",{value:n,onChange:t}))},f=t(3),d=t.n(f),h="/api/persons",v=function(){return d.a.get(h).then(function(e){return e.data})},b=function(e){return d.a.post(h,e).then(function(e){return e.data})},g=function(e,n){return d.a.put("".concat(h,"/").concat(e),n).then(function(e){return e.data})},p=function(e){return d.a.delete("".concat(h,"/").concat(e)).then(function(e){return e.data})},E=function(e){var n=e.notification,t={color:"error"===n.type?"red":"green",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10};return null===n.message?null:r.a.createElement("div",{style:t},n.message)},j=t(14),w=function(){var e=Object(a.useState)([]),n=Object(i.a)(e,2),t=n[0],u=n[1],c=Object(a.useState)(""),f=Object(i.a)(c,2),d=f[0],h=f[1],w=Object(a.useState)(""),O=Object(i.a)(w,2),S=O[0],C=O[1],y=Object(a.useState)(""),k=Object(i.a)(y,2),N=k[0],P=k[1],J=Object(a.useState)([]),L=Object(i.a)(J,2),B=L[0],H=L[1],x=Object(a.useState)({message:null}),z=Object(i.a)(x,2),D=z[0],I=z[1];Object(a.useEffect)(function(){v().then(function(e){u(e),H(e)})},[]);var R=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"success";I({message:e,type:n}),Object(j.setTimeout)(function(){return I({message:null})},3e3)};return r.a.createElement("div",null,r.a.createElement("h2",null,"Puhelinluettelo"),r.a.createElement(E,{notification:D}),r.a.createElement(s,{newSearch:N,handleSearchChange:function(e){P(e.target.value);var n=t.filter(function(n){return n.name.toLowerCase().includes(e.target.value.toLowerCase())});H(n)}}),r.a.createElement("h3",null,"Lis\xe4\xe4 uusi"),r.a.createElement(l,{addPerson:function(e){if(e.preventDefault(),t.some(function(e){return e.name===d})){var n=t.find(function(e){return e.name===d}),a=Object(o.a)({},n,{number:S}),r=a.id;window.confirm("".concat(d," on jo luettelossa, korvataanko vanha numero uudella?"))&&g(r,a).then(function(e){var n=t.map(function(n){return n.id!==r?n:e});u(n),H(n),R("Henkil\xf6n ".concat(e.name," numero muutettu"))}).catch(function(e){R("Henkil\xf6 ".concat(a.name," on jo poistettu"),"error");var n=t.filter(function(e){return e.id!==r});u(n),H(n)})}else b({name:d,number:S}).then(function(e){var n=t.concat(e);u(n),H(n),R("".concat(e.name," lis\xe4tty"))}).catch(function(e){var n=JSON.stringify(e.response.data);console.log(n),R(n,"error")});h(""),C("")},newName:d,newNumber:S,handleNameChange:function(e){h(e.target.value)},handleNumberChange:function(e){C(e.target.value)}}),r.a.createElement("h3",null,"Numerot"),r.a.createElement(m,{persons:B,deletoi:function(e){var n=t.find(function(n){return n.id===e});if(window.confirm("Poistetaanko ".concat(n.name))){p(e);var a=t.filter(function(n){return n.id!==e});u(a),H(a),R("".concat(n.name," poistettiin"))}}}))};c.a.render(r.a.createElement(w,null),document.getElementById("root"))}},[[16,2,1]]]);
//# sourceMappingURL=main.bbc6d8a4.chunk.js.map