import{j as n,a as c,u as a,F as s}from"./index-c8bce964.js";import{S as t}from"./style-d9570ead.js";const l=[{icon_id:"8288808",name:"主页",font_class:"zhuye",unicode:"e83a",unicode_decimal:59450},{icon_id:"34029255",name:"箭头右",font_class:"jiantouyou",unicode:"e604",unicode_decimal:58884},{icon_id:"11372639",name:"爱心",font_class:"aixin",unicode:"e8ab",unicode_decimal:59563},{icon_id:"11372640",name:"编辑",font_class:"bianji",unicode:"e8ac",unicode_decimal:59564},{icon_id:"11372641",name:"3D眼镜",font_class:"Dyanjing",unicode:"e8ad",unicode_decimal:59565},{icon_id:"11372642",name:"彩蛋",font_class:"caidan",unicode:"e8ae",unicode_decimal:59566},{icon_id:"11372643",name:"安全",font_class:"anquan",unicode:"e8af",unicode_decimal:59567},{icon_id:"11372644",name:"帮助",font_class:"bangzhu",unicode:"e8b0",unicode_decimal:59568},{icon_id:"11372645",name:"不感兴趣",font_class:"buganxingqu",unicode:"e8b1",unicode_decimal:59569},{icon_id:"11372646",name:"播放记录",font_class:"bofangjilu",unicode:"e8b2",unicode_decimal:59570},{icon_id:"11372647",name:"创作",font_class:"chuangzuo",unicode:"e8b3",unicode_decimal:59571},{icon_id:"11372648",name:"成功",font_class:"chenggong",unicode:"e8b4",unicode_decimal:59572},{icon_id:"11372649",name:"测试",font_class:"ceshi",unicode:"e8b5",unicode_decimal:59573},{icon_id:"11372650",name:"电话",font_class:"dianhua",unicode:"e8b6",unicode_decimal:59574},{icon_id:"11372651",name:"点赞",font_class:"dianzan1",unicode:"e8b7",unicode_decimal:59575},{icon_id:"11372652",name:"定位",font_class:"dingwei",unicode:"e8b8",unicode_decimal:59576},{icon_id:"11372653",name:"电筒_关",font_class:"diantong_guan",unicode:"e8b9",unicode_decimal:59577},{icon_id:"11372654",name:"电影",font_class:"dianying",unicode:"e8ba",unicode_decimal:59578},{icon_id:"11372655",name:"地图",font_class:"ditu",unicode:"e8bb",unicode_decimal:59579},{icon_id:"11372656",name:"电筒_开",font_class:"diantong_kai",unicode:"e8bc",unicode_decimal:59580},{icon_id:"11372657",name:"电影票",font_class:"dianyingpiao",unicode:"e8bd",unicode_decimal:59581},{icon_id:"11372658",name:"订单",font_class:"dingdan",unicode:"e8be",unicode_decimal:59582},{icon_id:"11372659",name:"更多",font_class:"gengduo",unicode:"e8bf",unicode_decimal:59583},{icon_id:"11372660",name:"翻倍",font_class:"fanbei",unicode:"e8c0",unicode_decimal:59584},{icon_id:"11372661",name:"发现",font_class:"faxian",unicode:"e8c1",unicode_decimal:59585},{icon_id:"11372662",name:"儿童票",font_class:"ertongpiao",unicode:"e8c2",unicode_decimal:59586},{icon_id:"11372663",name:"公益",font_class:"gongyi",unicode:"e8c3",unicode_decimal:59587},{icon_id:"11372664",name:"红包",font_class:"hongbao",unicode:"e8c4",unicode_decimal:59588},{icon_id:"11372665",name:"复制",font_class:"fuzhi",unicode:"e8c5",unicode_decimal:59589},{icon_id:"11372666",name:"分享",font_class:"fenxiang",unicode:"e8c6",unicode_decimal:59590},{icon_id:"11372667",name:"话题符号",font_class:"huatifuhao",unicode:"e8c7",unicode_decimal:59591},{icon_id:"11372668",name:"会员",font_class:"huiyuan",unicode:"e8c8",unicode_decimal:59592},{icon_id:"11372669",name:"阿里鱼",font_class:"aliyu",unicode:"e8c9",unicode_decimal:59593},{icon_id:"11372670",name:"机具",font_class:"jiju",unicode:"e8ca",unicode_decimal:59594},{icon_id:"11372671",name:"减少",font_class:"jianshao",unicode:"e8cb",unicode_decimal:59595},{icon_id:"11372672",name:"卡包",font_class:"kabao",unicode:"e8cc",unicode_decimal:59596},{icon_id:"11372673",name:"话题",font_class:"huati",unicode:"e8cd",unicode_decimal:59597},{icon_id:"11372674",name:"关注",font_class:"guanzhu",unicode:"e8ce",unicode_decimal:59598},{icon_id:"11372675",name:"买一赠一",font_class:"maiyizengyi",unicode:"e8cf",unicode_decimal:59599},{icon_id:"11372676",name:"密码",font_class:"mima",unicode:"e8d0",unicode_decimal:59600},{icon_id:"11372677",name:"男",font_class:"nan",unicode:"e8d1",unicode_decimal:59601},{icon_id:"11372678",name:"女",font_class:"nv",unicode:"e8d2",unicode_decimal:59602}],u=()=>n("div",{children:n("ul",{style:{display:"grid",gridTemplateColumns:"16% 16% 16% 16% 16% 16%",gridTemplateRows:"16% 16% 16% 16% 16% 16%",gridGap:"2%"},children:l.map((e,i)=>c("li",{style:{float:"left"},children:[n(t,{name:e.font_class}),n("span",{children:e.name})]},i))})}),m=`

import React from 'react'
import { Icon } from 'wind-design'
import 'wind-design/dist/style.css'
import data from './iconfont.js'

const Default = () => {
  return (
    <div>
      <ul style={{display: 'grid', gridTemplateColumns: '16% 16% 16% 16% 16% 16%', gridTemplateRows: '16% 16% 16% 16% 16% 16%', gridGap: '2%'}}>
        {data.map((item, index) => {
          return (
            <li key={index} style={{float: 'left'}}>
              <Icon name={item.font_class}/>
              <span>{item.name}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Default
`,_="Icon 默认图标",r="默认图标",f={code:m,title:_,desc:r},g=!0,p=Object.freeze(Object.defineProperty({__proto__:null,default:u,demoMeta:f,isDemo:g},Symbol.toStringTag,{value:"Module"})),b=()=>n("div",{children:n("ul",{style:{display:"grid",gridTemplateColumns:"16% 16% 16% 16% 16% 16%",gridTemplateRows:"16% 16% 16% 16% 16% 16%",gridGap:"2%"},children:l.map((e,i)=>c("li",{style:{float:"left"},children:[n(t,{name:e.font_class,style:{color:"skyblue"}}),n("span",{children:e.name})]},i))})}),y=`

import React from 'react'
import { Icon } from 'wind-design'
import 'wind-design/dist/style.css'
import data from './iconfont.js'

const Color = () => {
  return (
    <div>
      <ul style={{display: 'grid', gridTemplateColumns: '16% 16% 16% 16% 16% 16%', gridTemplateRows: '16% 16% 16% 16% 16% 16%', gridGap: '2%'}}>
        {data.map((item, index) => {
          return (
            <li key={index} style={{float: 'left'}}>
              <Icon name={item.font_class} style={{color: 'skyblue'}}/>
              <span>{item.name}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Color
`,h="Icon 多彩图标",j="多彩图标",x={code:y,title:h,desc:j},D=!0,w=Object.freeze(Object.defineProperty({__proto__:null,default:b,demoMeta:x,isDemo:D},Symbol.toStringTag,{value:"Module"}));function d(e){const i=Object.assign({h1:"h1",h2:"h2"},a(),e.components),{Demo:o}=i;return o||M("Demo",!0),c(s,{children:[n(i.h1,{id:"icon-图标",children:"Icon 图标"}),`
`,n(i.h2,{id:"默认图标",children:"默认图标"}),`
`,n(o,p),`
`,n(i.h2,{id:"多彩图标",children:"多彩图标"}),`
`,n(o,w)]})}function v(e={}){const{wrapper:i}=Object.assign({},a(),e.components);return i?n(i,Object.assign({},e,{children:n(d,e)})):d(e)}function M(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}const T=Object.freeze(Object.defineProperty({__proto__:null,default:v},Symbol.toStringTag,{value:"Module"})),z={};z.main=T;export{z as default};
