(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[626],{9012:function(e,t,s){Promise.resolve().then(s.bind(s,378))},5601:function(e,t){"use strict";function s(){return null}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},378:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return d}});var n=s(7437),o=s(1396),a=s.n(o),r=s(5601),l=s.n(r),i=s(2265);function d(){let[e,t]=(0,i.useState)({}),[s,o]=(0,i.useState)(!1),[r,d]=(0,i.useState)({email:"",password:""}),[c,u]=(0,i.useState)(!1);if((0,i.useEffect)(()=>{(async()=>{try{let e=await fetch("/data.json"),s=await e.json();t(s)}catch(e){}})()},[]),!e)return(0,n.jsx)("div",{className:"fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-md p-4 text-center",children:(0,n.jsx)("h2",{className:"text-lg font-medium text-gray-900",children:"Loading..."})});let m=e.users&&e.users.find(e=>{if(e.details.email===r.email&&e.password===r.password)return e}),x=async e=>{e.preventDefault()},f=()=>o(!0);return(0,n.jsxs)("div",{className:"min-h-screen flex items-center justify-center",children:[(0,n.jsx)(l(),{children:(0,n.jsx)("title",{children:"Digitosys Login"})}),(0,n.jsxs)("div",{className:"bg-gray-100 p-8 rounded-xl shadow-md",children:[(0,n.jsxs)("h2",{className:"text-2xl font-sans font-bold mb-6 text-center",children:["Welcome to"," ",(0,n.jsx)("span",{className:"font-extrabold font-serif text-[#dc5777]",children:"Digitosys"})]}),(0,n.jsxs)("form",{onSubmit:x,children:[(0,n.jsxs)("div",{className:"mb-4",children:[(0,n.jsxs)("label",{htmlFor:"email",className:"block text-gray-700 font-sans font-bold mb-2",children:["Email",(0,n.jsx)("button",{onClick:f,className:"text-sm font-sans ml-4 font-medium text-[#23a888]",children:"See Credentials"})]}),(0,n.jsx)("input",{type:"email",id:"email",name:"email",value:r.email,onChange:e=>d({...r,email:e.target.value}),className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"})]}),(0,n.jsxs)("div",{className:"mb-6",children:[(0,n.jsx)("label",{htmlFor:"password",className:"block text-gray-700 font-sans font-bold mb-2",children:"Password"}),(0,n.jsx)("input",{type:c?"text":"password",id:"password",name:"password",value:r.password,onChange:e=>d({...r,password:e.target.value}),className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"}),(0,n.jsx)("button",{type:"button",className:"text-gray-400 mt-2 hover:text-gray-700 focus:outline-none focus:text-gray-700",onClick:()=>u(!c),children:c?(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",className:"w-6 h-6",children:[(0,n.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"}),(0,n.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"})]}):(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",className:"w-6 h-6",children:(0,n.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"})})})]}),(0,n.jsxs)("div",{className:"mb-6",children:[(0,n.jsx)(a(),{href:"/forgot-password",className:"text-sm font-sans font-medium text-blue-600 hover:text-blue-800",children:"Forgot password?"}),(0,n.jsx)("button",{onClick:f,className:"text-sm font-sans ml-4 font-medium text-[#23a888]",children:"See Credentials"})]}),(0,n.jsx)("button",{type:"submit",className:"bg-[#dc5777] text-white px-4 py-2 rounded font-sans font-bold hover:bg-[#7a232c] focus:outline-none focus:shadow-outline",children:m?(0,n.jsx)(a(),{href:"/".concat(null==m?void 0:m.role),children:"Log In"}):"Log In"}),(0,n.jsx)("div",{className:"mt-6",children:(0,n.jsxs)("div",{className:"flex items-center justify-center",children:[(0,n.jsx)("button",{className:"bg-white text-[#dc5777] border border-[#dc5777] rounded-full px-4 py-2 mr-2 hover:bg-[#7a232c] hover:text-white focus:outline-none focus:shadow-outline",children:(0,n.jsx)("span",{className:"ml-2",children:"Continue with Facebook"})}),(0,n.jsx)("button",{className:"bg-white text-[#23a888] border border-[#23a888] rounded-full px-4 py-2 hover:bg-[#23a888] hover:text-white focus:outline-none focus:shadow-outline",children:(0,n.jsx)("span",{className:"ml-2",children:"Continue with Discord"})})]})}),(0,n.jsx)("div",{className:"text-center mt-6",children:(0,n.jsx)(a(),{className:"text-sm font-sans font-medium text-gray-700 hover:text-gray-900",href:"/register",children:"Do not have an account? Register"})})]})]}),s&&(0,n.jsxs)("div",{className:"fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  rounded-lg shadow-xl overflow-y-auto",style:{width:"50vw",height:"50vh"},children:[(0,n.jsxs)("div",{className:"bg-slate-500 p-4 rounded-lg shadow-md",children:[(0,n.jsx)("h2",{className:"text-2xl text-[#dc5777] font-bold mb-6 text-center",children:"Login Credentials"}),(0,n.jsxs)("div",{className:"grid  grid-cols-1 md:grid-cols-2 gap-4",children:[(0,n.jsxs)("div",{className:"bg-gray-100 p-4 rounded-lg shadow-sm",children:[(0,n.jsx)("h3",{className:"text-xl font-semibold mb-2",children:"Customer"}),(0,n.jsxs)("p",{className:"text-gray-700",children:["Email: customer@example.com",(0,n.jsx)("br",{}),"Password: customer_password"]})]}),(0,n.jsxs)("div",{className:"bg-gray-100 p-4 rounded-lg shadow-sm",children:[(0,n.jsx)("h3",{className:"text-xl font-semibold mb-2",children:"Admin"}),(0,n.jsxs)("p",{className:"text-gray-700",children:["Email: admin@example.com",(0,n.jsx)("br",{}),"Password: admin_password"]})]})]})]}),(0,n.jsx)("button",{className:"absolute top-0 right-0 m-4 text-red-700 hover:text-gray-700 text-2xl focus:outline-none focus:text-gray-700",onClick:()=>o(!1),children:"\xd7"})]})]})}},622:function(e,t,s){"use strict";var n=s(2265),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,s){var n,a={},d=null,c=null;for(n in void 0!==s&&(d=""+s),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(c=t.ref),t)r.call(t,n)&&!i.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===a[n]&&(a[n]=t[n]);return{$$typeof:o,type:e,key:d,ref:c,props:a,_owner:l.current}}t.Fragment=a,t.jsx=d,t.jsxs=d},7437:function(e,t,s){"use strict";e.exports=s(622)},1396:function(e,t,s){e.exports=s(5250)}},function(e){e.O(0,[250,971,938,744],function(){return e(e.s=9012)}),_N_E=e.O()}]);