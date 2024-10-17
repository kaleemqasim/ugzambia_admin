import{_ as B,az as j,aA as G,bl as J,b as L,Y,E as Q,r as d,o as i,c as v,a as n,w as a,T as W,i as c,l as f,t as y,k as g,G as w,M as X,j as Z,au as x,B as P,a0 as R,q as V,aD as ee,aE as ne,aF as ae,h as F,a1 as te,bm as le,bn as oe,K as se,ar as ie,J as de,aG as re,R as me,f as ue,ay as _e,aB as pe,aC as ce}from"./app-BAsX81lw.js";import{S as ge}from"./SettingSidebar-ChG0hdjK.js";import{A as fe}from"./AdminPageHeader-DcKmZbdv.js";import{c as ye}from"./crud-oEXq8XNn.js";import{a as be}from"./apiAdmin-9cDr0xk8.js";import{A as he,f as ke}from"./AddEdit-C7v0_itg.js";import{I as Ce}from"./Import-DYFjy4jP.js";import"./MailOutlined-DHmFHGuO.js";import"./TranslationOutlined-zOxk96aI.js";import"./UserOutlined-DwfbVREQ.js";import"./ShoppingCartOutlined-BTgAblvZ.js";import"./ScheduleOutlined-d1jxNqxk.js";import"./AppstoreAddOutlined-ETbrUi_c.js";import"./FormOutlined-Dw0rGoGE.js";import"./index-LnAgdau1.js";import"./datatable-pkEjtTTj.js";import"./filter-BhsIG-i2.js";import"./Upload-o7baCr0v.js";import"./SaveOutlined-C_3n1iuF.js";import"./UploadFile-DdfV8CuH.js";import"./CloudDownloadOutlined-_mehtXho.js";const Se={props:{panelType:{type:String,default:"admin"}},components:{EditOutlined:j,DeleteOutlined:G,AddEdit:he,DownloadOutlined:J},setup(){const{addEditRequestAdmin:e,loading:r}=be(),{permsArray:s,downloadLangCsvUrl:t}=L(),{url:C,addEditUrl:E,initData:b,columns:u,filterableColumns:_}=ke(),l=ye(),{t:h}=Y();return Q(()=>{l.tableUrl.value={url:C},l.table.filterableColumns=_,l.fetch({page:1}),l.crudUrl.value=E,l.langKey.value="langs",l.initData.value={...b},l.formData.value={...b}}),{permsArray:s,downloadLangCsvUrl:t,columns:u,...l,filterableColumns:_,changeLangStatus:p=>{e({url:x(`langs/${p.xid}`),data:{name:p.name,key:p.key,enabled:p.enabled,_method:"PUT"},successMessage:h("langs.status_updated"),success:A=>{}})},loading:r}}},Ae={class:"table-responsive"};function Te(e,r,s,t,C,E){const b=d("DeleteOutlined"),u=P,_=R,l=V,h=re,S=ee,p=ne,A=ae,k=F,U=d("admin-page-filters"),D=d("AddEdit"),I=te,O=le,M=oe,z=se,K=d("EditOutlined"),N=d("DownloadOutlined"),q=ie,H=de,$=d("admin-page-table-content");return i(),v(w,null,[n(U,null,{default:a(()=>[n(k,{gutter:[16,16]},{default:a(()=>[n(l,{xs:24,sm:24,md:12,lg:10,xl:10},{default:a(()=>[n(_,null,{default:a(()=>[W(e.$slots,"actionButtons"),e.table.selectedRowKeys.length>0&&(t.permsArray.includes("translations_edit")||t.permsArray.includes("admin"))?(i(),c(u,{key:0,type:"primary",onClick:e.showSelectedDeleteConfirm,danger:""},{icon:a(()=>[n(b)]),default:a(()=>[f(" "+y(e.$t("common.delete")),1)]),_:1},8,["onClick"])):g("",!0)]),_:3})]),_:3}),n(l,{xs:24,sm:24,md:12,lg:14,xl:14},{default:a(()=>[n(k,{gutter:[16,16],justify:"end"},{default:a(()=>[n(l,{xs:24,sm:24,md:16,lg:12,xl:10},{default:a(()=>[n(A,{compact:""},{default:a(()=>[n(S,{style:{width:"25%"},value:e.table.searchColumn,"onUpdate:value":r[0]||(r[0]=o=>e.table.searchColumn=o),placeholder:e.$t("common.select_default_text",[""])},{default:a(()=>[(i(!0),v(w,null,X(t.filterableColumns,o=>(i(),c(h,{key:o.key},{default:a(()=>[f(y(o.value),1)]),_:2},1024))),128))]),_:1},8,["value","placeholder"]),n(p,{style:{width:"75%"},value:e.table.searchString,"onUpdate:value":r[1]||(r[1]=o=>e.table.searchString=o),"show-search":"",onChange:e.onTableSearch,onSearch:e.onTableSearch,loading:e.table.filterLoading},null,8,["value","onChange","onSearch","loading"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:3})]),_:3}),n($,null,{default:a(()=>[n(D,{addEditType:e.addEditType,visible:e.addEditVisible,url:e.addEditUrl,onAddEditSuccess:e.addEditSuccess,onClosed:e.onCloseAddEdit,formData:e.formData,data:e.viewData,pageTitle:e.pageTitle,successMessage:e.successMessage},null,8,["addEditType","visible","url","onAddEditSuccess","onClosed","formData","data","pageTitle","successMessage"]),n(k,null,{default:a(()=>[n(l,{span:24},{default:a(()=>[Z("div",Ae,[n(H,{"row-selection":{selectedRowKeys:e.table.selectedRowKeys,onChange:e.onRowSelectChange,getCheckboxProps:o=>({disabled:!((s.panelType=="admin"&&(t.permsArray.includes("translations_delete")||t.permsArray.includes("admin"))||s.panelType=="superadmin")&&o.key!="en"),name:o.xid})},columns:t.columns,"row-key":o=>o.xid,"data-source":e.table.data,pagination:e.table.pagination,loading:e.table.loading||t.loading,onChange:e.handleTableChange,bordered:"",size:"middle"},{bodyCell:a(({column:o,record:m})=>[o.dataIndex==="name"?(i(),c(M,{key:0},{default:a(()=>[n(O,null,{title:a(()=>[f(y(m.name),1)]),avatar:a(()=>[n(I,{shape:"square",size:"small",src:m.image_url},null,8,["src"])]),_:2},1024)]),_:2},1024)):g("",!0),o.dataIndex==="enabled"?(i(),c(z,{key:1,checked:m.enabled,"onUpdate:checked":T=>m.enabled=T,checkedValue:1,unCheckedValue:0,onChange:T=>t.changeLangStatus(m),size:"small",disabled:s.panelType=="admin"&&!(t.permsArray.includes("translations_edit")||t.permsArray.includes("admin"))||m.key=="en"},null,8,["checked","onUpdate:checked","onChange","disabled"])):g("",!0),o.dataIndex==="action"?(i(),v(w,{key:2},[(s.panelType=="admin"&&(t.permsArray.includes("translations_edit")||t.permsArray.includes("admin"))||s.panelType=="superadmin")&&m.key!="en"?(i(),c(u,{key:0,type:"primary",onClick:T=>e.editItem(m),style:{"margin-left":"4px"}},{icon:a(()=>[n(K)]),_:2},1032,["onClick"])):g("",!0),(s.panelType=="admin"&&(t.permsArray.includes("translations_delete")||t.permsArray.includes("admin"))||s.panelType=="superadmin")&&m.key!="en"?(i(),c(u,{key:1,type:"primary",onClick:T=>e.showDeleteConfirm(m.xid),style:{"margin-left":"4px"}},{icon:a(()=>[n(b)]),_:2},1032,["onClick"])):g("",!0),n(q,{href:`${t.downloadLangCsvUrl}/${m.xid}`,target:"_blank"},{default:a(()=>[n(u,{type:"primary",style:{"margin-left":"4px"}},{icon:a(()=>[n(N)]),_:1})]),_:2},1032,["href"])],64)):g("",!0)]),_:1},8,["row-selection","columns","row-key","data-source","pagination","loading","onChange"])])]),_:1})]),_:1})]),_:1})],64)}const ve=B(Se,[["render",Te]]),we={components:{PlusOutlined:me,SettingSidebar:ge,AdminPageHeader:fe,LanguageSettings:ve,ImportTranslation:Ce},setup(){const{permsArray:e,appType:r}=L(),s=ue(null),t=window.config.translatioins_sample_file;return{permsArray:e,appType:r,langSettingRef:s,addItem:()=>{s.value.addItem()},sampleFileUrl:t}}};function Ee(e,r,s,t,C,E){const b=_e,u=d("router-link"),_=pe,l=ce,h=d("AdminPageHeader"),S=d("SettingSidebar"),p=V,A=d("PlusOutlined"),k=P,U=d("ImportTranslation"),D=R,I=d("LanguageSettings"),O=F;return i(),v(w,null,[n(h,null,{header:a(()=>[n(b,{title:e.$t("menu.languages"),onBack:r[0]||(r[0]=()=>e.$router.push({name:"admin.settings.translations.index"})),class:"p-0"},null,8,["title"])]),breadcrumb:a(()=>[n(l,{separator:"-",style:{"font-size":"12px"}},{default:a(()=>[n(_,null,{default:a(()=>[n(u,{to:{name:"admin.dashboard.index"}},{default:a(()=>[f(y(e.$t("menu.dashboard")),1)]),_:1},8,["to"])]),_:1}),n(_,null,{default:a(()=>[f(y(e.$t("menu.settings")),1)]),_:1}),n(_,null,{default:a(()=>[n(u,{to:{name:"admin.settings.translations.index"}},{default:a(()=>[f(y(e.$t("menu.translations")),1)]),_:1},8,["to"])]),_:1}),n(_,null,{default:a(()=>[f(y(e.$t("menu.languages")),1)]),_:1})]),_:1})]),_:1}),n(O,null,{default:a(()=>[n(p,{xs:24,sm:24,md:24,lg:4,xl:4,class:"bg-setting-sidebar"},{default:a(()=>[n(S)]),_:1}),n(p,{xs:24,sm:24,md:24,lg:20,xl:20},{default:a(()=>[n(I,{ref:"langSettingRef"},{actionButtons:a(()=>[t.permsArray.includes("translations_create")||t.permsArray.includes("admin")?(i(),c(D,{key:0},{default:a(()=>[n(k,{type:"primary",onClick:t.addItem},{default:a(()=>[n(A),f(" "+y(e.$t("langs.add")),1)]),_:1},8,["onClick"]),t.appType=="non-saas"?(i(),c(U,{key:0,pageTitle:e.$t("translations.import_translations"),sampleFileUrl:t.sampleFileUrl,importUrl:"translations/import"},null,8,["pageTitle","sampleFileUrl"])):g("",!0)]),_:1})):g("",!0)]),_:1},512)]),_:1})]),_:1})],64)}const Qe=B(we,[["render",Ee]]);export{Qe as default};