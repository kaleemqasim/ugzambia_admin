import{S as L}from"./SettingSidebar-BaDGGiU3.js";import{A as j}from"./AdminPageHeader-BhKFwWP2.js";import{_ as B,d as R,at as E,f as b,Y as N,u as z,E as q,au as T,av as F,X as O,a as t,aH as U,r as v,o as n,i,w as a,j as D,k as _,c as S,G as M,l as g,t as u,cG as J,m as X,v as Y,J as K,q as P,h as V,C as Q,bl as W,cz as Z,cn as x,b2 as ee,B as te,aM as ae,bF as ne,ay as oe,aB as se,aC as le}from"./app-yQu0_bFn.js";import"./index-CNNFGL0_.js";import{S as pe}from"./ShoppingCartOutlined-CZv7lsGx.js";import{I as de}from"./InfoOutlined-CT0ri5Fc.js";import"./MailOutlined-DuUP2dI9.js";import"./TranslationOutlined-BHy0CoGU.js";import"./UserOutlined-CZ0TH7Wt.js";import"./ScheduleOutlined-BsWffWuw.js";import"./AppstoreAddOutlined-BEVWAjr1.js";import"./FormOutlined-B_O9aUAS.js";const ie=R({components:{SyncOutlined:E},setup(){const e=b([]),w=J,{t:s}=N(),l=b("fetching"),r=b([]),$=z(),d=[{title:s("update_app.name"),dataIndex:"name",width:"40%"},{title:s("update_app.value"),dataIndex:"value"}];return q(()=>{axiosAdmin(T("update-app")).then(o=>{const c=o.data.app_version;e.value=o.data.app_details,F.post("https://envato.codeifly.com/product",{verified_name:window.config.product_name,domain:window.location.host}).then(m=>{r.value=m.data,r.value.product.other_domain_verified?O.confirm({title:s("update_app.verify_failed"),icon:t(U),content:s("update_app.verified_with_other_domain"),okText:s("update_app.verify_again"),okType:"danger",cancelButtonProps:{disabled:!0},onOk(){$.dispatch("auth/logoutToRootUrl")}}):r.value.product.verified?r.value.product.version!=c?l.value="update_available":l.value="success":O.confirm({title:s("update_app.verify_failed"),icon:t(U),content:s("update_app.verify_failed_message"),okText:s("update_app.verify_again"),okType:"danger",cancelButtonProps:{disabled:!0},onOk(){$.dispatch("auth/logoutToRootUrl")}})})})}),{tableColumns:d,appDetails:e,vueVersion:w,productStatus:l,product:r,updateApp:()=>{O.confirm({title:s("common.install"),icon:t(U),content:s("messages.are_you_sure_install_message"),okText:s("common.yes"),okType:"danger",cancelText:s("common.no"),onOk(){installUpdateModalTitle.value=s("common.installing")+"...",emit("install",props.module.verified_name),installUpdateModalVisible.value=!0},onCancel(){}})}}}}),ue=["innerHTML"],ce={class:"table-responsive mt-10"},re={key:1},_e={key:0},me={key:1};function fe(e,w,s,l,r,$){const d=v("SyncOutlined"),p=X,o=Y,c=K,m=P,y=V,h=Q;return n(),i(h,{class:"page-content-container mt-20 mb-20"},{default:a(()=>[t(y,{class:"mt-20"},{default:a(()=>[t(m,{span:24},{default:a(()=>[e.productStatus=="fetching"?(n(),i(p,{key:0,type:"info",showIcon:"",message:e.$t("messages.fetching_product_details")},{icon:a(()=>[t(d,{spin:""})]),default:a(()=>[D("span",{innerHTML:e.$t("messages.fetching_product_details")},null,8,ue)]),_:1},8,["message"])):_("",!0),e.productStatus=="success"?(n(),i(p,{key:1,type:"success",showIcon:"",message:e.$t("messages.product_is_upto_date")},null,8,["message"])):_("",!0),e.productStatus=="update_available"?(n(),i(p,{key:2,type:"warning",showIcon:"",message:e.$t("messages.new_app_version_avaialbe",[e.product.product.version])},null,8,["message"])):_("",!0),D("div",ce,[t(c,{columns:e.tableColumns,"row-key":f=>f.id,"data-source":e.appDetails,pagination:!1,showHeader:!1},{bodyCell:a(({column:f,record:k})=>[f.dataIndex=="name"?(n(),S(M,{key:0},[k.name=="app_details"?(n(),i(o,{key:0,level:5,strong:""},{default:a(()=>[g(u(e.$t("update_app.app_details")),1)]),_:1})):(n(),S("span",re,u(e.$t(`update_app.${k.name}`)),1))],64)):_("",!0),f.dataIndex=="value"?(n(),S(M,{key:1},[k.name=="vue_version"?(n(),S("span",_e,u(e.vueVersion),1)):(n(),S("span",me,u(k.value),1))],64)):_("",!0)]),_:1},8,["columns","row-key","data-source"])])]),_:1})]),_:1})]),_:1})}const ge=B(ie,[["render",fe]]),ve=R({props:["productStatus","product"],components:{DownloadOutlined:W,ShoppingCartOutlined:pe,ReloadOutlined:Z,SyncOutlined:E,CheckCircleOutlined:x,InfoOutlined:de,CheckOutlined:ee},setup(e,{emit:w}){const s=window.config.app_env,{t:l}=N(),r=b(!1),$=b(""),d=b(!1),p=b(""),o=b(0),c=z();var m;const y=()=>{O.confirm({title:l("common.update"),icon:t(U),content:t("div",{style:"color:red;"},l("messages.are_you_sure_update_message")),okText:l("common.yes"),okType:"danger",cancelText:l("common.no"),onOk(){$.value=l("common.updating")+"...",h(e.product.name),r.value=!0},onCancel(){}})},h=C=>{d.value=!0,o.value=0,p.value="";const A={verified_name:C,domain:window.location.host};m=window.setInterval(function(){f()},1500),axiosAdmin.post(T("update-app/update"),A).then(H=>{d.value=!1,o.value=100,p.value="started";const G={...A,file_name:H.data.file_name};axiosAdmin.post(T("update-app/extract"),G).then(I=>{p.value="completed",F.post("https://envato.codeifly.com/version-update",{verified_name:I.data.verified_name,version:I.data.version,domain:window.location.host}),c.commit("auth/updateActiveModules",I.data.enabled_modules),window.config.modules=I.data.enabled_modules,window.config.installed_modules=I.data.installed_modules}).catch(I=>{p.value="failed"})}).catch(H=>{d.value=!1,o.value=0,clearInterval(m)})},f=()=>{axiosAdmin(T("update-app/download-percentage")).then(C=>{o.value=parseInt(C.data.percentage),o.value>=100&&clearInterval(m)})};return{appEnv:s,updateApp:y,installUpdateModalVisible:r,closeInstallUpdateModal:()=>{r.value=!1,c.dispatch("auth/logoutToRootUrl")},downloadPercentage:o,downloading:d,extracting:p}}});function ye(e,w,s,l,r,$){const d=v("SyncOutlined"),p=te,o=ae,c=v("CheckCircleOutlined"),m=ne,y=P,h=V,f=v("InfoOutlined"),k=v("CheckOutlined"),C=O;return n(),S(M,null,[e.productStatus=="update_available"&&e.appEnv=="envato"?(n(),i(p,{key:0,type:"primary",onClick:e.updateApp},{default:a(()=>[t(d),g(" "+u(e.$t("update_app.update_app")),1)]),_:1},8,["onClick"])):_("",!0),t(C,{open:e.installUpdateModalVisible,"onUpdate:open":w[0]||(w[0]=A=>e.installUpdateModalVisible=A),title:e.$t("common.installing"),maskClosable:!1,closable:!1,footer:null},{default:a(()=>[t(h,{class:"mb-10"},{default:a(()=>[t(y,{span:24},{default:a(()=>[e.downloadPercentage<100?(n(),i(o,{key:0},{default:a(()=>[t(d,{spin:""}),g(" "+u(e.$t("messages.downloading_started_message")),1)]),_:1})):(n(),i(o,{key:1,strong:"",type:"success"},{default:a(()=>[t(c),g(" "+u(e.$t("module.downloading_completed")),1)]),_:1})),e.downloadPercentage<100?(n(),i(m,{key:2,percent:e.downloadPercentage},null,8,["percent"])):_("",!0)]),_:1})]),_:1}),t(h,{class:"mb-10"},{default:a(()=>[t(y,{span:24},{default:a(()=>[e.extracting==""?(n(),i(o,{key:0,type:"secondary"},{default:a(()=>[t(f),g(" "+u(e.$t("module.extract_zip_file")),1)]),_:1})):_("",!0),e.extracting=="started"?(n(),i(o,{key:1},{default:a(()=>[t(d,{spin:""}),g(" "+u(e.$t("messages.file_extracting_message")),1)]),_:1})):_("",!0),e.extracting=="completed"?(n(),i(o,{key:2,strong:"",type:"success"},{default:a(()=>[t(c),g(" "+u(e.$t("module.file_extracted")),1)]),_:1})):_("",!0)]),_:1})]),_:1}),e.extracting=="completed"?(n(),i(h,{key:0,class:"mt-20 mb-10"},{default:a(()=>[t(y,{span:24},{default:a(()=>[t(p,{type:"primary",onClick:e.closeInstallUpdateModal,block:""},{default:a(()=>[t(k),g(" "+u(e.$t("messages.installation_success")),1)]),_:1},8,["onClick"])]),_:1})]),_:1})):_("",!0)]),_:1},8,["open","title"])],64)}const he=B(ve,[["render",ye]]),ke={components:{SettingSidebar:L,AdminPageHeader:j,UpdateAppSettings:ge,InstallApp:he},setup(){return{settingRef:b(null)}}};function be(e,w,s,l,r,$){const d=v("InstallApp"),p=oe,o=v("router-link"),c=se,m=le,y=v("AdminPageHeader"),h=v("SettingSidebar"),f=P,k=v("UpdateAppSettings"),C=v("admin-page-table-content"),A=V;return n(),S(M,null,[t(y,null,{header:a(()=>[t(p,{title:e.$t("menu.update_app"),class:"p-0"},{extra:a(()=>[l.settingRef?(n(),i(d,{key:0,productStatus:l.settingRef.productStatus,product:l.settingRef.product.product},null,8,["productStatus","product"])):_("",!0)]),_:1},8,["title"])]),breadcrumb:a(()=>[t(m,{separator:"-",style:{"font-size":"12px"}},{default:a(()=>[t(c,null,{default:a(()=>[t(o,{to:{name:"admin.dashboard.index"}},{default:a(()=>[g(u(e.$t("menu.dashboard")),1)]),_:1},8,["to"])]),_:1}),t(c,null,{default:a(()=>[g(u(e.$t("menu.settings")),1)]),_:1}),t(c,null,{default:a(()=>[g(u(e.$t("menu.update_app")),1)]),_:1})]),_:1})]),_:1}),t(A,null,{default:a(()=>[t(f,{xs:24,sm:24,md:24,lg:4,xl:4,class:"bg-setting-sidebar"},{default:a(()=>[t(h)]),_:1}),t(f,{xs:24,sm:24,md:24,lg:20,xl:20},{default:a(()=>[t(C,null,{default:a(()=>[t(k,{ref:"settingRef"},null,512)]),_:1})]),_:1})]),_:1})],64)}const Ve=B(ke,[["render",be]]);export{Ve as default};
