import{A as g,f as k}from"./AddEdit-Dld4xuY3.js";import{_,d as T,Q as b,b as $,r as u,o as a,c as E,g as p,w as s,S as n,D as v,a as d,i as S,N as h,p as C,B as w,E as D}from"./app-OikDM5Kw.js";const B=T({props:{btnType:{default:"default"},tooltip:{default:!0},customType:{default:"button"},panelType:{default:"admin"}},emits:["onAddSuccess"],components:{PlusOutlined:b,AddEdit:g},setup(e,{emit:c}){const{permsArray:m}=$(),{initData:l,addEditUrl:f}=k(),o=u(!1),i=u("add"),t=u({...l});return{permsArray:m,visible:o,addEditType:i,addEditUrl:f,formData:t,addEditSuccess:()=>{o.value=!1,t.value={...l},c("onAddSuccess")},onClose:()=>{o.value=!1},showAdd:()=>{o.value=!0}}}}),L={key:0};function N(e,c,m,l,f,o){const i=h,t=C("PlusOutlined"),r=w,y=D,A=C("AddEdit");return e.permsArray.includes("translations_create")||e.permsArray.includes("admin")||e.panelType=="superadmin"?(a(),E("div",L,[e.customType=="menu"?(a(),p(i,{onClick:e.showAdd,key:"categories"},{icon:s(()=>[n(e.$slots,"icon")]),default:s(()=>[n(e.$slots,"default")]),_:3},8,["onClick"])):(a(),E(v,{key:1},[e.tooltip?(a(),p(y,{key:0,placement:"topLeft",title:e.$t("langs.add"),"arrow-point-at-center":""},{default:s(()=>[d(r,{onClick:e.showAdd,class:"ml-5 no-border-radius",type:e.btnType},{icon:s(()=>[d(t)]),default:s(()=>[n(e.$slots,"default")]),_:3},8,["onClick","type"])]),_:3},8,["title"])):(a(),p(r,{key:1,onClick:e.showAdd,class:"ml-5 no-border-radius",type:e.btnType},{icon:s(()=>[d(t)]),default:s(()=>[n(e.$slots,"default")]),_:3},8,["onClick","type"]))],64)),d(A,{addEditType:e.addEditType,visible:e.visible,url:e.addEditUrl,onAddEditSuccess:e.addEditSuccess,onClosed:e.onClose,formData:e.formData,data:e.formData,pageTitle:e.$t("langs.add"),successMessage:e.$t("langs.created")},null,8,["addEditType","visible","url","onAddEditSuccess","onClosed","formData","data","pageTitle","successMessage"])])):S("",!0)}const M=_(B,[["render",N]]);export{M as L};