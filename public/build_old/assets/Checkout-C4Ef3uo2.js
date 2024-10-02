import{a as t,y as se,_ as z,d as w,f as b,Y as I,E as U,a6 as ae,r as A,o as O,i as D,w as s,l as c,t as i,ax as F,b8 as le,I as ne,n as oe,q as M,h as j,b5 as de,F as re,B as T,X as V,u as N,bR as ue,c as H,G as ie,aH as R,j as C,by as G,bz as me,bq as X,br as Y,cA as J,aA as ce,b4 as pe,e as _e,cD as fe,k as he,s as ge,aB as ve,aC as be,m as ye,v as $e,x as Se,C as ke,a1 as Ae,a_ as Ce}from"./app-DvNATx7Y.js";import{c as Ee}from"./cart-DOziXm45.js";import{p as Oe}from"./processRequestFront-H9BmDBbP.js";import{S as Re}from"./SaveOutlined-CMUQh6R8.js";import{a as ze}from"./apiFront-DUDnL5aR.js";import"./index-CvRpe2mf.js";import{W as we}from"./WalletOutlined-CVEZtgda.js";import"./filter-BEo08sjD.js";var Ie={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M793 242H366v-74c0-6.7-7.7-10.4-12.9-6.3l-142 112a8 8 0 000 12.6l142 112c5.2 4.1 12.9.4 12.9-6.3v-74h415v470H175c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h618c35.3 0 64-28.7 64-64V306c0-35.3-28.7-64-64-64z"}}]},name:"rollback",theme:"outlined"};const Ue=Ie;function B(e){for(var a=1;a<arguments.length;a++){var d=arguments[a]!=null?Object(arguments[a]):{},_=Object.keys(d);typeof Object.getOwnPropertySymbols=="function"&&(_=_.concat(Object.getOwnPropertySymbols(d).filter(function(f){return Object.getOwnPropertyDescriptor(d,f).enumerable}))),_.forEach(function(f){Te(e,f,d[f])})}return e}function Te(e,a,d){return a in e?Object.defineProperty(e,a,{value:d,enumerable:!0,configurable:!0,writable:!0}):e[a]=d,e}var P=function(a,d){var _=B({},a,d.attrs);return t(se,B({},_,{icon:Ue}),null)};P.displayName="RollbackOutlined";P.inheritAttrs=!1;const Ve=P,Pe=w({props:["formData","addEditVisible","addEditId"],emits:["addEditSuccess"],components:{SaveOutlined:Re},setup(e,{emit:a}){const d=b(!1),_=b({}),f=b({}),g=b(null),{t:l}=I();U(()=>{d.value=e.addEditVisible,_.value=e.formData,g.value=e.addEditId});const o=()=>{var u="front/self/address";e.addEditId!=null&&(u=`front/self/address/${e.addEditId}`),Oe({url:u,data:_.value,success:m=>{F.success({placement:"bottomRight",message:l("common.success"),description:l("front.address_saved")}),a("addEditSuccess"),f.value={},d.value=!1},error:m=>{f.value=m,le.error(l("common.fix_errors"))}})},r=()=>{d.value=!1};return ae(e,(u,m)=>{d.value=u.addEditVisible,_.value=u.formData,g.value=u.addEditId}),{address:_,rules:f,visible:d,onSubmit:o,onClose:r}}});function We(e,a,d,_,f,g){const l=ne,o=oe,r=M,u=j,m=de,v=re,y=A("SaveOutlined"),h=T,$=V;return O(),D($,{open:e.visible,"onUpdate:open":a[9]||(a[9]=n=>e.visible=n),width:"700px",title:e.addEditId==null?e.$t("front.add_new_address"):e.$t("front.edit_address")},{footer:s(()=>[t(h,{type:"primary",onClick:e.onSubmit,style:{"margin-right":"8px"}},{icon:s(()=>[t(y)]),default:s(()=>[c(" "+i(e.$t("common.save")),1)]),_:1},8,["onClick"]),t(h,{onClick:e.onClose},{default:s(()=>[c(i(e.$t("common.cancel")),1)]),_:1},8,["onClick"])]),default:s(()=>[t(v,{layout:"vertical"},{default:s(()=>[t(u,{gutter:16},{default:s(()=>[t(r,{xs:24,sm:24,md:24,lg:24},{default:s(()=>[t(o,{label:e.$t("user.name"),name:"name",help:e.rules.name?e.rules.name.message:null,validateStatus:e.rules.name?"error":null},{default:s(()=>[t(l,{value:e.address.name,"onUpdate:value":a[0]||(a[0]=n=>e.address.name=n),placeholder:e.$t("common.placeholder_default_text",[e.$t("user.name")])},null,8,["value","placeholder"])]),_:1},8,["label","help","validateStatus"])]),_:1})]),_:1}),t(u,{gutter:16},{default:s(()=>[t(r,{xs:24,sm:24,md:12,lg:12},{default:s(()=>[t(o,{label:e.$t("user.email"),name:"email",help:e.rules.email?e.rules.email.message:null,validateStatus:e.rules.email?"error":null},{default:s(()=>[t(l,{value:e.address.email,"onUpdate:value":a[1]||(a[1]=n=>e.address.email=n),placeholder:e.$t("common.placeholder_default_text",[e.$t("user.email")])},null,8,["value","placeholder"])]),_:1},8,["label","help","validateStatus"])]),_:1}),t(r,{xs:24,sm:24,md:12,lg:12},{default:s(()=>[t(o,{label:e.$t("user.phone"),name:"phone",help:e.rules.phone?e.rules.phone.message:null,validateStatus:e.rules.phone?"error":null},{default:s(()=>[t(l,{value:e.address.phone,"onUpdate:value":a[2]||(a[2]=n=>e.address.phone=n),placeholder:e.$t("common.placeholder_default_text",[e.$t("user.phone")])},null,8,["value","placeholder"])]),_:1},8,["label","help","validateStatus"])]),_:1})]),_:1}),t(u,{gutter:16},{default:s(()=>[t(r,{xs:24,sm:24,md:24,lg:24},{default:s(()=>[t(o,{label:e.$t("user.billing_address"),name:"address",help:e.rules.address?e.rules.address.message:null,validateStatus:e.rules.address?"error":null},{default:s(()=>[t(m,{value:e.address.address,"onUpdate:value":a[3]||(a[3]=n=>e.address.address=n),placeholder:e.$t("common.placeholder_default_text",[e.$t("user.billing_address")]),"auto-size":{minRows:2,maxRows:3}},null,8,["value","placeholder"])]),_:1},8,["label","help","validateStatus"])]),_:1})]),_:1}),t(u,{gutter:16},{default:s(()=>[t(r,{xs:24,sm:24,md:24,lg:24},{default:s(()=>[t(o,{label:e.$t("user.shipping_address"),name:"shipping_address",help:e.rules.shipping_address?e.rules.shipping_address.message:null,validateStatus:e.rules.shipping_address?"error":null},{default:s(()=>[t(m,{value:e.address.shipping_address,"onUpdate:value":a[4]||(a[4]=n=>e.address.shipping_address=n),placeholder:e.$t("common.placeholder_default_text",[e.$t("user.shipping_address")]),"auto-size":{minRows:2,maxRows:3}},null,8,["value","placeholder"])]),_:1},8,["label","help","validateStatus"])]),_:1})]),_:1}),t(u,{gutter:16},{default:s(()=>[t(r,{xs:24,sm:24,md:12,lg:12},{default:s(()=>[t(o,{label:e.$t("user.city"),name:"city",help:e.rules.city?e.rules.city.message:null,validateStatus:e.rules.city?"error":null},{default:s(()=>[t(l,{value:e.address.city,"onUpdate:value":a[5]||(a[5]=n=>e.address.city=n),placeholder:e.$t("common.placeholder_default_text",[e.$t("user.city")])},null,8,["value","placeholder"])]),_:1},8,["label","help","validateStatus"])]),_:1}),t(r,{xs:24,sm:24,md:12,lg:12},{default:s(()=>[t(o,{label:e.$t("user.state"),name:"state",help:e.rules.state?e.rules.state.message:null,validateStatus:e.rules.state?"error":null},{default:s(()=>[t(l,{value:e.address.state,"onUpdate:value":a[6]||(a[6]=n=>e.address.state=n),placeholder:e.$t("common.placeholder_default_text",[e.$t("user.state")])},null,8,["value","placeholder"])]),_:1},8,["label","help","validateStatus"])]),_:1})]),_:1}),t(u,{gutter:16},{default:s(()=>[t(r,{xs:24,sm:24,md:12,lg:12},{default:s(()=>[t(o,{label:e.$t("user.country"),name:"country",help:e.rules.country?e.rules.country.message:null,validateStatus:e.rules.country?"error":null},{default:s(()=>[t(l,{value:e.address.country,"onUpdate:value":a[7]||(a[7]=n=>e.address.country=n),placeholder:e.$t("common.placeholder_default_text",[e.$t("user.country")])},null,8,["value","placeholder"])]),_:1},8,["label","help","validateStatus"])]),_:1}),t(r,{xs:24,sm:24,md:12,lg:12},{default:s(()=>[t(o,{label:e.$t("user.zipcode"),name:"zipcode",help:e.rules.zipcode?e.rules.zipcode.message:null,validateStatus:e.rules.zipcode?"error":null},{default:s(()=>[t(l,{value:e.address.zipcode,"onUpdate:value":a[8]||(a[8]=n=>e.address.zipcode=n),placeholder:e.$t("common.placeholder_default_text",[e.$t("user.zipcode")]),type:"number"},null,8,["value","placeholder"])]),_:1},8,["label","help","validateStatus"])]),_:1})]),_:1})]),_:1})]),_:1},8,["open","title"])}const qe=z(Pe,[["render",We]]),Be=w({props:[],emits:["onAddressSelection"],components:{AddEdit:qe},setup(e,{emit:a}){const d=b(null),_=b([]),f=N(),{t:g}=I(),l=f.state.front.user,o="front/self/address?fields=id,xid,name,email,phone,address,shipping_address,city,state,country,zipcode",r=b(!1),u=b({}),m=b(null);U(()=>{v(),d.value=e.selectedAddress});const v=()=>{axiosFront.get(o).then(p=>{_.value=p.data})};return{userAddresses:_,addAddress:()=>{u.value={name:l.name,phone:l.phone,email:l.email,address:l.address,shipping_address:l.shipping_address,city:l.city,state:l.state,country:l.country,zipcode:l.zipcode},m.value=null,r.value=!0},editAddress:p=>{u.value={name:p.name,email:p.email,phone:p.phone,address:p.address,shipping_address:p.shipping_address,city:p.city,state:p.state,country:p.country,zipcode:p.zipcode,_method:"PUT"},m.value=p.xid,r.value=!0},selectedAddress:d,addressSelected:()=>{a("onAddressSelection",d.value)},buildAddress:ue,addEditVisible:r,addEditAddress:u,addEditId:m,addEditSuccess:()=>{v()},deleteAddress:p=>{V.confirm({title:g("common.delete")+"?",icon:t(R),content:g("front.address_delete_message"),centered:!0,okText:g("common.yes"),okType:"danger",cancelText:g("common.no"),onOk(){axiosFront.delete(`front/self/address/${p}`).then(E=>{v(),F.success({message:g("common.success"),description:g("front.address_deleted"),placement:"bottomRight"})})},onCancel(){}})}}}}),De=C("br",null,null,-1);function Fe(e,a,d,_,f,g){const l=T,o=G,r=me,u=X,m=Y,v=J,y=A("AddEdit");return O(),H(ie,null,[t(v,{"item-layout":"horizontal","data-source":e.userAddresses},{renderItem:s(({item:h})=>[t(m,null,{actions:s(()=>[t(l,{onClick:$=>e.editAddress(h),class:"p-0",type:"link"},{default:s(()=>[c(i(e.$t("common.edit")),1)]),_:2},1032,["onClick"]),t(l,{onClick:$=>e.deleteAddress(h.xid),class:"p-0",type:"link"},{default:s(()=>[c(i(e.$t("common.delete")),1)]),_:2},1032,["onClick"])]),default:s(()=>[t(u,null,{title:s(()=>[t(r,{value:e.selectedAddress,"onUpdate:value":a[0]||(a[0]=$=>e.selectedAddress=$),name:"addressCheckbox",onChange:e.addressSelected},{default:s(()=>[t(o,{value:h.xid},{default:s(()=>[c(i(h.name),1)]),_:2},1032,["value"])]),_:2},1032,["value","onChange"])]),description:s(()=>[c(i(e.buildAddress(h)),1),De,c(" "+i(e.$t("user.phone"))+": "+i(h.phone),1)]),_:2},1024)]),_:2},1024)]),_:1},8,["data-source"]),t(l,{class:"pl-0",type:"link",onClick:e.addAddress},{default:s(()=>[c(i(e.$t("front.add_new_address")),1)]),_:1},8,["onClick"]),t(y,{addEditVisible:e.addEditVisible,formData:e.addEditAddress,addEditId:e.addEditId,onAddEditSuccess:e.addEditSuccess},null,8,["addEditVisible","formData","addEditId","onAddEditSuccess"])],64)}const Me=z(Be,[["render",Fe]]),je=w({components:{DeleteOutlined:ce,WalletOutlined:we,RollbackOutlined:Ve,RightOutlined:pe,UserAddress:Me,ExclamationCircleOutlined:R},setup(){const{products:e,updateCart:a,removeItem:d,subtotal:_,totalTax:f,total:g,formatAmountCurrency:l,frontWarehouse:o}=Ee(),r=b(null),u=b(!0),{t:m}=I(),v=_e(),y=N(),{loading:h,addEditRequestFront:$}=ze();return U(()=>{}),{products:e,removeItem:d,updateCart:a,formatAmountCurrency:l,subtotal:_,total:g,totalTax:f,selectedAddress:r,addressSelected:p=>{r.value=p},addressMethod:u,getSalesPriceWithTax:fe,confirmOrder:()=>{V.confirm({title:m("front.confirm_order"),icon:t(R),content:m("front.confirm_order_message"),okText:m("common.yes"),cancelText:m("common.no"),onOk(){$({url:`front/self/checkout-orders/${o.value.slug}`,data:{products:e.value,address_id:r.value,warehouse:o.value.slug},successMessage:m("front.order_placed_message"),success:p=>{y.commit("front/addCartItems",[]),v.push({name:"front.checkout.success",params:{uniqueId:p.unique_id,warehouse:o.value.slug}})}})},onCancel(){h.value=!1}})},loading:h,frontWarehouse:o}}}),Ne={class:"mt-30 mb-30"},He={class:"payment-methods"},Ge={class:"cod"},Xe={class:"icon-text"},Ye=C("br",null,null,-1),Je={class:"item-total pd-10"};function Le(e,a,d,_,f,g){const l=A("router-link"),o=ve,r=be,u=ye,m=$e,v=A("UserAddress"),y=Se,h=A("wallet-outlined"),$=G,n=M,k=j,p=A("RollbackOutlined"),E=T,L=A("RightOutlined"),W=ke,Q=Ae,Z=X,K=Ce,x=A("delete-outlined"),ee=Y,te=J;return O(),H("div",Ne,[t(k,{type:"flex",justify:"center"},{default:s(()=>[t(n,{span:20},{default:s(()=>[t(r,null,{default:s(()=>[t(o,null,{default:s(()=>[t(l,{to:{name:"front.homepage",params:{warehouse:e.frontWarehouse.slug}}},{default:s(()=>[c(i(e.$t("front.home")),1)]),_:1},8,["to"])]),_:1}),t(o,null,{default:s(()=>[t(l,{to:{name:"front.dashboard",params:{warehouse:e.frontWarehouse.slug}}},{default:s(()=>[c(i(e.$t("front.dashboard")),1)]),_:1},8,["to"])]),_:1}),t(o,null,{default:s(()=>[t(l,{to:{name:"front.orders",params:{warehouse:e.frontWarehouse.slug}}},{default:s(()=>[c(i(e.$t("front.my_orders")),1)]),_:1},8,["to"])]),_:1}),t(o,null,{default:s(()=>[c(i(e.$t("front.checkout_page")),1)]),_:1})]),_:1}),t(k,{gutter:[30,30],class:"mt-30"},{default:s(()=>[t(n,{xs:24,sm:24,md:24,lg:16,xl:16},{default:s(()=>[t(W,{title:null,bordered:!1,style:{borderRadius:"10px"},class:"dashboard-container"},{default:s(()=>[t(k,null,{default:s(()=>[t(n,{span:24},{default:s(()=>[e.selectedAddress==null?(O(),D(u,{key:0,message:e.$t("front.select_shipping_address"),type:"error",class:"mb-10","show-icon":""},null,8,["message"])):he("",!0),t(m,{level:3},{default:s(()=>[c(" 1. "+i(e.$t("front.address_details")),1)]),_:1}),t(v,{onOnAddressSelection:e.addressSelected},null,8,["onOnAddressSelection"]),t(y),t(m,{level:3},{default:s(()=>[c(" 2. "+i(e.$t("front.payment_details")),1)]),_:1}),t(k,{gutter:30,class:"mt-20"},{default:s(()=>[t(n,{xs:24,sm:24,md:24,lg:12,xl:12},{default:s(()=>[C("div",He,[C("div",Ge,[C("div",Xe,[t(h,{class:"mr-5"}),c(" "+i(e.$t("front.cash_on_delivery")),1)]),t($,{checked:e.addressMethod,"onUpdate:checked":a[0]||(a[0]=S=>e.addressMethod=S)},null,8,["checked"])])])]),_:1})]),_:1}),t(y),t(k,{gutter:[30,10],class:"mt-40"},{default:s(()=>[t(n,{xs:24,sm:24,md:24,lg:12,xl:12},{default:s(()=>[t(E,{type:"primary",size:"large",block:""},{default:s(()=>[t(l,{to:{name:"front.homepage",params:{warehouse:e.frontWarehouse.slug}}},{default:s(()=>[t(p),c(" "+i(e.$t("front.continue_shopping")),1)]),_:1},8,["to"])]),_:1})]),_:1}),t(n,{xs:24,sm:24,md:24,lg:12,xl:12},{default:s(()=>[t(E,{type:"primary",size:"large",onClick:e.confirmOrder,disabled:e.products.length==0||e.selectedAddress==null,loading:e.loading,block:""},{default:s(()=>[c(i(e.$t("front.confirm_order"))+" ",1),t(L)]),_:1},8,["onClick","disabled","loading"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(n,{xs:24,sm:24,md:24,lg:8,xl:8},{default:s(()=>[t(W,{title:null,bordered:!1,style:{borderRadius:"10px"}},{default:s(()=>[t(te,{class:"demo-loadmore-list","item-layout":"horizontal","data-source":e.products},{renderItem:s(({item:S})=>[t(ee,null,{actions:s(()=>[t(E,{type:"link",onClick:q=>e.removeItem(S.xid)},{default:s(()=>[t(x,{style:{fontSize:"20px",color:"#f87171"}})]),_:2},1032,["onClick"])]),default:s(()=>[t(Z,null,{title:s(()=>[c(i(S.name)+" ",1),Ye,C("small",{style:ge({color:"rgba(0, 0, 0, 0.45)"})}," Price: "+i(e.formatAmountCurrency(e.getSalesPriceWithTax(S))),5)]),avatar:s(()=>[t(Q,{src:S.image_url,size:"large"},null,8,["src"])]),description:s(()=>[c(i(e.formatAmountCurrency(e.getSalesPriceWithTax(S)*S.cart_quantity)),1)]),_:2},1024),C("div",null,[t(K,{value:S.cart_quantity,"onUpdate:value":q=>S.cart_quantity=q,min:1,style:{width:"60px"},onChange:e.updateCart},null,8,["value","onUpdate:value","onChange"])])]),_:2},1024)]),_:1},8,["data-source"]),t(y),C("div",Je,[t(k,{class:"mt-10"},{default:s(()=>[t(n,{span:12},{default:s(()=>[c(i(e.$t("stock.grand_total")),1)]),_:1}),t(n,{span:12,class:"text-right"},{default:s(()=>[c(i(e.formatAmountCurrency(e.total)),1)]),_:1})]),_:1})])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})])}const lt=z(je,[["render",Le]]);export{lt as default};
