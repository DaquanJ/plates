(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{19:function(e,t,c){},26:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},69:function(e,t,c){},70:function(e,t,c){},71:function(e,t,c){},72:function(e,t,c){},73:function(e,t,c){},74:function(e,t,c){},75:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(36),s=c.n(r),i=(c(42),c(43),c(4)),o=c(6),u=(c(26),c(2)),p=c.n(u),l=c(14),j=c(3),d=c(7),h=c(5),b=c.n(h),f=c(0),O="4d0c7563fb04f44de12af72003c688fd",x="e9e25755",m=function(){var e=Object(n.useState)({search:""}),t=Object(d.a)(e,2),c=t[0],a=t[1];function r(){return(r=Object(j.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,b.a.get("https://api.edamam.com/search?q=".concat(c.search,"&app_id=").concat(x,"&app_key=").concat(O));case 4:e.sent,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}return Object(f.jsx)("div",{children:Object(f.jsx)("form",{onChange:function(e){return function(e){var t=e.target,c=t.name,n=t.value;a(Object(l.a)({},c,n))}(e)},onSubmit:function(e){return function(e){return r.apply(this,arguments)}(e)},children:Object(f.jsxs)(i.b,{to:"/search/".concat(c.search),children:["  ",Object(f.jsx)("input",{type:"text",name:"search",id:"search",placeholder:"Search Dishes"})," "]})})})},v=function(){return Object(f.jsxs)("div",{className:"navigation",children:[Object(f.jsx)(m,{}),Object(f.jsx)("h2",{children:"Plates"}),Object(f.jsxs)("ul",{children:[Object(f.jsxs)(i.b,{id:"nav-link",to:"/",children:[" ",Object(f.jsx)("li",{children:"Browse"})," "]}),Object(f.jsxs)(i.b,{id:"nav-link",to:"/cart",children:[" ",Object(f.jsxs)("li",{children:["Cart ","(".concat(localStorage.getItem("cartItems"),")")," "]})," "]})]}),Object(f.jsx)("h2",{children:"My Plates"}),Object(f.jsx)("ul",{children:Object(f.jsxs)(i.b,{id:"nav-link",to:"/favorites",children:[" ",Object(f.jsxs)("li",{children:["Favorites ","(".concat(localStorage.getItem("favorites"),")")," "]})," "]})})]})},y=(c(19),c(9)),k=c.n(y),g=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),c=t[0],a=t[1],r=function(){var e=Object(j.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("https://api.edamam.com/search?q=pasta&app_id=".concat("e9e25755","&app_key=").concat("4d0c7563fb04f44de12af72003c688fd","&to=10"));case 3:t=e.sent,a(t.data.hits),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){r()}),[]),Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{children:" Pastas "}),Object(f.jsx)("div",{className:"plates",children:c.map((function(e){return Object(f.jsxs)("div",{id:"items",children:[Object(f.jsx)("img",{src:e.recipe.image,alt:e.recipe.label}),Object(f.jsxs)(i.b,{id:"browse-link",to:"/plate/".concat(e.recipe.label),children:["  ",Object(f.jsxs)("p",{children:[" ",e.recipe.label," ",Object(f.jsx)("br",{})," price: $",k()(e.recipe.totalDaily.CHOCDF.quantity).format("0.00")," "]})," "]})]},e.recipe.url)}))})]})},w=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),c=t[0],a=t[1],r=function(){var e=Object(j.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("https://api.edamam.com/search?q=seafood&app_id=".concat("e9e25755","&app_key=").concat("4d0c7563fb04f44de12af72003c688fd","&to=10"));case 3:t=e.sent,a(t.data.hits),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){r()}),[]),Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{children:" Seafood "}),Object(f.jsx)("div",{className:"plates",children:c.map((function(e){return Object(f.jsxs)("div",{id:"items",children:[Object(f.jsx)("img",{src:e.recipe.image,alt:e.recipe.label}),Object(f.jsxs)(i.b,{id:"browse-link",to:"/plate/".concat(e.recipe.label),children:["  ",Object(f.jsxs)("p",{children:[" ",e.recipe.label," ",Object(f.jsx)("br",{})," price: $",k()(e.recipe.totalDaily.CHOCDF.quantity).format("0.00")," "]})," "]})]},e.recipe.url)}))})]})},C=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),c=t[0],a=t[1],r=function(){var e=Object(j.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("https://api.edamam.com/search?q=steak&app_id=".concat("e9e25755","&app_key=").concat("4d0c7563fb04f44de12af72003c688fd","&to=10"));case 3:t=e.sent,a(t.data.hits),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){r()}),[]),Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{children:" Steak "}),Object(f.jsx)("div",{className:"plates",children:c.map((function(e){return Object(f.jsxs)("div",{id:"items",children:[Object(f.jsx)("img",{src:e.recipe.image,alt:e.recipe.label}),Object(f.jsxs)(i.b,{id:"browse-link",to:"/plate/".concat(e.recipe.label),children:["  ",Object(f.jsxs)("p",{children:[" ",e.recipe.label," ",Object(f.jsx)("br",{})," price: $",k()(e.recipe.totalDaily.CHOCDF.quantity).format("0.00")," "]})," "]})]},e.recipe.url)}))})]})},S=function(){return Object(f.jsxs)("div",{className:"browse",children:[Object(f.jsx)(g,{}),Object(f.jsx)(w,{}),Object(f.jsx)(C,{})]})},N=(c(69),function(e){var t=e.match,c=Object(n.useState)([]),a=Object(d.a)(c,2),r=a[0],s=a[1],o=function(){var e=Object(j.a)(p.a.mark((function e(){var c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("https://api.edamam.com/search?q=".concat(t.params.search,"&app_id=").concat("e9e25755","&app_key=").concat("4d0c7563fb04f44de12af72003c688fd","&to=20"));case 3:c=e.sent,s(c.data.hits),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){o()}),[t.params.search]),Object(f.jsxs)("div",{children:[Object(f.jsxs)("h1",{children:[" choose any ",t.params.search," "]}),Object(f.jsx)("div",{className:"searched_items",children:r.map((function(e){return Object(f.jsxs)("div",{id:"items",children:[Object(f.jsx)("img",{src:e.recipe.image,alt:e.recipe.label}),Object(f.jsxs)(i.b,{id:"searched-link",to:"/plate/".concat(e.recipe.label),children:["  ",Object(f.jsxs)("p",{children:[" ",e.recipe.label," ",Object(f.jsx)("br",{})," price: $",k()(e.recipe.totalDaily.CHOCDF.quantity).format("0.00")," "]})," "]})]},e.recipe.url)}))})]})}),q=c(21),D=(c(70),function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),c=t[0],a=t[1],r=function(){var e=Object(j.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("https://e-plates.herokuapp.com/favorites/");case 3:t=e.sent,a(t.data),localStorage.setItem("favorites",t.data.length),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=Object(j.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.delete("https://e-plates.herokuapp.com/favorites/".concat(t));case 3:n=e.sent,a(Object(q.a)(c).filter((function(e){return e.id!==t}))),console.log(n.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){r()}),[]),Object(f.jsxs)("div",{children:[c.length>0?Object(f.jsx)("h1",{children:" Favorites "}):Object(f.jsx)("h1",{children:" You haven't added any items to favorites ! "}),c.map((function(e){return Object(f.jsxs)("div",{className:"favorites",children:[Object(f.jsx)("img",{src:e.image,alt:"dish"}),Object(f.jsxs)(i.b,{id:"fav-link",to:"/plate/".concat(e.name),children:[" ",Object(f.jsxs)("h2",{children:[" ",e.name," "]})," "]}),Object(f.jsxs)("p",{children:[" price: $",k()(e.price).format("0.00")," "]}),Object(f.jsxs)("button",{id:"remove-item",onClick:function(){return s(e.id)},children:[" Remove ",e.name," "]})]},e.id)}))]})}),_=(c(71),"4d0c7563fb04f44de12af72003c688fd"),F="e9e25755",T=function(e){var t=e.match,c=Object(n.useState)([]),a=Object(d.a)(c,2),r=a[0],s=a[1];function i(){return(i=Object(j.a)(p.a.mark((function e(){var c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("https://api.edamam.com/search?q=".concat(t.params.name,"&app_id=").concat(F,"&app_key=").concat(_));case 3:c=e.sent,s({image:c.data.hits[0].recipe.image,description:c.data.hits[0].recipe.cuisineType?c.data.hits[0].recipe.cuisineType[0]:null,name:c.data.hits[0].recipe.label,price:c.data.hits[0].recipe.totalDaily.CHOCDF.quantity}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function o(){return(o=Object(j.a)(p.a.mark((function e(t){var c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,b.a.post("https://e-plates.herokuapp.com/cart/",r);case 4:c=e.sent,console.log(c.data),document.querySelector("h3").innerHTML="<h4>Your item has been added to the cart !</h4>",e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0),document.querySelector("h3").innerHTML="Sorry your request failed: ".concat(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function u(){return(u=Object(j.a)(p.a.mark((function e(t){var c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,b.a.post("https://e-plates.herokuapp.com/favorites/",r);case 4:c=e.sent,console.log(c.data),document.querySelector("h3").innerHTML="<h4>Your item has been added to Favorites !</h4>",e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0),document.querySelector("h3").innerHTML="Sorry your request failed: ".concat(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){i.apply(this,arguments)}()}),[]),Object(f.jsx)("div",{children:r&&Object(f.jsxs)("div",{className:"plate",children:[Object(f.jsx)("img",{src:r.image,alt:r.name}),Object(f.jsxs)("h2",{children:[" ",r.name," "]}),Object(f.jsxs)("p",{children:[" price: $",k()(r.price).format("0.00")," "]}),Object(f.jsxs)("h3",{children:[" ",r.description," "]}),Object(f.jsx)("h4",{id:"added",children:"  "}),Object(f.jsx)("button",{id:"add-to-cart",onClick:function(e){return function(e){return o.apply(this,arguments)}(e)},children:"Add To Cart"}),Object(f.jsx)("button",{id:"add-to-favs",onClick:function(e){return function(e){return u.apply(this,arguments)}(e)},children:"Add To Favorites"})]})})},E=(c(72),function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),c=t[0],a=t[1];function r(){return(r=Object(j.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("https://e-plates.herokuapp.com/cart/");case 3:t=e.sent,a(t.data),localStorage.setItem("cartItems",t.data.length),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function s(){return(s=Object(j.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.delete("https://e-plates.herokuapp.com/cart/".concat(t));case 3:n=e.sent,a(Object(q.a)(c).filter((function(e){return e.id!==t}))),console.log(n.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){r.apply(this,arguments)}()}),[]),Object(f.jsxs)("div",{children:[c.length>0?Object(f.jsx)("h1",{children:" Your Order "}):Object(f.jsx)("h1",{children:" Your Cart is empty ! "}),c.map((function(e){return Object(f.jsxs)("div",{className:"cart",children:[Object(f.jsx)("img",{src:e.image,alt:e.name}),Object(f.jsxs)("h2",{children:[" ",e.name," "]}),Object(f.jsxs)("p",{children:[" price: $",k()(e.price).format("0.00")," "]}),Object(f.jsxs)("h3",{children:[" ",e.description," "]}),Object(f.jsxs)("button",{id:"remove-item",onClick:function(){return function(e){return s.apply(this,arguments)}(e.id)},children:[" ","Remove ".concat(e.name)," "]})]},e.id)})),c.length>0?Object(f.jsxs)(i.b,{id:"checkout",to:"/checkout",children:[" ",Object(f.jsxs)("button",{id:"checkout-item",children:[" ","Check Out  "," "]})," "]}):null]})}),H=c(16),I=(c(73),function(){var e=Object(n.useState)({}),t=Object(d.a)(e,2),c=t[0],a=t[1];function r(){return(r=Object(j.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,b.a.post("https://e-plates.herokuapp.com/checkout",c);case 4:e.sent,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}return Object(f.jsx)("div",{children:Object(f.jsxs)("form",{className:"checkout_form",onSubmit:function(e){return function(e){return r.apply(this,arguments)}(e)},onChange:function(e){return function(e){var t=e.target,n=t.id,r=t.value;a(Object(H.a)(Object(H.a)({},c),{},Object(l.a)({},n,r)))}(e)},children:[Object(f.jsx)("h2",{id:"contact",children:" Contact information "}),Object(f.jsx)("input",{type:"text",id:"email",placeholder:"Email"}),Object(f.jsx)("h2",{id:"shipping",children:" Shipping address  "}),Object(f.jsx)("input",{type:"text",id:"firstName",placeholder:"First Name"}),Object(f.jsx)("input",{type:"text",id:"lastName",placeholder:"Last Name"}),Object(f.jsx)("input",{type:"text",id:"address",placeholder:"Address"}),Object(f.jsx)("input",{type:"text",id:"city",placeholder:"City"}),Object(f.jsx)("input",{type:"text",id:"phone",placeholder:"Phone"}),Object(f.jsxs)(i.b,{id:"cart-link",to:"/cart",children:[" ",Object(f.jsx)("input",{type:"button",id:"back-to-cart",value:"< Back to Cart"})]}),Object(f.jsxs)(i.b,{id:"pay-link",to:"/payment",children:[" ",Object(f.jsx)("input",{id:"pay",type:"submit",value:"Continue To Payment"})]})]})})}),M=(c(74),function(){var e=Object(n.useState)({}),t=Object(d.a)(e,2),c=t[0],a=t[1];function r(){return(r=Object(j.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),document.querySelector(".pay-form").innerHTML="<h1>Thank you for your purchase !</h1>";case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(f.jsx)("div",{children:Object(f.jsxs)("form",{className:"pay-form",onSubmit:function(e){return function(e){return r.apply(this,arguments)}(e)},onChange:function(e){return function(e){var t=e.target,n=t.id,r=t.value;a(Object(H.a)(Object(H.a)({},c),{},Object(l.a)({},n,r))),console.log(c)}(e)},children:[Object(f.jsx)("h2",{id:"info",children:" Card Info "}),Object(f.jsx)("input",{type:"text",id:"cardNumber",placeholder:"Card Number"}),Object(f.jsx)("input",{type:"text",id:"cardName",placeholder:"Name on card"}),Object(f.jsx)("input",{type:"text",id:"cardExp",placeholder:"Expiration date (MM / YY)"}),Object(f.jsx)("input",{type:"text",id:"secCode",placeholder:"Security code"}),Object(f.jsx)("input",{type:"submit",id:"pay_now",value:"Pay Now"})]})})});var L=function(){return Object(f.jsx)("div",{className:"App",children:Object(f.jsxs)(i.a,{children:[Object(f.jsx)(v,{}),Object(f.jsxs)(o.c,{children:[Object(f.jsx)(o.a,{exact:!0,path:"/",component:S}),Object(f.jsx)(o.a,{path:"/search/:search",component:N}),Object(f.jsx)(o.a,{path:"/favorites",component:D}),Object(f.jsx)(o.a,{path:"/plate/:name",component:T}),Object(f.jsx)(o.a,{path:"/cart",component:E}),Object(f.jsx)(o.a,{path:"/checkout",component:I}),Object(f.jsx)(o.a,{path:"/payment",component:M})]})]})})},P=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,76)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),r(e),s(e)}))};s.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(L,{})}),document.getElementById("root")),P()}},[[75,1,2]]]);
//# sourceMappingURL=main.19f04930.chunk.js.map