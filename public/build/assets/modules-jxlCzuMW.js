import{f as a,Y,u as Z,au as g,av as A,ak as k,aZ as z,b7 as E,br as F,ax as q,b8 as G}from"./app-C8arsYle.js";const J=()=>{const b=a([]),w=a({}),x=a(""),v=a(""),P=a(""),d=a(!1),{t:c}=Y(),I=a(window.config.product_name),D=a(window.config.product_version),M=Z(),C=a([]),N=a([]),p=a(!1),f=a(!1),u=a(""),n=a(0);var _;const B=()=>{p.value=!0;const o=window.config.product_name,t=axiosAdmin.get(g("modules")),s=A.post("https://envato.codeifly.com/product",{verified_name:o,domain:window.location.host});var e=[];Promise.all([t,s]).then(([T,r])=>{const m=r.data.product,i=window.config.installed_modules,h=window.config.modules;C.value=r.data.offers,N.value=r.data.settings,k(m.modules,l=>{const y=z(i,["verified_name",l.verified_name]);if(e.push({...l,current_version:y?y.current_version:"-",status:E(h,l.verified_name),installed:y!=null}),!l.verified||l.other_domain_verified){var U=[...window.config.modules],j=F(U,function(V){return V!=l.verified_name});M.commit("auth/updateActiveModules",j),window.config.modules=j}}),b.value=e,p.value=!1})},L=o=>{const{success:t}=o;d.value=!0,w.value={},v.value="",A.post("https://envato.codeifly.com/verify",{verified_name:I.value,purchase_code:x.value,domain:window.location.host,app_url:window.location.href,version:D.value}).then(s=>{d.value=!1,s.data.status=="success"?(d.value=!1,q.success({message:c("common.success")}),P.value=c("messages.verify_success"),t(s.data)):(q.error({message:c("common.error")}),v.value=s.data.message)}).catch(s=>{d.value=!1;const e=s.response.data,T=s.response.status;var r={};if(T==422){if(e.errors&&typeof e.errors<"u")for(var m=Object.keys(e.errors),i=0;i<m.length;i++){var h=m[i].replace(".","\\.");r[h]={required:!0,message:e.errors[m[i]][0]}}w.value=r,G.error(c("common.fix_errors"))}else v.value=e.message?e.message:c("messages.somehing_went_wrong")})},O=o=>{f.value=!0,n.value=0,u.value="";const t={verified_name:o,domain:window.location.host};_=window.setInterval(function(){S()},1500),axiosAdmin.post(g("modules/install"),t).then(s=>{f.value=!1,n.value=100,u.value="started",axiosAdmin.post(g("modules/extract"),t).then(e=>{u.value="completed",A.post("https://envato.codeifly.com/version-update",{verified_name:e.data.verified_name,version:e.data.version,domain:window.location.host}),M.commit("auth/updateActiveModules",e.data.enabled_modules),window.config.modules=e.data.enabled_modules,window.config.installed_modules=e.data.installed_modules}).catch(e=>{u.value="failed"})}).catch(s=>{f.value=!1,n.value=0,clearInterval(_)})},S=()=>{axiosAdmin(g("modules/download-percentage")).then(o=>{n.value=parseInt(o.data.percentage),n.value>=100&&clearInterval(_)})};return{allModules:b,getModuleData:B,install:O,dataLoading:p,verifyPurchase:L,rules:w,purchaseCode:x,errorMessage:v,successMessage:P,loading:d,productName:I,version:D,offers:C,settings:N,downloading:f,downloadPercentage:n,extracting:u}};export{J as m};