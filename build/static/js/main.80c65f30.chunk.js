(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{33:function(t,e,c){},40:function(t,e,c){"use strict";c.r(e);var n=c(10),a=c.n(n),o=c(21),i=c.n(o),d=c(19),s=c(13),r=c(18);c(31);r.a.initializeApp({apiKey:"AIzaSyB4lD8j4o9hpDLBbMx1c3PBlNYNnu6rH_4",authDomain:"todoapp-dc6d1.firebaseapp.com",projectId:"todoapp-dc6d1",storageBucket:"todoapp-dc6d1.appspot.com",messagingSenderId:"1092870461229",appId:"1:1092870461229:web:acaee1e0d5b0d7986165a4",measurementId:"G-3DTECM9MRN"});var l=r.a,b=c(8);var u=function(){var t=Object(n.useState)(""),e=Object(s.a)(t,2),c=e[0],a=e[1],o=Object(n.useState)([]),i=Object(s.a)(o,2),r=i[0],u=i[1],j=Object(n.useState)(!1),p=Object(s.a)(j,2),O=p[0],f=p[1],h=Object(n.useState)(!1),m=Object(s.a)(h,2),x=m[0],v=m[1],g=Object(n.useState)(""),N=Object(s.a)(g,2),y=N[0],S=N[1];return Object(n.useEffect)((function(){f(!0),l.firestore().collection("todoapp").orderBy("date","desc").onSnapshot((function(t){var e=[];t.forEach((function(t){e.push(Object(d.a)(Object(d.a)({},t.data()),{},{ids:t.id}))})),u(e),f(!1)}))}),[]),Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"sub jumbotron",children:[Object(b.jsx)("h1",{children:"Todo List"}),Object(b.jsxs)("div",{className:"form-inline  d-flex",children:[Object(b.jsx)("input",{type:"text",value:c,onChange:function(t){return a(t.target.value)},className:"form-control input-sm",for:"submit"}),x?Object(b.jsx)("button",{type:"submit",className:"btn btn-warning",value:y,onClick:function(t){return e=t.target.value,l.firestore().collection("todoapp").doc(e).update({todo:c}),v(!1),void a("");var e},children:"Edit"}):Object(b.jsx)("button",{id:"submit",type:"submit",onClick:function(t){if(!x){var e={todo:c,date:(new Date).getTime()};l.firestore().collection("todoapp").add(e),a("")}},className:"btn btn-sm btn-primary",children:"Add Todo"})]}),Object(b.jsx)("table",{className:"table table-dark",children:Object(b.jsx)("tbody",{children:O?Object(b.jsx)("tr",{children:Object(b.jsx)("td",{children:"Please wait...."})}):r.map((function(t){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:t.todo}),Object(b.jsx)("td",{children:Object(b.jsx)("button",{className:"btn btn-warning",onClick:function(t){return e=t.target.value,v(!0),void l.firestore().collection("todoapp").doc(e).get().then((function(t){if(t.exists){var c=t.data();a(c.todo),S(e)}else alert("This collection not found")}));var e},value:t.ids,children:"Edit"})}),Object(b.jsx)("td",{children:Object(b.jsx)("button",{className:"btn btn-danger",onClick:function(t){return function(t){l.firestore().collection("todoapp").doc(t).delete()}(t.target.value)},value:t.ids,children:"Delete"})})]},t.ids)}))})})]})})};c(33),c(34),c(35);i.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(u,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.80c65f30.chunk.js.map