import{c as N}from"./crud-BXjQ0O-i.js";import{_ as R,Q as L,az as j,aA as F,aH as G,b as q,Y as Q,z as Y,c as p,a,w as t,D as f,p as d,f as J,o,j as i,t as r,g as y,i as c,L as w,h as W,ay as X,aB as Z,aC as ee,q as ae,B as te,a0 as ne,aD as le,aE as oe,aF as se,G as de,aG as ie}from"./app-OikDM5Kw.js";import{A as re,f as me}from"./AddEdit-F27Qhahl.js";import{S as ue}from"./SettingSidebar-D526a_C1.js";import{A as pe}from"./AdminPageHeader-MbAN4P4t.js";import"./datatable-DjynKO_7.js";import"./filter-CQCFHrIe.js";import"./apiAdmin-yFrp6bZq.js";import"./FormItemHeading-C_zGUfEl.js";import"./SaveOutlined-BSR-wlKo.js";import"./sumBy-DFoExBWY.js";import"./some-BxTyXH2q.js";import"./TranslationOutlined-CEPKXLet.js";import"./UserOutlined-6nf3lw0h.js";import"./ShoppingCartOutlined-BldUIlX-.js";import"./ScheduleOutlined-Dj7wWgnj.js";import"./AppstoreAddOutlined-BIf-P8Dc.js";import"./MailOutlined-DcsIPfhp.js";import"./FormOutlined-VUqFOjZT.js";import"./index-CaGusbUe.js";const ce={components:{PlusOutlined:L,EditOutlined:j,DeleteOutlined:F,AddEdit:re,SettingSidebar:ue,AdminPageHeader:pe,ExclamationCircleOutlined:G},setup(){const{permsArray:e}=q(),{url:_,addEditUrl:S,initData:l,columns:v,filterableColumns:k,hashableColumns:A}=me(),s=N();Q(),Y(()=>{s.crudUrl.value=S,s.langKey.value="tax",s.initData.value={...l},s.formData.value={...l},s.hashableColumns.value=[...A],s.table.filterableColumns=k,b()});const b=()=>{s.tableUrl.value={url:_},s.fetch({page:1})};return{permsArray:e,columns:v,...s,filterableColumns:k}}},_e={class:"table-responsive"},ge={key:0},fe={key:1};function ye(e,_,S,l,v,k){const A=X,s=d("router-link"),b=Z,D=ee,x=d("AdminPageHeader"),O=d("SettingSidebar"),m=ae,T=d("PlusOutlined"),C=te,E=d("DeleteOutlined"),B=ne,P=ie,U=le,I=oe,V=se,g=J,$=d("admin-page-filters"),z=d("AddEdit"),H=d("EditOutlined"),K=de,M=d("admin-page-table-content");return o(),p(f,null,[a(x,null,{header:t(()=>[a(A,{title:e.$t("menu.taxes"),class:"p-0"},null,8,["title"])]),breadcrumb:t(()=>[a(D,{separator:"-",style:{"font-size":"12px"}},{default:t(()=>[a(b,null,{default:t(()=>[a(s,{to:{name:"admin.dashboard.index"}},{default:t(()=>[i(r(e.$t("menu.dashboard")),1)]),_:1})]),_:1}),a(b,null,{default:t(()=>[i(r(e.$t("menu.settings")),1)]),_:1}),a(b,null,{default:t(()=>[i(r(e.$t("menu.taxes")),1)]),_:1})]),_:1})]),_:1}),a(g,null,{default:t(()=>[a(m,{xs:24,sm:24,md:24,lg:4,xl:4,class:"bg-setting-sidebar"},{default:t(()=>[a(O)]),_:1}),a(m,{xs:24,sm:24,md:24,lg:20,xl:20},{default:t(()=>[a($,null,{default:t(()=>[a(g,{gutter:[16,16]},{default:t(()=>[a(m,{xs:24,sm:24,md:12,lg:10,xl:10},{default:t(()=>[a(B,null,{default:t(()=>[l.permsArray.includes("taxes_create")||l.permsArray.includes("admin")?(o(),y(C,{key:0,type:"primary",onClick:e.addItem},{default:t(()=>[a(T),i(" "+r(e.$t("tax.add")),1)]),_:1},8,["onClick"])):c("",!0),e.table.selectedRowKeys.length>0&&(l.permsArray.includes("taxes_delete")||l.permsArray.includes("admin"))?(o(),y(C,{key:1,type:"primary",onClick:e.showSelectedDeleteConfirm,danger:""},{icon:t(()=>[a(E)]),default:t(()=>[i(" "+r(e.$t("common.delete")),1)]),_:1},8,["onClick"])):c("",!0)]),_:1})]),_:1}),a(m,{xs:24,sm:24,md:12,lg:14,xl:14},{default:t(()=>[a(g,{gutter:[16,16],justify:"end"},{default:t(()=>[a(m,{xs:24,sm:24,md:16,lg:12,xl:10},{default:t(()=>[a(V,{compact:""},{default:t(()=>[a(U,{style:{width:"25%"},value:e.table.searchColumn,"onUpdate:value":_[0]||(_[0]=n=>e.table.searchColumn=n),placeholder:e.$t("common.select_default_text",[""])},{default:t(()=>[(o(!0),p(f,null,w(l.filterableColumns,n=>(o(),y(P,{key:n.key},{default:t(()=>[i(r(n.value),1)]),_:2},1024))),128))]),_:1},8,["value","placeholder"]),a(I,{style:{width:"75%"},value:e.table.searchString,"onUpdate:value":_[1]||(_[1]=n=>e.table.searchString=n),"show-search":"",onChange:e.onTableSearch,onSearch:e.onTableSearch,loading:e.table.filterLoading},null,8,["value","onChange","onSearch","loading"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),a(M,null,{default:t(()=>[a(z,{addEditType:e.addEditType,visible:e.addEditVisible,url:e.addEditUrl,onAddEditSuccess:e.addEditSuccess,onClosed:e.onCloseAddEdit,formData:e.formData,data:e.viewData,pageTitle:e.pageTitle,successMessage:e.successMessage},null,8,["addEditType","visible","url","onAddEditSuccess","onClosed","formData","data","pageTitle","successMessage"]),a(g,null,{default:t(()=>[a(m,{span:24},{default:t(()=>[W("div",_e,[a(K,{"row-selection":{selectedRowKeys:e.table.selectedRowKeys,onChange:e.onRowSelectChange,getCheckboxProps:n=>({disabled:!((l.permsArray.includes("taxes_delete")||l.permsArray.includes("admin"))&&(!n.children||n.children.length==0)),name:n.xid})},columns:l.columns,"row-key":n=>n.xid,"data-source":e.table.data,pagination:e.table.pagination,loading:e.table.loading,onChange:e.handleTableChange,bordered:"",size:"middle"},{bodyCell:t(({column:n,record:u})=>[n.dataIndex==="tax_type"?(o(),p(f,{key:0},[i(r(u.tax_type=="single"?e.$t("tax.single"):e.$t("tax.multiple")),1)],64)):c("",!0),n.dataIndex==="rate"?(o(),p(f,{key:1},[u.tax_type=="single"?(o(),p("span",ge,[a(g,{gutter:[16,16],style:{"margin-top":"10px"}},{default:t(()=>[a(m,{xs:24,sm:24,md:24,lg:24},{default:t(()=>[i(r(u.rate+"%"),1)]),_:2},1024)]),_:2},1024)])):(o(),p("span",fe,[(o(!0),p(f,null,w(u.multiple_tax,h=>(o(),y(g,{gutter:[16,16],key:h.xid,style:{"margin-top":"10px"}},{default:t(()=>[a(m,{xs:24,sm:24,md:24,lg:24,style:{"margin-top":"5px"}},{default:t(()=>[i(r(`${h.name}:  ${h.rate}%`),1)]),_:2},1024)]),_:2},1024))),128))]))],64)):c("",!0),n.dataIndex==="action"?(o(),p(f,{key:2},[l.permsArray.includes("taxes_edit")||l.permsArray.includes("admin")?(o(),y(C,{key:0,type:"primary",onClick:h=>e.editItem(u),style:{"margin-left":"4px"}},{icon:t(()=>[a(H)]),_:2},1032,["onClick"])):c("",!0),(l.permsArray.includes("taxes_delete")||l.permsArray.includes("admin"))&&(!u.children||u.children.length==0)?(o(),y(C,{key:1,type:"primary",onClick:h=>e.showDeleteConfirm(u.xid),style:{"margin-left":"4px"}},{icon:t(()=>[a(E)]),_:2},1032,["onClick"])):c("",!0)],64)):c("",!0)]),_:1},8,["row-selection","columns","row-key","data-source","pagination","loading","onChange"])])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})],64)}const He=R(ce,[["render",ye]]);export{He as default};