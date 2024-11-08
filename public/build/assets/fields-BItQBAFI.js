import{_ as P,bd as z,r as k,o as u,i,w as a,l as p,t as m,a as t,H as G,d as L,R as j,aT as H,b as Y,f as E,u as J,E as K,a6 as Q,c as w,G as q,M,k as y,j as X,bu as N,ak as Z,n as x,q as ee,aG as ae,aD as le,h as te,I as se,p as de,a_ as re,b5 as ue,F as oe,B as ne,ap as ie,Y as me}from"./app-Da3MRomk.js";import{a as pe}from"./apiAdmin-A_I0yO2H.js";import{U as fe}from"./Upload-BJHtc0Ld.js";import{W as _e}from"./AddButton-CEBiK7xW.js";import{R as he}from"./AddButton-CotI5mNk.js";import{S as ve}from"./SaveOutlined-Cr5q_jBA.js";const ge={components:{InfoCircleOutlined:z}};function be(e,s,D,$,S,h){const v=k("InfoCircleOutlined"),d=G;return u(),i(d,null,{title:a(()=>[p(m(e.$t("user.warehouse_not_changable")),1)]),default:a(()=>[t(v)]),_:1})}const ye=P(ge,[["render",be]]),ce=L({props:["addEditData","data","visible","url","addEditType","pageTitle","successMessage"],components:{PlusOutlined:j,LoadingOutlined:H,SaveOutlined:ve,Upload:fe,RoleAddButton:he,WarehouseAddButton:_e,TooltipWarehouse:ye},setup(e,{emit:s}){const{permsArray:D,user:$,appSetting:S,selectedWarehouse:h}=Y(),{addEditRequestAdmin:v,loading:d,rules:r}=pe(),o=E([]),f=E([]),_=E({}),n="roles?limit=10000",C="warehouses?limit=10000",b=J(),g=E(!0);K(()=>{const l=axiosAdmin.get(n),c=axiosAdmin.get(C);Promise.all([l,c]).then(([W,U])=>{o.value=W.data,f.value=U.data}),_.value={...e.addEditData}});const O=()=>{v({url:e.url,data:_.value,successMessage:e.successMessage,success:l=>{s("addEditSuccess",l.xid),$.value.xid==l.xid&&b.dispatch("auth/updateUser")}})},A=()=>{r.value={},s("closed")},B=()=>{axiosAdmin.get(n).then(l=>{o.value=l.data})},T=()=>{axiosAdmin.get(C).then(l=>{f.value=l.data})},I=(l,c)=>{_.value={..._.value,warehouse_id:l.length>0?l[0]:void 0}},R=(l,c)=>{c&&c.title&&c.title=="admin"?g.value=!1:g.value=!0};return Q(()=>e.visible,(l,c)=>{if(l)if(g.value=!0,e.addEditType=="edit"&&(g.value=!0,e.data.user_type=="staff_members"&&e.data.role&&e.data.role.name=="admin"&&(g.value=!1),e.data.user_type=="customers"&&e.data.is_walkin_customer&&(g.value=!1)),e.addEditType=="add")e.addEditData.user_type=="staff_members"?_.value={...e.addEditData,warehouse_id:h.value.xid,warehouses:[h.value.xid]}:_.value={...e.addEditData,warehouse_id:h.value.xid,warehouses:[]};else{var W=e.data.warehouse&&e.data.warehouse.xid?e.data.warehouse.xid:void 0,U=[];if(e.addEditData.user_type=="staff_members"){var V=e.data.user_warehouses;Z(V,F=>{U.push(F.x_warehouse_id)})}_.value={...e.addEditData,role_id:e.data.role&&e.data.role.xid?e.data.role.xid:void 0,warehouse_id:W,warehouses:U,opening_balance:e.data.details&&e.data.details.opening_balance?e.data.details.opening_balance:void 0,opening_balance_type:e.data.details&&e.data.details.opening_balance_type?e.data.details.opening_balance_type:void 0,credit_period:e.data.details&&e.data.details.credit_period?e.data.details.credit_period:void 0,credit_limit:e.data.details&&e.data.details.credit_limit?e.data.details.credit_limit:void 0,_method:"PUT"}}}),{loading:d,rules:r,onClose:A,onSubmit:O,roles:o,warehouses:f,formData:_,roleAdded:B,warehouseAdded:T,permsArray:D,appSetting:S,selectedWarehouse:h,warehousesChanged:I,drawerWidth:window.innerWidth<=991?"90%":"45%",warehouseVisible:g,roleChanged:R}}}),we={key:0,style:{display:"flex"}},De={key:1},$e={style:{display:"flex"}},Se={key:0,class:"small-text-message"};function ke(e,s,D,$,S,h){const v=k("Upload"),d=x,r=ee,o=ae,f=le,_=k("WarehouseAddButton"),n=te,C=k("RoleAddButton"),b=se,g=de,O=re,A=ue,B=oe,T=k("SaveOutlined"),I=ne,R=ie;return u(),i(R,{title:e.pageTitle,width:e.drawerWidth,open:e.visible,"body-style":{paddingBottom:"80px"},"footer-style":{textAlign:"right"},maskClosable:!1,onClose:e.onClose},{footer:a(()=>[t(I,{type:"primary",onClick:e.onSubmit,style:{"margin-right":"8px"},loading:e.loading},{icon:a(()=>[t(T)]),default:a(()=>[p(" "+m(e.addEditType=="add"?e.$t("common.create"):e.$t("common.update")),1)]),_:1},8,["onClick","loading"]),t(I,{onClick:e.onClose},{default:a(()=>[p(m(e.$t("common.cancel")),1)]),_:1},8,["onClick"])]),default:a(()=>[t(B,{layout:"vertical"},{default:a(()=>[t(n,null,{default:a(()=>[t(r,{xs:24,sm:24,md:6,lg:6},{default:a(()=>[t(d,{label:e.$t("user.profile_image"),name:"profile_image",help:e.rules.profile_image?e.rules.profile_image.message:null,validateStatus:e.rules.profile_image?"error":null},{default:a(()=>[t(v,{formData:e.formData,folder:"user",imageField:"profile_image",onOnFileUploaded:s[0]||(s[0]=l=>{e.formData.profile_image=l.file,e.formData.profile_image_url=l.file_url})},null,8,["formData"])]),_:1},8,["label","help","validateStatus"])]),_:1}),t(r,{xs:24,sm:24,md:18,lg:18},{default:a(()=>[e.warehouseVisible?(u(),i(n,{key:0,gutter:16},{default:a(()=>[t(r,{xs:24,sm:24,md:24,lg:24},{default:a(()=>[t(d,{name:"warehouse_id",help:e.rules.warehouse_id?e.rules.warehouse_id.message:null,validateStatus:e.rules.warehouse_id?"error":null,class:"required"},{label:a(()=>[p(m(e.$t("warehouse.warehouse")),1)]),default:a(()=>[e.permsArray.includes("admin")?(u(),w("span",we,[e.formData.user_type=="staff_members"?(u(),i(f,{key:0,value:e.formData.warehouses,"onUpdate:value":s[1]||(s[1]=l=>e.formData.warehouses=l),placeholder:e.$t("common.select_default_text",[e.$t("warehouse.warehouse")]),mode:"multiple",onChange:e.warehousesChanged},{default:a(()=>[(u(!0),w(q,null,M(e.warehouses,l=>(u(),i(o,{key:l.xid,value:l.xid},{default:a(()=>[p(m(l.name),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value","placeholder","onChange"])):(u(),i(f,{key:1,value:e.formData.warehouse_id,"onUpdate:value":s[2]||(s[2]=l=>e.formData.warehouse_id=l),placeholder:e.$t("common.select_default_text",[e.$t("warehouse.warehouse")])},{default:a(()=>[(u(!0),w(q,null,M(e.warehouses,l=>(u(),i(o,{key:l.xid,value:l.xid},{default:a(()=>[p(m(l.name),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value","placeholder"])),t(_,{onOnAddSuccess:e.warehouseAdded},null,8,["onOnAddSuccess"])])):(u(),w("span",De,[t(f,{value:e.selectedWarehouse.xid,placeholder:e.$t("common.select_default_text",[e.$t("warehouse.warehouse")]),disabled:""},{default:a(()=>[t(o,{value:e.selectedWarehouse.xid},{default:a(()=>[p(m(e.selectedWarehouse.name),1)]),_:1},8,["value"])]),_:1},8,["value","placeholder"])]))]),_:1},8,["help","validateStatus"])]),_:1})]),_:1})):y("",!0),e.formData.user_type=="staff_members"&&e.permsArray.includes("admin")?(u(),i(n,{key:1,gutter:16},{default:a(()=>[t(r,{xs:24,sm:24,md:24,lg:24},{default:a(()=>[t(d,{label:e.$t("user.role"),name:"role_id",help:e.rules.role_id?e.rules.role_id.message:null,validateStatus:e.rules.role_id?"error":null,class:"required"},{default:a(()=>[X("span",$e,[t(f,{value:e.formData.role_id,"onUpdate:value":s[3]||(s[3]=l=>e.formData.role_id=l),placeholder:e.$t("common.select_default_text",[e.$t("user.role")]),allowClear:!0,onChange:e.roleChanged},{default:a(()=>[(u(!0),w(q,null,M(e.roles,l=>(u(),i(o,{key:l.xid,value:l.xid,title:l.name},{default:a(()=>[p(m(l.display_name),1)]),_:2},1032,["value","title"]))),128))]),_:1},8,["value","placeholder","onChange"]),t(C,{onOnAddSuccess:e.roleAdded},null,8,["onOnAddSuccess"])])]),_:1},8,["label","help","validateStatus"])]),_:1})]),_:1})):y("",!0),t(n,{gutter:16},{default:a(()=>[t(r,{xs:24,sm:24,md:12,lg:12},{default:a(()=>[t(d,{label:e.$t("user.name"),name:"name",help:e.rules.name?e.rules.name.message:null,validateStatus:e.rules.name?"error":null,class:"required"},{default:a(()=>[t(b,{value:e.formData.name,"onUpdate:value":s[4]||(s[4]=l=>e.formData.name=l),placeholder:e.$t("common.placeholder_default_text",[e.$t("user.name")])},null,8,["value","placeholder"])]),_:1},8,["label","help","validateStatus"])]),_:1}),t(r,{xs:24,sm:24,md:12,lg:12},{default:a(()=>[t(d,{label:e.$t("user.phone"),name:"phone",help:e.rules.phone?e.rules.phone.message:null,validateStatus:e.rules.phone?"error":null,class:"required"},{default:a(()=>[t(b,{value:e.formData.phone,"onUpdate:value":s[5]||(s[5]=l=>e.formData.phone=l),placeholder:e.$t("common.placeholder_default_text",[e.$t("user.phone")])},null,8,["value","placeholder"])]),_:1},8,["label","help","validateStatus"])]),_:1})]),_:1}),t(n,{gutter:16},{default:a(()=>[t(r,{xs:24,sm:24,md:12,lg:12},{default:a(()=>[t(d,{label:e.$t("user.email"),name:"email",help:e.rules.email?e.rules.email.message:null,validateStatus:e.rules.email?"error":null,class:N({required:e.formData.user_type=="staff_members"})},{default:a(()=>[t(b,{value:e.formData.email,"onUpdate:value":s[6]||(s[6]=l=>e.formData.email=l),placeholder:e.$t("common.placeholder_default_text",[e.$t("user.email")])},null,8,["value","placeholder"])]),_:1},8,["label","help","validateStatus","class"])]),_:1}),t(r,{xs:24,sm:24,md:12,lg:12},{default:a(()=>[t(d,{label:e.$t("user.status"),name:"status",help:e.rules.status?e.rules.status.message:null,validateStatus:e.rules.status?"error":null,class:"required"},{default:a(()=>[t(f,{value:e.formData.status,"onUpdate:value":s[7]||(s[7]=l=>e.formData.status=l),placeholder:e.$t("common.select_default_text",[e.$t("user.status")])},{default:a(()=>[t(o,{value:"enabled"},{default:a(()=>[p(m(e.$t("common.enabled")),1)]),_:1}),t(o,{value:"disabled"},{default:a(()=>[p(m(e.$t("common.disabled")),1)]),_:1})]),_:1},8,["value","placeholder"])]),_:1},8,["label","help","validateStatus"])]),_:1})]),_:1}),e.formData.user_type=="staff_members"||e.formData.user_type=="customers"?(u(),i(n,{key:2},{default:a(()=>[t(r,{span:24},{default:a(()=>[t(d,{label:e.$t("user.password"),name:"password",help:e.rules.password?e.rules.password.message:null,validateStatus:e.rules.password?"error":null,class:N(e.formData.user_type=="staff_members"?"required":"")},{default:a(()=>[t(g,{value:e.formData.password,"onUpdate:value":s[8]||(s[8]=l=>e.formData.password=l),placeholder:e.$t("common.placeholder_default_text",[e.$t("user.password")])},null,8,["value","placeholder"]),e.addEditType=="edit"?(u(),w("small",Se,m(e.$t("user.password_blank")),1)):y("",!0)]),_:1},8,["label","help","validateStatus","class"])]),_:1})]),_:1})):y("",!0),e.formData.user_type!="staff_members"?(u(),i(n,{key:3,gutter:16},{default:a(()=>[t(r,{xs:24,sm:24,md:24,lg:24},{default:a(()=>[t(d,{label:e.$t("user.tax_number"),name:"tax_number",help:e.rules.tax_number?e.rules.tax_number.message:null,validateStatus:e.rules.tax_number?"error":null},{default:a(()=>[t(b,{value:e.formData.tax_number,"onUpdate:value":s[9]||(s[9]=l=>e.formData.tax_number=l),placeholder:e.$t("common.placeholder_default_text",[e.$t("user.tax_number")])},null,8,["value","placeholder"])]),_:1},8,["label","help","validateStatus"])]),_:1})]),_:1})):y("",!0),e.formData.user_type!="staff_members"?(u(),i(n,{key:4,gutter:16},{default:a(()=>[t(r,{xs:24,sm:24,md:24,lg:24},{default:a(()=>[t(d,{label:e.$t("user.opening_balance"),name:"opening_balance",help:e.rules.opening_balance?e.rules.opening_balance.message:null,validateStatus:e.rules.opening_balance?"error":null},{default:a(()=>[t(b,{value:e.formData.opening_balance,"onUpdate:value":s[11]||(s[11]=l=>e.formData.opening_balance=l),placeholder:"0"},{prefix:a(()=>[p(m(e.appSetting.currency.symbol),1)]),addonAfter:a(()=>[t(f,{value:e.formData.opening_balance_type,"onUpdate:value":s[10]||(s[10]=l=>e.formData.opening_balance_type=l),style:{width:"100px"}},{default:a(()=>[t(o,{value:"receive"},{default:a(()=>[p(m(e.$t("user.receive")),1)]),_:1}),t(o,{value:"pay"},{default:a(()=>[p(m(e.$t("user.pay")),1)]),_:1})]),_:1},8,["value"])]),_:1},8,["value"])]),_:1},8,["label","help","validateStatus"])]),_:1})]),_:1})):y("",!0)]),_:1})]),_:1}),e.formData.user_type!="staff_members"?(u(),i(n,{key:0,gutter:16},{default:a(()=>[t(r,{xs:24,sm:24,md:12,lg:12},{default:a(()=>[t(d,{label:e.$t("user.credit_period"),name:"credit_period",help:e.rules.credit_period?e.rules.credit_period.message:null,validateStatus:e.rules.credit_period?"error":null},{default:a(()=>[t(O,{value:e.formData.credit_period,"onUpdate:value":s[12]||(s[12]=l=>e.formData.credit_period=l),placeholder:"0","addon-after":e.$t("user.days"),type:"number",precision:0,style:{width:"100%"}},null,8,["value","addon-after"])]),_:1},8,["label","help","validateStatus"])]),_:1}),t(r,{xs:24,sm:24,md:12,lg:12},{default:a(()=>[t(d,{label:e.$t("user.credit_limit"),name:"credit_limit",help:e.rules.credit_limit?e.rules.credit_limit.message:null,validateStatus:e.rules.credit_limit?"error":null},{default:a(()=>[t(b,{value:e.formData.credit_limit,"onUpdate:value":s[13]||(s[13]=l=>e.formData.credit_limit=l),placeholder:"0","addon-before":e.appSetting.currency.symbol},null,8,["value","addon-before"])]),_:1},8,["label","help","validateStatus"])]),_:1})]),_:1})):y("",!0),t(n,{gutter:16},{default:a(()=>[t(r,{xs:24,sm:24,md:24,lg:24},{default:a(()=>[t(d,{label:e.formData.user_type=="staff_members"?e.$t("user.address"):e.$t("user.billing_address"),name:"address",help:e.rules.address?e.rules.address.message:null,validateStatus:e.rules.address?"error":null},{default:a(()=>[t(A,{value:e.formData.address,"onUpdate:value":s[14]||(s[14]=l=>e.formData.address=l),placeholder:e.$t("common.placeholder_default_text",[e.formData.user_type=="staff_members"?e.$t("user.address"):e.$t("user.billing_address")]),"auto-size":{minRows:2,maxRows:3}},null,8,["value","placeholder"])]),_:1},8,["label","help","validateStatus"])]),_:1})]),_:1}),e.formData.user_type!="staff_members"?(u(),i(n,{key:1,gutter:16},{default:a(()=>[t(r,{xs:24,sm:24,md:24,lg:24},{default:a(()=>[t(d,{label:e.$t("user.shipping_address"),name:"shipping_address",help:e.rules.shipping_address?e.rules.shipping_address.message:null,validateStatus:e.rules.shipping_address?"error":null},{default:a(()=>[t(A,{value:e.formData.shipping_address,"onUpdate:value":s[15]||(s[15]=l=>e.formData.shipping_address=l),placeholder:e.$t("common.placeholder_default_text",[e.$t("user.shipping_address")]),"auto-size":{minRows:2,maxRows:3}},null,8,["value","placeholder"])]),_:1},8,["label","help","validateStatus"])]),_:1})]),_:1})):y("",!0)]),_:1})]),_:1},8,["title","width","open","onClose"])}const Be=P(ce,[["render",ke]]),Te=()=>{const{t:e}=me(),s="users",D="customers",$="suppliers",S={warehouse_id:void 0,warehouses:[],name:"",email:"",profile_image:void 0,profile_image_url:void 0,phone:"",address:"",status:"enabled"},h={shipping_address:"",opening_balance:"",opening_balance_type:"receive",credit_period:"30",credit_limit:"",tax_number:void 0},v={user_type:"customers",...S,...h},d={...v,user_type:"staff_members",role_id:void 0,password:""},r={user_type:"suppliers",...v,...h},o=[{title:e("user.name"),dataIndex:"name",key:"name"},{title:e("user.email"),dataIndex:"email"},{title:e("user.created_at"),dataIndex:"created_at"},{title:e("user.status"),dataIndex:"status",key:"status"},{title:e("common.action"),dataIndex:"action"}],f=[{title:e("user.name"),dataIndex:"name",key:"name",sorter:!0},{title:e("District"),dataIndex:"district",key:"district",sorter:!0},{title:e("Ministry"),dataIndex:"ministry",key:"ministry",sorter:!0},{title:e("NRC No"),dataIndex:"nrc_no",key:"nrc_no",sorter:!0},{title:e("MAN No"),dataIndex:"man_no",key:"man_no",sorter:!0},{title:e("Employee No"),dataIndex:"employee_no",key:"employee_no",sorter:!0},{title:e("Total"),dataIndex:"total",key:"total",sorter:!0},{title:e("Period"),dataIndex:"period",key:"period",sorter:!0},{title:e("user.created_at"),dataIndex:"created_at",sorter:!0,sorter_field:"user_details.created_at"},{title:e("common.action"),dataIndex:"action"}],_=[{key:"users.name",value:e("user.name")},{key:"email",value:e("user.email")},{key:"phone",value:e("user.phone")}];return{customerInitData:v,staffMemberInitData:d,supplierInitData:r,columns:o,supplierCustomerColumns:f,filterableColumns:_,staffMemberAddEditUrl:s,customerAddEditUrl:D,supplierAddEditUrl:$}};export{Be as A,Te as f};