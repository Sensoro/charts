"use strict";(self.webpackChunk_sensoro_design_charts=self.webpackChunk_sensoro_design_charts||[]).push([[746],{89057:function(ht,Ne,b){var Fe=b(77117),A=b.n(Fe),Re=b(95530),n=b.n(Re),He=b(50959),s=b(38016),v=b(11527),Ee=["options"],q=function(Me){var he=Me.options,be=n()(Me,Ee);return(0,v.jsx)(s.M,A()({options:A()({lineNumbers:void 0,minimap:{enabled:!1}},he!=null?he:{})},be))};Ne.Z=q},35935:function(ht,Ne,b){b.d(Ne,{uN:function(){return zt},$Q:function(){return $t},sg:function(){return kt},oe:function(){return Jt},aC:function(){return eo},x1:function(){return no},by:function(){return co},Fk:function(){return go},he:function(){return xo},WB:function(){return bo}});var Fe=b(27566),A=b.n(Fe),Re=b(77117),n=b.n(Re),He=b(75651),s=b(32699),v=b(50959),Ee=b(21320),q=b.n(Ee),fe=b(78357),Me=b(58381),he=b(39250),be=b(12644),yt=Object.defineProperty,Ke=Object.getOwnPropertySymbols,xt=Object.prototype.hasOwnProperty,Ct=Object.prototype.propertyIsEnumerable,Ue=(T,e,t)=>e in T?yt(T,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):T[e]=t,Mt=(T,e)=>{for(var t in e||(e={}))xt.call(e,t)&&Ue(T,t,e[t]);if(Ke)for(var t of Ke(e))Ct.call(e,t)&&Ue(T,t,e[t]);return T};const To=T=>React.createElement("svg",Mt({width:8,height:8,xmlns:"http://www.w3.org/2000/svg"},T),React.createElement("title",null,"\u56FE\u4F8B/\u6298\u7EBF"),React.createElement("path",{d:"M4 2a2 2 0 0 1 1.741 1.015l-.009-.016L7 3a1 1 0 1 1 0 2H5.732l.01-.015a2 2 0 0 1-3.483 0L2.268 5H1a1 1 0 1 1 0-2h1.268l-.01.015A2 2 0 0 1 4 2Zm0 .8a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Z",fill:"#588BEE",fillRule:"evenodd"}));var ke="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSI4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik00IDJhMiAyIDAgMCAxIDEuNzQxIDEuMDE1bC0uMDA5LS4wMTZMNyAzYTEgMSAwIDEgMSAwIDJINS43MzJsLjAxLS4wMTVhMiAyIDAgMCAxLTMuNDgzIDBMMi4yNjggNUgxYTEgMSAwIDEgMSAwLTJoMS4yNjhsLS4wMS4wMTVBMiAyIDAgMCAxIDQgMlptMCAuOGExLjIgMS4yIDAgMSAwIDAgMi40IDEuMiAxLjIgMCAwIDAgMC0yLjRaIiBmaWxsPSIjNTg4QkVFIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=",i=b(11527),ue="sen-charts-legend",bt=["horizontal","alone"],jt=function(e){var t,o=e.legend,c=e.colors,a=(0,v.useMemo)(function(){var r;return(0,s.includes)(bt,(r=(0,s.get)(o,"direction","horizontal"))!==null&&r!==void 0?r:"horizontal")?"horizontal":"vertical"},[o]),l=(0,v.useMemo)(function(){var r;return(r=(0,s.get)(o,"type","svg"))!==null&&r!==void 0?r:"svg"},[o]),u=(0,v.useMemo)(function(){return o!=null&&o.legendItemGap?o.legendItemGap:a==="horizontal"?24:8},[o,a]),g=(0,v.useMemo)(function(){return o!=null&&o.lineGap?a==="horizontal"?{rowGap:o.lineGap}:{columnGap:o.lineGap}:{}},[o]),f=(0,v.useMemo)(function(){return(0,s.get)(o,"textStyle",{})},[o]);return(0,i.jsx)(he.Z,{direction:a,align:a==="vertical"?"baseline":"start",size:u,className:(0,fe.A)(ue,(t={},q()(t,"".concat(ue,"-horizontal"),a==="horizontal"),q()(t,"".concat(ue,"-center"),a==="vertical"&&!(o!=null&&o.lineGap)),t)),style:o.height?n()({height:o.height},g):g,children:(0,s.map)((0,s.keys)(c),function(r,h){return(0,i.jsxs)("span",{className:"".concat(ue,"-item"),children:[l==="svg"?(0,i.jsx)(be.Z,{src:ke,preProcessor:function(N){return N.replace(/fill=".*?"/g,'fill="'.concat(c[r],'"'))},style:{marginRight:8},width:8,height:8}):(0,i.jsx)("span",{className:"".concat(ue,"-box"),style:{background:c[r]}}),(0,i.jsx)("span",{className:"".concat(ue,"-name"),style:f,children:o!=null&&o.processData&&(0,s.isFunction)(o==null?void 0:o.processData)?o.processData(r,h):r})]},r)})})},Ae=jt,Dt=function(e){var t=e.text;return t?(0,i.jsx)("h3",{style:{fontSize:16,lineHeight:"24px",marginBottom:0},children:t}):null},Ye=Dt,U="sen-charts",Tt=function(e){var t,o=e.title,c=e.seriesField,a=e.legend,l=e.colorMap,u=e.timeRange,g=e.children,f=(0,v.useMemo)(function(){return!!c&&!!a&&!!l},[c,a,l]),r=(0,v.useMemo)(function(){var h={horizontal:!0,left:!1,right:!1,vertical:!1,alone:!1,top:!1,bottom:!1,box:!1};if(a&&!(0,s.isBoolean)(a)){var d=a,N=d.direction,D=N===void 0?"horizontal":N,R=d.position,y=R===void 0?"bottom":R,M=d.type,C=M===void 0?"svg":M;h.horizontal=!1,h[D]=!0,h[y]=!0,C==="box"&&(h.box=!0),h.vertical=h.left||h.right}return u&&h.horizontal&&(h.alone=!0,h.bottom=!0,h.horizontal=!1),h},[a,u]);return(0,i.jsxs)(i.Fragment,{children:[!o&&(!f||r.vertical)?null:(0,i.jsxs)("div",{className:(0,fe.A)("".concat(U,"-header"),(t={},q()(t,"".concat(U,"-horizontal"),r.horizontal),q()(t,"".concat(U,"-alone-top"),r.alone&&r.top),q()(t,"".concat(U,"-timeRange"),u),t)),children:[u?(0,i.jsxs)("div",{className:"".concat(U,"-timeRange-wrap"),children:[(0,i.jsx)(Ye,{text:o}),(0,i.jsx)(Me.Z,n()({},u))]}):(0,i.jsx)(Ye,{text:o}),f&&(r.horizontal||r.alone&&r.top)&&(0,i.jsx)(Ae,{legend:(0,s.isBoolean)(a)?{}:a,colors:l})]}),f&&r.vertical?(0,i.jsxs)("div",{style:{gap:r.vertical&&!(0,s.isBoolean)(a)?a==null?void 0:a.verticalGap:void 0},className:(0,fe.A)("".concat(U,"-vertical"),q()({},"".concat(U,"-align-center"),r.box)),children:[(0,i.jsx)("div",{className:"".concat(U,"-canvas"),children:g}),(0,i.jsx)(Ae,{legend:(0,s.isBoolean)(a)?{}:a,colors:l})]}):(0,i.jsx)("div",{className:"".concat(U,"-canvas"),children:g}),f&&r.alone&&r.bottom&&(0,i.jsx)("div",{className:"".concat(U,"-alone-bottom"),children:(0,i.jsx)(Ae,{legend:(0,s.isBoolean)(a)?{}:a,colors:l})})]})},k=Tt,Qe="#94c1ff",Le="#588bee",wt="#005ab6",Ve="#46dfaa",Se="#17c28f",Nt="#008c5d",Je="#ffd45f",Pe="#fdb844",Ft="#c08300",Xe="#ff988b",Ie="#ee6159",Rt="#b0272b",_e="#5de3ff",Be="#37c7e6",Et="#0091af",qe="#ff8ac9",Oe="#de5193",At="#a30861",et="#9df26a",We="#81d54f",Lt="#489e10",tt="#e495ff",ze="#aa60e2",St="#732caa",z=[Le,Se,Pe,Ie,Be,Oe,We,ze],Pt=[Le,Qe,Se,Ve,Pe,Je,Ie,Xe,Be,_e,Oe,qe,We,et,ze,tt],Ge=[Le,Qe,wt,Se,Ve,Nt,Pe,Je,Ft,Ie,Xe,Rt,Be,_e,Et,Oe,qe,At,We,et,Lt,ze,tt,St],K="g2-tooltip",L=function(e){var t=e.point,o=e.tooltip,c=e.tooltipBox,a=e.showTooltipTitle,l=a===void 0?!0:a,u=e.colorMap,g=e.customsColors,f=e.seriesField,r=e.customContentData,h=e.showCrosshairs,d=h===void 0?!1:h,N=e.pie,D=e.ring,R=e.treemap,y=e.rose,M=e.radar,C=e.funnel,w=e.gauge,E=e.height,m={xAxis:y?null:{label:{style:{textAlign:"center",fill:"rgba(10, 27, 57, 0.25)",fontSize:12}},line:{style:{stroke:"#eceef0",fill:"none"}},tickLine:{style:{stroke:"#eceef0",length:4}}},yAxis:y?null:{label:{style:{fill:"rgba(10, 27, 57, 0.25)",fontSize:12}},grid:{line:{style:{stroke:"#f1f2f4",lineWidth:1,lineDash:[3,2]}}}},tooltip:{showCrosshairs:d,crosshairs:{type:"x",line:{style:{stroke:"#82b6ff",lineWidth:1,lineDash:[3,2],lineOpacity:1}}}}};return t&&Object.assign(m,{point:{size:2,shape:"circle",style:function(x){return{fill:"white",stroke:f?u==null?void 0:u[(0,s.get)(x,"".concat(f))]:"#588BEE",lineWidth:1}}}}),o&&Object.assign(m,{tooltip:n()(n()({},m.tooltip),{},{domStyles:{"g2-tooltip":{boxShadow:"none",backgroundColor:"rgba(10, 27, 57, 0.8)",padding:"12px 12px 8px"},"g2-tooltip-title":{color:"#c2c7ce",fontSize:12,lineHeight:"20px",margin:"0 0 4px"},"g2-tooltip-name":{color:"#fff",whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden"},"g2-tooltip-value":{color:"#fff",fontFamily:"DIN Alternate",marginLeft:"16px"},"g2-tooltip-marker":{borderRadius:"2px",height:2},"g2-tooltip-list-item":{fontSize:12,lineHeight:"20px",maxWidth:"336px",margin:"0 0 4px"}},customContent:function(x,F){var S=r?r(F):F;return(0,i.jsxs)(i.Fragment,{children:[l&&(0,i.jsx)("div",{className:"".concat(K,"-title"),children:x}),(0,i.jsx)("ul",{className:"".concat(K,"-list"),children:(0,s.map)(S,function(p,I){var H=f?u==null?void 0:u[(0,s.get)(p,"data.".concat(f))]:z[0];return(0,i.jsxs)("li",{className:"".concat(K,"-list-item"),children:[(0,i.jsx)(be.Z,{src:ke,preProcessor:function(G){return G.replace(/fill=".*?"/g,'fill="'.concat(H,'"'))},style:{marginRight:8},width:8,height:8}),(0,i.jsx)("span",{className:"".concat(K,"-name"),children:p.name}),(0,i.jsx)("span",{className:"".concat(K,"-value"),children:p.value})]},I)})})]})}})}),c&&Object.assign(m,{tooltip:n()(n()({},m.tooltip),{},{domStyles:{"g2-tooltip":{boxShadow:"none",backgroundColor:"rgba(10, 27, 57, 0.8)",padding:"12px 12px 8px"},"g2-tooltip-title":{color:"#c2c7ce",fontSize:12,lineHeight:"20px",margin:"0 0 4px"},"g2-tooltip-name":{color:"#fff",whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden"},"g2-tooltip-value":{color:"#fff",fontFamily:"DIN Alternate",marginLeft:"16px"},"g2-tooltip-marker":{borderRadius:"2px",height:8,width:8},"g2-tooltip-list-item":{fontSize:12,lineHeight:"20px",maxWidth:"336px",margin:"0 0 4px"}},customContent:function(x,F){var S=r?r(F):F;return(0,i.jsxs)(i.Fragment,{children:[l&&(0,i.jsx)("div",{className:"".concat(K,"-title"),children:x}),(0,i.jsx)("ul",{className:"".concat(K,"-list"),children:(0,s.map)(S,function(p,I){var H,Q=(H=p.color)!==null&&H!==void 0?H:z[0];return(0,i.jsxs)("li",{className:"".concat(K,"-list-item"),children:[(0,i.jsx)("div",{className:"".concat(K,"-marker"),style:{background:Q,width:8,height:8}}),(0,i.jsx)("span",{className:"".concat(K,"-name"),children:p.name}),(0,i.jsx)("span",{className:"".concat(K,"-value"),children:p.value})]},I)})})]})}})}),R&&Object.assign(m,{color:Array.from(Array(24),function(j,x){return Ge[x%24]}),label:{style:{fill:"#fff",fontSize:12,opacity:1}},rectStyle:{lineWidth:2}}),N&&Object.assign(m,{theme:{colors10:Array.from(Array(10),function(j,x){return g!=null&&g.length?g[x%g.length]:z[x%8]})},interactions:[],width:154,height:154,autoFit:!1,padding:0,label:void 0}),D&&Object.assign(m,{innerRadius:.6,statistic:{title:{style:{whiteSpace:"pre-wrap",overflow:"hidden",textOverflow:"ellipsis",fontSize:"12px",lineHeight:"12px",height:"12px",color:"rgba(10, 27, 57, 0.35)",transform:"translate(-50%, 8px)"}},content:{style:{fontSize:"24px",lineHeight:"24px",height:"24px",color:"#0a1b39",fontFamily:"DIN Alternate",transform:"translate(-50%, -100%)"}}}}),y&&Object.assign(m,{height:204,interactions:[],innerRadius:8/E,color:Array.from(Array(24),function(j,x){return Ge[x%24]}),label:{style:{opacity:0}}}),M&&Object.assign(m,{xAxis:{line:null,tickLine:null,label:{offset:12,style:{fill:"rgba(10, 27, 57, 0.25)",fontSize:12}},grid:{line:{style:{stroke:"#f1f2f4",lineWidth:1,lineDash:[3,2]}}}},yAxis:{line:null,tickLine:null,label:{style:{fill:"rgba(10, 27, 57, 0.25)",fontSize:12}},grid:{line:{type:"line",style:{stroke:"#f1f2f4",lineWidth:1,lineDash:[3,2]}}}},area:{},point:{size:2}}),C&&Object.assign(m,{conversionTag:!1,funnelStyle:{stroke:"white",lineWidth:2},label:{style:{opacity:0}}}),w&&Object.assign(m,{tooltip:!1,startAngle:-1.25*Math.PI,endAngle:.25*Math.PI,height:140,range:{color:[z[0],"#ECEEF0"]},indicator:{shape:"custom-gauge-indicator",pointer:{type:"line",style:{fill:z[0],stroke:z[0],lineWidth:2,lineCap:"round",zIndex:2}},pin:{style:{stroke:"#ECEEF0",lineWidth:8}}},statistic:{title:{offsetY:-12,formatter:function(x){return"".concat(x.percent*100,"%")},style:{fontSize:"24px",lineHeight:"24px",color:"#0a1b39",fontFamily:"DIN Alternate",fontWeight:"bold"}},content:{offsetY:-12,formatter:function(x){return"".concat(x.percent*100,"%")},style:{fontSize:"24px",lineHeight:"24px",color:"#0a1b39",fontFamily:"DIN Alternate",fontWeight:"bold"}}},axis:{label:null,tickLine:null,subTickLine:null}}),m},It={small:z,middle:Pt,large:Ge},Bt={small:8,middle:16,large:24},wo=function(e,t){var o={};return merge({},o,e,{data:t})},ee=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"small",o=arguments.length>2?arguments[2]:void 0;return(0,s.reduce)((0,s.keys)(e),function(c,a,l){return c[a]=o?o[l%o.length]:It[t][l%Bt[t]],c},e)},Ot=function(e){var t=e.colorMap,o=e.seriesField,c=e.customContentData,a=e.legend,l=e.showTooltipTitle;return{basic:n()(n()({},L({point:!1,tooltip:!0,tooltipBox:A()(a)==="object"&&(a==null?void 0:a.type)==="box",showTooltipTitle:l,showCrosshairs:!0})),{},{legend:!1}),gradient:n()(n()({},L({point:!0,tooltip:!0,tooltipBox:A()(a)==="object"&&(a==null?void 0:a.type)==="box",showTooltipTitle:l,showCrosshairs:!0})),{},{areaStyle:function(){return{fill:"l(270) 0:#fff 1:rgba(43, 109, 229, 0.15)"}},line:{color:z[0]},legend:!1}),smooth:n()(n()({},L({point:!1,tooltip:!0,tooltipBox:A()(a)==="object"&&(a==null?void 0:a.type)==="box",showTooltipTitle:l,showCrosshairs:!0})),{},{areaStyle:function(){return{fill:"l(270) 0:#fff 1:rgba(43, 109, 229, 0.15)"}},line:{color:z[0]},smooth:!0,legend:!1}),stack:n()(n()({},L({tooltip:!0,legend:!0,tooltipBox:A()(a)==="object"&&(a==null?void 0:a.type)==="box",showTooltipTitle:l,colorMap:t,seriesField:o,customContentData:c,showCrosshairs:!0})),{},{legend:!1})}},ot="sen-area",Wt=function(e){var t=e.config,o=t===void 0?{}:t,c=e.data,a=e.title,l=e.type,u=e.legend,g=e.timeRange,f=e.style,r=f===void 0?{}:f,h=e.className,d=h===void 0?"":h,N=e.empty,D=e.customContentData,R=e.tooltip,y=o.seriesField,M=(0,v.useMemo)(function(){return(0,s.map)(c!=null?c:o==null?void 0:o.data,function(m,j){return n()(n()({},m),{},{__index__:j})})},[c,o==null?void 0:o.data]),C=(0,v.useMemo)(function(){return y?(0,s.groupBy)(M,y):{}},[y,M]),w=(0,v.useMemo)(function(){var m=(0,s.transform)(C,function(j,x,F){return j[F]="",j},{});return ee(m)},[C]),E=(0,s.merge)({},Ot({colorMap:w,seriesField:y,customContentData:D,legend:u,showTooltipTitle:A()(R)==="object"?R.showTitle:!0})[l],o,{data:M});return(0,i.jsx)("div",{className:"".concat(ot," ").concat(d),style:r,children:(0,i.jsx)(k,{title:a,seriesField:y,legend:u,colorMap:w,timeRange:g,children:N?(0,i.jsx)("div",{className:"".concat(ot,"-empty"),children:typeof N=="boolean"?"\u6682\u65E0\u5185\u5BB9":N}):(0,i.jsx)(He.Z,n()({},E))})})},zt=Wt,Gt=b(57024),at="sen-bar",Zt=function(e){var t=e.config,o=t===void 0?{}:t,c=e.data,a=e.title,l=e.type,u=l===void 0?"basic":l,g=e.legend,f=e.timeRange,r=e.empty,h=e.customContentData,d=e.style,N=d===void 0?{}:d,D=e.className,R=D===void 0?"":D,y=e.tooltip,M=o.seriesField,C=(0,v.useMemo)(function(){return(0,s.map)(c!=null?c:o==null?void 0:o.data,function(x,F){return n()(n()({},x),{},{__index__:F})})},[c,o==null?void 0:o.data]),w=(0,v.useMemo)(function(){return M?(0,s.groupBy)(C,M):{}},[M,C]),E=(0,v.useMemo)(function(){var x=(0,s.transform)(w,function(F,S,p){return F[p]="",F},{});return ee(x)},[w]),m={basic:n()(n()({},L({tooltip:!0,tooltipBox:A()(g)==="object"&&(g==null?void 0:g.type)==="box",showTooltipTitle:A()(y)==="object"?y.showTitle:!0})),{},{legend:!1})},j=(0,s.merge)({},m[u],o,{data:C});return(0,i.jsx)("div",{className:"".concat(at," ").concat(R),style:N,children:(0,i.jsx)(k,{title:a,seriesField:M,legend:g,colorMap:E,timeRange:f,children:r?(0,i.jsx)("div",{className:"".concat(at,"-empty"),children:typeof r=="boolean"?"\u6682\u65E0\u5185\u5BB9":r}):(0,i.jsx)(Gt.Z,n()({},j))})})},$t=Zt,Ht=b(92020),Kt=function(e){var t=e.colorMap,o=e.seriesField,c=e.customContentData,a=e.legend,l=e.showTooltipTitle;return{basic:n()(n()({},L({tooltip:!0,tooltipBox:A()(a)==="object"&&(a==null?void 0:a.type)==="box",showTooltipTitle:l})),{},{columnWidthRatio:.4,legend:!1}),group:n()(n()({},L({tooltip:!0,tooltipBox:A()(a)==="object"&&(a==null?void 0:a.type)==="box",showTooltipTitle:l,colorMap:t,seriesField:o,customContentData:c})),{},{columnWidthRatio:.5,legend:!1}),bidirection:n()(n()({},L({tooltip:!0,tooltipBox:A()(a)==="object"&&(a==null?void 0:a.type)==="box",showTooltipTitle:l,colorMap:t,seriesField:o,customContentData:c})),{},{marginRatio:-1,columnWidthRatio:.8,legend:!1})}},nt="sen-column",Ut=function(e){var t=e.config,o=e.data,c=e.title,a=e.type,l=e.legend,u=e.timeRange,g=e.style,f=g===void 0?{}:g,r=e.className,h=r===void 0?"":r,d=e.empty,N=e.tooltip,D=e.customContentData,R=t!=null?t:{},y=R.seriesField,M=(0,v.useMemo)(function(){return(0,s.map)(o!=null?o:t==null?void 0:t.data,function(m,j){return n()(n()({},m),{},{__index__:j})})},[o,t==null?void 0:t.data]),C=(0,v.useMemo)(function(){return y?(0,s.groupBy)(M,y):{}},[y,M]),w=(0,v.useMemo)(function(){var m=(0,s.transform)(C,function(j,x,F){return j[F]="",j},{});return ee(m)},[C]),E=(0,s.merge)({},Kt({colorMap:w,seriesField:y,customContentData:D,legend:l,showTooltipTitle:A()(N)==="object"?N.showTitle:!0})[a],t,{data:M});return(0,i.jsx)("div",{className:"".concat(nt," ").concat(h),style:f,children:(0,i.jsx)(k,{title:c,seriesField:y,legend:l,colorMap:w,timeRange:u,children:d?(0,i.jsx)("div",{className:"".concat(nt,"-empty"),children:typeof d=="boolean"?"\u6682\u65E0\u5185\u5BB9":d}):(0,i.jsx)(Ht.Z,n()({},E))})})},kt=Ut,Yt=b(44455),Qt=function(e){var t=e.colorMap,o=e.seriesField,c=e.customContentData,a=e.legend,l=e.showTooltipTitle;return{basic:n()(n()({},L({funnel:!0,tooltip:!0,tooltipBox:A()(a)==="object"&&(a==null?void 0:a.type)==="box",showTooltipTitle:l})),{},{columnWidthRatio:.4,legend:!1}),compare:n()(n()({},L({funnel:!0,tooltip:!0,tooltipBox:A()(a)==="object"&&(a==null?void 0:a.type)==="box",showTooltipTitle:l,colorMap:t,seriesField:o,customContentData:c})),{},{columnWidthRatio:.5,legend:!1}),series:n()(n()({},L({funnel:!0,tooltip:!0,tooltipBox:A()(a)==="object"&&(a==null?void 0:a.type)==="box",showTooltipTitle:l,colorMap:t,seriesField:o,customContentData:c})),{},{marginRatio:-1,columnWidthRatio:.8,legend:!1})}},it="sen-funnel",Vt=function(e){var t=e.config,o=e.data,c=e.title,a=e.type,l=a===void 0?"basic":a,u=e.legend,g=e.timeRange,f=e.style,r=f===void 0?{}:f,h=e.className,d=h===void 0?"":h,N=e.empty,D=e.tooltip,R=e.customContentData,y=t!=null?t:{},M=y.seriesField,C=y.xField,w=(0,v.useMemo)(function(){return(0,s.map)(o!=null?o:t==null?void 0:t.data,function(x,F){return n()(n()({},x),{},{__index__:F})})},[o,t==null?void 0:t.data]),E=(0,v.useMemo)(function(){return C?(0,s.groupBy)(w,C):{}},[C,w]),m=(0,v.useMemo)(function(){var x=(0,s.transform)(E,function(F,S,p){return F[p]="",F},{});return ee(x)},[E]),j=(0,s.merge)({},Qt({colorMap:m,seriesField:M,customContentData:R,legend:u,showTooltipTitle:A()(D)==="object"?D.showTitle:!0})[l],t,{data:w});return(0,i.jsx)("div",{className:"".concat(it," ").concat(d),style:r,children:(0,i.jsx)(k,{title:c,seriesField:C,legend:u,colorMap:m,timeRange:g,children:N?(0,i.jsx)("div",{className:"".concat(it,"-empty"),children:typeof N=="boolean"?"\u6682\u65E0\u5185\u5BB9":N}):(0,i.jsx)(Yt.Z,n()({},j))})})},Jt=Vt,lt=b(79502),Xt=b(65452),_t=function(){return{basic:n()(n()({},L({gauge:!0})),{},{legend:!1})}},rt="sen-gauge",qt=function(e){var t=e.config,o=e.percent,c=e.title,a=e.type,l=a===void 0?"basic":a,u=e.legend,g=e.style,f=g===void 0?{}:g,r=e.className,h=r===void 0?"":r,d=e.empty,N=lt.G2.Fj,D=lt.G2.Zr;N("point","custom-gauge-indicator",{draw:function(C,w){var E=C.customInfo,m=E.indicator,j=E.defaultColor,x=m.pointer,F=m.pin,S=w.addGroup(),p=this.parsePoint({x:0,y:0});if(x){var I=D.getAngle(C,this.coordinate),H=I.startAngle,Q=I.endAngle,G=(H+Q)/2,B=this.coordinate.getRadius(),Z=D.polarToCartesian(p.x,p.y,B/15,G+2/Math.PI),V=Z.x,Y=Z.y,J=D.polarToCartesian(p.x,p.y,B/15,G-2/Math.PI),te=J.x,$=J.y,oe=D.polarToCartesian(p.x,p.y,B*.6,G-1e-4),ae=oe.x,O=oe.y,W=D.polarToCartesian(p.x,p.y,B*.6,G+1e-4),ne=W.x,X=W.y,ie=[["M",p.x-4,p.y],["A",4,4,0,1,1,p.x+4,p.y],["A",4,4,0,1,1,p.x-4,p.y],["L",V,Y],["L",ae,O],["A",.1,.1,0,1,1,ne,X],["L",te,$],["Z"]];S.addShape("path",{name:"pointer",attrs:n()({path:ie,fill:j},x.style)})}if(F){var _=D.getAngle(C,this.coordinate),se=_.startAngle,ce=_.endAngle,de=(se+ce)/2,P=this.coordinate.getRadius(),ve=C.data.percent*3/4>.5,pe=D.polarToCartesian(p.x,p.y,P*.8,-1.25*Math.PI),ye=pe.x,xe=pe.y,ge=D.polarToCartesian(p.x,p.y,P*.8,de),me=ge.x,je=ge.y,De=D.polarToCartesian(p.x,p.y,P*.8,.25*Math.PI),Te=De.x,we=De.y,Ze=[["M",ye,xe],["A",P*.8,P*.8,0,ve?1:0,1,me,je]],$e=[["M",me,je],["A",P*.8,P*.8,0,ve?0:1,1,Te,we]],Ce=F.style||{},le=Ce.lineWidth,gt=le===void 0?8:le,mt=Ce.fill,jo=mt===void 0?j:mt,ft=Ce.stroke,Do=ft===void 0?j:ft;S.addShape("path",{name:"pin-outer",attrs:n()(n()({path:Ze},F.style),{},{fill:"transparent",lineDash:[1,2],lineWidth:gt,stroke:z[0]})}),S.addShape("path",{name:"pin-outer",attrs:n()(n()({path:$e},F.style),{},{fill:"transparent",lineDash:[1,2],lineWidth:gt,stroke:Do})}),S.addShape("circle",{name:"pin-inner",attrs:{x:p.x,y:p.y,r:3.5,stroke:"transparent",fill:jo}})}return S}});var R=(0,v.useMemo)(function(){if(A()(u)==="object"){var M=u,C=M.labels,w=C===void 0?["\u6210\u529F","\u5931\u8D25"]:C,E={};return E[w[0]]=z[0],E[w[1]]="#ECEEF0",E}},[u]),y=(0,s.merge)({},_t()[l],t,{data:o});return(0,i.jsx)("div",{className:"".concat(rt," ").concat(h),style:f,children:(0,i.jsx)(k,{title:c,seriesField:"parcent",legend:u,colorMap:R,children:d?(0,i.jsx)("div",{className:"".concat(rt,"-empty"),children:typeof d=="boolean"?"\u6682\u65E0\u5185\u5BB9":d}):(0,i.jsx)(Xt.Z,n()({},y))})})},eo=qt,to=b(10071),oo=function(e){var t=e.colorMap,o=e.seriesField,c=e.customContentData,a=e.legend,l=e.point,u=e.showTooltipTitle;return{basic:n()(n()({},L({point:l,tooltip:!0,tooltipBox:A()(a)==="object"&&(a==null?void 0:a.type)==="box",showTooltipTitle:u,colorMap:t,seriesField:o,customContentData:c,showCrosshairs:!0})),{},{color:function(f){return o?t==null?void 0:t[f[o]]:z[0]},legend:!1}),multiple:n()(n()({},L({point:l,tooltip:!0,tooltipBox:A()(a)==="object"&&(a==null?void 0:a.type)==="box",showTooltipTitle:u,colorMap:t,seriesField:o,customContentData:c,showCrosshairs:!0})),{},{color:function(f){return o?t==null?void 0:t[f[o]]:z[0]},legend:!1})}},st="sen-line",ao=function(e){var t=e.config,o=t===void 0?{}:t,c=e.type,a=c===void 0?"basic":c,l=e.data,u=e.title,g=e.legend,f=e.timeRange,r=e.customContentData,h=e.style,d=h===void 0?{}:h,N=e.className,D=N===void 0?"":N,R=e.empty,y=e.showPoint,M=y===void 0?!1:y,C=e.tooltip,w=o.seriesField,E=(0,v.useMemo)(function(){return l!=null?l:o==null?void 0:o.data},[l,o==null?void 0:o.data]),m=(0,v.useMemo)(function(){return w?(0,s.groupBy)(E,w):{}},[w,E]),j=(0,v.useMemo)(function(){var F=(0,s.transform)(m,function(S,p,I){return S[I]="",S},{});return ee(F)},[m]),x=(0,v.useMemo)(function(){return(0,s.merge)({},oo({colorMap:j,seriesField:w,customContentData:r,legend:g,point:M,showTooltipTitle:A()(C)==="object"?C.showTitle:!0})[a],o,{data:E})},[j,w]);return(0,i.jsx)("div",{className:"".concat(st," ").concat(D),style:d,children:(0,i.jsx)(k,{title:u,seriesField:w,legend:g,colorMap:j,timeRange:f,children:R?(0,i.jsx)("div",{className:"".concat(st,"-empty"),children:typeof R=="boolean"?"\u6682\u65E0\u5185\u5BB9":R}):(0,i.jsx)(to.Z,n()({},x))})})},no=ao,io=b(28152),re=b.n(io),lo=b(40366),ct=/left:.+?;/,ro=function(e){var t=e.colorMap,o=e.colorField,c=e.customContentData,a=e.customsColors;return{pie:n()(n()({},L({pie:!0,tooltipBox:!0,showTooltipTitle:!1,colorMap:t,colorField:o,customContentData:c,customsColors:a})),{},{legend:!1}),ring:n()(n()({},L({pie:!0,ring:!0,tooltipBox:!0,showTooltipTitle:!1,colorMap:t,colorField:o,customContentData:c,customsColors:a})),{},{legend:!1})}},dt="sen-pie",so=function(e){var t=e.config,o=e.data,c=e.title,a=e.type,l=e.legend,u=e.timeRange,g=e.customsColors,f=e.style,r=f===void 0?{}:f,h=e.className,d=h===void 0?"":h,N=e.customContentData,D=e.empty,R=t!=null?t:{},y=R.colorField,M=(0,v.useMemo)(function(){return(0,s.map)(o!=null?o:t==null?void 0:t.data,function(O,W){return n()(n()({},O),{},{__index__:W})})},[o,t==null?void 0:t.data]),C=(0,v.useState)(0),w=re()(C,2),E=w[0],m=w[1],j=(0,v.useState)(0),x=re()(j,2),F=x[0],S=x[1],p=(0,v.useState)(154),I=re()(p,2),H=I[0],Q=I[1],G=(0,v.useState)(!1),B=re()(G,2),Z=B[0],V=B[1],Y=(0,v.useMemo)(function(){return(0,s.isEmpty)(M)?!1:a==="ring"&&(0,s.every)(M,function(O){return O.value===0})},[M]),J=(0,v.useMemo)(function(){return y?(0,s.groupBy)(M,y):{}},[y,M]),te=(0,v.useMemo)(function(){var O=(0,s.transform)(J,function(W,ne,X){return W[X]="",W},{});return ee(O,void 0,g)},[J]),$=(0,s.merge)({},ro({colorMap:te,colorField:y,customContentData:N,customsColors:g})[a],t,{data:M}),oe=Y?$.data.slice(0,1):$.data,ae=$.tooltip;return Y&&($.theme={colors10:Array.from(Array(10),function(){return"#F6F7F8"})},ae=!1),(0,v.useEffect)(function(){var O,W,ne;if(l===!1){V(!0);return}var X=((O=(W=document.querySelector("".concat(d?".".concat(d,".sen-pie"):".sen-pie")))===null||W===void 0?void 0:W.clientWidth)!==null&&O!==void 0?O:300)-48,ie=(ne=$.height)!==null&&ne!==void 0?ne:154;if(!(A()(l)==="object"&&((l==null?void 0:l.direction)==="alone"||(l==null?void 0:l.direction)==="horizontal")))if((0,s.get)(l,"direction")==="left"){var _,se,ce,de,P=(_=document.querySelector("".concat(d?".".concat(d," .sen-charts-legend"):".sen-pie .sen-charts-legend")))===null||_===void 0?void 0:_.getAttribute("style");P=(se=P)===null||se===void 0?void 0:se.replace("position: absolute;","").trim(),P=(ce=P)===null||ce===void 0?void 0:ce.replace(ct,"").trim(),(de=document.querySelector("".concat(d?".".concat(d," .sen-charts-legend"):".sen-pie .sen-charts-legend")))===null||de===void 0||de.setAttribute("style","".concat("position: absolute; left: 0;"+P||0)),S(X-ie),m(0)}else{var ve,pe,ye,xe,ge,me,je=(ve=(pe=document.querySelector("".concat(d?".".concat(d," .sen-charts-legend"):".sen-pie .sen-charts-legend")))===null||pe===void 0?void 0:pe.clientWidth)!==null&&ve!==void 0?ve:0,De=l===!0||!l?{verticalGap:48}:n()({verticalGap:48},l),Te=De.verticalGap,we=je+Te,Ze=ie+we,$e=(X-Ze)/2,Ce=$e+ie+Te,le=(ye=document.querySelector("".concat(d?".".concat(d," .sen-charts-legend"):".sen-pie .sen-charts-legend")))===null||ye===void 0?void 0:ye.getAttribute("style");le=(xe=le)===null||xe===void 0?void 0:xe.replace("position: absolute;","").trim(),le=(ge=le)===null||ge===void 0?void 0:ge.replace(ct,"").trim(),(me=document.querySelector("".concat(d?".".concat(d," .sen-charts-legend"):".sen-pie .sen-charts-legend")))===null||me===void 0||me.setAttribute("style","".concat("position: absolute; left: ".concat(Ce,"px;").concat(le||""))),m(we),S(0)}Q(X),setTimeout(function(){V(!0)},100)},[$,l]),(0,i.jsx)("div",{className:(0,fe.A)("".concat(dt),"".concat(d)),style:r,children:(0,i.jsx)(k,{title:c,seriesField:y,legend:l===!1?!1:n()({direction:"right",type:"box"},A()(l)==="object"?l:{}),colorMap:te,timeRange:u,children:Z?D?(0,i.jsx)("div",{className:"".concat(dt,"-empty"),children:typeof D=="boolean"?"\u6682\u65E0\u5185\u5BB9":D}):(0,i.jsx)(lo.Z,n()(n()({},$),{},{width:H,padding:[0,E,0,F],data:oe,tooltip:ae,interactions:[]})):null})})},co=so,uo=b(47444),vo=function(e){var t=e.colorMap,o=e.seriesField,c=e.customContentData,a=e.showTooltipTitle;return n()(n()({},L({radar:!0,tooltipBox:!0,showTooltipTitle:a,colorMap:t,seriesField:o,customContentData:c})),{},{legend:!1})},ut="sen-radar",po=function(e){var t=e.config,o=e.data,c=e.title,a=e.legend,l=e.timeRange,u=e.style,g=u===void 0?{}:u,f=e.className,r=f===void 0?"":f,h=e.customContentData,d=e.empty,N=e.tooltip,D=t!=null?t:{},R=D.seriesField,y=(0,v.useMemo)(function(){return(0,s.map)(o!=null?o:t==null?void 0:t.data,function(E,m){return n()(n()({},E),{},{__index__:m})})},[o,t==null?void 0:t.data]),M=(0,v.useMemo)(function(){return R?(0,s.groupBy)(y,R):{}},[R,y]),C=(0,v.useMemo)(function(){var E=(0,s.transform)(M,function(m,j,x){return m[x]="",m},{});return ee(E)},[M]),w=(0,s.merge)({},vo({colorMap:C,seriesField:R,customContentData:h,showTooltipTitle:A()(N)==="object"?N.showTitle:!0}),t,{data:y});return(0,i.jsx)("div",{className:"".concat(ut," ").concat(r),style:g,children:(0,i.jsx)(k,{title:c,seriesField:R,legend:a===!1?!1:{direction:"vertical",verticalGap:56},colorMap:C,timeRange:l,children:d?(0,i.jsx)("div",{className:"".concat(ut,"-empty"),children:typeof d=="boolean"?"\u6682\u65E0\u5185\u5BB9":d}):(0,i.jsx)(uo.Z,n()({},w))})})},go=po,mo=b(27259),fo=/left:.+?;/,ho=function(e){var t=e.colorMap,o=e.seriesField,c=e.customContentData,a=e.height;return n()(n()({},L({rose:!0,tooltipBox:!0,showTooltipTitle:!1,colorMap:t,seriesField:o,customContentData:c,height:a})),{},{legend:!1})},vt="sen-rose",yo=function(e){var t=e.config,o=e.data,c=e.title,a=e.legend,l=e.timeRange,u=e.style,g=u===void 0?{}:u,f=e.className,r=f===void 0?"":f,h=e.customContentData,d=e.empty,N=(0,v.useState)(0),D=re()(N,2),R=D[0],y=D[1],M=(0,v.useState)(154),C=re()(M,2),w=C[0],E=C[1],m=(0,v.useState)(!1),j=re()(m,2),x=j[0],F=j[1],S=t!=null?t:{},p=S.seriesField,I=(0,v.useMemo)(function(){return(0,s.map)(o!=null?o:t==null?void 0:t.data,function(B,Z){return n()(n()({},B),{},{__index__:Z})})},[o,t==null?void 0:t.data]),H=(0,v.useMemo)(function(){return p?(0,s.groupBy)(I,p):{}},[p,I]),Q=(0,v.useMemo)(function(){var B=(0,s.transform)(H,function(Z,V,Y){return Z[Y]="",Z},{});return ee(B)},[H]),G=(0,s.merge)({},ho({colorMap:Q,seriesField:p,customContentData:h,height:(t==null?void 0:t.height)||204}),t,{data:I});return(0,v.useEffect)(function(){var B,Z,V,Y,J,te,$,oe,ae;if(a===!1){F(!0);return}var O=((B=(Z=document.querySelector("".concat(r?".".concat(r,".sen-rose"):".sen-rose")))===null||Z===void 0?void 0:Z.clientWidth)!==null&&B!==void 0?B:252)-48,W=(V=G.height)!==null&&V!==void 0?V:204,ne=(Y=(J=document.querySelector("".concat(r?".".concat(r," .sen-charts-legend"):".sen-rose .sen-charts-legend")))===null||J===void 0?void 0:J.clientWidth)!==null&&Y!==void 0?Y:0,X=a===!0||!a?{verticalGap:48}:n()({verticalGap:48},a),ie=X.verticalGap,_=ne+ie,se=W+_,ce=(O-se)/2,de=ce+W+ie,P=(te=document.querySelector("".concat(r?".".concat(r," .sen-charts-legend"):".sen-rose .sen-charts-legend")))===null||te===void 0?void 0:te.getAttribute("style");P=($=P)===null||$===void 0?void 0:$.replace("position: absolute;","").trim(),P=(oe=P)===null||oe===void 0?void 0:oe.replace(fo,"").trim(),(ae=document.querySelector("".concat(r?".".concat(r," .sen-charts-legend"):".sen-rose .sen-charts-legend")))===null||ae===void 0||ae.setAttribute("style","".concat("position: absolute; left: ".concat(de,"px;").concat(P||""))),y(_),E(O),setTimeout(function(){F(!0)},100)},[G,a]),(0,i.jsx)("div",{className:"".concat(vt," ").concat(r),style:g,children:(0,i.jsx)(k,{title:c,seriesField:p,legend:a===!1?!1:n()({direction:"right",type:"box",height:G.height},A()(a)==="object"?a:{}),colorMap:Q,timeRange:l,children:x?d?(0,i.jsx)("div",{className:"".concat(vt,"-empty"),children:typeof d=="boolean"?"\u6682\u65E0\u5185\u5BB9":d}):(0,i.jsx)(mo.Z,n()(n()({},G),{},{width:w,padding:[0,R,0,0]})):null})})},xo=yo,Co=b(95125),pt="sen-pie",Mo=function(e){var t=e.title,o=e.config,c=o===void 0?{}:o,a=e.data,l=e.style,u=l===void 0?{}:l,g=e.className,f=g===void 0?"":g,r=e.empty,h=n()(n()({},L({tooltipBox:!0,showTooltipTitle:!1,treemap:!0})),{},{legend:!1}),d=(0,s.merge)({},h,c,{data:a});return(0,i.jsx)("div",{className:"".concat(pt," ").concat(f),style:u,children:(0,i.jsx)(k,{title:t,children:r?(0,i.jsx)("div",{className:"".concat(pt,"-empty"),children:typeof r=="boolean"?"\u6682\u65E0\u5185\u5BB9":r}):(0,i.jsx)(Co.Z,n()({},d))})})},bo=Mo}}]);
