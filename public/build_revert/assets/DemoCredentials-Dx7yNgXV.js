import{a as p,x as S,_ as C,d as y,r as v,z as V,p as k,o as c,c as f,w as r,j as i,t as l,D as x,h as m,i as d,g as $,v as D,E,G as H}from"./app-OikDM5Kw.js";var P={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 112H724V72c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v40H500V72c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v40H320c-17.7 0-32 14.3-32 32v120h-96c-17.7 0-32 14.3-32 32v632c0 17.7 14.3 32 32 32h512c17.7 0 32-14.3 32-32v-96h96c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM664 888H232V336h218v174c0 22.1 17.9 40 40 40h174v338zm0-402H514V336h.2L664 485.8v.2zm128 274h-56V456L544 264H360v-80h68v32c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-32h152v32c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-32h68v576z"}}]},name:"snippets",theme:"outlined"};function g(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},a=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(a=a.concat(Object.getOwnPropertySymbols(t).filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable}))),a.forEach(function(s){j(n,s,t[s])})}return n}function j(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var u=function(e,t){var a=g({},e,t.attrs);return p(S,g({},a,{icon:P}),null)};u.displayName="SnippetsOutlined";u.inheritAttrs=!1;const z=y({props:["credentials"],components:{SnippetsOutlined:u},setup(){const n=window.config.app_env,e=window.config.app_type,t=v([{title:"Details",dataIndex:"details"},{title:"action",dataIndex:"action"}]),a=v([{name:"Admin",email:"admin@example.com",password:12345678},{name:"StockManager",email:"stockmanager@example.com",password:12345678},{name:"Salesman",email:"salesman@example.com",password:12345678}]);return V(()=>{e=="saas"&&(a.value=[{name:"SuperAdmin",email:"superadmin@example.com",password:12345678},...a.value])}),{appEnv:n,demoCredentials:a,demoCredentialsColumns:t}}}),B={key:0};function I(n,e,t,a,s,N){const h=D,w=k("SnippetsOutlined"),b=E,O=H;return n.appEnv!="envato"?(c(),f("div",B,[p(h,null,{default:r(()=>[i(l(n.$t("common.demo_account_credentials")),1)]),_:1}),p(O,{pagination:!1,dataSource:n.demoCredentials,columns:n.demoCredentialsColumns},{bodyCell:r(({column:_,record:o})=>[_.dataIndex==="details"?(c(),f(x,{key:0},[m("b",null,l(o.name),1),e[0]||(e[0]=i()),e[1]||(e[1]=m("br",null,null,-1)),i(" Email : "+l(o.email)+" ",1),e[2]||(e[2]=m("br",null,null,-1)),i(" Password : "+l(o.password),1)],64)):d("",!0),_.dataIndex==="action"?(c(),$(b,{key:1,onClick:()=>{n.credentials.email=o.email,n.credentials.password=o.password}},{title:r(()=>[i(l(n.$t("popover.click_here_to_copy_credentials",[o.name])),1)]),default:r(()=>[p(w)]),_:2},1032,["onClick"])):d("",!0)]),_:1},8,["dataSource","columns"])])):d("",!0)}const A=C(z,[["render",I]]);export{A as D};
