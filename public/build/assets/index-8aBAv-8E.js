import{Y as Q,_ as B,d as Z,R as U,aT as x,b as I,f as T,E as F,r as _,o as d,i as h,w as a,a as t,l as r,t as u,j as R,c as E,M as V,G as w,k as C,aD as q,n as ee,q as K,h as N,a_ as ae,F as te,B as z,a0 as H,X as se,aG as j,az as ne,aA as le,ay as oe,aB as de,aC as ie,J as re}from"./app-yQu0_bFn.js";import{c as ue}from"./crud-CSeykbix.js";import{a as me}from"./apiAdmin-DF0-_dJB.js";import{S as ce}from"./StaffAddButton-CyE36e5k.js";import{S as _e}from"./SaveOutlined-Bu-bD-Wg.js";import{A as pe}from"./AdminPageHeader-BhKFwWP2.js";import{P as fe}from"./PayrollSidebar-Bk0tgw9Q.js";import"./datatable-BJxAJAu3.js";import"./filter-BXt71jrw.js";import"./fields-CHO1AQsY.js";import"./Upload-DMBWxM8a.js";import"./AddButton-CCsqJqs8.js";import"./AddEdit-HD_pkyki.js";import"./SettingOutlined-CfBC_cVQ.js";import"./AddButton-DcLn4njs.js";import"./AddEdit-QeQmUB7R.js";import"./index-CNNFGL0_.js";import"./ScheduleOutlined-BsWffWuw.js";import"./TabletOutlined-CZfTkFxr.js";import"./DollarCircleOutlined-DJjefBnq.js";const be=()=>{const e="basic-salaries",{t:n}=Q(),v=["user_id"],s={user_id:void 0,basic_salary:""},y=[{title:n("pre_payment.user_id"),dataIndex:"user_id"},{title:n("basic_salary.basic_salary"),dataIndex:"basic_salary"},{title:n("common.action"),dataIndex:"action"}];return{addEditUrl:e,initData:s,columns:y,filterableColumns:[],hashableColumns:v}},ye=Z({props:["formData","data","visible","url","addEditType","pageTitle","successMessage"],components:{PlusOutlined:U,LoadingOutlined:x,SaveOutlined:_e,StaffMemberAddButton:ce},setup(e,{emit:n}){const{addEditRequestAdmin:v,loading:s,rules:y}=me(),{appSetting:l,disabledDate:D,permsArray:k}=I(),m=T([]),p="users?limit=10000";return F(()=>{const c=axiosAdmin.get(p);Promise.all([c]).then(([f])=>{m.value=f.data})}),{loading:s,rules:y,onClose:()=>{y.value={},n("closed")},onSubmit:()=>{v({url:e.url,data:e.formData,successMessage:e.successMessage,success:c=>{n("addEditSuccess",c.xid)}})},appSetting:l,permsArray:k,staffMemberAdded:()=>{axiosAdmin.get(p).then(c=>{m.value=c.data})},allStaffMembers:m,drawerWidth:window.innerWidth<=991?"90%":"45%"}}}),ge={style:{display:"flex"}};function Ce(e,n,v,s,y,l){const D=j,k=q,m=_("StaffMemberAddButton"),p=ee,g=K,A=N,i=ae,c=te,f=_("SaveOutlined"),S=z,$=H,P=se;return d(),h(P,{open:e.visible,closable:!1,centered:!0,title:e.pageTitle,onOk:e.onSubmit},{footer:a(()=>[t($,null,{default:a(()=>[t(S,{key:"submit",type:"primary",loading:e.loading,onClick:e.onSubmit},{icon:a(()=>[t(f)]),default:a(()=>[r(" "+u(e.addEditType=="add"?e.$t("common.create"):e.$t("common.update")),1)]),_:1},8,["loading","onClick"]),t(S,{key:"back",onClick:e.onClose},{default:a(()=>[r(u(e.$t("common.cancel")),1)]),_:1},8,["onClick"])]),_:1})]),default:a(()=>[t(c,{layout:"vertical"},{default:a(()=>[t(A,{gutter:16},{default:a(()=>[t(g,{xs:24,sm:24,md:24,lg:24},{default:a(()=>[t(p,{label:e.$t("basic_salary.user_id"),name:"user_id",help:e.rules.user_id?e.rules.user_id.message:null,validateStatus:e.rules.user_id?"error":null,class:"required"},{default:a(()=>[R("span",ge,[t(k,{value:e.formData.user_id,"onUpdate:value":n[0]||(n[0]=b=>e.formData.user_id=b),placeholder:e.$t("common.select_default_text",[e.$t("basic_salary.user_id")]),allowClear:!0,disabled:e.addEditType=="edit"},{default:a(()=>[(d(!0),E(w,null,V(e.allStaffMembers,b=>(d(),h(D,{key:b.xid,value:b.xid},{default:a(()=>[r(u(b.name),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value","placeholder","disabled"]),e.addEditType=="add"?(d(),h(m,{key:0,onOnAddSuccess:e.staffMemberAdded},null,8,["onOnAddSuccess"])):C("",!0)])]),_:1},8,["label","help","validateStatus"])]),_:1})]),_:1}),t(A,{gutter:16},{default:a(()=>[t(g,{xs:24,sm:24,md:24,lg:24},{default:a(()=>[t(p,{label:e.$t("basic_salary.basic_salary"),name:"basic_salary",help:e.rules.basic_salary?e.rules.basic_salary.message:null,validateStatus:e.rules.basic_salary?"error":null,class:"required"},{default:a(()=>[t(i,{value:e.formData.basic_salary,"onUpdate:value":n[1]||(n[1]=b=>e.formData.basic_salary=b),placeholder:e.$t("common.placeholder_default_text",[e.$t("basic_salary.basic_salary")]),style:{width:"100%"}},{addonBefore:a(()=>[r(u(e.appSetting.currency.symbol),1)]),_:1},8,["value","placeholder"])]),_:1},8,["label","help","validateStatus"])]),_:1})]),_:1})]),_:1})]),_:1},8,["open","title","onOk"])}const he=B(ye,[["render",Ce]]),ve={components:{PlusOutlined:U,EditOutlined:ne,DeleteOutlined:le,AddEdit:he,AdminPageHeader:pe,PayrollSidebar:fe},setup(){const{addEditUrl:e,initData:n,columns:v,filterableColumns:s,hashableColumns:y}=be(),l=ue(),{permsArray:D,appSetting:k,formatAmountCurrency:m}=I(),p=T({user_id:void 0}),g=T([]),A="users?limit=10000";F(()=>{i(),c(),l.crudUrl.value=e,l.langKey.value="basic_salary",l.initData.value={...n},l.formData.value={...n},l.hashableColumns.value=[...y]});const i=()=>{l.tableUrl.value={url:"basic-salaries?fields=id,xid,user_id,x_user_id,user{id,xid,name},basic_salary",extraFilters:p},l.table.filterableColumns=s,l.fetch({page:1})},c=()=>{const f=axiosAdmin.get(A);Promise.all([f]).then(([S])=>{g.value=S.data})};return{columns:v,...l,filterableColumns:s,permsArray:D,appSetting:k,extraFilters:p,setUrlData:i,allUsers:g,formatAmountCurrency:m}}},ke={class:"table-responsive"};function Ae(e,n,v,s,y,l){const D=oe,k=_("router-link"),m=de,p=ie,g=_("AdminPageHeader"),A=_("PayrollSidebar"),i=K,c=_("PlusOutlined"),f=z,S=_("DeleteOutlined"),$=H,P=j,b=q,M=N,G=_("admin-page-filters"),L=_("AddEdit"),W=_("EditOutlined"),J=re,X=_("admin-page-table-content");return d(),E(w,null,[t(g,null,{header:a(()=>[t(D,{title:e.$t("menu.basic_salaries"),class:"p-0"},null,8,["title"])]),breadcrumb:a(()=>[t(p,{separator:"-",style:{"font-size":"12px"}},{default:a(()=>[t(m,null,{default:a(()=>[t(k,{to:{name:"admin.dashboard.index"}},{default:a(()=>[r(u(e.$t("menu.dashboard")),1)]),_:1},8,["to"])]),_:1}),t(m,null,{default:a(()=>[r(u(e.$t("menu.hrm")),1)]),_:1}),t(m,null,{default:a(()=>[r(u(e.$t("menu.basic_salaries")),1)]),_:1})]),_:1})]),_:1}),t(M,null,{default:a(()=>[t(i,{xs:24,sm:24,md:24,lg:4,xl:4,class:"bg-setting-sidebar"},{default:a(()=>[t(A)]),_:1}),t(i,{xs:24,sm:24,md:24,lg:20,xl:20},{default:a(()=>[t(G,null,{default:a(()=>[t(M,{gutter:[16,16]},{default:a(()=>[t(i,{xs:24,sm:24,md:12,lg:10,xl:10},{default:a(()=>[t($,null,{default:a(()=>[s.permsArray.includes("basic_salaries_create")||s.permsArray.includes("admin")?(d(),h(f,{key:0,type:"primary",onClick:e.addItem},{default:a(()=>[t(c),r(" "+u(e.$t("basic_salary.add")),1)]),_:1},8,["onClick"])):C("",!0),e.table.selectedRowKeys.length>0&&(s.permsArray.includes("basic_salaries_delete")||s.permsArray.includes("admin"))?(d(),h(f,{key:1,type:"primary",onClick:e.showSelectedDeleteConfirm,danger:""},{icon:a(()=>[t(S)]),default:a(()=>[r(" "+u(e.$t("common.delete")),1)]),_:1},8,["onClick"])):C("",!0)]),_:1})]),_:1}),t(i,{xs:24,sm:24,md:12,lg:14,xl:14},{default:a(()=>[t(M,{gutter:[16,16],justify:"end"},{default:a(()=>[t(i,{xs:24,sm:24,md:12,lg:8,xl:8},{default:a(()=>[t(b,{value:s.extraFilters.user_id,"onUpdate:value":n[0]||(n[0]=o=>s.extraFilters.user_id=o),onChange:s.setUrlData,"show-search":"",style:{width:"100%"},placeholder:e.$t("common.select_default_text",[e.$t("basic_salary.user_id")]),allowClear:!0},{default:a(()=>[(d(!0),E(w,null,V(s.allUsers,o=>(d(),h(P,{key:o.xid,value:o.xid,title:o.name},{default:a(()=>[r(u(o.name),1)]),_:2},1032,["value","title"]))),128))]),_:1},8,["value","onChange","placeholder"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(X,null,{default:a(()=>[t(L,{addEditType:e.addEditType,visible:e.addEditVisible,url:e.addEditUrl,onAddEditSuccess:e.addEditSuccess,onClosed:e.onCloseAddEdit,formData:e.formData,data:e.viewData,pageTitle:e.pageTitle,successMessage:e.successMessage},null,8,["addEditType","visible","url","onAddEditSuccess","onClosed","formData","data","pageTitle","successMessage"]),t(M,null,{default:a(()=>[t(i,{span:24},{default:a(()=>[R("div",ke,[t(J,{"row-selection":{selectedRowKeys:e.table.selectedRowKeys,onChange:e.onRowSelectChange,getCheckboxProps:o=>({disabled:!1,name:o.xid})},columns:s.columns,"row-key":o=>o.xid,"data-source":e.table.data,pagination:e.table.pagination,loading:e.table.loading,onChange:e.handleTableChange,bordered:"",size:"middle"},{bodyCell:a(({column:o,record:O})=>[o.dataIndex=="user_id"?(d(),E(w,{key:0},[r(u(O.user.name),1)],64)):C("",!0),o.dataIndex=="basic_salary"?(d(),E(w,{key:1},[r(u(s.formatAmountCurrency(O.basic_salary)),1)],64)):C("",!0),o.dataIndex==="action"?(d(),E(w,{key:2},[s.permsArray.includes("basic_salaries_edit")||s.permsArray.includes("admin")?(d(),h(f,{key:0,type:"primary",onClick:Y=>e.editItem(O),style:{"margin-left":"4px"}},{icon:a(()=>[t(W)]),_:2},1032,["onClick"])):C("",!0),s.permsArray.includes("basic_salaries_delete")||s.permsArray.includes("admin")?(d(),h(f,{key:1,type:"primary",onClick:Y=>e.showDeleteConfirm(O.xid),style:{"margin-left":"4px"}},{icon:a(()=>[t(S)]),_:2},1032,["onClick"])):C("",!0)],64)):C("",!0)]),_:1},8,["row-selection","columns","row-key","data-source","pagination","loading","onChange"])])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})],64)}const je=B(ve,[["render",Ae]]);export{je as default};
