import{_ as k,d as $,aT as I,R as U,f as g,Y as C,r as h,o as f,i as y,w as t,c as w,j as F,t as c,b8 as x,bz as N,aw as T,az as V,aA as j,aH as P,u as A,E as H,a as e,ax as M,h as Y,l as S,aB as G,aC as J,q as K,ay as Q,I as W,n as X,b5 as Z,B as ee,F as ae,C as le}from"./app-yQu0_bFn.js";import{p as te}from"./processRequestFront-CuamdBnw.js";import{D as oe}from"./DashboardSidebar-B0AANda-.js";import"./index-CNNFGL0_.js";import{S as se}from"./SaveOutlined-Bu-bD-Wg.js";import"./HomeOutlined-DmHko5th.js";import"./ShoppingOutlined-DNdnXl1s.js";import"./SettingOutlined-CfBC_cVQ.js";import"./LogoutOutlined-FZs3JvXu.js";const ne=$({props:{formData:null,folder:String,imageField:{default:"image",type:String},url:{default:"front/upload-file",type:String}},components:{LoadingOutlined:I,PlusOutlined:U},setup(l,{emit:o}){const m=g([]),a=g(!1),{t:v}=C();return{fileList:m,loading:a,customRequest:p=>{const d=new FormData;d.append("image",p.file),d.append("folder",l.folder),a.value=!0,axiosFront.post(l.url,d,{headers:{"Content-Type":"multipart/form-data"}}).then(u=>{m.value=[],a.value=!1,o("onFileUploaded",{file:u.data.file,file_url:u.data.file_url})}).catch(()=>{a.value=!1,x.error(v("messages.uploading_failed"))})}}}}),re={key:0},de=["src"],ue={key:1},ie={class:"ant-upload-text"};function me(l,o,m,a,v,s){const p=h("loading-outlined"),d=h("plus-outlined"),u=N;return f(),y(u,{accept:"image/*","file-list":l.fileList,"onUpdate:fileList":o[0]||(o[0]=D=>l.fileList=D),name:"image","list-type":"picture-card",class:"avatar-uploader","show-upload-list":!1,customRequest:l.customRequest},{default:t(()=>[l.formData[l.imageField]!=null?(f(),w("div",re,[F("img",{style:{width:"128px"},src:l.formData[`${l.imageField}_url`],alt:"avatar"},null,8,de)])):(f(),w("div",ue,[l.loading?(f(),y(p,{key:0})):(f(),y(d,{key:1})),F("div",ie,c(l.$t("common.upload")),1)]))]),_:1},8,["file-list","customRequest"])}const pe=k(ne,[["render",me]]),_e={components:{EyeOutlined:T,PlusOutlined:U,EditOutlined:V,DeleteOutlined:j,ExclamationCircleOutlined:P,SaveOutlined:se,DashboardSidebar:oe,UploadFront:pe},setup(){const{t:l}=C(),o=A(),m=g({}),a=g({}),v=g({}),s=o.state.front.user,p=g({image:"",image_url:""});return H(()=>{m.value={name:s.name,email:s.email,password:"",phone:s.phone,address:s.address,shipping_address:s.shipping_address,city:s.city,state:s.state,country:s.country,zipcode:s.zipcode,profile_image:s.profile_image,profile_image_url:s.profile_image_url}}),{formData:m,rules:a,formImage:p,currencies:v,onSubmit:()=>{te({url:"front/profile",data:m.value,success:u=>{o.commit("front/updateUser",u.user),M.success({placement:"bottomRight",message:l("common.success"),description:l("user.profile_updated")}),a.value={}},error:u=>{a.value=u,message.error(l("common.fix_errors"))}})}}}},fe={class:"mt-30 mb-30"},ce={class:"small-text-message"};function ge(l,o,m,a,v,s){const p=h("router-link"),d=G,u=J,D=h("dashboard-sidebar"),n=K,O=Q,i=Y,b=W,_=X,B=h("UploadFront"),R=Z,q=h("SaveOutlined"),z=ee,E=ae,L=le;return f(),w("div",fe,[e(i,{type:"flex",justify:"center"},{default:t(()=>[e(n,{span:20},{default:t(()=>[e(u,null,{default:t(()=>[e(d,null,{default:t(()=>[e(p,{to:{name:"front.homepage"}},{default:t(()=>[S(c(l.$t("front.home")),1)]),_:1},8,["to"])]),_:1}),e(d,null,{default:t(()=>[e(p,{to:{name:"front.dashboard"}},{default:t(()=>[S(c(l.$t("front.dashboard")),1)]),_:1},8,["to"])]),_:1}),e(d,null,{default:t(()=>[S(c(l.$t("front.profile")),1)]),_:1})]),_:1}),e(i,{gutter:[30,30],class:"mt-30"},{default:t(()=>[e(n,{xs:24,sm:24,md:24,lg:6,xl:6},{default:t(()=>[e(D)]),_:1}),e(n,{xs:24,sm:24,md:24,lg:18,xl:18},{default:t(()=>[e(L,{title:null,bordered:!1,style:{borderRadius:"10px"}},{default:t(()=>[e(i,null,{default:t(()=>[e(n,{span:24},{default:t(()=>[e(O,{title:l.$t("front.profile_settings"),style:{"padding-left":"0px"}},null,8,["title"])]),_:1})]),_:1}),e(E,{layout:"vertical"},{default:t(()=>[e(i,{gutter:16},{default:t(()=>[e(n,{xs:24,sm:24,md:12,lg:12},{default:t(()=>[e(_,{label:l.$t("user.name"),name:"name",help:a.rules.name?a.rules.name.message:null,validateStatus:a.rules.name?"error":null},{default:t(()=>[e(b,{value:a.formData.name,"onUpdate:value":o[0]||(o[0]=r=>a.formData.name=r),placeholder:l.$t("common.placeholder_default_text",[l.$t("user.name")])},null,8,["value","placeholder"])]),_:1},8,["label","help","validateStatus"])]),_:1}),e(n,{xs:24,sm:24,md:12,lg:12},{default:t(()=>[e(_,{label:l.$t("user.email"),name:"email",help:a.rules.email?a.rules.email.message:null,validateStatus:a.rules.email?"error":null},{default:t(()=>[e(b,{value:a.formData.email,placeholder:l.$t("common.placeholder_default_text",[l.$t("user.email")]),disabled:""},null,8,["value","placeholder"])]),_:1},8,["label","help","validateStatus"])]),_:1})]),_:1}),e(i,{gutter:16},{default:t(()=>[e(n,{xs:24,sm:24,md:12,lg:12},{default:t(()=>[e(_,{label:l.$t("user.phone"),name:"phone",help:a.rules.phone?a.rules.phone.message:null,validateStatus:a.rules.phone?"error":null},{default:t(()=>[e(b,{value:a.formData.phone,"onUpdate:value":o[1]||(o[1]=r=>a.formData.phone=r),placeholder:l.$t("common.placeholder_default_text",[l.$t("user.phone")])},null,8,["value","placeholder"])]),_:1},8,["label","help","validateStatus"])]),_:1}),e(n,{xs:24,sm:24,md:12,lg:12},{default:t(()=>[e(_,{label:l.$t("user.password"),name:"password",help:a.rules.password?a.rules.password.message:null,validateStatus:a.rules.password?"error":null},{default:t(()=>[e(b,{value:a.formData.password,"onUpdate:value":o[2]||(o[2]=r=>a.formData.password=r),placeholder:l.$t("common.placeholder_default_text",[l.$t("user.password")]),type:"password",autocomplete:"off"},null,8,["value","placeholder"]),F("small",ce,c(l.$t("user.password_blank")),1)]),_:1},8,["label","help","validateStatus"])]),_:1})]),_:1}),e(i,{gutter:16},{default:t(()=>[e(n,{xs:24,sm:24,md:24,lg:24},{default:t(()=>[e(_,{label:l.$t("user.profile_image"),name:"profile_image",help:a.rules.profile_image?a.rules.profile_image.message:null,validateStatus:a.rules.profile_image?"error":null},{default:t(()=>[e(B,{formData:a.formData,folder:"user",imageField:"profile_image",onOnFileUploaded:o[3]||(o[3]=r=>{a.formData.profile_image=r.file,a.formData.profile_image_url=r.file_url})},null,8,["formData"])]),_:1},8,["label","help","validateStatus"])]),_:1})]),_:1}),e(i,{gutter:16},{default:t(()=>[e(n,{xs:24,sm:24,md:24,lg:24},{default:t(()=>[e(_,{label:l.$t("user.billing_address"),name:"address",help:a.rules.address?a.rules.address.message:null,validateStatus:a.rules.address?"error":null},{default:t(()=>[e(R,{value:a.formData.address,"onUpdate:value":o[4]||(o[4]=r=>a.formData.address=r),placeholder:l.$t("common.placeholder_default_text",[l.$t("user.billing_address")]),"auto-size":{minRows:2,maxRows:3}},null,8,["value","placeholder"])]),_:1},8,["label","help","validateStatus"])]),_:1})]),_:1}),e(i,{gutter:16},{default:t(()=>[e(n,{xs:24,sm:24,md:24,lg:24},{default:t(()=>[e(_,{label:l.$t("user.shipping_address"),name:"shipping_address",help:a.rules.shipping_address?a.rules.shipping_address.message:null,validateStatus:a.rules.shipping_address?"error":null},{default:t(()=>[e(R,{value:a.formData.shipping_address,"onUpdate:value":o[5]||(o[5]=r=>a.formData.shipping_address=r),placeholder:l.$t("common.placeholder_default_text",[l.$t("user.shipping_address")]),"auto-size":{minRows:2,maxRows:3}},null,8,["value","placeholder"])]),_:1},8,["label","help","validateStatus"])]),_:1})]),_:1}),e(i,{gutter:16},{default:t(()=>[e(n,{xs:24,sm:24,md:24,lg:24},{default:t(()=>[e(_,null,{default:t(()=>[e(z,{type:"primary",onClick:a.onSubmit},{icon:t(()=>[e(q)]),default:t(()=>[S(" "+c(l.$t("common.update")),1)]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})])}const ke=k(_e,[["render",ge]]);export{ke as default};
