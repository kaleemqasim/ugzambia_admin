import{_ as c,o as t,c as n,a as u,j as m,t as o,D as k,a1 as z,g as r,w as p,p as g,ar as h}from"./app-OikDM5Kw.js";const y={props:{user:{default:{}},size:{default:30}}},L={key:1};function w(a,_,e,i,l,f){const s=z;return e.user?(t(),n(k,{key:0},[u(s,{size:e.size,src:e.user.profile_image_url},null,8,["size","src"]),m(" "+o(e.user.name),1)],64)):(t(),n("span",L,o(a.$t("user.walk_in_customer")),1))}const x=c(y,[["render",w]]),U={props:{user:{default:{}},size:{default:30},showLink:{default:!0}},components:{UserLogo:x}};function v(a,_,e,i,l,f){const s=g("UserLogo"),d=h;return e.showLink?(t(),r(d,{key:0},{default:p(()=>[u(s,{user:e.user,size:e.size},null,8,["user","size"])]),_:1})):(t(),r(s,{key:1,user:e.user,size:e.size},null,8,["user","size"]))}const C=c(U,[["render",v]]);export{C as U};
