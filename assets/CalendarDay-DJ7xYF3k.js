import{d as B,aD as P,u as z,h as G,ap as mt,o as w,c as p,a as s,e as f,w as A,f as K,t as d,b as n,V as ft,k as b,_ as I,m as E,af as vt,aM as pt,v as gt,p as L,B as q,F as k,r as j,g as yt,i as ht,n as U,H as bt,aI as F}from"./index-B1119SJB.js";import{_ as _t}from"./lodash-68xR2RMt.js";import{h as l}from"./moment-zH0z38ay.js";import{_ as xt,C as Dt,a as Ct}from"./CalendarPagination.vue_vue_type_style_index_0_lang-Sv2FKqb2.js";import{_ as $t}from"./BaseCard.vue_vue_type_script_setup_true_lang-Hreq2OcQ.js";import{_ as kt}from"./BaseLoader.vue_vue_type_script_setup_true_lang-_6Ymj6Hs.js";import{_ as Mt}from"./BaseBreadcrumb.vue_vue_type_style_index_0_lang-DvMXXQoI.js";import{_ as W,u as J}from"./Sessions-Bw_c3sQi.js";import{_ as Ot}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as Yt}from"./SessionUserModals.vue_vue_type_script_setup_true_lang-hXE2SbXG.js";import{u as Nt}from"./Sessions-DaqtMXHC.js";import{u as St}from"./Client-BqqpnH_C.js";import"./AddEventModal.vue_vue_type_style_index_0_lang-nJY5jRXO.js";import"./maska-Cp-LWreF.js";import"./Rules-BlhNUM2e.js";import"./DeleteModal.vue_vue_type_script_setup_true_lang-DhEyFJ0-.js";import"./user-1-B0DTw7e0.js";const It={class:"tw-flex tw-flex-none tw-items-center tw-justify-between tw-border-b tw-border-gray-200 tw-pb-4"},Bt={class:"tw-flex tw-items-center"},Tt={class:"tw-block tw-items-center sm:tw-flex"},Ut={class:"tw-mb-2 tw-text-base tw-font-semibold tw-leading-6 tw-text-gray-900 sm:tw-mb-0"},At={datetime:"2022-01-22"},qt={class:"tw-flex tw-items-center"},Et=B({__name:"CalendarFilters",props:P({month:{type:Number,default:0},year:{type:Number,default:0},currentDay:{type:Number,default:0},currentMonth:{type:Number,default:0},currentYear:{type:Number,default:0}},{selectColors:{default:[{id:"",isActive:!1}]},selectColorsModifiers:{}}),emits:P(["back","update"],["update:selectColors"]),setup(i,{emit:u}){const{t:m}=z(),h=G(),a=u,o=mt(i,"selectColors"),g=()=>{h.push({name:"Calendar Month"})};return(v,e)=>(w(),p("header",It,[s("div",Bt,[s("div",Tt,[f(ft,{onClick:g,color:"primary",class:"tw-mb-2 tw-mr-3 sm:tw-mb-0"},{default:A(()=>[K(d(n(m)("goBack")),1)]),_:1}),s("div",null,[s("h1",Ut,[s("time",At,d(n(m)(`calendar.months[${i.currentMonth-1}]`))+" "+d(i.currentDay)+" "+d(i.currentYear),1)]),f(W,{selectColors:o.value,"onUpdate:selectColors":e[0]||(e[0]=c=>o.value=c),class:"sm:tw-hidden"},null,8,["selectColors"])])])]),s("div",qt,[f(W,{selectColors:o.value,"onUpdate:selectColors":e[1]||(e[1]=c=>o.value=c),class:"tw-hidden sm:tw-ml-4 sm:tw-flex md:tw-items-center"},null,8,["selectColors"]),f(xt,{onBack:e[2]||(e[2]=c=>a("back")),onNextMonth:e[3]||(e[3]=c=>a("update",!0)),onPreviousMonth:e[4]||(e[4]=c=>a("update")),class:"md:tw-hidden"})])]))}}),Ft={type:"button",class:"tw-group tw-absolute tw-inset-1 tw-flex tw-w-full tw-flex-col tw-overflow-y-auto tw-rounded-lg tw-p-2 tw-text-xs tw-leading-5"},jt={class:"tw-text-left"},Rt=["datetime"],Vt=["datetime"],Ht={key:0,class:"tw-order-1 tw-text-left tw-font-semibold"},Pt={key:1,class:"tw-absolute tw-right-2 tw-top-2"},Lt=B({__name:"CalendarCard",props:{card:{type:Object,required:!0}},setup(i){var o,g,v,e;const u=i,{disableCard:m}=J(),h="€",a=b({...u.card,start:Math.floor((l(u.card.startsAt).minutes()+l(u.card.startsAt).hours()*60)/5)+2,duration:Math.floor(u.card.durationInMinutes/5),disabled:m(u.card.startsAt,u.card.durationInMinutes),title:u.card.opponent?`${(g=(o=u.card)==null?void 0:o.opponent)==null?void 0:g.firstName} ${(e=(v=u.card)==null?void 0:v.opponent)==null?void 0:e.lastName}`:"Free space for booking"});return(c,D)=>a.value?(w(),p("li",{key:0,style:pt({"grid-row":`${a.value.start} / span ${a.value.duration}`}),class:"tw-relative tw-mt-px tw-flex tw-p-1"},[f(vt,{disabled:a.value.disabled??!1,class:I([{booking:a.value.status==="OPEN_FOR_BOOKING",invalid:a.value.status==="INVALID",confirmed:a.value.status==="BOOKED","wait-confirmed-client":a.value.status==="PENDING_BY_THERAPIST","wait-confirmed-therapist":a.value.status==="PENDING_BY_CLIENT"},"tw-relative"]),elevation:"0"},{default:A(()=>[s("button",Ft,[a.value.duration>=8?(w(),p("p",{key:0,class:I([{"text-black":a.value.status!=="BOOKED"},"tw-order-1 tw-text-left tw-font-semibold"])},d(a.value.title),3)):E("",!0),s("p",jt,[s("time",{datetime:n(l)(a.value.startsAt).format()},d(n(l)(a.value.startsAt).format("HH:mm")),9,Rt),D[0]||(D[0]=K(" - ")),s("time",{datetime:n(l)(a.value.startsAt).add(a.value.durationInMinutes,"minutes").format()},d(n(l)(a.value.startsAt).add(a.value.durationInMinutes,"minutes").format("HH:mm ")),9,Vt),Math.floor(a.value.durationInMinutes/5)<8?(w(),p("span",Ht,d(a.value.title),1)):E("",!0)]),a.value.costInCents?(w(),p("p",Pt,d(a.value.costInCents/100)+" "+d(n(h)),1)):E("",!0)])]),_:1},8,["disabled","class"])],4)):E("",!0)}}),Wt=Ot(Lt,[["__scopeId","data-v-f937a4aa"]]),zt={class:"tw-flex tw-flex-auto tw-flex-col tw-overflow-auto tw-pr-2"},Gt={class:"tw-flex tw-w-full tw-flex-auto"},Kt={class:"tw-grid tw-flex-auto tw-grid-cols-1 tw-grid-rows-1"},Jt={class:"tw-col-start-1 tw-col-end-2 tw-row-start-1 tw-grid tw-divide-y tw-divide-gray-100",style:{"grid-template-rows":"repeat(48, minmax(3.5rem, 1fr))"}},Qt={class:"tw-col-start-1 tw-col-end-2 tw-row-start-1 tw-grid",style:{"grid-template-rows":"1.75rem repeat(288, minmax(0, 1fr)) auto"}},Xt=B({__name:"CalendarTableBody",props:{cards:{type:Object,required:!0}},emits:["open"],setup(i,{emit:u}){const m=u,h=a=>{const o=(a+1)/2-1;return o<10?`0${o}:00`:`${o}:00`};return gt(()=>{const a=document.querySelector(".calendar-block");a&&(a.scrollTop=900)}),(a,o)=>{const g=j("perfect-scrollbar");return w(),L(g,{class:"calendar-block"},{default:A(()=>[s("div",zt,[s("div",Gt,[o[1]||(o[1]=s("div",{class:"tw-w-14 tw-flex-none tw-bg-white tw-ring-1 tw-ring-gray-100"},null,-1)),s("div",Kt,[s("div",Jt,[o[0]||(o[0]=s("div",{class:"tw-row-end-1 tw-h-7"},null,-1)),(w(),p(k,null,q(48,v=>s("div",{key:v},[s("div",{class:I(v%2?"tw-sticky tw-left-0 tw--ml-14 tw--mt-2.5 tw-w-14 tw-pr-2 tw-text-right tw-text-xs tw-leading-5 tw-text-gray-400":"")},d(v%2?h(v):""),3)])),64))]),s("ol",Qt,[(w(!0),p(k,null,q(i.cards,v=>(w(),L(Wt,{onClick:e=>m("open",v),key:v.id,card:v},null,8,["onClick","card"]))),128))])])])])]),_:1})}}}),Zt={class:"tw-flex tw-items-center tw-text-center tw-text-gray-900"},te={class:"tw-sr-only"},ee={class:"tw-flex-auto tw-text-sm tw-font-semibold"},ae={class:"tw-sr-only"},se={class:"tw-mt-6 tw-grid tw-grid-cols-7 tw-text-center tw-text-xs tw-leading-6 tw-text-gray-500"},oe={class:"tw-isolate tw-mt-2 tw-grid tw-grid-cols-7 tw-gap-px tw-rounded-lg tw-bg-gray-200 tw-text-sm tw-shadow tw-ring-1 tw-ring-gray-200"},le=["onClick"],re=["datetime"],ne=B({__name:"CalendarDatePicker",props:{month:{type:Number,required:!0,default:0},year:{type:Number,required:!0,default:0},days:{type:Object,required:!0}},emits:["changeDay","changeMonth"],setup(i,{emit:u}){const{t:m}=z(),h=u;return(a,o)=>{const g=j("ChevronLeftIcon"),v=j("ChevronRightIcon");return w(),p(k,null,[s("div",Zt,[s("button",{onClick:o[0]||(o[0]=e=>h("changeMonth",!1)),class:"tw--m-1.5 tw-flex tw-flex-none tw-items-center tw-justify-center tw-p-1.5 tw-text-gray-400 hover:tw-text-gray-500",type:"button"},[s("span",te,d(n(m)("calendar.previousMonth")),1),f(g,{class:"tw-h-5 tw-w-5","aria-hidden":"true"})]),s("div",ee,d(n(m)(`calendar.months[${i.month}]`))+" "+d(i.year),1),s("button",{onClick:o[1]||(o[1]=e=>h("changeMonth",!0)),class:"tw--m-1.5 tw-flex tw-flex-none tw-items-center tw-justify-center tw-p-1.5 tw-text-gray-400 hover:tw-text-gray-500",type:"button"},[s("span",ae,d(n(m)("calendar.nextMonth")),1),f(v,{class:"tw-h-5 tw-w-5","aria-hidden":"true"})])]),s("div",se,[(w(),p(k,null,q(7,e=>s("div",{key:e},d(n(m)(`calendar.weekDays[${e-1}].short`)),1)),64))]),s("div",oe,[(w(!0),p(k,null,q(i.days,(e,c)=>(w(),p("button",{onClick:D=>h("changeDay",e),key:e.date,class:I(["tw-py-1.5 hover:tw-bg-gray-100 focus:tw-z-10",e.isCurrentMonth?"tw-bg-white":"tw-bg-gray-50",(e.isSelected||e.isToday)&&"tw-font-semibold",e.isSelected&&"tw-text-white",!e.isSelected&&e.isCurrentMonth&&!e.isToday&&"tw-text-gray-900",!e.isSelected&&!e.isCurrentMonth&&!e.isToday&&"tw-text-gray-400",e.isToday&&!e.isSelected&&"text-primary",c===0&&"tw-rounded-tl-lg",c===6&&"tw-rounded-tr-lg",c===i.days.length-7&&"tw-rounded-bl-lg",c===i.days.length-1&&"tw-rounded-br-lg"]),type:"button"},[s("time",{datetime:e.date,class:I(["tw-mx-auto tw-flex tw-h-7 tw-w-7 tw-items-center tw-justify-center tw-rounded-full",e.isSelected&&e.isToday&&"text-primary",e.isSelected&&!e.isToday&&"tw-bg-gray-900"])},d(e.day),11,re)],10,le))),128))])],64)}}}),ue={class:"tw-mb-3 tw-grid tw-flex-none tw-grid-cols-7 tw-bg-white tw-text-xs tw-text-gray-500 xl:tw-hidden"},ie=["onClick"],de=B({__name:"CalendarMobileDatepicker",props:{currentDay:{type:String,required:!0},mobileWeek:{type:Object,required:!0}},emits:["update"],setup(i,{emit:u}){const m=u;return(h,a)=>(w(),p("div",ue,[(w(!0),p(k,null,q(i.mobileWeek,o=>(w(),p("button",{onClick:g=>m("update",o),key:o.format("DD"),type:"button",class:"tw-flex tw-flex-col tw-items-center tw-pb-1.5 tw-pt-3"},[s("span",null,d(o.format("dd")),1),s("span",{class:I([{"tw-text-white":o.format("DD")===i.currentDay,"tw-bg-gray-900":o.format("DD")===i.currentDay},"tw-mt-3 tw-flex tw-h-8 tw-w-8 tw-items-center tw-justify-center tw-rounded-full tw-text-base tw-font-semibold tw-text-gray-900"])},d(o.format("DD")),3)],8,ie))),128))]))}}),ce={class:"tw-flex tw-h-full tw-flex-col"},we={class:"tw-isolate tw-flex tw-flex-auto tw-overflow-hidden tw-bg-white"},me={class:"tw-top-1 tw-hidden tw-w-1/2 tw-max-w-md tw-flex-none tw-border-l tw-border-gray-100 tw-px-8 tw-py-10 xl:tw-block"},Se=B({__name:"CalendarDay",setup(i){const u=yt(),m=G(),h=ht(),a=Nt(),o=St(),{form:g,loading:v,loadingBook:e,dialogEvent:c,dialogDelete:D,selectColors:M,loadingDelete:Q,deleteItem:X,bookSession:Z,confirmEdit:tt,disableCard:et,confirmDelete:at,changeInvalidSession:st}=J(),C=b(!0),y=b(0),R=b(new Date().getFullYear()),V=b(new Date().getMonth()),ot=b(new Date().getDate()),T=b(new Date().getFullYear()),x=b(new Date().getMonth());b(new Date().getDate());const $=b(l().format("DD")),O=b(l().format("MM")),Y=b(l().format("YYYY")),lt=U(()=>new Dt({year:T.value,month:x.value,date:20,firstDayOfWeek:"monday"},{day:"2-digit",month:"long",year:"numeric"})),rt=U(()=>lt.value.daysOfMonth.map(t=>{const r={day:Number(l(t.fullDate).format("DD")),month:l(t.fullDate).month(),year:l(t.fullDate).year()};return{...r,date:t.date,isCurrentMonth:t.isDayInMouth,fullDate:t.fullDate,isToday:r.year===R.value&&r.month===V.value+1&&r.day===ot.value,isSelected:r.year===Number(Y.value)&&r.month===Number(O.value)&&r.day===Number($.value)}})),N=U(()=>M.value.filter(t=>t.isActive).map(t=>t.id)),nt=U(()=>a.list.filter(t=>l(t.startsAt).format("DD.MM.YYYY")===`${$.value}.${O.value}.${Y.value}`)),ut=U(()=>{const t=[];for(let r=0;r<7;r+=1)t.push(l(y.value).add(-3,"days").add(r,"days"));return t}),it=t=>{et(t.startsAt,t.durationInMinutes)||(c.value=!0,g.value={...t,occurrenceStartsAt:t.startsAt})},dt=()=>{T.value=new Date().getFullYear(),x.value=new Date().getMonth()},H=(t=!1)=>{t?x.value>=11?(x.value=0,T.value+=1):x.value+=1:x.value<=0?(x.value=11,T.value-=1):x.value-=1},ct=async t=>{C.value=!0,m.push({name:"Calendar Day",query:{date:l(t.fullDate).valueOf()}}),y.value=l(t.fullDate).valueOf(),$.value=l(t.fullDate).format("DD"),O.value=l(t.fullDate).format("MM"),Y.value=l(t.fullDate).format("YYYY"),await a.getSessions({from:l(t.fullDate).startOf("day").valueOf(),to:l(t.fullDate).endOf("day").valueOf(),status:N.value}),C.value=!1},wt=async t=>{C.value=!0,m.push({name:"Calendar Day",query:{date:t.valueOf()}}),y.value=t.valueOf(),$.value=t.format("DD"),O.value=t.format("MM"),Y.value=t.format("YYYY"),await a.getSessions({from:t.startOf("day").valueOf(),to:t.endOf("day").valueOf(),status:N.value}),C.value=!1},S=_t.debounce(()=>{const t={};M.value.length&&M.value.length!==3&&(t.status=N.value),t.from=l(y.value).startOf("day").valueOf(),t.to=l(y.value).endOf("day").valueOf(),a.getSessions(t)},500);return bt(N,S),u.query&&(y.value=Number(u.query.date),$.value=l(y.value).format("DD"),O.value=l(y.value).format("MM"),Y.value=l(y.value).format("YYYY"),h.user.type==="Therapist"?Promise.all([o.getClients(),a.getSessions({from:l(y.value).startOf("day").valueOf(),to:l(y.value).endOf("day").valueOf(),status:N.value})]).then(()=>{C.value=!1}):a.getSessions({from:l(y.value).startOf("day").valueOf(),to:l(y.value).endOf("day").valueOf(),status:N.value}).then(()=>{C.value=!1})),(t,r)=>(w(),p(k,null,[f(Mt,{title:"sidebar.calendar"}),f(kt,{isUpdate:C.value},{default:A(()=>[f(Ct,{onUpdate:n(S)},null,8,["onUpdate"]),f($t,null,{default:A(()=>[s("div",ce,[f(Et,{onBack:dt,onUpdate:H,selectColors:n(M),"onUpdate:selectColors":r[0]||(r[0]=_=>F(M)?M.value=_:null),month:V.value,year:R.value,currentDay:Number($.value),currentMonth:Number(O.value),currentYear:Number(Y.value)},null,8,["selectColors","month","year","currentDay","currentMonth","currentYear"]),f(de,{onUpdate:wt,mobileWeek:ut.value,currentDay:$.value},null,8,["mobileWeek","currentDay"]),s("div",we,[f(Xt,{onOpen:it,cards:nt.value},null,8,["cards"]),s("div",me,[f(ne,{month:x.value,year:T.value,days:rt.value,onChangeDay:ct,onChangeMonth:H},null,8,["month","year","days"])])])])]),_:1})]),_:1},8,["isUpdate"]),f(Yt,{onBook:r[1]||(r[1]=_=>n(Z)(n(S))),onUpdate:r[2]||(r[2]=_=>n(tt)(n(S))),onDelete:n(X),onInvalid:r[3]||(r[3]=_=>n(st)(n(S))),onDeleteConfirm:r[4]||(r[4]=_=>n(at)(n(S))),form:n(g),"onUpdate:form":r[5]||(r[5]=_=>F(g)?g.value=_:null),dialog:n(c),"onUpdate:dialog":r[6]||(r[6]=_=>F(c)?c.value=_:null),"dialog-delete":n(D),"onUpdate:dialogDelete":r[7]||(r[7]=_=>F(D)?D.value=_:null),loading:n(e),"loading-delete":n(Q)},null,8,["onDelete","form","dialog","dialog-delete","loading","loading-delete"])],64))}});export{Se as default};