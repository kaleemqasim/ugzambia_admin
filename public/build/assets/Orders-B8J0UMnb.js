import{a as F}from"./apiFront-C-OfCDe7.js";import{_ as S,b as D,f as R,g as T,E as w,r as i,o as u,c as h,a as e,w as t,h as M,l as p,t as f,G as Y,M as E,j as K,aB as N,aC as V,q as j,bH as q,ay as U,an as $,ao as A,C as G,i as H}from"./app-yQu0_bFn.js";import{D as L}from"./DashboardSidebar-B0AANda-.js";import{O as P}from"./OrderTable-C4vtufJw.js";import"./index-CNNFGL0_.js";import"./HomeOutlined-DmHko5th.js";import"./ShoppingOutlined-DNdnXl1s.js";import"./SettingOutlined-CfBC_cVQ.js";import"./LogoutOutlined-FZs3JvXu.js";import"./PaymentStatus-CdKZa18d.js";import"./OrderDetails-CxnJjDNT.js";import"./cart-B-X_oqCL.js";import"./filter-BXt71jrw.js";const z={components:{DashboardSidebar:L,OrderTable:P},setup(){const{addEditRequestFront:o}=F(),{orderStatus:r}=D(),_=R([]),a=T({order_status_type:"all",dates:[]}),b="YYYY-MM-DD";w(()=>{c()});const c=()=>{o({url:"front/self/orders",data:a,success:s=>{_.value=s.orders}})};return{myOrders:_,filters:a,orderStatus:r,fetchOrders:c,dateFormat:b}}},I={class:"mt-30 mb-30"},J={class:"table-responsive"};function Q(o,r,_,a,b,c){const m=i("router-link"),s=N,y=V,v=i("dashboard-sidebar"),l=j,O=q,k=U,d=M,g=$,C=A,x=i("OrderTable"),B=G;return u(),h("div",I,[e(d,{type:"flex",justify:"center"},{default:t(()=>[e(l,{span:20},{default:t(()=>[e(y,null,{default:t(()=>[e(s,null,{default:t(()=>[e(m,{to:{name:"front.homepage"}},{default:t(()=>[p(f(o.$t("front.home")),1)]),_:1},8,["to"])]),_:1}),e(s,null,{default:t(()=>[e(m,{to:{name:"front.dashboard"}},{default:t(()=>[p(f(o.$t("front.dashboard")),1)]),_:1},8,["to"])]),_:1}),e(s,null,{default:t(()=>[p(f(o.$t("front.my_orders")),1)]),_:1})]),_:1}),e(d,{gutter:[30,30],class:"mt-30"},{default:t(()=>[e(l,{xs:24,sm:24,md:24,lg:6,xl:6},{default:t(()=>[e(v)]),_:1}),e(l,{xs:24,sm:24,md:24,lg:18,xl:18},{default:t(()=>[e(B,{title:null,bordered:!1,style:{borderRadius:"10px"},class:"dashboard-container"},{default:t(()=>[e(d,null,{default:t(()=>[e(l,{span:24},{default:t(()=>[e(k,{title:o.$t("front.order_history"),style:{"padding-left":"0px"}},{extra:t(()=>[e(O,{value:a.filters.dates,"onUpdate:value":r[0]||(r[0]=n=>a.filters.dates=n),placeholder:[o.$t("common.start_date"),o.$t("common.end_date")],style:{width:"100%"},onChange:a.fetchOrders,valueFormat:a.dateFormat},null,8,["value","placeholder","onChange","valueFormat"])]),_:1},8,["title"])]),_:1})]),_:1}),e(d,null,{default:t(()=>[e(l,{span:24},{default:t(()=>[e(C,{activeKey:a.filters.order_status_type,"onUpdate:activeKey":r[1]||(r[1]=n=>a.filters.order_status_type=n),onChange:a.fetchOrders},{default:t(()=>[e(g,{key:"all",tab:"All Orders"}),(u(!0),h(Y,null,E(a.orderStatus,n=>(u(),H(g,{key:n.key,tab:`${n.value}`},null,8,["tab"]))),128))]),_:1},8,["activeKey","onChange"]),K("div",J,[e(x,{data:a.myOrders,onReloadOrders:a.fetchOrders},null,8,["data","onReloadOrders"])])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})])}const ce=S(z,[["render",Q]]);export{ce as default};
