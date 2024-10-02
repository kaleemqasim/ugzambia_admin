import{_ as ie,d as pe,r as u,o as l,i as d,w as n,a as t,X as ue,aw as _e,R as fe,az as ye,aA as ge,Y as be,b as ve,z as he,f as m,E as ne,a6 as se,V as Ce,av as we,b8 as V,c as T,G as D,l as c,t as p,k as _,j as re,N as ke,M as $,ab as Te,ay as Ue,aB as De,aC as Ae,B as Se,a0 as Oe,aD as Ee,n as Ie,F as Ke,q as Ve,aE as Pe,aF as Me,h as Be,an as Fe,ao as Le,ar as Ne,bk as ze,aL as Re,aM as He,H as We,aN as je,J as qe,aG as Ge}from"./app-DvNATx7Y.js";import{c as Je}from"./crud-D_5AFYm7.js";import{A as Xe,f as Ye}from"./fields-BmbrdO_7.js";import{U as Qe}from"./UserInfo-BLXDo1tT.js";import{S as Ze}from"./StateWidget-lEuU7mXb.js";import{A as $e}from"./AdminPageHeader-BPh6CuL6.js";import{T as xe,U as ea,a as aa}from"./View-FYaYYQ7N.js";import{I as ta}from"./Import-Csd6SmQT.js";import{a as na}from"./apiAdmin-DqdlX2Lq.js";import{A as oa,a as la}from"./ArrowUpOutlined-DaaFLsNr.js";import"./datatable-ChDCLVWf.js";import"./filter-BEo08sjD.js";import"./Upload-B1S3qWAF.js";import"./AddButton-H-wVgeKn.js";import"./AddEdit-CqWzPjhL.js";import"./SaveOutlined-CMUQh6R8.js";import"./SettingOutlined-Cyv_dmap.js";import"./AddButton-Cp1J059N.js";import"./AddEdit-DePc1g0l.js";import"./index-CvRpe2mf.js";import"./UploadFile-CsTx-X4S.js";import"./CloudDownloadOutlined-CkElfteA.js";const sa=pe({props:["visible","user"],components:{Transactions:xe},setup(a,{emit:r}){const{loading:P,rules:e}=na();return{loading:P,rules:e,onClose:()=>{r("closed")}}}});function ra(a,r,P,e,z,x){const M=u("Transactions"),B=ue;return l(),d(B,{open:a.visible,centered:!0,title:a.$t("payments.transactions"),onCancel:a.onClose,width:"40%",footer:!1},{default:n(()=>[t(M,{user_id:a.user.xid,result_type:a.user.user_type=="staff_members"?"staff_member":"customer_supplier"},null,8,["user_id","result_type"])]),_:1},8,["open","title","onCancel"])}const ia=ie(sa,[["render",ra]]),ua={components:{EyeOutlined:_e,PlusOutlined:fe,EditOutlined:ye,DeleteOutlined:ge,ArrowUpOutlined:oa,ArrowDownOutlined:la,AddEdit:Xe,UserInfo:Qe,StateWidget:Ze,AdminPageHeader:$e,UserBalance:ea,UserView:aa,ImportUsers:ta,UserTransaction:ia},setup(){const{t:a}=be(),{statusColors:r,userStatus:P,permsArray:e,formatDateTime:z,user:x,selectedWarehouse:M,formatAmountCurrency:B}=ve(),{supplierInitData:E,customerInitData:R,staffMemberInitData:H,columns:ee,supplierCustomerColumns:g,filterableColumns:W}=Ye(),i=Je(),k=he(),b=m(k.meta.menuKey),F="?fields=id,xid,user_type,name,email,profile_image,profile_image_url,is_walkin_customer,phone,address,shipping_address,status,tax_number,created_at,details{opening_balance,opening_balance_type,credit_period,credit_limit,due_amount,warehouse_id,x_warehouse_id},details:warehouse{id,xid,name},role_id,role{id,xid,name,display_name},warehouse_id,x_warehouse_id,warehouse{xid,name},userWarehouses{user_id,x_user_id,warehouse_id,x_warehouse_id}",U=m(void 0),ae=m("all"),A=m("all"),f=m([]),I=m(""),K=m(""),h=m(""),L=m(!1),j=m(""),S=s=>{L.value=!0,j.value=s},q=()=>{L.value=!1};ne(()=>{C(),i.table.filterableColumns=W,G()});const G=()=>{b.value=="suppliers"?(i.initData.value={...E},i.formData.value={...E},i.langKey.value="supplier",f.value=g,I.value=window.config.supplier_sample_file,K.value=a("supplier.import_suppliers"),h.value="suppliers/import"):b.value=="customers"?(i.initData.value={...R},i.formData.value={...R},i.langKey.value="customer",f.value=g,I.value=window.config.customer_sample_file,K.value=a("customer.import_customers"),h.value="customers/import"):(i.initData.value={...H},i.formData.value={...H},i.langKey.value="staff_member",f.value=ee,I.value=window.config.staff_member_sample_file,K.value=a("staff_member.import_staff_members"),h.value="users/import"),i.restFormData()},C=()=>{i.crudUrl.value=b.value;var s="",v={};U.value!=null&&U.value!="all"&&(s+=`status eq "${U.value}"`),A.value!=null&&A.value!="all"&&b.value!="users"&&(v.search_due_type=A.value),i.tableUrl.value={url:`${b.value}${F}`,filterString:s,extraFilters:v},i.fetch({page:1})};se(()=>k.meta.menuKey,(s,v)=>{(k.meta.menuKey=="users"||k.meta.menuKey=="customers"||k.meta.menuKey=="suppliers")&&(b.value=k.meta.menuKey,U.value=void 0,i.table.searchColumn=void 0,i.table.searchString="",A.value="all",C(),G())}),se(M,(s,v)=>{C()});const te=Ce(()=>{let s=0;return i.table.data.forEach(v=>{v&&v.details&&v.details.due_amount&&(s+=v.details.due_amount)}),{totalOpeningBalance:s}}),J=m(!1),X=m([]),N=m(null),y=m(!1);ne(async()=>{try{const s=await we.get("https://api.ugzambia.net/api/data-import-period");X.value=s.data.import_period}catch{V.error("Failed to fetch import periods.")}});const Y=async()=>{if(N.value){y.value=!0;try{const s=await axiosAdmin.get(`/period-api-data-import?period_id=${N.value}`);console.log("API Response:",s.data.data),s.status===200?(await C(),V.success(s.data.message||"Data imported successfully."),y.value=!1,J.value=!1):(V.error(s.data.message||"Failed to import data."),y.value=!1)}catch(s){console.error("API Error:",s),V.error("An error occurred while importing data."),await C(),y.value=!1}}else V.error("Please select an import period."),y.value=!1},Q=m(0),Z=async()=>{try{const s=await axiosAdmin.get("/total-member");Q.value=s.data.data,await C()}catch(s){console.error("Failed to fetch member count:",s)}};return ne(()=>{Z()}),{isModalVisible:J,importPeriods:X,selectedPeriod:N,handleSubmit:Y,loading:y,resetLoading:()=>{y.value=!1},memberCount:Q,message:V,statusColors:r,userStatus:P,filterableColumns:W,userType:b,tableColumns:f,searchStatus:U,setUrlData:C,searchDueType:A,activeTabKey:ae,...i,permsArray:e,transactionVisible:L,formatDateTime:z,user:x,formatAmountCurrency:B,sampleFileUrl:I,importPageTitle:K,importUrl:h,totals:te,onCloseTransactions:q,openTransactions:S,modelData:j}}},da={class:"table-responsive"},ma={key:0};function ca(a,r,P,e,z,x){const M=Ue,B=u("router-link"),E=De,R=Ae,H=u("AdminPageHeader"),ee=u("PlusOutlined"),g=Se,W=u("ImportUsers"),i=Oe,k=u("DeleteOutlined"),b=Ge,F=Ee,U=Ie,ae=Ke,A=ue,f=Ve,I=Pe,K=Me,h=Be,L=u("admin-page-filters"),j=u("AddEdit"),S=Fe,q=Le,G=u("user-info"),C=Ne,te=ze,J=u("UserBalance"),X=u("EyeOutlined"),N=u("EditOutlined"),y=Re,Y=He,Q=u("ArrowUpOutlined"),Z=We,oe=u("ArrowDownOutlined"),s=je,v=qe,de=u("UserView"),me=u("UserTransaction"),ce=u("admin-page-table-content");return l(),T(D,null,[t(H,null,{header:n(()=>[t(M,{title:a.$t(`menu.${a.langKey}s`),class:"p-0"},null,8,["title"])]),breadcrumb:n(()=>[t(R,{separator:"-",style:{"font-size":"12px"}},{default:n(()=>[t(E,null,{default:n(()=>[t(B,{to:{name:"admin.dashboard.index"}},{default:n(()=>[c(p(a.$t("menu.dashboard")),1)]),_:1},8,["to"])]),_:1}),t(E,null,{default:n(()=>[c(p(a.$t("menu.parties")),1)]),_:1}),t(E,null,{default:n(()=>[c(p(a.$t(`menu.${a.langKey}s`)),1)]),_:1})]),_:1})]),_:1}),t(L,null,{default:n(()=>[t(h,{gutter:[16,16]},{default:n(()=>[t(f,{xs:24,sm:24,md:12,lg:10,xl:10},{default:n(()=>[t(i,null,{default:n(()=>[e.permsArray.includes(`${e.userType}_create`)||e.permsArray.includes("admin")?(l(),d(i,{key:0},{default:n(()=>[t(g,{type:"primary",onClick:a.addItem},{default:n(()=>[t(ee),c(" "+p(a.$t(`${a.langKey}.add`)),1)]),_:1},8,["onClick"]),t(W,{pageTitle:e.importPageTitle,sampleFileUrl:e.sampleFileUrl,importUrl:e.importUrl,onOnUploadSuccess:e.setUrlData},null,8,["pageTitle","sampleFileUrl","importUrl","onOnUploadSuccess"])]),_:1})):_("",!0),a.table.selectedRowKeys.length>0&&(e.permsArray.includes(`${e.userType}_delete`)||e.permsArray.includes("admin"))?(l(),d(g,{key:1,type:"primary",onClick:a.showSelectedDeleteConfirm,danger:""},{icon:n(()=>[t(k)]),default:n(()=>[c(" "+p(a.$t("common.delete")),1)]),_:1},8,["onClick"])):_("",!0),t(g,{type:"primary",onClick:r[0]||(r[0]=o=>e.isModalVisible=!0),danger:""},{default:n(()=>[c(" Import Member Data ")]),_:1}),t(g,null,{default:n(()=>[re("strong",null,"Members: "+p(e.memberCount),1)]),_:1}),t(A,{visible:e.isModalVisible,"onUpdate:visible":r[2]||(r[2]=o=>e.isModalVisible=o),title:"Import Member Data",onCancel:e.resetLoading},{default:n(()=>[t(ae,{onSubmit:ke(e.handleSubmit,["prevent"])},{default:n(()=>[t(U,{label:"Select Import Period"},{default:n(()=>[t(F,{value:e.selectedPeriod,"onUpdate:value":r[1]||(r[1]=o=>e.selectedPeriod=o),placeholder:"Select an import period"},{default:n(()=>[(l(!0),T(D,null,$(e.importPeriods,o=>(l(),d(b,{key:o,value:o},{default:n(()=>[c(p(o),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])]),_:1}),t(U,null,{default:n(()=>[t(g,{type:"primary","html-type":"submit",loading:e.loading},{default:n(()=>[c(" Submit ")]),_:1},8,["loading"])]),_:1})]),_:1},8,["onSubmit"])]),_:1},8,["visible","onCancel"])]),_:1})]),_:1}),t(f,{xs:24,sm:24,md:12,lg:14,xl:14},{default:n(()=>[t(h,{gutter:[16,16],justify:"end"},{default:n(()=>[t(f,{xs:24,sm:24,md:12,lg:8,xl:8},{default:n(()=>[t(K,{compact:""},{default:n(()=>[t(F,{style:{width:"25%"},value:a.table.searchColumn,"onUpdate:value":r[3]||(r[3]=o=>a.table.searchColumn=o),placeholder:a.$t("common.select_default_text",[""])},{default:n(()=>[(l(!0),T(D,null,$(e.filterableColumns,o=>(l(),d(b,{key:o.key},{default:n(()=>[c(p(o.value),1)]),_:2},1024))),128))]),_:1},8,["value","placeholder"]),t(I,{style:{width:"75%"},value:a.table.searchString,"onUpdate:value":r[4]||(r[4]=o=>a.table.searchString=o),"show-search":"",onChange:a.onTableSearch,onSearch:a.onTableSearch,loading:a.table.filterLoading},null,8,["value","onChange","onSearch","loading"])]),_:1})]),_:1}),e.userType&&e.userType!="users"?(l(),d(f,{key:0,xs:24,sm:24,md:12,lg:6,xl:6},{default:n(()=>[t(F,{value:e.searchStatus,"onUpdate:value":r[5]||(r[5]=o=>e.searchStatus=o),onChange:e.setUrlData,"show-search":"",style:{width:"100%"},placeholder:a.$t("common.select_default_text",[a.$t("user.status")]),allowClear:!0,optionFilterProp:"label"},{default:n(()=>[(l(!0),T(D,null,$(e.userStatus,o=>(l(),d(b,{key:o.key,value:o.key,label:o.value},{default:n(()=>[c(p(o.value),1)]),_:2},1032,["value","label"]))),128))]),_:1},8,["value","onChange","placeholder"])]),_:1})):_("",!0)]),_:1})]),_:1})]),_:1})]),_:1}),t(ce,null,{default:n(()=>[t(j,{addEditType:a.addEditType,visible:a.addEditVisible,url:a.addEditUrl,onAddEditSuccess:a.addEditSuccess,onClosed:a.onCloseAddEdit,addEditData:a.formData,data:a.viewData,pageTitle:a.pageTitle,successMessage:a.successMessage},null,8,["addEditType","visible","url","onAddEditSuccess","onClosed","addEditData","data","pageTitle","successMessage"]),e.userType&&e.userType=="users"?(l(),d(h,{key:0},{default:n(()=>[t(f,{span:24},{default:n(()=>[t(q,{activeKey:e.searchStatus,"onUpdate:activeKey":r[6]||(r[6]=o=>e.searchStatus=o),onChange:e.setUrlData},{default:n(()=>[t(S,{key:"all",tab:`${a.$t("common.all")} ${a.$t("menu.users")}`},null,8,["tab"]),(l(!0),T(D,null,$(e.userStatus,o=>(l(),d(S,{key:o.key,tab:`${o.value} ${a.$t("menu.users")}`},null,8,["tab"]))),128))]),_:1},8,["activeKey","onChange"])]),_:1})]),_:1})):_("",!0),e.userType&&e.userType!="users"?(l(),d(h,{key:1},{default:n(()=>[t(f,{span:24},{default:n(()=>[t(q,{activeKey:e.searchDueType,"onUpdate:activeKey":r[7]||(r[7]=o=>e.searchDueType=o),onChange:e.setUrlData},{default:n(()=>[t(S,{key:"all",tab:`${a.$t("common.all")}`},null,8,["tab"]),t(S,{key:"receive",tab:`${a.$t("user.to_receive")}`},null,8,["tab"]),t(S,{key:"pay",tab:`${a.$t("user.to_pay")}`},null,8,["tab"])]),_:1},8,["activeKey","onChange"])]),_:1})]),_:1})):_("",!0),t(h,{gutter:[15,15]},{default:n(()=>[t(f,{span:24},{default:n(()=>[re("div",da,[t(v,{"row-selection":{selectedRowKeys:a.table.selectedRowKeys,onChange:a.onRowSelectChange,getCheckboxProps:o=>({disabled:!!(e.user.xid==o.xid||o.is_walkin_customer),name:o.xid})},columns:e.tableColumns,"row-key":o=>o.xid,"data-source":a.table.data,pagination:a.table.pagination,loading:a.table.loading,onChange:a.handleTableChange,bordered:"",size:"middle"},Te({bodyCell:n(({column:o,text:le,record:w})=>[o.dataIndex==="name"?(l(),d(C,{key:0,type:"primary",onClick:O=>a.viewItem(w)},{default:n(()=>[t(G,{user:w},null,8,["user"])]),_:2},1032,["onClick"])):_("",!0),o.dataIndex==="status"?(l(),d(te,{key:1,color:e.statusColors[le]},{default:n(()=>[c(p(a.$t(`common.${le}`)),1)]),_:2},1032,["color"])):_("",!0),o.dataIndex==="created_at"?(l(),T(D,{key:2},[c(p(e.formatDateTime(w.created_at)),1)],64)):_("",!0),o.dataIndex==="balance"?(l(),T(D,{key:3},[e.userType&&e.userType!="users"?(l(),d(C,{key:0,type:"primary",onClick:O=>e.openTransactions(w)},{default:n(()=>{var O;return[t(J,{amount:(O=w.details)==null?void 0:O.due_amount},null,8,["amount"])]}),_:2},1032,["onClick"])):_("",!0)],64)):_("",!0),o.dataIndex==="action"?(l(),T(D,{key:4},[t(g,{type:"primary",onClick:O=>a.viewItem(w),style:{"margin-left":"4px"}},{icon:n(()=>[t(X)]),_:2},1032,["onClick"]),e.permsArray.includes(`${e.userType}_edit`)||e.permsArray.includes("admin")?(l(),d(g,{key:0,type:"primary",onClick:O=>a.editItem(w),style:{"margin-left":"4px"}},{icon:n(()=>[t(N)]),_:2},1032,["onClick"])):_("",!0),(e.permsArray.includes(`${e.userType}_delete`)||e.permsArray.includes("admin"))&&e.user.xid!=w.xid&&!w.is_walkin_customer?(l(),d(g,{key:1,type:"primary",onClick:O=>a.showDeleteConfirm(w.xid),style:{"margin-left":"4px"}},{icon:n(()=>[t(k)]),_:2},1032,["onClick"])):_("",!0)],64)):_("",!0)]),_:2},[e.userType&&e.userType!="users"?{name:"summary",fn:n(()=>[t(s,null,{default:n(()=>[t(y,{"col-span":1}),t(y,{"col-span":2}),t(y,{"col-span":1},{default:n(()=>[t(Y,{strong:""},{default:n(()=>[c(p(a.$t("common.total")),1)]),_:1})]),_:1}),t(y,{"col-span":1},{default:n(()=>[t(Y,{strong:""},{default:n(()=>[e.totals.totalOpeningBalance<0?(l(),d(Z,{key:0},{default:n(()=>[t(Q,{style:{color:"red"}}),c(" "+p(e.formatAmountCurrency(e.totals.totalOpeningBalance)),1)]),_:1})):(l(),d(Z,{key:1},{default:n(()=>[e.totals.totalOpeningBalance>0?(l(),T("span",ma,[t(oe,{style:{color:"green"}})])):_("",!0),c(" "+p(e.formatAmountCurrency(e.totals.totalOpeningBalance)),1)]),_:1}))]),_:1})]),_:1})]),_:1})]),key:"0"}:void 0]),1032,["row-selection","columns","row-key","data-source","pagination","loading","onChange"])])]),_:1})]),_:1}),t(de,{user:a.viewData,visible:a.detailsVisible,onClosed:a.onCloseDetails},null,8,["user","visible","onClosed"]),t(me,{user:e.modelData,visible:e.transactionVisible,onClosed:e.onCloseTransactions},null,8,["user","visible","onClosed"])]),_:1})],64)}const Ma=ie(ua,[["render",ca]]);export{Ma as default};