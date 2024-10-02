import{c as j}from"./crud-CSeykbix.js";import{Y as G,_ as O,d as W,R as T,aT as J,r as d,o as u,i as g,w as a,a as n,l as c,t as p,I as X,n as Y,q as M,h as B,F as Q,B as I,X as Z,az as x,aA as ee,b as ne,E as ae,c as w,G as A,k as C,M as te,j as oe,ay as le,aB as se,aC as de,a0 as ie,aD as re,aE as ue,aF as me,J as ce,aG as pe}from"./app-yQu0_bFn.js";import{a as _e}from"./apiAdmin-DF0-_dJB.js";import{S as fe}from"./SaveOutlined-Bu-bD-Wg.js";import{S as ge}from"./SettingSidebar-BaDGGiU3.js";import{A as be}from"./AdminPageHeader-BhKFwWP2.js";import"./datatable-BJxAJAu3.js";import"./filter-BXt71jrw.js";import"./MailOutlined-DuUP2dI9.js";import"./TranslationOutlined-BHy0CoGU.js";import"./UserOutlined-CZ0TH7Wt.js";import"./ShoppingCartOutlined-CZv7lsGx.js";import"./ScheduleOutlined-BsWffWuw.js";import"./AppstoreAddOutlined-BEVWAjr1.js";import"./FormOutlined-B_O9aUAS.js";import"./index-CNNFGL0_.js";const ye=()=>{const e="custom-fields?fields=id,xid,name,value,type",o="custom-fields",{t:i}=G(),t={name:"",value:"",type:"text"},m=[{title:i("custom_field.name"),dataIndex:"name",sorter:!0},{title:i("common.action"),dataIndex:"action"}],_=[{key:"name",value:i("custom_field.name")}];return{url:e,addEditUrl:o,initData:t,columns:m,filterableColumns:_}},Ce=W({props:["formData","data","visible","url","addEditType","pageTitle","successMessage"],components:{PlusOutlined:T,LoadingOutlined:J,SaveOutlined:fe},setup(e,{emit:o}){const{addEditRequestAdmin:i,loading:t,rules:m}=_e();return{loading:t,rules:m,onClose:()=>{m.value={},o("closed")},onSubmit:()=>{i({url:e.url,data:e.formData,successMessage:e.successMessage,success:b=>{o("addEditSuccess",b.xid)}})},drawerWidth:window.innerWidth<=991?"90%":"45%"}}});function he(e,o,i,t,m,_){const l=X,b=Y,y=M,v=B,k=Q,S=d("SaveOutlined"),r=I,E=Z;return u(),g(E,{open:e.visible,closable:!1,centered:!0,title:e.pageTitle,onOk:e.onSubmit},{footer:a(()=>[n(r,{key:"submit",type:"primary",loading:e.loading,onClick:e.onSubmit},{icon:a(()=>[n(S)]),default:a(()=>[c(" "+p(e.addEditType=="add"?e.$t("common.create"):e.$t("common.update")),1)]),_:1},8,["loading","onClick"]),n(r,{key:"back",onClick:e.onClose},{default:a(()=>[c(p(e.$t("common.cancel")),1)]),_:1},8,["onClick"])]),default:a(()=>[n(k,{layout:"vertical"},{default:a(()=>[n(v,{gutter:16},{default:a(()=>[n(y,{xs:24,sm:24,md:24,lg:24},{default:a(()=>[n(b,{label:e.$t("custom_field.name"),name:"name",help:e.rules.name?e.rules.name.message:null,validateStatus:e.rules.name?"error":null,class:"required"},{default:a(()=>[n(l,{value:e.formData.name,"onUpdate:value":o[0]||(o[0]=f=>e.formData.name=f),placeholder:e.$t("common.placeholder_default_text",[e.$t("custom_field.name")])},null,8,["value","placeholder"])]),_:1},8,["label","help","validateStatus"])]),_:1})]),_:1})]),_:1})]),_:1},8,["open","title","onOk"])}const ve=O(Ce,[["render",he]]),ke={components:{PlusOutlined:T,EditOutlined:x,DeleteOutlined:ee,AddEdit:ve,SettingSidebar:ge,AdminPageHeader:be},setup(){const{permsArray:e}=ne(),{url:o,addEditUrl:i,initData:t,columns:m,filterableColumns:_}=ye(),l=j();return ae(()=>{l.tableUrl.value={url:o},l.table.filterableColumns=_,l.fetch({page:1}),l.crudUrl.value=i,l.langKey.value="custom_field",l.initData.value={...t},l.formData.value={...t}}),{permsArray:e,columns:m,...l,filterableColumns:_}}},Se={class:"table-responsive"};function Ee(e,o,i,t,m,_){const l=le,b=d("router-link"),y=se,v=de,k=d("AdminPageHeader"),S=d("SettingSidebar"),r=M,E=d("PlusOutlined"),f=I,D=d("DeleteOutlined"),U=ie,P=pe,R=re,V=ue,F=me,h=B,K=d("admin-page-filters"),N=d("AddEdit"),q=d("EditOutlined"),z=ce,H=d("admin-page-table-content");return u(),w(A,null,[n(k,null,{header:a(()=>[n(l,{title:e.$t("menu.custom_fields"),class:"p-0"},null,8,["title"])]),breadcrumb:a(()=>[n(v,{separator:"-",style:{"font-size":"12px"}},{default:a(()=>[n(y,null,{default:a(()=>[n(b,{to:{name:"admin.dashboard.index"}},{default:a(()=>[c(p(e.$t("menu.dashboard")),1)]),_:1},8,["to"])]),_:1}),n(y,null,{default:a(()=>[c(p(e.$t("menu.settings")),1)]),_:1}),n(y,null,{default:a(()=>[c(p(e.$t("menu.custom_fields")),1)]),_:1})]),_:1})]),_:1}),n(h,null,{default:a(()=>[n(r,{xs:24,sm:24,md:24,lg:4,xl:4,class:"bg-setting-sidebar"},{default:a(()=>[n(S)]),_:1}),n(r,{xs:24,sm:24,md:24,lg:20,xl:20},{default:a(()=>[n(K,null,{default:a(()=>[n(h,{gutter:[16,16]},{default:a(()=>[n(r,{xs:24,sm:24,md:12,lg:10,xl:10},{default:a(()=>[n(U,null,{default:a(()=>[t.permsArray.includes("custom_fields_create")||t.permsArray.includes("admin")?(u(),g(f,{key:0,type:"primary",onClick:e.addItem},{default:a(()=>[n(E),c(" "+p(e.$t("custom_field.add")),1)]),_:1},8,["onClick"])):C("",!0),e.table.selectedRowKeys.length>0&&(t.permsArray.includes("custom_fields_delete")||t.permsArray.includes("admin"))?(u(),g(f,{key:1,type:"primary",onClick:e.showSelectedDeleteConfirm,danger:""},{icon:a(()=>[n(D)]),default:a(()=>[c(" "+p(e.$t("common.delete")),1)]),_:1},8,["onClick"])):C("",!0)]),_:1})]),_:1}),n(r,{xs:24,sm:24,md:12,lg:14,xl:14},{default:a(()=>[n(h,{gutter:[16,16],justify:"end"},{default:a(()=>[n(r,{xs:24,sm:24,md:16,lg:12,xl:10},{default:a(()=>[n(F,{compact:""},{default:a(()=>[n(R,{style:{width:"25%"},value:e.table.searchColumn,"onUpdate:value":o[0]||(o[0]=s=>e.table.searchColumn=s),placeholder:e.$t("common.select_default_text",[""])},{default:a(()=>[(u(!0),w(A,null,te(t.filterableColumns,s=>(u(),g(P,{key:s.key},{default:a(()=>[c(p(s.value),1)]),_:2},1024))),128))]),_:1},8,["value","placeholder"]),n(V,{style:{width:"75%"},value:e.table.searchString,"onUpdate:value":o[1]||(o[1]=s=>e.table.searchString=s),"show-search":"",onChange:e.onTableSearch,onSearch:e.onTableSearch,loading:e.table.filterLoading},null,8,["value","onChange","onSearch","loading"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),n(H,null,{default:a(()=>[n(N,{addEditType:e.addEditType,visible:e.addEditVisible,url:e.addEditUrl,onAddEditSuccess:e.addEditSuccess,onClosed:e.onCloseAddEdit,formData:e.formData,data:e.viewData,pageTitle:e.pageTitle,successMessage:e.successMessage},null,8,["addEditType","visible","url","onAddEditSuccess","onClosed","formData","data","pageTitle","successMessage"]),n(h,null,{default:a(()=>[n(r,{span:24},{default:a(()=>[oe("div",Se,[n(z,{"row-selection":{selectedRowKeys:e.table.selectedRowKeys,onChange:e.onRowSelectChange,getCheckboxProps:s=>({disabled:!1,name:s.xid})},columns:t.columns,"row-key":s=>s.xid,"data-source":e.table.data,pagination:e.table.pagination,loading:e.table.loading,onChange:e.handleTableChange,bordered:"",size:"middle"},{bodyCell:a(({column:s,record:$})=>[s.dataIndex==="action"?(u(),w(A,{key:0},[t.permsArray.includes("custom_fields_edit")||t.permsArray.includes("admin")?(u(),g(f,{key:0,type:"primary",onClick:L=>e.editItem($),style:{"margin-left":"4px"}},{icon:a(()=>[n(q)]),_:2},1032,["onClick"])):C("",!0),t.permsArray.includes("custom_fields_delete")||t.permsArray.includes("admin")?(u(),g(f,{key:1,type:"primary",onClick:L=>e.showDeleteConfirm($.xid),style:{"margin-left":"4px"}},{icon:a(()=>[n(D)]),_:2},1032,["onClick"])):C("",!0)],64)):C("",!0)]),_:1},8,["row-selection","columns","row-key","data-source","pagination","loading","onChange"])])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})],64)}const qe=O(ke,[["render",Ee]]);export{qe as default};
