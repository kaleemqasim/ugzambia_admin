import{A as H,f as I}from"./fields-DWYbqBqf.js";import{c as L}from"./crud-BXjQ0O-i.js";import{_ as $,Q as j,az as F,aA as G,b as q,z as Q,c as y,a,w as n,D as b,p as s,o as d,j as r,t as u,g as c,i as m,L as J,h as W,ay as X,aB as Y,aC as Z,B as x,a0 as ee,q as ae,aD as ne,aE as te,aF as oe,f as le,G as se,aG as de}from"./app-OikDM5Kw.js";import{A as ie}from"./AdminPageHeader-MbAN4P4t.js";import"./apiAdmin-yFrp6bZq.js";import"./SaveOutlined-BSR-wlKo.js";import"./datatable-DjynKO_7.js";import"./filter-CQCFHrIe.js";import"./index-CaGusbUe.js";const re={components:{PlusOutlined:j,EditOutlined:F,DeleteOutlined:G,AddEdit:H,AdminPageHeader:ie},setup(){const{addEditUrl:e,initData:i,columns:h,filterableColumns:t}=I(),l=L(),{permsArray:C}=q();return Q(()=>{l.tableUrl.value={url:"expense-categories?fields=id,xid,name,description"},l.table.filterableColumns=t,l.fetch({page:1}),l.crudUrl.value=e,l.langKey.value="expense_category",l.initData.value={...i},l.formData.value={...i}}),{columns:h,...l,filterableColumns:t,permsArray:C}}},ue={class:"table-responsive"};function ce(e,i,h,t,l,C){const v=X,E=s("router-link"),g=Y,w=Z,D=s("AdminPageHeader"),S=s("PlusOutlined"),p=x,k=s("DeleteOutlined"),O=ee,_=ae,T=de,B=ne,P=te,U=oe,f=le,V=s("admin-page-filters"),z=s("AddEdit"),K=s("EditOutlined"),M=se,N=s("admin-page-table-content");return d(),y(b,null,[a(D,null,{header:n(()=>[a(v,{title:e.$t("menu.expense_categories"),class:"p-0"},null,8,["title"])]),breadcrumb:n(()=>[a(w,{separator:"-",style:{"font-size":"12px"}},{default:n(()=>[a(g,null,{default:n(()=>[a(E,{to:{name:"admin.dashboard.index"}},{default:n(()=>[r(u(e.$t("menu.dashboard")),1)]),_:1})]),_:1}),a(g,null,{default:n(()=>[r(u(e.$t("menu.expense_manager")),1)]),_:1}),a(g,null,{default:n(()=>[r(u(e.$t("menu.expense_categories")),1)]),_:1})]),_:1})]),_:1}),a(V,null,{default:n(()=>[a(f,{gutter:[16,16]},{default:n(()=>[a(_,{xs:24,sm:24,md:12,lg:10,xl:10},{default:n(()=>[a(O,null,{default:n(()=>[t.permsArray.includes("expense_categories_create")||t.permsArray.includes("admin")?(d(),c(p,{key:0,type:"primary",onClick:e.addItem},{default:n(()=>[a(S),r(" "+u(e.$t("expense_category.add")),1)]),_:1},8,["onClick"])):m("",!0),e.table.selectedRowKeys.length>0&&(t.permsArray.includes("expense_categories_delete")||t.permsArray.includes("admin"))?(d(),c(p,{key:1,type:"primary",onClick:e.showSelectedDeleteConfirm,danger:""},{icon:n(()=>[a(k)]),default:n(()=>[r(" "+u(e.$t("common.delete")),1)]),_:1},8,["onClick"])):m("",!0)]),_:1})]),_:1}),a(_,{xs:24,sm:24,md:12,lg:14,xl:14},{default:n(()=>[a(f,{gutter:[16,16],justify:"end"},{default:n(()=>[a(_,{xs:24,sm:24,md:12,lg:12,xl:10},{default:n(()=>[a(U,{compact:""},{default:n(()=>[a(B,{style:{width:"25%"},value:e.table.searchColumn,"onUpdate:value":i[0]||(i[0]=o=>e.table.searchColumn=o),placeholder:e.$t("common.select_default_text",[""])},{default:n(()=>[(d(!0),y(b,null,J(t.filterableColumns,o=>(d(),c(T,{key:o.key},{default:n(()=>[r(u(o.value),1)]),_:2},1024))),128))]),_:1},8,["value","placeholder"]),a(P,{style:{width:"75%"},value:e.table.searchString,"onUpdate:value":i[1]||(i[1]=o=>e.table.searchString=o),"show-search":"",onChange:e.onTableSearch,onSearch:e.onTableSearch,loading:e.table.filterLoading},null,8,["value","onChange","onSearch","loading"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),a(N,null,{default:n(()=>[a(z,{addEditType:e.addEditType,visible:e.addEditVisible,url:e.addEditUrl,onAddEditSuccess:e.addEditSuccess,onClosed:e.onCloseAddEdit,formData:e.formData,data:e.viewData,pageTitle:e.pageTitle,successMessage:e.successMessage},null,8,["addEditType","visible","url","onAddEditSuccess","onClosed","formData","data","pageTitle","successMessage"]),a(f,null,{default:n(()=>[a(_,{span:24},{default:n(()=>[W("div",ue,[a(M,{"row-selection":{selectedRowKeys:e.table.selectedRowKeys,onChange:e.onRowSelectChange,getCheckboxProps:o=>({disabled:!1,name:o.xid})},columns:t.columns,"row-key":o=>o.xid,"data-source":e.table.data,pagination:e.table.pagination,loading:e.table.loading,onChange:e.handleTableChange,bordered:"",size:"middle"},{bodyCell:n(({column:o,record:A})=>[o.dataIndex==="action"?(d(),y(b,{key:0},[t.permsArray.includes("expense_categories_edit")||t.permsArray.includes("admin")?(d(),c(p,{key:0,type:"primary",onClick:R=>e.editItem(A),style:{"margin-left":"4px"}},{icon:n(()=>[a(K)]),_:2},1032,["onClick"])):m("",!0),t.permsArray.includes("expense_categories_delete")||t.permsArray.includes("admin")?(d(),c(p,{key:1,type:"primary",onClick:R=>e.showDeleteConfirm(A.xid),style:{"margin-left":"4px"}},{icon:n(()=>[a(k)]),_:2},1032,["onClick"])):m("",!0)],64)):m("",!0)]),_:1},8,["row-selection","columns","row-key","data-source","pagination","loading","onChange"])])]),_:1})]),_:1})]),_:1})],64)}const ke=$(re,[["render",ce]]);export{ke as default};
