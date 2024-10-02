import{Y as X,_ as q,d as Y,Q as R,aT as J,aU as Z,b as z,r as M,V as x,a6 as ee,o,g as C,w as a,a as n,j as v,t as u,c as _,L as I,D as E,i as f,ak as B,I as ae,m as ne,q as H,f as K,p as c,B as L,F as te,X as oe,az as le,aA as se,z as ie,h as de,ay as re,aB as ue,aC as me,a0 as ce,aD as pe,aE as _e,aF as fe,G as ve,aG as ge}from"./app-OikDM5Kw.js";import{c as ye}from"./crud-BXjQ0O-i.js";import{a as be}from"./apiAdmin-yFrp6bZq.js";import{U as he}from"./Upload-D5F1bEQ_.js";import{F as ke}from"./FormItemHeading-C_zGUfEl.js";import{S as Ce}from"./SaveOutlined-BSR-wlKo.js";import{s as P}from"./some-BxTyXH2q.js";import{A as Se}from"./AdminPageHeader-MbAN4P4t.js";import"./datatable-DjynKO_7.js";import"./filter-CQCFHrIe.js";import"./index-CaGusbUe.js";const we=()=>{const e="variations?fields=id,xid,name,parent_id,x_parent_id,subVariation{id,xid,parent_id,x_parent_id,name}",d="variations",{t:p}=X(),l=["parent_id"],y={name:"",parent_id:void 0},S=[{title:p("variation.name"),dataIndex:"name",sorter:!0},{title:p("variation.value"),dataIndex:"value"},{title:p("common.action"),dataIndex:"action"}],t=[{key:"name",value:p("variation.name")}];return{url:e,addEditUrl:d,initData:y,columns:S,filterableColumns:t,hashableColumns:l}},Ee=Y({props:["formData","data","visible","url","addEditType","pageTitle","successMessage"],components:{PlusOutlined:R,LoadingOutlined:J,SaveOutlined:Ce,Upload:he,MinusSquareOutlined:Z,FormItemHeading:ke},setup(e,{emit:d}){const{addEditRequestAdmin:p,loading:l,rules:y}=be(),{slugify:S}=z(),t=M([{name:"",id:""}]),g=M([]),m=()=>{var r={...e.formData,value:A(),removed_variations:g.value};p({url:e.url,data:r,successMessage:e.successMessage,success:s=>{d("addEditSuccess",s.xid)}})},$=()=>{t.value.push({name:"",id:""})},A=()=>{var r=[];return B(t.value,s=>{s.name!=""&&r.push(s)}),r},D=x(()=>t.value.length==0?!1:P(t.value,{name:""})||P(t.value,{name:null})),b=r=>{let s=t.value.indexOf(r);s!==-1&&t.value.splice(s,1),r.id!=""&&g.value.push(r.id)},h=()=>{y.value={},d("closed")};return ee(()=>e.visible,(r,s)=>{e.visible&&(t.value=[],e.addEditType=="edit"&&B(e.data.sub_variations,O=>{t.value.push({name:O.name,id:O.xid})}))}),{loading:l,rules:y,onClose:h,onSubmit:m,slugify:S,formFields:t,removeFormField:b,addFormField:$,addFormButtonStatus:D,drawerWidth:window.innerWidth<=991?"90%":"45%"}}}),$e={key:0,style:{color:"red"}};function Oe(e,d,p,l,y,S){const t=ae,g=ne,m=H,$=K,A=c("form-item-heading"),D=c("MinusSquareOutlined"),b=c("PlusOutlined"),h=L,r=te,s=c("SaveOutlined"),O=oe;return o(),C(O,{open:e.visible,closable:!1,centered:!0,title:e.pageTitle,onOk:e.onSubmit},{footer:a(()=>[n(h,{key:"submit",type:"primary",loading:e.loading,onClick:e.onSubmit},{icon:a(()=>[n(s)]),default:a(()=>[v(" "+u(e.addEditType=="add"?e.$t("common.create"):e.$t("common.update")),1)]),_:1},8,["loading","onClick"]),n(h,{key:"back",onClick:e.onClose},{default:a(()=>[v(u(e.$t("common.cancel")),1)]),_:1},8,["onClick"])]),default:a(()=>[n(r,{layout:"vertical"},{default:a(()=>[n($,{gutter:16},{default:a(()=>[n(m,{xs:24,sm:24,md:24,lg:24},{default:a(()=>[n(g,{label:e.$t("variation.variation_name"),name:"name",help:e.rules.name?e.rules.name.message:null,validateStatus:e.rules.name?"error":null,class:"required"},{default:a(()=>[n(t,{value:e.formData.name,"onUpdate:value":d[0]||(d[0]=k=>e.formData.name=k),placeholder:e.$t("common.placeholder_default_text",[e.$t("variation.variation_name")])},null,8,["value","placeholder"])]),_:1},8,["label","help","validateStatus"])]),_:1})]),_:1}),n(A,null,{default:a(()=>[v(u(e.$t("variation.variation_values")),1)]),_:1}),(o(!0),_(E,null,I(e.formFields,(k,V)=>(o(),C($,{gutter:16,key:k.id,style:{display:"flex","align-items":"center"}},{default:a(()=>[n(m,{xs:24,sm:24,md:23,lg:23},{default:a(()=>[n(g,{label:e.$t("variation.value"),name:"name"},{default:a(()=>[n(t,{value:k.name,"onUpdate:value":F=>k.name=F,placeholder:e.$t("common.placeholder_default_text",[e.$t("variation.value")])},null,8,["value","onUpdate:value","placeholder"])]),_:2},1032,["label"])]),_:2},1024),e.addEditType=="add"?(o(),C(m,{key:0,span:1,style:{"margin-top":"6px"}},{default:a(()=>[n(D,{onClick:F=>e.removeFormField(k)},null,8,["onClick"])]),_:2},1024)):f("",!0)]),_:2},1024))),128)),e.rules.value?(o(),_("p",$e,u(e.rules.value.message),1)):f("",!0),n(m,{xs:24,sm:24,md:24,lg:24},{default:a(()=>[n(g,null,{default:a(()=>[n(h,{type:"dashed",block:"",onClick:e.addFormField,disabled:e.addFormButtonStatus},{default:a(()=>[n(b),v(" "+u(e.$t("variation.add_new_value")),1)]),_:1},8,["onClick","disabled"])]),_:1})]),_:1})]),_:1})]),_:1},8,["open","title","onOk"])}const Ae=q(Ee,[["render",Oe]]),De={components:{PlusOutlined:R,EditOutlined:le,DeleteOutlined:se,AddEdit:Ae,AdminPageHeader:Se},setup(){const{addEditUrl:e,url:d,initData:p,columns:l,filterableColumns:y,hashableColumns:S}=we(),t=ye(),{permsArray:g}=z();return ie(()=>{const m=encodeURIComponent("parent_id eq null");t.tableUrl.value={url:`variations?fields=id,xid,name,parent_id,x_parent_id,subVariations{id,xid,parent_id,x_parent_id,name}&filters=${m}`},t.table.filterableColumns=y,t.fetch({page:1}),t.crudUrl.value=e,t.langKey.value="variation",t.initData.value={...p},t.formData.value={...p},t.hashableColumns.value=[...S]}),{columns:l,...t,filterableColumns:y,permsArray:g}}},Fe={class:"table-responsive"},Te={key:0},Ue={key:0};function Ie(e,d,p,l,y,S){const t=re,g=c("router-link"),m=ue,$=me,A=c("AdminPageHeader"),D=c("PlusOutlined"),b=L,h=c("DeleteOutlined"),r=ce,s=H,O=ge,k=pe,V=_e,F=fe,T=K,N=c("admin-page-filters"),j=c("AddEdit"),G=c("EditOutlined"),W=ve,Q=c("admin-page-table-content");return o(),_(E,null,[n(A,null,{header:a(()=>[n(t,{title:e.$t("menu.variations"),class:"p-0"},null,8,["title"])]),breadcrumb:a(()=>[n($,{separator:"-",style:{"font-size":"12px"}},{default:a(()=>[n(m,null,{default:a(()=>[n(g,{to:{name:"admin.dashboard.index"}},{default:a(()=>[v(u(e.$t("menu.dashboard")),1)]),_:1})]),_:1}),n(m,null,{default:a(()=>[v(u(e.$t("menu.product_manager")),1)]),_:1}),n(m,null,{default:a(()=>[v(u(e.$t("menu.variations")),1)]),_:1})]),_:1})]),_:1}),n(N,null,{default:a(()=>[n(T,{gutter:[16,16]},{default:a(()=>[n(s,{xs:24,sm:24,md:12,lg:10,xl:10},{default:a(()=>[n(r,null,{default:a(()=>[l.permsArray.includes("variations_create")||l.permsArray.includes("admin")?(o(),C(b,{key:0,type:"primary",onClick:e.addItem},{default:a(()=>[n(D),v(" "+u(e.$t("variation.add")),1)]),_:1},8,["onClick"])):f("",!0),e.table.selectedRowKeys.length>0&&(l.permsArray.includes("variations_delete")||l.permsArray.includes("admin"))?(o(),C(b,{key:1,type:"primary",onClick:e.showSelectedDeleteConfirm,danger:""},{icon:a(()=>[n(h)]),default:a(()=>[v(" "+u(e.$t("common.delete")),1)]),_:1},8,["onClick"])):f("",!0)]),_:1})]),_:1}),n(s,{xs:24,sm:24,md:12,lg:14,xl:14},{default:a(()=>[n(T,{gutter:[16,16],justify:"end"},{default:a(()=>[n(s,{xs:24,sm:24,md:12,lg:8,xl:8},{default:a(()=>[n(F,{compact:""},{default:a(()=>[n(k,{style:{width:"25%"},value:e.table.searchColumn,"onUpdate:value":d[0]||(d[0]=i=>e.table.searchColumn=i),placeholder:e.$t("common.select_default_text",[""])},{default:a(()=>[(o(!0),_(E,null,I(l.filterableColumns,i=>(o(),C(O,{key:i.key},{default:a(()=>[v(u(i.value),1)]),_:2},1024))),128))]),_:1},8,["value","placeholder"]),n(V,{style:{width:"75%"},value:e.table.searchString,"onUpdate:value":d[1]||(d[1]=i=>e.table.searchString=i),"show-search":"",onChange:e.onTableSearch,onSearch:e.onTableSearch,loading:e.table.filterLoading},null,8,["value","onChange","onSearch","loading"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),n(Q,null,{default:a(()=>[n(j,{addEditType:e.addEditType,visible:e.addEditVisible,url:e.addEditUrl,onAddEditSuccess:e.addEditSuccess,onClosed:e.onCloseAddEdit,formData:e.formData,data:e.viewData,pageTitle:e.pageTitle,successMessage:e.successMessage},null,8,["addEditType","visible","url","onAddEditSuccess","onClosed","formData","data","pageTitle","successMessage"]),n(T,null,{default:a(()=>[n(s,{span:24},{default:a(()=>[de("div",Fe,[n(W,{"row-selection":{selectedRowKeys:e.table.selectedRowKeys,onChange:e.onRowSelectChange,getCheckboxProps:i=>({disabled:!1,name:i.xid})},columns:l.columns,"row-key":i=>i.xid,"data-source":e.table.data,pagination:e.table.pagination,loading:e.table.loading,onChange:e.handleTableChange,bordered:"",size:"middle"},{bodyCell:a(({column:i,record:w})=>[i.dataIndex==="name"?(o(),_(E,{key:0},[w.x_parent_id==""?(o(),_("span",Te,[n(T,{gutter:[16,16],style:{"margin-top":"10px"}},{default:a(()=>[n(s,{xs:24,sm:24,md:24,lg:24},{default:a(()=>[v(u(w.x_parent_id==""?w.name:""),1)]),_:2},1024)]),_:2},1024)])):f("",!0)],64)):f("",!0),i.dataIndex==="value"?(o(),_(E,{key:1},[w.sub_variations.length>0?(o(),_("ul",Ue,[(o(!0),_(E,null,I(w.sub_variations,U=>(o(),_("li",{key:U.name},u(U.name),1))),128))])):f("",!0)],64)):f("",!0),i.dataIndex==="action"?(o(),_(E,{key:2},[l.permsArray.includes("variations_edit")||l.permsArray.includes("admin")?(o(),C(b,{key:0,type:"primary",onClick:U=>e.editItem(w),style:{"margin-left":"4px"}},{icon:a(()=>[n(G)]),_:2},1032,["onClick"])):f("",!0),l.permsArray.includes("variations_delete")||l.permsArray.includes("admin")?(o(),C(b,{key:1,type:"primary",onClick:U=>e.showDeleteConfirm(w.xid),style:{"margin-left":"4px"}},{icon:a(()=>[n(h)]),_:2},1032,["onClick"])):f("",!0)],64)):f("",!0)]),_:1},8,["row-selection","columns","row-key","data-source","pagination","loading","onChange"])])]),_:1})]),_:1})]),_:1})],64)}const je=q(De,[["render",Ie]]);export{je as default};
