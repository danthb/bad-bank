(this["webpackJsonpbad-bank"]=this["webpackJsonpbad-bank"]||[]).push([[11],{113:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return o}));var a=n(0),r=n(17),c=n(44),s=n(1);function o(){var e=Object(a.useContext)(r.a);return Object(s.jsx)(a.Fragment,{children:Object(s.jsx)(c.a,{bgcolor:"info",label:"Withdraw",handle:function(t){var n=e.users.filter((function(e){return!0===e.isLogedU})),a=e.users.indexOf(n[0]),r=e.users[a].balance;return console.log(r),console.log(t.amount),r>0&&r>=Number(t.amount)&&Number(t.amount)>=0?(e.users[a].balance-=Number(t.amount),alert("Transaction done, your balance is $".concat(e.users[a].balance)),!0):(alert("You don't have enough money"),!1)},hideAmount:!1,successButton:"Make another withdraw"})})}},44:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(12),r=n(0),c=n(118),s=n(117),o=n(17),u=n(10),i=n(19),b=n(1);function l(e){var t=e.bgcolor,n=e.bgheader,l=e.label,j=e.handle,d=e.hideAmount,O=e.successButton,m=Object(r.useContext)(o.a),f=Object(r.useState)(!0),h=Object(a.a)(f,2),g=h[0],x=h[1],p=Object(r.useState)(""),v=Object(a.a)(p,2),w=v[0],y=v[1],C=Object(r.useState)(""),k=Object(a.a)(C,2),L=k[0],N=k[1],S=Object(r.useState)(""),A=Object(a.a)(S,2),E=A[0],F=A[1],T=Object(r.useState)(""),B=Object(a.a)(T,2),P=B[0],W=B[1],D=Object(r.useState)(""),J=Object(a.a)(D,2),U=J[0],$=J[1],M=Object(r.useState)(""),Y=Object(a.a)(M,2),q=Y[0],z=Y[1],G=Object(r.useState)(""),H=Object(a.a)(G,2),I=H[0],K=H[1];function Q(e,t){return e?!("password"===t&&e.length<8)||(y("Please enter at least 8 characters"),setTimeout((function(){return y("")}),3e3),!1):(y("Please enter "+t),setTimeout((function(){return y("")}),3e3),!1)}Object(r.useEffect)((function(){d||function(){var e=m.users.filter((function(e){return!0===e.isLogedU}));console.log(e),e.length>0?(F(e[0].balance),W(!0)):(F(!1),W(!1))}()}),[g]);return Object(b.jsx)(i.a,{bgcolor:t,bgheader:n,header:l,status:w,body:g?Object(b.jsxs)(r.Fragment,{children:[d?Object(b.jsxs)(r.Fragment,{children:["Login"!==l&&Object(b.jsxs)(r.Fragment,{children:["Name",Object(b.jsx)("br",{}),Object(b.jsx)(s.a,{name:"name",id:"name",placeholder:"Enter name",value:U,onChange:function(e){return $(e.currentTarget.value)}}),Object(b.jsx)("br",{})]}),Object(b.jsx)("br",{}),"Email ",Object(b.jsx)("br",{}),Object(b.jsx)(s.a,{name:"email",type:"email",id:"email",placeholder:"Enter email",value:q,onChange:function(e){return z(e.currentTarget.value)}}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"Password",Object(b.jsx)("br",{}),Object(b.jsx)(s.a,{type:"password",id:"password",placeholder:"Enter password",value:I,onChange:function(e){return K(e.currentTarget.value)}}),Object(b.jsx)("br",{})]}):Object(b.jsxs)(r.Fragment,{children:["Balance: $",P?E:null," ",Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),l+" Amount",Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"input",id:"amount",placeholder:"Enter Amount",value:L,onChange:function(e){isNaN(Number(e.target.value))?alert("Only positive amounts are allowed"):N(e.target.value)}}),Object(b.jsx)("br",{})]}),Object(b.jsx)("br",{}),Object(b.jsx)(c.a,{type:"submit",id:"submit",title:"Withdraw"===l||"Deposit"===l?"Confirm transaction":"Click to Login",variant:"contained",color:"primary",disabled:function(){if("Create Account"===l)return""===q&&""===I&&""===U;if("Login"===l)return""===q&&""===I;if(d){if(!E)return!1;if(E<=0)return!0}else{if("Withdraw"===l)return!E||!P||(""===L||0===L);if("Deposit"===l)return!P||(""===L||0===L)}}(),onClick:function(){if(d){if("Login"!==l&&!Q(U,"name"))return;if(!Q(q,"email"))return;if(!Q(I,"password"))return}else if(!Q(L,"amount"))return;j({name:U,email:q,password:I,amount:L}),x(!1)},children:l})]}):Object(b.jsxs)(r.Fragment,{children:[Object(b.jsx)(c.a,{type:"submit",variant:"contained",color:"primary",onClick:function(){$(""),z(""),K(""),N(""),x(!0)},children:O}),"Create Account"===l?Object(b.jsx)(c.a,{type:"submit",variant:"contained",title:"Click to go the Login",color:"secundary",children:Object(b.jsx)(u.c,{className:"nav-link",to:"/login",children:"Login"})}):null]})})}}}]);
//# sourceMappingURL=11.a904636d.chunk.js.map