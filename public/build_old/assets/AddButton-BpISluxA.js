import{A as k,f as E}from"./AddEdit-C0Y8czzZ.js";import{_,d as b,R as $,b as v,f as u,r as C,o as n,c as T,i as c,w as s,T as a,G as g,a as d,k as S,O as h,B as w,H as B}from"./app-DvNATx7Y.js";const D=b({props:{panelType:{type:String,default:"admin"},btnType:{default:"default"},tooltip:{default:!0},customType:{default:"button"}},emits:["onAddSuccess"],components:{PlusOutlined:$,AddEdit:k},setup(e,{emit:p}){const{permsArray:m}=v(),{initData:l,addEditUrl:f}=E(e.panelType),o=u(!1),i=u("add"),t=u({...l});return{permsArray:m,visible:o,addEditType:i,addEditUrl:f,formData:t,addEditSuccess:()=>{o.value=!1,t.value={...l},p("onAddSuccess")},onClose:()=>{o.value=!1},showAdd:()=>{o.value=!0}}}}),O={key:0};function P(e,p,m,l,f,o){const i=h,t=C("PlusOutlined"),r=w,y=B,A=C("AddEdit");return e.panelType=="admin"&&(e.permsArray.includes("currencies_create")||e.permsArray.includes("admin"))||e.panelType=="superadmin"?(n(),T("div",O,[e.customType=="menu"?(n(),c(i,{onClick:e.showAdd,key:"categories"},{icon:s(()=>[a(e.$slots,"icon")]),default:s(()=>[a(e.$slots,"default")]),_:3},8,["onClick"])):(n(),T(g,{key:1},[e.tooltip?(n(),c(y,{key:0,placement:"topLeft",title:e.$t("currency.add"),"arrow-point-at-center":""},{default:s(()=>[d(r,{onClick:e.showAdd,class:"ml-5 no-border-radius",type:e.btnType},{icon:s(()=>[d(t)]),default:s(()=>[a(e.$slots,"default")]),_:3},8,["onClick","type"])]),_:3},8,["title"])):(n(),c(r,{key:1,onClick:e.showAdd,class:"ml-5 no-border-radius",type:e.btnType},{icon:s(()=>[d(t)]),default:s(()=>[a(e.$slots,"default")]),_:3},8,["onClick","type"]))],64)),d(A,{addEditType:e.addEditType,visible:e.visible,url:e.addEditUrl,onAddEditSuccess:e.addEditSuccess,onClosed:e.onClose,formData:e.formData,data:e.formData,pageTitle:e.$t("currency.add"),successMessage:e.$t("currency.created")},null,8,["addEditType","visible","url","onAddEditSuccess","onClosed","formData","data","pageTitle","successMessage"])])):S("",!0)}const U=_(D,[["render",P]]);export{U as C};
