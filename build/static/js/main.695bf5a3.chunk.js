(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,n,t){e.exports=t(40)},40:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),u=t(14),c=t.n(u),o=t(15),i=t(2),l=function(e){var n=e.addPerson,t=e.newName,a=e.newNumber,u=e.handleNameChange,c=e.handleNumberChange;return r.a.createElement("form",{onSubmit:n},r.a.createElement("div",null,"nimi: ",r.a.createElement("input",{value:t,onChange:u})),r.a.createElement("div",null,"numero: ",r.a.createElement("input",{value:a,onChange:c})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"lis\xe4\xe4")))},m=function(e){var n=e.persons,t=e.deletoi;return r.a.createElement("div",null,n.map(function(e){return r.a.createElement("div",{key:e.id},r.a.createElement("p",null,e.name," ",e.number),r.a.createElement("button",{onClick:function(){return t(e.id)}},"poista"))}))},d=function(e){var n=e.newSearch,t=e.handleSearchChange;return r.a.createElement("div",null,"rajaa n\xe4ytett\xe4vi\xe4: ",r.a.createElement("input",{value:n,onChange:t}))},s=t(3),f=t.n(s),h="/api/persons",b=function(){return f.a.get(h).then(function(e){return e.data})},v=function(e){return f.a.post(h,e).then(function(e){return e.data})},g=function(e,n){return f.a.put("".concat(h,"/").concat(e),n).then(function(e){return e.data})},E=function(e){return f.a.delete("".concat(h,"/").concat(e)).then(function(e){return e.data})},p=function(e){var n=e.message;return null===n?null:n.startsWith("Virhe:")?r.a.createElement("div",{style:{color:"red",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10}},n):r.a.createElement("div",{style:{color:"green",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10}},n)},j=t(4),w=function(){var e=Object(a.useState)([]),n=Object(i.a)(e,2),t=n[0],u=n[1],c=Object(a.useState)(""),s=Object(i.a)(c,2),f=s[0],h=s[1],w=Object(a.useState)(""),O=Object(i.a)(w,2),S=O[0],C=O[1],k=Object(a.useState)(""),y=Object(i.a)(k,2),N=y[0],P=y[1],T=Object(a.useState)([]),B=Object(i.a)(T,2),L=B[0],z=B[1],J=Object(a.useState)(null),R=Object(i.a)(J,2),V=R[0],x=R[1];Object(a.useEffect)(function(){b().then(function(e){u(e),z(e)})},[]);return r.a.createElement("div",null,r.a.createElement("h2",null,"Puhelinluettelo"),r.a.createElement(p,{message:V}),r.a.createElement(d,{newSearch:N,handleSearchChange:function(e){P(e.target.value);var n=t.filter(function(n){return n.name.toLowerCase().includes(e.target.value.toLowerCase())});z(n)}}),r.a.createElement("h3",null,"Lis\xe4\xe4 uusi"),r.a.createElement(l,{addPerson:function(e){if(e.preventDefault(),t.some(function(e){return e.name===f})){var n=t.find(function(e){return e.name===f}),a=Object(o.a)({},n,{number:S}),r=a.id;window.confirm("".concat(f," on jo luettelossa, korvataanko vanha numero uudella?"))&&g(r,a).then(function(e){var n=t.map(function(n){return n.id!==r?n:e});u(n),z(n),x("Henkil\xf6n ".concat(e.name," numero muutettu")),Object(j.setTimeout)(function(){x(null)},3e3)}).catch(function(e){x("Virhe: henkil\xf6 ".concat(a.name," on jo poistettu")),Object(j.setTimeout)(function(){x(null)},3e3);var n=t.filter(function(e){return e.id!==r});u(n),z(n)})}else v({name:f,number:S}).then(function(e){var n=t.concat(e);u(n),z(n),x("".concat(e.name," lis\xe4tty")),Object(j.setTimeout)(function(){x(null)},3e3)});h(""),C("")},newName:f,newNumber:S,handleNameChange:function(e){h(e.target.value)},handleNumberChange:function(e){C(e.target.value)}}),r.a.createElement("h3",null,"Numerot"),r.a.createElement(m,{persons:L,deletoi:function(e){var n=t.find(function(n){return n.id===e});if(window.confirm("Poistetaanko ".concat(n.name))){E(e);var a=t.filter(function(n){return n.id!==e});u(a),z(a),x("".concat(n.name," poistettiin")),Object(j.setTimeout)(function(){x(null)},3e3)}}}))};c.a.render(r.a.createElement(w,null),document.getElementById("root"))}},[[16,2,1]]]);
//# sourceMappingURL=main.695bf5a3.chunk.js.map