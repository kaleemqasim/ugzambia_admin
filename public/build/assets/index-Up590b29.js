import{_ as D,b as O,f as w,e as A,g as $,cg as C,r as t,o as R,c as W,a as e,w as n,G as H,l as _,t as l,j as u,ay as K,aB as M,aC as N,q as V,h as j,an as q,ao as z}from"./app-yQu0_bFn.js";import{D as E}from"./DateRangePicker-BSSHPv4p.js";import{A as F}from"./AdminPageHeader-BhKFwWP2.js";import{P as G}from"./Payments-C2a6Ivg3.js";import{W as S}from"./WalletOutlined-CKLkRdFW.js";import{B as U}from"./BankOutlined-B5Sq7VZ0.js";import"./index-CNNFGL0_.js";import"./datatable-BJxAJAu3.js";import"./filter-BXt71jrw.js";import"./UserInfo-CvIcTtnK.js";import"./fields-CJEdFbfP.js";const I={components:{AdminPageHeader:F,Payments:G,DateRangePicker:E,WalletOutlined:S,BankOutlined:U},setup(){const{permsArray:a}=O(),s=w("cash"),m=A(),o=$({dates:[]});return C(()=>{a.value.includes("customers_view")||a.value.includes("suppliers_view")||a.value.includes("admin")||m.push("admin.dashboard.index")}),{activeType:s,filters:o}}};function J(a,s,m,o,L,Q){const f=K,g=t("router-link"),c=M,b=N,y=t("AdminPageHeader"),k=t("DateRangePicker"),i=V,p=j,v=t("admin-page-filters"),h=t("WalletOutlined"),d=q,B=t("BankOutlined"),P=z,T=t("Payments"),x=t("admin-page-table-content");return R(),W(H,null,[e(y,null,{header:n(()=>[e(f,{title:a.$t("menu.cash_bank"),class:"p-0"},null,8,["title"])]),breadcrumb:n(()=>[e(b,{separator:"-",style:{"font-size":"12px"}},{default:n(()=>[e(c,null,{default:n(()=>[e(g,{to:{name:"admin.dashboard.index"}},{default:n(()=>[_(l(a.$t("menu.dashboard")),1)]),_:1},8,["to"])]),_:1}),e(c,null,{default:n(()=>[_(l(a.$t("menu.cash_bank")),1)]),_:1})]),_:1})]),_:1}),e(v,null,{default:n(()=>[e(p,{gutter:[16,16],justify:"end"},{default:n(()=>[e(i,{xs:24,sm:24,md:12,lg:6,xl:4},{default:n(()=>[e(k,{onDateTimeChanged:s[0]||(s[0]=r=>{o.filters.dates=r})})]),_:1})]),_:1})]),_:1}),e(x,null,{default:n(()=>[e(p,null,{default:n(()=>[e(i,{span:24},{default:n(()=>[e(P,{activeKey:o.activeType,"onUpdate:activeKey":s[1]||(s[1]=r=>o.activeType=r)},{default:n(()=>[e(d,{key:"cash"},{tab:n(()=>[u("span",null,[e(h),_(" "+l(a.$t("payments.cash")),1)])]),_:1}),e(d,{key:"bank"},{tab:n(()=>[u("span",null,[e(B),_(" "+l(a.$t("payments.bank")),1)])]),_:1})]),_:1},8,["activeKey"])]),_:1})]),_:1}),e(T,{dates:o.filters.dates,paymentMode:o.activeType},null,8,["dates","paymentMode"])]),_:1})],64)}const re=D(I,[["render",J]]);export{re as default};
