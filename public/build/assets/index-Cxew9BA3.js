import{_ as le,d as me,r as g,o as s,i as m,w as n,a as o,X as ce,aw as pe,R as _e,az as ye,aA as fe,at as ge,aT as ve,Y as he,f as y,z as oe,b as be,E as Ce,a6 as x,V as se,c as f,G as v,ax as G,l as p,t as _,bf as ke,bk as we,M as J,k as r,j as re,ay as Te,aB as De,aC as Se,B as Ee,a0 as Ue,q as Ae,aD as Oe,aE as Ie,aF as Ke,h as Me,an as Pe,ao as Ve,ar as Be,bl as Fe,J as Re,aG as Ne}from"./app-C0nSYaKm.js";import{c as ze}from"./crud-Dcw9U0R1.js";import{A as He,f as Le}from"./fields-BNLwMFUA.js";import{U as We}from"./UserInfo-D4daqlJx.js";import{S as Ye}from"./StateWidget-DxvKBaXE.js";import{A as je}from"./AdminPageHeader-CxROj0Jz.js";import{T as qe,U as xe,a as Ge}from"./View-59qUhKdT.js";import{I as Je}from"./Import-VroF3uJl.js";import{a as Xe}from"./apiAdmin-BaYfbjIk.js";import{A as $e,a as Qe}from"./ArrowUpOutlined-CgZc2vM3.js";import{S as Ze}from"./SaveOutlined-CzxRU1lI.js";import{C as ea}from"./CloudDownloadOutlined-CfuLNukN.js";import"./datatable-CEAoEVo1.js";import"./filter-CrfvOVpZ.js";import"./Upload-DBAUaknL.js";import"./AddButton-Cntv5i45.js";import"./AddEdit-gWfamoQz.js";import"./SettingOutlined-DjleinS7.js";import"./AddButton-DeCARCBI.js";import"./AddEdit-DiAzuuhI.js";import"./index-DCENP9RP.js";import"./UploadFile-CnCW9r4v.js";const aa=me({props:["visible","user"],components:{Transactions:qe},setup(e,{emit:u}){const{loading:S,rules:a}=Xe();return{loading:S,rules:a,onClose:()=>{u("closed")}}}});function ta(e,u,S,a,T,E){const P=g("Transactions"),V=ce;return s(),m(V,{open:e.visible,centered:!0,title:e.$t("payments.transactions"),onCancel:e.onClose,width:"40%",footer:!1},{default:n(()=>[o(P,{user_id:e.user.xid,result_type:e.user.user_type=="staff_members"?"staff_member":"customer_supplier"},null,8,["user_id","result_type"])]),_:1},8,["open","title","onCancel"])}const na=le(aa,[["render",ta]]),oa={components:{EyeOutlined:pe,PlusOutlined:_e,EditOutlined:ye,DeleteOutlined:fe,ArrowUpOutlined:$e,ArrowDownOutlined:Qe,AddEdit:He,UserInfo:We,StateWidget:Ye,AdminPageHeader:je,UserBalance:xe,UserView:Ge,ImportUsers:Je,UserTransaction:na,SyncOutlined:ge,SaveOutlined:Ze,LoadingOutlined:ve,CloudDownloadOutlined:ea},setup(){const{t:e}=he(),u=y(!1),S=y(!1),a=y(0),T=y(!1),E=y(null);oe();const{statusColors:P,userStatus:V,permsArray:B,formatDateTime:X,user:$,selectedWarehouse:Q,formatAmountCurrency:b}=be(),{supplierInitData:W,customerInitData:Y,staffMemberInitData:F,columns:j,supplierCustomerColumns:C,filterableColumns:R}=Le(),i=ze(),k=oe(),w=y(k.meta.menuKey),U="?fields=id,district,ministry,province,total,period,nrc_no,man_no,employee_no,xid,user_type,name,email,profile_image,profile_image_url,is_walkin_customer,phone,address,shipping_address,status,tax_number,created_at,details{opening_balance,opening_balance_type,credit_period,credit_limit,due_amount,warehouse_id,x_warehouse_id},details:warehouse{id,xid,name},role_id,role{id,xid,name,display_name},warehouse_id,x_warehouse_id,warehouse{xid,name},userWarehouses{user_id,x_user_id,warehouse_id,x_warehouse_id}",A=y(void 0),Z=y("all"),h=y("all"),O=y([]),I=y(""),K=y(""),M=y(""),N=y(!1),q=y(""),ee=l=>{N.value=!0,q.value=l},ae=()=>{N.value=!1},te=async()=>{u.value=!0;let l=E.value;if(!E){const c=new Date,D=c.getFullYear(),L=c.getMonth()+1;l=`${D}${L.toString().padStart(2,"0")}`}try{const c=await axiosAdmin.get(`period-api-data-import-session/${l}`);G.success({placement:"topRight",message:e("common.success"),description:"Employees updated data has been successfully fetched in session"})}catch{G.error({placement:"topRight",message:e("common.error"),description:"Something went wrong"})}finally{u.value=!1}},ne=async()=>{S.value=!0;try{const l=await axiosAdmin.get("process-session-import-data");G.success({placement:"topRight",message:e("common.success"),description:"Employees updated data has been successfully saved in the database"})}catch{G.error({placement:"topRight",message:e("common.error"),description:"No employees found in session"})}finally{S.value=!1}};Ce(()=>{let l=window.location.href;console.log(l),l.includes("admin/customers")?T.value=!0:T.value=!1,d(),i.table.filterableColumns=R,z(),t()});const t=async()=>{try{axiosAdmin.get("total-member").then(l=>{a.value=l.data.data??0})}catch{console.log("something went wrong")}},z=()=>{w.value=="suppliers"?(i.initData.value={...W},i.formData.value={...W},i.langKey.value="supplier",O.value=C,I.value=window.config.supplier_sample_file,K.value=e("supplier.import_suppliers"),M.value="suppliers/import"):w.value=="customers"?(i.initData.value={...Y},i.formData.value={...Y},i.langKey.value="customer",O.value=C,I.value=window.config.customer_sample_file,K.value=e("customer.import_customers"),M.value="customers/import"):(i.initData.value={...F},i.formData.value={...F},i.langKey.value="staff_member",O.value=j,I.value=window.config.staff_member_sample_file,K.value=e("staff_member.import_staff_members"),M.value="users/import"),i.restFormData()},d=()=>{i.crudUrl.value=w.value;var l="",c={};A.value!=null&&A.value!="all"&&(l+=`status eq "${A.value}"`),h.value!=null&&h.value!="all"&&w.value!="users"&&(c.search_due_type=h.value),i.tableUrl.value={url:`${w.value}${U}`,filterString:l,extraFilters:c},i.fetch({page:1})};x(()=>k.meta.menuKey,(l,c)=>{(k.meta.menuKey=="users"||k.meta.menuKey=="customers"||k.meta.menuKey=="suppliers")&&(w.value=k.meta.menuKey,A.value=void 0,i.table.searchColumn=void 0,i.table.searchString="",h.value="all",d(),z())}),x(Q,(l,c)=>{d()}),x(E,l=>{E.value=l,console.log("Selected Month changed to:",l)}),x(k,(l,c)=>{let D=l.path;console.log({current_url:D}),D.includes("admin/customers")?T.value=!0:T.value=!1});const H=se(()=>{let l=0;return i.table.data.forEach(c=>{c&&c.details&&c.details.due_amount&&(l+=c.details.due_amount)}),{totalOpeningBalance:l}}),ie=se(()=>{const l=[],c=new Date;for(let D=0;D<12;D++){const L=new Date(c);L.setMonth(c.getMonth()-D);const ue=L.getFullYear(),de=(L.getMonth()+1).toString().padStart(2,"0");l.push(`${ue}${de}`)}return l});return{statusColors:P,userStatus:V,filterableColumns:R,userType:w,tableColumns:O,searchStatus:A,setUrlData:d,searchDueType:h,activeTabKey:Z,...i,permsArray:B,transactionVisible:N,formatDateTime:X,user:$,formatAmountCurrency:b,sampleFileUrl:I,importPageTitle:K,importUrl:M,totals:H,months:ie,onCloseTransactions:ae,openTransactions:ee,modelData:q,syncEmployees:te,updateEmployees:ne,isSyncing:u,isUpdating:S,totalMembers:a,employeesPage:T,selectedMonth:E}}},sa=re("option",{value:""},"Select Period",-1),la=["value"],ra={class:"table-responsive"};function ia(e,u,S,a,T,E){const P=Te,V=g("router-link"),B=De,X=Se,$=g("AdminPageHeader"),Q=g("SyncOutlined"),b=Ee,W=g("SaveOutlined"),Y=g("PlusOutlined"),F=Ue,j=g("DeleteOutlined"),C=Ae,R=Ne,i=Oe,k=Ie,w=Ke,U=Me,A=g("admin-page-filters"),Z=g("AddEdit"),h=Pe,O=Ve,I=g("user-info"),K=Be,M=Fe,N=g("EyeOutlined"),q=g("EditOutlined"),ee=Re,ae=g("UserView"),te=g("UserTransaction"),ne=g("admin-page-table-content");return s(),f(v,null,[o($,null,{header:n(()=>[o(P,{title:e.$t(`menu.${e.langKey}s`),class:"p-0"},null,8,["title"])]),breadcrumb:n(()=>[o(X,{separator:"-",style:{"font-size":"12px"}},{default:n(()=>[o(B,null,{default:n(()=>[o(V,{to:{name:"admin.dashboard.index"}},{default:n(()=>[p(_(e.$t("menu.dashboard")),1)]),_:1},8,["to"])]),_:1}),o(B,null,{default:n(()=>[p(_(e.$t("menu.parties")),1)]),_:1}),o(B,null,{default:n(()=>[p(_(e.$t(`menu.${e.langKey}s`)),1)]),_:1})]),_:1})]),_:1}),o(A,null,{default:n(()=>[o(U,{gutter:[16,16]},{default:n(()=>[o(C,{xs:24,sm:24,md:12,lg:10,xl:10},{default:n(()=>[o(F,null,{default:n(()=>[a.permsArray.includes(`${a.userType}_create`)||a.permsArray.includes("admin")?(s(),m(F,{key:0},{default:n(()=>[a.employeesPage?ke((s(),f("select",{key:0,"onUpdate:modelValue":u[0]||(u[0]=t=>a.selectedMonth=t),style:{width:"150px","margin-left":"10px"}},[sa,(s(!0),f(v,null,J(a.months,t=>(s(),f("option",{key:t,value:t},_(t),9,la))),128))],512)),[[we,a.selectedMonth]]):r("",!0),a.employeesPage?(s(),m(b,{key:1,type:"primary",onClick:a.syncEmployees,loading:a.isSyncing},{default:n(()=>[a.isSyncing?r("",!0):(s(),m(Q,{key:0})),p(" Sync Employees ")]),_:1},8,["onClick","loading"])):r("",!0),a.employeesPage?(s(),m(b,{key:2,type:"primary",onClick:a.updateEmployees,loading:a.isUpdating},{default:n(()=>[a.isUpdating?r("",!0):(s(),m(W,{key:0})),p(" Update Employees ")]),_:1},8,["onClick","loading"])):r("",!0),a.employeesPage?(s(),m(b,{key:3,type:"primary"},{default:n(()=>[p(_(a.totalMembers)+" Members ",1)]),_:1})):r("",!0),a.employeesPage?r("",!0):(s(),m(b,{key:4,type:"primary",onClick:e.addItem},{default:n(()=>[o(Y)]),_:1},8,["onClick"]))]),_:1})):r("",!0),e.table.selectedRowKeys.length>0&&(a.permsArray.includes(`${a.userType}_delete`)||a.permsArray.includes("admin"))?(s(),m(b,{key:1,type:"primary",onClick:e.showSelectedDeleteConfirm,danger:""},{icon:n(()=>[o(j)]),default:n(()=>[p(" "+_(e.$t("common.delete")),1)]),_:1},8,["onClick"])):r("",!0)]),_:1})]),_:1}),o(C,{xs:24,sm:24,md:12,lg:14,xl:14},{default:n(()=>[o(U,{gutter:[16,16],justify:"end"},{default:n(()=>[o(C,{xs:24,sm:24,md:12,lg:8,xl:8},{default:n(()=>[o(w,{compact:""},{default:n(()=>[o(i,{style:{width:"25%"},value:e.table.searchColumn,"onUpdate:value":u[1]||(u[1]=t=>e.table.searchColumn=t),placeholder:e.$t("common.select_default_text",[""])},{default:n(()=>[(s(!0),f(v,null,J(a.filterableColumns,t=>(s(),m(R,{key:t.key},{default:n(()=>[p(_(t.value),1)]),_:2},1024))),128))]),_:1},8,["value","placeholder"]),o(k,{style:{width:"75%"},value:e.table.searchString,"onUpdate:value":u[2]||(u[2]=t=>e.table.searchString=t),"show-search":"",onChange:e.onTableSearch,onSearch:e.onTableSearch,loading:e.table.filterLoading},null,8,["value","onChange","onSearch","loading"])]),_:1})]),_:1}),a.userType&&a.userType!="users"?(s(),m(C,{key:0,xs:24,sm:24,md:12,lg:6,xl:6},{default:n(()=>[o(i,{value:a.searchStatus,"onUpdate:value":u[3]||(u[3]=t=>a.searchStatus=t),onChange:a.setUrlData,"show-search":"",style:{width:"100%"},placeholder:e.$t("common.select_default_text",[e.$t("user.status")]),allowClear:!0,optionFilterProp:"label"},{default:n(()=>[(s(!0),f(v,null,J(a.userStatus,t=>(s(),m(R,{key:t.key,value:t.key,label:t.value},{default:n(()=>[p(_(t.value),1)]),_:2},1032,["value","label"]))),128))]),_:1},8,["value","onChange","placeholder"])]),_:1})):r("",!0)]),_:1})]),_:1})]),_:1})]),_:1}),o(ne,null,{default:n(()=>[o(Z,{addEditType:e.addEditType,visible:e.addEditVisible,url:e.addEditUrl,onAddEditSuccess:e.addEditSuccess,onClosed:e.onCloseAddEdit,addEditData:e.formData,data:e.viewData,pageTitle:e.pageTitle,successMessage:e.successMessage},null,8,["addEditType","visible","url","onAddEditSuccess","onClosed","addEditData","data","pageTitle","successMessage"]),a.userType&&a.userType=="users"?(s(),m(U,{key:0},{default:n(()=>[o(C,{span:24},{default:n(()=>[o(O,{activeKey:a.searchStatus,"onUpdate:activeKey":u[4]||(u[4]=t=>a.searchStatus=t),onChange:a.setUrlData},{default:n(()=>[o(h,{key:"all",tab:`${e.$t("common.all")} ${e.$t("menu.users")}`},null,8,["tab"]),(s(!0),f(v,null,J(a.userStatus,t=>(s(),m(h,{key:t.key,tab:`${t.value} ${e.$t("menu.users")}`},null,8,["tab"]))),128))]),_:1},8,["activeKey","onChange"])]),_:1})]),_:1})):r("",!0),a.userType&&a.userType!="users"?(s(),m(U,{key:1},{default:n(()=>[o(C,{span:24},{default:n(()=>[o(O,{activeKey:a.searchDueType,"onUpdate:activeKey":u[5]||(u[5]=t=>a.searchDueType=t),onChange:a.setUrlData},{default:n(()=>[o(h,{key:"all",tab:`${e.$t("common.all")}`},null,8,["tab"]),o(h,{key:"receive",tab:`${e.$t("user.to_receive")}`},null,8,["tab"]),o(h,{key:"pay",tab:`${e.$t("user.to_pay")}`},null,8,["tab"])]),_:1},8,["activeKey","onChange"])]),_:1})]),_:1})):r("",!0),o(U,{gutter:[15,15]},{default:n(()=>[o(C,{span:24},{default:n(()=>[re("div",ra,[o(ee,{"row-selection":{selectedRowKeys:e.table.selectedRowKeys,onChange:e.onRowSelectChange,getCheckboxProps:t=>({disabled:!!(a.user.xid==t.xid||t.is_walkin_customer),name:t.xid})},columns:a.tableColumns,"row-key":t=>t.xid,"data-source":e.table.data,pagination:e.table.pagination,loading:e.table.loading,onChange:e.handleTableChange,bordered:"",size:"middle"},{bodyCell:n(({column:t,text:z,record:d})=>[t.dataIndex==="name"?(s(),m(K,{key:0,type:"primary",onClick:H=>e.viewItem(d)},{default:n(()=>[o(I,{user:d},null,8,["user"])]),_:2},1032,["onClick"])):r("",!0),t.dataIndex==="status"?(s(),m(M,{key:1,color:a.statusColors[z]},{default:n(()=>[p(_(e.$t(`common.${z}`)),1)]),_:2},1032,["color"])):r("",!0),t.dataIndex==="ministry"?(s(),f(v,{key:2},[p(_(d.ministry),1)],64)):r("",!0),t.dataIndex==="nrc_no"?(s(),f(v,{key:3},[p(_(d.nrc_no),1)],64)):r("",!0),t.dataIndex==="man_no"?(s(),f(v,{key:4},[p(_(d.man_no),1)],64)):r("",!0),t.dataIndex==="employee_id"?(s(),f(v,{key:5},[p(_(d.employee_id),1)],64)):r("",!0),t.dataIndex==="total"?(s(),f(v,{key:6},[p(_(d.total),1)],64)):r("",!0),t.dataIndex==="period"?(s(),f(v,{key:7},[p(_(d.period),1)],64)):r("",!0),t.dataIndex==="created_at"?(s(),f(v,{key:8},[p(_(a.formatDateTime(d.created_at)),1)],64)):r("",!0),t.dataIndex==="action"?(s(),f(v,{key:9},[o(b,{type:"primary",onClick:H=>e.viewItem(d),style:{"margin-left":"4px"}},{icon:n(()=>[o(N)]),_:2},1032,["onClick"]),a.permsArray.includes(`${a.userType}_edit`)||a.permsArray.includes("admin")?(s(),m(b,{key:0,type:"primary",onClick:H=>e.editItem(d),style:{"margin-left":"4px"}},{icon:n(()=>[o(q)]),_:2},1032,["onClick"])):r("",!0),(a.permsArray.includes(`${a.userType}_delete`)||a.permsArray.includes("admin"))&&a.user.xid!=d.xid&&!d.is_walkin_customer?(s(),m(b,{key:1,type:"primary",onClick:H=>e.showDeleteConfirm(d.xid),style:{"margin-left":"4px"}},{icon:n(()=>[o(j)]),_:2},1032,["onClick"])):r("",!0)],64)):r("",!0)]),_:1},8,["row-selection","columns","row-key","data-source","pagination","loading","onChange"])])]),_:1})]),_:1}),o(ae,{user:e.viewData,visible:e.detailsVisible,onClosed:e.onCloseDetails},null,8,["user","visible","onClosed"]),o(te,{user:a.modelData,visible:a.transactionVisible,onClosed:a.onCloseTransactions},null,8,["user","visible","onClosed"])]),_:1})],64)}const Ia=le(oa,[["render",ia]]);export{Ia as default};
