"use strict";(self.webpackChunk_sensoro_design_charts=self.webpackChunk_sensoro_design_charts||[]).push([[737],{45413:function(v,o,_){_.r(o);var l=_(77117),n=_.n(l),s=_(28152),E=_.n(s),m=_(39913),c=_(32699),C=_.n(c),d=_(50959),f=_(45480),e=_(11527);o.default=function(){var D=(0,d.useState)({data:[],xField:"Date",yField:"scales",xAxis:{tickCount:5}}),i=E()(D,2),u=i[0],h=i[1],O=function(){fetch("https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json").then(function(t){return t.json()}).then(function(t){return h(n()(n()({},u),{},{data:t}))}).catch(function(t){console.log("fetch data failed",t)})};return(0,d.useEffect)(function(){O()},[]),(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",columnGap:16,height:500},children:[(0,e.jsx)("div",{style:{width:"40%"},children:(0,e.jsx)(f.Z,{value:JSON.stringify(u,null,2),onChange:function(t){return h(JSON.parse(t))}})}),(0,e.jsx)("div",{style:{width:"60%"},children:(0,e.jsx)(m.x1,{legend:{processData:function(t,a){return"\u7C7B\u578B".concat(t).concat(a+1)}},title:"\u57FA\u7840\u6298\u7EBF\u56FE",type:"basic",config:u,customContentData:function(t){return(0,c.map)(t,function(a,M){return n()(n()({},a),{},{name:"\u7C7B\u578B".concat(M+1),value:"".concat(a.value).replace(/\d{1,3}(?=(\d{3})+$)/g,function(P){return"".concat(P,",")})})})}})})]})}},13734:function(v,o,_){_.r(o);var l=_(39913),n=_(50959),s=_(11527);o.default=function(){return(0,s.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",columnGap:16,height:500},children:[(0,s.jsx)("div",{style:{width:"50%"},children:(0,s.jsx)(l.x1,{title:"\u6298\u7EBF\u56FE",type:"multiple",empty:!0,style:{height:200}})}),(0,s.jsx)("div",{style:{width:"50%"},children:(0,s.jsx)(l.x1,{title:"\u6298\u7EBF\u56FE",type:"multiple",empty:(0,s.jsx)("div",{style:{height:160,display:"flex",alignItems:"center"},children:"dom\u5F62\u5F0F\u7A7A\u72B6\u6001"})})})]})}},73423:function(v,o,_){_.r(o);var l=_(77117),n=_.n(l),s=_(28152),E=_.n(s),m=_(39913),c=_(32699),C=_.n(c),d=_(50959),f=_(45480),e=_(11527);o.default=function(){var D=(0,d.useState)({data:[],xField:"year",yField:"value",seriesField:"category"}),i=E()(D,2),u=i[0],h=i[1],O=function(){fetch("https://gw.alipayobjects.com/os/bmw-prod/55424a73-7cb8-4f79-b60d-3ab627ac5698.json").then(function(t){return t.json()}).then(function(t){return h(n()(n()({},u),{},{data:t}))}).catch(function(t){console.log("fetch data failed",t)})};return(0,d.useEffect)(function(){O()},[]),(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",columnGap:16,height:500},children:[(0,e.jsx)("div",{style:{width:"40%"},children:(0,e.jsx)(f.Z,{value:JSON.stringify(u,null,2),onChange:function(t){return h(JSON.parse(t))}})}),(0,e.jsx)("div",{style:{width:"60%"},children:(0,e.jsx)(m.x1,{legend:{processData:function(t,a){return"\u7C7B\u578B".concat(t).concat(a+1)}},title:"\u591A\u6761\u6298\u7EBF\u56FE",type:"multiple",config:u,customContentData:function(t){return(0,c.map)(t,function(a,M){return n()(n()({},a),{},{name:"\u7C7B\u578B".concat(M+1),value:"".concat(a.value).replace(/\d{1,3}(?=(\d{3})+$)/g,function(P){return"".concat(P,",")})})})}})})]})}}}]);
