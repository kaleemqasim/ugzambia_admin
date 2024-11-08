import{_ as K,R as N,aA as j,b as z,e as F,f as m,E as G,a6 as M,r as s,o as i,c as O,a as e,w as t,G as T,l as c,t as u,i as h,k as P,M as q,ay as L,aB as W,aC as J,B as Q,a0 as X,q as Y,aE as Z,aD as $,h as ee,an as te,ao as ne,aG as ae}from"./app-Da3MRomk.js";import{O as re}from"./OrderTable-D0Uwy7j_.js";import{D as oe}from"./DateRangePicker-DCGfdGzR.js";import{A as se}from"./AdminPageHeader-Bcl0CGCU.js";import"./fields-BAYUdgXf.js";import"./datatable-DRjXqEy-.js";import"./filter-DOuykZom.js";import"./PaymentStatus-CgNScddD.js";import"./OrderDetails-Czk1az79.js";import"./cart-CNtrVDOA.js";import"./UserInfo-BdH4yzWd.js";import"./apiAdmin-A_I0yO2H.js";import"./AddButton-JeE4nCgN.js";import"./AddEdit-DqHTeXAk.js";import"./SaveOutlined-Cr5q_jBA.js";import"./Invoice-rRGGZoa5.js";import"./BarcodeGenerator-DvHhZXck.js";import"./PrinterOutlined-Dwijz9xH.js";import"./View-CK593E24.js";import"./ArrowUpOutlined-C-jsknXC.js";import"./SendOutlined-CY7hgX2j.js";import"./WalletOutlined-DigWsoB7.js";import"./ShoppingCartOutlined-cIDIKKZd.js";import"./DollarCircleOutlined-DgnY7K0g.js";import"./index-BeBHoaf8.js";const le={components:{PlusOutlined:N,DeleteOutlined:j,OrderTable:re,DateRangePicker:oe,AdminPageHeader:se},setup(){const{formatAmountCurrency:r,orderType:o,orderPageObject:x,orderStatus:n,permsArray:R,selectedWarehouse:p}=z();F();const f=m([]),d=m(null),g=m([]),k=m(null),y=m({payment_status:"all",warehouse_id:void 0,dates:[],searchColumn:"invoice_number",transfer_type:"transfered",searchString:""});return G(()=>{const b=`warehouses?filters=id ne "${p.value.xid}"&hashable=${p.value.xid}&limit=10000`,_=axiosAdmin.get(b);Promise.all([_]).then(([v])=>{f.value=v.data})}),M(p,(b,_)=>{y.value={order_status:"all",user_id:void 0,dates:[],searchColumn:"invoice_number",transfer_type:"transfered",searchString:""},d.value.resetPicker()}),{orderPageObject:x,permsArray:R,orderStatus:n,formatAmountCurrency:r,warehouses:f,filters:y,orderType:o,serachDateRangePicker:d,selectedRowIds:g,orderTableRef:k}}};function ie(r,o,x,n,R,p){const f=L,d=s("router-link"),g=W,k=J,y=s("AdminPageHeader"),b=s("PlusOutlined"),_=Q,v=s("DeleteOutlined"),A=X,l=Y,C=Z,S=ae,B=$,V=s("DateRangePicker"),w=ee,U=s("admin-page-filters"),D=te,E=ne,H=s("OrderTable"),I=s("admin-page-table-content");return i(),O(T,null,[e(y,null,{header:t(()=>[e(f,{title:r.$t("menu.stock_transfer"),class:"p-0"},null,8,["title"])]),breadcrumb:t(()=>[e(k,{separator:"-",style:{"font-size":"12px"}},{default:t(()=>[e(g,null,{default:t(()=>[e(d,{to:{name:"admin.dashboard.index"}},{default:t(()=>[c(u(r.$t("menu.dashboard")),1)]),_:1},8,["to"])]),_:1}),e(g,null,{default:t(()=>[c(u(r.$t("menu.stock_transfer")),1)]),_:1})]),_:1})]),_:1}),e(U,null,{default:t(()=>[e(w,{gutter:[16,16]},{default:t(()=>[e(l,{xs:24,sm:24,md:12,lg:10,xl:10},{default:t(()=>[e(A,null,{default:t(()=>[(n.permsArray.includes("stock_transfers_create")||n.permsArray.includes("admin"))&&n.filters.transfer_type=="transfered"?(i(),h(d,{key:0,to:{name:"admin.stock.stock-transfers.create"}},{default:t(()=>[e(_,{type:"primary"},{default:t(()=>[e(b),c(" "+u(r.$t("stock_transfer.add")),1)]),_:1})]),_:1},8,["to"])):P("",!0),n.selectedRowIds.length>0&&(n.permsArray.includes("stock_transfers_delete")||n.permsArray.includes("admin"))?(i(),h(_,{key:1,type:"primary",onClick:n.orderTableRef.showSelectedDeleteConfirm,danger:""},{icon:t(()=>[e(v)]),default:t(()=>[c(" "+u(r.$t("common.delete")),1)]),_:1},8,["onClick"])):P("",!0)]),_:1})]),_:1}),e(l,{xs:24,sm:24,md:12,lg:14,xl:14},{default:t(()=>[e(w,{gutter:[16,16],justify:"end"},{default:t(()=>[e(l,{xs:24,sm:24,md:12,lg:6,xl:6},{default:t(()=>[e(C,{style:{width:"100%"},value:n.filters.searchString,"onUpdate:value":o[0]||(o[0]=a=>n.filters.searchString=a),"show-search":"",placeholder:r.$t("common.placeholder_search_text",[r.$t("stock.invoice_number")])},null,8,["value","placeholder"])]),_:1}),n.filters.transfer_type=="transfered"?(i(),h(l,{key:0,xs:24,sm:24,md:8,lg:6,xl:6},{default:t(()=>[e(B,{value:n.filters.warehouse_id,"onUpdate:value":o[1]||(o[1]=a=>n.filters.warehouse_id=a),placeholder:r.$t("common.select_default_text",[r.$t("warehouse.warehouse")]),allowClear:!0,style:{width:"100%"},optionFilterProp:"title","show-search":""},{default:t(()=>[(i(!0),O(T,null,q(n.warehouses,a=>(i(),h(S,{key:a.xid,title:a.name,value:a.xid},{default:t(()=>[c(u(a.name),1)]),_:2},1032,["title","value"]))),128))]),_:1},8,["value","placeholder"])]),_:1})):P("",!0),e(l,{xs:24,sm:24,md:8,lg:6,xl:6},{default:t(()=>[e(V,{ref:"serachDateRangePicker",onDateTimeChanged:o[2]||(o[2]=a=>n.filters.dates=a)},null,512)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(I,null,{default:t(()=>[e(w,null,{default:t(()=>[e(l,{span:24},{default:t(()=>[e(E,{activeKey:n.filters.transfer_type,"onUpdate:activeKey":o[3]||(o[3]=a=>n.filters.transfer_type=a)},{default:t(()=>[e(D,{key:"transfered",tab:r.$t("stock_transfer.transfered")},null,8,["tab"]),e(D,{key:"received",tab:r.$t("stock_transfer.received")},null,8,["tab"])]),_:1},8,["activeKey"])]),_:1})]),_:1}),e(H,{ref:"orderTableRef",orderType:n.orderType,filters:n.filters,tableSize:"middle",bordered:!0,selectable:!0,onOnRowSelection:o[4]||(o[4]=a=>n.selectedRowIds=a)},null,8,["orderType","filters"])]),_:1})],64)}const Ue=K(le,[["render",ie]]);export{Ue as default};