import{_ as z,b as L,r as C,cg as U,z as j,V as G,a6 as $,c as p,a as e,w as a,D as c,k as q,p as f,o as d,j as l,t as s,L as F,h as O,i as D,ay as W,aB as J,aC as K,q as Q,aD as X,f as Y,aL as Z,aM as ee,aN as ae,G as te,g as R,aG as ne}from"./app-OikDM5Kw.js";import{P as oe}from"./ProductSearchInput-BNlJXU7L.js";import{d as le}from"./datatable-DjynKO_7.js";import{E as se,g as re}from"./ExportTable-CioT-h8X.js";import{A as de}from"./AdminPageHeader-MbAN4P4t.js";import{D as ue}from"./DateRangePicker-S2EeC5bP.js";import"./filter-CQCFHrIe.js";import"./PrinterOutlined-DKHuCtDd.js";import"./fields-Bh473hAH.js";import"./index-CaGusbUe.js";const me={components:{ProductSearchInput:oe,AdminPageHeader:de,ExprotTable:se,DateRangePicker:ue},setup(){const{permsArray:n,selectedWarehouse:u,formatAmountCurrency:B,formatDate:o,willSubscriptionModuleVisible:E}=L(),{url:S,expenseColumns:T,expenseHashableColumns:P}=re(),A=C(void 0),g=q(),m=le(),v=C({expense_category_id:void 0,user_id:void 0}),r=C([]),b=C([]),x=C({dates:[]});U(()=>{(!(n.value.includes("expenses_view")||n.value.includes("admin"))||!E("reports"))&&g.push("admin.dashboard.index")}),j(()=>{const _=axiosAdmin.get("expense-categories?limit=10000"),i=axiosAdmin.get("users?limit=10000");Promise.all([_,i]).then(([w,V])=>{r.value=w.data,b.value=V.data}),h()});const h=()=>{m.tableUrl.value={url:S,filters:v,extraFilters:x},m.hashable.value=[...P],m.exportDetails.value={allowExport:!0,exportType:"expense_reports"},m.fetch({page:1})},y=G(()=>{let _=0;return m.table.data.forEach(i=>{_+=i.amount}),{totalAmount:_}});return $(u,(_,i)=>{h()}),{expenseColumns:T,...m,searchProductId:A,getTableData:h,permsArray:n,filters:v,extraFilters:x,expenseCategories:r,staffMembers:b,formatAmountCurrency:B,formatDate:o,totals:y}}},ie={class:"table-responsive"};function _e(n,u,B,o,E,S){const T=f("ExprotTable"),P=W,A=f("router-link"),g=J,m=K,v=f("AdminPageHeader"),r=Q,b=ne,x=X,h=f("DateRangePicker"),y=Y,_=f("admin-page-filters"),i=Z,w=ee,V=ae,H=te,M=f("admin-page-table-content");return d(),p(c,null,[e(v,null,{header:a(()=>[e(P,{title:n.$t("menu.expense_reports"),class:"p-0"},{extra:a(()=>[e(T,{exportType:"expense_reports",tableName:"expense-reports-table",title:`${n.$t("menu.expenses")} ${n.$t("menu.reports")}`},null,8,["title"])]),_:1},8,["title"])]),breadcrumb:a(()=>[e(m,{separator:"-",style:{"font-size":"12px"}},{default:a(()=>[e(g,null,{default:a(()=>[e(A,{to:{name:"admin.dashboard.index"}},{default:a(()=>[l(s(n.$t("menu.dashboard")),1)]),_:1})]),_:1}),e(g,null,{default:a(()=>[l(s(n.$t("menu.reports")),1)]),_:1}),e(g,null,{default:a(()=>[l(s(n.$t("menu.expense_reports")),1)]),_:1})]),_:1})]),_:1}),e(_,null,{default:a(()=>[e(y,{gutter:[16,16]},{default:a(()=>[e(r,{xs:24,sm:24,md:12,lg:10,xl:10}),e(r,{xs:24,sm:24,md:12,lg:14,xl:14},{default:a(()=>[e(y,{gutter:[16,16],justify:"end"},{default:a(()=>[e(r,{xs:24,sm:24,md:8,lg:6,xl:6},{default:a(()=>[e(x,{value:o.filters.expense_category_id,"onUpdate:value":u[0]||(u[0]=t=>o.filters.expense_category_id=t),"show-search":"",style:{width:"100%"},placeholder:n.$t("common.select_default_text",[n.$t("expense.expense_category")]),onChange:o.getTableData,allowClear:!0,optionFilterProp:"label"},{default:a(()=>[(d(!0),p(c,null,F(o.expenseCategories,t=>(d(),R(b,{key:t.xid,value:t.xid,label:t.name},{default:a(()=>[l(s(t.name),1)]),_:2},1032,["value","label"]))),128))]),_:1},8,["value","placeholder","onChange"])]),_:1}),e(r,{xs:24,sm:24,md:8,lg:6,xl:6},{default:a(()=>[e(x,{value:o.filters.user_id,"onUpdate:value":u[1]||(u[1]=t=>o.filters.user_id=t),"show-search":"",style:{width:"100%"},placeholder:n.$t("common.select_default_text",[n.$t("expense.user")]),onChange:o.getTableData,allowClear:!0,optionFilterProp:"label"},{default:a(()=>[(d(!0),p(c,null,F(o.staffMembers,t=>(d(),R(b,{key:t.xid,value:t.xid,label:t.name},{default:a(()=>[l(s(t.name),1)]),_:2},1032,["value","label"]))),128))]),_:1},8,["value","placeholder","onChange"])]),_:1}),e(r,{xs:24,sm:24,md:8,lg:8,xl:8},{default:a(()=>[e(h,{onDateTimeChanged:u[2]||(u[2]=t=>{o.extraFilters.dates=t,o.getTableData()})})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(M,null,{default:a(()=>[e(y,null,{default:a(()=>[e(r,{span:24},{default:a(()=>[O("div",ie,[e(H,{columns:o.expenseColumns,"row-key":t=>t.xid,"data-source":n.table.data,pagination:n.table.pagination,loading:n.table.loading,onChange:n.handleTableChange,id:"expense-reports-table",bordered:"",size:"middle"},{bodyCell:a(({column:t,record:k})=>{var I,N;return[t.dataIndex==="expense_category_id"?(d(),p(c,{key:0},[l(s((I=k.expense_category)==null?void 0:I.name),1)],64)):D("",!0),t.dataIndex==="amount"?(d(),p(c,{key:1},[l(s(o.formatAmountCurrency(k.amount)),1)],64)):D("",!0),t.dataIndex==="date"?(d(),p(c,{key:2},[l(s(o.formatDate(k.date)),1)],64)):D("",!0),t.dataIndex==="user_id"?(d(),p(c,{key:3},[l(s((N=k.user)==null?void 0:N.name),1)],64)):D("",!0)]}),summary:a(()=>[e(V,null,{default:a(()=>[e(i,{"col-span":2}),e(i,{"col-span":1},{default:a(()=>[e(w,{strong:""},{default:a(()=>[l(s(n.$t("common.total")),1)]),_:1})]),_:1}),e(i,{"col-span":1},{default:a(()=>[e(w,{strong:""},{default:a(()=>[l(s(o.formatAmountCurrency(o.totals.totalAmount)),1)]),_:1})]),_:1})]),_:1})]),_:1},8,["columns","row-key","data-source","pagination","loading","onChange"])])]),_:1})]),_:1})]),_:1})],64)}const we=z(me,[["render",_e]]);export{we as default};
