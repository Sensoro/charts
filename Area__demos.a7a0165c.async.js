"use strict";(self.webpackChunk_sensoro_design_charts=self.webpackChunk_sensoro_design_charts||[]).push([[513],{85250:function(M,a,_){_.r(a);var i=_(57213),r=_.n(i),h=_(54306),m=_.n(h),E=_(81534),l=_(32699),D=_.n(l),t=_(50959),f=_(657),n=_(11527);a.default=function(){var u=(0,t.useState)({data:[],xField:"Date",yField:"scales",tooltip:{formatter:function(e){return{name:"\u9500\u552E\u989D",value:e.scales}}},smooth:!0}),d=m()(u,2),o=d[0],c=d[1],s=function(){fetch("https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json").then(function(e){return e.json()}).then(function(e){return c(r()(r()({},o),{},{data:(0,l.slice)(e,0,10)}))}).catch(function(e){console.log("fetch data failed",e)})};return(0,t.useEffect)(function(){s()},[]),console.log("%c \u{1F680}\u{1F680}\u{1F680} config\uFF1A\uFF1A","font-size:20px;background: #33A5FF;color:#fff;",o),(0,n.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",columnGap:16,height:500},children:[(0,n.jsx)("div",{style:{width:"40%"},children:(0,n.jsx)(f.Z,{value:JSON.stringify(o,null,2),onChange:function(e){return c(JSON.parse(e))}})}),(0,n.jsx)("div",{style:{width:"60%"},children:(0,n.jsx)(E.uN,{title:"\u66F2\u7EBF\u56FE",type:"smooth",config:o})})]})}},64981:function(M,a,_){_.r(a);var i=_(57213),r=_.n(i),h=_(54306),m=_.n(h),E=_(81534),l=_(50959),D=_(657),t=_(11527);a.default=function(){var f=(0,l.useState)({data:[],xField:"date",yField:"value",seriesField:"country"}),n=m()(f,2),u=n[0],d=n[1],o=function(){fetch("https://gw.alipayobjects.com/os/bmw-prod/b21e7336-0b3e-486c-9070-612ede49284e.json").then(function(s){return s.json()}).then(function(s){return d(r()(r()({},u),{},{data:s}))}).catch(function(s){console.log("fetch data failed",s)})};return(0,l.useEffect)(function(){o()},[]),(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",columnGap:16,height:500},children:[(0,t.jsx)("div",{style:{width:"40%"},children:(0,t.jsx)(D.Z,{value:JSON.stringify(u,null,2),onChange:function(s){return d(JSON.parse(s))}})}),(0,t.jsx)("div",{style:{width:"60%"},children:(0,t.jsx)(E.uN,{type:"stack",title:"\u5806\u79EF\u9762\u79EF\u56FE",config:u,legend:!0,timeRange:{options:[{label:"7\u5929",value:"1"},{label:"30\u5929",value:"2"}]}})})]})}},39438:function(M,a,_){_.r(a);var i=_(57213),r=_.n(i),h=_(54306),m=_.n(h),E=_(81534),l=_(32699),D=_.n(l),t=_(50959),f=_(657),n=_(11527);a.default=function(){var u=(0,t.useState)({data:[],xField:"Date",yField:"scales",tooltip:{formatter:function(e){return{name:"\u9500\u552E\u989D",value:e.scales}}}}),d=m()(u,2),o=d[0],c=d[1],s=function(){fetch("https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json").then(function(e){return e.json()}).then(function(e){return c(r()(r()({},o),{},{data:(0,l.slice)(e,0,10)}))}).catch(function(e){console.log("fetch data failed",e)})};return(0,t.useEffect)(function(){s()},[]),(0,n.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",columnGap:16,height:500},children:[(0,n.jsx)("div",{style:{width:"40%"},children:(0,n.jsx)(f.Z,{value:JSON.stringify(o,null,2),onChange:function(e){return c(JSON.parse(e))}})}),(0,n.jsx)("div",{style:{width:"60%"},children:(0,n.jsx)(E.uN,{title:"\u57FA\u7840\u6298\u7EBF\u56FE",type:"gradient",config:o})})]})}}}]);
