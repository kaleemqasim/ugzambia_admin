import{S as vt,Y as ut,u as Tt,f as C,aZ as mt,_ as J,b as ct,o as d,c as y,j as _,t as r,k as P,b2 as Nt,R as xt,b3 as Vt,b4 as zt,aA as bt,E as Ct,V as Lt,r as I,i as f,w as e,a,l as p,G as k,M as z,am as Bt,q as dt,h as it,B as wt,J as kt,aD as pt,n as Dt,I as Wt,b5 as jt,F as St,ap as Kt,aG as _t,d as Ft,a1 as Xt,H as Gt,aF as At,aV as Ht,az as Qt,g as Yt,aW as Jt,aX as Zt,b6 as $t,b7 as te,b8 as ee,C as ae,X as ne,ab as rt,ay as oe,aY as le,aM as de,a_ as ie,a0 as se,D as re}from"./app-HsD_dz6z.js";import{a as ue}from"./apiAdmin-sJa0ZPI-.js";import{s as me}from"./sumBy-C7apCVym.js";import{f as ce}from"./filter-B6ZKd2Sn.js";import{C as pe}from"./CustomerAddButton-CFnwJSUe.js";import{I as _e}from"./Invoice-Dvuz1QS0.js";import{C as fe}from"./ContainerOutlined-Xi9my5sc.js";import{U as ge}from"./UnorderedListOutlined-B4dNYkol.js";import"./index-Cgpdf-In.js";import{S as ye}from"./SaveOutlined-V_py-V-u.js";import{S as he}from"./SettingOutlined-DR3VCEHs.js";import{S as ve}from"./ShoppingCartOutlined-DrWct_2w.js";import"./fields-BNbog8Jz.js";import"./Upload-CnJJ2DZe.js";import"./AddButton-DZVaHjmj.js";import"./AddEdit-CImLpKpy.js";import"./AddButton-DrLU4OFX.js";import"./AddEdit-LxiC4vx8.js";import"./BarcodeGenerator-DcEs3Mq1.js";import"./PrinterOutlined-2C1xj10B.js";vt.div`
    border-radius: 10px;
    background-color: #fff;
    position: relative;
	width: 100%;

    @media only screen and (max-width: 767px){
        max-width: 350px;
        margin: 0 auto;
    }
    &.list-view{
        max-width: 100%;
        .product-single-price__offer{
            @media only screen and (max-width: 991px) and (min-width: 768px){
                display: block;
            }
        }
    }
    .product-list{
        background-color: #fff;
        padding: 20px;
        border-radius: 10px;
        figure{
            @media only screen and (max-width: 1199px){
            }
            @media only screen and (max-width: 991px){
                margin: 0 0 20px;
            }
            img{
                border-radius: 10px;
            }
        }
        .product-single-description{
            p{
                font-size: 15px;
            }
        }
        .product-single-title{
            font-size: 18px;
            margin: 25px 0 16px;
            @media only screen and (max-width: 1199px){
                margin: 0 0 16px;
            }
        }
        .product-single-info{
            margin-top: 25px;
            @media only screen and (max-width: 1199px){
                margin-top: 0;
            }
        }
        .product-single-price__new{
            font-size: 16px;
        }
        .product-single-action{
            flex-flow: column;
            align-items: flex-start;
            margin: 28px 0 0 0;
            button{
                min-width: 132px;
                margin: 0;
                padding: 0px 14px;
                height: 38px;
            }
            .btn-cart{
                margin: 0 0 10px;
            }
            .ant-btn-sm{
                height: 38px;
            }
        }
        .btn-heart{
            @media only screen and (max-width: 1599px){
                top: 0;
            }
            @media only screen and (max-width: 1199px){
                top: -4px;
            }
            @media only screen and (max-width: 991){
                top: 0;
            }
        }
    }
    figure{
        margin-bottom: 0;
        img{
            width: 100px;
        }
    }
    figcaption{
        padding: 20px 20px 26px;
    }
    .quantity-box{
        position: absolute;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        height: 15px;
        top: 1px;
        background-color: #fff;
		padding: 0 6px;
		left: 1px;
    }
    .product-single-title{
        margin-bottom: 10px;
        font-size: 15px;
        font-weight: 500;

    }
    .product-single-price{
        margin-bottom: 5px;
        del{
            margin: 0 5px;
        }
    }
    .product-single-price__new{
        font-weight: 600;
    }
    .product-single-price__offer{
        font-weight: 500;
        font-size: 12px;
    }
    .product-single-rating{
        font-size: 12px;
        font-weight: 500;
        display: flex;
        flex-wrap: wrap;
        align-items: center;

        .ant-rate-star{
            div{
                transform: none !important;
            }
        }
        .total-reviews{
            font-weight: 400;
          
        }
        svg{
            width: 13px;
        }
    }
    .product-single-action{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        margin: 20px -5px -5px -5px;
        button{
            font-size: 12px;
            margin: 5px;
        }


        .ant-btn-sm{
            font-size: 12px;
            padding: 0px 18.065px;
            height: 36px;
        }
    }
`;const xe=vt.div`
    max-width: 650px;
    margin: 0 auto;
    .ant-card{
        margin-bottom: 0 !important;
    }

    .ant-form-item{
        margin-bottom: 0;
    }

    .summary-table-title{
        font-size: 18px;
        font-weight: 500;
        margin-bottom: 25px;
      
    }
    .order-summary-inner{
        padding-bottom: 5px;
        @media only screen and (max-width: 1599px){
            max-width: 600px;
            margin: 0 auto;
        }
        .ant-form-item-control{
            line-height: 2.2;
        }
        .ant-form-item-control-wrapper{
            width: 100%;
        }
        .ant-select{
            .ant-select-selection-item{
                font-weight: 500;
            }
        }
        .ant-select-single:not(.ant-select-customize-input) .ant-select-selector{
            height: 30px !important;
        }
    }
    .invoice-summary-inner{
        .summary-list{
            margin: 22px 0;
            li{
                &:not(:last-child){
                    margin-bottom: 12px;
                }
            }
        }
      
    }

    .summary-list{
		padding: 0;
        li{
            display: flex;
            justify-content: space-between;
            &:not(:last-child){
                margin-bottom: 18px;
            }
            span{
                font-weight: 500;
            }
          
        }
    }
    .ant-select-focused.ant-select-single{
        .ant-select-selector{
            box-shadow: 0 0 !important;
        }
    }
    .ant-select-single{
        margin-top: 18px;
        .ant-select-selection-search-input{
            height: fit-content;
        }
        .ant-select-selector{
            padding: 0 !important;
            border: 0 none !important;
            
        }
       
    }
    .promo-apply-form{
        display: flex;
        align-items: flex-end;
        margin: 5px 0 18px;
        @media only screen and (max-width: 479px){
            flex-flow: column;
            align-items: flex-start;
        }
        .ant-form-item{
            margin-bottom: 0;
        }
        .ant-row{
            flex: auto;
            flex-flow: column;
        }
        .ant-form-item-label{
            text-align: 'right';
            line-height: 30px;
            label{
                font-weight: 400;
                margin-bottom: 4px;
                height: fit-content;
                
            }
        }
        .ant-form-item-control-wrapper{
            display: flex;
            width: 100%;
            @media only screen and (max-width: 479px){
                flex-flow: column;
            }
            .ant-form-item-control{
                width: 100%;
            }
            .ant-form-item-children{
                display: block;
                margin: '0 6px 0 0';
                height: auto;
                @media only screen and (max-width: 479px){
                    margin: '0 6px 10px 0';
                }
            }
            input{
                height: 40px;
                @media only screen and (max-width: 479px){
                    width: 100% !important;
                }
            }
            button{
                height: 40px;
            }
        }
    }
    .summary-total{
        display: inline-flex;
        justify-content: space-between;
        width: 100%;
        .summary-total-label{
            font-size: 16px;
            font-weight: 500;
          
        }
        .summary-total-amount{
            font-size: 18px;
            font-weight: 600;
          
        }
    }
    .btn-proceed{
        font-size: 15px;
        font-weight: 500;
        width: 100%;
        height: 50px;
        border-radius: 8px;
        margin-top: 22px;
        @media only screen and (max-width: 575px){
            font-size: 13px;
        }
        a{
            display: flex;
            align-items: center;
        }
        i,
        svg{
            'margin-left' : 6px;
            color: #fff;
        }
    }
`,be=()=>{const{t:n}=ut();Tt();const l=C([]);C([]);const v=C([]),t=C([]),R=C([]),L=C([]),m=C({}),c=C({user_id:void 0,tax_id:void 0,category_id:void 0,brand_id:void 0,tax_id:void 0,tax_rate:0,tax_amount:0,discount_type:"percentage",discount_value:0,discount:0,shipping:0,subtotal:0}),x=[{title:"#",dataIndex:"sn"},{title:n("product.name"),dataIndex:"name"},{title:n("product.quantity"),dataIndex:"unit_quantity"},{title:n("product.subtotal"),dataIndex:"subtotal"},{title:n("common.action"),dataIndex:"action"}],E="customers?limit=10000";return{taxes:l,customers:v,brands:t,categories:R,productLists:L,formData:c,customerUrl:E,orderItemColumns:x,getPreFetchData:()=>{const u=axiosAdmin.get("taxes?limit=10000"),U=axiosAdmin.get(E),W=axiosAdmin.get("categories?limit=10000"),A=axiosAdmin.get("brands?limit=10000"),q=axiosAdmin.post("pos/products",{brand_id:c.value.brand_id,category_id:c.value.category_id}),M=axiosAdmin.get("default-walkin-customer");Promise.all([u,U,q,W,A,M]).then(([V,D,j,O,b,K])=>{l.value=V.data,v.value=D.data,R.value=O.data,t.value=b.data,L.value=j.data.products;var h=mt(v.value,["xid",K.data.customer.xid]);h&&(m.value=h,c.value={...c.value,user_id:h.xid})})},posDefaultCustomer:m}},Ce={props:["product"],setup(n){const{formatAmountCurrency:l}=ct();return{formatAmountCurrency:l}}},we={key:0,class:"product-pos"},ke={class:"product-pos-top"},De={href:"javascript:void(0)"},Se={class:"quantity-box",to:"#"},Fe=["src"],Ae={class:"product-pos-bottom"},Pe={class:"product-title"},Oe={class:"product-details"},Ie={class:"product-price"};function Ee(n,l,v,t,R,L){return v.product&&v.product.xid?(d(),y("div",we,[_("div",ke,[_("a",De,[_("span",Se,r(v.product.stock_quantity)+" "+r(v.product.unit.short_name),1),_("img",{src:v.product.image_url,class:"img-fit"},null,8,Fe)])]),_("div",Ae,[_("div",null,[_("h5",Pe,r(v.product.name),1)]),_("div",Oe,[_("div",Ie,[_("span",null,r(t.formatAmountCurrency(v.product.subtotal)),1)])])])])):P("",!0)}const qe=J(Ce,[["render",Ee]]),Ue={props:["visible","data","selectedProducts"],emits:["closed","success"],components:{CheckOutlined:Nt,PlusOutlined:xt,LeftOutlined:Vt,RightOutlined:zt,DeleteOutlined:bt},setup(n,{emit:l}){const{addEditRequestAdmin:v,loading:t,rules:R}=ue(),{appSetting:L,formatAmountCurrency:m}=ct(),c=C([]),x=C({payment_mode_id:void 0,amount:0,notes:""}),{t:E}=ut(),i=C([]),u=C([{title:E("payments.payment_mode"),dataIndex:"payment_mode"},{title:E("payments.amount"),dataIndex:"amount"},{title:E("common.action"),dataIndex:"action"}]),U=C(!1);Ct(()=>{axiosAdmin.get("payment-modes").then(O=>{c.value=O.data})});const W=()=>{x.value={payment_mode_id:void 0,amount:0,notes:""},i.value=[],l("closed")},A=()=>{v({url:"pos/payment",data:x.value,success:O=>{i.value=[...i.value,{...x.value,id:Math.random().toString(36).slice(2)}],x.value={payment_mode_id:void 0,amount:0,notes:""},U.value=!1}})},q=()=>{const O={all_payments:i.value,product_items:n.selectedProducts,details:n.data};v({url:"pos/save",data:O,successMessage:n.successMessage,success:b=>{x.value={payment_mode_id:void 0,amount:0,notes:""},i.value=[],U.value=!1,l("success",b.order)}})},M=()=>{x.value={payment_mode_id:void 0,amount:0,notes:""},U.value=!1},V=O=>{var b=mt(c.value,["xid",O]);return b?b.name:"-"},D=O=>{var b=ce(i.value,K=>K.id!=O);i.value=b},j=Lt(()=>{var O=me(i.value,b=>parseFloat(b.amount));return O+parseFloat(x.value.amount)});return{loading:t,rules:R,drawerClosed:W,paymentModes:c,formData:x,appSetting:L,formatAmountCurrency:m,onSubmit:A,allPaymentRecords:i,paymentRecordsColumns:u,showAddForm:U,completeOrder:q,goBack:M,getPaymentModeName:V,deletePayment:D,totalEnteredAmount:j,drawerWidth:window.innerWidth<=991?"90%":"50%"}}},Re={style:{color:"#7c8db5 !important"}};function Me(n,l,v,t,R,L){const m=Bt,c=dt,x=it,E=I("PlusOutlined"),i=wt,u=I("RightOutlined"),U=I("LeftOutlined"),W=I("DeleteOutlined"),A=kt,q=_t,M=pt,V=Dt,D=Wt,j=jt,O=I("CheckOutlined"),b=St,K=Kt;return d(),f(K,{title:n.$t("payments.order_payment"),width:t.drawerWidth,maskClosable:!1,open:v.visible,onClose:t.drawerClosed},{default:e(()=>[a(x,null,{default:e(()=>[a(c,{xs:24,sm:24,md:8,lg:8},{default:e(()=>[a(x,null,{default:e(()=>[a(c,{span:24},{default:e(()=>[a(m,{title:n.$t("stock.total_items"),value:v.selectedProducts.length,style:{"margin-right":"50px"}},null,8,["title","value"])]),_:1}),a(c,{span:24,class:"mt-20"},{default:e(()=>[a(m,{title:n.$t("stock.paying_amount"),value:t.formatAmountCurrency(t.totalEnteredAmount)},null,8,["title","value"])]),_:1}),a(c,{span:24,class:"mt-20"},{default:e(()=>[a(m,{title:n.$t("stock.payable_amount"),value:t.formatAmountCurrency(v.data.subtotal)},null,8,["title","value"])]),_:1}),a(c,{span:24,class:"mt-20"},{default:e(()=>[t.totalEnteredAmount<=v.data.subtotal?(d(),f(m,{key:0,title:n.$t("payments.due_amount"),value:t.formatAmountCurrency(v.data.subtotal-t.totalEnteredAmount)},null,8,["title","value"])):(d(),f(m,{key:1,title:n.$t("stock.change_return"),value:t.formatAmountCurrency(t.totalEnteredAmount-v.data.subtotal)},null,8,["title","value"]))]),_:1})]),_:1})]),_:1}),a(c,{xs:24,sm:24,md:16,lg:16},{default:e(()=>[a(x,{gutter:[24,24]},{default:e(()=>[t.showAddForm?(d(),f(c,{key:1,span:24},{default:e(()=>[a(x,null,{default:e(()=>[a(c,{xs:24,sm:24,md:10,lg:10},{default:e(()=>[a(i,{block:!0,type:"primary",onClick:t.goBack},{default:e(()=>[a(U),p(" "+r(n.$t("common.back")),1)]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1})):(d(),f(c,{key:0,span:24},{default:e(()=>[a(x,{gutter:[16,8],class:"mt-20"},{default:e(()=>[a(c,{xs:24,sm:24,md:10,lg:10},{default:e(()=>[a(i,{block:!0,type:"primary",onClick:l[0]||(l[0]=()=>t.showAddForm=!0)},{default:e(()=>[a(E),p(" "+r(n.$t("payments.add")),1)]),_:1})]),_:1}),a(c,{xs:24,sm:24,md:10,lg:10},{default:e(()=>[a(i,{loading:t.loading,block:!0,onClick:t.completeOrder},{default:e(()=>[p(r(n.$t("stock.complete_order"))+" ",1),a(u)]),_:1},8,["loading","onClick"])]),_:1})]),_:1})]),_:1})),t.showAddForm?(d(),f(c,{key:3,span:24},{default:e(()=>[a(b,{layout:"vertical"},{default:e(()=>[a(x,{gutter:16},{default:e(()=>[a(c,{xs:24,sm:24,md:12,lg:12},{default:e(()=>[a(V,{label:n.$t("payments.payment_mode"),name:"payment_mode_id",help:t.rules.payment_mode_id?t.rules.payment_mode_id.message:null,validateStatus:t.rules.payment_mode_id?"error":null},{default:e(()=>[a(M,{value:t.formData.payment_mode_id,"onUpdate:value":l[1]||(l[1]=h=>t.formData.payment_mode_id=h),placeholder:n.$t("common.select_default_text",[n.$t("payments.payment_mode")]),allowClear:!0},{default:e(()=>[(d(!0),y(k,null,z(t.paymentModes,h=>(d(),f(q,{key:h.xid,value:h.xid},{default:e(()=>[p(r(h.name),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value","placeholder"])]),_:1},8,["label","help","validateStatus"])]),_:1}),a(c,{xs:24,sm:24,md:12,lg:12},{default:e(()=>[a(V,{label:n.$t("stock.paying_amount"),name:"amount",help:t.rules.amount?t.rules.amount.message:null,validateStatus:t.rules.amount?"error":null},{default:e(()=>[a(D,{prefix:t.appSetting.currency.symbol,value:t.formData.amount,"onUpdate:value":l[2]||(l[2]=h=>t.formData.amount=h),placeholder:n.$t("common.placeholder_default_text",[n.$t("stock.payable_amount")])},null,8,["prefix","value","placeholder"]),_("small",Re,[p(r(n.$t("stock.payable_amount"))+" ",1),_("span",null,r(t.formatAmountCurrency(v.data.subtotal)),1)])]),_:1},8,["label","help","validateStatus"])]),_:1})]),_:1}),a(x,{gutter:16},{default:e(()=>[a(c,{xs:24,sm:24,md:24,lg:24},{default:e(()=>[a(V,{label:n.$t("payments.notes"),name:"notes",help:t.rules.notes?t.rules.notes.message:null,validateStatus:t.rules.notes?"error":null},{default:e(()=>[a(j,{value:t.formData.notes,"onUpdate:value":l[3]||(l[3]=h=>t.formData.notes=h),placeholder:n.$t("payments.notes"),rows:5},null,8,["value","placeholder"])]),_:1},8,["label","help","validateStatus"])]),_:1})]),_:1}),a(x,{gutter:16},{default:e(()=>[a(c,{xs:24,sm:24,md:24,lg:24},{default:e(()=>[a(i,{type:"primary",loading:t.loading,onClick:t.onSubmit,block:""},{icon:e(()=>[a(O)]),default:e(()=>[p(" "+r(n.$t("common.add")),1)]),_:1},8,["loading","onClick"])]),_:1})]),_:1})]),_:1})]),_:1})):(d(),f(c,{key:2,span:24},{default:e(()=>[a(A,{dataSource:t.allPaymentRecords,columns:t.paymentRecordsColumns,pagination:!1},{bodyCell:e(({column:h,record:X})=>[h.dataIndex==="payment_mode"?(d(),y(k,{key:0},[p(r(t.getPaymentModeName(X.payment_mode_id)),1)],64)):P("",!0),h.dataIndex==="amount"?(d(),y(k,{key:1},[p(r(t.formatAmountCurrency(X.amount)),1)],64)):P("",!0),h.dataIndex==="action"?(d(),f(i,{key:2,type:"primary",onClick:Q=>t.deletePayment(X.id),danger:""},{icon:e(()=>[a(W)]),_:2},1032,["onClick"])):P("",!0)]),_:1},8,["dataSource","columns"])]),_:1}))]),_:1})]),_:1})]),_:1})]),_:1},8,["title","width","open","onClose"])}const Te=J(Ue,[["render",Me]]),Ne=Ft({props:["formData","brands","categories"],emits:["changed"],components:{ContainerOutlined:fe},setup(n,{emit:l}){return{reFetchProducts:()=>{l("changed")},getCategoryName:R=>R.length>9?R.substring(0,8)+"..":R}}}),Ve=["onClick"];function ze(n,l,v,t,R,L){const m=I("ContainerOutlined"),c=Xt,x=Gt,E=dt,i=it;return d(),f(i,{gutter:[16,16]},{default:e(()=>[a(E,{xs:24,sm:24,md:24,lg:24,xl:24,class:"pos-style-1-category-scroll"},{default:e(()=>[_("div",{onClick:l[0]||(l[0]=()=>{n.formData.category_id=void 0,n.reFetchProducts()}),class:"pos-style-1-category-box"},[a(c,{shape:"square",size:"large",style:{backgroundColor:"#fff",color:"black",verticalAlign:"middle",marginTop:"5px"}},{icon:e(()=>[a(m)]),_:1}),_("p",null,r(n.$t("common.all")),1)]),(d(!0),y(k,null,z(n.categories,u=>(d(),y("div",{key:u.xid,onClick:()=>{n.formData.category_id=u.xid,n.reFetchProducts()},class:"pos-style-1-category-box"},[a(x,{title:u.name},{default:e(()=>[a(c,{size:"large",src:u.image_url,style:{verticalAlign:"middle",marginTop:"5px"}},null,8,["src"]),_("p",null,r(n.getCategoryName(u.name)),1)]),_:2},1032,["title"])],8,Ve))),128))]),_:1})]),_:1})}const Le=J(Ne,[["render",ze]]),Be=Ft({props:["formData","brands","categories"],emits:["changed"],setup(n,{emit:l}){return{reFetchProducts:()=>{l("changed")}}}});function We(n,l,v,t,R,L){const m=_t,c=pt,x=dt,E=At,i=it;return d(),f(i,{gutter:[16,16]},{default:e(()=>[a(x,{xs:24,sm:24,md:12,lg:12,xl:12},{default:e(()=>[a(c,{value:n.formData.brand_id,"onUpdate:value":l[0]||(l[0]=u=>n.formData.brand_id=u),placeholder:n.$t("common.select_default_text",[n.$t("product.brand")]),allowClear:!0,style:{width:"100%"},optionFilterProp:"title","show-search":"",onChange:n.reFetchProducts},{default:e(()=>[(d(!0),y(k,null,z(n.brands,u=>(d(),f(m,{key:u.xid,title:u.name,value:u.xid},{default:e(()=>[p(r(u.name),1)]),_:2},1032,["title","value"]))),128))]),_:1},8,["value","placeholder","onChange"])]),_:1}),a(x,{xs:24,sm:24,md:12,lg:12,xl:12},{default:e(()=>[a(E,{compact:""},{default:e(()=>[a(c,{value:n.formData.category_id,"onUpdate:value":l[1]||(l[1]=u=>n.formData.category_id=u),placeholder:n.$t("common.select_default_text",[n.$t("product.category")]),allowClear:!0,style:{width:"100%"},optionFilterProp:"title","show-search":"",onChange:n.reFetchProducts},{default:e(()=>[(d(!0),y(k,null,z(n.categories,u=>(d(),f(m,{key:u.xid,title:u.name,value:u.xid},{default:e(()=>[p(r(u.name),1)]),_:2},1032,["title","value"]))),128))]),_:1},8,["value","placeholder","onChange"])]),_:1})]),_:1})]),_:1})}const je=J(Be,[["render",We]]),Ke={components:{PlusOutlined:xt,SearchOutlined:Ht,EditOutlined:Qt,DeleteOutlined:bt,SaveOutlined:ye,SettingOutlined:he,ShoppingCartOutlined:ve,UnorderedListOutlined:ge,PosLayout1:Le,PosLayout2:je,ProductCardNew:qe,OrderSummary:xe,PayNow:Te,CustomerAddButton:pe,InvoiceModal:_e},setup(){const{taxes:n,customers:l,brands:v,categories:t,productLists:R,orderItemColumns:L,formData:m,customerUrl:c,getPreFetchData:x,posDefaultCustomer:E}=be(),i=C([]),u=C([]),U=C([]),W=C(1),A=Yt({orderSearchTerm:void 0,productFetching:!1,products:[]}),{formatAmount:q,formatAmountCurrency:M,appSetting:V,taxTypes:D,permsArray:j}=ct(),{t:O}=ut(),b=C(!1),K=C(!1),h=C({}),X=C([]),Q=C(""),G=C(!1),Z=C(!1),$=C({}),tt=C(!1);Ct(()=>{x()});const Y=()=>{axiosAdmin.post("pos/products",{brand_id:m.value.brand_id,category_id:m.value.category_id}).then(s=>{R.value=s.data.products})},et=Jt(s=>{at(s)},300),at=s=>{A.products=[],s!=""&&(A.productFetching=!0,axiosAdmin.post("search-product",{order_type:"sales",search_term:s}).then(S=>{S.data.length==1?nt("",{product:S.data[0]}):A.products=S.data,A.productFetching=!1}))},st=s=>{$t(()=>{s.keyCode==13&&at(s.target.value)})},nt=(s,g)=>{const S=g.product;ot(S)},ot=s=>{if(te(u.value,s.xid)){const N=mt(i.value,["xid",s.xid]);if(N&&N.quantity<N.stock_quantity){const F=[];var S={};i.value.map(B=>{var H=B.quantity;B.xid==s.xid&&(H+=1,B.quantity=H,S=B),F.push(B)}),i.value=F;var g=new Audio(V.value.beep_audio_url);g.play(),A.orderSearchTerm=void 0,A.products=[],w(S)}else A.orderSearchTerm=void 0,A.products=[],ee.error(O("common.out_of_stock"))}else{u.value.push(s.xid),i.value.push({...s,sn:i.value.length+1,unit_price:q(s.unit_price),tax_amount:q(s.tax_amount),subtotal:q(s.subtotal)}),A.orderSearchTerm=void 0,A.products=[],T();var g=new Audio(V.value.beep_audio_url);g.play()}},o=s=>{var g=parseFloat(s.quantity),S=parseFloat(s.stock_quantity);const N=parseFloat(s.unit_price);g=g>S?S:g;const F=s.discount_rate,yt=F>0?F/100*N:0,B=N-yt;var H=0,ht=B,lt=N;return s.tax_rate>0&&(s.tax_type=="inclusive"?(lt=B*100/(100+s.tax_rate),H=lt*(s.tax_rate/100)):(H=B*(s.tax_rate/100),ht=B+H,lt=B)),{...s,total_discount:yt*g,subtotal:ht*g,quantity:g,total_tax:H*g,max_quantity:S,single_unit_price:lt}},w=s=>{const g=[];i.value.map(S=>{if(S.xid==s.xid){const N=o(s);g.push(N)}else g.push(S)}),i.value=g,T()},T=()=>{let s=0;i.value.map(F=>{s+=F.subtotal});var g=0;m.value.discount_type=="percentage"?g=m.value.discount_value!=""?parseFloat(m.value.discount_value)*s/100:0:m.value.discount_type=="fixed"&&(g=m.value.discount_value!=""?parseFloat(m.value.discount_value):0);const S=m.value.tax_rate!=""?parseFloat(m.value.tax_rate):0;s=s-g;const N=s*(S/100);s=s+parseFloat(m.value.shipping),m.value.subtotal=q(s+N),m.value.tax_amount=q(N),m.value.discount=g},Pt=s=>{const g=[];let S=1;i.value.map(F=>{F.item_id!=null&&(U.value=[...U.value,F.item_id]),F.xid!=s.xid&&(g.push({...F,sn:S,single_unit_price:q(F.single_unit_price),tax_amount:q(F.tax_amount),subtotal:q(F.subtotal)}),S++)}),i.value=g;const N=u.value.filter(F=>F!=s.xid);u.value=N,T()},Ot=(s,g)=>{m.value.tax_rate=s==null?0:g.tax.rate,T()},It=s=>{h.value={id:s.xid,discount_rate:s.discount_rate,unit_price:s.unit_price,tax_id:s.x_tax_id,tax_type:s.tax_type==null?void 0:s.tax_type},b.value=!0,Q.value=s.name},Et=()=>{G.value=!0},qt=()=>{G.value=!1},ft=()=>{i.value=[],u.value=[],m.value={...m.value,tax_id:void 0,category_id:void 0,brand_id:void 0,tax_id:void 0,tax_rate:0,tax_amount:0,discount_value:0,discount:0,shipping:0,subtotal:0},T()},Ut=()=>{const s=i.value.filter(F=>F.xid==h.value.id),g=n.value.filter(F=>F.xid==h.value.tax_id),S=h.value.tax_type!=null?h.value.tax_type:"exclusive",N={...s[0],discount_rate:parseFloat(h.value.discount_rate),unit_price:parseFloat(h.value.unit_price),tax_id:h.value.tax_id,tax_rate:g[0]?g[0].rate:0,tax_type:S};w(N),gt()},gt=()=>{h.value={},b.value=!1},Rt=()=>{axiosAdmin.get(c).then(s=>{l.value=s.data})},Mt=s=>{ft();var g=E.value&&E.value.xid?E.value.xid:void 0;m.value={...m.value,user_id:g},Y(),G.value=!1,$.value=s,Z.value=!0};return{taxes:n,customers:l,categories:t,brands:v,productLists:R,formData:m,reFetchProducts:Y,selectSaleProduct:ot,taxChanged:Ot,quantityChanged:w,recalculateFinalTotal:T,payNow:Et,payNowVisible:G,payNowClosed:qt,resetPos:ft,appSetting:V,permsArray:j,...Zt(A),fetchProducts:et,searchValueSelected:nt,selectedProducts:i,orderItemColumns:L,formatAmount:q,formatAmountCurrency:M,containerStyle:{height:window.innerHeight-110+"px",overflow:"scroll","overflow-y":"scroll"},customerAdded:Rt,editItem:It,addEditVisible:b,addEditFormData:h,addEditFormSubmitting:K,addEditRules:X,addEditPageTitle:Q,onAddEditSubmit:Ut,onAddEditClose:gt,taxTypes:D,showDeleteConfirm:Pt,payNowSuccess:Mt,printInvoiceModalVisible:Z,printInvoiceOrder:$,postLayout:W,innerWidth:window.innerWidth,inputValueChanged:st,showMobileCart:tt}}},Xe={style:{display:"flex"}},Ge={key:0},He=_("br",null,null,-1),Qe={class:"pos-left-wrapper"},Ye={class:"pos-left-header"},Je={class:"bill-filters"},Ze={style:{display:"flex"}},$e={key:0},ta=_("br",null,null,-1),ea={style:{display:"flex"}},aa={class:"pos-left-content"},na={class:"bill-body"},oa={class:"bill-table"},la=_("br",null,null,-1),da={class:"pos-left-footer"},ia={class:"bill-footer"},sa={style:{right:0,bottom:20,width:"100%",padding:"10px 16px",background:"#fff",textAlign:"right",zIndex:1}},ra={class:"pos-grand-total"},ua={class:"pos-grand-total"},ma={style:{display:"flex"}},ca={class:"pos1-left-wrapper"},pa={key:0,class:"pos-left-header"},_a={key:1,class:"pos-left-content"},fa={key:2},ga=_("br",null,null,-1),ya={key:3,class:"pos-left-footer"},ha={class:"bill-footer",style:{paddingBotton:"30px"}},va={key:0,class:"pos-mobile-footer"},xa={class:"pos-grand-total"};function ba(n,l,v,t,R,L){const m=_t,c=pt,x=I("CustomerAddButton"),E=oe,i=dt,u=it,U=ae,W=I("SearchOutlined"),A=le,q=de,M=ie,V=I("EditOutlined"),D=wt,j=I("DeleteOutlined"),O=kt,b=Dt,K=At,h=se,X=I("PosLayout1"),Q=I("PosLayout2"),G=I("ProductCardNew"),Z=re,$=I("perfect-scrollbar"),tt=I("ShoppingCartOutlined"),Y=I("UnorderedListOutlined"),et=St,at=I("SaveOutlined"),st=ne,nt=I("PayNow"),ot=I("InvoiceModal");return d(),y(k,null,[a(U,{class:"page-content-sub-header breadcrumb-left-border",bodyStyle:{padding:"0px",margin:"0px 16px 0"}},{default:e(()=>[a(u,null,{default:e(()=>[a(i,{span:24},{default:e(()=>[a(E,{title:n.$t("menu.pos"),onBack:l[1]||(l[1]=()=>n.$router.go(-1)),class:"p-0"},rt({_:2},[t.innerWidth<=768?{name:"extra",fn:e(()=>[_("span",Xe,[a(c,{value:t.formData.user_id,"onUpdate:value":l[0]||(l[0]=o=>t.formData.user_id=o),placeholder:n.$t("user.walk_in_customer"),style:{width:"100%"},optionFilterProp:"title","show-search":""},{default:e(()=>[(d(!0),y(k,null,z(t.customers,o=>(d(),f(m,{key:o.xid,title:o.name,value:o.xid},{default:e(()=>[p(r(o.name)+" ",1),o.phone&&o.phone!=""?(d(),y("span",Ge,[He,p(" "+r(o.phone),1)])):P("",!0)]),_:2},1032,["title","value"]))),128))]),_:1},8,["value","placeholder"]),a(x,{onOnAddSuccess:t.customerAdded},null,8,["onOnAddSuccess"])])]),key:"0"}:void 0]),1032,["title"])]),_:1})]),_:1})]),_:1}),a(et,{layout:"vertical"},{default:e(()=>[t.innerWidth>=768?(d(),f(u,{key:0,gutter:[8,8],class:"mt-5",style:{margin:"10px 16px 0"}},{default:e(()=>[a(i,{xs:24,sm:24,md:24,lg:10,xl:10},{default:e(()=>[_("div",Qe,[_("div",Ye,[a(U,{class:"left-pos-top",style:{marginBottom:"10px"}},{default:e(()=>[_("div",Je,[a(u,{gutter:16},{default:e(()=>[a(i,{xs:24,sm:24,md:24,lg:24,xl:24},{default:e(()=>[_("span",Ze,[a(c,{value:t.formData.user_id,"onUpdate:value":l[2]||(l[2]=o=>t.formData.user_id=o),placeholder:n.$t("user.walk_in_customer"),style:{width:"100%"},optionFilterProp:"title","show-search":""},{default:e(()=>[(d(!0),y(k,null,z(t.customers,o=>(d(),f(m,{key:o.xid,title:o.name,value:o.xid},{default:e(()=>[p(r(o.name)+" ",1),o.phone&&o.phone!=""?(d(),y("span",$e,[ta,p(" "+r(o.phone),1)])):P("",!0)]),_:2},1032,["title","value"]))),128))]),_:1},8,["value","placeholder"]),a(x,{onOnAddSuccess:t.customerAdded},null,8,["onOnAddSuccess"])])]),_:1})]),_:1}),a(u,{class:"mt-20 mb-30"},{default:e(()=>[a(i,{xs:24,sm:24,md:24,lg:24,xl:24},{default:e(()=>[_("span",ea,[a(c,{value:null,searchValue:n.orderSearchTerm,"show-search":"","filter-option":!1,placeholder:n.$t("product.search_scan_product"),style:{width:"100%"},"not-found-content":n.productFetching?void 0:null,onSearch:l[3]||(l[3]=o=>{n.orderSearchTerm=o,t.fetchProducts(o)}),"option-label-prop":"label",onFocus:l[4]||(l[4]=o=>n.products=[]),onSelect:t.searchValueSelected,onInputKeyDown:t.inputValueChanged},rt({suffixIcon:e(()=>[a(W)]),default:e(()=>[(d(!0),y(k,null,z(n.products,o=>(d(),f(m,{key:o.xid,value:o.xid,label:o.name,product:o},{default:e(()=>[p(" => "+r(o.name),1)]),_:2},1032,["value","label","product"]))),128))]),_:2},[n.productFetching?{name:"notFoundContent",fn:e(()=>[a(A,{size:"small"})]),key:"0"}:void 0]),1032,["searchValue","placeholder","not-found-content","onSelect","onInputKeyDown"])])]),_:1})]),_:1})])]),_:1})]),_("div",aa,[a(U,{class:"left-pos-middle-table",style:{marginBottom:"10px"}},{default:e(()=>[_("div",na,[_("div",oa,[a(u,{class:"mt-20 mb-30"},{default:e(()=>[a(i,{xs:24,sm:24,md:24,lg:24},{default:e(()=>[a(O,{"row-key":o=>o.xid,dataSource:t.selectedProducts,columns:t.orderItemColumns,pagination:!1,size:"middle"},{bodyCell:e(({column:o,record:w})=>[o.dataIndex==="name"?(d(),y(k,{key:0},[p(r(w.name)+" ",1),la,_("small",null,[a(q,{code:""},{default:e(()=>[p(r(n.$t("product.avl_qty"))+" "+r(`${w.stock_quantity}${w.unit_short_name}`),1)]),_:2},1024)])],64)):P("",!0),o.dataIndex==="unit_quantity"?(d(),f(M,{key:1,id:"inputNumber",value:w.quantity,"onUpdate:value":T=>w.quantity=T,min:0,onChange:T=>t.quantityChanged(w)},null,8,["value","onUpdate:value","onChange"])):P("",!0),o.dataIndex==="subtotal"?(d(),y(k,{key:2},[p(r(t.formatAmountCurrency(w.subtotal)),1)],64)):P("",!0),o.dataIndex==="action"?(d(),y(k,{key:3},[a(D,{type:"primary",onClick:T=>t.editItem(w),style:{"margin-left":"4px","margin-top":"4px"}},{icon:e(()=>[a(V)]),_:2},1032,["onClick"]),a(D,{type:"primary",onClick:T=>t.showDeleteConfirm(w),style:{"margin-left":"4px","margin-top":"4px"}},{icon:e(()=>[a(j)]),_:2},1032,["onClick"])],64)):P("",!0)]),_:1},8,["row-key","dataSource","columns"])]),_:1})]),_:1})])])]),_:1})]),_("div",da,[a(U,null,{default:e(()=>[_("div",ia,[a(u,{gutter:[16,16]},{default:e(()=>[a(i,{xs:24,sm:24,md:8,lg:8,xl:8},{default:e(()=>[a(b,{label:n.$t("stock.order_tax")},{default:e(()=>[a(c,{value:t.formData.tax_id,"onUpdate:value":l[5]||(l[5]=o=>t.formData.tax_id=o),placeholder:n.$t("common.select_default_text",[n.$t("stock.order_tax")]),allowClear:!0,style:{width:"100%"},onChange:t.taxChanged},{default:e(()=>[(d(!0),y(k,null,z(t.taxes,o=>(d(),f(m,{key:o.xid,value:o.xid,tax:o},{default:e(()=>[p(r(o.name)+" ("+r(o.rate)+"%) ",1)]),_:2},1032,["value","tax"]))),128))]),_:1},8,["value","placeholder","onChange"])]),_:1},8,["label"])]),_:1}),a(i,{xs:24,sm:24,md:8,lg:8,xl:8},{default:e(()=>[a(b,{label:n.$t("stock.discount")},{default:e(()=>[a(K,{compact:""},{default:e(()=>[a(c,{value:t.formData.discount_type,"onUpdate:value":l[6]||(l[6]=o=>t.formData.discount_type=o),onChange:t.recalculateFinalTotal,style:{width:"30%"}},{default:e(()=>[a(m,{value:"percentage"},{default:e(()=>[p(" % ")]),_:1}),a(m,{value:"fixed"},{default:e(()=>[p(r(t.appSetting.currency.symbol),1)]),_:1})]),_:1},8,["value","onChange"]),a(M,{value:t.formData.discount_value,"onUpdate:value":l[7]||(l[7]=o=>t.formData.discount_value=o),placeholder:n.$t("common.placeholder_default_text",[n.$t("stock.discount")]),onChange:t.recalculateFinalTotal,min:"0",style:{width:"70%"}},null,8,["value","placeholder","onChange"])]),_:1})]),_:1},8,["label"])]),_:1}),a(i,{xs:24,sm:24,md:8,lg:8,xl:8},{default:e(()=>[a(b,{label:n.$t("stock.shipping")},{default:e(()=>[a(M,{value:t.formData.shipping,"onUpdate:value":l[8]||(l[8]=o=>t.formData.shipping=o),placeholder:n.$t("common.placeholder_default_text",[n.$t("stock.shipping")]),onChange:t.recalculateFinalTotal,min:"0",style:{width:"100%"}},{addonBefore:e(()=>[p(r(t.appSetting.currency.symbol),1)]),_:1},8,["value","placeholder","onChange"])]),_:1},8,["label"])]),_:1})]),_:1})])]),_:1}),_("div",sa,[a(u,{gutter:16},{default:e(()=>[a(i,{xs:24,sm:24,md:10,lg:10,xl:10},{default:e(()=>[a(u,{gutter:16,style:{background:"#dbdbdb",padding:"5px"}},{default:e(()=>[a(i,{xs:24,sm:24,md:12,lg:12,xl:12},{default:e(()=>[_("span",ra,r(n.$t("stock.grand_total"))+" : ",1)]),_:1}),a(i,{xs:24,sm:24,md:12,lg:12,xl:12},{default:e(()=>[_("span",ua,r(t.formatAmountCurrency(t.formData.subtotal)),1)]),_:1})]),_:1})]),_:1}),a(i,{xs:24,sm:24,md:6,lg:6,xl:6,class:"mt-10"},{default:e(()=>[_("small",null,r(n.$t("product.tax"))+" : "+r(t.formatAmountCurrency(t.formData.tax_amount))+" | "+r(n.$t("product.discount"))+" : "+r(t.formatAmountCurrency(t.formData.discount)),1)]),_:1}),a(i,{xs:24,sm:24,md:8,lg:8,xl:8},{default:e(()=>[a(h,null,{default:e(()=>[a(D,{type:"primary",onClick:t.payNow,disabled:t.formData.subtotal<=0||t.formData.user_id==null||t.formData.user_id==""||!t.formData.user_id},{default:e(()=>[p(r(n.$t("stock.pay_now")),1)]),_:1},8,["onClick","disabled"]),a(D,{onClick:t.resetPos},{default:e(()=>[p(r(n.$t("stock.reset")),1)]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1})])])])]),_:1}),a(i,{class:"right-pos-sidebar",xs:24,sm:24,md:24,lg:14,xl:14},{default:e(()=>[a($,{options:{wheelSpeed:1,swipeEasing:!0,suppressScrollX:!0}},{default:e(()=>[t.postLayout==1?(d(),f(X,{key:0,brands:t.brands,categories:t.categories,formData:t.formData,onChanged:t.reFetchProducts},null,8,["brands","categories","formData","onChanged"])):(d(),f(Q,{key:1,brands:t.brands,categories:t.categories,formData:t.formData,onChanged:t.reFetchProducts},null,8,["brands","categories","formData","onChanged"])),t.productLists.length>0?(d(),f(u,{key:2,gutter:30},{default:e(()=>[(d(!0),y(k,null,z(t.productLists,o=>(d(),f(i,{key:o.xid,xxl:6,lg:6,md:12,xs:24,onClick:w=>t.selectSaleProduct(o)},{default:e(()=>[a(G,{product:o},null,8,["product"])]),_:2},1032,["onClick"]))),128))]),_:1})):(d(),f(u,{key:3},{default:e(()=>[a(i,{span:24},{default:e(()=>[a(Z,{title:n.$t("stock.no_product_found"),style:{marginTop:"20%"}},null,8,["title"])]),_:1})]),_:1}))]),_:1})]),_:1})]),_:1})):(d(),f(u,{key:1,gutter:[8,8],class:"mt-5",style:{margin:"10px 16px 0"}},{default:e(()=>[a(i,{span:24},{default:e(()=>[_("span",ma,[a(c,{value:null,searchValue:n.orderSearchTerm,"show-search":"","filter-option":!1,placeholder:n.$t("product.search_scan_product"),style:{width:"90%"},"not-found-content":n.productFetching?void 0:null,onSearch:l[9]||(l[9]=o=>{n.orderSearchTerm=o,t.fetchProducts(o)}),"option-label-prop":"label",onFocus:l[10]||(l[10]=o=>n.products=[]),onSelect:t.searchValueSelected,onInputKeyDown:t.inputValueChanged},rt({suffixIcon:e(()=>[a(W)]),default:e(()=>[(d(!0),y(k,null,z(n.products,o=>(d(),f(m,{key:o.xid,value:o.xid,label:o.name,product:o},{default:e(()=>[p(" => "+r(o.name),1)]),_:2},1032,["value","label","product"]))),128))]),_:2},[n.productFetching?{name:"notFoundContent",fn:e(()=>[a(A,{size:"small"})]),key:"0"}:void 0]),1032,["searchValue","placeholder","not-found-content","onSelect","onInputKeyDown"]),t.showMobileCart?(d(),f(D,{key:0,class:"ml-5",style:{width:"100%"},onClick:l[11]||(l[11]=()=>t.showMobileCart=!1),type:"primary"},{icon:e(()=>[a(tt)]),_:1})):(d(),f(D,{key:1,class:"ml-5",style:{width:"100%"},onClick:l[12]||(l[12]=()=>t.showMobileCart=!0),type:"primary"},{icon:e(()=>[a(Y)]),_:1}))])]),_:1}),a(i,{span:24},{default:e(()=>[_("div",ca,[t.showMobileCart?P("",!0):(d(),y("div",pa,[t.postLayout==1?(d(),f(X,{key:0,brands:t.brands,categories:t.categories,formData:t.formData,onChanged:t.reFetchProducts},null,8,["brands","categories","formData","onChanged"])):(d(),f(Q,{key:1,brands:t.brands,categories:t.categories,formData:t.formData,onChanged:t.reFetchProducts},null,8,["brands","categories","formData","onChanged"]))])),t.showMobileCart?P("",!0):(d(),y("div",_a,[t.productLists.length>0?(d(),f(u,{key:0,gutter:30,class:"pos1-products-lists"},{default:e(()=>[(d(!0),y(k,null,z(t.productLists,o=>(d(),f(i,{key:o.xid,xxl:8,lg:8,md:8,sm:12,xs:12,onClick:w=>t.selectSaleProduct(o)},{default:e(()=>[a(G,{product:o},null,8,["product"])]),_:2},1032,["onClick"]))),128))]),_:1})):P("",!0)])),t.showMobileCart?(d(),y("div",fa,[a(u,{class:"mt-5 mb-5"},{default:e(()=>[a(i,{xs:24,sm:24,md:24,lg:24},{default:e(()=>[a(O,{"row-key":o=>o.xid,dataSource:t.selectedProducts,columns:t.orderItemColumns,pagination:!1,size:"middle"},{bodyCell:e(({column:o,record:w})=>[o.dataIndex==="name"?(d(),y(k,{key:0},[p(r(w.name)+" ",1),ga,_("small",null,[a(q,{code:""},{default:e(()=>[p(r(n.$t("product.avl_qty"))+" "+r(`${w.stock_quantity}${w.unit_short_name}`),1)]),_:2},1024)])],64)):P("",!0),o.dataIndex==="unit_quantity"?(d(),f(M,{key:1,id:"inputNumber",value:w.quantity,"onUpdate:value":T=>w.quantity=T,min:0,onChange:T=>t.quantityChanged(w)},null,8,["value","onUpdate:value","onChange"])):P("",!0),o.dataIndex==="subtotal"?(d(),y(k,{key:2},[p(r(t.formatAmountCurrency(w.subtotal)),1)],64)):P("",!0),o.dataIndex==="action"?(d(),y(k,{key:3},[a(D,{type:"primary",onClick:T=>t.editItem(w),style:{"margin-left":"4px","margin-top":"4px"}},{icon:e(()=>[a(V)]),_:2},1032,["onClick"]),a(D,{type:"primary",onClick:T=>t.showDeleteConfirm(w),style:{"margin-left":"4px","margin-top":"4px"}},{icon:e(()=>[a(j)]),_:2},1032,["onClick"])],64)):P("",!0)]),_:1},8,["row-key","dataSource","columns"])]),_:1})]),_:1})])):P("",!0),t.showMobileCart?(d(),y("div",ya,[a(U,null,{default:e(()=>[_("div",ha,[a(u,{gutter:[16]},{default:e(()=>[a(i,{xs:24,sm:24,md:8,lg:8},{default:e(()=>[a(b,{label:n.$t("stock.order_tax")},{default:e(()=>[a(c,{value:t.formData.tax_id,"onUpdate:value":l[13]||(l[13]=o=>t.formData.tax_id=o),placeholder:n.$t("common.select_default_text",[n.$t("stock.order_tax")]),allowClear:!0,style:{width:"100%"},onChange:t.taxChanged},{default:e(()=>[(d(!0),y(k,null,z(t.taxes,o=>(d(),f(m,{key:o.xid,value:o.xid,tax:o},{default:e(()=>[p(r(o.name)+" ("+r(o.rate)+"%) ",1)]),_:2},1032,["value","tax"]))),128))]),_:1},8,["value","placeholder","onChange"])]),_:1},8,["label"])]),_:1}),a(i,{xs:24,sm:24,md:8,lg:8},{default:e(()=>[a(b,{label:n.$t("stock.discount")},{default:e(()=>[a(K,{compact:""},{default:e(()=>[a(c,{value:t.formData.discount_type,"onUpdate:value":l[14]||(l[14]=o=>t.formData.discount_type=o),onChange:t.recalculateFinalTotal,style:{width:"30%"}},{default:e(()=>[a(m,{value:"percentage"},{default:e(()=>[p(" % ")]),_:1}),a(m,{value:"fixed"},{default:e(()=>[p(r(t.appSetting.currency.symbol),1)]),_:1})]),_:1},8,["value","onChange"]),a(M,{value:t.formData.discount_value,"onUpdate:value":l[15]||(l[15]=o=>t.formData.discount_value=o),placeholder:n.$t("common.placeholder_default_text",[n.$t("stock.discount")]),onChange:t.recalculateFinalTotal,min:"0",style:{width:"70%"}},null,8,["value","placeholder","onChange"])]),_:1})]),_:1},8,["label"])]),_:1}),a(i,{xs:24,sm:24,md:8,lg:8},{default:e(()=>[a(b,{label:n.$t("stock.shipping")},{default:e(()=>[a(M,{value:t.formData.shipping,"onUpdate:value":l[16]||(l[16]=o=>t.formData.shipping=o),placeholder:n.$t("common.placeholder_default_text",[n.$t("stock.shipping")]),onChange:t.recalculateFinalTotal,min:"0",style:{width:"100%"}},{addonBefore:e(()=>[p(r(t.appSetting.currency.symbol),1)]),_:1},8,["value","placeholder","onChange"])]),_:1},8,["label"])]),_:1})]),_:1})])]),_:1})])):P("",!0)])]),_:1})]),_:1}))]),_:1}),t.innerWidth<=768?(d(),y("div",va,[a(u,{gutter:16},{default:e(()=>[a(i,{span:10},{default:e(()=>[a(u,{gutter:16,style:{padding:"10px"}},{default:e(()=>[a(i,{span:24},{default:e(()=>[_("span",xa,r(n.$t("common.total"))+" : "+r(t.formatAmountCurrency(t.formData.subtotal)),1)]),_:1})]),_:1})]),_:1}),a(i,{span:14},{default:e(()=>[a(h,{style:{marginTop:"5px"}},{default:e(()=>[t.showMobileCart?(d(),f(D,{key:0,onClick:l[17]||(l[17]=()=>t.showMobileCart=!1),type:"primary"},{icon:e(()=>[a(tt)]),_:1})):(d(),f(D,{key:1,onClick:l[18]||(l[18]=()=>t.showMobileCart=!0),type:"primary"},{icon:e(()=>[a(Y)]),_:1})),a(D,{type:"primary",onClick:t.payNow,disabled:t.formData.subtotal<=0||t.formData.user_id==null||t.formData.user_id==""||!t.formData.user_id},{default:e(()=>[p(r(n.$t("stock.pay_now")),1)]),_:1},8,["onClick","disabled"]),a(D,{onClick:t.resetPos},{default:e(()=>[p(r(n.$t("stock.reset")),1)]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1})])):P("",!0),a(st,{open:t.addEditVisible,closable:!1,centered:!0,title:t.addEditPageTitle,onOk:t.onAddEditSubmit},{footer:e(()=>[a(D,{key:"submit",type:"primary",loading:t.addEditFormSubmitting,onClick:t.onAddEditSubmit},{icon:e(()=>[a(at)]),default:e(()=>[p(" "+r(n.$t("common.update")),1)]),_:1},8,["loading","onClick"]),a(D,{key:"back",onClick:t.onAddEditClose},{default:e(()=>[p(r(n.$t("common.cancel")),1)]),_:1},8,["onClick"])]),default:e(()=>[a(et,{layout:"vertical"},{default:e(()=>[a(u,{gutter:16},{default:e(()=>[a(i,{xs:24,sm:24,md:24,lg:24},{default:e(()=>[a(b,{label:n.$t("product.unit_price"),name:"unit_price",help:t.addEditRules.unit_price?t.addEditRules.unit_price.message:null,validateStatus:t.addEditRules.unit_price?"error":null},{default:e(()=>[a(M,{value:t.addEditFormData.unit_price,"onUpdate:value":l[19]||(l[19]=o=>t.addEditFormData.unit_price=o),placeholder:n.$t("common.placeholder_default_text",[n.$t("product.unit_price")]),min:"0",style:{width:"100%"}},{addonBefore:e(()=>[p(r(t.appSetting.currency.symbol),1)]),_:1},8,["value","placeholder"])]),_:1},8,["label","help","validateStatus"])]),_:1})]),_:1}),a(u,{gutter:16},{default:e(()=>[a(i,{xs:24,sm:24,md:24,lg:24},{default:e(()=>[a(b,{label:n.$t("product.discount"),name:"discount_rate",help:t.addEditRules.discount_rate?t.addEditRules.discount_rate.message:null,validateStatus:t.addEditRules.discount_rate?"error":null},{default:e(()=>[a(M,{value:t.addEditFormData.discount_rate,"onUpdate:value":l[20]||(l[20]=o=>t.addEditFormData.discount_rate=o),placeholder:n.$t("common.placeholder_default_text",[n.$t("product.discount")]),min:"0",style:{width:"100%"}},{addonAfter:e(()=>[p("%")]),_:1},8,["value","placeholder"])]),_:1},8,["label","help","validateStatus"])]),_:1})]),_:1}),a(u,{gutter:16},{default:e(()=>[a(i,{xs:24,sm:24,md:24,lg:24},{default:e(()=>[a(b,{label:n.$t("product.tax"),name:"tax_id",help:t.addEditRules.tax_id?t.addEditRules.tax_id.message:null,validateStatus:t.addEditRules.tax_id?"error":null},{default:e(()=>[a(c,{value:t.addEditFormData.tax_id,"onUpdate:value":l[21]||(l[21]=o=>t.addEditFormData.tax_id=o),placeholder:n.$t("common.select_default_text",[n.$t("product.tax")]),allowClear:!0},{default:e(()=>[(d(!0),y(k,null,z(t.taxes,o=>(d(),f(m,{key:o.xid,value:o.xid},{default:e(()=>[p(r(o.name)+" ("+r(o.rate)+"%) ",1)]),_:2},1032,["value"]))),128))]),_:1},8,["value","placeholder"])]),_:1},8,["label","help","validateStatus"])]),_:1})]),_:1}),a(u,{gutter:16},{default:e(()=>[a(i,{xs:24,sm:24,md:24,lg:24},{default:e(()=>[a(b,{label:n.$t("product.tax_type"),name:"tax_type",help:t.addEditRules.tax_type?t.addEditRules.tax_type.message:null,validateStatus:t.addEditRules.tax_type?"error":null},{default:e(()=>[a(c,{value:t.addEditFormData.tax_type,"onUpdate:value":l[22]||(l[22]=o=>t.addEditFormData.tax_type=o),placeholder:n.$t("common.select_default_text",[n.$t("product.tax_type")]),allowClear:!0},{default:e(()=>[(d(!0),y(k,null,z(t.taxTypes,o=>(d(),f(m,{key:o.key,value:o.key},{default:e(()=>[p(r(o.value),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value","placeholder"])]),_:1},8,["label","help","validateStatus"])]),_:1})]),_:1})]),_:1})]),_:1},8,["open","title","onOk"]),a(nt,{visible:t.payNowVisible,onClosed:t.payNowClosed,onSuccess:t.payNowSuccess,data:t.formData,selectedProducts:t.selectedProducts},null,8,["visible","onClosed","onSuccess","data","selectedProducts"]),a(ot,{visible:t.printInvoiceModalVisible,order:t.printInvoiceOrder,onClosed:l[23]||(l[23]=o=>t.printInvoiceModalVisible=!1)},null,8,["visible","order"])],64)}const Wa=J(Ke,[["render",ba]]);export{Wa as default};
