import{_ as z,d as K,r as $,o as l,c as k,a,w as t,f as c,z as B,E as L,a6 as M,h as q,t as y,l as w,i as m,k as x,G as V,M as F,q as N,aB as R,aC as D,ay as E,x as G,cG as U,bo as j}from"./app-DvNATx7Y.js";import{L as A}from"./LeftSidebarMenu-De8B8-Qv.js";import{P as I}from"./ProductCard-C3ne6Xzl.js";import"./MailOutlined-Doj8_1DC.js";import"./AppstoreOutlined-D_ZfANL-.js";import"./SettingOutlined-Cyv_dmap.js";import"./cart-DOziXm45.js";import"./filter-BEo08sjD.js";import"./ShoppingCartOutlined-BY_eTBwN.js";const O=K({components:{LeftSidebarMenu:A,ProductCard:I},setup(){const e=c([]),_=c([]),v=c([]),S=B(),i=c({}),h=c([]),b=c(1),n=c(1),p=c(20);L(()=>{const o=S.params;g(o)});const g=o=>{if(o&&o.slug){const s=o.slug,r=s[s.length-1];axiosFront.post(`/front/category-by-slug/${r}`).then(u=>{i.value=u.data.category,f(i.value.id),h.value=[i.value.id]})}else h.value=[],i.value={},f()},f=()=>{let o="products?fields=id,xid,name,slug,image,image_url,description,category_id,x_category_id,category{id,xid,name,slug},brand_id,x_brand_id,brand{id,xid,name,slug},unit_id,x_unit_id,unit{id,xid,name,short_name},description,details{stock_quantitiy_alert,opening_stock,opening_stock_date,wholesale_price,wholesale_quantity,mrp,purchase_price,sales_price,tax_id,x_tax_id,purchase_tax_type,sales_tax_type,current_stock,warehouse_id,x_warehouse_id,status},details:tax{id,xid,name,rate}";if(i.value&&i.value.id){const u=i.value.id;o+=`&filters=category_id eq ${u}`}const s=p.value,r=(n.value-1)*s;o+=`&offset=${r}&limit=${s}`,axiosFront.get(o).then(u=>{b.value=u.meta.paging.total,v.value=u.data})},C=(o,s)=>{n.value=o,p.value=s,f()};return M(S,(o,s)=>{g(o.params)}),{catSelectedKeys:h,category:i,categoriesSelectedKeys:e,categoriesOpenKeys:_,products:v,currentPage:n,pageSize:p,totalRecords:b,paginationClicked:C}}}),T={class:"bg-white"},H={key:0},J={key:1};function Q(e,_,v,S,i,h){const b=$("LeftSidebarMenu"),n=N,p=$("router-link"),g=R,f=D,C=E,o=G,s=$("ProductCard"),r=q,u=U,P=j;return l(),k("div",T,[a(r,{type:"flex",justify:"center"},{default:t(()=>[a(n,{span:20},{default:t(()=>[a(r,{gutter:[30,30],class:"mt-30"},{default:t(()=>[a(n,{xs:24,sm:24,md:24,lg:6,xl:6,style:{"padding-left":"0px"}},{default:t(()=>[a(b,{catSelectedKeys:e.catSelectedKeys,class:"categories-page-lefbar"},null,8,["catSelectedKeys"])]),_:1}),a(n,{xs:24,sm:24,md:24,lg:18,xl:18},{default:t(()=>[a(r,{class:"mt-30 mb-30 category-page-container"},{default:t(()=>[a(n,{span:24},{default:t(()=>[a(C,{style:{"padding-left":"0px"}},{title:t(()=>[e.category&&e.category.name?(l(),k("span",H,y(e.category.name),1)):(l(),k("span",J,y(e.$t("front_setting.all_categories")),1))]),breadcrumb:t(()=>[a(f,null,{default:t(()=>[a(g,null,{default:t(()=>[a(p,{to:{name:"front.homepage"}},{default:t(()=>[w(y(e.$t("front.home")),1)]),_:1},8,["to"])]),_:1}),a(g,null,{default:t(()=>[a(p,{to:{name:"front.categories"}},{default:t(()=>[w(y(e.$t("menu.categories")),1)]),_:1},8,["to"])]),_:1}),e.category&&e.category.name?(l(),m(g,{key:0},{default:t(()=>[w(y(e.category.name),1)]),_:1})):x("",!0)]),_:1})]),_:1}),a(o,{class:"mt-0"}),e.products&&e.products.length>0?(l(),m(r,{key:0,gutter:[30,30]},{default:t(()=>[(l(!0),k(V,null,F(e.products,d=>(l(),m(n,{xs:24,sm:12,md:8,lg:6,xl:6,key:d.id},{default:t(()=>[(l(),m(s,{product:d,key:d.id},null,8,["product"]))]),_:2},1024))),128))]),_:1})):(l(),m(r,{key:1,gutter:30,class:"mt-30 mb-30"},{default:t(()=>[a(n,{span:24},{default:t(()=>[a(u,{description:e.$t("front_setting.no_results")},null,8,["description"])]),_:1})]),_:1})),e.products&&e.products.length>0?(l(),m(r,{key:2,gutter:30,class:"mt-30 mb-30"},{default:t(()=>[a(n,{span:24},{default:t(()=>[a(P,{current:e.currentPage,"onUpdate:current":_[0]||(_[0]=d=>e.currentPage=d),pageSize:e.pageSize,"onUpdate:pageSize":_[1]||(_[1]=d=>e.pageSize=d),total:e.totalRecords,onChange:e.paginationClicked,showSizeChanger:!1},null,8,["current","pageSize","total","onChange"])]),_:1})]),_:1})):x("",!0)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})])}const se=z(O,[["render",Q]]);export{se as default};
