import{_ as h,d as k,z as $,u as S,f as b,E as C,a6 as O,r as s,o as v,i as x,w as o,a as t,l as d,t as i,O as B,P as D}from"./app-yQu0_bFn.js";import{H as L}from"./HomeOutlined-DmHko5th.js";import{S as R}from"./ShoppingOutlined-DNdnXl1s.js";import{S as H}from"./SettingOutlined-CfBC_cVQ.js";import{L as M}from"./LogoutOutlined-FZs3JvXu.js";const N=k({components:{HomeOutlined:L,ShoppingOutlined:R,SettingOutlined:H,LogoutOutlined:M},setup(){const e=$(),a=S(),r=b([]);C(()=>{const n=typeof e.meta.menuKey=="function"?e.meta.menuKey(e):e.meta.menuKey;r.value=[n.replace("-","_")]});const m=()=>{a.dispatch("front/logout")};return O(e,(n,c)=>{const p=typeof n.meta.menuKey=="function"?n.meta.menuKey(n):n.meta.menuKey;r.value=[p.replace("-","_")]}),{selectedKeys:r,logout:m}}});function T(e,a,r,m,n,c){const p=s("home-outlined"),l=s("router-link"),u=B,_=s("shopping-outlined"),f=s("setting-outlined"),y=s("logout-outlined"),g=D;return v(),x(g,{selectedKeys:e.selectedKeys,"onUpdate:selectedKeys":a[0]||(a[0]=K=>e.selectedKeys=K),style:{paddingTop:"30px",paddingBottom:"30px",paddingLeft:"25px",paddingRight:"25px",borderRadius:"10px"}},{default:o(()=>[t(u,{key:"dashboard"},{icon:o(()=>[t(p)]),default:o(()=>[t(l,{to:{name:"front.dashboard"}},{default:o(()=>[d(i(e.$t("front.dashboard")),1)]),_:1},8,["to"])]),_:1}),t(u,{key:"orders"},{icon:o(()=>[t(_)]),default:o(()=>[t(l,{to:{name:"front.orders"}},{default:o(()=>[d(i(e.$t("front.my_orders")),1)]),_:1},8,["to"])]),_:1}),t(u,{key:"profile"},{icon:o(()=>[t(f)]),default:o(()=>[t(l,{to:{name:"front.profile"}},{default:o(()=>[d(i(e.$t("front.my_profile")),1)]),_:1},8,["to"])]),_:1}),t(u,{onClick:e.logout,key:"logout"},{icon:o(()=>[t(y)]),default:o(()=>[d(" "+i(e.$t("front.logout")),1)]),_:1},8,["onClick"])]),_:1},8,["selectedKeys"])}const q=h(N,[["render",T]]);export{q as D};
