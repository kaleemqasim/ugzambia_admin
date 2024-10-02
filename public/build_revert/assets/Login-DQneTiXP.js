import{_ as V,d as B,c as W,a as s,w as t,A as D,b as T,r as q,e as E,f as L,o as u,g as d,h as r,t as p,i as w,j as y,u as N,k as U,l as M,I as O,m as F,n as I,B as j,F as z,p as P,C as G,q as H}from"./app-OikDM5Kw.js";import{a as J}from"./apiAdmin-yFrp6bZq.js";import{D as K}from"./DemoCredentials-Dx7yNgXV.js";import"./index-CaGusbUe.js";const Q=B({components:{DemoCredentials:K,ArrowLeftOutlined:D},setup(){const{addEditRequestAdmin:e,loading:l,rules:k}=J(),{globalSetting:S,appType:$}=T(),A=S.value.login_image_url,a=N(),c=U(),n=q(!0),_=E({email:""}),g=E({email:null,password:null}),m=q({error:"",success:""}),f=q({error:"",success:""}),b=()=>{h(),n.value=!1},C=()=>{n.value=!0,h()},h=()=>{m.value={error:"",success:""},f.value={error:"",success:""},k.value={}},v=()=>{e({url:"auth/forgot-password",data:_,success:o=>{f.value={error:"",success:!0}},error:o=>{f.value={error:o.error.message?o.error.message:"",success:!1}}})};return{appType:$,loading:l,rules:k,credentials:g,onSubmit:()=>{m.value={error:"",success:!1},e({url:"auth/login",data:g,success:o=>{const R=o.user;a.commit("auth/updateUser",R),a.commit("auth/updateToken",o.token),a.commit("auth/updateExpires",o.expires_in),a.commit("auth/updateSupperVariable",!1),a.commit("auth/updateVisibleSubscriptionModules",o.visible_subscription_modules),$=="non-saas"?(a.dispatch("auth/updateAllWarehouses"),a.commit("auth/updateWarehouse",o.user.warehouse),c.push({name:"admin.dashboard.index",params:{success:!0}})):R.is_superadmin&&R.user_type=="super_admins"?(a.commit("auth/updateApp",o.app),a.commit("auth/updateSupperToken",o.token),a.commit("auth/updateSupperVariable",!0),a.commit("auth/updateEmailVerifiedSetting",o.email_setting_verified),c.push({name:"superadmin.dashboard.index",params:{success:!0}})):(a.commit("auth/updateApp",o.app),a.commit("auth/updateEmailVerifiedSetting",o.email_setting_verified),a.commit("auth/updateAddMenus",o.shortcut_menus.credentials),a.dispatch("auth/updateAllWarehouses"),a.commit("auth/updateWarehouse",o.user.warehouse),c.push({name:"admin.dashboard.index",params:{success:!0}}))},error:o=>{m.value={error:o.error.message?o.error.message:"",success:!1}}})},onRequestSend:m,globalSetting:S,loginBackground:A,innerWidth:window.innerWidth,onResetPass:b,onResetClose:C,resetPassword:n,onReset:v,resetCredential:_,onResetRequest:f}}}),X={class:"login-main-container"},Y={class:"login-logo"},Z=["src"],x={style:{"text-align":"left","margin-top":"10px","margin-bottom":"30px"}},ee={style:{"font-weight":"bold","font-size":"18px","margin-bottom":"2px"}},se={style:{"margin-bottom":"14px"}},ae=["loading"],te={class:"login-logo mb-30"},oe=["src"],le=["loading"],ne={class:"right-login-div"},re=["src"];function ie(e,l,k,S,$,A){const a=M,c=O,n=F,_=I,g=j,m=z,f=P("DemoCredentials"),b=G,C=P("ArrowLeftOutlined"),h=H,v=L;return u(),W("div",X,[s(v,{class:"main-container-div"},{default:t(()=>[s(h,{xs:24,sm:24,md:24,lg:8},{default:t(()=>[s(v,{class:"login-left-div"},{default:t(()=>[s(h,{xs:{span:20,offset:2},sm:{span:20,offset:2},md:{span:16,offset:4},lg:{span:16,offset:4}},{default:t(()=>[e.resetPassword?(u(),d(b,{key:0,title:null,class:"login-div",bordered:e.innerWidth<=768},{default:t(()=>[s(m,{layout:"vertical"},{default:t(()=>[r("div",Y,[r("img",{class:"login-img-logo",src:e.globalSetting.light_logo_url},null,8,Z)]),l[6]||(l[6]=r("br",null,null,-1)),r("div",x,[r("div",ee,p(e.$t("user.sign_in")),1),r("div",se,p(e.$t("messages.please_login_to_your_account")),1)]),e.onRequestSend.error!=""?(u(),d(a,{key:0,message:e.onRequestSend.error,type:"error","show-icon":"",class:"mb-20 mt-10"},null,8,["message"])):w("",!0),e.onRequestSend.success?(u(),d(a,{key:1,message:e.$t("messages.login_success"),type:"success","show-icon":"",class:"mb-20 mt-10"},null,8,["message"])):w("",!0),s(n,{label:e.$t("user.email_phone"),name:"email",help:e.rules.email?e.rules.email.message:null,validateStatus:e.rules.email?"error":null},{default:t(()=>[s(c,{value:e.credentials.email,"onUpdate:value":l[0]||(l[0]=i=>e.credentials.email=i),onPressEnter:e.onSubmit,placeholder:e.$t("common.placeholder_default_text",[e.$t("user.email_phone")])},null,8,["value","onPressEnter","placeholder"])]),_:1},8,["label","help","validateStatus"]),s(n,{label:e.$t("user.password"),name:"password",help:e.rules.password?e.rules.password.message:null,validateStatus:e.rules.password?"error":null},{default:t(()=>[s(_,{value:e.credentials.password,"onUpdate:value":l[1]||(l[1]=i=>e.credentials.password=i),onPressEnter:e.onSubmit,placeholder:e.$t("common.placeholder_default_text",[e.$t("user.password")])},null,8,["value","onPressEnter","placeholder"])]),_:1},8,["label","help","validateStatus"]),s(n,{class:"mt-30 mb-0"},{default:t(()=>[s(g,{loading:e.loading,onClick:e.onSubmit,class:"login-btn",block:"",type:"primary"},{default:t(()=>[y(p(e.$t("menu.login")),1)]),_:1},8,["loading","onClick"])]),_:1}),s(n,{class:"mt-10",style:{"text-align":"center","font-weight":"bold"}},{default:t(()=>[r("a",{loading:e.loading,onClick:l[2]||(l[2]=(...i)=>e.onResetPass&&e.onResetPass(...i))},p(e.$t("menu.reset_password")),9,ae)]),_:1}),e.appType==="saas"?(u(),d(n,{key:2,class:"mt-10",style:{"text-align":"center","font-weight":"bold"}},{default:t(()=>[s(g,{style:{"font-weight":"bold"},type:"link",loading:e.loading,onClick:l[3]||(l[3]=()=>e.$router.push({name:"superadmin.register"}))},{default:t(()=>[y(p(e.$t("front_website.register")),1)]),_:1},8,["loading"])]),_:1})):w("",!0)]),_:1}),s(f,{credentials:e.credentials},null,8,["credentials"])]),_:1},8,["bordered"])):(u(),d(b,{key:1,title:null,class:"login-div",bordered:e.innerWidth<=768},{default:t(()=>[e.onResetRequest.success?(u(),d(a,{key:0,message:e.$t("messages.reset_success"),type:"success","show-icon":"",class:"mb-20 mt-10"},null,8,["message"])):(u(),d(m,{key:1,layout:"vertical"},{default:t(()=>[r("div",te,[r("img",{class:"login-img-logo",src:e.globalSetting.light_logo_url},null,8,oe)]),l[7]||(l[7]=r("br",null,null,-1)),e.onResetRequest.error!=""?(u(),d(a,{key:0,message:e.onResetRequest.error,type:"error","show-icon":"",class:"mb-20 mt-10",style:{"margin-top":"40px"}},null,8,["message"])):w("",!0),s(n,{label:e.$t("user.email_phone"),name:"email",help:e.rules.email?e.rules.email.message:null,validateStatus:e.rules.email?"error":null,style:{"margin-top":"32px"}},{default:t(()=>[s(c,{value:e.resetCredential.email,"onUpdate:value":l[4]||(l[4]=i=>e.resetCredential.email=i),placeholder:e.$t("common.placeholder_default_text",[e.$t("user.email_phone")])},null,8,["value","placeholder"])]),_:1},8,["label","help","validateStatus"]),s(n,{class:"mt-30 mb-0"},{default:t(()=>[s(g,{loading:e.loading,onClick:e.onReset,class:"login-btn",block:"",type:"primary"},{default:t(()=>[y(p(e.$t("menu.reset")),1)]),_:1},8,["loading","onClick"])]),_:1}),s(n,{class:"mt-10"},{default:t(()=>[s(n,{style:{"text-align":"center","font-weight":"bold"}},{default:t(()=>[r("a",{loading:e.loading,onClick:l[5]||(l[5]=(...i)=>e.onResetClose&&e.onResetClose(...i))},[s(C),y(" "+p(e.$t("common.back")),1)],8,le)]),_:1})]),_:1})]),_:1}))]),_:1},8,["bordered"]))]),_:1})]),_:1})]),_:1}),s(h,{xs:0,sm:0,md:24,lg:16},{default:t(()=>[r("div",ne,[r("img",{class:"right-image",src:e.loginBackground},null,8,re)])]),_:1})]),_:1})])}const ce=V(Q,[["render",ie]]);export{ce as default};
