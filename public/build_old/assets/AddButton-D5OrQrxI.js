import{A as C,f as E}from"./AddEdit-CotZ6avV.js";import{_ as b,d as T,R as v,b as $,f as u,r as A,o as d,c as k,i as c,w as o,T as a,G as w,a as n,k as g,O as h,B as S,H as B}from"./app-DvNATx7Y.js";const D=T({props:{btnType:{default:"default"},tooltip:{default:!0},customType:{default:"button"}},emits:["onAddSuccess"],components:{PlusOutlined:v,AddEdit:C},setup(e,{emit:p}){const{permsArray:m}=$(),{initData:l,addEditUrl:f}=E(),s=u(!1),i=u("add"),t=u({...l});return{permsArray:m,visible:s,addEditType:i,addEditUrl:f,formData:t,addEditSuccess:()=>{s.value=!1,t.value={...l},p("onAddSuccess")},onClose:()=>{s.value=!1},showAdd:()=>{s.value=!0}}}}),P={key:0};function O(e,p,m,l,f,s){const i=h,t=A("PlusOutlined"),r=S,y=B,_=A("AddEdit");return e.permsArray.includes("payment_modes_view")||e.permsArray.includes("admin")?(d(),k("div",P,[e.customType=="menu"?(d(),c(i,{onClick:e.showAdd,key:"categories"},{icon:o(()=>[a(e.$slots,"icon")]),default:o(()=>[a(e.$slots,"default")]),_:3},8,["onClick"])):(d(),k(w,{key:1},[e.tooltip?(d(),c(y,{key:0,placement:"topLeft",title:e.$t("payment_mode.add"),"arrow-point-at-center":""},{default:o(()=>[n(r,{onClick:e.showAdd,class:"ml-5 no-border-radius",type:e.btnType},{icon:o(()=>[n(t)]),default:o(()=>[a(e.$slots,"default")]),_:3},8,["onClick","type"])]),_:3},8,["title"])):(d(),c(r,{key:1,onClick:e.showAdd,class:"ml-5 no-border-radius",type:e.btnType},{icon:o(()=>[n(t)]),default:o(()=>[a(e.$slots,"default")]),_:3},8,["onClick","type"]))],64)),n(_,{addEditType:e.addEditType,visible:e.visible,url:e.addEditUrl,onAddEditSuccess:e.addEditSuccess,onClosed:e.onClose,formData:e.formData,data:e.formData,pageTitle:e.$t("payment_mode.add"),successMessage:e.$t("payment_mode.created")},null,8,["addEditType","visible","url","onAddEditSuccess","onClosed","formData","data","pageTitle","successMessage"])])):g("",!0)}const U=b(D,[["render",O]]);export{U as P};
