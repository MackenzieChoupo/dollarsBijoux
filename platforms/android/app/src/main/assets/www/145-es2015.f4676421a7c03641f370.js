(window.webpackJsonp=window.webpackJsonp||[]).push([[145],{"94vs":function(t,s,e){"use strict";e.r(s),e.d(s,"scopeCss",(function(){return W}));const o=")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)",c=new RegExp("(-shadowcsshost"+o,"gim"),n=new RegExp("(-shadowcsscontext"+o,"gim"),r=new RegExp("(-shadowcssslotted"+o,"gim"),a=/-shadowcsshost-no-combinator([^\s]*)/,l=[/::shadow/g,/::content/g],h=/-shadowcsshost/gim,i=/:host/gim,p=/::slotted/gim,d=/:host-context/gim,u=/\/\*\s*[\s\S]*?\*\//g,g=/\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g,m=/(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g,w=/([{}])/g,f=(t,s)=>{const e=_(t);let o=0;return e.escapedString.replace(m,(...t)=>{const c=t[2];let n="",r=t[4],a="";r&&r.startsWith("{%BLOCK%")&&(n=e.blocks[o++],r=r.substring("%BLOCK%".length+1),a="{");const l=s({selector:c,content:n});return`${t[1]}${l.selector}${t[3]}${a}${l.content}${r}`})},_=t=>{const s=t.split(w),e=[],o=[];let c=0,n=[];for(let r=0;r<s.length;r++){const t=s[r];"}"===t&&c--,c>0?n.push(t):(n.length>0&&(o.push(n.join("")),e.push("%BLOCK%"),n=[]),e.push(t)),"{"===t&&c++}return n.length>0&&(o.push(n.join("")),e.push("%BLOCK%")),{escapedString:e.join(""),blocks:o}},x=(t,s,e)=>t.replace(s,(...t)=>{if(t[2]){const s=t[2].split(","),o=[];for(let c=0;c<s.length;c++){const n=s[c].trim();if(!n)break;o.push(e("-shadowcsshost-no-combinator",n,t[3]))}return o.join(",")}return"-shadowcsshost-no-combinator"+t[3]}),b=(t,s,e)=>t+s.replace("-shadowcsshost","")+e,$=(t,s,e)=>s.indexOf("-shadowcsshost")>-1?b(t,s,e):t+s+e+", "+s+" "+t+e,O=(t,s,e,o,c)=>f(t,t=>{let c=t.selector,n=t.content;return"@"!==t.selector[0]?c=((t,s,e,o)=>t.split(",").map(t=>o&&t.indexOf("."+o)>-1?t.trim():((t,s)=>!(t=>(t=t.replace(/\[/g,"\\[").replace(/\]/g,"\\]"),new RegExp("^("+t+")([>\\s~+[.,{:][\\s\\S]*)?$","m")))(s).test(t))(t,s)?((t,s,e)=>{const o="."+(s=s.replace(/\[is=([^\]]*)\]/g,(t,...s)=>s[0])),c=t=>{let c=t.trim();if(!c)return"";if(t.indexOf("-shadowcsshost-no-combinator")>-1)c=((t,s,e)=>{if(h.lastIndex=0,h.test(t)){const s=`.${e}`;return t.replace(a,(t,e)=>e.replace(/([^:]*)(:*)(.*)/,(t,e,o,c)=>e+s+o+c)).replace(h,s+" ")}return s+" "+t})(t,s,e);else{const s=t.replace(h,"");if(s.length>0){const t=s.match(/([^:]*)(:*)(.*)/);t&&(c=t[1]+o+t[2]+t[3])}}return c},n=(t=>{const s=[];let e,o=0;return e=(t=t.replace(/(\[[^\]]*\])/g,(t,e)=>{const c=`__ph-${o}__`;return s.push(e),o++,c})).replace(/(:nth-[-\w]+)(\([^)]+\))/g,(t,e,c)=>{const n=`__ph-${o}__`;return s.push(c),o++,e+n}),{content:e,placeholders:s}})(t);let r,l="",i=0;const p=/( |>|\+|~(?!=))\s*/g;let d=!((t=n.content).indexOf("-shadowcsshost-no-combinator")>-1);for(;null!==(r=p.exec(t));){const s=r[1],e=t.slice(i,r.index).trim();d=d||e.indexOf("-shadowcsshost-no-combinator")>-1,l+=`${d?c(e):e} ${s} `,i=p.lastIndex}const u=t.substring(i);return d=d||u.indexOf("-shadowcsshost-no-combinator")>-1,l+=d?c(u):u,g=n.placeholders,l.replace(/__ph-(\d+)__/g,(t,s)=>g[+s]);var g})(t,s,e).trim():t.trim()).join(", "))(t.selector,s,e,o):(t.selector.startsWith("@media")||t.selector.startsWith("@supports")||t.selector.startsWith("@page")||t.selector.startsWith("@document"))&&(n=O(t.content,s,e,o)),{selector:c.replace(/\s{2,}/g," ").trim(),content:n}}),W=(t,s,e)=>{const o=s+"-h",a=s+"-s",h=t.match(g)||[];t=(t=>t.replace(u,""))(t);const m=[];if(e){const s=t=>{const s=`/*!@___${m.length}___*/`;return m.push({placeholder:s,comment:`/*!@${t.selector}*/`}),t.selector=s+t.selector,t};t=f(t,t=>"@"!==t.selector[0]?s(t):t.selector.startsWith("@media")||t.selector.startsWith("@supports")||t.selector.startsWith("@page")||t.selector.startsWith("@document")?(t.content=f(t.content,s),t):t)}const w=((t,s,e,o,a)=>(t=(t=>l.reduce((t,s)=>t.replace(s," "),t))(t=((t,s)=>t.replace(r,(...t)=>{if(t[2]){const e=t[2].trim();return"."+s+" > "+e+t[3]}return"-shadowcsshost-no-combinator"+t[3]}))(t=(t=>x(t,n,$))(t=(t=>x(t,c,b))(t=t.replace(d,"-shadowcsscontext").replace(i,"-shadowcsshost").replace(p,"-shadowcssslotted"))),o)),s&&(t=O(t,s,e,o)),(t=(t=t.replace(/-shadowcsshost-no-combinator/g,`.${e}`)).replace(/>\s*\*\s+([^{, ]+)/gm," $1 ")).trim()))(t,s,o,a);return t=[w,...h].join("\n"),e&&m.forEach(({placeholder:s,comment:e})=>{t=t.replace(s,e)}),t}}}]);