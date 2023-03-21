var z=Object.defineProperty,E=Object.defineProperties;var O=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var S=(e,o,r)=>o in e?z(e,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[o]=r,l=(e,o)=>{for(var r in o||(o={}))k.call(o,r)&&S(e,r,o[r]);if(f)for(var r of f(o))L.call(o,r)&&S(e,r,o[r]);return e},h=(e,o)=>E(e,O(o));var x=(e,o)=>{var r={};for(var a in e)k.call(e,a)&&o.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&f)for(var a of f(e))o.indexOf(a)<0&&L.call(e,a)&&(r[a]=e[a]);return r};import{R as y,r as c,j as t,c as H,M as I,L as F,N as B,a as p,b as R,d as j,e as G,A as W,s as d,B as m,f as w,g as q,C as J,T as K,I as U,h as _,i as u,k as V,l as Q,D as X,m as Y,n as Z,o as ee,p as te,G as N,q as oe,t as ne,u as re,v as ae,w as M,H as ie,x as D,y as se,z as le,E as b,F as ce,S as de,J as pe,K as he,O as ue}from"./vendor.823b2849.js";const me=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerpolicy&&(s.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?s.credentials="include":n.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(n){if(n.ep)return;n.ep=!0;const s=r(n);fetch(n.href,s)}};me();const v=y.createContext(void 0);function ge(e){const[o,r]=c.exports.useState({}),n={toggleDrawer:(s,i,g="temporary",C)=>{r({open:s,anchor:i,permanent:g,child:C})}};return t(v.Provider,{value:l(l({},o),n),children:e.children})}const P=y.createContext(void 0);function xe(e){const[o,r]=c.exports.useState({main:{open:!1,color:"primary"},circular:{open:!1,color:"primary"}}),s={createLoader:(i,g)=>{o.name&&r(h(l({},o),{[i]:void 0})),r(h(l({},o),{[i]:{open:!1,color:g||"primary"}}))},toggleLoader:i=>{o[i]?r(h(l({},o),{[i]:h(l({},o[i]),{open:!o[i].open})})):console.error("Loader does'nt exist. Name: "+i)}};return t(P.Provider,{value:l(l({},o),s),children:e.children})}const A=y.createContext(void 0);function fe(e){const[o,r]=c.exports.useState({main:{open:!0,severity:"warning",title:"App In Building!",message:""},snackbar:{open:!1,severity:"success",title:"",message:"This is a Snackbar!"}}),s={createBanner:(i,g,C,$)=>{o[i]&&r(h(l({},o),{[i]:void 0})),r(h(l({},o),{[i]:{open:!1,severity:g||"success",title:C||"",mesaage:$||""}}))},toggleBanner:i=>{o[i]?r(h(l({},o),{[i]:h(l({},o[i]),{open:!o[i].open})})):console.error("Banner does'nt exist. Name: "+i)}};return t(A.Provider,{value:l(l({},o),s),children:e.children})}const T=H({palette:{primary:{main:"#0092AB",light:"#00AECC",dark:"#2D4260"},secondary:{main:"#edf2ff",dark:"#737373",light:"#EBECF0"}}});function ye(){const[e,o]=c.exports.useState(T.palette.primary.light);return t("div",{className:"wrapper",children:t(I,{children:t("meta",{name:"theme-color",content:e})})})}const ve=[{name:"Home",url:"/"},{name:"About",url:"/about"}];function Ce(){return t(F,{children:ve.map((e,o)=>t(B,{to:e.url,children:p(R,{button:!0,children:[t(j,{primary:e.name}),t(G,{children:t(W,{})})]},e.name)},o))})}const be=d(Ce)`
  
`;function we({className:e}){return t(m,{className:e,sx:{flexGrow:1,display:{xs:"none",md:"flex"}},children:[{name:"Home",url:"/"},{name:"About",url:"/about"}].map(r=>t(B,{to:r.url,children:t(w,{sx:{my:2},children:r.name})},r.name))})}d(we)`
  
`;const Se=r=>{var a=r,{className:e}=a,o=x(a,["className"]);const n=c.exports.useContext(v);return t(q,{position:"static",className:e,children:t(J,{maxWidth:"xl",children:p(K,{disableGutters:!0,children:[t(m,{sx:{display:{xs:"flex",md:"none"}},children:t(U,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:()=>{n.toggleDrawer(!0,"left","temporary",be)},color:"inherit",children:t(_,{})})}),t(u,{variant:"h6",noWrap:!0,component:"div",sx:{mr:2,display:"flex"},children:"Eventim - JLM"})]})})})},ke=d(Se)`
  background-color: ${e=>e.theme.palette.primary.dark};
  color: ${e=>e.theme.palette.secondary.main};

  button{
    color: ${e=>e.theme.palette.secondary.main};
  }

  .MuiBox-root{
    justify-content: flex-end;
  }

  .MuiButtonBase-root{
    padding-left: 0;
  }
`;function Le(r){var a=r,{className:e}=a,o=x(a,["className"]);return t("div",{className:e,children:o.children})}const Ne=d(Le)`
  height: 100vh;
  /* background-color: ${e=>e.theme.palette.primary.light}; */
`;function De({className:e}){return t("div",{id:"FOOTER",className:e})}const Be=d(De)`
  color: ${e=>e.theme.palette.secondary.dark};
  background-color: ${e=>e.theme.palette.secondary.light};
  padding: 25px 30px 30px 25px;
  
  li span{
    color: ${e=>e.theme.palette.secondary.dark};
    font-size: 15px;
  }

  h5{
    background-color: unset;
    font-weight: 500;
    font-size: 17px;
    color: #303030;
    margin: unset;
  }

`;function Me(r){var a=r,{className:e}=a,o=x(a,["className"]);const n=c.exports.useContext(v);return t(V,{className:e,anchor:n.anchor,open:n.open,variant:n.permanent,onClose:()=>{n.toggleDrawer(!1)},children:t(m,{className:"drawer-layout",sx:{width:n.anchor==="top"||n.anchor==="bottom"?"auto":250},role:"presentation",onClick:()=>{n.toggleDrawer(!1)},children:t(n.child,{})})})}const Pe=d(Me)`
  color: #F4F5F7;
  
  .MuiDrawer-paper {
    background-color: ${e=>e.theme.palette.primary.main};
    color: ${e=>e.theme.palette.secondary.main};
  }

  svg{
    color: ${e=>e.theme.palette.secondary.main};
  }

  a{
    color: ${e=>e.theme.palette.secondary.main};
    text-decoration: none;
  }
`;function Ae({className:e}){const[o,r]=c.exports.useState(!1),a=()=>{r(!1)};return p(Q,{id:"main-modal-root",className:e,open:o,onClose:a,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",sx:{zIndex:1500},children:[t(X,{id:"alert-dialog-title",children:"Welcome to Eventim"}),t(Y,{children:t(Z,{id:"alert-dialog-description",children:"Built with love using Vite build tool, React and Mui UI library."})}),t(ee,{children:t(w,{onClick:a,children:"Close"})})]})}const Te=d(Ae)`
  
`;function $e(r){var a=r,{className:e}=a,o=x(a,["className"]);const[n,s]=c.exports.useState(!0);return t(te,{className:e,open:n,onClose:()=>{s(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:o.children})}d($e)`
  #main-modal-root{
    z-index: 1500;
    background-color: #ffe607;
  }
`;function ze({className:e}){const[o,r]=c.exports.useState([]),a=location.hostname==="localhost"||location.hostname==="127.0.0.1"?"http://localhost:5000":"https://musicline-backend.vercel.app";return c.exports.useEffect(()=>{fetch(`${a}/events`,{method:"get",headers:{Accept:"application/json","Content-Type":"application/json"}}).then(n=>n.json()).then(n=>{console.log(n),r(n)}).catch(n=>{console.log(n)})},[]),t("div",{className:e,children:o[0]?t(m,{sx:{flexGrow:2,height:"100%"},children:t(N,{container:!0,spacing:1,sx:{height:"100%"},children:o.map(n=>t(N,{item:!0,xs:11,md:4,children:p(oe,{sx:{display:"flex"},children:[p(m,{sx:{display:"flex",flexDirection:"column"},children:[p(ne,{sx:{flex:"1 0 auto"},children:[t(u,{component:"div",variant:"h6",fontSize:"15px",children:n.title}),t(u,{variant:"subtitle1",color:"text.secondary",component:"div",fontSize:"11px",paddingTop:"10px",children:n.date}),t(u,{variant:"subtitle2",color:"text.secondary",component:"div",fontSize:"11px",paddingTop:"10px",children:n.location})]}),t(re,{children:t(w,{size:"small",fontSize:"12px",href:n.link,children:"Link"})})]}),t(ae,{component:"img",sx:{width:151},image:n.img,alt:"event image"})]})}))})}):t(m,{sx:{width:"100%"},children:t(M,{})})})}const Ee=d(ze)`
  max-height:100vh;
  overflow-y: scroll;
  padding: 25px;
`;function Oe({className:e}){return t("div",{className:e,children:t(u,{variant:"h2",className:"page-h2",children:"About Page"})})}const He=d(Oe)`

`;function Ie({className:e}){return p("div",{id:"NO_MATCH_WRAPPER",className:e,children:[t(u,{variant:"h2",className:"page-h2",children:"404"}),t(u,{variant:"h3",className:"page-h3",children:"Nothing Here"})]})}const Fe=d(Ie)`

`;function Re({className:e}){const o=c.exports.useContext(v),r=c.exports.useContext(P),a=c.exports.useContext(A);c.exports.useEffect(()=>{},[]);const n=s=>{a.toggleBanner(s)};return t("div",{className:e,children:p(ie,{children:[t(ye,{}),t(ke,{className:"header"}),a.main.open&&p(D,{severity:"warning",children:[t(se,{children:a.main.title}),a.main.message]}),t(Ne,{children:p(le,{children:[t(b,{path:"/",element:t(Ee,{className:"page"})}),t(b,{path:"/about",element:t(He,{className:"page"})}),t(b,{path:"*",element:t(Fe,{className:"page"})})]})}),o.open&&o.child&&t(Pe,{className:"drawer"}),r.main.open&&t(M,{color:r.main.color||"primary"}),r.circular.open&&t(ce,{color:r.main.color||"primary"}),a.snackbar.open&&t(de,{open:a.snackbar.open,autoHideDuration:6e3,onClose:()=>{},children:t(D,{onClose:()=>{n("snackbar")},severity:a.snackbar.severity,sx:{width:"100%"},children:a.snackbar.message})}),t(Te,{}),t(Be,{})]})})}const je=d(Re)`
  color: ${e=>e.theme.palette.secondary.main};

  .page-h2{
    padding: 30px 0px 0px 35px;
    font-size: 40px;
    font-weight: 300;
    color: ${e=>e.theme.palette.secondary.main};
  }

  .page-h3{
    margin: 15px 0px 0px 35px;
    font-size: 35px;
    font-weight: 300;
    color: ${e=>e.theme.palette.secondary.main};
  }

  a {
    text-decoration: none;
  }

  .MuiLinearProgress-root{
    /* width: 100%;
    position: fixed;
    top: 0;
    left: 0; */
  }
`,Ge=[ge,fe,xe];function We(e){return t(pe,{children:Ge.reduceRight((o,r)=>t(r,{children:o}),e.children)})}he.render(t(y.StrictMode,{children:t(We,{children:t(ue,{theme:T,children:t(je,{className:"app"})})})}),document.getElementById("root"));
