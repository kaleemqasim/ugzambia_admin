import{a as e,y as V,_ as w,b as A,o as i,i as y,w as a,l as s,t as o,bl as F,d as z,f as G,E as J,bL as Q,c as f,G as g,M as W,bM as H,bN as R,u as U,V as X,bO as Y,r as v,j as b,k as C,m as Z,aO as K,aP as x,a1 as tt,bn as et,bo as at,J as nt,q as rt,h as ot}from"./app-CX0Y74E0.js";import{c as st}from"./cart-CzCfRotK.js";import{P as lt}from"./PaymentStatus-wcSnrAlg.js";var ut={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M456 231a56 56 0 10112 0 56 56 0 10-112 0zm0 280a56 56 0 10112 0 56 56 0 10-112 0zm0 280a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"more",theme:"outlined"};const dt=ut;function M(t){for(var r=1;r<arguments.length;r++){var n=arguments[r]!=null?Object(arguments[r]):{},l=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(l=l.concat(Object.getOwnPropertySymbols(n).filter(function(u){return Object.getOwnPropertyDescriptor(n,u).enumerable}))),l.forEach(function(u){it(t,u,n[u])})}return t}function it(t,r,n){return r in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,t}var P=function(r,n){var l=M({},r,n.attrs);return e(V,M({},l,{icon:dt}),null)};P.displayName="MoreOutlined";P.inheritAttrs=!1;const Vt=P;var ct={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372 0-89 31.3-170.8 83.5-234.8l523.3 523.3C682.8 852.7 601 884 512 884zm288.5-137.2L277.2 223.5C341.2 171.3 423 140 512 140c205.4 0 372 166.6 372 372 0 89-31.3 170.8-83.5 234.8z"}}]},name:"stop",theme:"outlined"};const pt=ct;function j(t){for(var r=1;r<arguments.length;r++){var n=arguments[r]!=null?Object(arguments[r]):{},l=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(l=l.concat(Object.getOwnPropertySymbols(n).filter(function(u){return Object.getOwnPropertyDescriptor(n,u).enumerable}))),l.forEach(function(u){mt(t,u,n[u])})}return t}function mt(t,r,n){return r in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,t}var I=function(r,n){var l=j({},r,n.attrs);return e(V,j({},l,{icon:pt}),null)};I.displayName="StopOutlined";I.inheritAttrs=!1;const _t=I,ft={props:["data"],setup(){const{orderStatusColors:t}=A();return{orderStatusColors:t}}};function bt(t,r,n,l,u,h){const p=F;return n.data.cancelled?(i(),y(p,{key:0,color:"#f50"},{default:a(()=>[s(o(t.$t("common.cancelled")),1)]),_:1})):(i(),y(p,{key:1,color:l.orderStatusColors[n.data.order_status]},{default:a(()=>[s(o(t.$t(`common.${n.data.order_status}`)),1)]),_:1},8,["color"]))}const gt=w(ft,[["render",bt]]),yt=z({props:["orderStatus"],setup(t){const{salesOrderStatus:r}=A(),{orderStatus:n}=t,l=G(0);return J(()=>{var u=Q(r,["key",n]);l.value=u+1}),{current:l,salesOrderStatus:r}}});function ht(t,r,n,l,u,h){const p=H,O=R;return i(),y(O,{current:t.current,status:"wait"},{default:a(()=>[(i(!0),f(g,null,W(t.salesOrderStatus,m=>(i(),y(p,{key:m.key,title:m.value},null,8,["title"]))),128))]),_:1},8,["current"])}const Ot=w(yt,[["render",ht]]),$t=z({props:{order:{default:{}},detailView:{default:"front"}},components:{OrderStatus:Ot,PaymentStatus:lt,StopOutlined:_t,OrderStatusTag:gt},setup(t,{emit:r}){const n=st(),l=A(),u=U(),h=X(()=>u.state.front.warehouseCurrency);return{columns:[{title:"#",dataIndex:"id"},{title:"Product",dataIndex:"product_id"},{title:"Quantity",dataIndex:"quantity"},{title:"Price",dataIndex:"unit_price"},{title:"Total",dataIndex:"subtotal"}],formatAmountCurrency:m=>t.detailView=="admin"?l.formatAmountCurrency(m):n.formatAmountCurrency(m),buildAddress:Y,warehouseCurrency:h}}}),St={key:0},vt={key:1},Ct={class:"item-desc mt-40"},kt={class:"mt-20 pl-15"},wt={class:"pd-10"},At={class:"item-total pd-10"};function Pt(t,r,n,l,u,h){const p=v("stop-outlined"),O=Z,m=v("order-status"),c=K,N=v("PaymentStatus"),B=v("OrderStatusTag"),D=x,T=tt,E=et,q=at,L=nt,d=rt,_=ot;return i(),f(g,null,[t.order.cancelled?(i(),f("div",St,[e(O,{message:t.$t("online_orders.order_cancelled"),description:t.$t("online_orders.order_cancelled_message"),type:"error","show-icon":""},{icon:a(()=>[e(p)]),_:1},8,["message","description"])])):(i(),f("div",vt,[e(m,{orderStatus:t.order.order_status},null,8,["orderStatus"])])),b("div",Ct,[b("span",null,o(t.$t("online_orders.order_summary")),1)]),b("div",kt,[e(D,{title:null,column:2,labelStyle:{fontWeight:"bold"}},{default:a(()=>[e(c,{label:t.$t("stock.order_id")},{default:a(()=>[s(o(t.order.invoice_number),1)]),_:1},8,["label"]),e(c,{label:t.$t("common.total")},{default:a(()=>[s(o(t.formatAmountCurrency(t.order.total)),1)]),_:1},8,["label"]),e(c,{label:t.$t("user.name")},{default:a(()=>[s(o(t.order.shipping_address.name),1)]),_:1},8,["label"]),e(c,{label:t.$t("user.email")},{default:a(()=>[s(o(t.order.shipping_address.email),1)]),_:1},8,["label"]),e(c,{label:t.$t("user.phone")},{default:a(()=>[s(o(t.order.shipping_address.phone),1)]),_:1},8,["label"]),e(c,{label:t.$t("payments.payment_status")},{default:a(()=>[e(N,{paymentStatus:t.order.payment_status},null,8,["paymentStatus"])]),_:1},8,["label"]),e(c,{label:t.$t("stock.status")},{default:a(()=>[e(B,{data:t.order},null,8,["data"])]),_:1},8,["label"]),e(c,{label:t.$t("stock.shipping_address")},{default:a(()=>[s(o(t.order.shipping_address.shipping_address),1)]),_:1},8,["label"]),e(c,{label:t.$t("stock.billing_address")},{default:a(()=>[s(o(t.order.shipping_address.address),1)]),_:1},8,["label"])]),_:1})]),e(_,{class:"mt-20"},{default:a(()=>[e(d,{span:24},{default:a(()=>[e(L,{columns:t.columns,"row-key":k=>k.id,"data-source":t.order.items,pagination:!1},{bodyCell:a(({index:k,column:$,record:S})=>[$.dataIndex==="id"?(i(),f(g,{key:0},[s(o(k+1),1)],64)):C("",!0),$.dataIndex==="product_id"?(i(),y(q,{key:1},{default:a(()=>[e(E,null,{avatar:a(()=>[e(T,{src:S.product.image_url,size:"large",shape:"square"},null,8,["src"])]),title:a(()=>[s(o(S.product.name),1)]),_:2},1024)]),_:2},1024)):C("",!0),$.dataIndex==="unit_price"?(i(),f(g,{key:2},[s(o(t.formatAmountCurrency(S.unit_price)),1)],64)):C("",!0),$.dataIndex==="subtotal"?(i(),f(g,{key:3},[s(o(t.formatAmountCurrency(S.subtotal)),1)],64)):C("",!0)]),_:1},8,["columns","row-key","data-source"])]),_:1})]),_:1}),e(_,{class:"mt-30"},{default:a(()=>[e(d,{span:18}),e(d,{span:6},{default:a(()=>[b("div",wt,[e(_,null,{default:a(()=>[e(d,{span:12},{default:a(()=>[s(o(t.$t("product.subtotal")),1)]),_:1}),e(d,{span:12,class:"text-right"},{default:a(()=>[s(o(t.formatAmountCurrency(t.order.subtotal)),1)]),_:1})]),_:1}),e(_,{class:"mt-10"},{default:a(()=>[e(d,{span:12},{default:a(()=>[s(o(t.$t("product.discount")),1)]),_:1}),e(d,{span:12,class:"text-right"},{default:a(()=>[s(o(t.formatAmountCurrency(t.order.discount)),1)]),_:1})]),_:1}),e(_,{class:"mt-10"},{default:a(()=>[e(d,{span:12},{default:a(()=>[s(o(t.$t("stock.order_tax")),1)]),_:1}),e(d,{span:12,class:"text-right"},{default:a(()=>[s(o(t.formatAmountCurrency(t.order.tax_amount)),1)]),_:1})]),_:1}),e(_,{class:"mt-10"},{default:a(()=>[e(d,{span:12},{default:a(()=>[s(o(t.$t("stock.shipping")),1)]),_:1}),e(d,{span:12,class:"text-right"},{default:a(()=>[s(o(t.formatAmountCurrency(t.order.shipping)),1)]),_:1})]),_:1})]),b("div",At,[e(_,{class:"mt-10"},{default:a(()=>[e(d,{span:12},{default:a(()=>[s(o(t.$t("stock.grand_total")),1)]),_:1}),e(d,{span:12,class:"text-right"},{default:a(()=>[s(o(t.formatAmountCurrency(t.order.total)),1)]),_:1})]),_:1})])]),_:1})]),_:1})],64)}const zt=w($t,[["render",Pt]]);export{Vt as M,gt as O,_t as S,zt as a,Ot as b};