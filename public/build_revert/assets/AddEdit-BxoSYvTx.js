import{Y as k,r as S,_ as C,d as $,Q as y,aT as h,o as O,g as w,w as n,a as o,j as u,t as r,I as D,m as E,q as T,f as B,F as I,p as M,B as q,X as A}from"./app-OikDM5Kw.js";import{a as F}from"./apiAdmin-yFrp6bZq.js";import{S as N}from"./SaveOutlined-BSR-wlKo.js";const P=()=>{const e="designations",{t:a}=k(),s={name:"",description:""},l=S([{title:a("designation.name"),dataIndex:"name"}]),t=[{key:"name",value:a("common.name")}];return{addEditUrl:e,initData:s,columns:l,filterableColumns:t}},U=$({props:["formData","data","visible","url","addEditType","pageTitle","successMessage"],components:{PlusOutlined:y,LoadingOutlined:h,SaveOutlined:N},setup(e,{emit:a}){const{addEditRequestAdmin:s,loading:l,rules:t}=F();return{loading:l,rules:t,onClose:()=>{t.value={},a("closed")},onSubmit:()=>{s({url:e.url,data:e.formData,successMessage:e.successMessage,success:i=>{a("addEditSuccess",i.xid)}})},drawerWidth:window.innerWidth<=991?"90%":"45%"}}});function V(e,a,s,l,t,c){const d=D,i=E,p=T,_=B,f=I,g=M("SaveOutlined"),m=q,v=A;return O(),w(v,{open:e.visible,closable:!1,centered:!0,title:e.pageTitle,onOk:e.onSubmit},{footer:n(()=>[o(m,{key:"submit",type:"primary",loading:e.loading,onClick:e.onSubmit},{icon:n(()=>[o(g)]),default:n(()=>[u(" "+r(e.addEditType=="add"?e.$t("common.create"):e.$t("common.update")),1)]),_:1},8,["loading","onClick"]),o(m,{key:"back",onClick:e.onClose},{default:n(()=>[u(r(e.$t("common.cancel")),1)]),_:1},8,["onClick"])]),default:n(()=>[o(f,{layout:"vertical"},{default:n(()=>[o(_,{gutter:16},{default:n(()=>[o(p,{xs:24,sm:24,md:24,lg:24},{default:n(()=>[o(i,{label:e.$t("designation.name"),name:"name",help:e.rules.name?e.rules.name.message:null,validateStatus:e.rules.name?"error":null,class:"required"},{default:n(()=>[o(d,{value:e.formData.name,"onUpdate:value":a[0]||(a[0]=b=>e.formData.name=b),placeholder:e.$t("common.placeholder_default_text",[e.$t("designation.name")])},null,8,["value","placeholder"])]),_:1},8,["label","help","validateStatus"])]),_:1})]),_:1})]),_:1})]),_:1},8,["open","title","onOk"])}const Q=C(U,[["render",V]]);export{Q as A,P as f};