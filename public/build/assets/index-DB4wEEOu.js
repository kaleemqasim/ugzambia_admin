import{_ as ee,d as se,r as _,o,i as p,w as n,a as t,X as oe,aw as le,R as re,az as ie,aA as ue,at as de,aT as me,Y as ce,f as y,b as pe,z as _e,E as ye,a6 as Z,V as fe,c as f,G as g,ax as z,l as d,t as c,k as i,M as Q,j as ge,ay as ve,aB as be,aC as he,B as Ce,a0 as ke,q as we,aD as Te,aE as De,aF as Se,h as Ee,an as Ue,ao as Ae,ar as Oe,bk as Ke,J as Ie,aG as Ve}from"./app-CexwWrww.js";import{c as Me}from"./crud-DTgjvXJw.js";import{A as Be,f as Fe}from"./fields-nxnFUNRt.js";import{U as Pe}from"./UserInfo-BTL8spD4.js";import{S as Re}from"./StateWidget-TbVHM-L1.js";import{A as $e}from"./AdminPageHeader-DjvHfNQF.js";import{T as Ne,U as ze,a as He}from"./View-CVd8qANg.js";import{I as Le}from"./Import-BbD8q3sN.js";import{a as We}from"./apiAdmin-CyDWIvW7.js";import{A as je,a as qe}from"./ArrowUpOutlined-XnfmsSs6.js";import{S as Ge}from"./SaveOutlined-JyEjbJPW.js";import{C as Ye}from"./CloudDownloadOutlined-9FeE6-3Q.js";import"./datatable-CiKZDc0H.js";import"./filter-BWFlT2yD.js";import"./Upload-OaAOhWYH.js";import"./AddButton-D2KyR06O.js";import"./AddEdit-CEFIODpH.js";import"./SettingOutlined-CQkFXEJQ.js";import"./AddButton-vmOX_K8S.js";import"./AddEdit-C8FZl7PI.js";import"./index-BuUhZ1qq.js";import"./UploadFile-CSuVWxX0.js";const xe=se({props:["visible","user"],components:{Transactions:Ne},setup(e,{emit:u}){const{loading:D,rules:a}=We();return{loading:D,rules:a,onClose:()=>{u("closed")}}}});function Je(e,u,D,a,F,H){const K=_("Transactions"),I=oe;return o(),p(I,{open:e.visible,centered:!0,title:e.$t("payments.transactions"),onCancel:e.onClose,width:"40%",footer:!1},{default:n(()=>[t(K,{user_id:e.user.xid,result_type:e.user.user_type=="staff_members"?"staff_member":"customer_supplier"},null,8,["user_id","result_type"])]),_:1},8,["open","title","onCancel"])}const Xe=ee(xe,[["render",Je]]),Qe={components:{EyeOutlined:le,PlusOutlined:re,EditOutlined:ie,DeleteOutlined:ue,ArrowUpOutlined:je,ArrowDownOutlined:qe,AddEdit:Be,UserInfo:Pe,StateWidget:Re,AdminPageHeader:$e,UserBalance:ze,UserView:He,ImportUsers:Le,UserTransaction:Xe,SyncOutlined:de,SaveOutlined:Ge,LoadingOutlined:me,CloudDownloadOutlined:Ye},setup(){const{t:e}=ce(),u=y(!1),D=y(!1),a=y(0),{statusColors:F,userStatus:H,permsArray:K,formatDateTime:I,user:V,selectedWarehouse:L,formatAmountCurrency:W}=pe(),{supplierInitData:P,customerInitData:h,staffMemberInitData:R,columns:$,supplierCustomerColumns:M,filterableColumns:C}=Fe(),l=Me(),w=_e(),T=y(w.meta.menuKey),j="?fields=id,district,ministry,province,total,period,nrc_no,man_no,employee_no,xid,user_type,name,email,profile_image,profile_image_url,is_walkin_customer,phone,address,shipping_address,status,tax_number,created_at,details{opening_balance,opening_balance_type,credit_period,credit_limit,due_amount,warehouse_id,x_warehouse_id},details:warehouse{id,xid,name},role_id,role{id,xid,name,display_name},warehouse_id,x_warehouse_id,warehouse{xid,name},userWarehouses{user_id,x_user_id,warehouse_id,x_warehouse_id}",v=y(void 0),q=y("all"),S=y("all"),k=y([]),E=y(""),A=y(""),O=y(""),B=y(!1),N=y(""),G=r=>{B.value=!0,N.value=r},Y=()=>{B.value=!1},x=async()=>{u.value=!0;const r=new Date,b=r.getFullYear(),ae=r.getMonth()+1,te=`${b}${ae.toString().padStart(2,"0")}`;try{const ne=await axiosAdmin.get(`period-api-data-import-session/${te}`);z.success({placement:"topRight",message:e("common.success"),description:"Employees updated data has been successfully fetched in session"})}catch{z.error({placement:"topRight",message:e("common.error"),description:"Something went wrong"})}finally{u.value=!1}},J=async()=>{D.value=!0;try{const r=await axiosAdmin.get("process-session-import-data");z.success({placement:"topRight",message:e("common.success"),description:"Employees updated data has been successfully saved in the database"})}catch{z.error({placement:"topRight",message:e("common.error"),description:"No employees found in session"})}finally{D.value=!1}};ye(()=>{U(),l.table.filterableColumns=C,s(),X()});const X=async()=>{try{axiosAdmin.get("total-member").then(r=>{a.value=r.data.data??0})}catch{console.log("something went wrong")}},s=()=>{T.value=="suppliers"?(l.initData.value={...P},l.formData.value={...P},l.langKey.value="supplier",k.value=M,E.value=window.config.supplier_sample_file,A.value=e("supplier.import_suppliers"),O.value="suppliers/import"):T.value=="customers"?(l.initData.value={...h},l.formData.value={...h},l.langKey.value="customer",k.value=M,E.value=window.config.customer_sample_file,A.value=e("customer.import_customers"),O.value="customers/import"):(l.initData.value={...R},l.formData.value={...R},l.langKey.value="staff_member",k.value=$,E.value=window.config.staff_member_sample_file,A.value=e("staff_member.import_staff_members"),O.value="users/import"),l.restFormData()},U=()=>{l.crudUrl.value=T.value;var r="",b={};v.value!=null&&v.value!="all"&&(r+=`status eq "${v.value}"`),S.value!=null&&S.value!="all"&&T.value!="users"&&(b.search_due_type=S.value),l.tableUrl.value={url:`${T.value}${j}`,filterString:r,extraFilters:b},l.fetch({page:1})};Z(()=>w.meta.menuKey,(r,b)=>{(w.meta.menuKey=="users"||w.meta.menuKey=="customers"||w.meta.menuKey=="suppliers")&&(T.value=w.meta.menuKey,v.value=void 0,l.table.searchColumn=void 0,l.table.searchString="",S.value="all",U(),s())}),Z(L,(r,b)=>{U()});const m=fe(()=>{let r=0;return l.table.data.forEach(b=>{b&&b.details&&b.details.due_amount&&(r+=b.details.due_amount)}),{totalOpeningBalance:r}});return{statusColors:F,userStatus:H,filterableColumns:C,userType:T,tableColumns:k,searchStatus:v,setUrlData:U,searchDueType:S,activeTabKey:q,...l,permsArray:K,transactionVisible:B,formatDateTime:I,user:V,formatAmountCurrency:W,sampleFileUrl:E,importPageTitle:A,importUrl:O,totals:m,onCloseTransactions:Y,openTransactions:G,modelData:N,syncEmployees:x,updateEmployees:J,isSyncing:u,isUpdating:D,totalMembers:a}}},Ze={class:"table-responsive"};function ea(e,u,D,a,F,H){const K=ve,I=_("router-link"),V=be,L=he,W=_("AdminPageHeader"),P=_("SyncOutlined"),h=Ce,R=_("SaveOutlined"),$=ke,M=_("DeleteOutlined"),C=we,l=Ve,w=Te,T=De,j=Se,v=Ee,q=_("admin-page-filters"),S=_("AddEdit"),k=Ue,E=Ae,A=_("user-info"),O=Oe,B=Ke,N=_("EyeOutlined"),G=_("EditOutlined"),Y=Ie,x=_("UserView"),J=_("UserTransaction"),X=_("admin-page-table-content");return o(),f(g,null,[t(W,null,{header:n(()=>[t(K,{title:e.$t(`menu.${e.langKey}s`),class:"p-0"},null,8,["title"])]),breadcrumb:n(()=>[t(L,{separator:"-",style:{"font-size":"12px"}},{default:n(()=>[t(V,null,{default:n(()=>[t(I,{to:{name:"admin.dashboard.index"}},{default:n(()=>[d(c(e.$t("menu.dashboard")),1)]),_:1},8,["to"])]),_:1}),t(V,null,{default:n(()=>[d(c(e.$t("menu.parties")),1)]),_:1}),t(V,null,{default:n(()=>[d(c(e.$t(`menu.${e.langKey}s`)),1)]),_:1})]),_:1})]),_:1}),t(q,null,{default:n(()=>[t(v,{gutter:[16,16]},{default:n(()=>[t(C,{xs:24,sm:24,md:12,lg:10,xl:10},{default:n(()=>[t($,null,{default:n(()=>[a.permsArray.includes(`${a.userType}_create`)||a.permsArray.includes("admin")?(o(),p($,{key:0},{default:n(()=>[t(h,{type:"primary",onClick:a.syncEmployees,loading:a.isSyncing},{default:n(()=>[a.isSyncing?i("",!0):(o(),p(P,{key:0})),d(" Sync Employees ")]),_:1},8,["onClick","loading"]),t(h,{type:"primary",onClick:a.updateEmployees,loading:a.isUpdating},{default:n(()=>[a.isUpdating?i("",!0):(o(),p(R,{key:0})),d(" Update Employees ")]),_:1},8,["onClick","loading"]),t(h,{type:"primary"},{default:n(()=>[d(c(a.totalMembers)+" Members ",1)]),_:1})]),_:1})):i("",!0),e.table.selectedRowKeys.length>0&&(a.permsArray.includes(`${a.userType}_delete`)||a.permsArray.includes("admin"))?(o(),p(h,{key:1,type:"primary",onClick:e.showSelectedDeleteConfirm,danger:""},{icon:n(()=>[t(M)]),default:n(()=>[d(" "+c(e.$t("common.delete")),1)]),_:1},8,["onClick"])):i("",!0)]),_:1})]),_:1}),t(C,{xs:24,sm:24,md:12,lg:14,xl:14},{default:n(()=>[t(v,{gutter:[16,16],justify:"end"},{default:n(()=>[t(C,{xs:24,sm:24,md:12,lg:8,xl:8},{default:n(()=>[t(j,{compact:""},{default:n(()=>[t(w,{style:{width:"25%"},value:e.table.searchColumn,"onUpdate:value":u[0]||(u[0]=s=>e.table.searchColumn=s),placeholder:e.$t("common.select_default_text",[""])},{default:n(()=>[(o(!0),f(g,null,Q(a.filterableColumns,s=>(o(),p(l,{key:s.key},{default:n(()=>[d(c(s.value),1)]),_:2},1024))),128))]),_:1},8,["value","placeholder"]),t(T,{style:{width:"75%"},value:e.table.searchString,"onUpdate:value":u[1]||(u[1]=s=>e.table.searchString=s),"show-search":"",onChange:e.onTableSearch,onSearch:e.onTableSearch,loading:e.table.filterLoading},null,8,["value","onChange","onSearch","loading"])]),_:1})]),_:1}),a.userType&&a.userType!="users"?(o(),p(C,{key:0,xs:24,sm:24,md:12,lg:6,xl:6},{default:n(()=>[t(w,{value:a.searchStatus,"onUpdate:value":u[2]||(u[2]=s=>a.searchStatus=s),onChange:a.setUrlData,"show-search":"",style:{width:"100%"},placeholder:e.$t("common.select_default_text",[e.$t("user.status")]),allowClear:!0,optionFilterProp:"label"},{default:n(()=>[(o(!0),f(g,null,Q(a.userStatus,s=>(o(),p(l,{key:s.key,value:s.key,label:s.value},{default:n(()=>[d(c(s.value),1)]),_:2},1032,["value","label"]))),128))]),_:1},8,["value","onChange","placeholder"])]),_:1})):i("",!0)]),_:1})]),_:1})]),_:1})]),_:1}),t(X,null,{default:n(()=>[t(S,{addEditType:e.addEditType,visible:e.addEditVisible,url:e.addEditUrl,onAddEditSuccess:e.addEditSuccess,onClosed:e.onCloseAddEdit,addEditData:e.formData,data:e.viewData,pageTitle:e.pageTitle,successMessage:e.successMessage},null,8,["addEditType","visible","url","onAddEditSuccess","onClosed","addEditData","data","pageTitle","successMessage"]),a.userType&&a.userType=="users"?(o(),p(v,{key:0},{default:n(()=>[t(C,{span:24},{default:n(()=>[t(E,{activeKey:a.searchStatus,"onUpdate:activeKey":u[3]||(u[3]=s=>a.searchStatus=s),onChange:a.setUrlData},{default:n(()=>[t(k,{key:"all",tab:`${e.$t("common.all")} ${e.$t("menu.users")}`},null,8,["tab"]),(o(!0),f(g,null,Q(a.userStatus,s=>(o(),p(k,{key:s.key,tab:`${s.value} ${e.$t("menu.users")}`},null,8,["tab"]))),128))]),_:1},8,["activeKey","onChange"])]),_:1})]),_:1})):i("",!0),a.userType&&a.userType!="users"?(o(),p(v,{key:1},{default:n(()=>[t(C,{span:24},{default:n(()=>[t(E,{activeKey:a.searchDueType,"onUpdate:activeKey":u[4]||(u[4]=s=>a.searchDueType=s),onChange:a.setUrlData},{default:n(()=>[t(k,{key:"all",tab:`${e.$t("common.all")}`},null,8,["tab"]),t(k,{key:"receive",tab:`${e.$t("user.to_receive")}`},null,8,["tab"]),t(k,{key:"pay",tab:`${e.$t("user.to_pay")}`},null,8,["tab"])]),_:1},8,["activeKey","onChange"])]),_:1})]),_:1})):i("",!0),t(v,{gutter:[15,15]},{default:n(()=>[t(C,{span:24},{default:n(()=>[ge("div",Ze,[t(Y,{"row-selection":{selectedRowKeys:e.table.selectedRowKeys,onChange:e.onRowSelectChange,getCheckboxProps:s=>({disabled:!!(a.user.xid==s.xid||s.is_walkin_customer),name:s.xid})},columns:a.tableColumns,"row-key":s=>s.xid,"data-source":e.table.data,pagination:e.table.pagination,loading:e.table.loading,onChange:e.handleTableChange,bordered:"",size:"middle"},{bodyCell:n(({column:s,text:U,record:m})=>[s.dataIndex==="name"?(o(),p(O,{key:0,type:"primary",onClick:r=>e.viewItem(m)},{default:n(()=>[t(A,{user:m},null,8,["user"])]),_:2},1032,["onClick"])):i("",!0),s.dataIndex==="status"?(o(),p(B,{key:1,color:a.statusColors[U]},{default:n(()=>[d(c(e.$t(`common.${U}`)),1)]),_:2},1032,["color"])):i("",!0),s.dataIndex==="ministry"?(o(),f(g,{key:2},[d(c(m.ministry),1)],64)):i("",!0),s.dataIndex==="nrc_no"?(o(),f(g,{key:3},[d(c(m.nrc_no),1)],64)):i("",!0),s.dataIndex==="man_no"?(o(),f(g,{key:4},[d(c(m.man_no),1)],64)):i("",!0),s.dataIndex==="employee_id"?(o(),f(g,{key:5},[d(c(m.employee_id),1)],64)):i("",!0),s.dataIndex==="total"?(o(),f(g,{key:6},[d(c(m.total),1)],64)):i("",!0),s.dataIndex==="period"?(o(),f(g,{key:7},[d(c(m.period),1)],64)):i("",!0),s.dataIndex==="created_at"?(o(),f(g,{key:8},[d(c(a.formatDateTime(m.created_at)),1)],64)):i("",!0),s.dataIndex==="action"?(o(),f(g,{key:9},[t(h,{type:"primary",onClick:r=>e.viewItem(m),style:{"margin-left":"4px"}},{icon:n(()=>[t(N)]),_:2},1032,["onClick"]),a.permsArray.includes(`${a.userType}_edit`)||a.permsArray.includes("admin")?(o(),p(h,{key:0,type:"primary",onClick:r=>e.editItem(m),style:{"margin-left":"4px"}},{icon:n(()=>[t(G)]),_:2},1032,["onClick"])):i("",!0),(a.permsArray.includes(`${a.userType}_delete`)||a.permsArray.includes("admin"))&&a.user.xid!=m.xid&&!m.is_walkin_customer?(o(),p(h,{key:1,type:"primary",onClick:r=>e.showDeleteConfirm(m.xid),style:{"margin-left":"4px"}},{icon:n(()=>[t(M)]),_:2},1032,["onClick"])):i("",!0)],64)):i("",!0)]),_:1},8,["row-selection","columns","row-key","data-source","pagination","loading","onChange"])])]),_:1})]),_:1}),t(x,{user:e.viewData,visible:e.detailsVisible,onClosed:e.onCloseDetails},null,8,["user","visible","onClosed"]),t(J,{user:a.modelData,visible:a.transactionVisible,onClosed:a.onCloseTransactions},null,8,["user","visible","onClosed"])]),_:1})],64)}const wa=ee(Qe,[["render",ea]]);export{wa as default};