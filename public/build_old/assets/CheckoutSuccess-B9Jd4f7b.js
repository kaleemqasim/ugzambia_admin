import{_ as b,d as $,r as d,o as y,c as w,a as e,w as o,b as k,z as C,h as B,l as n,t as a,aB as S,aC as W,B as q,a0 as I,D as O,C as U,q as v}from"./app-DvNATx7Y.js";import"./index-CvRpe2mf.js";import{S as D}from"./ShoppingOutlined-Ct_IqVH-.js";const N=$({components:{ShoppingOutlined:D},setup(){const{frontWarehouse:t}=k();return{orderUniqueId:C().params.uniqueId,frontWarehouse:t}}}),R={class:"mt-30 mb-30"};function V(t,p,c,j,z,E){const s=d("router-link"),r=S,m=W,f=d("ShoppingOutlined"),u=q,i=I,h=O,g=U,l=v,_=B;return y(),w("div",R,[e(_,{type:"flex",justify:"center"},{default:o(()=>[e(l,{span:20},{default:o(()=>[e(m,null,{default:o(()=>[e(r,null,{default:o(()=>[e(s,{to:{name:"front.homepage",params:{warehouse:t.frontWarehouse.slug}}},{default:o(()=>[n(a(t.$t("front.home")),1)]),_:1},8,["to"])]),_:1}),e(r,null,{default:o(()=>[e(s,{to:{name:"front.dashboard",params:{warehouse:t.frontWarehouse.slug}}},{default:o(()=>[n(a(t.$t("front.dashboard")),1)]),_:1},8,["to"])]),_:1}),e(r,null,{default:o(()=>[e(s,{to:{name:"front.orders",params:{warehouse:t.frontWarehouse.slug}}},{default:o(()=>[n(a(t.$t("front.my_orders")),1)]),_:1},8,["to"])]),_:1}),e(r,null,{default:o(()=>[n(a(t.$t("front.order_placed")),1)]),_:1})]),_:1}),e(_,{class:"mt-30"},{default:o(()=>[e(l,{span:24},{default:o(()=>[e(g,{title:null,bordered:!1,style:{borderRadius:"10px"},class:"dashboard-container"},{default:o(()=>[e(h,{status:"success",title:t.$t("front.order_placed"),"sub-title":t.$t("front.order_placed_message",[t.orderUniqueId])},{extra:o(()=>[e(i,null,{default:o(()=>[e(u,{key:"console",type:"primary"},{default:o(()=>[e(s,{to:{name:"front.orders",params:{warehouse:t.frontWarehouse.slug}}},{default:o(()=>[e(f),n(" "+a(t.$t("front.all_orders")),1)]),_:1},8,["to"])]),_:1}),e(u,{key:"buy"},{default:o(()=>[e(s,{to:{name:"front.homepage",params:{warehouse:t.frontWarehouse.slug}}},{default:o(()=>[n(a(t.$t("front.continue_shopping")),1)]),_:1},8,["to"])]),_:1})]),_:1})]),_:1},8,["title","sub-title"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})])}const G=b(N,[["render",V]]);export{G as default};
