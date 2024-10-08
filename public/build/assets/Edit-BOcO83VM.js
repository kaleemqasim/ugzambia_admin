import{_ as Ce,aw as Ae,R as we,az as Pe,aA as Ee,aH as Fe,aV as Te,b as Be,Y as Re,f as U,e as Ue,E as Ie,aX as je,r as b,o as i,c,a as t,w as a,G as p,C as qe,X as Ve,l as s,t as d,i as g,k as v,j as F,M as E,ab as Ke,B as ze,ay as Me,aB as Ne,aC as We,m as He,I as Le,n as Ge,q as Xe,aD as Ye,h as Je,aY as Qe,aM as Ze,a_ as $e,aL as ea,aN as aa,J as ta,b5 as la,F as oa,aG as da}from"./app-CexwWrww.js";import{a as na}from"./apiAdmin-CyDWIvW7.js";import{U as ra,s as sa}from"./UserSearch-C13RDWYZ.js";import{f as ia}from"./fields-B17qw-A3.js";import{T as ua}from"./SubscriptionModuleVisibility-DkpkXh1P.js";import{W as ma}from"./AddButton-D2KyR06O.js";import{P as _a}from"./AddButton-BMkXV0gc.js";import{D as ca}from"./DateTimePicker-BPqPnX9V.js";import{A as fa}from"./AdminPageHeader-DjvHfNQF.js";import"./index-BuUhZ1qq.js";import{S as pa}from"./SaveOutlined-JyEjbJPW.js";import{B as ga}from"./BarcodeOutlined-BLNdo8j3.js";import"./SupplierAddButton-DtNtvMNR.js";import"./fields-nxnFUNRt.js";import"./Upload-OaAOhWYH.js";import"./AddButton-vmOX_K8S.js";import"./AddEdit-C8FZl7PI.js";import"./CustomerAddButton-Cn08ffgl.js";import"./UserInfo-BTL8spD4.js";import"./FormItemHeading-CPzG22Mg.js";import"./BarcodeGenerator-DAKDDcXc.js";import"./PrinterOutlined-D-_URUZj.js";import"./fields-BwuuNolH.js";import"./AddEdit-Bx7BJGkC.js";import"./AddEdit-B4Pyu6hf.js";import"./AddEdit-CTp1Jtgl.js";import"./some-CWYryPUF.js";import"./_isIterateeCall-BE-UCWgx.js";import"./sumBy-CKHhClIO.js";import"./filter-BWFlT2yD.js";import"./AddEdit-CEFIODpH.js";import"./SettingOutlined-CQkFXEJQ.js";const ba={components:{EyeOutlined:Ae,PlusOutlined:we,EditOutlined:Pe,DeleteOutlined:Ee,ExclamationCircleOutlined:Fe,SearchOutlined:Te,SaveOutlined:pa,BarcodeOutlined:ga,TaxAddButton:ua,WarehouseAddButton:ma,ProductAddButton:_a,DateTimePicker:ca,AdminPageHeader:fa,UserSearch:ra},setup(){const{addEditRequestAdmin:o,loading:n,rules:$}=na(),{appSetting:e,formatAmount:me,formatAmountCurrency:ee,taxTypes:T,orderStatus:k,purchaseOrderStatus:K,salesOrderStatus:B,salesReturnStatus:O,purchaseReturnStatus:z,permsArray:M,selectedWarehouse:I}=Be(),{orderItemColumns:N}=ia(),{state:_,orderType:r,orderPageObject:h,route:S,selectedProducts:C,selectedProductIds:W,formData:A,productsAmount:u,taxes:R,setTaxes:ae,recalculateValues:te,fetchProducts:H,searchValueSelected:x,quantityChanged:L,recalculateFinalTotal:G,showDeleteConfirm:w,taxChanged:X,editItem:Y,addEditVisible:j,addEditFormData:q,addEditFormSubmitting:V,addEditRules:J,addEditPageTitle:Q,onAddEditSubmit:l,onAddEditClose:f,removedOrderItemsIds:P,calculateProductAmount:_e,inputValueChanged:ce}=sa(),{t:fe}=Re(),Z=U([]),le=U([]),oe=U([]),de=S.params.id,pe=Ue(),D=U([]),ne="taxes?limit=10000",re="units?limit=10000",se=`warehouses?filters=id ne "${I.value.xid}"&hashable=${I.value.xid}&limit=10000`,ie=U(!1);Ie(()=>{const y=axiosAdmin.get(`${r.value}/${de}`),ue=axiosAdmin.get(ne),ye=axiosAdmin.get(re),Se=axiosAdmin.get(se);Promise.all([y,ue,ye,Se]).then(([ke,xe,De,Oe])=>{const m=ke.data;A.value={invoice_number:m.order.invoice_number,order_date:m.order.order_date,user_id:m.order.x_user_id,warehouse_id:m.order.x_warehouse_id,notes:m.order.notes,terms_condition:m.order.terms_condition,order_status:m.order.order_status,tax_id:m.order.x_tax_id,tax_rate:m.order.tax_rate,tax_amount:m.order.tax_amount,discount:m.order.discount?m.order.discount:0,shipping:m.order.shipping?m.order.shipping:0,subtotal:m.order.total},W.value=m.ids,C.value=m.items,_e(),oe.value=m.user,R.value=xe.data,le.value=De.data,Z.value=Oe.data,m.order.payment_status!="unpaid"&&(ie.value=!0)}),r.value=="purchases"?D.value=K:r.value=="sales"?D.value=B:r.value=="sales-returns"?D.value=O:r.value=="purchase-returns"?D.value=z:r.value=="quotations"?D.value=[]:r.value=="stock-transfers"&&(D.value=B)});const ge=()=>{const y={...A.value,total:A.value.subtotal,total_items:C.value.length,product_items:C.value,removed_items:P.value,_method:"PUT"};o({url:`${r.value}/${de}`,data:y,successMessage:fe(`${h.value.langKey}.updated`),success:ue=>{pe.push({name:`admin.stock.${r.value}.index`})}})},be=()=>{axiosAdmin.get(re).then(y=>{le.value=y.data})},ve=()=>{axiosAdmin.get(ne).then(y=>{R.value=y.data})},he=()=>{axiosAdmin.get(se).then(y=>{Z.value=y.data})};return{...je(_),formData:A,productsAmount:u,loading:n,rules:$,users:oe,warehouses:Z,taxes:R,onSubmit:ge,fetchProducts:H,searchValueSelected:x,selectedProducts:C,showDeleteConfirm:w,quantityChanged:L,formatAmountCurrency:ee,taxChanged:X,recalculateFinalTotal:G,appSetting:e,editItem:Y,orderPageObject:h,orderItemColumns:N,addEditVisible:j,addEditFormData:q,addEditFormSubmitting:V,addEditRules:J,addEditPageTitle:Q,onAddEditSubmit:l,onAddEditClose:f,allOrderStatus:D,taxTypes:T,permsArray:M,unitAdded:be,taxAdded:ve,warehouseAdded:he,editOrderDisable:ie,inputValueChanged:ce}}},va={style:{display:"flex"}},ha={style:{display:"flex"}},ya=F("br",null,null,-1),Sa={key:0},ka={key:1},xa={style:{display:"flex"}},Da={style:{display:"flex"}};function Oa(o,n,$,e,me,ee){const T=b("SaveOutlined"),k=ze,K=Me,B=b("router-link"),O=Ne,z=We,M=b("AdminPageHeader"),I=He,N=Le,_=Ge,r=Xe,h=da,S=Ye,C=b("WarehouseAddButton"),W=b("UserSearch"),A=b("DateTimePicker"),u=Je,R=b("SearchOutlined"),ae=Qe,te=b("ProductAddButton"),H=Ze,x=$e,L=b("EditOutlined"),G=b("DeleteOutlined"),w=ea,X=aa,Y=ta,j=la,q=b("TaxAddButton"),V=oa,J=qe,Q=Ve;return i(),c(p,null,[t(M,null,{header:a(()=>[t(K,{title:o.$t(`menu.${e.orderPageObject.menuKey}`),onBack:n[0]||(n[0]=()=>o.$router.go(-1)),class:"p-0"},{extra:a(()=>[t(k,{type:"primary",loading:e.loading,onClick:e.onSubmit,block:""},{icon:a(()=>[t(T)]),default:a(()=>[s(" "+d(o.$t("common.save")),1)]),_:1},8,["loading","onClick"])]),_:1},8,["title"])]),breadcrumb:a(()=>[t(z,{separator:"-",style:{"font-size":"12px"}},{default:a(()=>[t(O,null,{default:a(()=>[t(B,{to:{name:"admin.dashboard.index"}},{default:a(()=>[s(d(o.$t("menu.dashboard")),1)]),_:1},8,["to"])]),_:1}),t(O,null,{default:a(()=>[s(d(e.orderPageObject.type=="sales"||e.orderPageObject.type=="sales-returns"||e.orderPageObject.type=="quotations"?o.$t("menu.sales"):o.$t("menu.purchases")),1)]),_:1}),t(O,null,{default:a(()=>[t(B,{to:{name:`admin.stock.${e.orderPageObject.type}.index`}},{default:a(()=>[s(d(o.$t(`menu.${e.orderPageObject.menuKey}`)),1)]),_:1},8,["to"])]),_:1}),t(O,null,{default:a(()=>[s(d(o.$t("common.edit")),1)]),_:1})]),_:1})]),_:1}),t(J,{class:"page-content-container"},{default:a(()=>[e.editOrderDisable?(i(),g(I,{key:0,description:o.$t("messages.not_able_to_edit_order"),type:"warning",class:"mb-30",showIcon:""},null,8,["description"])):v("",!0),t(V,{layout:"vertical"},{default:a(()=>[t(u,{gutter:16},{default:a(()=>[t(r,{xs:24,sm:24,md:8,lg:8},{default:a(()=>[t(_,{label:o.$t("stock.invoice_number"),name:"invoice_number",help:e.rules.invoice_number?e.rules.invoice_number.message:null,validateStatus:e.rules.invoice_number?"error":null},{default:a(()=>[t(N,{value:e.formData.invoice_number,"onUpdate:value":n[1]||(n[1]=l=>e.formData.invoice_number=l),placeholder:o.$t("common.placeholder_default_text",[o.$t("stock.invoice_number")]),disabled:e.editOrderDisable},null,8,["value","placeholder","disabled"])]),_:1},8,["label","help","validateStatus"])]),_:1}),e.orderPageObject.type=="stock-transfers"?(i(),g(r,{key:0,xs:24,sm:24,md:8,lg:8},{default:a(()=>[t(_,{label:o.$t(`${e.orderPageObject.langKey}.warehouse`),name:"warehouse_id",help:e.rules.warehouse_id?e.rules.warehouse_id.message:null,validateStatus:e.rules.warehouse_id?"error":null,class:"required"},{default:a(()=>[F("span",va,[t(S,{value:e.formData.warehouse_id,"onUpdate:value":n[2]||(n[2]=l=>e.formData.warehouse_id=l),placeholder:o.$t("common.select_default_text",[o.$t(`${e.orderPageObject.langKey}.warehouse`)]),allowClear:!0,optionFilterProp:"title","show-search":"",disabled:e.editOrderDisable},{default:a(()=>[(i(!0),c(p,null,E(e.warehouses,l=>(i(),g(h,{key:l.xid,value:l.xid,title:l.name},{default:a(()=>[s(d(l.name),1)]),_:2},1032,["value","title"]))),128))]),_:1},8,["value","placeholder","disabled"]),t(C,{onOnAddSuccess:e.warehouseAdded},null,8,["onOnAddSuccess"])])]),_:1},8,["label","help","validateStatus"])]),_:1})):(i(),g(r,{key:1,xs:24,sm:24,md:8,lg:8},{default:a(()=>[t(W,{orderPageObject:e.orderPageObject,rules:e.rules,usersList:e.users,editOrderDisable:e.editOrderDisable,onOnSuccess:n[3]||(n[3]=l=>e.formData.user_id=l)},null,8,["orderPageObject","rules","usersList","editOrderDisable"])]),_:1})),t(r,{xs:24,sm:24,md:8,lg:8},{default:a(()=>[t(_,{label:o.$t(`${e.orderPageObject.langKey}.${e.orderPageObject.langKey}_date`),name:"order_date",help:e.rules.order_date?e.rules.order_date.message:null,validateStatus:e.rules.order_date?"error":null},{default:a(()=>[e.formData.order_date?(i(),g(A,{key:0,dateTime:e.formData.order_date,onDateTimeChanged:n[4]||(n[4]=l=>e.formData.order_date=l),disabled:e.editOrderDisable},null,8,["dateTime","disabled"])):v("",!0)]),_:1},8,["label","help","validateStatus"])]),_:1})]),_:1}),t(u,{gutter:16},{default:a(()=>[t(r,{xs:24,sm:24,md:24,lg:24},{default:a(()=>[t(_,{label:o.$t("product.product"),name:"orderSearchTerm",help:e.rules.product_items?e.rules.product_items.message:null,validateStatus:e.rules.product_items?"error":null},{default:a(()=>[F("span",ha,[t(S,{value:null,searchValue:o.orderSearchTerm,"show-search":"","filter-option":!1,placeholder:o.$t("product.search_scan_product"),style:{width:"100%"},"not-found-content":o.productFetching?void 0:null,onSearch:n[5]||(n[5]=l=>{o.orderSearchTerm=l,e.fetchProducts(l)}),size:"large","option-label-prop":"label",onFocus:n[6]||(n[6]=l=>o.products=[]),onSelect:e.searchValueSelected,disabled:e.editOrderDisable,onInputKeyDown:e.inputValueChanged},Ke({suffixIcon:a(()=>[t(R)]),default:a(()=>[(i(!0),c(p,null,E(o.products,l=>(i(),g(h,{key:l.xid,value:l.xid,label:l.name,product:l},{default:a(()=>[s(" => "+d(l.name),1)]),_:2},1032,["value","label","product"]))),128))]),_:2},[o.productFetching?{name:"notFoundContent",fn:a(()=>[t(ae,{size:"small"})]),key:"0"}:void 0]),1032,["searchValue","placeholder","not-found-content","onSelect","disabled","onInputKeyDown"]),t(te,{size:"large"})])]),_:1},8,["label","help","validateStatus"])]),_:1})]),_:1}),t(u,{gutter:16},{default:a(()=>[t(r,{xs:24,sm:24,md:24,lg:24},{default:a(()=>[t(Y,{"row-key":l=>l.xid,dataSource:e.selectedProducts,columns:e.orderItemColumns,pagination:!1},{bodyCell:a(({column:l,record:f})=>[l.dataIndex==="name"?(i(),c(p,{key:0},[s(d(f.name)+" ",1),ya,F("small",null,[t(H,{code:""},{default:a(()=>[s(d(o.$t("product.avl_qty"))+" "+d(`${f.stock_quantity}${f.unit_short_name}`),1)]),_:2},1024)])],64)):v("",!0),l.dataIndex==="unit_quantity"?(i(),g(x,{key:1,id:"inputNumber",value:f.quantity,"onUpdate:value":P=>f.quantity=P,onChange:P=>e.quantityChanged(f),min:0,disabled:e.editOrderDisable},null,8,["value","onUpdate:value","onChange","disabled"])):v("",!0),l.dataIndex==="single_unit_price"?(i(),c(p,{key:2},[s(d(e.formatAmountCurrency(f.single_unit_price)),1)],64)):v("",!0),l.dataIndex==="discount_amount"?(i(),c(p,{key:3},[s(d(e.formatAmountCurrency(f.discount_amount)),1)],64)):v("",!0),l.dataIndex==="total_tax"?(i(),c(p,{key:4},[s(d(e.formatAmountCurrency(f.total_tax)),1)],64)):v("",!0),l.dataIndex==="subtotal"?(i(),c(p,{key:5},[s(d(e.formatAmountCurrency(f.subtotal)),1)],64)):v("",!0),l.dataIndex==="action"?(i(),c(p,{key:6},[e.editOrderDisable?(i(),c("div",Sa,"-")):(i(),c("div",ka,[t(k,{type:"primary",onClick:P=>e.editItem(f),style:{"margin-left":"4px"}},{icon:a(()=>[t(L)]),_:2},1032,["onClick"]),t(k,{type:"primary",onClick:P=>e.showDeleteConfirm(f),style:{"margin-left":"4px"}},{icon:a(()=>[t(G)]),_:2},1032,["onClick"])]))],64)):v("",!0)]),summary:a(()=>[t(X,null,{default:a(()=>[t(w,{"col-span":4}),t(w,null,{default:a(()=>[s(d(o.$t("product.subtotal")),1)]),_:1}),t(w,null,{default:a(()=>[s(d(e.formatAmountCurrency(e.productsAmount.tax)),1)]),_:1}),t(w,{"col-span":2},{default:a(()=>[s(d(e.formatAmountCurrency(e.productsAmount.subtotal)),1)]),_:1})]),_:1})]),_:1},8,["row-key","dataSource","columns"])]),_:1})]),_:1}),t(u,{gutter:16,class:"mt-30"},{default:a(()=>[t(r,{xs:24,sm:24,md:16,lg:16},{default:a(()=>[t(u,{gutter:16},{default:a(()=>[t(r,{xs:24,sm:24,md:24,lg:24},{default:a(()=>[t(_,{label:o.$t("warehouse.terms_condition"),name:"terms_condition",help:e.rules.terms_condition?e.rules.terms_condition.message:null,validateStatus:e.rules.terms_condition?"error":null},{default:a(()=>[t(j,{value:e.formData.terms_condition,"onUpdate:value":n[7]||(n[7]=l=>e.formData.terms_condition=l),placeholder:o.$t("warehouse.terms_condition"),"auto-size":{minRows:2,maxRows:3},disabled:e.editOrderDisable},null,8,["value","placeholder","disabled"])]),_:1},8,["label","help","validateStatus"])]),_:1})]),_:1}),t(u,{gutter:16},{default:a(()=>[t(r,{xs:24,sm:24,md:24,lg:24},{default:a(()=>[t(_,{label:o.$t("stock.notes"),name:"notes",help:e.rules.notes?e.rules.notes.message:null,validateStatus:e.rules.notes?"error":null},{default:a(()=>[t(j,{value:e.formData.notes,"onUpdate:value":n[8]||(n[8]=l=>e.formData.notes=l),placeholder:o.$t("common.select_default_text",[o.$t("stock.notes")]),rows:5,disabled:e.editOrderDisable},null,8,["value","placeholder","disabled"])]),_:1},8,["label","help","validateStatus"])]),_:1})]),_:1})]),_:1}),t(r,{xs:24,sm:24,md:8,lg:8},{default:a(()=>[e.orderPageObject.type!="quotations"?(i(),g(u,{key:0,gutter:16},{default:a(()=>[t(r,{xs:24,sm:24,md:24,lg:24},{default:a(()=>[t(_,{label:o.$t("stock.status"),name:"order_status",help:e.rules.order_status?e.rules.order_status.message:null,validateStatus:e.rules.order_status?"error":null},{default:a(()=>[t(S,{value:e.formData.order_status,"onUpdate:value":n[9]||(n[9]=l=>e.formData.order_status=l),placeholder:o.$t("common.select_default_text",[o.$t("stock.status")]),allowClear:!0},{default:a(()=>[(i(!0),c(p,null,E(e.allOrderStatus,l=>(i(),g(h,{key:l.key,value:l.key},{default:a(()=>[s(d(l.value),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value","placeholder"])]),_:1},8,["label","help","validateStatus"])]),_:1})]),_:1})):v("",!0),t(u,{gutter:16},{default:a(()=>[t(r,{xs:24,sm:24,md:24,lg:24},{default:a(()=>[t(_,{label:o.$t("stock.order_tax"),name:"tax_id",help:e.rules.tax_id?e.rules.tax_id.message:null,validateStatus:e.rules.tax_id?"error":null},{default:a(()=>[F("span",xa,[t(S,{value:e.formData.tax_id,"onUpdate:value":n[10]||(n[10]=l=>e.formData.tax_id=l),placeholder:o.$t("common.select_default_text",[o.$t("stock.order_tax")]),allowClear:!0,onChange:e.taxChanged,optionFilterProp:"title","show-search":"",disabled:e.editOrderDisable},{default:a(()=>[(i(!0),c(p,null,E(e.taxes,l=>(i(),g(h,{key:l.xid,value:l.xid,title:l.name,tax:l},{default:a(()=>[s(d(l.name)+" ("+d(l.rate)+"%) ",1)]),_:2},1032,["value","title","tax"]))),128))]),_:1},8,["value","placeholder","onChange","disabled"]),t(q,{onOnAddSuccess:e.taxAdded},null,8,["onOnAddSuccess"])])]),_:1},8,["label","help","validateStatus"])]),_:1})]),_:1}),t(u,{gutter:16},{default:a(()=>[t(r,{xs:24,sm:24,md:24,lg:24},{default:a(()=>[t(_,{label:o.$t("stock.discount"),name:"discount",help:e.rules.discount?e.rules.discount.message:null,validateStatus:e.rules.discount?"error":null},{default:a(()=>[t(x,{value:e.formData.discount,"onUpdate:value":n[11]||(n[11]=l=>e.formData.discount=l),placeholder:o.$t("common.placeholder_default_text",[o.$t("stock.discount")]),onChange:e.recalculateFinalTotal,min:"0",style:{width:"100%"},disabled:e.editOrderDisable},{addonBefore:a(()=>[s(d(e.appSetting.currency.symbol),1)]),_:1},8,["value","placeholder","onChange","disabled"])]),_:1},8,["label","help","validateStatus"])]),_:1})]),_:1}),t(u,{gutter:16},{default:a(()=>[t(r,{xs:24,sm:24,md:24,lg:24},{default:a(()=>[t(_,{label:o.$t("stock.shipping"),name:"shipping",help:e.rules.shipping?e.rules.shipping.message:null,validateStatus:e.rules.shipping?"error":null},{default:a(()=>[t(x,{value:e.formData.shipping,"onUpdate:value":n[12]||(n[12]=l=>e.formData.shipping=l),placeholder:o.$t("common.placeholder_default_text",[o.$t("stock.shipping")]),onChange:e.recalculateFinalTotal,min:"0",style:{width:"100%"},disabled:e.editOrderDisable},{addonBefore:a(()=>[s(d(e.appSetting.currency.symbol),1)]),_:1},8,["value","placeholder","onChange","disabled"])]),_:1},8,["label","help","validateStatus"])]),_:1})]),_:1}),t(u,{gutter:16,class:"mt-10"},{default:a(()=>[t(r,{xs:12,sm:12,md:12,lg:12},{default:a(()=>[s(d(o.$t("stock.order_tax")),1)]),_:1}),t(r,{xs:12,sm:12,md:12,lg:12},{default:a(()=>[s(d(e.formatAmountCurrency(e.formData.tax_amount)),1)]),_:1})]),_:1}),t(u,{gutter:16,class:"mt-10"},{default:a(()=>[t(r,{xs:12,sm:12,md:12,lg:12},{default:a(()=>[s(d(o.$t("stock.discount")),1)]),_:1}),t(r,{xs:12,sm:12,md:12,lg:12},{default:a(()=>[s(d(e.formatAmountCurrency(e.formData.discount)),1)]),_:1})]),_:1}),t(u,{gutter:16,class:"mt-10"},{default:a(()=>[t(r,{xs:12,sm:12,md:12,lg:12},{default:a(()=>[s(d(o.$t("stock.shipping")),1)]),_:1}),t(r,{xs:12,sm:12,md:12,lg:12},{default:a(()=>[s(d(e.formatAmountCurrency(e.formData.shipping)),1)]),_:1})]),_:1}),t(u,{gutter:16,class:"mt-10"},{default:a(()=>[t(r,{xs:12,sm:12,md:12,lg:12},{default:a(()=>[s(d(o.$t("stock.grand_total")),1)]),_:1}),t(r,{xs:12,sm:12,md:12,lg:12},{default:a(()=>[s(d(e.formatAmountCurrency(e.formData.subtotal)),1)]),_:1})]),_:1}),t(u,{gutter:16,class:"mt-20 mb-20"},{default:a(()=>[t(k,{type:"primary",loading:e.loading,onClick:e.onSubmit,block:""},{icon:a(()=>[t(T)]),default:a(()=>[s(" "+d(o.$t("common.save")),1)]),_:1},8,["loading","onClick"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(Q,{open:e.addEditVisible,closable:!1,centered:!0,title:e.addEditPageTitle,onOk:e.onAddEditSubmit},{footer:a(()=>[t(k,{key:"submit",type:"primary",loading:e.addEditFormSubmitting,onClick:e.onAddEditSubmit},{icon:a(()=>[t(T)]),default:a(()=>[s(" "+d(o.$t("common.update")),1)]),_:1},8,["loading","onClick"]),t(k,{key:"back",onClick:e.onAddEditClose},{default:a(()=>[s(d(o.$t("common.cancel")),1)]),_:1},8,["onClick"])]),default:a(()=>[t(V,{layout:"vertical"},{default:a(()=>[t(u,{gutter:16},{default:a(()=>[t(r,{xs:24,sm:24,md:24,lg:24},{default:a(()=>[t(_,{label:o.$t("product.unit_price"),name:"unit_price",help:e.addEditRules.unit_price?e.addEditRules.unit_price.message:null,validateStatus:e.addEditRules.unit_price?"error":null},{default:a(()=>[t(x,{value:e.addEditFormData.unit_price,"onUpdate:value":n[13]||(n[13]=l=>e.addEditFormData.unit_price=l),placeholder:o.$t("common.placeholder_default_text",[o.$t("product.unit_price")]),min:"0",style:{width:"100%"}},{addonBefore:a(()=>[s(d(e.appSetting.currency.symbol),1)]),_:1},8,["value","placeholder"])]),_:1},8,["label","help","validateStatus"])]),_:1})]),_:1}),t(u,{gutter:16},{default:a(()=>[t(r,{xs:24,sm:24,md:24,lg:24},{default:a(()=>[t(_,{label:o.$t("product.discount"),name:"discount_rate",help:e.addEditRules.discount_rate?e.addEditRules.discount_rate.message:null,validateStatus:e.addEditRules.discount_rate?"error":null},{default:a(()=>[t(x,{value:e.addEditFormData.discount_rate,"onUpdate:value":n[14]||(n[14]=l=>e.addEditFormData.discount_rate=l),placeholder:o.$t("common.placeholder_default_text",[o.$t("product.discount")]),min:"0",style:{width:"100%"}},{addonAfter:a(()=>[s("%")]),_:1},8,["value","placeholder"])]),_:1},8,["label","help","validateStatus"])]),_:1})]),_:1}),t(u,{gutter:16},{default:a(()=>[t(r,{xs:24,sm:24,md:24,lg:24},{default:a(()=>[t(_,{label:o.$t("product.tax"),name:"tax_id",help:e.addEditRules.tax_id?e.addEditRules.tax_id.message:null,validateStatus:e.addEditRules.tax_id?"error":null},{default:a(()=>[F("span",Da,[t(S,{value:e.addEditFormData.tax_id,"onUpdate:value":n[15]||(n[15]=l=>e.addEditFormData.tax_id=l),placeholder:o.$t("common.select_default_text",[o.$t("product.tax")]),allowClear:!0,optionFilterProp:"title","show-search":""},{default:a(()=>[(i(!0),c(p,null,E(e.taxes,l=>(i(),g(h,{key:l.xid,value:l.xid,title:l.name},{default:a(()=>[s(d(l.name)+" ("+d(l.rate)+"%) ",1)]),_:2},1032,["value","title"]))),128))]),_:1},8,["value","placeholder"]),t(q,{onOnAddSuccess:e.taxAdded},null,8,["onOnAddSuccess"])])]),_:1},8,["label","help","validateStatus"])]),_:1})]),_:1}),t(u,{gutter:16},{default:a(()=>[t(r,{xs:24,sm:24,md:24,lg:24},{default:a(()=>[t(_,{label:o.$t("product.tax_type"),name:"tax_type",help:e.addEditRules.tax_type?e.addEditRules.tax_type.message:null,validateStatus:e.addEditRules.tax_type?"error":null},{default:a(()=>[t(S,{value:e.addEditFormData.tax_type,"onUpdate:value":n[16]||(n[16]=l=>e.addEditFormData.tax_type=l),placeholder:o.$t("common.select_default_text",[o.$t("product.tax_type")]),allowClear:!0},{default:a(()=>[(i(!0),c(p,null,E(e.taxTypes,l=>(i(),g(h,{key:l.key,value:l.key},{default:a(()=>[s(d(l.value),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value","placeholder"])]),_:1},8,["label","help","validateStatus"])]),_:1})]),_:1})]),_:1})]),_:1},8,["open","title","onOk"])],64)}const ot=Ce(ba,[["render",Oa]]);export{ot as default};