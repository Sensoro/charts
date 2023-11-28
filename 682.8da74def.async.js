"use strict";(self.webpackChunk_sensoro_design_charts=self.webpackChunk_sensoro_design_charts||[]).push([[682],{30290:function(ct,ve,D){var pe=D(77117),E=D.n(pe),me=D(95530),n=D.n(me),Oe=D(50959),r=D(38016),f=D(11527),ge=["options"],H=function(ie){var X=ie.options,le=n()(ie,ge);return(0,f.jsx)(r.M,E()({options:E()({lineNumbers:void 0,minimap:{enabled:!1}},X!=null?X:{})},le))};ve.Z=H},17727:function(ct,ve,D){D.d(ve,{uN:function(){return At},$Q:function(){return It},sg:function(){return zt},oe:function(){return Ht},aC:function(){return kt},x1:function(){return Jt},by:function(){return to},Fk:function(){return io},he:function(){return co},WB:function(){return po}});var pe=D(27566),E=D.n(pe),me=D(77117),n=D.n(me),Oe=D(75651),r=D(32699),f=D(50959),ge=D(21320),H=D.n(ge),J=D(78357),ie=D(58381),X=D(39250),le=D(12644),dt=Object.defineProperty,Se=Object.getOwnPropertySymbols,ut=Object.prototype.hasOwnProperty,vt=Object.prototype.propertyIsEnumerable,ze=(b,e,t)=>e in b?dt(b,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):b[e]=t,pt=(b,e)=>{for(var t in e||(e={}))ut.call(e,t)&&ze(b,t,e[t]);if(Se)for(var t of Se(e))vt.call(e,t)&&ze(b,t,e[t]);return b};const yo=b=>React.createElement("svg",pt({width:8,height:8,xmlns:"http://www.w3.org/2000/svg"},b),React.createElement("title",null,"\u56FE\u4F8B/\u6298\u7EBF"),React.createElement("path",{d:"M4 2a2 2 0 0 1 1.741 1.015l-.009-.016L7 3a1 1 0 1 1 0 2H5.732l.01-.015a2 2 0 0 1-3.483 0L2.268 5H1a1 1 0 1 1 0-2h1.268l-.01.015A2 2 0 0 1 4 2Zm0 .8a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Z",fill:"#588BEE",fillRule:"evenodd"}));var We="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSI4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik00IDJhMiAyIDAgMCAxIDEuNzQxIDEuMDE1bC0uMDA5LS4wMTZMNyAzYTEgMSAwIDEgMSAwIDJINS43MzJsLjAxLS4wMTVhMiAyIDAgMCAxLTMuNDgzIDBMMi4yNjggNUgxYTEgMSAwIDEgMSAwLTJoMS4yNjhsLS4wMS4wMTVBMiAyIDAgMCAxIDQgMlptMCAuOGExLjIgMS4yIDAgMSAwIDAgMi40IDEuMiAxLjIgMCAwIDAgMC0yLjRaIiBmaWxsPSIjNTg4QkVFIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=",i=D(11527),Q="sen-legend",mt=["horizontal","alone"],gt=function(e){var t,o=e.legend,s=e.colors,a=(0,f.useMemo)(function(){var c;return(0,r.includes)(mt,(c=(0,r.get)(o,"direction","horizontal"))!==null&&c!==void 0?c:"horizontal")?"horizontal":"vertical"},[o]),l=(0,f.useMemo)(function(){var c;return(c=(0,r.get)(o,"type","svg"))!==null&&c!==void 0?c:"svg"},[o]),v=(0,f.useMemo)(function(){return o!=null&&o.legendItemGap?o.legendItemGap:a==="horizontal"?24:8},[o,a]),g=(0,f.useMemo)(function(){return(0,r.get)(o,"textStyle",{})},[o]);return(0,i.jsx)(X.Z,{direction:a,align:a==="vertical"?"baseline":"start",size:v,className:(0,J.A)(Q,(t={},H()(t,"".concat(Q,"-center"),a==="vertical"),H()(t,"".concat(Q,"-horizontal"),a==="horizontal"),t)),children:(0,r.map)((0,r.keys)(s),function(c,u){return(0,i.jsxs)("span",{className:"".concat(Q,"-item"),children:[l==="svg"?(0,i.jsx)(le.Z,{src:We,preProcessor:function(d){return d.replace(/fill=".*?"/g,'fill="'.concat(s[c],'"'))},style:{marginRight:8},width:8,height:8}):(0,i.jsx)("span",{className:"".concat(Q,"-box"),style:{background:s[c]}}),(0,i.jsx)("span",{className:"".concat(Q,"-name"),style:g,children:o!=null&&o.processData&&(0,r.isFunction)(o==null?void 0:o.processData)?o.processData(c,u):c})]},c)})})},fe=gt,ft=function(e){var t=e.text;return t?(0,i.jsx)("h3",{style:{fontSize:16,lineHeight:"24px",marginBottom:0},children:t}):null},Ge=ft,z="sen-charts",ht=function(e){var t,o=e.title,s=e.seriesField,a=e.legend,l=e.colorMap,v=e.timeRange,g=e.children,c=(0,f.useMemo)(function(){return!!s&&!!a&&!!l},[s,a,l]),u=(0,f.useMemo)(function(){var h={horizontal:!0,left:!1,right:!1,vertical:!1,alone:!1,top:!1,bottom:!1,box:!1};if(a&&!(0,r.isBoolean)(a)){var d=a,N=d.direction,w=N===void 0?"horizontal":N,j=d.position,p=j===void 0?"bottom":j,x=d.type,T=x===void 0?"svg":x;h.horizontal=!1,h[w]=!0,h[p]=!0,T==="box"&&(h.box=!0),h.vertical=h.left||h.right}return v&&h.horizontal&&(h.alone=!0,h.bottom=!0,h.horizontal=!1),h},[a,v]);return(0,i.jsxs)(i.Fragment,{children:[!o&&(!c||u.vertical)?null:(0,i.jsxs)("div",{className:(0,J.A)("".concat(z,"-header"),(t={},H()(t,"".concat(z,"-horizontal"),u.horizontal),H()(t,"".concat(z,"-alone-top"),u.alone&&u.top),H()(t,"".concat(z,"-timeRange"),v),t)),children:[v?(0,i.jsxs)("div",{className:"".concat(z,"-timeRange-wrap"),children:[(0,i.jsx)(Ge,{text:o}),(0,i.jsx)(ie.Z,n()({},v))]}):(0,i.jsx)(Ge,{text:o}),c&&(u.horizontal||u.alone&&u.top)&&(0,i.jsx)(fe,{legend:(0,r.isBoolean)(a)?{}:a,colors:l})]}),c&&u.vertical?(0,i.jsxs)("div",{style:{gap:u.vertical&&!(0,r.isBoolean)(a)?a==null?void 0:a.verticalGap:void 0},className:(0,J.A)("".concat(z,"-vertical"),H()({},"".concat(z,"-align-center"),u.box)),children:[(0,i.jsx)("div",{className:"".concat(z,"-canvas"),children:g}),(0,i.jsx)(fe,{legend:(0,r.isBoolean)(a)?{}:a,colors:l})]}):(0,i.jsx)("div",{className:"".concat(z,"-canvas"),children:g}),c&&u.alone&&u.bottom&&(0,i.jsx)("div",{className:"".concat(z,"-alone-bottom"),children:(0,i.jsx)(fe,{legend:(0,r.isBoolean)(a)?{}:a,colors:l})})]})},W=ht,Ze="#94c1ff",he="#588bee",xt="#005ab6",He="#46dfaa",xe="#17c28f",yt="#008c5d",Ue="#ffd45f",ye="#fdb844",Ct="#c08300",$e="#ff988b",Ce="#ee6159",Mt="#b0272b",Ke="#5de3ff",Me="#37c7e6",Dt="#0091af",ke="#ff8ac9",De="#de5193",bt="#a30861",Ye="#9df26a",be="#81d54f",jt="#489e10",Qe="#e495ff",je="#aa60e2",Tt="#732caa",P=[he,xe,ye,Ce,Me,De,be,je],Nt=[he,Ze,xe,He,ye,Ue,Ce,$e,Me,Ke,De,ke,be,Ye,je,Qe],Te=[he,Ze,xt,xe,He,yt,ye,Ue,Ct,Ce,$e,Mt,Me,Ke,Dt,De,ke,bt,be,Ye,jt,je,Qe,Tt],S="g2-tooltip",A=function(e){var t=e.point,o=e.tooltip,s=e.tooltipBox,a=e.showTooltipTitle,l=a===void 0?!0:a,v=e.colorMap,g=e.customsColors,c=e.seriesField,u=e.customContentData,h=e.showCrosshairs,d=h===void 0?!1:h,N=e.pie,w=e.ring,j=e.treemap,p=e.rose,x=e.radar,T=e.funnel,y=e.gauge,m={xAxis:p?null:{label:{style:{textAlign:"center",fill:"rgba(10, 27, 57, 0.25)",fontSize:12}},line:{style:{stroke:"#eceef0",fill:"none"}},tickLine:{style:{stroke:"#eceef0",length:4}}},yAxis:p?null:{label:{style:{fill:"rgba(10, 27, 57, 0.25)",fontSize:12}},grid:{line:{style:{stroke:"#f1f2f4",lineWidth:1,lineDash:[3,2]}}}},tooltip:{showCrosshairs:d,crosshairs:{type:"x",line:{style:{stroke:"#82b6ff",lineWidth:1,lineDash:[3,2],lineOpacity:1}}}}};return t&&Object.assign(m,{point:{size:2,shape:"circle",style:{fill:"white",stroke:"#588BEE",lineWidth:1,state:{active:{style:{stroke:"#588BEE"}}}}}}),o&&Object.assign(m,{tooltip:n()(n()({},m.tooltip),{},{domStyles:{"g2-tooltip":{boxShadow:"none",backgroundColor:"rgba(10, 27, 57, 0.8)",padding:"12px 12px 8px"},"g2-tooltip-title":{color:"#c2c7ce",fontSize:12,lineHeight:"20px",margin:"0 0 4px"},"g2-tooltip-name":{color:"#fff",whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden"},"g2-tooltip-value":{color:"#fff",fontFamily:"DIN Alternate",marginLeft:"16px"},"g2-tooltip-marker":{borderRadius:"2px",height:2},"g2-tooltip-list-item":{fontSize:12,lineHeight:"20px",maxWidth:"336px",margin:"0 0 4px"}},customContent:function(M,F){var R=u?u(F):F;return(0,i.jsxs)(i.Fragment,{children:[l&&(0,i.jsx)("div",{className:"".concat(S,"-title"),children:M}),(0,i.jsx)("ul",{className:"".concat(S,"-list"),children:(0,r.map)(R,function(L,I){var B=c?v==null?void 0:v[(0,r.get)(L,"data.".concat(c))]:P[0];return(0,i.jsxs)("li",{className:"".concat(S,"-list-item"),children:[(0,i.jsx)(le.Z,{src:We,preProcessor:function(_){return _.replace(/fill=".*?"/g,'fill="'.concat(B,'"'))},style:{marginRight:8},width:8,height:8}),(0,i.jsx)("span",{className:"".concat(S,"-name"),children:L.name}),(0,i.jsx)("span",{className:"".concat(S,"-value"),children:L.value})]},I)})})]})}})}),s&&Object.assign(m,{tooltip:n()(n()({},m.tooltip),{},{domStyles:{"g2-tooltip":{boxShadow:"none",backgroundColor:"rgba(10, 27, 57, 0.8)",padding:"12px 12px 8px"},"g2-tooltip-title":{color:"#c2c7ce",fontSize:12,lineHeight:"20px",margin:"0 0 4px"},"g2-tooltip-name":{color:"#fff",whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden"},"g2-tooltip-value":{color:"#fff",fontFamily:"DIN Alternate",marginLeft:"16px"},"g2-tooltip-marker":{borderRadius:"2px",height:8,width:8},"g2-tooltip-list-item":{fontSize:12,lineHeight:"20px",maxWidth:"336px",margin:"0 0 4px"}},customContent:function(M,F){var R=u?u(F):F;return(0,i.jsxs)(i.Fragment,{children:[l&&(0,i.jsx)("div",{className:"".concat(S,"-title"),children:M}),(0,i.jsx)("ul",{className:"".concat(S,"-list"),children:(0,r.map)(R,function(L,I){var B,$=(B=L.color)!==null&&B!==void 0?B:P[0];return(0,i.jsxs)("li",{className:"".concat(S,"-list-item"),children:[(0,i.jsx)("div",{className:"".concat(S,"-marker"),style:{background:$,width:8,height:8}}),(0,i.jsx)("span",{className:"".concat(S,"-name"),children:L.name}),(0,i.jsx)("span",{className:"".concat(S,"-value"),children:L.value})]},I)})})]})}})}),j&&Object.assign(m,{color:Array.from(Array(24),function(C,M){return Te[M%24]}),label:{style:{fill:"#fff",fontSize:12,opacity:1}},rectStyle:{lineWidth:2}}),N&&Object.assign(m,{theme:{colors10:Array.from(Array(10),function(C,M){return g!=null&&g.length?g[M%g.length]:P[M%8]})},interactions:[{type:"element-active"}],width:154,height:154,autoFit:!1,padding:0,label:void 0}),w&&Object.assign(m,{innerRadius:.6,statistic:{title:{style:{whiteSpace:"pre-wrap",overflow:"hidden",textOverflow:"ellipsis",fontSize:"12px",lineHeight:"12px",height:"12px",color:"rgba(10, 27, 57, 0.35)",transform:"translate(-50%, 8px)"}},content:{style:{fontSize:"24px",lineHeight:"24px",height:"24px",color:"#0a1b39",fontFamily:"DIN Alternate",transform:"translate(-50%, -100%)"}}}}),p&&Object.assign(m,{color:Array.from(Array(24),function(C,M){return Te[M%24]}),label:{style:{opacity:0}}}),x&&Object.assign(m,{xAxis:{line:null,tickLine:null,label:{offset:12,style:{fill:"rgba(10, 27, 57, 0.25)",fontSize:12}},grid:{line:{style:{stroke:"#f1f2f4",lineWidth:1,lineDash:[3,2]}}}},yAxis:{line:null,tickLine:null,label:{style:{fill:"rgba(10, 27, 57, 0.25)",fontSize:12}},grid:{line:{type:"line",style:{stroke:"#f1f2f4",lineWidth:1,lineDash:[3,2]}}}},area:{},point:{size:4}}),T&&Object.assign(m,{conversionTag:!1,funnelStyle:{stroke:"white",lineWidth:2},label:{style:{opacity:0}}}),y&&Object.assign(m,{tooltip:!1,startAngle:-Math.PI,endAngle:0,width:164,height:96,range:{color:[P[0],"#ECEEF0"]},indicator:{shape:"custom-gauge-indicator",pointer:{type:"line",style:{fill:P[0],stroke:P[0],lineWidth:2,lineCap:"round",zIndex:2}},pin:{style:{stroke:"#ECEEF0",lineWidth:1}}},statistic:{title:{offsetY:-12,style:{fontSize:"24px",lineHeight:"32px",color:"#0a1b39",fontFamily:"DIN Alternate",fontWeight:"bold"}},content:{offsetY:-12,style:{fontSize:"24px",lineHeight:"32px",color:"#0a1b39",fontFamily:"DIN Alternate",fontWeight:"bold"}}},axis:{label:null,tickLine:null,subTickLine:null}}),m},wt={small:P,middle:Nt,large:Te},Ft={small:8,middle:16,large:24},Co=function(e,t){var o={};return merge({},o,e,{data:t})},U=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"small",o=arguments.length>2?arguments[2]:void 0;return(0,r.reduce)((0,r.keys)(e),function(s,a,l){return s[a]=o?o[l%o.length]:wt[t][l%Ft[t]],s},e)},Et=function(e){var t=e.colorMap,o=e.seriesField,s=e.customContentData,a=e.legend,l=e.showTooltipTitle;return{basic:n()(n()({},A({point:!1,tooltip:!0,tooltipBox:E()(a)==="object"&&(a==null?void 0:a.type)==="box",showTooltipTitle:l,showCrosshairs:!0})),{},{legend:!1}),gradient:n()(n()({},A({point:!0,tooltip:!0,tooltipBox:E()(a)==="object"&&(a==null?void 0:a.type)==="box",showTooltipTitle:l,showCrosshairs:!0})),{},{areaStyle:function(){return{fill:"l(270) 0:#fff 1:rgba(43, 109, 229, 0.15)"}},line:{color:P[0]},legend:!1}),smooth:n()(n()({},A({point:!1,tooltip:!0,tooltipBox:E()(a)==="object"&&(a==null?void 0:a.type)==="box",showTooltipTitle:l,showCrosshairs:!0})),{},{areaStyle:function(){return{fill:"l(270) 0:#fff 1:rgba(43, 109, 229, 0.15)"}},line:{color:P[0]},smooth:!0,legend:!1}),stack:n()(n()({},A({tooltip:!0,legend:!0,tooltipBox:E()(a)==="object"&&(a==null?void 0:a.type)==="box",showTooltipTitle:l,colorMap:t,seriesField:o,customContentData:s,showCrosshairs:!0})),{},{legend:!1})}},Ve="sen-area",Rt=function(e){var t=e.config,o=t===void 0?{}:t,s=e.data,a=e.title,l=e.type,v=e.legend,g=e.timeRange,c=e.style,u=c===void 0?{}:c,h=e.className,d=h===void 0?"":h,N=e.empty,w=e.customContentData,j=e.tooltip,p=o.seriesField,x=(0,f.useMemo)(function(){return(0,r.map)(s!=null?s:o==null?void 0:o.data,function(C,M){return n()(n()({},C),{},{__index__:M})})},[s,o==null?void 0:o.data]),T=(0,f.useMemo)(function(){return p?(0,r.groupBy)(x,p):{}},[p,x]),y=(0,f.useMemo)(function(){var C=(0,r.transform)(T,function(M,F,R){return M[R]="",M},{});return U(C)},[T]),m=(0,r.merge)({},Et({colorMap:y,seriesField:p,customContentData:w,legend:v,showTooltipTitle:E()(j)==="object"?j.showTitle:!0})[l],o,{data:x});return(0,i.jsx)("div",{className:"".concat(Ve," ").concat(d),style:u,children:(0,i.jsx)(W,{title:a,seriesField:p,legend:v,colorMap:y,timeRange:g,children:N?(0,i.jsx)("div",{className:"".concat(Ve,"-empty"),children:typeof N=="boolean"?"\u6682\u65E0\u5185\u5BB9":N}):(0,i.jsx)(Oe.Z,n()({},m))})})},At=Rt,Lt=D(57024),Je="sen-bar",Bt=function(e){var t=e.config,o=t===void 0?{}:t,s=e.data,a=e.title,l=e.type,v=l===void 0?"basic":l,g=e.legend,c=e.timeRange,u=e.empty,h=e.customContentData,d=e.style,N=d===void 0?{}:d,w=e.className,j=w===void 0?"":w,p=e.tooltip,x=o.seriesField,T=(0,f.useMemo)(function(){return(0,r.map)(s!=null?s:o==null?void 0:o.data,function(F,R){return n()(n()({},F),{},{__index__:R})})},[s,o==null?void 0:o.data]),y=(0,f.useMemo)(function(){return x?(0,r.groupBy)(T,x):{}},[x,T]),m=(0,f.useMemo)(function(){var F=(0,r.transform)(y,function(R,L,I){return R[I]="",R},{});return U(F)},[y]),C={basic:n()(n()({},A({tooltip:!0,tooltipBox:E()(g)==="object"&&(g==null?void 0:g.type)==="box",showTooltipTitle:E()(p)==="object"?p.showTitle:!0})),{},{legend:!1})},M=(0,r.merge)({},C[v],o,{data:T});return(0,i.jsx)("div",{className:"".concat(Je," ").concat(j),style:N,children:(0,i.jsx)(W,{title:a,seriesField:x,legend:g,colorMap:m,timeRange:c,children:u?(0,i.jsx)("div",{className:"".concat(Je,"-empty"),children:typeof u=="boolean"?"\u6682\u65E0\u5185\u5BB9":u}):(0,i.jsx)(Lt.Z,n()({},M))})})},It=Bt,Pt=D(92020),Ot=function(e){var t=e.colorMap,o=e.seriesField,s=e.customContentData,a=e.legend,l=e.showTooltipTitle;return{basic:n()(n()({},A({tooltip:!0,tooltipBox:E()(a)==="object"&&(a==null?void 0:a.type)==="box",showTooltipTitle:l})),{},{columnWidthRatio:.4,legend:!1}),group:n()(n()({},A({tooltip:!0,tooltipBox:E()(a)==="object"&&(a==null?void 0:a.type)==="box",showTooltipTitle:l,colorMap:t,seriesField:o,customContentData:s})),{},{columnWidthRatio:.5,legend:!1}),bidirection:n()(n()({},A({tooltip:!0,tooltipBox:E()(a)==="object"&&(a==null?void 0:a.type)==="box",showTooltipTitle:l,colorMap:t,seriesField:o,customContentData:s})),{},{marginRatio:-1,columnWidthRatio:.8,legend:!1})}},Xe="sen-column",St=function(e){var t=e.config,o=e.data,s=e.title,a=e.type,l=e.legend,v=e.timeRange,g=e.style,c=g===void 0?{}:g,u=e.className,h=u===void 0?"":u,d=e.empty,N=e.tooltip,w=e.customContentData,j=t!=null?t:{},p=j.seriesField,x=(0,f.useMemo)(function(){return(0,r.map)(o!=null?o:t==null?void 0:t.data,function(C,M){return n()(n()({},C),{},{__index__:M})})},[o,t==null?void 0:t.data]),T=(0,f.useMemo)(function(){return p?(0,r.groupBy)(x,p):{}},[p,x]),y=(0,f.useMemo)(function(){var C=(0,r.transform)(T,function(M,F,R){return M[R]="",M},{});return U(C)},[T]),m=(0,r.merge)({},Ot({colorMap:y,seriesField:p,customContentData:w,legend:l,showTooltipTitle:E()(N)==="object"?N.showTitle:!0})[a],t,{data:x});return(0,i.jsx)("div",{className:"".concat(Xe," ").concat(h),style:c,children:(0,i.jsx)(W,{title:s,seriesField:p,legend:l,colorMap:y,timeRange:v,children:d?(0,i.jsx)("div",{className:"".concat(Xe,"-empty"),children:typeof d=="boolean"?"\u6682\u65E0\u5185\u5BB9":d}):(0,i.jsx)(Pt.Z,n()({},m))})})},zt=St,Wt=D(44455),Gt=function(e){var t=e.colorMap,o=e.seriesField,s=e.customContentData,a=e.legend,l=e.showTooltipTitle;return{basic:n()(n()({},A({funnel:!0,tooltip:!0,tooltipBox:E()(a)==="object"&&(a==null?void 0:a.type)==="box",showTooltipTitle:l})),{},{columnWidthRatio:.4,legend:!1}),compare:n()(n()({},A({funnel:!0,tooltip:!0,tooltipBox:E()(a)==="object"&&(a==null?void 0:a.type)==="box",showTooltipTitle:l,colorMap:t,seriesField:o,customContentData:s})),{},{columnWidthRatio:.5,legend:!1}),series:n()(n()({},A({funnel:!0,tooltip:!0,tooltipBox:E()(a)==="object"&&(a==null?void 0:a.type)==="box",showTooltipTitle:l,colorMap:t,seriesField:o,customContentData:s})),{},{marginRatio:-1,columnWidthRatio:.8,legend:!1})}},_e="sen-funnel",Zt=function(e){var t=e.config,o=e.data,s=e.title,a=e.type,l=a===void 0?"basic":a,v=e.legend,g=e.timeRange,c=e.style,u=c===void 0?{}:c,h=e.className,d=h===void 0?"":h,N=e.empty,w=e.tooltip,j=e.customContentData,p=t!=null?t:{},x=p.seriesField,T=p.xField,y=(0,f.useMemo)(function(){return(0,r.map)(o!=null?o:t==null?void 0:t.data,function(F,R){return n()(n()({},F),{},{__index__:R})})},[o,t==null?void 0:t.data]),m=(0,f.useMemo)(function(){return T?(0,r.groupBy)(y,T):{}},[T,y]),C=(0,f.useMemo)(function(){var F=(0,r.transform)(m,function(R,L,I){return R[I]="",R},{});return U(F)},[m]),M=(0,r.merge)({},Gt({colorMap:C,seriesField:x,customContentData:j,legend:v,showTooltipTitle:E()(w)==="object"?w.showTitle:!0})[l],t,{data:y});return(0,i.jsx)("div",{className:"".concat(_e," ").concat(d),style:u,children:(0,i.jsx)(W,{title:s,seriesField:T,legend:v,colorMap:C,timeRange:g,children:N?(0,i.jsx)("div",{className:"".concat(_e,"-empty"),children:typeof N=="boolean"?"\u6682\u65E0\u5185\u5BB9":N}):(0,i.jsx)(Wt.Z,n()({},M))})})},Ht=Zt,qe=D(93513),Ut=D(65452),$t=function(e){var t=e.colorMap,o=e.seriesField,s=e.customContentData;return{basic:n()(n()({},A({gauge:!0})),{},{legend:!1}),compare:n()(n()({},A({gauge:!0,colorMap:t,seriesField:o,customContentData:s})),{},{legend:!1}),series:n()(n()({},A({gauge:!0,colorMap:t,seriesField:o,customContentData:s})),{},{legend:!1})}},et="sen-gauge",Kt=function(e){var t=e.config,o=e.percent,s=e.title,a=e.type,l=a===void 0?"basic":a,v=e.legend,g=e.style,c=g===void 0?{}:g,u=e.className,h=u===void 0?"":u,d=e.empty,N=e.customContentData,w=qe.G2.Fj,j=qe.G2.Zr;w("point","custom-gauge-indicator",{draw:function(y,m){var C=y.customInfo,M=C.indicator,F=C.defaultColor,R=M.pointer,L=M.pin,I=m.addGroup(),B=this.parsePoint({x:0,y:0});if(R){var $=j.getAngle(y,this.coordinate),_=$.startAngle,Ne=$.endAngle,q=(_+Ne)/2,re=j.polarToCartesian(B.x,B.y,((t==null?void 0:t.height)||96)*.6,q+.01),ce=re.x,de=re.y,ee=j.polarToCartesian(B.x,B.y,((t==null?void 0:t.height)||96)*1.05,q+.01),ue=ee.x,Z=ee.y,we=[["M",ce,de],["L",ue,Z],["Z"]];I.addShape("path",{name:"pointer",attrs:n()({path:we,fill:F},R.style)})}if(L){var K=L.style||{},O=K.lineWidth,G=O===void 0?1:O,k=K.fill,Y=k===void 0?F:k,V=K.stroke,te=V===void 0?F:V,oe=K.r;I.addShape("circle",{name:"pin-outer",attrs:n()(n()({x:B.x,y:B.y},L.style),{},{fill:"transparent",r:((t==null?void 0:t.height)||96)*.6,lineWidth:G,stroke:te})}),I.addShape("circle",{name:"pin-inner",attrs:{x:B.x,y:B.y,r:oe,stroke:"transparent",fill:Y}})}return I}});var p=(0,f.useMemo)(function(){if(E()(v)==="object"){var T=v,y=T.labels,m=y===void 0?["\u6210\u529F","\u5931\u8D25"]:y,C={};return C[m[0]]=P[0],C[m[1]]="#ECEEF0",C}},[v]),x=(0,r.merge)({},$t({colorMap:p,customContentData:N,legend:v})[l],t,{data:o});return(0,i.jsx)("div",{className:"".concat(et," ").concat(h),style:c,children:(0,i.jsx)(W,{title:s,seriesField:"parcent",legend:v,colorMap:p,children:d?(0,i.jsx)("div",{className:"".concat(et,"-empty"),children:typeof d=="boolean"?"\u6682\u65E0\u5185\u5BB9":d}):(0,i.jsx)(Ut.Z,n()({},x))})})},kt=Kt,Yt=D(10071),Qt=function(e){var t=e.colorMap,o=e.seriesField,s=e.customContentData,a=e.legend,l=e.point,v=e.showTooltipTitle;return{basic:n()(n()({},A({point:l,tooltip:!0,tooltipBox:E()(a)==="object"&&(a==null?void 0:a.type)==="box",showTooltipTitle:v,colorMap:t,seriesField:o,customContentData:s,showCrosshairs:!0})),{},{color:function(c){return o?t==null?void 0:t[c[o]]:P[0]},legend:!1}),multiple:n()(n()({},A({point:l,tooltip:!0,tooltipBox:E()(a)==="object"&&(a==null?void 0:a.type)==="box",showTooltipTitle:v,colorMap:t,seriesField:o,customContentData:s,showCrosshairs:!0})),{},{color:function(c){return o?t==null?void 0:t[c[o]]:P[0]},legend:!1})}},tt="sen-line",Vt=function(e){var t=e.config,o=t===void 0?{}:t,s=e.type,a=s===void 0?"basic":s,l=e.data,v=e.title,g=e.legend,c=e.timeRange,u=e.customContentData,h=e.style,d=h===void 0?{}:h,N=e.className,w=N===void 0?"":N,j=e.empty,p=e.showPoint,x=p===void 0?!1:p,T=e.tooltip,y=o.seriesField,m=(0,f.useMemo)(function(){return l!=null?l:o==null?void 0:o.data},[l,o==null?void 0:o.data]),C=(0,f.useMemo)(function(){return y?(0,r.groupBy)(m,y):{}},[y,m]),M=(0,f.useMemo)(function(){var R=(0,r.transform)(C,function(L,I,B){return L[B]="",L},{});return U(R)},[C]),F=(0,f.useMemo)(function(){return(0,r.merge)({},Qt({colorMap:M,seriesField:y,customContentData:u,legend:g,point:x,showTooltipTitle:E()(T)==="object"?T.showTitle:!0})[a],o,{data:m})},[M,y]);return(0,i.jsx)("div",{className:"".concat(tt," ").concat(w),style:d,children:(0,i.jsx)(W,{title:v,seriesField:y,legend:g,colorMap:M,timeRange:c,children:j?(0,i.jsx)("div",{className:"".concat(tt,"-empty"),children:typeof j=="boolean"?"\u6682\u65E0\u5185\u5BB9":j}):(0,i.jsx)(Yt.Z,n()({},F))})})},Jt=Vt,Xt=D(28152),se=D.n(Xt),_t=D(40366),ot=/left:.+?;/,qt=function(e){var t=e.colorMap,o=e.colorField,s=e.customContentData,a=e.customsColors;return{pie:n()(n()({},A({pie:!0,tooltipBox:!0,showTooltipTitle:!1,colorMap:t,colorField:o,customContentData:s,customsColors:a})),{},{legend:!1}),ring:n()(n()({},A({pie:!0,ring:!0,tooltipBox:!0,showTooltipTitle:!1,colorMap:t,colorField:o,customContentData:s,customsColors:a})),{},{legend:!1})}},at="sen-pie",eo=function(e){var t=e.config,o=e.data,s=e.title,a=e.type,l=e.legend,v=e.timeRange,g=e.customsColors,c=e.style,u=c===void 0?{}:c,h=e.className,d=h===void 0?"":h,N=e.customContentData,w=e.empty,j=t!=null?t:{},p=j.colorField,x=(0,f.useMemo)(function(){return(0,r.map)(o!=null?o:t==null?void 0:t.data,function(O,G){return n()(n()({},O),{},{__index__:G})})},[o,t==null?void 0:t.data]),T=(0,f.useState)(0),y=se()(T,2),m=y[0],C=y[1],M=(0,f.useState)(0),F=se()(M,2),R=F[0],L=F[1],I=(0,f.useState)(154),B=se()(I,2),$=B[0],_=B[1],Ne=(0,f.useState)(!1),q=se()(Ne,2),re=q[0],ce=q[1],de=(0,f.useMemo)(function(){return(0,r.isEmpty)(x)?!1:a==="ring"&&(0,r.every)(x,function(O){return O.value===0})},[x]),ee=(0,f.useMemo)(function(){return p?(0,r.groupBy)(x,p):{}},[p,x]),ue=(0,f.useMemo)(function(){var O=(0,r.transform)(ee,function(G,k,Y){return G[Y]="",G},{});return U(O,void 0,g)},[ee]),Z=(0,r.merge)({},qt({colorMap:ue,colorField:p,customContentData:N,customsColors:g})[a],t,{data:x}),we=de?Z.data.slice(0,1):Z.data,K=Z.tooltip;return de&&(Z.theme={colors10:Array.from(Array(10),function(){return"#F6F7F8"})},K=!1),(0,f.useEffect)(function(){var O,G,k;if(l===!1){ce(!0);return}var Y=((O=(G=document.querySelector(".sen-pie"))===null||G===void 0?void 0:G.clientWidth)!==null&&O!==void 0?O:300)-48,V=(k=Z.height)!==null&&k!==void 0?k:154;if((0,r.get)(l,"direction")==="left"){var te,oe,Fe,Ee,ae=(te=document.querySelector("".concat(d?".".concat(d," .sen-legend"):".sen-pie .sen-legend")))===null||te===void 0?void 0:te.getAttribute("style");ae=(oe=ae)===null||oe===void 0?void 0:oe.replace("position: absolute;","").trim(),ae=(Fe=ae)===null||Fe===void 0?void 0:Fe.replace(ot,"").trim(),(Ee=document.querySelector("".concat(d?".".concat(d," .sen-legend"):".sen-pie .sen-legend")))===null||Ee===void 0||Ee.setAttribute("style","".concat("position: absolute; left: 0;"+ae||0)),L(Y-V),C(0)}else{var Re,Ae,Le,Be,Ie,Pe,mo=(Re=(Ae=document.querySelector("".concat(d?".".concat(d," .sen-legend"):".sen-pie .sen-legend")))===null||Ae===void 0?void 0:Ae.clientWidth)!==null&&Re!==void 0?Re:0,go=l===!0||!l?{verticalGap:48}:n()({verticalGap:48},l),st=go.verticalGap,rt=mo+st,fo=V+rt,ho=(Y-fo)/2,xo=ho+V+st,ne=(Le=document.querySelector("".concat(d?".".concat(d," .sen-legend"):".sen-pie .sen-legend")))===null||Le===void 0?void 0:Le.getAttribute("style");ne=(Be=ne)===null||Be===void 0?void 0:Be.replace("position: absolute;","").trim(),ne=(Ie=ne)===null||Ie===void 0?void 0:Ie.replace(ot,"").trim(),(Pe=document.querySelector("".concat(d?".".concat(d," .sen-legend"):".sen-pie .sen-legend")))===null||Pe===void 0||Pe.setAttribute("style","".concat("position: absolute; left: ".concat(xo,"px;").concat(ne||""))),C(rt),L(0)}_(Y),setTimeout(function(){ce(!0)},100)},[Z,l]),(0,i.jsx)("div",{className:(0,J.A)("".concat(at),"".concat(d)),style:u,children:(0,i.jsx)(W,{title:s,seriesField:p,legend:l===!1?!1:n()({direction:"right",type:"box"},E()(l)==="object"?l:{}),colorMap:ue,timeRange:v,children:re?w?(0,i.jsx)("div",{className:"".concat(at,"-empty"),children:typeof w=="boolean"?"\u6682\u65E0\u5185\u5BB9":w}):(0,i.jsx)(_t.Z,n()(n()({},Z),{},{width:$,padding:[0,m,0,R],data:we,tooltip:K,interactions:[]})):null})})},to=eo,oo=D(47444),ao=function(e){var t=e.colorMap,o=e.seriesField,s=e.customContentData,a=e.showTooltipTitle;return n()(n()({},A({radar:!0,tooltipBox:!0,showTooltipTitle:a,colorMap:t,seriesField:o,customContentData:s})),{},{legend:!1})},nt="sen-radar",no=function(e){var t=e.config,o=e.data,s=e.title,a=e.legend,l=e.timeRange,v=e.style,g=v===void 0?{}:v,c=e.className,u=c===void 0?"":c,h=e.customContentData,d=e.empty,N=e.tooltip,w=t!=null?t:{},j=w.seriesField,p=(0,f.useMemo)(function(){return(0,r.map)(o!=null?o:t==null?void 0:t.data,function(m,C){return n()(n()({},m),{},{__index__:C})})},[o,t==null?void 0:t.data]),x=(0,f.useMemo)(function(){return j?(0,r.groupBy)(p,j):{}},[j,p]),T=(0,f.useMemo)(function(){var m=(0,r.transform)(x,function(C,M,F){return C[F]="",C},{});return U(m)},[x]),y=(0,r.merge)({},ao({colorMap:T,seriesField:j,customContentData:h,showTooltipTitle:E()(N)==="object"?N.showTitle:!0}),t,{data:p});return(0,i.jsx)("div",{className:"".concat(nt," ").concat(u),style:g,children:(0,i.jsx)(W,{title:s,seriesField:j,legend:a===!1?!1:{direction:"vertical",verticalGap:56},colorMap:T,timeRange:l,children:d?(0,i.jsx)("div",{className:"".concat(nt,"-empty"),children:typeof d=="boolean"?"\u6682\u65E0\u5185\u5BB9":d}):(0,i.jsx)(oo.Z,n()({},y))})})},io=no,lo=D(27259),so=function(e){var t=e.colorMap,o=e.seriesField,s=e.customContentData;return n()(n()({},A({rose:!0,tooltipBox:!0,showTooltipTitle:!1,colorMap:t,seriesField:o,customContentData:s})),{},{legend:!1})},it="sen-rose",ro=function(e){var t=e.config,o=e.data,s=e.title,a=e.legend,l=e.timeRange,v=e.style,g=v===void 0?{}:v,c=e.className,u=c===void 0?"":c,h=e.customContentData,d=e.empty,N=t!=null?t:{},w=N.seriesField,j=(0,f.useMemo)(function(){return(0,r.map)(o!=null?o:t==null?void 0:t.data,function(y,m){return n()(n()({},y),{},{__index__:m})})},[o,t==null?void 0:t.data]),p=(0,f.useMemo)(function(){return w?(0,r.groupBy)(j,w):{}},[w,j]),x=(0,f.useMemo)(function(){var y=(0,r.transform)(p,function(m,C,M){return m[M]="",m},{});return U(y)},[p]),T=(0,r.merge)({},so({colorMap:x,seriesField:w,customContentData:h}),t,{data:j});return(0,i.jsx)("div",{className:"".concat(it," ").concat(u),style:g,children:(0,i.jsx)(W,{title:s,seriesField:w,legend:a===!1?!1:{direction:"vertical",type:"box"},colorMap:x,timeRange:l,children:d?(0,i.jsx)("div",{className:"".concat(it,"-empty"),children:typeof d=="boolean"?"\u6682\u65E0\u5185\u5BB9":d}):(0,i.jsx)(lo.Z,n()({},T))})})},co=ro,uo=D(95125),lt="sen-pie",vo=function(e){var t=e.title,o=e.config,s=o===void 0?{}:o,a=e.data,l=e.style,v=l===void 0?{}:l,g=e.className,c=g===void 0?"":g,u=e.empty,h=n()(n()({},A({tooltipBox:!0,showTooltipTitle:!1,treemap:!0})),{},{legend:!1}),d=(0,r.merge)({},h,s,{data:a});return(0,i.jsx)("div",{className:"".concat(lt," ").concat(c),style:v,children:(0,i.jsx)(W,{title:t,children:u?(0,i.jsx)("div",{className:"".concat(lt,"-empty"),children:typeof u=="boolean"?"\u6682\u65E0\u5185\u5BB9":u}):(0,i.jsx)(uo.Z,n()({},d))})})},po=vo}}]);