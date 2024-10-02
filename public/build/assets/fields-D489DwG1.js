import{a as D}from"./apiAdmin-DF0-_dJB.js";import{_ as C,d as w,R as I,aT as O,b as E,r as T,o as b,i as g,w as a,a as l,l as _,t as p,k as U,I as q,n as A,q as B,bx as M,bv as N,h as V,a_ as F,F as R,B as W,X as z,Y as L}from"./app-yQu0_bFn.js";import{S as P}from"./SaveOutlined-Bu-bD-Wg.js";const X=w({props:["formData","data","visible","url","addEditType","pageTitle","successMessage"],components:{PlusOutlined:I,LoadingOutlined:O,SaveOutlined:P},setup(e,{emit:t}){const{addEditRequestAdmin:o,loading:i,rules:d}=D(),{appSetting:r,disabledDate:u,permsArray:s}=E();return{loading:i,rules:d,onClose:()=>{d.value={},t("closed")},onSubmit:()=>{o({url:e.url,data:e.formData,successMessage:e.successMessage,success:f=>{t("addEditSuccess",f.xid)}})},appSetting:r,disabledDate:u,permsArray:s,drawerWidth:window.innerWidth<=991?"90%":"45%"}}});function Y(e,t,o,i,d,r){const u=q,s=A,m=B,v=M,f=N,c=V,h=F,S=R,$=T("SaveOutlined"),y=W,k=z;return b(),g(k,{open:e.visible,closable:!1,centered:!0,title:e.pageTitle,onOk:e.onSubmit},{footer:a(()=>[l(y,{key:"submit",type:"primary",loading:e.loading,onClick:e.onSubmit},{icon:a(()=>[l($)]),default:a(()=>[_(" "+p(e.addEditType=="add"?e.$t("common.create"):e.$t("common.update")),1)]),_:1},8,["loading","onClick"]),l(y,{key:"back",onClick:e.onClose},{default:a(()=>[_(p(e.$t("common.cancel")),1)]),_:1},8,["onClick"])]),default:a(()=>[l(S,{layout:"vertical"},{default:a(()=>[l(c,{gutter:16},{default:a(()=>[l(m,{xs:18,sm:18,md:18,lg:18},{default:a(()=>[l(s,{label:e.$t("leave_type.name"),name:"name",help:e.rules.name?e.rules.name.message:null,validateStatus:e.rules.name?"error":null,class:"required"},{default:a(()=>[l(u,{value:e.formData.name,"onUpdate:value":t[0]||(t[0]=n=>e.formData.name=n),placeholder:e.$t("common.placeholder_default_text",[e.$t("leave_type.name")])},null,8,["value","placeholder"])]),_:1},8,["label","help","validateStatus"])]),_:1}),l(m,{xs:6,sm:6,md:6,lg:6},{default:a(()=>[l(s,{label:e.$t("leave_type.is_paid"),name:"is_paid",help:e.rules.is_paid?e.rules.is_paid.message:null,validateStatus:e.rules.is_paid?"error":null},{default:a(()=>[l(f,{value:e.formData.is_paid,"onUpdate:value":t[1]||(t[1]=n=>e.formData.is_paid=n),"button-style":"solid",size:"small"},{default:a(()=>[l(v,{value:1},{default:a(()=>[_(p(e.$t("common.yes")),1)]),_:1}),l(v,{value:0},{default:a(()=>[_(p(e.$t("common.no")),1)]),_:1})]),_:1},8,["value"])]),_:1},8,["label","help","validateStatus"])]),_:1})]),_:1}),l(c,null,{default:a(()=>[l(m,{span:24},{default:a(()=>[l(s,{label:e.$t("leave_type.total_leaves"),name:"total_leaves",help:e.rules.total_leaves?e.rules.total_leaves.message:null,validateStatus:e.rules.total_leaves?"error":null,class:"required"},{default:a(()=>[l(h,{value:e.formData.total_leaves,"onUpdate:value":t[2]||(t[2]=n=>e.formData.total_leaves=n),placeholder:e.$t("common.placeholder_default_text",[e.$t("leave_type.total_leaves")]),style:{width:"100%"}},null,8,["value","placeholder"])]),_:1},8,["label","help","validateStatus"])]),_:1})]),_:1}),l(c,null,{default:a(()=>[e.formData.is_paid==1?(b(),g(m,{key:0,span:24},{default:a(()=>[l(s,{label:e.$t("leave_type.max_leaves_per_month"),name:"max_leaves_per_month",help:e.rules.max_leaves_per_month?e.rules.max_leaves_per_month.message:null,validateStatus:e.rules.max_leaves_per_month?"error":null},{default:a(()=>[l(h,{value:e.formData.max_leaves_per_month,"onUpdate:value":t[3]||(t[3]=n=>e.formData.max_leaves_per_month=n),placeholder:e.$t("common.placeholder_default_text",[e.$t("leave_type.max_leaves_per_month")]),style:{width:"100%"}},null,8,["value","placeholder"])]),_:1},8,["label","help","validateStatus"])]),_:1})):U("",!0)]),_:1})]),_:1})]),_:1},8,["open","title","onOk"])}const J=C(X,[["render",Y]]),K=()=>{const e="leave-types?fields=id,xid,name,is_paid,total_leaves,max_leaves_per_month",t="leave-types",{t:o}=L(),i=[],d={name:"",total_leaves:"",max_leaves_per_month:"",is_paid:0},r=[{title:o("leave_type.name"),dataIndex:"name"},{title:o("leave_type.total_leaves"),dataIndex:"total_leaves"},{title:o("leave_type.max_leaves_per_month"),dataIndex:"max_leaves_per_month"},{title:o("leave_type.is_paid"),dataIndex:"is_paid"},{title:o("common.action"),dataIndex:"action"}],u=[{key:"name",value:o("common.name")}];return{url:e,addEditUrl:t,initData:d,columns:r,filterableColumns:u,hashableColumns:i}};export{J as A,K as f};
