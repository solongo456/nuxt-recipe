import{u as _,_ as g}from"./ChqK7teD.js";import{_ as f}from"./75AFjQ93.js";import{u as v}from"./K_rauPzm.js";import{e as w,f as y,g as h,c as t,a as l,u as d,F as b,k,o as s,b as c,t as N,w as C,d as L}from"./D2e-0rb3.js";const R={key:0,class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8"},V={class:"flex flex-col py-6 px-4 flex-1"},B={class:"text-xl lg:text-2xl font-semibold mb-2"},F={class:"font-normal w-full bg-white/80 flex gap-8 text-lg lg:text-xl mb-4 mt-auto"},$={key:1,class:"text-lg text-gray-500"},E=w({__name:"saved",async setup(A){let o,n;const{savedRecipes:m}=v(),{data:p,error:S}=([o,n]=y(()=>_("https://dummyjson.com/recipes","$Z3LLkAQCq6")),o=await o,n(),o),i=h(()=>{var r;return((r=p.value)==null?void 0:r.recipes.filter(e=>m.value.includes(e.id)))||[]});return(r,e)=>{const u=g,x=f;return s(),t("main",null,[e[1]||(e[1]=l("p",{class:"text-lg lg:text-xl mb-8"},"Your favorite recipes",-1)),d(i).length?(s(),t("div",R,[(s(!0),t(b,null,k(d(i),a=>(s(),t("div",{key:a.id,class:"flex flex-col shadow rounded-md"},[c(u,{src:a.image,sizes:"xs:100vw sm:50vw lg:400px",format:"webp",densities:"x1",class:"rounded-md",alt:"Recipe image"},null,8,["src"]),l("div",V,[l("p",B,N(a.name),1),l("div",F,[c(x,{to:`/recipes/${a.id}`,class:"px-4 py-2 text-white self-start bg-dodgeroll-gold-400 rounded-md cursor-pointer"},{default:C(()=>e[0]||(e[0]=[L(" View ")])),_:2},1032,["to"])])])]))),128))])):(s(),t("p",$,"No saved recipes found."))])}}});export{E as default};
