import{_ as H,W as U,b as F,e as I,g as L,f as T,u as q,cj as G,E as J,a6 as Q,r as m,o as i,c as w,a as t,w as e,G as S,i as v,k as x,l as n,t as r,j as y,M as X,ay as Y,aB as Z,aC as W,q as R,h as ee,aO as te,aM as ae,aP as re,an as oe,D as ne,ao as le,bx as se}from"./app-DvNATx7Y.js";import{P as ue}from"./ProductSearchInput-SwnhyVB8.js";import{A as _e}from"./AdminPageHeader-BPh6CuL6.js";import{E as me}from"./ExportTable-B1ud1mhQ.js";import{D as de}from"./DateRangePicker-B4uYtZRt.js";import{f as N}from"./filter-BEo08sjD.js";import{B as ie}from"./BarChartOutlined-Wd9sIE4D.js";import{U as pe}from"./UnorderedListOutlined-BOfK_ARM.js";import{S as ce}from"./ShoppingCartOutlined-BY_eTBwN.js";import"./index-CvRpe2mf.js";import"./PrinterOutlined-gqDJK9rB.js";import"./fields-CGH9JKlQ.js";const fe={components:{BarChartOutlined:ie,UnorderedListOutlined:pe,ShoppingCartOutlined:ce,ClockCircleOutlined:U,ProductSearchInput:ue,AdminPageHeader:_e,ExprotTable:me,DateRangePicker:de},setup(){const{permsArray:a,selectedWarehouse:f,formatAmountCurrency:E,formatDate:o,willSubscriptionModuleVisible:B}=F(),O=I(),p=L({dates:[],active_report_type:"daily_income"}),g=T([]),C=q(),b=T("by_order"),k=T([]);G(()=>{(!(a.value.includes("products_view")&&a.value.includes("purchases_view")&&a.value.includes("sales_view")&&a.value.includes("purchase_returns_view")&&a.value.includes("sales_returns_view")||a.value.includes("admin"))||!B("reports"))&&O.push("admin.dashboard.index")}),J(()=>{h(p)});const h=u=>{axiosAdmin.post("reports/profit-loss",u).then(d=>{g.value=d.data.results,k.value=d.data.dates;var _="profit_loss_reports",D=C.state.auth.allExportData,A=N(D,c=>c.export_type!=_),l=N(A,c=>c.export_type!="profit_loss_reports_by_dates");C.commit("auth/updatAllExportData",[...l,{export_type:_,data:[d.data.results],url:"reports/profit-loss"},{export_type:"profit_loss_reports_by_dates",data:d.data.dates,url:"reports/profit-loss"}])})};return Q(p,(u,d)=>{h(u)}),{permsArray:a,formatAmountCurrency:E,formatDate:o,filters:p,reportData:g,dateWiseReportResults:k,selectedTab:b}}},be={key:0,id:"profit-loss-reports-by-dates-table"};function ye(a,f,E,o,B,O){const p=m("ExprotTable"),g=Y,C=m("router-link"),b=Z,k=W,h=m("AdminPageHeader"),u=R,d=m("DateRangePicker"),_=ee,D=m("admin-page-filters"),A=m("ShoppingCartOutlined"),l=te,c=ae,P=re,$=oe,V=m("ClockCircleOutlined"),M=ne,z=le,K=m("admin-page-table-content");return i(),w(S,null,[t(h,null,{header:e(()=>[t(g,{title:a.$t("menu.profit_loss"),class:"p-0"},{extra:e(()=>[o.selectedTab=="by_order"?(i(),v(p,{key:0,exportType:"profit_loss_reports",tableName:"profit-loss-reports-table",title:`${a.$t("menu.profit_loss")} ${a.$t("menu.reports")}`},null,8,["title"])):x("",!0),o.selectedTab=="by_dates"&&o.dateWiseReportResults.length>0?(i(),v(p,{key:1,exportType:"profit_loss_reports_by_dates",tableName:"profit-loss-reports-by-dates-table",title:`${a.$t("menu.profit_loss")} ${a.$t("menu.reports")}`},null,8,["title"])):x("",!0)]),_:1},8,["title"])]),breadcrumb:e(()=>[t(k,{separator:"-",style:{"font-size":"12px"}},{default:e(()=>[t(b,null,{default:e(()=>[t(C,{to:{name:"admin.dashboard.index"}},{default:e(()=>[n(r(a.$t("menu.dashboard")),1)]),_:1},8,["to"])]),_:1}),t(b,null,{default:e(()=>[n(r(a.$t("menu.reports")),1)]),_:1}),t(b,null,{default:e(()=>[n(r(a.$t("menu.profit_loss")),1)]),_:1})]),_:1})]),_:1}),t(D,null,{default:e(()=>[t(_,{gutter:[16,16]},{default:e(()=>[t(u,{xs:24,sm:24,md:12,lg:10,xl:10}),t(u,{xs:24,sm:24,md:12,lg:14,xl:14},{default:e(()=>[t(_,{gutter:[16,16],justify:"end"},{default:e(()=>[t(u,{xs:24,sm:24,md:12,lg:8,xl:8},{default:e(()=>[t(d,{onDateTimeChanged:f[0]||(f[0]=s=>{o.filters.dates=s})})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(K,null,{default:e(()=>[t(z,{activeKey:o.selectedTab,"onUpdate:activeKey":f[1]||(f[1]=s=>o.selectedTab=s)},{default:e(()=>[t($,{key:"by_order"},{tab:e(()=>[t(A),n(" "+r(a.$t("report.by_order")),1)]),default:e(()=>[t(_,{id:"profit-loss-reports-table"},{default:e(()=>[t(u,{span:24,class:"mt-10"},{default:e(()=>[t(P,{title:a.$t("common.profit_reports_by_orders"),column:1,bordered:"",size:"middle"},{default:e(()=>[t(l,null,{label:e(()=>[y("strong",null,r(a.$t("common.particulars")),1)]),default:e(()=>[y("strong",null,r(a.$t("common.amount")),1)]),_:1}),t(l,null,{label:e(()=>[n(r(a.$t("menu.sales"))+" (+) ",1)]),default:e(()=>[n(" "+r(o.formatAmountCurrency(o.reportData.sales)),1)]),_:1}),t(l,null,{label:e(()=>[n(r(a.$t("menu.purchases"))+" (-) ",1)]),default:e(()=>[n(" "+r(o.formatAmountCurrency(o.reportData.purchases)),1)]),_:1}),t(l,null,{label:e(()=>[n(r(a.$t("menu.purchase_returns"))+" (+) ",1)]),default:e(()=>[n(" "+r(o.formatAmountCurrency(o.reportData.purchase_returns)),1)]),_:1}),t(l,null,{label:e(()=>[n(r(a.$t("menu.sales_returns"))+" (-) ",1)]),default:e(()=>[n(" "+r(o.formatAmountCurrency(o.reportData.sales_returns)),1)]),_:1}),t(l,null,{label:e(()=>[n(r(a.$t("stock_transfer.stock_transfer_transfered"))+" (+) ",1)]),default:e(()=>[n(" "+r(o.formatAmountCurrency(o.reportData.stock_transfer_transfered)),1)]),_:1}),t(l,null,{label:e(()=>[n(r(a.$t("stock_transfer.stock_transfer_received"))+" (-) ",1)]),default:e(()=>[n(" "+r(o.formatAmountCurrency(o.reportData.stock_transfer_received)),1)]),_:1}),t(l,null,{label:e(()=>[n(r(a.$t("menu.expenses"))+" (-) ",1)]),default:e(()=>[n(" "+r(o.formatAmountCurrency(o.reportData.expenses)),1)]),_:1}),t(l,{label:a.$t("common.profit")},{default:e(()=>[t(c,{type:o.reportData.profit>0?"success":"danger",strong:""},{default:e(()=>[n(r(o.formatAmountCurrency(o.reportData.profit)),1)]),_:1},8,["type"])]),_:1},8,["label"])]),_:1},8,["title"])]),_:1})]),_:1})]),_:1}),t($,{key:"by_dates"},{tab:e(()=>[t(V),n(" "+r(a.$t("report.by_dates")),1)]),default:e(()=>[o.dateWiseReportResults.length>0?(i(),w("div",be,[(i(!0),w(S,null,X(o.dateWiseReportResults,(s,j,ge)=>(i(),v(_,{key:s.date},{default:e(()=>[t(u,{span:24,class:se(["mt-10",`tbl_result_${j}`])},{default:e(()=>[t(P,{style:{"margin-top":"10px"},column:1,bordered:"",size:"middle"},{default:e(()=>[t(l,null,{label:e(()=>[y("strong",null,r(o.formatDate(s.date)),1)]),_:2},1024),t(l,null,{label:e(()=>[y("strong",null,r(a.$t("common.particulars")),1)]),default:e(()=>[y("strong",null,r(a.$t("common.amount")),1)]),_:1}),t(l,null,{label:e(()=>[n(r(a.$t("menu.sales"))+" (+) ",1)]),default:e(()=>[n(" "+r(o.formatAmountCurrency(s.result.sales)),1)]),_:2},1024),t(l,null,{label:e(()=>[n(r(a.$t("menu.purchases"))+" (-) ",1)]),default:e(()=>[n(" "+r(o.formatAmountCurrency(s.result.purchases)),1)]),_:2},1024),t(l,null,{label:e(()=>[n(r(a.$t("menu.purchase_returns"))+" (+) ",1)]),default:e(()=>[n(" "+r(o.formatAmountCurrency(s.result.purchase_returns)),1)]),_:2},1024),t(l,null,{label:e(()=>[n(r(a.$t("menu.sales_returns"))+" (-) ",1)]),default:e(()=>[n(" "+r(o.formatAmountCurrency(s.result.sales_returns)),1)]),_:2},1024),t(l,null,{label:e(()=>[n(r(a.$t("stock_transfer.stock_transfer_transfered"))+" (+) ",1)]),default:e(()=>[n(" "+r(o.formatAmountCurrency(s.result.stock_transfer_transfered)),1)]),_:2},1024),t(l,null,{label:e(()=>[n(r(a.$t("stock_transfer.stock_transfer_received"))+" (-) ",1)]),default:e(()=>[n(" "+r(o.formatAmountCurrency(s.result.stock_transfer_received)),1)]),_:2},1024),t(l,null,{label:e(()=>[n(r(a.$t("menu.expenses"))+" (-) ",1)]),default:e(()=>[n(" "+r(o.formatAmountCurrency(s.result.expenses)),1)]),_:2},1024),t(l,{label:a.$t("common.profit")},{default:e(()=>[t(c,{type:s.result.profit>0?"success":"danger",strong:""},{default:e(()=>[n(r(o.formatAmountCurrency(s.result.profit)),1)]),_:2},1032,["type"])]),_:2},1032,["label"])]),_:2},1024)]),_:2},1032,["class"])]),_:2},1024))),128))])):(i(),v(_,{key:1},{default:e(()=>[t(u,{span:24,class:"mt-10"},{default:e(()=>[t(M,{title:a.$t("report.select_date"),"sub-title":a.$t("report.select_date_message")},null,8,["title","sub-title"])]),_:1})]),_:1}))]),_:1})]),_:1},8,["activeKey"])]),_:1})],64)}const $e=H(fe,[["render",ye]]);export{$e as default};
