"use strict";(self.webpackChunk_sensoro_design_charts=self.webpackChunk_sensoro_design_charts||[]).push([[513],{52316:function(D,s,_){_.r(s);var i=_(77117),n=_.n(i),o=_(28152),E=_.n(o),m=_(39913),u=_(32699),P=_.n(u),a=_(50959),f=_(45480),t=_(11527);s.default=function(){var h=(0,a.useState)({data:[],xField:"timePeriod",yField:"value",xAxis:{range:[0,1]},seriesField:"type"}),d=E()(h,2),r=d[0],c=d[1],l=function(){fetch("https://gw.alipayobjects.com/os/bmw-prod/360c3eae-0c73-46f0-a982-4746a6095010.json").then(function(e){return e.json()}).then(function(e){return c(n()(n()({},r),{},{data:(0,u.slice)(e,0).map(function(M){return n()(n()({},M),{},{type:"value"})})}))}).catch(function(e){console.log("fetch data failed",e)})};return(0,a.useEffect)(function(){l()},[]),(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",columnGap:16,height:500},children:[(0,t.jsx)("div",{style:{width:"40%"},children:(0,t.jsx)(f.Z,{value:JSON.stringify(r,null,2),onChange:function(e){return c(JSON.parse(e))}})}),(0,t.jsx)("div",{style:{width:"60%"},children:(0,t.jsx)(m.uN,{title:"\u57FA\u7840\u9762\u79EF\u56FE",config:r,legend:!0,type:"basic",empty:!0})})]})}},70702:function(D,s,_){_.r(s);var i=_(77117),n=_.n(i),o=_(28152),E=_.n(o),m=_(39913),u=_(32699),P=_.n(u),a=_(50959),f=_(45480),t=_(11527);s.default=function(){var h=(0,a.useState)({data:[],xField:"Date",yField:"scales",tooltip:{formatter:function(e){return{name:"\u9500\u552E\u989D",value:e.scales}}}}),d=E()(h,2),r=d[0],c=d[1],l=function(){fetch("https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json").then(function(e){return e.json()}).then(function(e){return c(n()(n()({},r),{},{data:(0,u.slice)(e,0,10)}))}).catch(function(e){console.log("fetch data failed",e)})};return(0,a.useEffect)(function(){l()},[]),(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",columnGap:16,height:500},children:[(0,t.jsx)("div",{style:{width:"40%"},children:(0,t.jsx)(f.Z,{value:JSON.stringify(r,null,2),onChange:function(e){return c(JSON.parse(e))}})}),(0,t.jsx)("div",{style:{width:"60%"},children:(0,t.jsx)(m.uN,{title:"\u57FA\u7840\u6298\u7EBF\u56FE",type:"gradient",config:r})})]})}},30217:function(D,s,_){_.r(s);var i=_(39913),n=_(50959),o=_(11527);s.default=function(){return(0,o.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",columnGap:16,height:500},children:[(0,o.jsx)("div",{style:{width:"50%"},children:(0,o.jsx)(i.uN,{title:"\u57FA\u7840\u9762\u79EF\u56FE",type:"basic",empty:!0,style:{height:200}})}),(0,o.jsx)("div",{style:{width:"50%"},children:(0,o.jsx)(i.uN,{title:"\u66F2\u7EBF\u56FE",type:"smooth",empty:(0,o.jsx)("div",{style:{height:160,display:"flex",alignItems:"center"},children:"dom\u5F62\u5F0F\u7A7A\u72B6\u6001"})})})]})}},23430:function(D,s,_){_.r(s);var i=_(77117),n=_.n(i),o=_(28152),E=_.n(o),m=_(39913),u=_(32699),P=_.n(u),a=_(50959),f=_(45480),t=_(11527);s.default=function(){var h=(0,a.useState)({data:[],xField:"Date",yField:"scales",tooltip:{formatter:function(e){return{name:"\u9500\u552E\u989D",value:e.scales}}},seriesField:"type"}),d=E()(h,2),r=d[0],c=d[1],l=function(){fetch("https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json").then(function(e){return e.json()}).then(function(e){return c(n()(n()({},r),{},{data:(0,u.slice)(e,0,10).map(function(M){return n()(n()({},M),{},{type:"\u9500\u552E\u989D"})})}))}).catch(function(e){console.log("fetch data failed",e)})};return(0,a.useEffect)(function(){l()},[]),(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",columnGap:16,height:500},children:[(0,t.jsx)("div",{style:{width:"40%"},children:(0,t.jsx)(f.Z,{value:JSON.stringify(r,null,2),onChange:function(e){return c(JSON.parse(e))}})}),(0,t.jsx)("div",{style:{width:"60%"},children:(0,t.jsx)(m.uN,{title:"\u66F2\u7EBF\u56FE",type:"smooth",config:r,legend:!0})})]})}},68693:function(D,s,_){_.r(s);var i=_(77117),n=_.n(i),o=_(28152),E=_.n(o),m=_(39913),u=_(50959),P=_(45480),a=_(11527);s.default=function(){var f=(0,u.useState)({data:[],xField:"date",yField:"value",seriesField:"country"}),t=E()(f,2),h=t[0],d=t[1],r=function(){fetch("https://gw.alipayobjects.com/os/bmw-prod/b21e7336-0b3e-486c-9070-612ede49284e.json").then(function(l){return l.json()}).then(function(l){return d(n()(n()({},h),{},{data:l}))}).catch(function(l){console.log("fetch data failed",l)})};return(0,u.useEffect)(function(){r()},[]),(0,a.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",columnGap:16,height:500},children:[(0,a.jsx)("div",{style:{width:"40%"},children:(0,a.jsx)(P.Z,{value:JSON.stringify(h,null,2),onChange:function(l){return d(JSON.parse(l))}})}),(0,a.jsx)("div",{style:{width:"60%"},children:(0,a.jsx)(m.uN,{type:"stack",title:"\u5806\u79EF\u9762\u79EF\u56FE",config:h,legend:!0,timeRange:{options:[{label:"7\u5929",value:"1"},{label:"30\u5929",value:"2"}]}})})]})}}}]);
