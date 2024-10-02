import{c as Q}from"./crud-BXjQ0O-i.js";import{Y as X,e as Y,_ as O,d as J,Q as T,aT as Z,b as I,r as x,o as u,g as y,w as t,a,j as m,t as c,h as B,c as E,L as ee,D as $,p as i,m as te,q as M,f as U,a_ as ae,aD as ne,b3 as oe,F as se,B as R,X as le,aG as de,az as ue,aA as re,z as ie,a6 as me,i as S,ay as ce,aB as pe,aC as _e,a0 as fe,a1 as ye,aR as ge,aM as ke,G as be}from"./app-OikDM5Kw.js";import{P as F}from"./ProductSearchInput-BNlJXU7L.js";import{a as he}from"./apiAdmin-yFrp6bZq.js";import{P as ve}from"./AddButton-e4urfsFt.js";import{S as Se}from"./SaveOutlined-BSR-wlKo.js";import{A as Ce}from"./AdminPageHeader-MbAN4P4t.js";import"./datatable-DjynKO_7.js";import"./filter-CQCFHrIe.js";import"./SubscriptionModuleVisibility-BsDX9H36.js";import"./Upload-D5F1bEQ_.js";import"./UserInfo-4wSQ2hbz.js";import"./FormItemHeading-C_zGUfEl.js";import"./BarcodeGenerator-DMTKYGMo.js";import"./BarcodeOutlined-B83IYm4H.js";import"./PrinterOutlined-DKHuCtDd.js";import"./fields-DqT2B-cf.js";import"./AddEdit-BG4Pk-kE.js";import"./AddEdit-U2uNaYIr.js";import"./AddEdit-F27Qhahl.js";import"./sumBy-DFoExBWY.js";import"./some-BxTyXH2q.js";import"./AddButton-BQyn84QE.js";import"./AddEdit-DHyK7A_P.js";import"./SettingOutlined-DBG_v97O.js";import"./index-CaGusbUe.js";const z=()=>{const e="stock-adjustments",o="stock-adjustments?fields=xid,product_id,x_product_id,product{id,xid,name,image,image_url},quantity,adjustment_type",k=["product_id"],{t:n}=X(),b={product_id:void 0,quantity:1,notes:"",adjustment_type:"add"},g=[{title:n("product.product"),dataIndex:"product_id",sorter:!0},{title:n("stock_adjustment.quantity"),dataIndex:"quantity",sorter:!0},{title:n("common.action"),dataIndex:"action"}],s=[{key:"add",value:n("stock_adjustment.adjustment_add")},{key:"subtract",value:n("stock_adjustment.adjustment_subtract")}],_=Y({product_id:void 0});return{url:o,addEditUrl:e,hashableColumns:k,initData:b,columns:g,adjustmentTypes:s,filters:_}},je=J({props:["formData","data","visible","url","addEditType","pageTitle","successMessage"],emits:["addEditSuccess","closed"],components:{PlusOutlined:T,LoadingOutlined:Z,SaveOutlined:Se,ProductAddButton:ve,ProductSearchInput:F},setup(e,{emit:o}){const{permsArray:k,selectedWarehouse:n}=I(),{addEditRequestAdmin:b,loading:g,rules:s}=he(),{adjustmentTypes:_}=z(),l=x("-");return{loading:g,rules:s,onClose:()=>{s.value={},o("closed")},onSubmit:()=>{b({url:e.url,data:e.formData,successMessage:e.successMessage,success:p=>{o("addEditSuccess",p.xid)}})},adjustmentTypes:_,stockValue:l,getStockValue:()=>{e.formData.product_id!=""?axiosAdmin.post("product-warehouse-stock",{warehouse_id:n.value.id,product_id:e.formData.product_id}).then(p=>{l.value=p.data.stock}):l.value="-"},permsArray:k}}}),De={style:{display:"flex"}};function Ae(e,o,k,n,b,g){const s=i("ProductSearchInput"),_=i("ProductAddButton"),l=te,r=M,h=U,D=ae,p=de,A=ne,q=oe,C=se,w=i("SaveOutlined"),j=R,P=le;return u(),y(P,{open:e.visible,closable:!1,centered:!0,title:e.pageTitle,onOk:e.onSubmit},{footer:t(()=>[a(j,{key:"submit",type:"primary",loading:e.loading,onClick:e.onSubmit},{icon:t(()=>[a(w)]),default:t(()=>[m(" "+c(e.addEditType=="add"?e.$t("common.create"):e.$t("common.update")),1)]),_:1},8,["loading","onClick"]),a(j,{key:"back",onClick:e.onClose},{default:t(()=>[m(c(e.$t("common.cancel")),1)]),_:1},8,["onClick"])]),default:t(()=>[a(C,{layout:"vertical"},{default:t(()=>[a(h,{gutter:16},{default:t(()=>[a(r,{xs:24,sm:24,md:24,lg:24},{default:t(()=>[a(l,{label:e.$t("product.product"),name:"orderSearchTerm",help:e.rules.product_id?e.rules.product_id.message:null,validateStatus:e.rules.product_id?"error":null,class:"required"},{default:t(()=>[B("span",De,[a(s,{onValueChanged:o[0]||(o[0]=d=>e.formData.product_id=d),onValueSuccess:e.getStockValue,productData:e.data},null,8,["onValueSuccess","productData"]),a(_)])]),_:1},8,["label","help","validateStatus"])]),_:1})]),_:1}),a(h,{gutter:16},{default:t(()=>[a(r,{xs:24,sm:24,md:6,lg:6},{default:t(()=>[a(l,{label:e.$t("stock_adjustment.current_stock")},{default:t(()=>[m(c(e.stockValue),1)]),_:1},8,["label"])]),_:1}),a(r,{xs:24,sm:24,md:9,lg:9},{default:t(()=>[a(l,{label:e.$t("stock_adjustment.quantity"),name:"quantity",help:e.rules.quantity?e.rules.quantity.message:null,validateStatus:e.rules.quantity?"error":null,class:"required"},{default:t(()=>[a(D,{value:e.formData.quantity,"onUpdate:value":o[1]||(o[1]=d=>e.formData.quantity=d),placeholder:e.$t("common.placeholder_default_text",[e.$t("stock_adjustment.quantity")]),min:1},null,8,["value","placeholder"])]),_:1},8,["label","help","validateStatus"])]),_:1}),a(r,{xs:24,sm:24,md:9,lg:9},{default:t(()=>[a(l,{label:e.$t("stock_adjustment.adjustment_type"),name:"adjustment_type",help:e.rules.adjustment_type?e.rules.adjustment_type.message:null,validateStatus:e.rules.adjustment_type?"error":null},{default:t(()=>[a(A,{value:e.formData.adjustment_type,"onUpdate:value":o[2]||(o[2]=d=>e.formData.adjustment_type=d),placeholder:e.$t("common.select_default_text",[e.$t("stock_adjustment.adjustment_type")])},{default:t(()=>[(u(!0),E($,null,ee(e.adjustmentTypes,d=>(u(),y(p,{key:d.key,value:d.key},{default:t(()=>[m(c(d.value),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value","placeholder"])]),_:1},8,["label","help","validateStatus"])]),_:1})]),_:1}),a(h,{gutter:16},{default:t(()=>[a(r,{xs:24,sm:24,md:24,lg:24},{default:t(()=>[a(l,{label:e.$t("stock_adjustment.notes"),name:"notes",help:e.rules.notes?e.rules.notes.message:null,validateStatus:e.rules.notes?"error":null},{default:t(()=>[a(q,{value:e.formData.notes,"onUpdate:value":o[3]||(o[3]=d=>e.formData.notes=d),placeholder:e.$t("stock_adjustment.notes")},null,8,["value","placeholder"])]),_:1},8,["label","help","validateStatus"])]),_:1})]),_:1})]),_:1})]),_:1},8,["open","title","onOk"])}const Ee=O(je,[["render",Ae]]),$e={components:{PlusOutlined:T,EditOutlined:ue,DeleteOutlined:re,AddEdit:Ee,ProductSearchInput:F,AdminPageHeader:Ce},setup(){const{url:e,addEditUrl:o,hashableColumns:k,initData:n,columns:b,filters:g}=z(),s=Q(),{permsArray:_,selectedWarehouse:l}=I();ie(()=>{s.crudUrl.value=o,s.langKey.value="stock_adjustment",s.initData.value={...n},s.formData.value={...n},s.hashableColumns.value=[...k],r()});const r=()=>{s.tableUrl.value={url:e,filters:g},s.fetch({page:1})};return me(l,(h,D)=>{r()}),{columns:b,permsArray:_,...s,filters:g,reFetchDatatable:r}}},qe={class:"table-responsive"};function we(e,o,k,n,b,g){const s=ce,_=i("router-link"),l=pe,r=_e,h=i("AdminPageHeader"),D=i("PlusOutlined"),p=R,A=i("DeleteOutlined"),q=fe,C=M,w=i("ProductSearchInput"),j=U,P=i("admin-page-filters"),d=i("AddEdit"),K=ye,N=ge,V=ke,H=i("EditOutlined"),L=be,G=i("admin-page-table-content");return u(),E($,null,[a(h,null,{header:t(()=>[a(s,{title:e.$t("menu.stock_adjustment"),class:"p-0"},null,8,["title"])]),breadcrumb:t(()=>[a(r,{separator:"-",style:{"font-size":"12px"}},{default:t(()=>[a(l,null,{default:t(()=>[a(_,{to:{name:"admin.dashboard.index"}},{default:t(()=>[m(c(e.$t("menu.dashboard")),1)]),_:1})]),_:1}),a(l,null,{default:t(()=>[m(c(e.$t("menu.stock_adjustment")),1)]),_:1})]),_:1})]),_:1}),a(P,null,{default:t(()=>[a(j,{gutter:[16,16]},{default:t(()=>[a(C,{xs:24,sm:24,md:12,lg:10,xl:10},{default:t(()=>[a(q,null,{default:t(()=>[n.permsArray.includes("stock_adjustments_create")||n.permsArray.includes("admin")?(u(),y(p,{key:0,type:"primary",onClick:e.addItem},{default:t(()=>[a(D),m(" "+c(e.$t("stock_adjustment.add")),1)]),_:1},8,["onClick"])):S("",!0),e.table.selectedRowKeys.length>0&&(n.permsArray.includes("stock_adjustments_delete")||n.permsArray.includes("admin"))?(u(),y(p,{key:1,type:"primary",onClick:e.showSelectedDeleteConfirm,danger:""},{icon:t(()=>[a(A)]),default:t(()=>[m(" "+c(e.$t("common.delete")),1)]),_:1},8,["onClick"])):S("",!0)]),_:1})]),_:1}),a(C,{xs:24,sm:24,md:12,lg:14,xl:14},{default:t(()=>[a(j,{gutter:[16,16],justify:"end"},{default:t(()=>[a(C,{xs:24,sm:24,md:12,lg:12,xl:6},{default:t(()=>[a(w,{onValueChanged:o[0]||(o[0]=f=>{n.filters.product_id=f,n.reFetchDatatable()})})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),a(G,null,{default:t(()=>[a(d,{addEditType:e.addEditType,visible:e.addEditVisible,url:e.addEditUrl,onAddEditSuccess:e.addEditSuccess,onClosed:e.onCloseAddEdit,formData:e.formData,data:e.viewData,pageTitle:e.pageTitle,successMessage:e.successMessage},null,8,["addEditType","visible","url","onAddEditSuccess","onClosed","formData","data","pageTitle","successMessage"]),a(j,null,{default:t(()=>[a(C,{span:24},{default:t(()=>[B("div",qe,[a(L,{"row-selection":{selectedRowKeys:e.table.selectedRowKeys,onChange:e.onRowSelectChange,getCheckboxProps:f=>({disabled:!1,name:f.xid})},columns:n.columns,"row-key":f=>f.xid,"data-source":e.table.data,pagination:e.table.pagination,loading:e.table.loading,onChange:e.handleTableChange,bordered:"",size:"middle"},{bodyCell:t(({column:f,record:v})=>[f.dataIndex==="product_id"?(u(),y(N,{key:0},{default:t(()=>[a(K,{shape:"square",src:v.product.image_url},null,8,["src"]),m(" "+c(v.product.name),1)]),_:2},1024)):S("",!0),f.dataIndex==="quantity"?(u(),E($,{key:1},[v.adjustment_type=="add"?(u(),y(V,{key:0,type:"success",strong:""},{default:t(()=>[m(" +"+c(v.quantity),1)]),_:2},1024)):(u(),y(V,{key:1,type:"danger",strong:""},{default:t(()=>[m(" -"+c(v.quantity),1)]),_:2},1024))],64)):S("",!0),f.dataIndex==="action"?(u(),E($,{key:2},[n.permsArray.includes("stock_adjustments_edit")||n.permsArray.includes("admin")?(u(),y(p,{key:0,type:"primary",onClick:W=>e.editItem(v),style:{"margin-left":"4px"}},{icon:t(()=>[a(H)]),_:2},1032,["onClick"])):S("",!0),n.permsArray.includes("stock_adjustments_delete")||n.permsArray.includes("admin")?(u(),y(p,{key:1,type:"primary",onClick:W=>e.showDeleteConfirm(v.xid),style:{"margin-left":"4px"}},{icon:t(()=>[a(A)]),_:2},1032,["onClick"])):S("",!0)],64)):S("",!0)]),_:1},8,["row-selection","columns","row-key","data-source","pagination","loading","onChange"])])]),_:1})]),_:1})]),_:1})],64)}const nt=O($e,[["render",we]]);export{nt as default};
