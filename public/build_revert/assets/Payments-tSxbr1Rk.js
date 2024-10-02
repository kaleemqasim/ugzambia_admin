import{d as v}from"./datatable-DjynKO_7.js";import{_ as T,d as A,b as M,z as N,a6 as w,V as U,o as r,g as x,w as t,a as o,h as B,c as y,j as _,t as u,D as c,i as p,p as D,aL as E,aM as S,E as z,aN as F,G as P,q as j,f as q}from"./app-OikDM5Kw.js";import{U as G}from"./UserInfo-4wSQ2hbz.js";import{f as H}from"./fields-Bh473hAH.js";const L=A({props:{user_id:null,paymentMode:null,dates:{default:[],type:null}},components:{UserInfo:G},setup(e){const{paymentsColumns:f,paymentsHashableColumns:b}=H(),{formatDate:g,formatAmountCurrency:h,selectedWarehouse:C}=M(),n=v();N(()=>{l(e)});const l=a=>{const s={};a.user_id&&a.user_id!=null&&(s.user_id=a.user_id),n.tableUrl.value={url:"payments?fields=id,xid,date,payment_type,amount,payment_number,user_id,x_user_id,user{id,xid,name,profile_image,profile_image_url,user_type},payment_mode_id,x_payment_mode_id,paymentMode{id,xid,name,mode_type}",filters:s,extraFilters:{dates:a.dates,payment_mode:a.paymentMode}},n.hashable.value=[...b],n.table.sorter={field:"date",order:"desc"},n.exportDetails.value={allowExport:!0,exportType:"payment_reports"},n.fetch({page:1})};w(e,(a,s)=>{l(a)}),w(C,(a,s)=>{l(e)});const i=U(()=>{let a=0;return n.table.data.forEach(s=>{a+=s.amount}),{totalAmount:a}});return{paymentsColumns:f,...n,formatDate:g,formatAmountCurrency:h,totals:i}}}),R={class:"table-responsive"};function W(e,f,b,g,h,C){const n=D("UserInfo"),l=E,i=S,a=z,s=F,V=P,I=j,$=q;return r(),x($,null,{default:t(()=>[o(I,{span:24},{default:t(()=>[B("div",R,[o(V,{columns:e.paymentsColumns,"row-key":m=>m.xid,"data-source":e.table.data,pagination:e.table.pagination,loading:e.table.loading,onChange:e.handleTableChange,id:"payment-reports-table",bordered:"",size:"middle"},{bodyCell:t(({column:m,record:d})=>{var k;return[m.dataIndex==="date"?(r(),y(c,{key:0},[_(u(e.formatDate(d.date)),1)],64)):p("",!0),m.dataIndex==="payment_type"?(r(),y(c,{key:1},[_(u(d.payment_type=="in"?e.$t("menu.payment_in"):e.$t("menu.payment_out")),1)],64)):p("",!0),m.dataIndex==="mode_type"?(r(),y(c,{key:2},[_(u(d.payment_mode&&d.payment_mode.name?(k=d.payment_mode)==null?void 0:k.name:"-"),1)],64)):p("",!0),m.dataIndex==="user_id"?(r(),x(n,{key:3,user:d.user},null,8,["user"])):p("",!0),m.dataIndex==="amount"?(r(),y(c,{key:4},[_(u(e.formatAmountCurrency(d.amount)),1)],64)):p("",!0)]}),summary:t(()=>[o(s,null,{default:t(()=>[o(l,{"col-span":4}),o(l,{"col-span":1},{default:t(()=>[o(i,{strong:""},{default:t(()=>[_(u(e.$t("common.total")),1)]),_:1})]),_:1}),o(l,{"col-span":1},{default:t(()=>[o(i,{strong:""},{default:t(()=>[o(a,null,{default:t(()=>[_(u(e.formatAmountCurrency(e.totals.totalAmount)),1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["columns","row-key","data-source","pagination","loading","onChange"])])]),_:1})]),_:1})}const X=T(L,[["render",W]]);export{X as P};
