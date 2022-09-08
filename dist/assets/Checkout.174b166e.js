import{n as N,D as $,y as ie,o,c as r,a as e,d as j,e as ee,h as f,t as u,j as m,q as te,_ as T,r as i,w as S,z as de,g as v,G as w,B as h,b as le,F,p as se,l as ae,E as ce,M as Ae,A as W,C as k,f as q,a5 as z,T as ue,i as L}from"./index.9d12ff9c.js";import{E as G,e as P}from"./index.1ac1f2c6.js";const me={class:"fixed z-50 top-0 left-0 w-screen h-screen grid items-center overflow-hidden bg-emerald-50"},pe={class:"h-full"},ve={class:"flex flex-col m-7 sm:m-10 sm:gap-y-10 sm:pt-5"},ge={class:"text-center text-2xl sm:text-4xl font-semibold text-emerald-600"},ye={key:0,class:"m-5 text-center"},xe={class:"text-gray-500"},be=te(" Din ordre vil blive leveret "),he={key:0},fe={key:1},we={class:"font-semibold lowercase"},Qe={key:1,class:"m-5 text-center"},_e={class:"text-gray-500"},ke=te(" Din ordre kan afhentes "),Ee={key:0},Ie={key:1},Ce={key:2},Be={props:{restaurant:Object,deliveryMethod:String,deliveryDay:String,deliveryTime:String},emits:["closeModals"],setup(a,{emit:E}){const M=N(()=>{const s=new Date;let g=s.getHours(),d=s.getMinutes();return d+=20,d>59&&(g++,d-=60),`${g}`.padStart(2,0)+":"+`${d}`.padStart(2,0)}),Q=$();ie({components:{GoogleMap:G,Marker:P}});const b={lat:55.694601998040376,lng:12.550868343712878};return(s,g)=>(o(),r("div",me,[e("div",pe,[j(f(G),{"api-key":"AIzaSyDBbFP79qNW3Yf1YYc0qeC8DccgOG_7HpQ",center:b,zoom:15,class:"h-1/2"},{default:ee(()=>[j(f(P),{options:{position:b}},null,8,["options"])]),_:1}),e("div",ve,[e("h1",ge," Tak for din bestilling hos "+u(a.restaurant.name)+"! ",1),a.deliveryMethod==="levering"?(o(),r("div",ye,[e("p",xe,[be,a.deliveryDay==="I morgen"?(o(),r("span",he,"i morgen ")):m("",!0),a.deliveryTime!=="Hurtigst muligt"?(o(),r("span",fe,"kl. ")):m("",!0),e("span",we,u(a.deliveryTime),1)])])):m("",!0),a.deliveryMethod==="afhentning"?(o(),r("div",Qe,[e("p",_e,[ke,a.deliveryDay==="I morgen"?(o(),r("span",Ee,"i morgen ")):m("",!0),a.deliveryTime==="Hurtigst muligt"?(o(),r("span",Ie,"kl. "+u(f(M)),1)):m("",!0),a.deliveryTime!=="Hurtigst muligt"?(o(),r("span",Ce,"kl. "+u(a.deliveryTime),1)):m("",!0)])])):m("",!0)]),e("button",{onClick:g[0]||(g[0]=()=>{f(Q).push("/"),s.$emit("closeModals")}),class:"block w-full max-w-xs bg-emerald-500 text-white text-xl text-center mx-auto px-3 py-2 rounded hover:opacity-75"}," Tilbage til forsiden ")])]))}},Se={},Ve={id:"Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 171 161"},Me=e("g",null,[e("rect",{x:"34.5",y:"105",width:"102",height:"14",rx:"3.87",transform:"translate(66.76 251.65) rotate(-135)",fill:"#10b981"}),e("rect",{x:"34.5",y:"42",width:"102",height:"14",rx:"3.87",transform:"translate(-9.61 74.81) rotate(-45)",fill:"#10b981"})],-1),De=[Me];function Fe(a,E){return o(),r("svg",Ve,De)}var Ue=T(Se,[["render",Fe]]),qe="data:image/jpeg;base64,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",Ne="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAgICAgJCAkKCgkNDgwODRMREBARExwUFhQWFBwrGx8bGx8bKyYuJSMlLiZENS8vNUROQj5CTl9VVV93cXecnNEBCAgICAkICQoKCQ0ODA4NExEQEBETHBQWFBYUHCsbHxsbHxsrJi4lIyUuJkQ1Ly81RE5CPkJOX1VVX3dxd5yc0f/CABEIADgAZAMBIgACEQEDEQH/xAAyAAEAAwEBAQAAAAAAAAAAAAAABQYHBAMIAQEAAwEBAQAAAAAAAAAAAAAABAUGAQcC/9oADAMBAAIQAxAAAADfgDMfiZpz5wk499vik8ECq0VRLhJjdYsYYAFFwXUssq/Uk1C2isuZew1qwZnOevdwlZqrz9PTMWHeAUXBfrTNIeyxWakJGu13pYbDH5zLR3d3W6XW9Y2uaAAAAAAAA//EADIQAAECAwYDBwIHAAAAAAAAAAECAwAEBQYREhMhMRAUcQcgMlFSgZFAsSIzQUJygrL/2gAIAQEAAT8A+gtD2hNyy1y1KShwjQvq1T/QQ9bC0bysS6pMexCRFOt/aGWdTmzHMo9Do+xEG1ipplHLMZK8Ix5hCikwuq1JZBM4783RL16oNKGY5nJ8l7/IiSnpedZzGjcRopB3B71v6yun0lEsyrC7NkgkbhtO8EknhSJcKWp5Q8OiesNOFpxKx+m/SAQQCOFOm1Sc026D+G+5Y80nvdp+Lnad6OWX/vjSbuU09Zv4MfktX+gcDsehhm/JZv3y03/Hdt9Rl1GlImWUYnZQlRA3Lat4IINx4UiYCVqZUfFqnrDTZdcSge/SAAABwp8oZqaQ3+wHEs+SR37RdnzM24qZpS0NLUSVML0R1SYdsXaVpRSaU+f4gKEU6wFfmHU5zIlUet0/ZKYNkjLMJ5WYzVhIxlzQqMKpNTSrCZN32F8S9AqDpGYgMp817+wESUkxJNZbQ1OqlHdR+h//xAAkEQACAQMDAwUAAAAAAAAAAAABAgMABBEFEiFBUWEQIDBSof/aAAgBAgEBPwCpJEjGWNC8TqrAVPr1nE21Q8nlRxVnqdreHahKv9W4PsuGJmfxwK1B2S2bHUgU9RSPFIkiHDKcigcgH1uIGJ3oM9xU1s08bRlG58Vc6dewvtaByO6jcPytO0eeaVXmjKRA5O7gt8X/xAApEQACAQMDAgQHAAAAAAAAAAABAgMABBEFEkEGExAiMVIUICEwUYGh/9oACAEDAQE/AKsrC6vpe3bx7jyeBT9I6iqbllhZvbk0ukXX1Em1CODVzYz24ywBX3D5OmII4tJhdR5pCzMf3irlisRxycVfKPI3PpToroyMMgjBojBI8enNdhtY/hLptqZyj8DPBqfUtM7LFr2Hbjhwak1K1uTlJV2j0ycH+1eahFGhWNwzn8cfa//Z",je="data:image/jpeg;base64,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";const V=a=>(se("data-v-665396be"),a=a(),ae(),a),Re={class:"fixed z-40 top-0 left-0 w-screen h-screen flex flex-col overflow-hidden bg-emerald-100"},Te={class:"w-full grow sm:grid sm:place-content-center"},Xe={class:"w-full max-w-xl mx-auto bg-emerald-100 sm:h-fit sm:bg-gradient-to-b sm:from-emerald-500 sm:to-emerald-300 sm:rounded-2xl sm:py-4"},Je={class:"flex flex-col justify-between my-5 gap-y-2"},Ze=V(()=>e("div",{class:"flex justify-center gap-x-5 mb-6"},[e("img",{class:"w-14",src:qe,alt:"visa"}),e("img",{class:"w-14",src:Ne,alt:"mastercard"}),e("img",{class:"w-14",src:je,alt:"dankort"})],-1)),Ye={"payment-form":"",class:"flex flex-col gap-y-5 mx-5"},Oe={class:"flex flex-col gap-y-2"},He=V(()=>e("label",{for:"cardName",class:"text-black sm:text-white"},"Navn p\xE5 kortholder",-1)),Ke={class:"flex flex-col gap-y-2"},We=V(()=>e("label",{for:"cardNumber",class:"text-black sm:text-white"},"Kortnummer",-1)),ze={class:"flex justify-between gap-x-2"},Le={class:"flex gap-x-1 w-1/2"},Ge={class:"flex flex-col gap-y-2 w-1/2"},Pe=V(()=>e("label",{for:"expiryMonth",class:"text-black sm:text-white"},"Udl\xF8bdato",-1)),$e={class:"flex flex-col gap-y-2 w-1/2"},et=V(()=>e("label",{for:"expiryYear",class:"invisible"}," . ",-1)),tt={class:"flex flex-col gap-y-2 w-1/3"},lt=V(()=>e("label",{for:"securityCode",class:"text-black sm:text-white"},"CVV nr",-1)),st={props:{restaurant:Object,deliveryMethod:String,deliveryDay:String,deliveryTime:String},emits:["closePayment"],setup(a,{emit:E}){const M=a,Q=i(!1),b=i(!1),s=i(""),g=i(""),d=i(""),I=i(""),D=i("");function C(){b.value=document.querySelector("[payment-form]").checkValidity(),Q.value=!0,b.value&&localStorage.setItem(`basket-${M.restaurant.slug}`,"[]")}return S(g,y=>{g.value=y.replace(/[^\dA-Z]/g,"").replace(/(.{4})/g,"$1 ").trim(),g.value.length===19&&document.querySelector("#month").focus()}),S(d,y=>{d.value=y.replace(/[^\dA-Z]/g,"").trim(),d.value.length===2&&document.querySelector("#year").focus()}),S(I,y=>{I.value=y.replace(/[^\dA-Z]/g,"").trim(),I.value.length===2&&document.querySelector("#code").focus()}),de(()=>window.scrollTo({top:0})),(y,n)=>{const R=Ue,_=Be;return o(),r(F,null,[e("div",Re,[j(R,{onClick:n[0]||(n[0]=c=>y.$emit("closePayment")),class:"w-10 hover:opacity-75 m-4 cursor-pointer"}),e("div",Te,[e("div",Xe,[e("div",Je,[Ze,e("form",Ye,[e("div",Oe,[He,v(e("input",{id:"name",class:h([{"invalid:border-red-500 invalid:bg-red-100 valid:border-green-500 valid:bg-green-200":Q.value},"peer p-1.5 border-2 rounded focus:outline-none text-gray-600"]),type:"text",name:"cardName",placeholder:"John Doe",minlength:"4",required:"","onUpdate:modelValue":n[1]||(n[1]=c=>s.value=c)},null,2),[[w,s.value]])]),e("div",Ke,[We,v(e("input",{"onUpdate:modelValue":n[2]||(n[2]=c=>g.value=c),id:"number",class:h([{"invalid:border-red-500 invalid:bg-red-100 valid:border-green-500 valid:bg-green-200":Q.value},"peer p-1.5 border-2 rounded focus:outline-none text-gray-600"]),type:"text",inputmode:"numeric",number:"cardNumber",placeholder:"XXXX XXXX XXXX XXXX",pattern:"([0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4})",maxlength:"19",required:""},null,2),[[w,g.value]])]),e("div",ze,[e("div",Le,[e("div",Ge,[Pe,v(e("input",{"onUpdate:modelValue":n[3]||(n[3]=c=>d.value=c),id:"month",class:h([{"invalid:border-red-500 invalid:bg-red-100 valid:border-green-500 valid:bg-green-200":Q.value},"peer p-1.5 border-2 rounded focus:outline-none text-gray-600"]),type:"text",inputmode:"numeric",name:"expiryMonth",placeholder:"MM",pattern:"(0[1-9]|1[0-2])",maxlength:"2",required:""},null,2),[[w,d.value]])]),e("div",$e,[et,v(e("input",{"onUpdate:modelValue":n[4]||(n[4]=c=>I.value=c),id:"year",class:h([{"invalid:border-red-500 invalid:bg-red-100 valid:border-green-500 valid:bg-green-200":Q.value},"peer p-1.5 border-2 rounded focus:outline-none text-gray-600"]),type:"text",inputmode:"numeric",name:"expiryYear",placeholder:"YY",pattern:"(2[2-7])",maxlength:"2",required:""},null,2),[[w,I.value]])])]),e("div",tt,[lt,v(e("input",{"onUpdate:modelValue":n[5]||(n[5]=c=>D.value=c),id:"code",class:h([{"invalid:border-red-500 invalid:bg-red-100 valid:border-green-500 valid:bg-green-200":Q.value},"peer p-1.5 border-2 rounded focus:outline-none text-gray-600"]),type:"text",inputmode:"numeric",name:"securityCode",placeholder:"XXX",pattern:"[0-9]{3}",maxlength:"3",required:""},null,2),[[w,D.value]])])])])])])]),e("div",{class:"flex justify-center pb-24"},[e("button",{onClick:C,class:"text-white rounded font-medium hover:opacity-75 duration-200 px-3 py-2 bg-emerald-500"}," Godkend betaling ")])]),b.value?(o(),le(_,{key:0,onCloseModals:n[6]||(n[6]=c=>y.$emit("closePayment")),restaurant:a.restaurant,deliveryMethod:a.deliveryMethod,deliveryDay:a.deliveryDay,deliveryTime:a.deliveryTime},null,8,["restaurant","deliveryMethod","deliveryDay","deliveryTime"])):m("",!0)],64)}}};var at=T(st,[["__scopeId","data-v-665396be"]]);const p=a=>(se("data-v-d7d5c338"),a=a(),ae(),a),ot={key:0,class:"h-[70vh] w-full bg-[url('./assets/splash-image/splash-image.png')] bg-center bg-cover"},rt={class:"relative flex flex-col sm:flex-row items-center sm:ml-10"},nt={class:"sm:ml-48 flex w-full flex-col items-center sm:items-start pt-24 sm:pt-0"},it={key:0,class:"text-2xl sm:text-3xl font-semibold p-3 sm:p-5"},dt={class:"flex flex-col-reverse max-w-5xl mx-auto my-10 px-4 md:grid md:grid-cols-2 gap-y-10 gap-x-10 sm:gap-x-28 justify-center"},ct={class:"flex flex-col gap-y-5"},At={class:"w-80 max-w-full mx-auto sm:mx-0 mt-10 flex justify-center rounded overflow-hidden"},ut=["value","id"],mt=["for"],pt={class:"flex flex-col my-5"},vt={class:"space-y-3 mb-10"},gt={class:"font-semibold text-xl"},yt={class:"flex gap-x-5"},xt=p(()=>e("option",null,"I dag",-1)),bt=p(()=>e("option",null,"I morgen",-1)),ht=[xt,bt],ft=p(()=>e("option",null,"Hurtigst muligt",-1)),wt={key:0,"delivery-form":"",class:"space-y-4 mb-10 max-h-[40rem] max-w-xl overflow-hidden"},Qt=p(()=>e("h2",{class:"font-semibold text-xl"},"Leveringsadresse",-1)),_t={class:"space-y-1"},kt=p(()=>e("label",null,"Fulde navn",-1)),Et={class:"space-y-1"},It=p(()=>e("label",null,"Vejnavn og nummer",-1)),Ct={class:"grid grid-cols-[1fr_auto] gap-4"},Bt={class:"grow space-y-1"},St=p(()=>e("label",null,"By",-1)),Vt={class:"space-y-1"},Mt=p(()=>e("label",{class:"block"},"Post nr.",-1)),Dt={class:"space-y-1"},Ft=p(()=>e("label",null,"E-mail",-1)),Ut={class:"space-y-1"},qt=p(()=>e("label",{class:"block"},"Telefonnummer",-1)),Nt={class:"space-y-3"},jt=p(()=>e("h2",{class:"font-semibold text-xl"},"Betalingsmetoder",-1)),Rt=["value","id"],Tt=["for"],Xt=["src"],Jt={class:"md:sticky top-0 mt-5 md:mt-0 md:pt-10 h-fit"},Zt=p(()=>e("h2",{class:"text-center font-semibold text-2xl"},"Din bestilling",-1)),Yt={class:"flex justify-between items-center"},Ot={class:"text-md"},Ht={class:"text-sm"},Kt={class:"flex justify-start items-center gap-x-5"},Wt={key:0,class:"text-xs"},zt={key:1},Lt={key:2,class:"text-xs"},Gt=p(()=>e("span",{class:"font-semibold"},"Note: ",-1)),Pt={class:"italic"},$t={class:"flex flex-col gap-y-4"},el={class:"flex justify-between"},tl=p(()=>e("p",{class:"font-semibold"},"Subtotal",-1)),ll={class:"flex justify-between"},sl=p(()=>e("p",{class:"font-semibold"},"Levering",-1)),al={class:"flex justify-between"},ol=p(()=>e("p",{class:"font-semibold"},"Samlet",-1)),rl={class:"md:ml-20 flex flex-wrap justify-center gap-4 px-2"},nl={setup(a){const E=ce(),M=$(),Q=Ae(),b=i(!1),s=i(),g=["levering","afhentning"],d=i("levering"),I=["visa","mastercard","dankort","mobilepay"],D=i("visa"),C=i("I dag"),y=i("Hurtigst muligt"),n=N(()=>{const A=new Date,x=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"][A.getDay()+(C.value==="I morgen"?1:0)];return s.value[x]}),R=N(()=>{const A=[],l=new Date;let x=l.getHours(),t=l.getMinutes()+(15-l.getMinutes()%15);for((x<parseInt(n.value.slice(0,2))||C.value==="I morgen")&&(x=parseInt(n.value.slice(0,2)),t=parseInt(n.value.slice(3,5)));x<parseInt(n.value.slice(8,10));)t<60?(A.push(`${x}`.padStart(2,"0")+":"+`${t}`.padEnd(2,"0")),t+=15):(x++,t=0,x===parseInt(n.value.slice(8,10))&&t===parseInt(n.value.slice(11,13))&&A.push(`${x}`.padStart(2,"0")+":"+`${t}`.padEnd(2,"0")));return A}),_=i(!1),c=i(!1),X=i(""),J=i(""),Z=i(""),Y=i(""),O=i(""),U=i("");function oe(){d.value==="levering"?(c.value=document.querySelector("[delivery-form]").checkValidity(),_.value=!0):d.value==="afhentning"&&(c.value=!0)}S(U,A=>{U.value=A.replace(/[^\dA-Z]/g,"").replace(/(.{2})/g,"$1 ").trim()}),S(c,A=>{document.querySelector("body").style.overflow=A?"hidden":"auto",document.querySelector("header > div").style.paddingRight=A?"1rem":"0"}),W.configure({endpointUrl:"https://api.airtable.com",apiKey:"keyiA3gmotxYIJjLc"});var re=W.base("appRiP6vD6l7EmCYB");re("restaurants").select({filterByFormula:`{slug} = '${Q.params.id}'`}).eachPage(A=>{s.value=A[0].fields,b.value=!0});const ne=N(()=>{var B,H,K;const A=parseInt((B=s.value)==null?void 0:B.colorPrimary.substring(1,3),16),l=parseInt((H=s.value)==null?void 0:H.colorPrimary.substring(3,5),16),x=parseInt((K=s.value)==null?void 0:K.colorPrimary.substring(5,7),16);return Math.round(A*.2126+l*.7152+x*.0722)>150?"text-black":"text-white"});return S(b,()=>{E.$patch(A=>{A.basket=JSON.parse(localStorage.getItem(`basket-${s.value.slug}`))||[]})}),(A,l)=>{const x=at;return o(),r("main",{class:h(f(ne))},[b.value?m("",!0):(o(),r("div",ot)),b.value?(o(),r("div",{key:1,style:k(`background-color: ${s.value.colorPrimary}`),class:"pb-10"},[e("div",{style:k(`background-image: url(${s.value.splash[0].url})`),class:"h-80 sm:h-[50vh] w-full bg-[url('./assets/splash-image.png')] bg-center bg-cover"},null,4),e("div",rt,[e("div",{style:k(`border: 2px solid ${s.value.colorSecondary}; background-image: url(${s.value.logo[0].url}); background-size: contain; background-repeat: no-repeat`),class:"w-40 h-40 absolute -top-16 sm:left-0 sm:m-4 rounded-full bg-white flex justify-center items-center"},null,4),e("div",nt,[b.value?(o(),r("h1",it,u(s.value.name),1)):m("",!0)])]),e("div",dt,[e("div",ct,[e("fieldset",At,[(o(),r(F,null,q(g,t=>e("div",{key:t,class:"w-full text-center capitalize"},[v(e("input",{"onUpdate:modelValue":l[0]||(l[0]=B=>d.value=B),value:t,id:t,type:"radio",class:"peer appearance-none"},null,8,ut),[[L,d.value]]),e("label",{for:t,style:k(`background-color: ${s.value.colorSecondary}`),class:"text-white inline-block w-full py-2 cursor-pointer duration-200 opacity-60 peer-checked:opacity-100"},u(t),13,mt)])),64))]),e("div",pt,[e("div",vt,[e("h2",gt,u(d.value==="levering"?"Leveringstid":"Afhentningstid"),1),e("div",yt,[v(e("select",{onChange:l[1]||(l[1]=t=>y.value="Hurtigst muligt"),"onUpdate:modelValue":l[2]||(l[2]=t=>C.value=t),class:"p-1.5 border-2 rounded bg-white text-gray-600"},ht,544),[[z,C.value]]),v(e("select",{"onUpdate:modelValue":l[3]||(l[3]=t=>y.value=t),class:"p-1.5 border-2 rounded bg-white text-gray-600"},[ft,(o(!0),r(F,null,q(f(R),t=>(o(),r("option",{key:t},u(t),1))),128))],512),[[z,y.value]])])]),j(ue,{name:"fade",duration:500},{default:ee(()=>[d.value==="levering"?(o(),r("form",wt,[Qt,e("div",_t,[kt,v(e("input",{"onUpdate:modelValue":l[4]||(l[4]=t=>X.value=t),class:h([{"invalid:border-red-500 invalid:bg-red-100 valid:border-green-500 valid:bg-green-100":_.value},"appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"]),placeholder:"Indtast fulde navn",name:"fullName",id:"fullName",type:"text",required:""},null,2),[[w,X.value]])]),e("div",Et,[It,v(e("input",{"onUpdate:modelValue":l[5]||(l[5]=t=>J.value=t),class:h([{"invalid:border-red-500 invalid:bg-red-100 valid:border-green-500 valid:bg-green-100":_.value},"appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"]),placeholder:"Indtast vejnavn og nummer",name:"streetName",id:"streetName",type:"text",required:""},null,2),[[w,J.value]])]),e("div",Ct,[e("div",Bt,[St,v(e("input",{"onUpdate:modelValue":l[6]||(l[6]=t=>Z.value=t),class:h([{"invalid:border-red-500 invalid:bg-red-100 valid:border-green-500 valid:bg-green-100":_.value},"appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"]),placeholder:"Indtast by",name:"city",id:"city",type:"text",required:""},null,2),[[w,Z.value]])]),e("div",Vt,[Mt,v(e("input",{"onUpdate:modelValue":l[7]||(l[7]=t=>Y.value=t),class:h([{"invalid:border-red-500 invalid:bg-red-100 valid:border-green-500 valid:bg-green-100":_.value},"appearance-none border-2 rounded w-36 m-0 py-2 px-3 text-gray-700 leading-tight focus:outline-none"]),placeholder:"Indtast post nr.",name:"zip",id:"zip",type:"text",minlength:"4",maxlength:"4",pattern:"[0-9]{4}",required:""},null,2),[[w,Y.value]])])]),e("div",Dt,[Ft,v(e("input",{"onUpdate:modelValue":l[8]||(l[8]=t=>O.value=t),class:h([{"invalid:border-red-500 invalid:bg-red-100 valid:border-green-500 valid:bg-green-100":_.value},"appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"]),placeholder:"Indtast e-mail",name:"email",id:"email",type:"email",required:""},null,2),[[w,O.value]])]),e("div",Ut,[qt,v(e("input",{"onUpdate:modelValue":l[9]||(l[9]=t=>U.value=t),class:h([{"invalid:border-red-500 invalid:bg-red-100 valid:border-green-500 valid:bg-green-100":_.value},"relative appearance-none border-2 w-52 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none"]),placeholder:"Indtast telefonnummer",name:"phone",id:"phone",type:"tel",pattern:"([0-9]{8})|([0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2})|([0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2})",required:"",maxlength:"11"},null,2),[[w,U.value]])])])):m("",!0)]),_:1}),e("fieldset",Nt,[jt,(o(),r(F,null,q(I,t=>e("div",{key:t,class:"inline-flex w-14 mr-2"},[v(e("input",{"onUpdate:modelValue":l[10]||(l[10]=B=>D.value=B),value:t,id:t,type:"radio",class:"peer appearance-none"},null,8,Rt),[[L,D.value]]),e("label",{for:t,class:"block cursor-pointer border-2 grayscale opacity-70 duration-200 hover:grayscale-0 hover:opacity-100 peer-checked:grayscale-0 peer-checked:opacity-100"},[e("img",{class:"h-8 object-cover",src:`../cards/${t}.jpg`},null,8,Xt)],8,Tt)])),64))])])]),e("div",Jt,[e("div",{style:k(`border: 2px solid ${s.value.colorSecondary}`),class:"flex flex-col gap-y-5 p-7 h-fit rounded-2xl"},[Zt,(o(!0),r(F,null,q(f(E).basket,t=>(o(),r("div",{key:t.name,class:"flex flex-col"},[e("div",Yt,[e("h3",Ot,u(t.amount)+"x "+u(t.name),1),e("p",Ht,u(t.amount*t.price)+" kr",1)]),e("div",Kt,[t.options?(o(),r("p",Wt,u(t.picked),1)):m("",!0),!t.comment&&!t.options?(o(),r("p",zt)):m("",!0),t.comment?(o(),r("p",Lt,'"'+u(t.comment)+'"',1)):m("",!0)])]))),128)),e("hr",{style:k(`border-color: ${s.value.colorSecondary}`)},null,4),e("p",null,[Gt,e("span",Pt,u(f(E).comment),1)]),e("hr",{style:k(`border-color: ${s.value.colorSecondary}`)},null,4),e("div",$t,[e("div",el,[tl,e("p",null,u(f(E).totalPrice)+" kr",1)]),e("div",ll,[sl,e("p",null,u(s.value.deliveryCost)+" kr",1)]),e("div",al,[ol,e("p",null,u(f(E).totalPrice+s.value.deliveryCost)+" kr",1)])])],4)])]),e("div",rl,[e("button",{onClick:l[11]||(l[11]=t=>f(M).back()),style:k(`color: ${s.value.colorSecondary}; border: 1px solid ${s.value.colorSecondary}`),class:"w-full max-w-sm sm:w-auto rounded py-2 px-4 bg-white hover:opacity-75 self-center duration-200"},"Tilbage til menuen",4),e("button",{onClick:oe,style:k(`background-color: ${s.value.colorSecondary}`),class:"w-full max-w-sm sm:w-auto rounded py-2 px-4 text-white hover:opacity-75 self-center duration-200"},"Forts\xE6t til betaling",4)])],4)):m("",!0),c.value?(o(),le(x,{key:2,onClosePayment:l[12]||(l[12]=t=>c.value=!1),restaurant:s.value,deliveryMethod:d.value,deliveryDay:C.value,deliveryTime:y.value},null,8,["restaurant","deliveryMethod","deliveryDay","deliveryTime"])):m("",!0)],2)}}};var cl=T(nl,[["__scopeId","data-v-d7d5c338"]]);export{cl as default};
