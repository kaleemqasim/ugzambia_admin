import{A as j,f as G}from"./fields-BeiCv5b1.js";import{c as q}from"./crud-BXjQ0O-i.js";import{_ as Q,Q as W,az as J,aA as X,b as Y,r as Z,z as $,V as ee,a6 as ae,c as p,a,w as e,D as _,p as m,o as l,j as r,t as d,g as y,i as u,L as R,h as te,ay as ne,aB as oe,aC as le,B as se,a0 as re,q as de,aD as ie,f as me,aL as ue,aM as ce,aN as pe,G as _e,aG as fe}from"./app-OikDM5Kw.js";import{A as ge}from"./AdminPageHeader-MbAN4P4t.js";import{D as ye}from"./DateRangePicker-S2EeC5bP.js";import"./apiAdmin-yFrp6bZq.js";import"./UserInfo-4wSQ2hbz.js";import"./fields-DWYbqBqf.js";import"./SaveOutlined-BSR-wlKo.js";import"./StaffAddButton-CA3WeqKv.js";import"./fields-DfhbxYIm.js";import"./Upload-D5F1bEQ_.js";import"./AddButton-BQyn84QE.js";import"./AddEdit-DHyK7A_P.js";import"./SettingOutlined-DBG_v97O.js";import"./AddButton-D9RkJdxV.js";import"./AddEdit-DKTkvuxN.js";import"./UploadFile-DR1pWrT7.js";import"./DateTimePicker-CSM27X8x.js";import"./datatable-DjynKO_7.js";import"./filter-CQCFHrIe.js";import"./index-CaGusbUe.js";const be={components:{PlusOutlined:W,EditOutlined:J,DeleteOutlined:X,AddEdit:j,AdminPageHeader:ge,DateRangePicker:ye},setup(){const{url:t,addEditUrl:c,initData:A,columns:n,filters:v,preFetchData:O,getPreFetchData:w,hashableColumns:x}=G(),s=q(),{appSetting:E,permsArray:F,formatDate:P,selectedWarehouse:f,formatAmountCurrency:h}=Y(),C=Z({dates:[]});$(()=>{w(),s.crudUrl.value=c,s.langKey.value="expense",s.initData.value={...A},s.formData.value={...A},s.hashableColumns.value=[...x],i()});const i=()=>{s.tableUrl.value={url:t,filters:v,extraFilters:C},s.fetch({page:1})},k=ee(()=>{let g=0;return s.table.data.forEach(D=>{g+=D.amount}),{totalAmount:g}});return ae(f,(g,D)=>{i()}),{columns:n,appSetting:E,formatDate:P,...s,filters:v,extraFilters:C,preFetchData:O,reFetchDatatable:i,permsArray:F,formatAmountCurrency:h,totals:k}}},he={class:"table-responsive"};function Ce(t,c,A,n,v,O){const w=ne,x=m("router-link"),s=oe,E=le,F=m("AdminPageHeader"),P=m("PlusOutlined"),f=se,h=m("DeleteOutlined"),C=re,i=de,k=fe,g=ie,D=m("DateRangePicker"),S=me,I=m("admin-page-filters"),U=m("AddEdit"),N=m("EditOutlined"),T=ue,V=ce,z=pe,K=_e,H=m("admin-page-table-content");return l(),p(_,null,[a(F,null,{header:e(()=>[a(w,{title:t.$t("menu.expenses"),class:"p-0"},null,8,["title"])]),breadcrumb:e(()=>[a(E,{separator:"-",style:{"font-size":"12px"}},{default:e(()=>[a(s,null,{default:e(()=>[a(x,{to:{name:"admin.dashboard.index"}},{default:e(()=>[r(d(t.$t("menu.dashboard")),1)]),_:1})]),_:1}),a(s,null,{default:e(()=>[r(d(t.$t("menu.expense_manager")),1)]),_:1}),a(s,null,{default:e(()=>[r(d(t.$t("menu.expenses")),1)]),_:1})]),_:1})]),_:1}),a(I,null,{default:e(()=>[a(S,{gutter:[16,16]},{default:e(()=>[a(i,{xs:24,sm:24,md:12,lg:10,xl:10},{default:e(()=>[a(C,null,{default:e(()=>[n.permsArray.includes("expenses_create")||n.permsArray.includes("admin")?(l(),y(f,{key:0,type:"primary",onClick:t.addItem},{default:e(()=>[a(P),r(" "+d(t.$t("expense.add")),1)]),_:1},8,["onClick"])):u("",!0),t.table.selectedRowKeys.length>0&&(n.permsArray.includes("expenses_delete")||n.permsArray.includes("admin"))?(l(),y(f,{key:1,type:"primary",onClick:t.showSelectedDeleteConfirm,danger:""},{icon:e(()=>[a(h)]),default:e(()=>[r(" "+d(t.$t("common.delete")),1)]),_:1},8,["onClick"])):u("",!0)]),_:1})]),_:1}),a(i,{xs:24,sm:24,md:12,lg:14,xl:14},{default:e(()=>[a(S,{gutter:[16,16],justify:"end"},{default:e(()=>[a(i,{xs:24,sm:24,md:8,lg:6,xl:6},{default:e(()=>[a(g,{value:n.filters.expense_category_id,"onUpdate:value":c[0]||(c[0]=o=>n.filters.expense_category_id=o),"show-search":"",style:{width:"100%"},placeholder:t.$t("common.select_default_text",[t.$t("expense.expense_category")]),onChange:n.reFetchDatatable,allowClear:!0,optionFilterProp:"label"},{default:e(()=>[(l(!0),p(_,null,R(n.preFetchData.expenseCategories,o=>(l(),y(k,{key:o.xid,value:o.xid,label:o.name},{default:e(()=>[r(d(o.name),1)]),_:2},1032,["value","label"]))),128))]),_:1},8,["value","placeholder","onChange"])]),_:1}),a(i,{xs:24,sm:24,md:8,lg:6,xl:6},{default:e(()=>[a(g,{value:n.filters.user_id,"onUpdate:value":c[1]||(c[1]=o=>n.filters.user_id=o),"show-search":"",style:{width:"100%"},placeholder:t.$t("common.select_default_text",[t.$t("expense.user")]),onChange:n.reFetchDatatable,allowClear:!0,optionFilterProp:"label"},{default:e(()=>[(l(!0),p(_,null,R(n.preFetchData.staffMembers,o=>(l(),y(k,{key:o.xid,value:o.xid,label:o.name},{default:e(()=>[r(d(o.name),1)]),_:2},1032,["value","label"]))),128))]),_:1},8,["value","placeholder","onChange"])]),_:1}),a(i,{xs:24,sm:24,md:8,lg:8,xl:8},{default:e(()=>[a(D,{onDateTimeChanged:c[2]||(c[2]=o=>{n.extraFilters.dates=o,n.reFetchDatatable()})})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),a(H,null,{default:e(()=>[a(U,{addEditType:t.addEditType,visible:t.addEditVisible,url:t.addEditUrl,onAddEditSuccess:t.addEditSuccess,onClosed:t.onCloseAddEdit,formData:t.formData,data:t.viewData,pageTitle:t.pageTitle,successMessage:t.successMessage},null,8,["addEditType","visible","url","onAddEditSuccess","onClosed","formData","data","pageTitle","successMessage"]),a(S,{class:"mt-20"},{default:e(()=>[a(i,{span:24},{default:e(()=>[te("div",he,[a(K,{"row-selection":{selectedRowKeys:t.table.selectedRowKeys,onChange:t.onRowSelectChange,getCheckboxProps:o=>({disabled:!1,name:o.xid})},columns:n.columns,"row-key":o=>o.xid,"data-source":t.table.data,pagination:t.table.pagination,loading:t.table.loading,onChange:t.handleTableChange,bordered:"",size:"middle"},{bodyCell:e(({column:o,text:L,record:b})=>{var B;return[o.dataIndex==="expense_category_id"?(l(),p(_,{key:0},[r(d(b.expense_category.name),1)],64)):u("",!0),o.dataIndex==="user_id"?(l(),p(_,{key:1},[r(d((B=b.user)==null?void 0:B.name),1)],64)):u("",!0),o.dataIndex==="amount"?(l(),p(_,{key:2},[r(d(n.formatAmountCurrency(L)),1)],64)):u("",!0),o.dataIndex==="date"?(l(),p(_,{key:3},[r(d(n.formatDate(b.date)),1)],64)):u("",!0),o.dataIndex==="action"?(l(),p(_,{key:4},[n.permsArray.includes("expenses_edit")||n.permsArray.includes("admin")?(l(),y(f,{key:0,type:"primary",onClick:M=>t.editItem(b),style:{"margin-left":"4px"}},{icon:e(()=>[a(N)]),_:2},1032,["onClick"])):u("",!0),n.permsArray.includes("expenses_delete")||n.permsArray.includes("admin")?(l(),y(f,{key:1,type:"primary",onClick:M=>t.showDeleteConfirm(b.xid),style:{"margin-left":"4px"}},{icon:e(()=>[a(h)]),_:2},1032,["onClick"])):u("",!0)],64)):u("",!0)]}),summary:e(()=>[a(z,null,{default:e(()=>[a(T,{"col-span":1}),a(T,{"col-span":1},{default:e(()=>[a(V,{strong:""},{default:e(()=>[r(d(t.$t("common.total")),1)]),_:1})]),_:1}),a(T,{"col-span":1},{default:e(()=>[a(V,{strong:""},{default:e(()=>[r(d(n.formatAmountCurrency(n.totals.totalAmount)),1)]),_:1})]),_:1})]),_:1})]),_:1},8,["row-selection","columns","row-key","data-source","pagination","loading","onChange"])])]),_:1})]),_:1})]),_:1})],64)}const Me=Q(be,[["render",Ce]]);export{Me as default};
