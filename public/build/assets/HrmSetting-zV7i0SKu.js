import{_ as N,d as R,r as v,o as k,c as O,a as l,w as a,G as H,R as V,aT as W,aU as j,b as Y,u as J,Y as K,f as w,cy as y,E as Q,l as r,t as _,M,ak as X,B as Z,ay as x,aB as ee,aC as le,aD as ae,n as te,q as oe,h as se,cw as ne,a_ as ue,bx as re,bv as _e,F as me,C as ie,i as I,aG as de,I as ce}from"./app-DEGc35fG.js";import{a as pe}from"./apiAdmin-ChTOV1AZ.js";import{h as fe}from"./hrmManagement-g_f4tbDZ.js";import{A as ve}from"./AdminPageHeader-xgYaoUxS.js";import"./index-CJVjyWpv.js";import{S as he}from"./SaveOutlined-CN8q81Od.js";import{S as ge}from"./SettingOutlined-CvJdFKOR.js";const ke=R({emits:["success"],components:{PlusOutlined:V,LoadingOutlined:W,SaveOutlined:he,SettingOutlined:ge,MinusSquareOutlined:j,AdminPageHeader:ve},setup({emit:e}){const{addEditRequestAdmin:o,rules:U}=pe(),{permsArray:q,appSetting:s}=Y(),$=J(),{t:b}=K(),{monthArrays:h}=fe(),S=w([]),d=w([]),c=w({leave_start_month:s.value.leave_start_month,clock_in_time:y(s.value.clock_in_time,"HH:mm:ss").format("hh:mm:ss A"),clock_out_time:y(s.value.clock_out_time,"HH:mm:ss").format("hh:mm:ss A"),late_mark_after:s.value.late_mark_after,self_clocking:s.value.self_clocking,early_clock_in_time:s.value.early_clock_in_time,allow_clock_out_till:s.value.allow_clock_out_till,allowed_ip_address:s.value.allowed_ip_address?s.value.allowed_ip_address:[]}),g=w(!1);Q(()=>{d.value=s.value.allowed_ip_address?s.value.allowed_ip_address:[]});const p=w(!1),A=()=>{g.value=!0;let u=y(c.value.clock_in_time,"hh:mm:ss A").format("HH:mm:ss"),i=y(c.value.clock_out_time,"hh:mm:ss A").format("HH:mm:ss"),F={...c.value,clock_in_time:u,clock_out_time:i,allowed_ip_address:n()};o({url:"hrm/update-settings",data:F,successMessage:b("hrm_settings.updated"),success:P=>{p.value=!1,g.value=!1,$.dispatch("auth/updateApp"),$.dispatch("hrm/updateSelfClocking"),e("success")}})},D=()=>{d.value.push({allowed_ip_address:""})},m=u=>{let i=d.value.indexOf(u);i!==-1&&d.value.splice(i,1),u.id!=""&&S.value.push(u.id)},n=()=>{var u=[];return X(d.value,i=>{i.allowed_ip_address!=""&&u.push(i)}),u};return{formData:c,rules:U,permsArray:q,appSetting:s,monthArrays:h,visible:p,formFields:d,addFormField:D,removeFormField:m,onClose:()=>{p.value=!1},openDrawer:()=>{p.value=!0},onSubmit:A,loading:g,drawerWidth:window.innerWidth<=991?"90%":"35%"}}});function we(e,o,U,q,s,$){const b=v("SaveOutlined"),h=Z,S=x,d=v("router-link"),c=ee,g=le,p=v("AdminPageHeader"),A=de,D=ae,m=te,n=oe,f=se,C=ne,u=ue,i=re,F=_e,P=ce,T=v("MinusSquareOutlined"),E=v("PlusOutlined"),z=me,G=ie,L=v("admin-page-table-content");return k(),O(H,null,[l(p,null,{header:a(()=>[l(S,{title:e.$t("menu.hrm_settings"),class:"p-0"},{extra:a(()=>[l(h,{type:"primary",onClick:e.onSubmit},{icon:a(()=>[l(b)]),default:a(()=>[r(" "+_(e.$t("common.update")),1)]),_:1},8,["onClick"])]),_:1},8,["title"])]),breadcrumb:a(()=>[l(g,{separator:"-",style:{"font-size":"12px"}},{default:a(()=>[l(c,null,{default:a(()=>[l(d,{to:{name:"admin.dashboard.index"}},{default:a(()=>[r(_(e.$t("menu.dashboard")),1)]),_:1},8,["to"])]),_:1}),l(c,null,{default:a(()=>[r(_(e.$t("menu.settings")),1)]),_:1}),l(c,null,{default:a(()=>[r(_(e.$t("menu.hrm_settings")),1)]),_:1})]),_:1})]),_:1}),l(L,null,{default:a(()=>[l(G,{class:"page-content-container mt-20 mb-20"},{default:a(()=>[l(z,{layout:"vertical"},{default:a(()=>[l(f,{gutter:16},{default:a(()=>[l(n,{xs:24,sm:24,md:24,lg:24},{default:a(()=>[l(m,{label:e.$t("hrm_settings.leave_start_month"),name:"leave_start_month",help:e.rules.leave_start_month?e.rules.leave_start_month.message:null,validateStatus:e.rules.leave_start_month?"error":null,class:"required"},{default:a(()=>[l(D,{value:e.formData.leave_start_month,"onUpdate:value":o[0]||(o[0]=t=>e.formData.leave_start_month=t),placeholder:e.$t("common.select_default_text",[e.$t("hrm_settings.leave_start_month")]),style:{width:"100%"},optionFilterProp:"title","show-search":""},{default:a(()=>[(k(!0),O(H,null,M(e.monthArrays,t=>(k(),I(A,{key:t.name,value:t.value},{default:a(()=>[r(_(t.name),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value","placeholder"])]),_:1},8,["label","help","validateStatus"])]),_:1})]),_:1}),l(f,{gutter:16},{default:a(()=>[l(n,{xs:24,sm:24,md:12,lg:12},{default:a(()=>[l(m,{label:e.$t("hrm_settings.clock_in_time"),name:"clock_in_time",help:e.rules.clock_in_time?e.rules.clock_in_time.message:null,validateStatus:e.rules.clock_in_time?"error":null,class:"required"},{default:a(()=>[l(C,{value:e.formData.clock_in_time,"onUpdate:value":o[1]||(o[1]=t=>e.formData.clock_in_time=t),valueFormat:"hh:mm:ss A",style:{width:"100%"},"use12-hours":"",allowClear:!1},null,8,["value"])]),_:1},8,["label","help","validateStatus"])]),_:1}),l(n,{xs:24,sm:24,md:12,lg:12},{default:a(()=>[l(m,{label:e.$t("hrm_settings.clock_out_time"),name:"clock_out_time",help:e.rules.clock_out_time?e.rules.clock_out_time.message:null,validateStatus:e.rules.clock_out_time?"error":null,class:"required"},{default:a(()=>[l(C,{value:e.formData.clock_out_time,"onUpdate:value":o[2]||(o[2]=t=>e.formData.clock_out_time=t),valueFormat:"h:mm:ss A",style:{width:"100%"},"use12-hours":"",allowClear:!1},null,8,["value"])]),_:1},8,["label","help","validateStatus"])]),_:1})]),_:1}),l(f,{gutter:16},{default:a(()=>[l(n,{xs:24,sm:24,md:12,lg:12},{default:a(()=>[l(m,{label:e.$t("hrm_settings.early_clock_in_time"),name:"early_clock_in_time",help:e.rules.early_clock_in_time?e.rules.early_clock_in_time.message:null,validateStatus:e.rules.early_clock_in_time?"error":null},{default:a(()=>[l(u,{value:e.formData.early_clock_in_time,"onUpdate:value":o[3]||(o[3]=t=>e.formData.early_clock_in_time=t),placeholder:e.$t("common.placeholder_default_text",[e.$t("hrm_settings.early_clock_in_time")]),style:{width:"100%"}},{addonAfter:a(()=>[r(_(e.$t("common.minutes")),1)]),_:1},8,["value","placeholder"])]),_:1},8,["label","help","validateStatus"])]),_:1}),l(n,{xs:24,sm:24,md:12,lg:12},{default:a(()=>[l(m,{label:e.$t("hrm_settings.allow_clock_out_till"),name:"allow_clock_out_till",help:e.rules.allow_clock_out_till?e.rules.allow_clock_out_till.message:null,validateStatus:e.rules.allow_clock_out_till?"error":null},{default:a(()=>[l(u,{value:e.formData.allow_clock_out_till,"onUpdate:value":o[4]||(o[4]=t=>e.formData.allow_clock_out_till=t),placeholder:e.$t("common.placeholder_default_text",[e.$t("hrm_settings.allow_clock_out_till")]),style:{width:"100%"}},{addonAfter:a(()=>[r(_(e.$t("common.minutes")),1)]),_:1},8,["value","placeholder"])]),_:1},8,["label","help","validateStatus"])]),_:1})]),_:1}),l(f,{gutter:16},{default:a(()=>[l(n,{xs:24,sm:24,md:12,lg:12},{default:a(()=>[l(m,{label:e.$t("hrm_settings.late_mark_after"),name:"late_mark_after",help:e.rules.late_mark_after?e.rules.late_mark_after.message:null,validateStatus:e.rules.late_mark_after?"error":null},{default:a(()=>[l(u,{value:e.formData.late_mark_after,"onUpdate:value":o[5]||(o[5]=t=>e.formData.late_mark_after=t),placeholder:e.$t("common.placeholder_default_text",[e.$t("hrm_settings.late_mark_after")]),style:{width:"100%"}},{addonAfter:a(()=>[r(_(e.$t("common.minutes")),1)]),_:1},8,["value","placeholder"])]),_:1},8,["label","help","validateStatus"])]),_:1}),l(n,{xs:24,sm:24,md:12,lg:12},{default:a(()=>[l(m,{label:e.$t("hrm_settings.self_clocking"),name:"self_clocking",help:e.rules.self_clocking?e.rules.self_clocking.message:null,validateStatus:e.rules.self_clocking?"error":null},{default:a(()=>[l(F,{value:e.formData.self_clocking,"onUpdate:value":o[6]||(o[6]=t=>e.formData.self_clocking=t),"button-style":"solid",size:"small"},{default:a(()=>[l(i,{value:1},{default:a(()=>[r(_(e.$t("common.yes")),1)]),_:1}),l(i,{value:0},{default:a(()=>[r(_(e.$t("common.no")),1)]),_:1})]),_:1},8,["value"])]),_:1},8,["label","help","validateStatus"])]),_:1})]),_:1}),(k(!0),O(H,null,M(e.formFields,(t,be)=>(k(),I(f,{gutter:16,key:t.id,style:{display:"flex","align-items":"center"}},{default:a(()=>[l(n,{xs:24,sm:24,md:23,lg:23},{default:a(()=>[l(m,{label:e.$t("hrm_settings.allowed_ip_address"),name:"allowed_ip_address"},{default:a(()=>[l(P,{value:t.allowed_ip_address,"onUpdate:value":B=>t.allowed_ip_address=B,placeholder:e.$t("common.placeholder_default_text",[e.$t("hrm_settings.allowed_ip_address")])},null,8,["value","onUpdate:value","placeholder"])]),_:2},1032,["label"])]),_:2},1024),l(n,{span:1,style:{"margin-top":"6px"}},{default:a(()=>[l(T,{onClick:B=>e.removeFormField(t)},null,8,["onClick"])]),_:2},1024)]),_:2},1024))),128)),l(n,{xs:24,sm:24,md:24,lg:24},{default:a(()=>[l(m,null,{default:a(()=>[l(h,{type:"dashed",block:"",onClick:e.addFormField},{default:a(()=>[l(E),r(" "+_(e.$t("hrm_settings.allowed_ip_address")),1)]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1}),l(n,null,{default:a(()=>[l(h,{type:"primary",onClick:e.onSubmit,style:{"margin-right":"8px"},loading:e.loading},{icon:a(()=>[l(b)]),default:a(()=>[r(" "+_(e.$t("common.update")),1)]),_:1},8,["onClick","loading"])]),_:1})]),_:1})]),_:1})],64)}const Oe=N(ke,[["render",we]]);export{Oe as default};