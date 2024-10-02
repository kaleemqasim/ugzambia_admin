import{y as N,u as Y,V as u,b as z,Y as B,r as G,ak as m}from"./app-OikDM5Kw.js";import{f as H}from"./filter-CQCFHrIe.js";const X=()=>{const y=N(),n=Y(),l=u(()=>n.getters["front/storeCartItems"]),{formatAmountUsingCurrencyObject:v}=z(),g=n.state.auth.appSetting,d=n.state.auth.user,{t}=B(),c=G(y.params.type),p=u(()=>n.state.front.warehouseCurrency),f=u(()=>window.config.frontStoreWarehouse),h=u(()=>n.state.front.appSetting),k={enabled:"success",disabled:"error"},C=[{key:"enabled",value:t("common.enabled")},{key:"disabled",value:t("common.disabled")}],S=[{key:"inclusive",value:t("product.inclusive")},{key:"exclusive",value:t("product.exclusive")}],b=e=>e&&e>moment().endOf("day"),_=e=>parseFloat(parseFloat(e).toFixed(2)),O=e=>v(e,p.value),T=e=>{var r="";return m(e,(a,o)=>{a!=null&&(r+=`${o} eq "${a}" and `)}),r.length>0&&(r=r.substring(0,r.length-4)),r},K=e=>checkUserPermission(e,d),I=e=>{n.commit("auth/updatePageTitle",t(`menu.${e}`))},w=u(()=>{const e=[n.state.auth.user.role.name];return m(n.state.auth.user.role.perms,r=>{e.push(r.name)}),e}),x=u(()=>{var e={};return c.value=="purchases"?e={type:"purchases",langKey:"purchase",menuKey:"purchases",userType:"suppliers"}:c.value=="sales"?e={type:"sales",langKey:"sales",menuKey:"sales",userType:"customers"}:c.value=="purchase-returns"?e={type:"purchase-returns",langKey:"purchase_returns",menuKey:"purchase_returns",userType:"suppliers"}:c.value=="sales-returns"&&(e={type:"sales-returns",langKey:"sales_returns",menuKey:"sales_returns",userType:"customers"}),e}),D=e=>{const r=e.replace("-","_");return t(`menu.${r}`)},E=[{key:"pending",value:t("common.pending")},{key:"paid",value:t("common.paid")},{key:"cancelled",value:t("common.cancelled")}],A=[{key:"pending",value:t("common.pending")},{key:"paid",value:t("common.paid")},{key:"cancelled",value:t("common.cancelled")}],F=[{key:"received",value:t("common.received")},{key:"pending",value:t("common.pending")},{key:"ordered",value:t("common.ordered")}],P=[{key:"completed",value:t("common.completed")},{key:"pending",value:t("common.pending")}],R=[{key:"ordered",value:t("common.ordered")},{key:"confirmed",value:t("common.confirmed")},{key:"processing",value:t("common.processing")},{key:"shipping",value:t("common.shipping")},{key:"delivered",value:t("common.delivered")}],$=[{key:"received",value:t("common.received")},{key:"pending",value:t("common.pending")}],j=[{key:"CODE128",value:"CODE128"},{key:"CODE39",value:"CODE39"}],L=(e,r=null)=>{const a=[],o=[];return e.data.map(s=>{(r==null||r!=null&&s.parent_id!=r)&&o.push({id:s.id,parent_id:s.parent_id,title:s.name,value:s.id})}),o.forEach(s=>{if(!s.parent_id)return a.push(s);const i=o.findIndex(W=>W.id===s.parent_id);if(!o[i].children)return o[i].children=[s];o[i].children.push(s)}),a},q=(e,r)=>r.props.title.toLowerCase().includes(e.toLowerCase()),U=u(()=>{let e=0;return m(l.value,r=>{e+=r.cart_quantity*r.details.sales_price}),e});return{appSetting:g,user:d,checkPermission:K,permsArray:w,statusColors:k,userStatus:C,taxTypes:S,barcodeSymbology:j,disabledDate:b,formatAmount:_,formatAmountCurrency:O,calculateFilterString:T,updatePageTitle:I,orderType:c,orderPageObject:x,orderStatus:E,paymentStatus:A,purchaseOrderStatus:F,salesOrderStatus:R,purchaseReturnStatus:P,salesReturnStatus:$,getRecursiveCategories:L,filterTreeNode:q,getOrderTypeFromstring:D,products:l,total:U,updateCart:()=>{n.commit("front/addCartItems",l.value)},removeItem:e=>{const r=H(l.value,a=>a.xid!=e);n.commit("front/addCartItems",r)},frontAppSetting:h,warehouseCurrency:p,frontWarehouse:f}};export{X as c};
