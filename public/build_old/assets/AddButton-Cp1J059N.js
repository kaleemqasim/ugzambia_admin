import{A as E,f as _}from"./AddEdit-DePc1g0l.js";import{_ as b,d as T,R as $,b as v,f as u,r as k,o as d,c as C,i as c,w as o,T as a,G as g,a as n,k as h,O as w,B as S,H as B}from"./app-DvNATx7Y.js";const D=T({props:{btnType:{default:"default"},tooltip:{default:!0},customType:{default:"button"}},emits:["onAddSuccess"],components:{PlusOutlined:$,AddEdit:E},setup(e,{emit:p}){const{permsArray:m}=v(),{initData:l,addEditUrl:f}=_(),s=u(!1),i=u("add"),t=u({...l});return{permsArray:m,visible:s,addEditType:i,addEditUrl:f,formData:t,addEditSuccess:()=>{s.value=!1,t.value={...l},p("onAddSuccess")},onClose:()=>{s.value=!1},showAdd:()=>{s.value=!0}}}}),O={key:0};function P(e,p,m,l,f,s){const i=w,t=k("PlusOutlined"),r=S,y=B,A=k("AddEdit");return e.permsArray.includes("roles_create")||e.permsArray.includes("admin")?(d(),C("div",O,[e.customType=="menu"?(d(),c(i,{onClick:e.showAdd,key:"categories"},{icon:o(()=>[a(e.$slots,"icon")]),default:o(()=>[a(e.$slots,"default")]),_:3},8,["onClick"])):(d(),C(g,{key:1},[e.tooltip?(d(),c(y,{key:0,placement:"topLeft",title:e.$t("role.add"),"arrow-point-at-center":""},{default:o(()=>[n(r,{onClick:e.showAdd,class:"ml-5 no-border-radius",type:e.btnType},{icon:o(()=>[n(t)]),default:o(()=>[a(e.$slots,"default")]),_:3},8,["onClick","type"])]),_:3},8,["title"])):(d(),c(r,{key:1,onClick:e.showAdd,class:"ml-5 no-border-radius",type:e.btnType},{icon:o(()=>[n(t)]),default:o(()=>[a(e.$slots,"default")]),_:3},8,["onClick","type"]))],64)),n(A,{addEditType:e.addEditType,visible:e.visible,url:e.addEditUrl,onAddEditSuccess:e.addEditSuccess,onClosed:e.onClose,formData:e.formData,data:e.formData,pageTitle:e.$t("role.add"),successMessage:e.$t("role.created")},null,8,["addEditType","visible","url","onAddEditSuccess","onClosed","formData","data","pageTitle","successMessage"])])):h("",!0)}const N=b(D,[["render",P]]);export{N as R};
