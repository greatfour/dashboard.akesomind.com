import{_ as C}from"./Logo.vue_vue_type_script_setup_true_lang-H9GprAJt.js";import{u as L,_ as T}from"./LanguageDD.vue_vue_type_script_setup_true_lang-KqdzT3fM.js";import{d as q,u as E,k as i,H as $,o as c,p as g,w as u,e,f as m,t as s,b as l,am as x,an as h,V as b,c as V,m as R,I as j,ad as A,ag as z,a as f,ah as F,r as S}from"./index-C7T6PFfZ.js";const I={key:2,class:"text-error tw-text-base"},D={key:3,class:"text-error tw-text-base"},H=q({__name:"RequestForm",setup(B){const{t,locale:y}=E(),N=L(),d=i(!1),p=i(!1),_=i(!1),v=i(!1),w=i(!1),a=i({email:"",firstName:"",lastName:""}),k=i([o=>!!o||"Name is required"]),M=i([o=>!!o||"E-mail is required",o=>/.+@.+\..+/.test(o)||"E-mail must be valid"]);$(a,()=>{v.value=!1,w.value=!1});const U=async()=>{p.value=!0;try{await N.requsetApi({email:a.value.email,firstName:a.value.firstName,lastName:a.value.lastName,language:y.value==="ru"?"RU":"EN"}),_.value=!0,setTimeout(()=>_.value=!1,3e3)}catch(o){o.response.data.detail==="User already exists"?w.value=!0:v.value=!0}p.value=!1};return(o,r)=>(c(),g(A,{modelValue:d.value,"onUpdate:modelValue":r[3]||(r[3]=n=>d.value=n),class:"mt-5","lazy-validation":"",onSubmit:j(U,["prevent"])},{default:u(()=>[e(x,{class:"text-subtitle-1 font-weight-medium pb-2"},{default:u(()=>[m(s(l(t)("auth.firstname")),1)]),_:1}),e(h,{modelValue:a.value.firstName,"onUpdate:modelValue":r[0]||(r[0]=n=>a.value.firstName=n),rules:k.value,required:"",type:"name"},null,8,["modelValue","rules"]),e(x,{class:"text-subtitle-1 font-weight-medium pb-2"},{default:u(()=>[m(s(l(t)("auth.lastname")),1)]),_:1}),e(h,{modelValue:a.value.lastName,"onUpdate:modelValue":r[1]||(r[1]=n=>a.value.lastName=n),rules:k.value,required:"",type:"name"},null,8,["modelValue","rules"]),e(x,{class:"text-subtitle-1 font-weight-medium pb-2"},{default:u(()=>[m(s(l(t)("auth.resetEmail")),1)]),_:1}),e(h,{modelValue:a.value.email,"onUpdate:modelValue":r[2]||(r[2]=n=>a.value.email=n),rules:M.value,type:"email",required:""},null,8,["modelValue","rules"]),_.value?(c(),g(b,{key:1,color:"success","prepend-icon":"mdi-check-circle",size:"large",block:"",flat:""},{default:u(()=>[m(s(l(t)("auth.successEmail")),1)]),_:1})):(c(),g(b,{key:0,loading:p.value,disabled:!d.value,class:"mt-2 tw-mb-1",size:"large",color:"primary",block:"",type:"submit",flat:""},{default:u(()=>[m(s(l(t)("auth.getAccess")),1)]),_:1},8,["loading","disabled"])),v.value?(c(),V("p",I,s(l(t)("auth.errorMessageRegister")),1)):R("",!0),w.value?(c(),V("p",D,s(l(t)("auth.errorMessageExists")),1)):R("",!0)]),_:1},8,["modelValue"]))}}),G={class:"pa-3 tw-flex tw-justify-center"},J={class:"tw-align-center tw-mb-10 tw-flex tw-w-full tw-items-center tw-justify-between tw-px-10 tw-pt-16"},K={class:"tw-align-center tw-flex tw-justify-center"},O={class:"tw-align-center tw-flex tw-w-full tw-flex-col tw-justify-center tw-px-10"},P={class:"text-h3 font-weight-bold mb-2"},Q={class:"text-h6 text-medium-emphasis d-flex align-center mt-3"},Z=q({__name:"Request",setup(B){const{t}=E();return(y,N)=>{const d=S("RouterLink");return c(),V("div",G,[e(F,{class:"tw-max-w-3xl"},{default:u(()=>[e(z,{cols:"12"},{default:u(()=>[f("div",J,[e(C),e(T)]),f("div",K,[f("div",O,[f("h2",P,s(l(t)("auth.getAccessTitle")),1),e(H),f("h6",Q,[m(s(l(t)("auth.registerLoginTitle"))+" ",1),e(d,{to:{name:"login"}},{default:u(()=>[e(b,{variant:"plain",class:"text-primary text-body-1 opacity-1 pl-2"},{default:u(()=>[m(s(l(t)("auth.registerLoginBtn")),1)]),_:1})]),_:1})])])])]),_:1})]),_:1})])}}});export{Z as default};