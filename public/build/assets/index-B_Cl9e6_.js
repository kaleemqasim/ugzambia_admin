import{S as R}from"./SettingSidebar-BKL5DhFf.js";import{A as V}from"./AdminPageHeader-BWk1lolr.js";import{au as w,Y as O,_ as S,R as D,az as W,aA as j,aH as B,f as A,E as F,r as p,o as y,c as T,a as t,w as n,T as J,j as h,i as E,l,t as u,k as L,G as x,X as G,q as I,h as P,m as H,ar as U,B as q,a0 as M,J as X,d as N,aT as Y,aM as K,bj as Q,ap as Z,ay as ee,aB as te,aC as ne}from"./app-CLFRnoDY.js";import{a as ae}from"./apiAdmin-DLxgfbyg.js";import{S as oe}from"./SaveOutlined-DPGbn-Vn.js";import{S as se}from"./SettingOutlined-CwDS5tO-.js";import"./MailOutlined-CZFB-dWO.js";import"./TranslationOutlined-CyNP-hJx.js";import"./UserOutlined-CoR474ue.js";import"./ShoppingCartOutlined-CkEZIRSE.js";import"./ScheduleOutlined-BucV-Ziy.js";import"./AppstoreAddOutlined-Jyc07LKy.js";import"./FormOutlined-2bgeJ3cQ.js";import"./index-01DLus6S.js";const ce=()=>{const e=w("database-backups"),{t:c}=O(),a=[{title:c("database_backup.file"),dataIndex:"name",sorter:!0},{title:c("database_backup.file_size"),dataIndex:"size",sorter:!0},{title:c("common.action"),dataIndex:"action"}];return{url:e,columns:a}},_e={components:{PlusOutlined:D,EditOutlined:W,DeleteOutlined:j,ExclamationCircleOutlined:B},setup(){const{t:e}=O(),{url:c,columns:a}=ce(),s=A([]);return F(()=>{axiosAdmin.post(w("database-backups")).then(o=>{s.value=o.data.data})}),{columns:a,results:s,deleteBackup:o=>{G.confirm({title:e("database_backup.delete_backup"),icon:t(B),content:e("database_backup.are_you_sure_delete_backup"),okText:e("common.yes"),okType:"danger",cancelText:e("common.no"),onOk(){axiosAdmin.post(w("delete-backup"),{file_name:o}).then(_=>{s.value=_.data.data})},onCancel(){}})},backupCreated:o=>{s.value=o.data}}}},le={class:"table-responsive mt-20"};function ue(e,c,a,s,i,k){const o=I,_=P,r=p("admin-page-filters"),m=H,b=U,d=q,g=M,f=X,v=p("admin-page-table-content");return y(),T(x,null,[t(r,null,{default:n(()=>[t(_,{gutter:[16,16]},{default:n(()=>[t(o,{span:24},{default:n(()=>[J(e.$slots,"actionButtons")]),_:3})]),_:3})]),_:3}),t(v,null,{default:n(()=>[t(_,{class:"mt-20"},{default:n(()=>[t(o,{span:24},{default:n(()=>[t(m,{type:"warning",showIcon:"",message:e.$t("database_backup.backup_locaion_is")},null,8,["message"]),h("div",le,[t(f,{columns:s.columns,"row-key":$=>$.id,"data-source":s.results,pagination:!1,bordered:"",size:"middle"},{bodyCell:n(({column:$,record:C})=>[$.dataIndex=="action"?(y(),E(g,{key:0},{default:n(()=>[t(b,{href:C.url,target:"_blank"},{default:n(()=>[l(u(e.$t("common.download")),1)]),_:2},1032,["href"]),t(d,{type:"link",onClick:z=>s.deleteBackup(C.name)},{default:n(()=>[l(u(e.$t("common.delete")),1)]),_:2},1032,["onClick"])]),_:2},1024)):L("",!0)]),_:1},8,["columns","row-key","data-source"])])]),_:1})]),_:1})]),_:1})],64)}const pe=S(_e,[["render",ue]]),re=N({emits:["success"],components:{PlusOutlined:D,ExclamationCircleOutlined:B},setup(e,{emit:c}){const{t:a}=O(),{addEditRequestAdmin:s,loading:i}=ae();return{generateBack:()=>{G.confirm({title:a("database_backup.generate_backup"),icon:t(B),content:a("database_backup.are_you_sure_generate_backup"),okText:a("common.yes"),okType:"danger",cancelText:a("common.no"),onOk(){s({url:w("generate-backups"),data:{},successMessage:a("database_backup.backup_generated_successfully"),success:o=>{c("success",o)}})},onCancel(){}})},loading:i}}});function de(e,c,a,s,i,k){const o=p("PlusOutlined"),_=q;return y(),E(_,{type:"primary",onClick:e.generateBack,loading:e.loading},{default:n(()=>[t(o),l(" "+u(e.$t("database_backup.generate_backup")),1)]),_:1},8,["onClick","loading"])}const ie=S(re,[["render",de]]),me=N({components:{PlusOutlined:D,LoadingOutlined:Y,SaveOutlined:oe,SettingOutlined:se},setup(){const e=A(!1);return{visible:e,onClose:()=>{e.value=!1},openDrawer:()=>{e.value=!0},drawerWidth:window.innerWidth<=991?"90%":"35%"}}});function be(e,c,a,s,i,k){const o=p("SettingOutlined"),_=q,r=H,m=I,b=P,d=K,g=Q,f=Z;return y(),T(x,null,[t(_,{type:"primary",onClick:e.openDrawer},{icon:n(()=>[t(o)]),default:n(()=>[l(" "+u(e.$t("database_backup.settings")),1)]),_:1},8,["onClick"]),t(f,{title:e.$t("database_backup.backup_command_setting"),width:e.drawerWidth,open:e.visible,"body-style":{paddingBottom:"80px"},"footer-style":{textAlign:"right"},maskClosable:!1,onClose:e.onClose},{footer:n(()=>[t(_,{onClick:e.onClose},{default:n(()=>[l(u(e.$t("common.cancel")),1)]),_:1},8,["onClick"])]),default:n(()=>[t(b,{gutter:16,class:"mb-10"},{default:n(()=>[t(m,{span:24},{default:n(()=>[t(r,{type:"warning",showIcon:"",message:e.$t("database_backup.put_dump_path_command_on_env_file")},null,8,["message"])]),_:1})]),_:1}),t(b,{gutter:16},{default:n(()=>[t(m,{span:24},{default:n(()=>[t(g,null,{default:n(()=>[h("blockquote",null,[t(d,{type:"warning"},{default:n(()=>[l(u(e.$t("database_backup.window_command_path")),1)]),_:1})]),h("blockquote",null,[t(d,{type:"warning"},{default:n(()=>[l(u(e.$t("database_backup.laragon_command_path")),1)]),_:1})]),h("blockquote",null,[t(d,{type:"warning"},{default:n(()=>[l(u(e.$t("database_backup.linux_command_path")),1)]),_:1})])]),_:1})]),_:1})]),_:1})]),_:1},8,["title","width","open","onClose"])],64)}const ge=S(me,[["render",be]]),ke={components:{SettingSidebar:R,AdminPageHeader:V,DatabaseSettings:pe,GenerateDbBackup:ie,BackupCommandSetting:ge},setup(){const e=A(null);return{backupCreated:a=>{e.value.backupCreated(a)},settingRef:e}}};function fe(e,c,a,s,i,k){const o=ee,_=p("router-link"),r=te,m=ne,b=p("AdminPageHeader"),d=p("SettingSidebar"),g=I,f=p("GenerateDbBackup"),v=p("BackupCommandSetting"),$=M,C=p("DatabaseSettings"),z=P;return y(),T(x,null,[t(b,null,{header:n(()=>[t(o,{title:e.$t("menu.database_backup"),class:"p-0"},null,8,["title"])]),breadcrumb:n(()=>[t(m,{separator:"-",style:{"font-size":"12px"}},{default:n(()=>[t(r,null,{default:n(()=>[t(_,{to:{name:"admin.dashboard.index"}},{default:n(()=>[l(u(e.$t("menu.dashboard")),1)]),_:1},8,["to"])]),_:1}),t(r,null,{default:n(()=>[l(u(e.$t("menu.settings")),1)]),_:1}),t(r,null,{default:n(()=>[l(u(e.$t("menu.database_backup")),1)]),_:1})]),_:1})]),_:1}),t(z,null,{default:n(()=>[t(g,{xs:24,sm:24,md:24,lg:4,xl:4,class:"bg-setting-sidebar"},{default:n(()=>[t(d)]),_:1}),t(g,{xs:24,sm:24,md:24,lg:20,xl:20},{default:n(()=>[t(C,{ref:"settingRef"},{actionButtons:n(()=>[t($,null,{default:n(()=>[t(f,{onSuccess:s.backupCreated},null,8,["onSuccess"]),t(v)]),_:1})]),_:1},512)]),_:1})]),_:1})],64)}const Pe=S(ke,[["render",fe]]);export{Pe as default};