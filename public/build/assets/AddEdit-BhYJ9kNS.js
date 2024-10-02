import{Y as $,_ as h,d as k,R as D,aT as C,b as I,u as E,r as O,o as w,i as q,w as o,a,l as f,t as u,I as T,n as U,q as A,h as B,bu as M,bv as R,F,B as N,X as V}from"./app-yQu0_bFn.js";import{a as W}from"./apiAdmin-DF0-_dJB.js";import{S as L}from"./SaveOutlined-Bu-bD-Wg.js";const G=e=>{const n=e=="admin"?"currencies?fields=id,xid,name,symbol,position,code":"superadmin/currencies?fields=id,xid,name,symbol,position,code",p=e=="admin"?"currencies":"superadmin/currencies",{t}=$(),d={name:"",symbol:"",position:"",code:""},i=[{title:t("currency.name"),dataIndex:"name",sorter:!0},{title:t("currency.symbol"),dataIndex:"symbol",sorter:!0},{title:t("currency.position"),dataIndex:"position",sorter:!0},{title:t("currency.code"),dataIndex:"code",sorter:!0},{title:t("common.action"),dataIndex:"action"}],l=[{key:"name",value:t("common.name")}];return{url:n,addEditUrl:p,initData:d,columns:i,filterableColumns:l}},P=k({props:["formData","data","visible","url","addEditType","pageTitle","successMessage"],emits:["addEditSuccess"],components:{PlusOutlined:D,LoadingOutlined:C,SaveOutlined:L},setup(e,{emit:n}){const{addEditRequestAdmin:p,loading:t,rules:d}=W(),{appSetting:i}=I(),l=E();return{loading:t,rules:d,onClose:()=>{d.value={},n("closed")},onSubmit:()=>{p({url:e.url,data:e.formData,successMessage:e.successMessage,success:s=>{i.value.currency&&i.value.currency.xid==s.xid&&l.dispatch("auth/updateApp"),n("addEditSuccess",s.xid)}})},drawerWidth:window.innerWidth<=991?"90%":"45%"}}});function X(e,n,p,t,d,i){const l=T,m=U,c=A,s=B,b=M,v=R,_=F,g=O("SaveOutlined"),y=N,S=V;return w(),q(S,{open:e.visible,closable:!1,centered:!0,title:e.pageTitle,onOk:e.onSubmit},{footer:o(()=>[a(y,{key:"submit",type:"primary",loading:e.loading,onClick:e.onSubmit},{icon:o(()=>[a(g)]),default:o(()=>[f(" "+u(e.addEditType=="add"?e.$t("common.create"):e.$t("common.update")),1)]),_:1},8,["loading","onClick"]),a(y,{key:"back",onClick:e.onClose},{default:o(()=>[f(u(e.$t("common.cancel")),1)]),_:1},8,["onClick"])]),default:o(()=>[a(_,{layout:"vertical"},{default:o(()=>[a(s,{gutter:16},{default:o(()=>[a(c,{xs:24,sm:24,md:24,lg:24},{default:o(()=>[a(m,{label:e.$t("currency.name"),name:"name",help:e.rules.name?e.rules.name.message:null,validateStatus:e.rules.name?"error":null,class:"required"},{default:o(()=>[a(l,{value:e.formData.name,"onUpdate:value":n[0]||(n[0]=r=>e.formData.name=r),placeholder:e.$t("common.placeholder_default_text",[e.$t("currency.name")])},null,8,["value","placeholder"])]),_:1},8,["label","help","validateStatus"])]),_:1})]),_:1}),a(s,{gutter:16},{default:o(()=>[a(c,{xs:24,sm:24,md:24,lg:24},{default:o(()=>[a(m,{label:e.$t("currency.symbol"),name:"symbol",help:e.rules.symbol?e.rules.symbol.message:null,validateStatus:e.rules.symbol?"error":null,class:"required"},{default:o(()=>[a(l,{value:e.formData.symbol,"onUpdate:value":n[1]||(n[1]=r=>e.formData.symbol=r),placeholder:e.$t("common.placeholder_default_text",[e.$t("currency.symbol")])},null,8,["value","placeholder"])]),_:1},8,["label","help","validateStatus"])]),_:1})]),_:1}),a(s,{gutter:16},{default:o(()=>[a(c,{xs:24,sm:24,md:24,lg:24},{default:o(()=>[a(m,{label:e.$t("currency.position"),name:"position",help:e.rules.position?e.rules.position.message:null,validateStatus:e.rules.position?"error":null},{default:o(()=>[a(v,{value:e.formData.position,"onUpdate:value":n[2]||(n[2]=r=>e.formData.position=r)},{default:o(()=>[a(b,{value:"front"},{default:o(()=>[f(u(e.$t("currency.front"))+" ("+u(e.$t("currency.front_position_example"))+") ",1)]),_:1}),a(b,{value:"behind"},{default:o(()=>[f(u(e.$t("currency.behind"))+" ("+u(e.$t("currency.behind_position_example"))+") ",1)]),_:1})]),_:1},8,["value"])]),_:1},8,["label","help","validateStatus"])]),_:1})]),_:1}),a(s,{gutter:16},{default:o(()=>[a(c,{xs:24,sm:24,md:24,lg:24},{default:o(()=>[a(m,{label:e.$t("currency.code"),name:"code",help:e.rules.code?e.rules.code.message:null,validateStatus:e.rules.code?"error":null,class:"required"},{default:o(()=>[a(l,{value:e.formData.code,"onUpdate:value":n[3]||(n[3]=r=>e.formData.code=r),placeholder:e.$t("common.placeholder_default_text",[e.$t("currency.code")])},null,8,["value","placeholder"])]),_:1},8,["label","help","validateStatus"])]),_:1})]),_:1})]),_:1})]),_:1},8,["open","title","onOk"])}const H=h(P,[["render",X]]);export{H as A,G as f};
