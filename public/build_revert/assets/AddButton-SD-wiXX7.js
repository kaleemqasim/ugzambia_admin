import{A as C,f as k}from"./AddEdit-M237dgh9.js";import{_ as b,d as v,Q as T,b as $,r as u,p as A,o as d,c as E,g as c,w as o,S as a,D as g,a as n,i as w,N as S,B as h,E as D}from"./app-OikDM5Kw.js";const B=v({props:{btnType:{default:"default"},tooltip:{default:!0},customType:{default:"button"}},emits:["onAddSuccess"],components:{PlusOutlined:T,AddEdit:C},setup(e,{emit:p}){const{permsArray:m}=$(),{initData:l,addEditUrl:f}=k(),s=u(!1),i=u("add"),t=u({...l});return{permsArray:m,visible:s,addEditType:i,addEditUrl:f,formData:t,addEditSuccess:()=>{s.value=!1,t.value={...l},p("onAddSuccess")},onClose:()=>{s.value=!1},showAdd:()=>{s.value=!0}}}}),P={key:0};function M(e,p,m,l,f,s){const i=S,t=A("PlusOutlined"),r=h,y=D,_=A("AddEdit");return e.permsArray.includes("payment_modes_view")||e.permsArray.includes("admin")?(d(),E("div",P,[e.customType=="menu"?(d(),c(i,{onClick:e.showAdd,key:"categories"},{icon:o(()=>[a(e.$slots,"icon")]),default:o(()=>[a(e.$slots,"default")]),_:3},8,["onClick"])):(d(),E(g,{key:1},[e.tooltip?(d(),c(y,{key:0,placement:"topLeft",title:e.$t("payment_mode.add"),"arrow-point-at-center":""},{default:o(()=>[n(r,{onClick:e.showAdd,class:"ml-5 no-border-radius",type:e.btnType},{icon:o(()=>[n(t)]),default:o(()=>[a(e.$slots,"default")]),_:3},8,["onClick","type"])]),_:3},8,["title"])):(d(),c(r,{key:1,onClick:e.showAdd,class:"ml-5 no-border-radius",type:e.btnType},{icon:o(()=>[n(t)]),default:o(()=>[a(e.$slots,"default")]),_:3},8,["onClick","type"]))],64)),n(_,{addEditType:e.addEditType,visible:e.visible,url:e.addEditUrl,onAddEditSuccess:e.addEditSuccess,onClosed:e.onClose,formData:e.formData,data:e.formData,pageTitle:e.$t("payment_mode.add"),successMessage:e.$t("payment_mode.created")},null,8,["addEditType","visible","url","onAddEditSuccess","onClosed","formData","data","pageTitle","successMessage"])])):w("",!0)}const U=b(B,[["render",M]]);export{U as P};