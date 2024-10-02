import{Y as D,_ as S,d as C,R as k,aT as E,b as T,f as U,V as w,a6 as O,r as h,o as I,i as B,w as t,a,l as $,t as v,j as q,aQ as A,n as V,q as F,h as N,I as R,F as M,B as j,X as H}from"./app-DvNATx7Y.js";import{a as K}from"./apiAdmin-DqdlX2Lq.js";import{U as L}from"./Upload-B1S3qWAF.js";import{S as P}from"./SaveOutlined-CMUQh6R8.js";const Z=()=>{const e="categories",{t:l}=D(),p=["parent_id"],g={name:"",slug:"",image:void 0,image_url:void 0,parent_id:null},i=[{title:l("category.name"),dataIndex:"name"},{title:l("category.logo"),dataIndex:"image_url"},{title:l("common.action"),dataIndex:"action"}];return{hashableColumns:p,addEditUrl:e,initData:g,columns:i}},Q=C({props:["formData","data","visible","url","addEditType"],components:{PlusOutlined:k,LoadingOutlined:E,SaveOutlined:P,Upload:L},setup(e,{emit:l}){const{addEditRequestAdmin:p,loading:g,rules:i}=K(),{getRecursiveCategories:b,slugify:c}=T(),{t:s}=D(),u=U([]),d=(o=null)=>{var r="categories?fields=id,xid,name,parent_id,x_parent_id&limit=10000";o!=null&&(r+=`&filters=id ne ${o}&hashable=${o}`),axiosAdmin.get(r).then(m=>{u.value=b(m,o)})},f=w(()=>e.addEditType=="add"?s("category.add"):s("category.edit")),_=()=>{var o={parent_id:null,...e.formData};const r=e.addEditType=="add"?s("category.created"):s("category.updated");p({url:e.url,data:o,successMessage:r,success:m=>{d(),l("addEditSuccess",m.xid)}})},y=()=>{i.value={},l("closed")};return O(e,(o,r)=>{o.addEditType=="add"?d():d(o.data.xid)}),{loading:g,rules:i,onClose:y,onSubmit:_,pageTitle:f,allCategories:u,slugify:c}}}),X={class:"small-text-message"};function Y(e,l,p,g,i,b){const c=A,s=V,u=F,d=N,f=R,_=h("Upload"),y=M,o=h("SaveOutlined"),r=j,m=H;return I(),B(m,{open:e.visible,closable:!1,centered:!0,title:e.pageTitle,onOk:e.onSubmit},{footer:t(()=>[a(r,{key:"submit",type:"primary",loading:e.loading,onClick:e.onSubmit},{icon:t(()=>[a(o)]),default:t(()=>[$(" "+v(e.addEditType=="add"?e.$t("common.create"):e.$t("common.update")),1)]),_:1},8,["loading","onClick"]),a(r,{key:"back",onClick:e.onClose},{default:t(()=>[$(v(e.$t("common.cancel")),1)]),_:1},8,["onClick"])]),default:t(()=>[a(y,{layout:"vertical"},{default:t(()=>[a(d,{gutter:16},{default:t(()=>[a(u,{xs:24,sm:24,md:24,lg:24},{default:t(()=>[a(s,{label:e.$t("category.parent_category"),name:"parent_id",help:e.rules.parent_id?e.rules.parent_id.message:null,validateStatus:e.rules.parent_id?"error":null},{default:t(()=>[a(c,{value:e.formData.parent_id,"onUpdate:value":l[0]||(l[0]=n=>e.formData.parent_id=n),"show-search":"",style:{width:"100%"},"dropdown-style":{maxHeight:"400px",overflow:"auto"},placeholder:e.$t("common.select_default_text",[e.$t("category.category")]),"tree-data":e.allCategories,"allow-clear":"","tree-default-expand-all":""},null,8,["value","placeholder","tree-data"]),q("small",X,v(e.$t("messages.leave_blank_to_create_parent_category")),1)]),_:1},8,["label","help","validateStatus"])]),_:1})]),_:1}),a(d,{gutter:16},{default:t(()=>[a(u,{xs:24,sm:24,md:24,lg:24},{default:t(()=>[a(s,{label:e.$t("category.name"),name:"name",help:e.rules.name?e.rules.name.message:null,validateStatus:e.rules.name?"error":null,class:"required"},{default:t(()=>[a(f,{value:e.formData.name,"onUpdate:value":l[1]||(l[1]=n=>e.formData.name=n),placeholder:e.$t("common.placeholder_default_text",[e.$t("category.name")]),onKeyup:l[2]||(l[2]=n=>e.formData.slug=e.slugify(n.target.value))},null,8,["value","placeholder"])]),_:1},8,["label","help","validateStatus"])]),_:1})]),_:1}),a(d,{gutter:16},{default:t(()=>[a(u,{xs:24,sm:24,md:24,lg:24},{default:t(()=>[a(s,{label:e.$t("category.slug"),name:"slug",help:e.rules.slug?e.rules.slug.message:null,validateStatus:e.rules.slug?"error":null,class:"required"},{default:t(()=>[a(f,{value:e.formData.slug,"onUpdate:value":l[3]||(l[3]=n=>e.formData.slug=n),placeholder:e.$t("common.placeholder_default_text",[e.$t("category.slug")])},null,8,["value","placeholder"])]),_:1},8,["label","help","validateStatus"])]),_:1})]),_:1}),a(d,{gutter:16},{default:t(()=>[a(u,{xs:24,sm:24,md:24,lg:24},{default:t(()=>[a(s,{label:e.$t("category.logo"),name:"image",help:e.rules.image?e.rules.image.message:null,validateStatus:e.rules.image?"error":null},{default:t(()=>[a(_,{formData:e.formData,folder:"category",onOnFileUploaded:l[4]||(l[4]=n=>{e.formData.image=n.file,e.formData.image_url=n.file_url})},null,8,["formData"])]),_:1},8,["label","help","validateStatus"])]),_:1})]),_:1})]),_:1})]),_:1},8,["open","title","onOk"])}const x=S(Q,[["render",Y]]);export{x as A,Z as f};
