import{_ as f,d as u,r as c,b as T,z as p,a6 as D,o as b,g as h,bc as g}from"./app-OikDM5Kw.js";const C=u({props:{dateTime:{default:void 0},disabled:{default:!1}},emits:["dateTimeChanged"],setup(e,{emit:d}){const t=c(void 0),{disabledDate:s,formatDateTime:i,dayjs:m}=T();p(()=>{n(e.dateTime)});const n=a=>{e.dateTime?t.value=m(a):t.value=void 0},o=a=>a?i(a.format()):void 0,l=a=>{const r=a?a.utc().format("YYYY-MM-DDTHH:mm:ssZ"):void 0;d("dateTimeChanged",r)};return D(()=>e.dateTime,(a,r)=>{n(a)}),{dateTimeValue:t,disabledDate:s,formatOrderDate:o,dateTimeChanged:l}}});function k(e,d,t,s,i,m){const n=g;return b(),h(n,{value:e.dateTimeValue,"onUpdate:value":d[0]||(d[0]=o=>e.dateTimeValue=o),format:e.formatOrderDate,"disabled-date":e.disabledDate,"show-time":"",placeholder:e.$t("common.date_time"),style:{width:"100%"},onChange:e.dateTimeChanged,disabled:e.disabled},null,8,["value","format","disabled-date","placeholder","onChange","disabled"])}const _=f(C,[["render",k]]);export{_ as D};
