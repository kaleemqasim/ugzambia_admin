import{a as t,y as _e,Y as T,f as D,_ as z,d as x,R as V,aT as ee,aU as ce,b as H,E as j,a6 as fe,o as s,i as S,w as a,j as q,c as O,l as p,t as m,k as h,G as M,am as ge,C as ve,q as L,h as W,J as ae,an as he,ao as be,aM as ke,F as te,ap as Ce,r as A,M as K,B as le,aG as ne,aD as oe,n as Se,be as se,X as we,az as Ae,aA as Oe,cC as De,a5 as Me,b2 as $e,aw as Pe,cB as X,ax as Q,ay as Ee,aB as Ie,aC as Fe,a0 as Re,m as Ue,bk as Be}from"./app-DvNATx7Y.js";import{c as Ye}from"./crud-D_5AFYm7.js";import{a as de}from"./apiAdmin-DqdlX2Lq.js";import{S as Te}from"./StaffAddButton-D53lNkx8.js";import{F as Ke}from"./FormItemHeading-CX46F7Ha.js";import{h as N}from"./hrmManagement-neAJ4rAi.js";import"./index-CvRpe2mf.js";import{S as re}from"./SaveOutlined-CMUQh6R8.js";import{A as Ne,a as ze}from"./ArrowUpOutlined-DaaFLsNr.js";import{A as Ve}from"./AdminPageHeader-BPh6CuL6.js";import{P as He}from"./PayrollSidebar-BAPE8wxq.js";import{P as je}from"./AddButton-D5OrQrxI.js";import{S as qe}from"./SendOutlined-ef8DoJRc.js";import{D as Le}from"./DollarCircleOutlined-Cg_uKE1L.js";import"./datatable-ChDCLVWf.js";import"./filter-BEo08sjD.js";import"./fields-BmbrdO_7.js";import"./Upload-B1S3qWAF.js";import"./AddButton-H-wVgeKn.js";import"./AddEdit-CqWzPjhL.js";import"./SettingOutlined-Cyv_dmap.js";import"./AddButton-Cp1J059N.js";import"./AddEdit-DePc1g0l.js";import"./ScheduleOutlined-BDUAP4qF.js";import"./TabletOutlined-D_R7FK0o.js";import"./AddEdit-CotZ6avV.js";var We={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64L128 192v384c0 212.1 171.9 384 384 384s384-171.9 384-384V192L512 64zm312 512c0 172.3-139.7 312-312 312S200 748.3 200 576V246l312-110 312 110v330z"}},{tag:"path",attrs:{d:"M378.4 475.1a35.91 35.91 0 00-50.9 0 35.91 35.91 0 000 50.9l129.4 129.4 2.1 2.1a33.98 33.98 0 0048.1 0L730.6 434a33.98 33.98 0 000-48.1l-2.8-2.8a33.98 33.98 0 00-48.1 0L483 579.7 378.4 475.1z"}}]},name:"safety",theme:"outlined"};const Ge=We;function Z(e){for(var n=1;n<arguments.length;n++){var d=arguments[n]!=null?Object(arguments[n]):{},l=Object.keys(d);typeof Object.getOwnPropertySymbols=="function"&&(l=l.concat(Object.getOwnPropertySymbols(d).filter(function(b){return Object.getOwnPropertyDescriptor(d,b).enumerable}))),l.forEach(function(b){Je(e,b,d[b])})}return e}function Je(e,n,d){return n in e?Object.defineProperty(e,n,{value:d,enumerable:!0,configurable:!0,writable:!0}):e[n]=d,e}var G=function(n,d){var l=Z({},n,d.attrs);return t(_e,Z({},l,{icon:Ge}),null)};G.displayName="SafetyOutlined";G.inheritAttrs=!1;const Xe=G,Qe=()=>{const e="payrolls?fields=id,xid,user_id,x_user_id,user{id,xid,name},month,year,payment_date,status,net_salary,total_days,working_days,present_days,total_office_time,total_worked_time,half_days,late_days,paid_leaves,unpaid_leaves,holiday_count,pre_payment_amount,expense_amount,basic_salary,salary_amount",n="payrolls",{t:d}=T(),l=["user_id"],b={user_id:void 0,month:void 0,year:void 0,payment_date:void 0,status:"generated",net_salary:""},$=D([{title:d("payroll.user_id"),dataIndex:"user_id"},{title:d("payroll.net_salary"),dataIndex:"net_salary"},{title:d("payroll.month"),dataIndex:"month"},{title:d("payroll.payment_date"),dataIndex:"payment_date"},{title:d("payroll.status"),dataIndex:"status"},{title:d("common.action"),dataIndex:"action"}]),i=[{key:"name",value:d("common.name")}];return{addEditUrl:n,initData:b,columns:$,filterableColumns:i,hashableColumns:l,url:e}},Ze=x({props:["data","formData","visible","url","addEditType","pageTitle","successMessage"],components:{PlusOutlined:V,LoadingOutlined:ee,SaveOutlined:re,StaffMemberAddButton:Te,ArrowUpOutlined:Ne,ArrowDownOutlined:ze,MinusSquareOutlined:ce,FormItemHeading:Ke},setup(e,{emit:n}){const{addEditRequestAdmin:d,loading:l,rules:b}=de(),{getMonthNameByNumber:$,formatMinutes:i}=N(),{appSetting:_,permsArray:y,formatAmountCurrency:f}=H(),w=D("summary"),{t:o}=T(),u=D([]),g=D([]);j(()=>{});const k=()=>{d({url:e.url,data:e.formData,successMessage:e.successMessage,success:F=>{n("addEditSuccess",F.xid)}})},P=()=>{b.value={},n("closed")},v=[{title:o("common.title"),dataIndex:"title"},{title:o("common.value"),dataIndex:"value"}],C=D([]),c=D([]),B=[{title:o("payroll.salary_component"),dataIndex:"title"},{title:o("common.value"),dataIndex:"value"}],U=D([]),R=()=>{u.value.push({bouns:"",amount:"",is_half_day:0})},I=F=>{let Y=u.value.indexOf(F);Y!==-1&&u.value.splice(Y,1),F.id!=""&&g.value.push(F.id)};return fe(()=>e.visible,(F,Y)=>{C.value=[{key:"total_days",title:o("payroll.total_days"),value:e.data.total_days},{key:"working_days",title:o("payroll.working_days"),value:e.data.working_days},{key:"present_days",title:o("payroll.present_days"),value:e.data.present_days},{key:"total_office_time",title:o("payroll.total_office_time"),value:i(e.data.total_office_time)},{key:"total_worked_time",title:o("payroll.total_worked_time"),value:i(e.data.total_worked_time)},{key:"half_days",title:o("payroll.half_days"),value:e.data.half_days},{key:"late_days",title:o("payroll.late_days"),value:e.data.late_days},{key:"basic_salary",title:o("payroll.basic_salary"),value:f(e.data.basic_salary)}],c.value=[{key:"paid_leaves",title:o("payroll.paid_leaves"),value:e.data.paid_leaves},{key:"unpaid_leaves",title:o("payroll.unpaid_leaves"),value:e.data.unpaid_leaves},{key:"holiday_count",title:o("payroll.holiday_count"),value:e.data.holiday_count}],U.value=[{key:"salary_amount",title:o("payroll.salary_amount"),value:e.data.salary_amount},{key:"pre_payment_amount",title:o("payroll.pre_payment_deduction"),value:e.data.pre_payment_amount},{key:"expense_amount",title:o("payroll.expense_claim"),value:e.data.expense_amount}]}),{loading:l,rules:b,onClose:P,onSubmit:k,appSetting:_,permsArray:y,activeKey:w,formFields:u,removeFormField:I,addFormField:R,getMonthNameByNumber:$,formatAmountCurrency:f,summaryColumns:v,summaryData:C,leaveHoliday:c,salaryComponentsColumns:B,salaryComponentsData:U,drawerWidth:window.innerWidth<=991?"90%":"70%"}}}),xe={style:{background:"#ececec",padding:"20px"}};function ea(e,n,d,l,b,$){const i=ge,_=ve,y=L,f=W,w=ae,o=he,u=be,g=ke,k=te,P=Ce;return s(),S(P,{title:e.pageTitle,width:e.drawerWidth,open:e.visible,"body-style":{paddingBottom:"80px"},"footer-style":{textAlign:"right"},maskClosable:!1,onClose:e.onClose},{default:a(()=>[t(k,{layout:"vertical"},{default:a(()=>[q("div",xe,[t(f,{gutter:16},{default:a(()=>[t(y,{span:12},{default:a(()=>[t(_,null,{default:a(()=>[t(i,{title:e.$t("payroll.month"),value:`${e.getMonthNameByNumber(e.formData.month)} ${e.formData.year}`,"value-style":{color:"#3f8600"}},null,8,["title","value"])]),_:1})]),_:1}),t(y,{span:12},{default:a(()=>[t(_,null,{default:a(()=>[t(i,{title:e.$t("payroll.net_salary"),value:e.formatAmountCurrency(e.formData.net_salary),"value-style":{color:"#3f8600"}},null,8,["title","value"])]),_:1})]),_:1})]),_:1})]),t(f,{class:"mt-30"},{default:a(()=>[t(y,{span:12,offset:6},{default:a(()=>[t(u,{activeKey:e.activeKey,"onUpdate:activeKey":n[0]||(n[0]=v=>e.activeKey=v)},{default:a(()=>[t(o,{key:"summary",tab:`${e.$t("payroll.summary")}`},{default:a(()=>[t(w,{dataSource:e.summaryData,columns:e.summaryColumns,pagination:!1,size:"middle",showHeader:!1},null,8,["dataSource","columns"])]),_:1},8,["tab"]),t(o,{key:"leave",tab:`${e.$t("payroll.leaves")} / ${e.$t("payroll.holiday")}`},{default:a(()=>[t(w,{dataSource:e.leaveHoliday,columns:e.summaryColumns,pagination:!1,size:"middle",showHeader:!1},null,8,["dataSource","columns"])]),_:1},8,["tab"])]),_:1},8,["activeKey"])]),_:1})]),_:1}),t(f,{class:"mt-30",gutter:16},{default:a(()=>[t(y,{xs:24,sm:24,md:10,lg:10},{default:a(()=>[t(w,{dataSource:e.salaryComponentsData,columns:e.salaryComponentsColumns,pagination:!1,size:"middle"},{bodyCell:a(({column:v,record:C})=>[v.dataIndex=="value"?(s(),O(M,{key:0},[C.key=="pre_payment_amount"?(s(),S(g,{key:0,type:"danger"},{default:a(()=>[p(" - "+m(e.formatAmountCurrency(C.value)),1)]),_:2},1024)):C.key=="expense_amount"||C.key=="salary_amount"?(s(),S(g,{key:1,type:"success"},{default:a(()=>[p(" + "+m(e.formatAmountCurrency(C.value)),1)]),_:2},1024)):h("",!0)],64)):h("",!0)]),_:1},8,["dataSource","columns"])]),_:1}),t(y,{xs:24,sm:24,md:14,lg:14})]),_:1})]),_:1})]),_:1},8,["title","width","open","onClose"])}const aa=z(Ze,[["render",ea]]),ta=x({emits:["onSuccess"],props:["payrolls"],components:{PlusOutlined:V,LoadingOutlined:ee,SaveOutlined:re,PaymentModeAddButton:je,SafetyOutlined:Xe},setup(e,{emit:n}){const{addEditRequestAdmin:d,loading:l,rules:b}=de(),{appSetting:$,permsArray:i}=H(),_=D([]),y="payment-modes?fields=id,xid,name&limit=10000",f=D(!1),{t:w}=T(),o=D({date:void 0,payment_mode_id:void 0,payroll_status:void 0}),u=()=>{d({url:"payrolls/update-status",data:{...o.value,payrolls:e.payrolls},successMessage:w("payroll.status_generated"),success:v=>{n("onSuccess"),f.value=!1,o.value={date:void 0,payment_mode_id:void 0,payroll_status:void 0}}})},g=()=>{f.value=!0},k=()=>{f.value=!1,b.value={},o.value={date:void 0,payment_mode_id:void 0,payroll_status:void 0}};return j(()=>{const v=axiosAdmin.get(y);Promise.all([v]).then(([C])=>{_.value=C.data})}),{loading:l,rules:b,onSubmit:u,appSetting:$,permsArray:i,paymentModes:_,paymentModeAdded:()=>{axiosAdmin.get(y).then(v=>{_.value=v.data})},openModel:g,visible:f,formData:o,closeModel:k,drawerWidth:window.innerWidth<=991?"90%":"45%"}}}),la={style:{display:"flex"}};function na(e,n,d,l,b,$){const i=A("SafetyOutlined"),_=le,y=ne,f=oe,w=Se,o=L,u=W,g=se,k=A("PaymentModeAddButton"),P=te,v=A("SaveOutlined"),C=we;return s(),O(M,null,[t(_,{type:"primary",onClick:e.openModel},{default:a(()=>[t(i),p(" "+m(e.$t("payroll.payroll_status")),1)]),_:1},8,["onClick"]),t(C,{open:e.visible,onClose:e.closeModel,centered:!0,title:e.$t("payroll.payroll_status"),onOk:e.onSubmit,closable:!1},{footer:a(()=>[t(_,{key:"submit",type:"primary",loading:e.loading,onClick:e.onSubmit},{icon:a(()=>[t(v)]),default:a(()=>[p(" "+m(e.addEditType=="add"?e.$t("common.create"):e.$t("common.update")),1)]),_:1},8,["loading","onClick"]),t(_,{key:"back",onClick:e.closeModel},{default:a(()=>[p(m(e.$t("common.cancel")),1)]),_:1},8,["onClick"])]),default:a(()=>[t(P,{layout:"vertical"},{default:a(()=>[t(u,{gutter:16},{default:a(()=>[t(o,{xs:24,sm:24,md:24,lg:24},{default:a(()=>[t(w,{label:e.$t("payroll.payroll_status"),name:"payroll_status",help:e.rules.payroll_status?e.rules.payroll_status.message:null,validateStatus:e.rules.payroll_status?"error":null,class:"required"},{default:a(()=>[t(f,{value:e.formData.payroll_status,"onUpdate:value":n[0]||(n[0]=c=>e.formData.payroll_status=c),placeholder:e.$t("common.select_default_text",[e.$t("payroll.payroll_status")]),allowClear:!0},{default:a(()=>[t(y,{value:"generated"},{default:a(()=>[p(m(e.$t("payroll.generated")),1)]),_:1}),t(y,{value:"paid"},{default:a(()=>[p(m(e.$t("payroll.paid")),1)]),_:1})]),_:1},8,["value","placeholder"])]),_:1},8,["label","help","validateStatus"])]),_:1})]),_:1}),e.formData.payroll_status=="paid"?(s(),S(u,{key:0,gutter:16},{default:a(()=>[t(o,{xs:24,sm:24,md:24,lg:24},{default:a(()=>[t(w,{label:e.$t("payroll.date"),name:"date",help:e.rules.date?e.rules.date.message:null,validateStatus:e.rules.date?"error":null,class:"required"},{default:a(()=>[t(g,{value:e.formData.date,"onUpdate:value":n[1]||(n[1]=c=>e.formData.date=c),format:e.appSetting.date_format,valueFormat:"YYYY-MM-DD",style:{width:"100%"}},null,8,["value","format"])]),_:1},8,["label","help","validateStatus"])]),_:1})]),_:1})):h("",!0),e.formData.payroll_status=="paid"?(s(),S(u,{key:1,gutter:16},{default:a(()=>[t(o,{xs:24,sm:24,md:24,lg:24},{default:a(()=>[t(w,{label:e.$t("payroll.payment_mode_id"),name:"payment_mode_id",help:e.rules.payment_mode_id?e.rules.payment_mode_id.message:null,validateStatus:e.rules.payment_mode_id?"error":null,class:"required"},{default:a(()=>[q("span",la,[t(f,{value:e.formData.payment_mode_id,"onUpdate:value":n[2]||(n[2]=c=>e.formData.payment_mode_id=c),placeholder:e.$t("common.select_default_text",[e.$t("payroll.payment_mode_id")]),allowClear:!0},{default:a(()=>[(s(!0),O(M,null,K(e.paymentModes,c=>(s(),S(y,{key:c.xid,value:c.xid},{default:a(()=>[p(m(c.name),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value","placeholder"]),t(k,{onOnAddSuccess:e.paymentModeAdded},null,8,["onOnAddSuccess"])])]),_:1},8,["label","help","validateStatus"])]),_:1})]),_:1})):h("",!0)]),_:1})]),_:1},8,["open","onClose","title","onOk"])],64)}const oa=z(ta,[["render",na]]),sa={components:{PlusOutlined:V,EditOutlined:Ae,DeleteOutlined:Oe,SendOutlined:qe,ReloadOutlined:De,DollarCircleOutlined:Le,AddEdit:aa,AdminPageHeader:Ve,CloseOutlined:Me,CheckOutlined:$e,PayrollSidebar:He,hrmManagement:N,PayrollStatus:oa,EyeOutlined:Pe},setup(){const{addEditUrl:e,initData:n,columns:d,filterableColumns:l,hashableColumns:b,url:$}=Qe(),i=Ye(),{t:_}=T(),{permsArray:y,appSetting:f,formatDate:w,formatAmountCurrency:o}=H(),u=D({user_id:void 0}),g=D({month:X().format("MM"),year:X()}),k=D([]),P="users?limit=10000",{getMonthNameByNumber:v,monthArrays:C}=N();j(()=>{c();const R=axiosAdmin.get(P);Promise.all([R]).then(([I])=>{k.value=I.data}),i.crudUrl.value=e,i.langKey.value="payroll",i.initData.value={...n},i.formData.value={...n},i.hashableColumns.value=[...b]});const c=()=>{i.tableUrl.value={filters:u,extraFilters:{month:g.value.month,year:g.value.year.format("YYYY")},url:$},i.table.filterableColumns=l,i.fetch({page:1})};return{columns:d,...i,filterableColumns:l,permsArray:y,appSetting:f,formatDate:w,setUrlData:c,allUsers:k,filters:u,extraFilters:g,generate:()=>{axiosAdmin.post("payrolls/generate",{month:g.value.month,year:g.value.year.format("YYYY")}).then(R=>{c(),Q.success({message:_("common.success"),description:_("common.generated"),placement:"bottomRight"})})},regenerate:()=>{axiosAdmin.post("payrolls/generate",{month:g.value.month,year:g.value.year.format("YYYY"),payrolls:i.table.selectedRowKeys}).then(R=>{c(),Q.success({message:_("common.success"),description:_("common.Regenerated"),placement:"bottomRight"})})},formatAmountCurrency:o,getMonthNameByNumber:v,monthArrays:C}}},da={class:"table-responsive"},ra={key:0},ia={key:1};function ua(e,n,d,l,b,$){const i=Ee,_=A("router-link"),y=Ie,f=Fe,w=A("AdminPageHeader"),o=A("PayrollSidebar"),u=L,g=A("ReloadOutlined"),k=le,P=A("SendOutlined"),v=Re,C=A("DeleteOutlined"),c=A("PayrollStatus"),B=ne,U=oe,R=se,I=W,F=A("admin-page-filters"),Y=A("AddEdit"),ie=A("DollarCircleOutlined"),ue=Ue,J=Be,me=A("EyeOutlined"),pe=ae,ye=A("admin-page-table-content");return s(),O(M,null,[t(w,null,{header:a(()=>[t(i,{title:e.$t("menu.payrolls"),class:"p-0"},null,8,["title"])]),breadcrumb:a(()=>[t(f,{separator:"-",style:{"font-size":"12px"}},{default:a(()=>[t(y,null,{default:a(()=>[t(_,{to:{name:"admin.dashboard.index"}},{default:a(()=>[p(m(e.$t("menu.dashboard")),1)]),_:1},8,["to"])]),_:1}),t(y,null,{default:a(()=>[p(m(e.$t("menu.hrm")),1)]),_:1}),t(y,null,{default:a(()=>[p(m(e.$t("menu.payrolls")),1)]),_:1})]),_:1})]),_:1}),t(I,null,{default:a(()=>[t(u,{xs:24,sm:24,md:24,lg:4,xl:4,class:"bg-setting-sidebar"},{default:a(()=>[t(o,{users:e.table.selectedRowKeys},null,8,["users"])]),_:1}),t(u,{xs:24,sm:24,md:24,lg:20,xl:20},{default:a(()=>[t(F,null,{default:a(()=>[t(I,{gutter:[16,16]},{default:a(()=>[t(u,{xs:24,sm:24,md:12,lg:10,xl:10},{default:a(()=>[t(v,null,{default:a(()=>[l.permsArray.includes("payrolls_create")||l.permsArray.includes("admin")?(s(),S(v,{key:0},{default:a(()=>[e.table.selectedRowKeys.length>0?(s(),S(k,{key:0,type:"primary",onClick:l.regenerate,disabled:l.extraFilters.month==null},{default:a(()=>[t(g),p(" "+m(e.$t("payroll.regenerate")),1)]),_:1},8,["onClick","disabled"])):(s(),S(k,{key:1,type:"primary",onClick:l.generate,disabled:l.extraFilters.month==null},{default:a(()=>[t(P),p(" "+m(e.$t("payroll.generate")),1)]),_:1},8,["onClick","disabled"]))]),_:1})):h("",!0),e.table.selectedRowKeys.length>0&&(l.permsArray.includes("payrolls_delete")||l.permsArray.includes("admin"))?(s(),S(k,{key:1,type:"primary",onClick:e.showSelectedDeleteConfirm,danger:""},{icon:a(()=>[t(C)]),default:a(()=>[p(" "+m(e.$t("common.delete")),1)]),_:1},8,["onClick"])):h("",!0),e.table.selectedRowKeys.length>0&&(l.permsArray.includes("payrolls_edit")||l.permsArray.includes("admin"))?(s(),S(c,{key:2,onOnSuccess:l.setUrlData,payrolls:e.table.selectedRowKeys},null,8,["onOnSuccess","payrolls"])):h("",!0)]),_:1})]),_:1}),t(u,{xs:24,sm:24,md:12,lg:14,xl:14},{default:a(()=>[t(I,{gutter:[16,16],justify:"end"},{default:a(()=>[l.permsArray.includes("payrolls_view")||l.permsArray.includes("admin")?(s(),S(u,{key:0,xs:24,sm:24,md:12,lg:6,xl:6},{default:a(()=>[t(U,{value:l.filters.user_id,"onUpdate:value":n[0]||(n[0]=r=>l.filters.user_id=r),onChange:l.setUrlData,"show-search":"",style:{width:"100%"},placeholder:e.$t("common.select_default_text",[e.$t("payroll.user_id")]),allowClear:!0},{default:a(()=>[(s(!0),O(M,null,K(l.allUsers,r=>(s(),S(B,{key:r.xid,value:r.xid,title:r.name},{default:a(()=>[p(m(r.name),1)]),_:2},1032,["value","title"]))),128))]),_:1},8,["value","onChange","placeholder"])]),_:1})):h("",!0),t(u,{xs:24,sm:24,md:8,lg:8,xl:6},{default:a(()=>[t(R,{value:l.extraFilters.year,"onUpdate:value":n[1]||(n[1]=r=>l.extraFilters.year=r),placeholder:e.$t("common.select_default_text",[e.$t("holiday.year")]),picker:"year",onChange:l.setUrlData,style:{width:"100%"},allowClear:!1},null,8,["value","placeholder","onChange"])]),_:1}),t(u,{xs:24,sm:24,md:8,lg:8,xl:6},{default:a(()=>[t(U,{value:l.extraFilters.month,"onUpdate:value":n[2]||(n[2]=r=>l.extraFilters.month=r),placeholder:e.$t("common.select_default_text",[e.$t("holiday.month")]),allowClear:!0,style:{width:"100%"},optionFilterProp:"title","show-search":"",onChange:l.setUrlData},{default:a(()=>[(s(!0),O(M,null,K(l.monthArrays,r=>(s(),S(B,{key:r.name,value:r.value},{default:a(()=>[p(m(r.name),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value","placeholder","onChange"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(ye,null,{default:a(()=>[t(Y,{addEditType:e.addEditType,visible:e.addEditVisible,url:e.addEditUrl,onAddEditSuccess:e.addEditSuccess,onClosed:e.onCloseAddEdit,formData:e.formData,data:e.viewData,pageTitle:e.pageTitle,successMessage:e.successMessage},null,8,["addEditType","visible","url","onAddEditSuccess","onClosed","formData","data","pageTitle","successMessage"]),l.permsArray.includes("basic_salaries_add")||l.permsArray.includes("basic_salaries_edit")||l.permsArray.includes("admin")?(s(),S(ue,{key:0,class:"mb-20",message:e.$t("payroll.setup_basic_salary_to_generate_payroll"),type:"info","show-icon":""},{action:a(()=>[t(k,{size:"small",type:"primary",onClick:n[3]||(n[3]=r=>e.$router.push({name:"admin.hrm.basic_salaries.index"}))},{default:a(()=>[t(ie),p(" "+m(e.$t("payroll.basic_salary_setup")),1)]),_:1})]),_:1},8,["message"])):h("",!0),t(I,null,{default:a(()=>[t(u,{span:24},{default:a(()=>[q("div",da,[t(pe,{"row-selection":{selectedRowKeys:e.table.selectedRowKeys,onChange:e.onRowSelectChange,getCheckboxProps:r=>({disabled:!1,name:r.xid})},columns:l.columns,"row-key":r=>r.xid,"data-source":e.table.data,pagination:e.table.pagination,loading:e.table.loading,onChange:e.handleTableChange,bordered:"",size:"middle"},{bodyCell:a(({column:r,record:E})=>[r.dataIndex=="user_id"?(s(),O(M,{key:0},[p(m(E.user.name),1)],64)):h("",!0),r.dataIndex=="payment_date"?(s(),O(M,{key:1},[p(m(E.payment_date!=null?l.formatDate(E.payment_date):"-"),1)],64)):h("",!0),r.dataIndex=="month"?(s(),O(M,{key:2},[p(m(l.getMonthNameByNumber(E.month))+" "+m(E.year),1)],64)):h("",!0),r.dataIndex=="net_salary"?(s(),O(M,{key:3},[p(m(l.formatAmountCurrency(E.net_salary)),1)],64)):h("",!0),r.dataIndex=="status"?(s(),O(M,{key:4},[E.status=="generated"?(s(),O("div",ra,[t(J,{color:"yellow"},{default:a(()=>[p(m(e.$t("payroll.generated")),1)]),_:1})])):h("",!0),E.status=="paid"?(s(),O("div",ia,[t(J,{color:"green"},{default:a(()=>[p(m(e.$t("common.paid")),1)]),_:1})])):h("",!0)],64)):h("",!0),r.dataIndex==="action"?(s(),S(v,{key:5},{default:a(()=>[t(k,{type:"primary",onClick:()=>e.editItem(E),style:{"margin-left":"4px"}},{icon:a(()=>[t(me)]),_:2},1032,["onClick"]),l.permsArray.includes("payrolls_delete")||l.permsArray.includes("admin")?(s(),S(k,{key:0,type:"primary",onClick:ma=>e.showDeleteConfirm(E.xid)},{icon:a(()=>[t(C)]),_:2},1032,["onClick"])):h("",!0)]),_:2},1024)):h("",!0)]),_:1},8,["row-selection","columns","row-key","data-source","pagination","loading","onChange"])])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})],64)}const Ta=z(sa,[["render",ua]]);export{Ta as default};
