import{_ as D,Q as P,az as U,aA as z,Y as O,r as _,b as V,z as j,c as Y,a as t,w as e,D as w,p as u,f as H,o as c,j as p,t as d,g as M,i as A,L as I,h as G,ay as T,aB as q,aC as F,q as Q,aM as J,aD as K,bc as R,G as W,aG as X}from"./app-OikDM5Kw.js";import{h as Z}from"./hrmManagement-CoX4Drh7.js";import{A as $}from"./AdminPageHeader-MbAN4P4t.js";import{L as ee}from"./LeaveSidebar-Cp6UaTnL.js";import"./index-CaGusbUe.js";import"./ScheduleOutlined-Dj7wWgnj.js";import"./TabletOutlined-vCKQCqfa.js";import"./FundViewOutlined-Cv0xqeLO.js";import"./UnderlineOutlined-C7p3VsLK.js";const ae={components:{PlusOutlined:P,EditOutlined:U,DeleteOutlined:z,AdminPageHeader:$,LeaveSidebar:ee},setup(){const{t:o}=O(),{getMonthNameByNumber:r}=Z(),k=[{title:o("leave.leave_type"),dataIndex:"name"},{title:o("menu.remaining_leaves"),dataIndex:"remaining_leaves"}],a=_([]),f=_(!0),{dayjs:S,user:y,permsArray:b}=V(),s=_({year:S(),user_id:void 0}),g=_([]),v=_([]),x="users?limit=10000";j(()=>{const m=axiosAdmin.get(x);Promise.all([m]).then(([i])=>{v.value=i.data,s.value={...s.value,user_id:y.value.xid},l()})});const l=()=>{f.value=!0;var m=s.value.year.format("YYYY");axiosAdmin.get(`leaves/remaining-leaves?year=${m}&user_id=${s.value.user_id}`).then(i=>{a.value=i.data.data,g.value=i.data.month_year,f.value=!1})};return{columns:k,remainingLeaves:a,selectedYearStartEndMonths:g,getMonthNameByNumber:r,filters:s,tableLoading:f,setUrlData:l,allUsers:v,permsArray:b}}},te={class:"table-responsive"};function ne(o,r,k,a,f,S){const y=T,b=u("router-link"),s=q,g=F,v=u("AdminPageHeader"),x=u("LeaveSidebar"),l=Q,m=J,i=X,C=K,L=R,h=H,N=u("admin-page-filters"),B=W,E=u("admin-page-table-content");return c(),Y(w,null,[t(v,null,{header:e(()=>[t(y,{title:o.$t("menu.leave_types"),class:"p-0"},null,8,["title"])]),breadcrumb:e(()=>[t(g,{separator:"-",style:{"font-size":"12px"}},{default:e(()=>[t(s,null,{default:e(()=>[t(b,{to:{name:"admin.dashboard.index"}},{default:e(()=>[p(d(o.$t("menu.dashboard")),1)]),_:1})]),_:1}),t(s,null,{default:e(()=>[p(d(o.$t("menu.hrm")),1)]),_:1}),t(s,null,{default:e(()=>[p(d(o.$t("menu.remaining_leaves")),1)]),_:1})]),_:1})]),_:1}),t(h,null,{default:e(()=>[t(l,{xs:24,sm:24,md:24,lg:4,xl:4,class:"bg-setting-sidebar"},{default:e(()=>[t(x)]),_:1}),t(l,{xs:24,sm:24,md:24,lg:20,xl:20},{default:e(()=>[t(N,null,{default:e(()=>[t(h,{gutter:[16,16],align:"middle"},{default:e(()=>[t(l,{xs:24,sm:24,md:12,lg:10,xl:10},{default:e(()=>[a.selectedYearStartEndMonths&&a.selectedYearStartEndMonths.start_month?(c(),M(m,{key:0,strong:""},{default:e(()=>[p(d(a.getMonthNameByNumber(a.selectedYearStartEndMonths.start_month))+" "+d(a.selectedYearStartEndMonths.start_year)+" - "+d(a.getMonthNameByNumber(a.selectedYearStartEndMonths.end_month))+" "+d(a.selectedYearStartEndMonths.end_year),1)]),_:1})):A("",!0)]),_:1}),t(l,{xs:24,sm:24,md:12,lg:14,xl:14},{default:e(()=>[t(h,{gutter:[16,16],justify:"end"},{default:e(()=>[a.permsArray.includes("admin")||a.permsArray.includes("leaves_assign_to_all")?(c(),M(l,{key:0,xs:24,sm:24,md:12,lg:6,xl:6},{default:e(()=>[t(C,{value:a.filters.user_id,"onUpdate:value":r[0]||(r[0]=n=>a.filters.user_id=n),onChange:a.setUrlData,"show-search":"",style:{width:"100%"},placeholder:o.$t("common.select_default_text",[o.$t("leave.user")])},{default:e(()=>[(c(!0),Y(w,null,I(a.allUsers,n=>(c(),M(i,{key:n.xid,value:n.xid,title:n.name},{default:e(()=>[p(d(n.name),1)]),_:2},1032,["value","title"]))),128))]),_:1},8,["value","onChange","placeholder"])]),_:1})):A("",!0),t(l,{xs:24,sm:24,md:12,lg:12,xl:8},{default:e(()=>[t(L,{value:a.filters.year,"onUpdate:value":r[1]||(r[1]=n=>a.filters.year=n),placeholder:o.$t("common.select_default_text",[o.$t("holiday.year")]),picker:"year",onChange:a.setUrlData,style:{width:"100%"}},null,8,["value","placeholder","onChange"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(E,null,{default:e(()=>[t(h,null,{default:e(()=>[t(l,{span:24},{default:e(()=>[G("div",te,[t(B,{"row-selection":{getCheckboxProps:n=>({disabled:!1,name:n.xid})},columns:a.columns,"row-key":n=>n.xid,"data-source":a.remainingLeaves,pagination:!1,loading:a.tableLoading,bordered:"",size:"middle"},{bodyCell:e(({column:n,record:oe})=>r[2]||(r[2]=[])),_:1},8,["row-selection","columns","row-key","data-source","loading"])])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})],64)}const pe=D(ae,[["render",ne]]);export{pe as default};