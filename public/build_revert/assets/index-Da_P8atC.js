import{_ as E,d as M,at as q,Y,p as c,o as _,g as L,w as t,a as e,j as S,t as T,au as P,B as z,az as J,b0 as Q,b as R,r as x,u as W,V as X,e as j,z as Z,cF as K,c as b,S as ee,D as F,L as N,i as D,q as V,aG as ne,aD as te,f as G,I as ae,G as oe,aw as se,ay as le,aB as ie,aC as de,a0 as ce}from"./app-OikDM5Kw.js";import{S as re}from"./SettingSidebar-D526a_C1.js";import{A as ue}from"./AdminPageHeader-MbAN4P4t.js";import{a as _e}from"./apiAdmin-yFrp6bZq.js";import{L as H}from"./AddButton-DPoB-YfC.js";import{I as pe}from"./Import-DCvZ1G84.js";import"./TranslationOutlined-CEPKXLet.js";import"./UserOutlined-6nf3lw0h.js";import"./ShoppingCartOutlined-BldUIlX-.js";import"./ScheduleOutlined-Dj7wWgnj.js";import"./AppstoreAddOutlined-BIf-P8Dc.js";import"./MailOutlined-DcsIPfhp.js";import"./FormOutlined-VUqFOjZT.js";import"./index-CaGusbUe.js";import"./AddEdit-Dld4xuY3.js";import"./Upload-D5F1bEQ_.js";import"./SaveOutlined-BSR-wlKo.js";import"./UploadFile-DR1pWrT7.js";import"./CloudDownloadOutlined-CJYOjgRr.js";const me=M({emits:["fetchTranslationsSuccesss"],components:{SyncOutlined:q},setup(o,{emit:d}){const{addEditRequestAdmin:g,loading:n}=_e(),{t:l}=Y();return{loading:n,refetchTranslations:()=>{g({url:P("translations/refetch"),data:{},successMessage:l("translations.fetched_successfully"),success:p=>{d("fetchTranslationsSuccesss")}})}}}});function ge(o,d,g,n,l,$){const p=c("SyncOutlined"),A=z;return _(),L(A,{onClick:o.refetchTranslations,loading:o.loading,style:{width:"100%"}},{icon:t(()=>[e(p)]),default:t(()=>[S(" "+T(o.$t("translations.fetch_new_translations")),1)]),_:1},8,["onClick","loading"])}const fe=E(me,[["render",ge]]),ye={components:{FetchNewTranslation:fe,LangAddButton:H,EditOutlined:J,CheckOutlined:Q},setup(){const{permsArray:o}=R(),d=x([]),g=x([]),n=x([]),l=x(void 0),$=x([]),p=W(),A=X(()=>p.state.auth.lang),v=j({data:[]}),k=j({}),C=x(0),B=(a,f)=>{k[a[`${f}_id`]]={id:a[`${f}_id`],value:a[f]}},O=a=>{axiosAdmin.post(P(`translations/${a}`),{value:k[a].value,_method:"PUT"}).then(()=>{h(),delete k[a]})};var i={};const U=()=>{const a=[{title:"Group",key:"group",dataIndex:"group",fixed:"left"}],f=[];d.value.map(s=>{a.push({title:s.name,key:s.key,dataIndex:s.key}),f.push({key:s.key})}),n.value=f,g.value=a;const r=[];d.value.map(s=>{i[s.key]={},s.translations.map(u=>{i[s.key][u.group]==null&&(i[s.key][u.group]={},s.key=="en"&&r.push(u.group)),i[s.key][u.group][u.key]={id:u.xid,value:u.value}})}),l.value===void 0&&(l.value=r[0]);const m=i.en[l.value],w=[];Object.keys(m).forEach(s=>{const u={};a.map(y=>{y.key=="group"?u[y.key]=s:(u[y.key]=i[y.key][l.value][s]&&i[y.key][l.value][s].value?i[y.key][l.value][s].value:"",u[`${y.key}_id`]=i[y.key][l.value][s]&&i[y.key][l.value][s].id?i[y.key][l.value][s].id:"")}),w.push(u)}),$.value=r,v.data=w};Z(()=>{h()});const h=()=>{axiosAdmin.get("lang-trans").then(a=>{d.value=a.data.data,K(a,i18n,A.value),U()})};return{columns:g,table:v,editableData:k,activeTab:C,langKeys:n,group:l,groupKeys:$,getData:h,edit:B,save:O,permsArray:o,langAdded:()=>{h()}}}},ve={key:0,class:"editable-cell"},ke={key:0,class:"editable-cell-input-wrapper"},he={key:1,class:"editable-cell-text-wrapper"};function be(o,d,g,n,l,$){const p=V,A=ne,v=te,k=c("FetchNewTranslation"),C=G,B=c("admin-page-filters"),O=ae,i=c("check-outlined"),U=c("edit-outlined"),h=oe,I=c("admin-page-table-content");return _(),b(F,null,[e(B,null,{default:t(()=>[e(C,{gutter:[16,16]},{default:t(()=>[e(p,{xs:24,sm:24,md:12,lg:10,xl:12},{default:t(()=>[ee(o.$slots,"actionButtons")]),_:3}),e(p,{xs:24,sm:24,md:12,lg:14,xl:12},{default:t(()=>[e(C,{gutter:[16,16],justify:"end"},{default:t(()=>[e(p,{xs:24,sm:24,md:12,lg:12,xl:8},{default:t(()=>[e(v,{value:n.group,"onUpdate:value":d[0]||(d[0]=a=>n.group=a),"show-search":"",placeholder:"Select group...",style:{width:"100%"},onChange:n.getData},{default:t(()=>[(_(!0),b(F,null,N(n.groupKeys,a=>(_(),L(A,{key:a,value:a},{default:t(()=>[S(T(a),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value","onChange"])]),_:1}),e(p,{xs:24,sm:24,md:12,lg:12,xl:8},{default:t(()=>[e(k,{onFetchTranslationsSuccesss:n.getData},null,8,["onFetchTranslationsSuccesss"])]),_:1})]),_:1})]),_:1})]),_:3})]),_:3}),e(I,null,{default:t(()=>[e(h,{columns:n.columns,"row-key":a=>a.group,"data-source":n.table.data,pagination:!1,bordered:"",size:"middle"},{bodyCell:t(({column:a,text:f,record:r})=>[(_(!0),b(F,null,N(n.langKeys,m=>(_(),b(F,{key:m},[a.dataIndex===m.key?(_(),b("div",ve,[n.editableData[r[`${m.key}_id`]]?(_(),b("div",ke,[e(O,{value:n.editableData[r[`${m.key}_id`]].value,"onUpdate:value":w=>n.editableData[r[`${m.key}_id`]].value=w,onPressEnter:w=>n.save(r[`${m.key}_id`])},null,8,["value","onUpdate:value","onPressEnter"]),e(i,{class:"editable-cell-icon-check",onClick:w=>n.save(r[`${m.key}_id`])},null,8,["onClick"])])):(_(),b("div",he,[S(T(f||" ")+" ",1),e(U,{class:"editable-cell-icon",onClick:w=>n.edit(r,m.key)},null,8,["onClick"])]))])):D("",!0)],64))),128))]),_:1},8,["columns","row-key","data-source"])]),_:1})],64)}const Se=E(ye,[["render",be]]),Te={components:{EyeOutlined:se,SettingSidebar:re,AdminPageHeader:ue,TranslationsSettings:Se,LangAddButton:H,ImportTranslation:pe},setup(){const{permsArray:o,appType:d}=R(),g=x(null),n=window.config.translatioins_sample_file;return{langAdded:()=>{g.value.getData()},appType:d,permsArray:o,transSettingRef:g,sampleFileUrl:n}}};function Ae(o,d,g,n,l,$){const p=le,A=c("router-link"),v=ie,k=de,C=c("AdminPageHeader"),B=c("SettingSidebar"),O=V,i=c("LangAddButton"),U=c("ImportTranslation"),h=c("EyeOutlined"),I=z,a=ce,f=c("TranslationsSettings"),r=G;return _(),b(F,null,[e(C,null,{header:t(()=>[e(p,{title:o.$t("menu.translations"),class:"p-0"},null,8,["title"])]),breadcrumb:t(()=>[e(k,{separator:"-",style:{"font-size":"12px"}},{default:t(()=>[e(v,null,{default:t(()=>[e(A,{to:{name:"admin.dashboard.index"}},{default:t(()=>[S(T(o.$t("menu.dashboard")),1)]),_:1})]),_:1}),e(v,null,{default:t(()=>[S(T(o.$t("menu.settings")),1)]),_:1}),e(v,null,{default:t(()=>[S(T(o.$t("menu.translations")),1)]),_:1})]),_:1})]),_:1}),e(r,null,{default:t(()=>[e(O,{xs:24,sm:24,md:24,lg:4,xl:4,class:"bg-setting-sidebar"},{default:t(()=>[e(B)]),_:1}),e(O,{xs:24,sm:24,md:24,lg:20,xl:20},{default:t(()=>[e(f,{ref:"transSettingRef"},{actionButtons:t(()=>[e(a,null,{default:t(()=>[n.permsArray.includes("translations_create")||n.permsArray.includes("admin")?(_(),L(i,{key:0,onOnAddSuccess:n.langAdded,btnType:"primary",tooltip:!1},{default:t(()=>[S(T(o.$t("langs.add")),1)]),_:1},8,["onOnAddSuccess"])):D("",!0),n.appType=="non-saas"?(_(),L(U,{key:1,pageTitle:o.$t("translations.import_translations"),sampleFileUrl:n.sampleFileUrl,importUrl:"translations/import",onOnUploadSuccess:n.langAdded},null,8,["pageTitle","sampleFileUrl","onOnUploadSuccess"])):D("",!0),e(I,{type:"primary",onClick:d[0]||(d[0]=m=>o.$router.push({name:"admin.settings.langs.index"}))},{default:t(()=>[e(h),S(" "+T(o.$t("langs.view_all_langs")),1)]),_:1})]),_:1})]),_:1},512)]),_:1})]),_:1})],64)}const He=E(Te,[["render",Ae]]);export{He as default};