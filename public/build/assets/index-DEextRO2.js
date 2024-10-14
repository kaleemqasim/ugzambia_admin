import{a as t,y as Y,_ as M,b2 as J,a5 as Q,aa as Z,b as D,Y as $,f as v,E as z,r as i,o as u,i as h,w as n,l as b,t as y,j as S,k as C,X as N,aH as R,ax as U,aR as E,B as ee,a0 as te,aM as I,a1 as X,bm as q,bs as ne,bn as F,cx as G,C as w,an as ae,ao as oe,D as se,W as ce,c as re,G as le,h as de,ay as ie,q as _e}from"./app-CDr1bG5H.js";import{A as ue}from"./AdminPageHeader-C58ahpJ5.js";import{C as me,M as pe}from"./MarkTodayAttendance-V-z9P0Vi.js";import"./index-DQuVqeGd.js";import{f as j}from"./filter-XrGgxYsV.js";import{U as ge}from"./UserOutlined-B6wSOsmt.js";import"./LogoutOutlined-B6btnvhH.js";var fe={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M816 768h-24V428c0-141.1-104.3-257.7-240-277.1V112c0-22.1-17.9-40-40-40s-40 17.9-40 40v38.9c-135.7 19.4-240 136-240 277.1v340h-24c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h216c0 61.8 50.2 112 112 112s112-50.2 112-112h216c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM512 888c-26.5 0-48-21.5-48-48h96c0 26.5-21.5 48-48 48zM304 768V428c0-55.6 21.6-107.8 60.9-147.1S456.4 220 512 220c55.6 0 107.8 21.6 147.1 60.9S720 372.4 720 428v340H304z"}}]},name:"bell",theme:"outlined"};const ve=fe;function V(a){for(var s=1;s<arguments.length;s++){var c=arguments[s]!=null?Object(arguments[s]):{},e=Object.keys(c);typeof Object.getOwnPropertySymbols=="function"&&(e=e.concat(Object.getOwnPropertySymbols(c).filter(function(o){return Object.getOwnPropertyDescriptor(c,o).enumerable}))),e.forEach(function(o){he(a,o,c[o])})}return a}function he(a,s,c){return s in a?Object.defineProperty(a,s,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[s]=c,a}var H=function(s,c){var e=V({},s,c.attrs);return t(Y,V({},e,{icon:ve}),null)};H.displayName="BellOutlined";H.inheritAttrs=!1;const ye=H,be={components:{CheckOutlined:J,CloseOutlined:Q,BellOutlined:ye,DoubleRightOutlined:Z},setup(){const{permsArray:a,dayjs:s,formatTime:c,formatDate:e}=D(),{t:o}=$(),d=v(!1),m=v([]);z(()=>{r()});const r=()=>{d.value=!0,axiosAdmin.get("hrm/dashboard/pending-leaves").then(l=>{m.value=l.data.pending_leaves,d.value=!1})};return{initLoading:d,pendingLeaves:m,permsArray:a,formatDate:e,approveLeave:l=>{N.confirm({title:o("common.approved")+"?",icon:t(R),content:o("common.approved_message"),centered:!0,okText:o("common.yes"),okType:"danger",cancelText:o("common.no"),onOk(){return axiosAdmin.post(`leaves/update-status/${l}`,{status:"approved"}).then(_=>{r(),U.success({message:o("common.success"),description:o("common.status_changed"),placement:"bottomRight"})}).catch(()=>{})},onCancel(){}})},rejectLeave:l=>{N.confirm({title:o("common.rejected")+"?",icon:t(R),content:o("common.rejected_message"),centered:!0,okText:o("common.yes"),okType:"danger",cancelText:o("common.no"),onOk(){return axiosAdmin.post(`leaves/update-status/${l}`,{status:"rejected"}).then(_=>{r(),U.success({message:o("common.success"),description:o("common.status_changed"),placement:"bottomRight"})}).catch(()=>{})},onCancel(){}})}}}},ke={class:"pending-leave-hrm"};function Oe(a,s,c,e,o,d){const m=i("BellOutlined"),r=E,p=i("CheckOutlined"),g=ee,l=i("CloseOutlined"),_=te,k=I,A=X,O=q,x=ne,B=F,T=G,P=i("perfect-scrollbar"),L=i("DoubleRightOutlined"),K=w;return e.permsArray.includes("admin")||e.permsArray.includes("leaves_approve_reject")?(u(),h(K,{key:0,bodyStyle:{padding:"0px"}},{title:n(()=>[t(m),b(" "+y(a.$t("hrm_dashboard.pening_approvals"))+" ",1),t(r,{count:e.pendingLeaves.length},null,8,["count"])]),extra:n(()=>[t(g,{class:"mt-10",type:"link",onClick:s[0]||(s[0]=f=>a.$router.push({name:"admin.hrm.leaves.index"}))},{default:n(()=>[b(y(a.$t("common.view_all"))+" ",1),t(L)]),_:1})]),default:n(()=>[S("div",ke,[t(P,{options:{wheelSpeed:1,swipeEasing:!0,suppressScrollX:!0}},{default:n(()=>[t(T,{loading:e.initLoading,"item-layout":"horizontal","data-source":e.pendingLeaves},{renderItem:n(({item:f})=>[t(B,null,{extra:n(()=>[t(_,null,{default:n(()=>[f.status=="pending"&&(e.permsArray.includes("admin")||e.permsArray.includes("leaves_approve_reject"))?(u(),h(g,{key:0,onClick:W=>e.approveLeave(f.xid),type:"primary"},{icon:n(()=>[t(p)]),_:2},1032,["onClick"])):C("",!0),f.status=="pending"&&(e.permsArray.includes("admin")||e.permsArray.includes("leaves_approve_reject"))?(u(),h(g,{key:1,onClick:W=>e.rejectLeave(f.xid),type:"primary",danger:""},{icon:n(()=>[t(l)]),_:2},1032,["onClick"])):C("",!0)]),_:2},1024)]),default:n(()=>[t(x,{avatar:"",title:!1,loading:!!f.loading,active:""},{default:n(()=>[t(O,{description:f.reason},{title:n(()=>[t(k,{strong:""},{default:n(()=>[b(y(f.user.name),1)]),_:2},1024),b(" ("+y(e.formatDate(f.start_date))+" - "+y(e.formatDate(f.end_date))+") ",1)]),avatar:n(()=>[t(A,{src:f.user.profile_image_url},null,8,["src"])]),_:2},1032,["description"])]),_:2},1032,["loading"])]),_:2},1024)]),_:1},8,["loading","data-source"])]),_:1})])]),_:1})):C("",!0)}const Ce=M(be,[["render",Oe]]),Ae={components:{UserOutlined:ge,CoffeeOutlined:me},setup(){const{permsArray:a,dayjs:s,formatTime:c,formatDate:e}=D();$();const o=v(!1),d=v([]),m=v("not_marked"),r=v(!1),p=v({}),g=v([]),l=v(0),_=v(0),k=v(0);z(()=>{A()});const A=()=>{o.value=!0,axiosAdmin.get("hrm/dashboard/today-attendance-users").then(x=>{d.value=x.data.users,p.value=x.data.holiday,r.value=x.data.is_holiday,l.value=j(d.value,{status:"not_marked"}).length,_.value=j(d.value,{status:"present"}).length,k.value=j(d.value,{status:"absent"}).length,O()})},O=()=>{o.value=!0,g.value=j(d.value,{status:m.value}),o.value=!1};return{attendanceStatus:m,initLoading:o,permsArray:a,formatDate:e,isHoliday:r,allUsers:d,holiday:p,filteredUsers:g,attendanceStatusChanged:O,totalNotMarked:l,totalPresent:_,totalAbsent:k}}},xe={class:"today-attendance-status-hrm"};function Le(a,s,c,e,o,d){const m=i("UserOutlined"),r=E,p=ae,g=oe,l=i("CoffeeOutlined"),_=se,k=I,A=X,O=q,x=F,B=G,T=i("perfect-scrollbar"),P=w;return u(),h(P,{bodyStyle:{padding:"0px"}},{title:n(()=>[t(m),b(" "+y(a.$t("hrm_dashboard.today_attendance")),1)]),extra:n(()=>[!e.isHoliday&&!e.initLoading?(u(),h(g,{key:0,activeKey:e.attendanceStatus,"onUpdate:activeKey":s[0]||(s[0]=L=>e.attendanceStatus=L),onChange:e.attendanceStatusChanged,size:"small"},{default:n(()=>[t(p,{key:"not_marked"},{tab:n(()=>[b(y(a.$t("hrm_dashboard.not_marked"))+" ",1),e.totalNotMarked>0?(u(),h(r,{key:0,"number-style":{backgroundColor:"#13c2c2"},count:e.totalNotMarked},null,8,["count"])):C("",!0)]),_:1}),t(p,{key:"present"},{tab:n(()=>[b(y(a.$t("hrm_dashboard.present"))+" ",1),e.totalPresent>0?(u(),h(r,{key:0,"number-style":{backgroundColor:"#52c41a"},count:e.totalPresent},null,8,["count"])):C("",!0)]),_:1}),t(p,{key:"absent"},{tab:n(()=>[b(y(a.$t("hrm_dashboard.absent"))+" ",1),e.totalAbsent>0?(u(),h(r,{key:0,count:e.totalAbsent},null,8,["count"])):C("",!0)]),_:1})]),_:1},8,["activeKey","onChange"])):C("",!0)]),default:n(()=>[S("div",xe,[t(T,{options:{wheelSpeed:1,swipeEasing:!0,suppressScrollX:!0}},{default:n(()=>[e.isHoliday&&!e.initLoading?(u(),h(_,{key:0,title:a.$t("hrm_dashboard.today_is_holiday")},{icon:n(()=>[t(l)]),_:1},8,["title"])):(u(),h(B,{key:1,loading:e.initLoading,"item-layout":"horizontal","data-source":e.filteredUsers},{renderItem:n(({item:L})=>[t(x,null,{default:n(()=>[t(O,{description:L.reason},{title:n(()=>[t(k,{strong:""},{default:n(()=>[b(y(L.name),1)]),_:2},1024)]),avatar:n(()=>[t(A,{src:L.profile_image_url},null,8,["src"])]),_:2},1032,["description"])]),_:2},1024)]),_:1},8,["loading","data-source"]))]),_:1})])]),_:1})}const Se=M(Ae,[["render",Le]]),je={components:{ClockCircleOutlined:ce,AdminPageHeader:ue,MarkTodayAttendance:pe,PedningLeaves:Ce,TodayAttendance:Se},setup(){const{permsArray:a}=D();return{permsArray:a}}},Be={class:"dashboard-page-content-container"},Te={class:"mt-30 mb-20"},Pe={class:"mb-20"};function Me(a,s,c,e,o,d){const m=ie,r=i("AdminPageHeader"),p=i("ClockCircleOutlined"),g=i("MarkTodayAttendance"),l=w,_=_e,k=de,A=i("PedningLeaves"),O=i("TodayAttendance");return u(),re(le,null,[t(r,null,{header:n(()=>[t(m,{title:a.$t("menu.dashboard"),class:"p-0"},null,8,["title"])]),_:1}),S("div",Be,[S("div",Te,[S("div",Pe,[t(k,{gutter:[15,15]},{default:n(()=>[t(_,{xs:24,sm:24,md:24,lg:24,xl:24},{default:n(()=>[t(l,null,{title:n(()=>[t(p),b(" "+y(a.$t("hrm_dashboard.today_attendance")),1)]),default:n(()=>[t(g)]),_:1})]),_:1})]),_:1})]),t(k,{class:"mb-20",gutter:[15,15]},{default:n(()=>[e.permsArray.includes("admin")||e.permsArray.includes("leaves_approve_reject")?(u(),h(_,{key:0,xs:24,sm:24,md:24,lg:12,xl:12},{default:n(()=>[t(A)]),_:1})):C("",!0),t(_,{xs:24,sm:24,md:24,lg:12,xl:12},{default:n(()=>[t(O)]),_:1})]),_:1})])])],64)}const $e=M(je,[["render",Me]]);export{$e as default};