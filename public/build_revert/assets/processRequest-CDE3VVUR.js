import{ak as m,b6 as p}from"./app-OikDM5Kw.js";const v=t=>{const{url:i,data:c,success:l,error:d}=t;var o={};m(c,function(e,r){e==null?o[r]=null:o[r]=e}),axiosAdmin.post(i,o).then(e=>{l(e.data)}).catch(e=>{const r=e.data,n=e.status;var f={};if(n==422){if(r.error&&typeof r.error.details<"u")for(var s=Object.keys(r.error.details),a=0;a<s.length;a++){var u=s[a].replace(".","\\.");f[u]={required:!0,message:r.error.details[s[a]][0]}}d(f),t.t&&p.error(t.t("common.fix_errors"))}else n==403&&d(r)}).then(()=>{})};export{v as p};
