"use strict";(self.webpackChunkreact_homework=self.webpackChunkreact_homework||[]).push([[335],{335:function(t,e,n){n.r(e),n.d(e,{default:function(){return y}});var a,c=n(8152),r=n(2791),o={contactForm:"contactForm_contactForm__aVixc",contactForm__label:"contactForm_contactForm__label__zqFPe",contactForm__button:"contactForm_contactForm__button__1fAmX"},s=n(9434),l=n(2167),i=n(2541),u=n(3329),m=function(){var t=(0,r.useState)(""),e=(0,c.Z)(t,2),n=e[0],a=e[1],m=(0,r.useState)(""),d=(0,c.Z)(m,2),_=d[0],h=d[1],f=(0,s.v9)(l.K2),b=(0,s.I0)(),x=function(t){var e=t.currentTarget,n=e.name,c=e.value;switch(n){case"name":a(c);break;case"number":h(c)}},p=function(){a(""),h("")};return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)("form",{className:o.contactForm,onSubmit:function(t){t.preventDefault();var e,a={name:n,number:_},c=(e=n,f.find((function(t){return t.name===e})));c?alert("".concat(c.name," is already in contacts")):b((0,i.R5)(a)),p()},children:[(0,u.jsxs)("label",{className:o.contactForm__label,children:[(0,u.jsx)("span",{className:o.contactForm__text,children:"Name"}),(0,u.jsx)("input",{className:o.contactForm__input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:n,onChange:x,placeholder:""})]}),(0,u.jsxs)("label",{className:o.contactForm__label,children:[(0,u.jsx)("span",{className:o.contactForm__text,children:"Number"}),(0,u.jsx)("input",{className:o.contactForm__input,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",value:_,onChange:x,placeholder:"+",required:!0})]}),(0,u.jsx)("button",{className:o.contactForm__button,type:"submit",children:"Add contact"})]})})},d="ContactList_contactList__JT4co",_="ContactItem_contactList__item__8db7-",h="ContactItem_contactList__text__mb4eW",f="ContactItem_contactList__button__jZtu2",b=function(t){var e=t.id,n=t.name,a=t.number,c=(0,s.I0)(),r=(0,s.v9)(l.Kv);return(0,u.jsxs)("li",{className:_,children:[(0,u.jsx)("span",{className:h,children:"".concat(n,": ").concat(a)}),(0,u.jsx)("button",{className:f,onClick:function(){c((0,i.Ph)({id:e}))},disabled:!!r,children:"Delete"})]})},x=n(274),p=n(168),v=n(2499).Z.div(a||(a=(0,p.Z)(["\n  min-width: 100vw;\n  min-height: 100vh;\n  background-color: rgb(128 128 128 / 23%);\n  position: absolute;\n  left: 0;\n  top: 0;\n"]))),j=n(5712),F=function(){var t=(0,s.v9)(l.K2),e=(0,s.v9)(l.B8),n=(0,s.v9)(l.Kv),a=((0,s.v9)(j.Fz),(0,s.v9)(l.by)),c=(0,s.I0)();(0,r.useEffect)((function(){c((0,i.VC)())}),[c]),(0,r.useEffect)((function(){var t=c((0,i.VC)());return function(){console.log("effect on  filter abort"),t.abort()}}),[c,e]);var o=function(){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))};return console.log("state posle",t),(0,u.jsxs)(u.Fragment,{children:[n&&0===o().length&&(0,u.jsx)(v,{children:(0,u.jsx)(x.Z,{})}),a&&(0,u.jsx)("h1",{children:"Error 404 :D"}),0===o().length&&!n&&(0,u.jsx)("p",{style:{textAlign:"center",fontSize:24,fontWeight:700},children:"Contact not found"}),o().length>0&&(0,u.jsx)("ul",{className:d,children:o().map((function(t){var e=t.id,n=t.name,a=t.number;return(0,u.jsx)(b,{id:e,name:n,number:a},e)}))})]})},g="filter_label__qJCuu",C="filter_inputFilter__yEcs-",N=function(){var t=(0,s.v9)(l.B8),e=(0,s.I0)();return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)("label",{className:g,children:["Find by contact name",(0,u.jsx)("input",{className:C,type:"text",value:t,onChange:function(t){e((0,l.W1)({text:t.currentTarget.value}))}})]})})},y=function(){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("p",{children:"ContactsList"}),(0,u.jsx)(m,{}),(0,u.jsx)(N,{}),(0,u.jsx)(F,{})]})}}}]);
//# sourceMappingURL=335.6d70c14b.chunk.js.map