import{_ as ce,d as Fe,R as _e,b as pe,f as E,r as y,o as s,c as f,i as v,w as t,T as L,G as g,a,k,O as Ue,B as fe,H as Re,aw as Be,az as je,aA as Ie,aH as qe,aV as Me,aT as Ve,aU as Ke,Y as ze,e as Ne,E as He,V as Le,aX as We,ak as Ge,X as Xe,l as r,t as d,j as F,M as R,ab as Ye,ay as Je,aB as Qe,aC as Ze,I as $e,n as et,q as tt,aD as at,h as lt,aY as ot,aM as nt,a_ as dt,aL as rt,aN as st,J as ut,b5 as it,F as mt,C as ct,aG as _t}from"./app-HsD_dz6z.js";import{a as pt}from"./apiAdmin-sJa0ZPI-.js";import{U as ft,s as gt}from"./UserSearch-BNejLSe5.js";import{f as yt}from"./fields-DvGTYd1e.js";import{T as vt}from"./SubscriptionModuleVisibility-De4xIDcK.js";import{W as ht}from"./AddButton-DZVaHjmj.js";import{P as bt}from"./AddButton-DL1px5tF.js";import{D as St}from"./DateTimePicker-4vnyyiti.js";import{A as kt}from"./AdminPageHeader-BBVx0jH8.js";import{F as At}from"./FormItemHeading-JAAjQnr-.js";import{A as Ct,f as Dt}from"./AddEdit-Zh9MLFSj.js";import{s as me}from"./some-Bd09raSZ.js";import"./index-Cgpdf-In.js";import{S as Et}from"./SaveOutlined-V_py-V-u.js";import"./SupplierAddButton-D0P-tqjD.js";import"./fields-BNbog8Jz.js";import"./Upload-CnJJ2DZe.js";import"./AddButton-DrLU4OFX.js";import"./AddEdit-LxiC4vx8.js";import"./CustomerAddButton-CFnwJSUe.js";import"./UserInfo-CmaDmMO_.js";import"./BarcodeGenerator-DcEs3Mq1.js";import"./BarcodeOutlined-k1MheB3b.js";import"./PrinterOutlined-2C1xj10B.js";import"./fields-BNtfsWcr.js";import"./AddEdit-bNRztHnf.js";import"./AddEdit-BXyuQ7kk.js";import"./AddEdit-BIfnvrWG.js";import"./sumBy-C7apCVym.js";import"./filter-B6ZKd2Sn.js";import"./AddEdit-CImLpKpy.js";import"./SettingOutlined-DR3VCEHs.js";import"./AddButton-CVA6zrHM.js";import"./AddEdit-C833rAfr.js";import"./_isIterateeCall-hsfCKqXi.js";const Ot=Fe({props:{btnType:{default:"default"},tooltip:{default:!0},customType:{default:"button"}},emits:["onAddSuccess"],components:{PlusOutlined:_e,AddEdit:Ct},setup(l,{emit:n}){const{permsArray:B}=pe(),{initData:e,addEditUrl:M,paymentType:j}=Dt(),h=E(!1),b=E("add"),A=E({...e});return{permsArray:B,visible:h,addEditType:b,addEditUrl:M,paymentType:j,formData:A,addEditSuccess:()=>{h.value=!1,A.value={...e},n("onAddSuccess")},onClose:()=>{h.value=!1},showAdd:()=>{h.value=!0}}}}),wt={key:0};function Pt(l,n,B,e,M,j){const h=Ue,b=y("PlusOutlined"),A=fe,O=Re,C=y("AddEdit");return l.permsArray.includes(l.paymentType=="in"?"payment_in_create":"payment_out_create")||l.permsArray.includes("admin")?(s(),f("div",wt,[l.customType=="menu"?(s(),v(h,{onClick:l.showAdd,key:"payments"},{icon:t(()=>[L(l.$slots,"icon")]),default:t(()=>[L(l.$slots,"default")]),_:3},8,["onClick"])):(s(),f(g,{key:1},[l.tooltip?(s(),v(O,{key:0,placement:"topLeft",title:l.$t("payments.add"),"arrow-point-at-center":""},{default:t(()=>[a(A,{onClick:l.showAdd,class:"ml-5 no-border-radius",type:l.btnType},{icon:t(()=>[a(b)]),default:t(()=>[L(l.$slots,"default")]),_:3},8,["onClick","type"])]),_:3},8,["title"])):(s(),v(A,{key:1,onClick:l.showAdd,class:"ml-5 no-border-radius",type:l.btnType},{icon:t(()=>[a(b)]),default:t(()=>[L(l.$slots,"default")]),_:3},8,["onClick","type"]))],64)),a(C,{addEditType:l.addEditType,visible:l.visible,url:l.addEditUrl,onAddEditSuccess:l.addEditSuccess,onClosed:l.onClose,formData:l.formData,data:l.formData,pageTitle:l.$t("payments.add"),successMessage:l.$t("payments.created")},null,8,["addEditType","visible","url","onAddEditSuccess","onClosed","formData","data","pageTitle","successMessage"])])):k("",!0)}const xt=ce(Ot,[["render",Pt]]),Tt={components:{EyeOutlined:Be,PlusOutlined:_e,EditOutlined:je,DeleteOutlined:Ie,ExclamationCircleOutlined:qe,SearchOutlined:Me,SaveOutlined:Et,LoadingOutlined:Ve,TaxAddButton:vt,WarehouseAddButton:ht,ProductAddButton:bt,DateTimePicker:St,AdminPageHeader:kt,UserSearch:ft,MinusSquareOutlined:Ke,FormItemHeading:At,PaymentModeAddButton:xt},setup(){const{addEditRequestAdmin:l,loading:n,rules:B}=pt(),{appSetting:e,formatAmount:M,formatAmountCurrency:j,taxTypes:h,orderStatus:b,purchaseOrderStatus:A,salesOrderStatus:O,salesReturnStatus:C,purchaseReturnStatus:V,permsArray:W,selectedWarehouse:K}=pe(),{orderItemColumns:_}=yt(),{state:u,orderType:p,orderPageObject:S,selectedProducts:I,formData:q,productsAmount:G,taxes:i,recalculateValues:ne,fetchProducts:X,searchValueSelected:Y,quantityChanged:J,recalculateFinalTotal:w,showDeleteConfirm:Q,taxChanged:Z,editItem:U,addEditVisible:$,addEditFormData:ee,addEditFormSubmitting:z,addEditRules:N,addEditPageTitle:H,onAddEditSubmit:te,onAddEditClose:ae,inputValueChanged:le}=gt(),{t:o}=ze(),c=E([]),P=E([]),ge=Ne(),x=E([]),oe=E([]),de="payment-modes?limit=10000",re="taxes?limit=10000",se="units?limit=10000",ue=`warehouses?filters=id ne "${K.value.xid}"&hashable=${K.value.xid}&limit=10000`;He(()=>{const m=axiosAdmin.get(re),T=axiosAdmin.get(se),Ee=axiosAdmin.get(ue),Oe=axiosAdmin.get(de);Promise.all([m,T,Ee,Oe]).then(([we,Pe,xe,Te])=>{i.value=we.data,P.value=Pe.data,c.value=xe.data,oe.value=Te.data}),p.value=="purchases"?x.value=A:p.value=="sales"?x.value=O:p.value=="sales-returns"?x.value=C:p.value=="purchase-returns"?x.value=V:p.value=="quotations"?x.value=[]:p.value=="stock-transfers"&&(x.value=O)});const ye=()=>{const m={...q.value,order_type:S.value.type,total:q.value.subtotal,total_items:I.value.length,product_items:I.value,pay_object:D.value};l({url:p.value,data:m,successMessage:o(`${S.value.langKey}.created`),success:T=>{ge.push({name:`admin.stock.${p.value}.index`})}})},ve=()=>{axiosAdmin.get(se).then(m=>{P.value=m.data})},he=()=>{axiosAdmin.get(re).then(m=>{i.value=m.data})},be=()=>{axiosAdmin.get(ue).then(m=>{c.value=m.data})},Se=()=>{axiosAdmin.get(de).then(m=>{oe.value=m.data})},D=E([{pay_amount:0,payment_mode_id:void 0}]),ke=E([]),Ae=Le(()=>D.value.length==0?!1:me(D.value,{description:""})||me(D.value,{description:null})),ie=()=>{let m=0;return Ge(D.value,T=>{m+=Number(T.pay_amount)}),{payAmount:m}},Ce=()=>{D.value.push({pay_amount:0,payment_mode_id:void 0})},De=m=>{let T=D.value.indexOf(m);T!==-1&&D.value.splice(T,1),m.id!=""&&ke.value.push(m.id),ie()};return{...We(u),formData:q,productsAmount:G,rules:B,loading:n,warehouses:c,taxes:i,onSubmit:ye,fetchProducts:X,searchValueSelected:Y,selectedProducts:I,showDeleteConfirm:Q,quantityChanged:J,formatAmountCurrency:j,taxChanged:Z,recalculateFinalTotal:w,appSetting:e,editItem:U,orderPageObject:S,orderItemColumns:_,addEditVisible:$,addEditFormData:ee,addEditFormSubmitting:z,addEditRules:N,addEditPageTitle:H,onAddEditSubmit:te,onAddEditClose:ae,allOrderStatus:x,taxTypes:h,permsArray:W,unitAdded:ve,taxAdded:he,warehouseAdded:be,inputValueChanged:le,addFormField:Ce,removeFormField:De,addFormButtonStatus:Ae,formFields:D,paymentModes:oe,payAmountTotal:ie,paymentModeAdded:Se}}},Ft={class:"small-text-message"},Ut={style:{display:"flex"}},Rt={style:{display:"flex"}},Bt=F("br",null,null,-1),jt={style:{display:"flex"}},It={style:{display:"flex"}};function qt(l,n,B,e,M,j){const h=y("SaveOutlined"),b=fe,A=Je,O=y("router-link"),C=Qe,V=Ze,W=y("AdminPageHeader"),K=$e,_=et,u=tt,p=_t,S=at,I=y("WarehouseAddButton"),q=y("UserSearch"),G=y("DateTimePicker"),i=lt,ne=y("SearchOutlined"),X=ot,Y=y("ProductAddButton"),J=nt,w=dt,Q=y("EditOutlined"),Z=y("DeleteOutlined"),U=rt,$=st,ee=ut,z=it,N=y("TaxAddButton"),H=mt,te=ct,ae=y("admin-page-table-content"),le=Xe;return s(),f(g,null,[a(W,null,{header:t(()=>[a(A,{title:l.$t(`menu.${e.orderPageObject.menuKey}`),onBack:n[0]||(n[0]=()=>l.$router.go(-1)),class:"p-0"},{extra:t(()=>[a(b,{type:"primary",loading:e.loading,onClick:e.onSubmit,block:""},{icon:t(()=>[a(h)]),default:t(()=>[r(" "+d(l.$t("common.save")),1)]),_:1},8,["loading","onClick"])]),_:1},8,["title"])]),breadcrumb:t(()=>[a(V,{separator:"-",style:{"font-size":"12px"}},{default:t(()=>[a(C,null,{default:t(()=>[a(O,{to:{name:"admin.dashboard.index"}},{default:t(()=>[r(d(l.$t("menu.dashboard")),1)]),_:1},8,["to"])]),_:1}),a(C,null,{default:t(()=>[r(d(e.orderPageObject.type=="sales"||e.orderPageObject.type=="sales-returns"||e.orderPageObject.type=="quotations"?l.$t("menu.sales"):l.$t("menu.purchases")),1)]),_:1}),a(C,null,{default:t(()=>[a(O,{to:{name:`admin.stock.${e.orderPageObject.type}.index`}},{default:t(()=>[r(d(l.$t(`menu.${e.orderPageObject.menuKey}`)),1)]),_:1},8,["to"])]),_:1}),a(C,null,{default:t(()=>[r(d(l.$t("common.create")),1)]),_:1})]),_:1})]),_:1}),a(ae,null,{default:t(()=>[a(te,{class:"page-content-container mt-20 mb-20"},{default:t(()=>[a(H,{layout:"vertical"},{default:t(()=>[a(i,{gutter:16},{default:t(()=>[a(u,{xs:24,sm:24,md:8,lg:8},{default:t(()=>[a(_,{label:l.$t("stock.invoice_number"),name:"invoice_number",help:e.rules.invoice_number?e.rules.invoice_number.message:null,validateStatus:e.rules.invoice_number?"error":null},{default:t(()=>[a(K,{value:e.formData.invoice_number,"onUpdate:value":n[1]||(n[1]=o=>e.formData.invoice_number=o),placeholder:l.$t("common.placeholder_default_text",[l.$t("stock.invoice_number")])},null,8,["value","placeholder"]),F("small",Ft,d(l.$t("stock.invoie_number_blank")),1)]),_:1},8,["label","help","validateStatus"])]),_:1}),e.orderPageObject.type=="stock-transfers"?(s(),v(u,{key:0,xs:24,sm:24,md:8,lg:8},{default:t(()=>[a(_,{label:l.$t(`${e.orderPageObject.langKey}.warehouse`),name:"warehouse_id",help:e.rules.warehouse_id?e.rules.warehouse_id.message:null,validateStatus:e.rules.warehouse_id?"error":null,class:"required"},{default:t(()=>[F("span",Ut,[a(S,{value:e.formData.warehouse_id,"onUpdate:value":n[2]||(n[2]=o=>e.formData.warehouse_id=o),placeholder:l.$t("common.select_default_text",[l.$t(`${e.orderPageObject.langKey}.warehouse`)]),allowClear:!0,optionFilterProp:"title","show-search":""},{default:t(()=>[(s(!0),f(g,null,R(e.warehouses,o=>(s(),v(p,{key:o.xid,value:o.xid,title:o.name},{default:t(()=>[r(d(o.name),1)]),_:2},1032,["value","title"]))),128))]),_:1},8,["value","placeholder"]),a(I,{onOnAddSuccess:e.warehouseAdded},null,8,["onOnAddSuccess"])])]),_:1},8,["label","help","validateStatus"])]),_:1})):(s(),v(u,{key:1,xs:24,sm:24,md:8,lg:8},{default:t(()=>[a(q,{orderPageObject:e.orderPageObject,rules:e.rules,usersList:[],editOrderDisable:!1,onOnSuccess:n[3]||(n[3]=o=>e.formData.user_id=o)},null,8,["orderPageObject","rules"])]),_:1})),a(u,{xs:24,sm:24,md:8,lg:8},{default:t(()=>[a(_,{label:l.$t(`${e.orderPageObject.langKey}.${e.orderPageObject.langKey}_date`),name:"order_date",help:e.rules.order_date?e.rules.order_date.message:null,validateStatus:e.rules.order_date?"error":null,class:"required"},{default:t(()=>[a(G,{dateTime:e.formData.order_date,onDateTimeChanged:n[4]||(n[4]=o=>e.formData.order_date=o)},null,8,["dateTime"])]),_:1},8,["label","help","validateStatus"])]),_:1})]),_:1}),a(i,{gutter:16},{default:t(()=>[a(u,{xs:24,sm:24,md:24,lg:24},{default:t(()=>[a(_,{label:l.$t("product.product"),name:"orderSearchTerm",help:e.rules.product_items?e.rules.product_items.message:null,validateStatus:e.rules.product_items?"error":null},{default:t(()=>[F("span",Rt,[a(S,{value:null,searchValue:l.orderSearchTerm,"show-search":"","filter-option":!1,placeholder:l.$t("product.search_scan_product"),style:{width:"100%"},"not-found-content":l.productFetching?void 0:null,onSearch:n[5]||(n[5]=o=>{l.orderSearchTerm=o,e.fetchProducts(o)}),size:"large","option-label-prop":"label",onFocus:n[6]||(n[6]=o=>l.products=[]),onSelect:e.searchValueSelected,onInputKeyDown:e.inputValueChanged},Ye({suffixIcon:t(()=>[a(ne)]),default:t(()=>[(s(!0),f(g,null,R(l.products,o=>(s(),v(p,{key:o.xid,value:o.xid,label:o.name,product:o},{default:t(()=>[r(" => "+d(o.name),1)]),_:2},1032,["value","label","product"]))),128))]),_:2},[l.productFetching?{name:"notFoundContent",fn:t(()=>[a(X,{size:"small"})]),key:"0"}:void 0]),1032,["searchValue","placeholder","not-found-content","onSelect","onInputKeyDown"]),a(Y,{size:"large"})])]),_:1},8,["label","help","validateStatus"])]),_:1})]),_:1}),a(i,{gutter:16},{default:t(()=>[a(u,{xs:24,sm:24,md:24,lg:24},{default:t(()=>[a(ee,{"row-key":o=>o.xid,dataSource:e.selectedProducts,columns:e.orderItemColumns,pagination:!1},{bodyCell:t(({column:o,record:c})=>[o.dataIndex==="name"?(s(),f(g,{key:0},[r(d(c.name)+" ",1),Bt,F("small",null,[c.product_type!="service"?(s(),v(J,{key:0,code:""},{default:t(()=>[r(d(l.$t("product.avl_qty"))+" "+d(`${c.stock_quantity}${c.unit_short_name}`),1)]),_:2},1024)):k("",!0)])],64)):k("",!0),o.dataIndex==="unit_quantity"?(s(),v(w,{key:1,id:"inputNumber",value:c.quantity,"onUpdate:value":P=>c.quantity=P,onChange:P=>e.quantityChanged(c),min:0},null,8,["value","onUpdate:value","onChange"])):k("",!0),o.dataIndex==="single_unit_price"?(s(),f(g,{key:2},[r(d(e.formatAmountCurrency(c.single_unit_price)),1)],64)):k("",!0),o.dataIndex==="total_discount"?(s(),f(g,{key:3},[r(d(e.formatAmountCurrency(c.total_discount)),1)],64)):k("",!0),o.dataIndex==="total_tax"?(s(),f(g,{key:4},[r(d(e.formatAmountCurrency(c.total_tax)),1)],64)):k("",!0),o.dataIndex==="subtotal"?(s(),f(g,{key:5},[r(d(e.formatAmountCurrency(c.subtotal)),1)],64)):k("",!0),o.dataIndex==="action"?(s(),f(g,{key:6},[a(b,{type:"primary",onClick:P=>e.editItem(c),style:{"margin-left":"4px"}},{icon:t(()=>[a(Q)]),_:2},1032,["onClick"]),a(b,{type:"primary",onClick:P=>e.showDeleteConfirm(c),style:{"margin-left":"4px"}},{icon:t(()=>[a(Z)]),_:2},1032,["onClick"])],64)):k("",!0)]),summary:t(()=>[a($,null,{default:t(()=>[a(U,{"col-span":4}),a(U,null,{default:t(()=>[r(d(l.$t("product.subtotal")),1)]),_:1}),a(U,null,{default:t(()=>[r(d(e.formatAmountCurrency(e.productsAmount.tax)),1)]),_:1}),a(U,{"col-span":2},{default:t(()=>[r(d(e.formatAmountCurrency(e.productsAmount.subtotal)),1)]),_:1})]),_:1})]),_:1},8,["row-key","dataSource","columns"])]),_:1})]),_:1}),a(i,{gutter:16,class:"mt-30"},{default:t(()=>[a(u,{xs:24,sm:24,md:16,lg:16},{default:t(()=>[a(i,{gutter:16},{default:t(()=>[a(u,{xs:24,sm:24,md:24,lg:24},{default:t(()=>[a(_,{label:l.$t("warehouse.terms_condition"),name:"terms_condition",help:e.rules.terms_condition?e.rules.terms_condition.message:null,validateStatus:e.rules.terms_condition?"error":null},{default:t(()=>[a(z,{value:e.formData.terms_condition,"onUpdate:value":n[7]||(n[7]=o=>e.formData.terms_condition=o),placeholder:l.$t("warehouse.terms_condition"),"auto-size":{minRows:2,maxRows:3}},null,8,["value","placeholder"])]),_:1},8,["label","help","validateStatus"])]),_:1})]),_:1}),a(i,{gutter:16},{default:t(()=>[a(u,{xs:24,sm:24,md:24,lg:24},{default:t(()=>[a(_,{label:l.$t("stock.notes"),name:"notes",help:e.rules.notes?e.rules.notes.message:null,validateStatus:e.rules.notes?"error":null},{default:t(()=>[a(z,{value:e.formData.notes,"onUpdate:value":n[8]||(n[8]=o=>e.formData.notes=o),placeholder:l.$t("stock.notes"),"auto-size":{minRows:2,maxRows:3}},null,8,["value","placeholder"])]),_:1},8,["label","help","validateStatus"])]),_:1})]),_:1})]),_:1}),a(u,{xs:24,sm:24,md:8,lg:8},{default:t(()=>[e.orderPageObject.type!="quotations"?(s(),v(i,{key:0,gutter:16},{default:t(()=>[a(u,{xs:24,sm:24,md:24,lg:24},{default:t(()=>[a(_,{label:l.$t("stock.status"),name:"order_status",help:e.rules.order_status?e.rules.order_status.message:null,validateStatus:e.rules.order_status?"error":null,class:"required"},{default:t(()=>[a(S,{value:e.formData.order_status,"onUpdate:value":n[9]||(n[9]=o=>e.formData.order_status=o),placeholder:l.$t("common.select_default_text",[l.$t("stock.status")]),allowClear:!0},{default:t(()=>[(s(!0),f(g,null,R(e.allOrderStatus,o=>(s(),v(p,{key:o.key,value:o.key},{default:t(()=>[r(d(o.value),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value","placeholder"])]),_:1},8,["label","help","validateStatus"])]),_:1})]),_:1})):k("",!0),a(i,{gutter:16},{default:t(()=>[a(u,{xs:24,sm:24,md:24,lg:24},{default:t(()=>[a(_,{label:l.$t("stock.order_tax"),name:"tax_id",help:e.rules.tax_id?e.rules.tax_id.message:null,validateStatus:e.rules.tax_id?"error":null},{default:t(()=>[F("span",jt,[a(S,{value:e.formData.tax_id,"onUpdate:value":n[10]||(n[10]=o=>e.formData.tax_id=o),placeholder:l.$t("common.select_default_text",[l.$t("stock.order_tax")]),allowClear:!0,onChange:e.taxChanged,optionFilterProp:"title","show-search":""},{default:t(()=>[(s(!0),f(g,null,R(e.taxes,o=>(s(),v(p,{key:o.xid,value:o.xid,title:o.name,tax:o},{default:t(()=>[r(d(o.name)+" ("+d(o.rate)+"%) ",1)]),_:2},1032,["value","title","tax"]))),128))]),_:1},8,["value","placeholder","onChange"]),a(N,{onOnAddSuccess:e.taxAdded},null,8,["onOnAddSuccess"])])]),_:1},8,["label","help","validateStatus"])]),_:1})]),_:1}),a(i,{gutter:16},{default:t(()=>[a(u,{xs:24,sm:24,md:24,lg:24},{default:t(()=>[a(_,{label:l.$t("stock.discount"),name:"discount",help:e.rules.discount?e.rules.discount.message:null,validateStatus:e.rules.discount?"error":null},{default:t(()=>[a(w,{value:e.formData.discount,"onUpdate:value":n[11]||(n[11]=o=>e.formData.discount=o),placeholder:l.$t("common.placeholder_default_text",[l.$t("stock.discount")]),onChange:e.recalculateFinalTotal,min:"0",style:{width:"100%"}},{addonBefore:t(()=>[r(d(e.appSetting.currency.symbol),1)]),_:1},8,["value","placeholder","onChange"])]),_:1},8,["label","help","validateStatus"])]),_:1})]),_:1}),a(i,{gutter:16},{default:t(()=>[a(u,{xs:24,sm:24,md:24,lg:24},{default:t(()=>[a(_,{label:l.$t("stock.shipping"),name:"shipping",help:e.rules.shipping?e.rules.shipping.message:null,validateStatus:e.rules.shipping?"error":null},{default:t(()=>[a(w,{value:e.formData.shipping,"onUpdate:value":n[12]||(n[12]=o=>e.formData.shipping=o),placeholder:l.$t("common.placeholder_default_text",[l.$t("stock.shipping")]),onChange:e.recalculateFinalTotal,min:"0",style:{width:"100%"}},{addonBefore:t(()=>[r(d(e.appSetting.currency.symbol),1)]),_:1},8,["value","placeholder","onChange"])]),_:1},8,["label","help","validateStatus"])]),_:1})]),_:1}),a(i,{gutter:16,class:"mt-10"},{default:t(()=>[a(u,{xs:12,sm:12,md:12,lg:12},{default:t(()=>[r(d(l.$t("stock.order_tax")),1)]),_:1}),a(u,{xs:12,sm:12,md:12,lg:12},{default:t(()=>[r(d(e.formatAmountCurrency(e.formData.tax_amount)),1)]),_:1})]),_:1}),a(i,{gutter:16,class:"mt-10"},{default:t(()=>[a(u,{xs:12,sm:12,md:12,lg:12},{default:t(()=>[r(d(l.$t("stock.discount")),1)]),_:1}),a(u,{xs:12,sm:12,md:12,lg:12},{default:t(()=>[r(d(e.formatAmountCurrency(e.formData.discount)),1)]),_:1})]),_:1}),a(i,{gutter:16,class:"mt-10"},{default:t(()=>[a(u,{xs:12,sm:12,md:12,lg:12},{default:t(()=>[r(d(l.$t("stock.shipping")),1)]),_:1}),a(u,{xs:12,sm:12,md:12,lg:12},{default:t(()=>[r(d(e.formatAmountCurrency(e.formData.shipping)),1)]),_:1})]),_:1}),a(i,{gutter:16,class:"mt-10"},{default:t(()=>[a(u,{xs:12,sm:12,md:12,lg:12},{default:t(()=>[r(d(l.$t("stock.grand_total")),1)]),_:1}),a(u,{xs:12,sm:12,md:12,lg:12},{default:t(()=>[r(d(e.formatAmountCurrency(e.formData.subtotal)),1)]),_:1})]),_:1}),a(i,{gutter:16,class:"mt-20 mb-20"},{default:t(()=>[a(b,{type:"primary",loading:e.loading,onClick:e.onSubmit,block:""},{icon:t(()=>[a(h)]),default:t(()=>[r(" "+d(l.$t("common.save")),1)]),_:1},8,["loading","onClick"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),a(le,{open:e.addEditVisible,closable:!1,centered:!0,title:e.addEditPageTitle,onOk:e.onAddEditSubmit},{footer:t(()=>[a(b,{key:"submit",type:"primary",loading:e.addEditFormSubmitting,onClick:e.onAddEditSubmit},{icon:t(()=>[a(h)]),default:t(()=>[r(" "+d(l.$t("common.update")),1)]),_:1},8,["loading","onClick"]),a(b,{key:"back",onClick:e.onAddEditClose},{default:t(()=>[r(d(l.$t("common.cancel")),1)]),_:1},8,["onClick"])]),default:t(()=>[a(H,{layout:"vertical"},{default:t(()=>[a(i,{gutter:16},{default:t(()=>[a(u,{xs:24,sm:24,md:24,lg:24},{default:t(()=>[a(_,{label:l.$t("product.unit_price"),name:"unit_price",help:e.addEditRules.unit_price?e.addEditRules.unit_price.message:null,validateStatus:e.addEditRules.unit_price?"error":null},{default:t(()=>[a(w,{value:e.addEditFormData.unit_price,"onUpdate:value":n[13]||(n[13]=o=>e.addEditFormData.unit_price=o),placeholder:l.$t("common.placeholder_default_text",[l.$t("product.unit_price")]),min:"0",style:{width:"100%"}},{addonBefore:t(()=>[r(d(e.appSetting.currency.symbol),1)]),_:1},8,["value","placeholder"])]),_:1},8,["label","help","validateStatus"])]),_:1})]),_:1}),a(i,{gutter:16},{default:t(()=>[a(u,{xs:24,sm:24,md:24,lg:24},{default:t(()=>[a(_,{label:l.$t("product.discount"),name:"discount_rate",help:e.addEditRules.discount_rate?e.addEditRules.discount_rate.message:null,validateStatus:e.addEditRules.discount_rate?"error":null},{default:t(()=>[a(w,{value:e.addEditFormData.discount_rate,"onUpdate:value":n[14]||(n[14]=o=>e.addEditFormData.discount_rate=o),placeholder:l.$t("common.placeholder_default_text",[l.$t("product.discount")]),min:"0",style:{width:"100%"}},{addonAfter:t(()=>[r("%")]),_:1},8,["value","placeholder"])]),_:1},8,["label","help","validateStatus"])]),_:1})]),_:1}),a(i,{gutter:16},{default:t(()=>[a(u,{xs:24,sm:24,md:24,lg:24},{default:t(()=>[a(_,{label:l.$t("product.tax"),name:"tax_id",help:e.addEditRules.tax_id?e.addEditRules.tax_id.message:null,validateStatus:e.addEditRules.tax_id?"error":null},{default:t(()=>[F("span",It,[a(S,{value:e.addEditFormData.tax_id,"onUpdate:value":n[15]||(n[15]=o=>e.addEditFormData.tax_id=o),placeholder:l.$t("common.select_default_text",[l.$t("product.tax")]),allowClear:!0,optionFilterProp:"title","show-search":""},{default:t(()=>[(s(!0),f(g,null,R(e.taxes,o=>(s(),v(p,{key:o.xid,value:o.xid,title:o.name},{default:t(()=>[r(d(o.name)+" ("+d(o.rate)+"%) ",1)]),_:2},1032,["value","title"]))),128))]),_:1},8,["value","placeholder"]),a(N,{onOnAddSuccess:e.taxAdded},null,8,["onOnAddSuccess"])])]),_:1},8,["label","help","validateStatus"])]),_:1})]),_:1}),a(i,{gutter:16},{default:t(()=>[a(u,{xs:24,sm:24,md:24,lg:24},{default:t(()=>[a(_,{label:l.$t("product.tax_type"),name:"tax_type",help:e.addEditRules.tax_type?e.addEditRules.tax_type.message:null,validateStatus:e.addEditRules.tax_type?"error":null},{default:t(()=>[a(S,{value:e.addEditFormData.tax_type,"onUpdate:value":n[16]||(n[16]=o=>e.addEditFormData.tax_type=o),placeholder:l.$t("common.select_default_text",[l.$t("product.tax_type")]),allowClear:!0},{default:t(()=>[(s(!0),f(g,null,R(e.taxTypes,o=>(s(),v(p,{key:o.key,value:o.key},{default:t(()=>[r(d(o.value),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value","placeholder"])]),_:1},8,["label","help","validateStatus"])]),_:1})]),_:1})]),_:1})]),_:1},8,["open","title","onOk"])],64)}const ba=ce(Tt,[["render",qt]]);export{ba as default};