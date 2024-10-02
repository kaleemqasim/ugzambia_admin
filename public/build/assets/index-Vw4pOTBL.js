import{_ as B,az as N,aA as z,b as O,E as H,r as i,o as d,c as C,a as n,w as a,T as j,i as y,l as p,t as _,k as f,G as S,M as F,j as G,B as P,a0 as L,q as R,aD as q,aE as J,aF as Q,h as I,J as W,aG as X,R as Y,f as Z,ay as $,aB as x,aC as ee}from"./app-yQu0_bFn.js";import{S as ne}from"./SettingSidebar-BaDGGiU3.js";import{A as ae}from"./AdminPageHeader-BhKFwWP2.js";import{c as te}from"./crud-CSeykbix.js";import{A as oe,f as le}from"./AddEdit-BhYJ9kNS.js";import"./MailOutlined-DuUP2dI9.js";import"./TranslationOutlined-BHy0CoGU.js";import"./UserOutlined-CZ0TH7Wt.js";import"./ShoppingCartOutlined-CZv7lsGx.js";import"./ScheduleOutlined-BsWffWuw.js";import"./AppstoreAddOutlined-BEVWAjr1.js";import"./FormOutlined-B_O9aUAS.js";import"./index-CNNFGL0_.js";import"./datatable-BJxAJAu3.js";import"./filter-BXt71jrw.js";import"./apiAdmin-DF0-_dJB.js";import"./SaveOutlined-Bu-bD-Wg.js";const se={props:{panelType:{type:String,default:"admin"}},components:{EditOutlined:N,DeleteOutlined:z,AddEdit:oe},setup(e){const{permsArray:s,appSetting:r}=O(),{url:t,addEditUrl:k,initData:b,columns:u,filterableColumns:c}=le(e.panelType),o=te();return H(()=>{o.tableUrl.value={url:t},o.table.filterableColumns=c,o.fetch({page:1}),o.crudUrl.value=k,o.langKey.value="currency",o.initData.value={...b},o.formData.value={...b}}),{permsArray:s,appSetting:r,columns:u,...o,filterableColumns:c}}},re={class:"table-responsive"};function ie(e,s,r,t,k,b){const u=i("DeleteOutlined"),c=P,o=L,m=R,A=X,v=q,h=J,E=Q,g=I,T=i("admin-page-filters"),w=i("AddEdit"),U=i("EditOutlined"),V=W,M=i("admin-page-table-content");return d(),C(S,null,[n(T,null,{default:a(()=>[n(g,{gutter:[16,16]},{default:a(()=>[n(m,{xs:24,sm:24,md:12,lg:10,xl:10},{default:a(()=>[n(o,null,{default:a(()=>[j(e.$slots,"actionButtons"),e.table.selectedRowKeys.length>0&&(t.permsArray.includes("currencies_delete")||t.permsArray.includes("admin"))?(d(),y(c,{key:0,type:"primary",onClick:e.showSelectedDeleteConfirm,danger:""},{icon:a(()=>[n(u)]),default:a(()=>[p(" "+_(e.$t("common.delete")),1)]),_:1},8,["onClick"])):f("",!0)]),_:3})]),_:3}),n(m,{xs:24,sm:24,md:12,lg:14,xl:14},{default:a(()=>[n(g,{gutter:[16,16],justify:"end"},{default:a(()=>[n(m,{xs:24,sm:24,md:16,lg:12,xl:10},{default:a(()=>[n(E,{compact:""},{default:a(()=>[n(v,{style:{width:"25%"},value:e.table.searchColumn,"onUpdate:value":s[0]||(s[0]=l=>e.table.searchColumn=l),placeholder:e.$t("common.select_default_text",[""])},{default:a(()=>[(d(!0),C(S,null,F(t.filterableColumns,l=>(d(),y(A,{key:l.key},{default:a(()=>[p(_(l.value),1)]),_:2},1024))),128))]),_:1},8,["value","placeholder"]),n(h,{style:{width:"75%"},value:e.table.searchString,"onUpdate:value":s[1]||(s[1]=l=>e.table.searchString=l),"show-search":"",onChange:e.onTableSearch,onSearch:e.onTableSearch,loading:e.table.filterLoading},null,8,["value","onChange","onSearch","loading"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:3})]),_:3}),n(M,null,{default:a(()=>[n(w,{addEditType:e.addEditType,visible:e.addEditVisible,url:e.addEditUrl,onAddEditSuccess:e.addEditSuccess,onClosed:e.onCloseAddEdit,formData:e.formData,data:e.viewData,pageTitle:e.pageTitle,successMessage:e.successMessage},null,8,["addEditType","visible","url","onAddEditSuccess","onClosed","formData","data","pageTitle","successMessage"]),n(g,null,{default:a(()=>[n(m,{span:24},{default:a(()=>[G("div",re,[n(V,{"row-selection":{selectedRowKeys:e.table.selectedRowKeys,onChange:e.onRowSelectChange,getCheckboxProps:l=>({disabled:!((r.panelType=="admin"&&(t.permsArray.includes("currencies_delete")||t.permsArray.includes("admin"))||r.panelType=="superadmin")&&t.appSetting.x_currency_id!=l.xid),name:l.xid})},columns:t.columns,"row-key":l=>l.xid,"data-source":e.table.data,pagination:e.table.pagination,loading:e.table.loading,onChange:e.handleTableChange,bordered:"",size:"middle"},{bodyCell:a(({column:l,record:D})=>[l.dataIndex==="action"?(d(),C(S,{key:0},[r.panelType=="admin"&&(t.permsArray.includes("currencies_edit")||t.permsArray.includes("admin"))||r.panelType=="superadmin"?(d(),y(c,{key:0,type:"primary",onClick:K=>e.editItem(D),style:{"margin-left":"4px"}},{icon:a(()=>[n(U)]),_:2},1032,["onClick"])):f("",!0),(r.panelType=="admin"&&(t.permsArray.includes("currencies_delete")||t.permsArray.includes("admin"))||r.panelType=="superadmin")&&t.appSetting.x_currency_id!=D.xid?(d(),y(c,{key:1,type:"primary",onClick:K=>e.showDeleteConfirm(D.xid),style:{"margin-left":"4px"}},{icon:a(()=>[n(u)]),_:2},1032,["onClick"])):f("",!0)],64)):f("",!0)]),_:1},8,["row-selection","columns","row-key","data-source","pagination","loading","onChange"])])]),_:1})]),_:1})]),_:1})],64)}const de=B(se,[["render",ie]]),ce={components:{PlusOutlined:Y,SettingSidebar:ne,AdminPageHeader:ae,CurrencySettings:de},setup(){const{permsArray:e}=O(),s=Z(null);return{permsArray:e,currencySettingRef:s,addItem:()=>{s.value.addItem()}}}};function ue(e,s,r,t,k,b){const u=$,c=i("router-link"),o=x,m=ee,A=i("AdminPageHeader"),v=i("SettingSidebar"),h=R,E=i("PlusOutlined"),g=P,T=i("CurrencySettings"),w=I;return d(),C(S,null,[n(A,null,{header:a(()=>[n(u,{title:e.$t("menu.currencies"),class:"p-0"},null,8,["title"])]),breadcrumb:a(()=>[n(m,{separator:"-",style:{"font-size":"12px"}},{default:a(()=>[n(o,null,{default:a(()=>[n(c,{to:{name:"admin.dashboard.index"}},{default:a(()=>[p(_(e.$t("menu.dashboard")),1)]),_:1},8,["to"])]),_:1}),n(o,null,{default:a(()=>[p(_(e.$t("menu.settings")),1)]),_:1}),n(o,null,{default:a(()=>[p(_(e.$t("menu.currencies")),1)]),_:1})]),_:1})]),_:1}),n(w,null,{default:a(()=>[n(h,{xs:24,sm:24,md:24,lg:4,xl:4,class:"bg-setting-sidebar"},{default:a(()=>[n(v)]),_:1}),n(h,{xs:24,sm:24,md:24,lg:20,xl:20},{default:a(()=>[n(T,{ref:"currencySettingRef"},{actionButtons:a(()=>[t.permsArray.includes("currencies_create")||t.permsArray.includes("admin")?(d(),y(g,{key:0,type:"primary",onClick:t.addItem},{default:a(()=>[n(E),p(" "+_(e.$t("currency.add")),1)]),_:1},8,["onClick"])):f("",!0)]),_:1},512)]),_:1})]),_:1})],64)}const Be=B(ce,[["render",ue]]);export{Be as default};
