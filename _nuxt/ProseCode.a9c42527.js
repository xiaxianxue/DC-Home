import{d as y,r as l,aj as B,ak as k,x as w,b as s,c as p,e as m,g as v,w as x,X as _,J as f,T as S,n as C,a8 as $,p as I,i as P,k as h,t as z,f as N,Z as T}from"./entry.5c251649.js";const V=e=>(I("data-v-53b05571"),e=e(),P(),e),A=V(()=>m("span",{class:"sr-only"},"Copy to clipboard",-1)),M={class:"icon-wrapper"},R=y({__name:"ProseCodeCopyButton",props:{content:{type:String,default:""},show:{type:Boolean,default:!1}},setup(e){const n=e,a=l(),{copy:t}=B();k(a,()=>{o.value==="copied"&&(o.value="init")});const{prose:c}=w(),o=l("init"),g=b=>{t(n.content).then(()=>{o.value="copied"}).catch(u=>{console.warn("Couldn't copy to clipboard!",u)})};return(b,u)=>{const r=$;return s(),p("button",{ref_key:"copyButtonRef",ref:a,class:C([(e.show||o.value==="copied")&&"show"]),onClick:g},[A,m("span",M,[v(S,{name:"fade"},{default:x(()=>{var d,i;return[o.value==="copied"?(s(),_(r,{key:0,name:(d=f(c).copyButton)==null?void 0:d.iconCopied,size:"18",class:"copied"},null,8,["name"])):(s(),_(r,{key:1,name:(i=f(c).copyButton)==null?void 0:i.iconCopy,size:"18"},null,8,["name"]))]}),_:1})])],2)}}});const j=h(R,[["__scopeId","data-v-53b05571"]]),D={key:0,class:"filename"},E=y({__name:"ProseCode",props:{code:{type:String,default:""},language:{type:String,default:null},filename:{type:String,default:null},highlights:{type:Array,default:()=>[]}},setup(e){const n=l(!1);return(a,t)=>{const c=j;return s(),p("div",{class:C([[`highlight-${e.language}`],"prose-code"]),onMouseenter:t[0]||(t[0]=o=>n.value=!0),onMouseleave:t[1]||(t[1]=o=>n.value=!1)},[e.filename?(s(),p("span",D,z(e.filename),1)):N("",!0),T(a.$slots,"default",{},void 0,!0),v(c,{show:n.value,content:e.code,class:"copy-button"},null,8,["show","content"])],34)}}});const O=h(E,[["__scopeId","data-v-26b9c55e"]]);export{O as default};
