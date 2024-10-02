import{a as L}from"./apiAdmin-DqdlX2Lq.js";import{U as W}from"./UserInfo-BLXDo1tT.js";import{_ as q,d as V,R as Y,b as N,f as v,r as g,o as m,c as F,i as b,w as a,T as D,G as P,a as t,k as x,O as j,B as H,H as G,aT as R,E as z,a6 as Z,l as $,t as w,j as B,M as O,aD as J,n as K,q as Q,h as X,a_ as ee,b5 as ae,F as te,ap as se,aG as ne,Y as oe,g as I}from"./app-DvNATx7Y.js";import{A as le,f as de}from"./fields-DpNnOOZX.js";import{S as re}from"./StaffAddButton-D53lNkx8.js";import{U as ie}from"./UploadFile-CsTx-X4S.js";import{D as ue}from"./DateTimePicker-CSWDJu6c.js";import{S as me}from"./SaveOutlined-CMUQh6R8.js";const pe=V({props:{btnType:{default:"default"},tooltip:{default:!0},customType:{default:"button"}},emits:["onAddSuccess"],components:{PlusOutlined:Y,AddEdit:le},setup(e,{emit:n}){const{permsArray:y}=N(),{initData:f,addEditUrl:p}=de(),d=v(!1),r=v("add"),i=v({...f});return{permsArray:y,visible:d,addEditType:r,addEditUrl:p,formData:i,addEditSuccess:()=>{d.value=!1,i.value={...f},n("onAddSuccess")},onClose:()=>{d.value=!1},showAdd:()=>{d.value=!0}}}}),ce={key:0};function fe(e,n,y,f,p,d){const r=j,i=g("PlusOutlined"),_=H,o=G,l=g("AddEdit");return e.permsArray.includes("expense_categories_create")||e.permsArray.includes("admin")?(m(),F("div",ce,[e.customType=="menu"?(m(),b(r,{onClick:e.showAdd,key:"expense_categories"},{icon:a(()=>[D(e.$slots,"icon")]),default:a(()=>[D(e.$slots,"default")]),_:3},8,["onClick"])):(m(),F(P,{key:1},[e.tooltip?(m(),b(o,{key:0,placement:"topLeft",title:e.$t("expense_category.add"),"arrow-point-at-center":""},{default:a(()=>[t(_,{onClick:e.showAdd,class:"ml-5 no-border-radius",type:e.btnType},{icon:a(()=>[t(i)]),default:a(()=>[D(e.$slots,"default")]),_:3},8,["onClick","type"])]),_:3},8,["title"])):(m(),b(_,{key:1,onClick:e.showAdd,class:"ml-5 no-border-radius",type:e.btnType},{icon:a(()=>[t(i)]),default:a(()=>[D(e.$slots,"default")]),_:3},8,["onClick","type"]))],64)),t(l,{addEditType:e.addEditType,visible:e.visible,url:e.addEditUrl,onAddEditSuccess:e.addEditSuccess,onClosed:e.onClose,formData:e.formData,data:e.formData,pageTitle:e.$t("expense_category.add"),successMessage:e.$t("expense_category.created")},null,8,["addEditType","visible","url","onAddEditSuccess","onClosed","formData","data","pageTitle","successMessage"])])):x("",!0)}const _e=q(pe,[["render",fe]]),ge=V({props:["formData","data","visible","url","addEditType","pageTitle","successMessage"],components:{PlusOutlined:Y,LoadingOutlined:R,UserInfo:W,SaveOutlined:me,ExpenseCategoryAddButton:_e,StaffAddButton:re,UploadFile:ie,DateTimePicker:ue},setup(e,{emit:n}){const{addEditRequestAdmin:y,loading:f,rules:p}=L(),d=v({}),r=v({}),{appSetting:i,disabledDate:_,permsArray:o,dayjs:l}=N(),A="expense-categories?limit=10000",h="users?limit=10000",c=v({});z(()=>{const u=axiosAdmin.get(A),S=axiosAdmin.get(h);Promise.all([u,S]).then(([C,M])=>{d.value=C.data,r.value=M.data})});const E=()=>{y({url:e.url,data:c.value,successMessage:e.successMessage,success:u=>{n("addEditSuccess",u.xid)}})},k=()=>{p.value={},n("closed")},T=()=>{axiosAdmin.get(A).then(u=>{d.value=u.data})},U=()=>{axiosAdmin.get(h).then(u=>{r.value=u.data})};return Z(()=>e.visible,(u,S)=>{u&&(e.addEditType=="add"?c.value={...e.formData,date:l().utc().format("YYYY-MM-DDTHH:mm:ssZ")}:c.value={...e.formData})}),{loading:f,rules:p,onClose:k,onSubmit:E,disabledDate:_,permsArray:o,expenseCategories:d,staffMembers:r,drawerWidth:window.innerWidth<=991?"90%":"45%",appSetting:i,expenseCategoryAdded:T,staffMemberAdded:U,newFormData:c}}}),ye={style:{display:"flex"}},be={style:{display:"flex"}};function ve(e,n,y,f,p,d){const r=ne,i=J,_=g("ExpenseCategoryAddButton"),o=K,l=Q,A=g("UserInfo"),h=g("StaffAddButton"),c=X,E=g("DateTimePicker"),k=ee,T=g("UploadFile"),U=ae,u=te,S=g("SaveOutlined"),C=H,M=se;return m(),b(M,{title:e.pageTitle,width:e.drawerWidth,open:e.visible,"body-style":{paddingBottom:"80px"},"footer-style":{textAlign:"right"},maskClosable:!1,onClose:e.onClose},{footer:a(()=>[t(C,{type:"primary",onClick:e.onSubmit,style:{"margin-right":"8px"},loading:e.loading},{icon:a(()=>[t(S)]),default:a(()=>[$(" "+w(e.addEditType=="add"?e.$t("common.create"):e.$t("common.update")),1)]),_:1},8,["onClick","loading"]),t(C,{onClick:e.onClose},{default:a(()=>[$(w(e.$t("common.cancel")),1)]),_:1},8,["onClick"])]),default:a(()=>[t(u,{layout:"vertical"},{default:a(()=>[t(c,{gutter:16},{default:a(()=>[t(l,{xs:24,sm:24,md:e.permsArray.includes("admin")?12:24,lg:e.permsArray.includes("admin")?12:24},{default:a(()=>[t(o,{label:e.$t("expense.expense_category"),name:"expense_category_id",help:e.rules.expense_category_id?e.rules.expense_category_id.message:null,validateStatus:e.rules.expense_category_id?"error":null,class:"required"},{default:a(()=>[B("span",ye,[t(i,{value:e.newFormData.expense_category_id,"onUpdate:value":n[0]||(n[0]=s=>e.newFormData.expense_category_id=s),placeholder:e.$t("common.select_default_text",[e.$t("expense.expense_category")]),allowClear:!0,optionFilterProp:"label","show-search":""},{default:a(()=>[(m(!0),F(P,null,O(e.expenseCategories,s=>(m(),b(r,{key:s.xid,value:s.xid,label:s.name},{default:a(()=>[$(w(s.name),1)]),_:2},1032,["value","label"]))),128))]),_:1},8,["value","placeholder"]),t(_,{onOnAddSuccess:e.expenseCategoryAdded},null,8,["onOnAddSuccess"])])]),_:1},8,["label","help","validateStatus"])]),_:1},8,["md","lg"]),e.permsArray.includes("admin")?(m(),b(l,{key:0,xs:24,sm:24,md:e.permsArray.includes("admin")?12:24,lg:e.permsArray.includes("admin")?12:24},{default:a(()=>[t(o,{label:e.$t("expense.created_by_user"),name:"user_id",help:e.rules.user_id?e.rules.user_id.message:null,validateStatus:e.rules.user_id?"error":null},{default:a(()=>[B("span",be,[t(i,{value:e.newFormData.user_id,"onUpdate:value":n[1]||(n[1]=s=>e.newFormData.user_id=s),placeholder:e.$t("common.select_default_text",[e.$t("expense.user")]),allowClear:!0,"option-label-prop":"label",optionFilterProp:"label","show-search":""},{default:a(()=>[(m(!0),F(P,null,O(e.staffMembers,s=>(m(),b(r,{key:s.xid,value:s.xid,label:s.name},{default:a(()=>[t(A,{user:s,size:"small"},null,8,["user"])]),_:2},1032,["value","label"]))),128))]),_:1},8,["value","placeholder"]),t(h,{onOnAddSuccess:e.staffMemberAdded},null,8,["onOnAddSuccess"])])]),_:1},8,["label","help","validateStatus"])]),_:1},8,["md","lg"])):x("",!0)]),_:1}),t(c,{gutter:16},{default:a(()=>[t(l,{xs:24,sm:24,md:12,lg:12},{default:a(()=>[t(o,{label:e.$t("expense.date"),name:"date",help:e.rules.date?e.rules.date.message:null,validateStatus:e.rules.date?"error":null,class:"required"},{default:a(()=>[t(E,{dateTime:e.newFormData.date,onDateTimeChanged:n[2]||(n[2]=s=>e.newFormData.date=s)},null,8,["dateTime"])]),_:1},8,["label","help","validateStatus"])]),_:1}),t(l,{xs:24,sm:24,md:12,lg:12},{default:a(()=>[t(o,{label:e.$t("expense.amount"),name:"amount",help:e.rules.amount?e.rules.amount.message:null,validateStatus:e.rules.amount?"error":null,class:"required"},{default:a(()=>[t(k,{value:e.newFormData.amount,"onUpdate:value":n[3]||(n[3]=s=>e.newFormData.amount=s),placeholder:e.$t("common.placeholder_default_text",[e.$t("expense.amount")]),min:"0",style:{width:"100%"}},{addonBefore:a(()=>[$(w(e.appSetting.currency.symbol),1)]),_:1},8,["value","placeholder"])]),_:1},8,["label","help","validateStatus"])]),_:1})]),_:1}),t(c,{gutter:16},{default:a(()=>[t(l,{xs:24,sm:24,md:24,lg:24},{default:a(()=>[t(o,{label:e.$t("expense.bill"),name:"bill",help:e.rules.bill?e.rules.bill.message:null,validateStatus:e.rules.bill?"error":null},{default:a(()=>[t(T,{acceptFormat:"image/*,.pdf",formData:e.newFormData,folder:"expenses",uploadField:"bill",onOnFileUploaded:n[4]||(n[4]=s=>{e.newFormData.bill=s.file,e.newFormData.bill_url=s.file_url})},null,8,["acceptFormat","formData"])]),_:1},8,["label","help","validateStatus"])]),_:1})]),_:1}),t(c,{gutter:16},{default:a(()=>[t(l,{xs:24,sm:24,md:24,lg:24},{default:a(()=>[t(o,{label:e.$t("expense.notes"),name:"notes",help:e.rules.notes?e.rules.notes.message:null,validateStatus:e.rules.notes?"error":null},{default:a(()=>[t(U,{value:e.newFormData.notes,"onUpdate:value":n[5]||(n[5]=s=>e.newFormData.notes=s),placeholder:e.$t("common.placeholder_default_text",[e.$t("expense.notes")]),rows:4},null,8,["value","placeholder"])]),_:1},8,["label","help","validateStatus"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title","width","open","onClose"])}const Ee=q(ge,[["render",ve]]),ke=()=>{const{t:e}=oe(),n="expenses",y=v("expenses?fields=id,xid,bill,bill_url,expense_category_id,x_expense_category_id,expenseCategory{id,xid,name},amount,user_id,x_user_id,user{id,xid,name},notes,date"),f=["user_id","expense_category_id"],p=I({expenseCategories:[],staffMembers:[]}),d={expense_category_id:void 0,amount:"",bill:void 0,bill_url:void 0,date:void 0,user_id:void 0,notes:""},r=[{title:e("expense.expense_category"),dataIndex:"expense_category_id",sorter:!0},{title:e("expense.amount"),dataIndex:"amount",sorter:!0},{title:e("expense.date"),dataIndex:"date",sorter:!0},{title:e("expense.created_by_user"),dataIndex:"user_id",sorter:!0},{title:e("common.action"),dataIndex:"action"}],i=I({expense_category_id:void 0,user_id:void 0});return{url:y,addEditUrl:n,initData:d,columns:r,filters:i,hashableColumns:f,preFetchData:p,getPreFetchData:()=>{const o=axiosAdmin.get("expense-categories?limit=10000"),l=axiosAdmin.get("users?limit=10000");Promise.all([o,l]).then(([A,h])=>{p.expenseCategories=A.data,p.staffMembers=h.data})}}};export{Ee as A,_e as E,ke as f};
