import{Y as w,_ as M,d as U,R as I,aT as V,aU as A,f as E,V as N,a6 as P,r as $,o as f,i as g,w as a,a as t,l as m,t as _,k as h,c as F,M as G,G as L,ak as R,I as W,n as H,q as X,h as Y,aG as j,aD as z,a_ as J,B as K,F as Q,X as Z}from"./app-yQu0_bFn.js";import{a as ee}from"./apiAdmin-DF0-_dJB.js";import{F as ae}from"./FormItemHeading-C_t8lVJl.js";import{s as S}from"./some-DiIfo8Hk.js";import{s as te}from"./sumBy-BOA1b6R8.js";import{f as le}from"./filter-BXt71jrw.js";import{S as ne}from"./SaveOutlined-Bu-bD-Wg.js";const ye=()=>{const e="taxes?fields=id,xid,name,rate,tax_type,x_parent_id,parent_id,multipleTax{id,xid,name,rate,tax_type,x_parent_id,parent_id}&filters=parent_id eq null",n="taxes",{t:u}=w(),b=["parent_id"],y={name:"",rate:"",tax_type:"single"},c=[{title:u("tax.name"),dataIndex:"name",sorter:!0},{title:u("tax.tax_type"),dataIndex:"tax_type",sorter:!0},{title:u("tax.rate"),dataIndex:"rate",sorter:!0},{title:u("common.action"),dataIndex:"action"}],l=[{key:"name",value:u("tax.name")}];return{url:e,addEditUrl:n,initData:y,columns:c,filterableColumns:l,hashableColumns:b}},oe=U({props:["formData","data","visible","url","addEditType","pageTitle","successMessage"],components:{PlusOutlined:I,LoadingOutlined:V,SaveOutlined:ne,MinusSquareOutlined:A,FormItemHeading:ae},setup(e,{emit:n}){const{addEditRequestAdmin:u,loading:b,rules:y}=ee(),c=E([]),l=E([{tax_name:"",rate:"",id:void 0}]),i=()=>{var r=le(l.value,function(s){return s.tax_name!=""&&s.rate&&s.rate>0}),p={...e.formData,multiple_taxes:r,removed_fields:c.value};u({url:e.url,data:p,successMessage:e.successMessage,success:s=>{n("addEditSuccess",s.xid)}})},d=N(()=>l.value.length==0?!1:S(l.value,{tax_name:""})||S(l.value,{tax_name:null})||S(l.value,{rate:""})||S(l.value,{rate:null})),v=()=>{l.value.push({tax_name:"",rate:"",id:""})},k=r=>{let p=l.value.indexOf(r);p!==-1&&l.value.splice(p,1),r.id!=""&&c.value.push(r.id)},D=()=>{y.value={},n("closed")};return P(()=>e.visible,(r,p)=>{e.visible&&(l.value=[],e.addEditType=="add"?l.value.push({tax_name:"",rate:"",id:""}):R(e.data.multiple_tax,s=>{l.value.push({tax_name:s.name,rate:s.rate,id:s.xid})}))}),{loading:b,rules:y,onClose:D,onSubmit:i,removeFormField:k,formFields:l,addFormField:v,addFormButtonStatus:d,sumBy:te,drawerWidth:window.innerWidth<=991?"90%":"45%"}}}),se={key:2,class:"ant-form-item-explain-error",style:{marginTop:"-15px"}};function de(e,n,u,b,y,c){const l=W,i=H,d=X,v=Y,k=j,D=z,r=J,p=$("form-item-heading"),s=$("MinusSquareOutlined"),O=$("PlusOutlined"),C=K,T=Q,q=$("SaveOutlined"),B=Z;return f(),g(B,{open:e.visible,closable:!1,centered:!0,title:e.pageTitle,onOk:e.onSubmit},{footer:a(()=>[t(C,{key:"submit",type:"primary",loading:e.loading,onClick:e.onSubmit},{icon:a(()=>[t(q)]),default:a(()=>[m(" "+_(e.addEditType=="add"?e.$t("common.create"):e.$t("common.update")),1)]),_:1},8,["loading","onClick"]),t(C,{key:"back",onClick:e.onClose},{default:a(()=>[m(_(e.$t("common.cancel")),1)]),_:1},8,["onClick"])]),default:a(()=>[t(T,{layout:"vertical"},{default:a(()=>[t(v,{gutter:16},{default:a(()=>[t(d,{xs:24,sm:24,md:24,lg:24},{default:a(()=>[t(i,{label:e.$t("tax.name"),name:"name",help:e.rules.name?e.rules.name.message:null,validateStatus:e.rules.name?"error":null,class:"required"},{default:a(()=>[t(l,{value:e.formData.name,"onUpdate:value":n[0]||(n[0]=o=>e.formData.name=o),placeholder:e.$t("common.placeholder_default_text",[e.$t("tax.name")])},null,8,["value","placeholder"])]),_:1},8,["label","help","validateStatus"])]),_:1})]),_:1}),t(v,{gutter:16},{default:a(()=>[t(d,{xs:24,sm:24,md:12,lg:12},{default:a(()=>[t(i,{label:e.$t("tax.tax_type"),name:"tax_type",help:e.rules.tax_type?e.rules.tax_type.message:null,validateStatus:e.rules.tax_type?"error":null,class:"required"},{default:a(()=>[t(D,{value:e.formData.tax_type,"onUpdate:value":n[1]||(n[1]=o=>e.formData.tax_type=o),placeholder:e.$t("common.select_default_text",[e.$t("tax.tax_type")]),onChange:n[2]||(n[2]=o=>{e.formData.rate=o=="multiple"?e.sumBy(e.formFields,"rate"):void 0})},{default:a(()=>[t(k,{value:"single"},{default:a(()=>[m(_(e.$t("tax.single")),1)]),_:1}),t(k,{value:"multiple"},{default:a(()=>[m(_(e.$t("tax.multiple")),1)]),_:1})]),_:1},8,["value","placeholder"])]),_:1},8,["label","help","validateStatus"])]),_:1}),t(d,{xs:24,sm:24,md:12,lg:12},{default:a(()=>[t(i,{label:e.$t("tax.rate"),name:"rate",help:e.rules.rate?e.rules.rate.message:null,validateStatus:e.rules.rate?"error":null,class:"required"},{default:a(()=>[t(r,{value:e.formData.rate,"onUpdate:value":n[3]||(n[3]=o=>e.formData.rate=o),placeholder:e.$t("common.placeholder_default_text",[e.$t("tax.rate")]),min:"0",style:{width:"100%"},disabled:e.formData.tax_type=="multiple"},{addonAfter:a(()=>[m("%")]),_:1},8,["value","placeholder","disabled"])]),_:1},8,["label","help","validateStatus"])]),_:1})]),_:1}),e.formData.tax_type=="multiple"?(f(),g(p,{key:0},{default:a(()=>[m(_(e.$t("tax.multiple_tax")),1)]),_:1})):h("",!0),e.formData.tax_type=="multiple"?(f(!0),F(L,{key:1},G(e.formFields,(o,re)=>(f(),g(v,{gutter:16,key:o.id,style:{display:"flex","align-items":"center"}},{default:a(()=>[t(d,{xs:24,sm:24,md:e.addEditType=="add"?11:12,lg:e.addEditType=="add"?11:12},{default:a(()=>[t(i,{name:"tax_name",help:e.rules.tax_name?e.rules.tax_name.message:null,validateStatus:e.rules.tax_name?"error":null,class:"required"},{default:a(()=>[t(l,{value:o.tax_name,"onUpdate:value":x=>o.tax_name=x,placeholder:e.$t("common.placeholder_default_text",[e.$t("tax.name")]),min:"0",style:{width:"100%"}},null,8,["value","onUpdate:value","placeholder"])]),_:2},1032,["help","validateStatus"])]),_:2},1032,["md","lg"]),t(d,{xs:24,sm:24,md:e.addEditType=="add"?11:12,lg:e.addEditType=="add"?11:12},{default:a(()=>[t(i,{name:"rate",class:"required"},{default:a(()=>[t(r,{value:o.rate,"onUpdate:value":x=>o.rate=x,placeholder:e.$t("common.placeholder_default_text",[e.$t("tax.rate")]),style:{width:"100%"},onChange:n[4]||(n[4]=()=>{e.formData.rate=e.sumBy(e.formFields,"rate")})},{addonAfter:a(()=>[m("%")]),_:2},1032,["value","onUpdate:value","placeholder"])]),_:2},1024)]),_:2},1032,["md","lg"]),e.addEditType=="add"?(f(),g(d,{key:0,span:2,style:{"margin-bottom":"20px"}},{default:a(()=>[t(s,{onClick:()=>{e.removeFormField(o),e.formData.rate=e.sumBy(e.formFields,"rate")}},null,8,["onClick"])]),_:2},1024)):h("",!0)]),_:2},1024))),128)):h("",!0),e.rules&&e.rules.multiple_taxes?(f(),F("p",se,_(e.rules.multiple_taxes.message),1)):h("",!0),e.formData.tax_type=="multiple"?(f(),g(v,{key:3,gutter:16},{default:a(()=>[t(d,{xs:24,sm:24,md:4,lg:4},{default:a(()=>[t(i,null,{default:a(()=>[t(C,{type:"primary",onClick:e.addFormField,disabled:e.addFormButtonStatus},{default:a(()=>[t(O),m(" "+_(e.$t("tax.add")),1)]),_:1},8,["onClick","disabled"])]),_:1})]),_:1})]),_:1})):h("",!0)]),_:1})]),_:1},8,["open","title","onOk"])}const ce=M(oe,[["render",de]]);export{ce as A,ye as f};
