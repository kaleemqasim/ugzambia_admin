import{A as k,f as C}from"./fields-D489DwG1.js";import{_ as E,d as T,R as b,b as $,f as u,r as A,o as a,c as v,i as p,w as s,T as d,G as h,a as n,k as w,O as S,B as g,H as B}from"./app-yQu0_bFn.js";const D=T({props:{btnType:{default:"default"},tooltip:{default:!0},customType:{default:"button"}},emits:["onAddSuccess"],components:{PlusOutlined:b,AddEdit:k},setup(e,{emit:c}){const{permsArray:m}=$(),{initData:l,addEditUrl:f}=C(),o=u(!1),i=u("add"),t=u({...l});return{permsArray:m,visible:o,addEditType:i,addEditUrl:f,formData:t,addEditSuccess:()=>{o.value=!1,t.value={...l},c("onAddSuccess")},onClose:()=>{o.value=!1},showAdd:()=>{o.value=!0}}}}),O={key:0};function L(e,c,m,l,f,o){const i=S,t=A("PlusOutlined"),r=g,y=B,_=A("AddEdit");return e.permsArray.includes("leave_types_create")||e.permsArray.includes("admin")?(a(),v("div",O,[e.customType=="menu"?(a(),p(i,{onClick:e.showAdd,key:"leave_types"},{icon:s(()=>[d(e.$slots,"icon")]),default:s(()=>[d(e.$slots,"default")]),_:3},8,["onClick"])):(a(),v(h,{key:1},[e.tooltip?(a(),p(y,{key:0,placement:"topLeft",title:e.$t("leave_type.add"),"arrow-point-at-center":""},{default:s(()=>[n(r,{onClick:e.showAdd,class:"ml-5 no-border-radius",type:e.btnType},{icon:s(()=>[n(t)]),default:s(()=>[d(e.$slots,"default")]),_:3},8,["onClick","type"])]),_:3},8,["title"])):(a(),p(r,{key:1,onClick:e.showAdd,class:"ml-5 no-border-radius",type:e.btnType},{icon:s(()=>[n(t)]),default:s(()=>[d(e.$slots,"default")]),_:3},8,["onClick","type"]))],64)),n(_,{addEditType:e.addEditType,visible:e.visible,url:e.addEditUrl,onAddEditSuccess:e.addEditSuccess,onClosed:e.onClose,formData:e.formData,data:e.formData,pageTitle:e.$t("leave_type.add"),successMessage:e.$t("leave_type.created")},null,8,["addEditType","visible","url","onAddEditSuccess","onClosed","formData","data","pageTitle","successMessage"])])):w("",!0)}const N=E(D,[["render",L]]);export{N as L};
