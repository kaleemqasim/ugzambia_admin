import{bT as J,f as n,Y as L,u as Q,V as T,a6 as W,bU as Z,b7 as ee,X as O,a as S,aH as E,ax as P,ak as ae}from"./app-DvNATx7Y.js";import{d as te}from"./datatable-ChDCLVWf.js";var se=Object.prototype,ne=se.hasOwnProperty;function oe(o,d){return o!=null&&ne.call(o,d)}function le(o,d){return o!=null&&J(o,d,oe)}const ue=()=>{const{table:o,tableUrl:d,hashable:V,currentPage:u,handleTableChange:A,fetch:h,onTableSearch:R,onRowSelectChange:U,exportDetails:_}=te(),f=n(!1),i=n({}),r=n(""),s=n(""),g=n({}),b=n([]),x=n({}),m=n(!1),c=n("add"),$=n(""),v=n({}),{t:a}=L(),I=Q(),M=e=>{f.value=!0,i.value=e},j=()=>{$.value=r.value,c.value="add",m.value=!0,i.value={}},N=()=>{C(),m.value=!1},y=()=>{f.value=!1,i.value={}},F=e=>{const t={};var p=x.value;Object.keys(g.value).forEach(l=>{if(le(p,l)){const G=p[l];t[l]=Z(e,G)}else ee(b.value,l)?t[l]=e[`x_${l}`]:t[l]=e[l]}),t._method="PUT",v.value=t,i.value=e,$.value=`${r.value}/${e.xid}`,c.value="edit",m.value=!0},D=()=>{I.dispatch("auth/updateVisibleSubscriptionModules")},H=e=>{w(e,"add-edit")},K=e=>{w(e,"add-new")},k=e=>{w(e,"add-continue")},w=(e,t="add-edit")=>{if(c.value=="add"){const p={...o.pagination};p.current=1,u.value=1,o.pagination=p}D(),(t=="add-edit"||t=="add-new")&&C(),h({page:c.value=="add"?1:u.value,limit:10}),t=="add-edit"&&(m.value=!1)},X=e=>{O.confirm({title:a("common.delete")+"?",icon:S(E),content:a(`${s.value}.delete_message`),centered:!0,okText:a("common.yes"),okType:"danger",cancelText:a("common.no"),onOk(){return axiosAdmin.delete(`${r.value}/${e}`).then(t=>{D(),h({page:u.value}),P.success({message:a("common.success"),description:a(`${s.value}.deleted`),placement:"bottomRight"})}).catch(()=>{})},onCancel(){}})},Y=()=>{O.confirm({title:a("common.delete")+"?",icon:S(E),content:a(`${s.value}.selected_delete_message`),centered:!0,okText:a("common.yes"),okType:"danger",cancelText:a("common.no"),onOk(){const e=[];ae(o.selectedRowKeys,t=>{e.push(axiosAdmin.delete(`${r.value}/${t}`))}),Promise.all(e).then(t=>{D(),h({page:u.value}),P.success({message:a("common.success"),description:a(`${s.value}.deleted`),placement:"bottomRight"})})},onCancel(){}})},C=()=>{v.value={...g.value}},q=e=>{v.value={...v.value,...e}},z=T(()=>s.value!=""?c.value=="add"?a(`${s.value}.add`):a(`${s.value}.edit`):""),B=T(()=>s.value!=""?c.value=="add"?a(`${s.value}.created`):a(`${s.value}.updated`):"");return W(b,(e,t)=>{V.value=e}),{detailsVisible:f,viewData:i,onCloseDetails:y,addEditVisible:m,addEditType:c,addEditUrl:$,currentPage:u,formData:v,initData:g,crudUrl:r,langKey:s,hashableColumns:b,multiDimensalObjectColumns:x,pageTitle:z,successMessage:B,viewItem:M,addItem:j,editItem:F,onCloseAddEdit:N,showDeleteConfirm:X,addEditSuccess:H,addAndNewSuccess:K,addAndContinueSuccess:k,restFormData:C,assignNewFormData:q,showSelectedDeleteConfirm:Y,table:o,tableUrl:d,handleTableChange:A,fetch:h,onTableSearch:R,onRowSelectChange:U,exportDetails:_}};export{ue as c};