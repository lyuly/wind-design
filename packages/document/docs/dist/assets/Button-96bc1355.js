import{a as d,j as n,u as c,F as s}from"./index-c8bce964.js";import{g as t}from"./style-d9570ead.js";const u=()=>d("div",{children:[n(t,{children:"默认"}),n(t,{btnType:"primary",children:"主要"}),n(t,{btnType:"info",children:"通知"}),n(t,{btnType:"success",children:"成功"}),n(t,{btnType:"warning",children:"警告"}),n(t,{btnType:"danger",children:"危险"})]}),a=`

import React from 'react'
import { Button } from 'wind-design'
import 'wind-design/dist/style.css'

const BtnType = () => {
  return (
    <div>
      <Button>默认</Button>
      <Button btnType="primary">主要</Button>
      <Button btnType="info">通知</Button>
      <Button btnType="success">成功</Button>
      <Button btnType="warning">警告</Button>
      <Button btnType="danger">危险</Button>
    </div>
  )
}

export default BtnType
`,l="Button 按钮类型",m="按钮有五种类型: primary、info、success、warning、danger",p={code:a,title:l,desc:m},b=!0,y=Object.freeze(Object.defineProperty({__proto__:null,default:u,demoMeta:p,isDemo:b},Symbol.toStringTag,{value:"Module"})),B=()=>d("div",{children:[n(t,{disabled:!0,children:"默认"}),n(t,{btnType:"primary",disabled:!0,children:"主要"}),n(t,{btnType:"info",disabled:!0,children:"通知"}),n(t,{btnType:"success",disabled:!0,children:"成功"}),n(t,{btnType:"warning",disabled:!0,children:"警告"}),n(t,{btnType:"danger",disabled:!0,children:"危险"})]}),g=`

import React from 'react'
import { Button } from 'wind-design'
import 'wind-design/dist/style.css'

const Disable = () => {
  return (
    <div>
      <Button disabled>默认</Button>
      <Button btnType="primary" disabled>主要</Button>
      <Button btnType="info" disabled>通知</Button>
      <Button btnType="success" disabled>成功</Button>
      <Button btnType="warning" disabled>警告</Button>
      <Button btnType="danger" disabled>危险</Button>
    </div>
  )
}

export default Disable
`,h="Button 禁用按钮",f="按钮禁用",T={code:g,title:h,desc:f},_=!0,$=Object.freeze(Object.defineProperty({__proto__:null,default:B,demoMeta:T,isDemo:_},Symbol.toStringTag,{value:"Module"})),v=()=>n("div",{children:n(t,{btnType:"link",href:"https://www.google.com",children:"Link Button"})}),w=`

import React from 'react'
import { Button } from 'wind-design'
import 'wind-design/dist/style.css'

const Link = () => {
  return (
    <div>
      <Button btnType="link" href="https://www.google.com">Link Button</Button>
    </div>
  )
}

export default Link
`,M="Button 链接按钮",D="链接按钮",z={code:w,title:M,desc:D},j=!0,x=Object.freeze(Object.defineProperty({__proto__:null,default:v,demoMeta:z,isDemo:j},Symbol.toStringTag,{value:"Module"})),O=()=>n("div",{children:n(t,{btnType:"text",children:"Text Button"})}),S=`

import React from 'react'
import { Button } from 'wind-design'
import 'wind-design/dist/style.css'

const Text = () => {
  return (
    <div>
      <Button btnType="text">Text Button</Button>
    </div>
  )
}

export default Text
`,L="Button 文本按钮",N="文本按钮",P={code:S,title:L,desc:N},R=!0,k=Object.freeze(Object.defineProperty({__proto__:null,default:O,demoMeta:P,isDemo:R},Symbol.toStringTag,{value:"Module"})),C=()=>n("div",{children:n(t,{btnType:"dashed",children:"Dashed Button"})}),I=`

import React from 'react'
import { Button } from 'wind-design'
import 'wind-design/dist/style.css'

const Dash = () => {
  return (
    <div>
      <Button btnType="dashed">Dashed Button</Button>
    </div>
  )
}

export default Dash
`,X="Button 虚线按钮",E="虚线按钮",F={code:I,title:X,desc:E},G=!0,q=Object.freeze(Object.defineProperty({__proto__:null,default:C,demoMeta:F,isDemo:G},Symbol.toStringTag,{value:"Module"})),A=()=>d("div",{children:[n(t,{btnType:"primary",gost:!0,children:"主要"}),n(t,{btnType:"info",gost:!0,children:"通知"}),n(t,{btnType:"success",gost:!0,children:"成功"}),n(t,{btnType:"warning",gost:!0,children:"警告"}),n(t,{btnType:"danger",gost:!0,children:"危险"})]}),H=`

import React from 'react'
import { Button } from 'wind-design'
import 'wind-design/dist/style.css'

const Plain = () => {
  return (
    <div>
      <Button btnType="primary" gost>主要</Button>
      <Button btnType="info" gost>通知</Button>
      <Button btnType="success" gost>成功</Button>
      <Button btnType="warning" gost>警告</Button>
      <Button btnType="danger" gost>危险</Button>
    </div>
  )
}

export default Plain
`,J="Button 朴素按钮",K="朴素按钮",Q={code:H,title:J,desc:K},U=!0,V=Object.freeze(Object.defineProperty({__proto__:null,default:A,demoMeta:Q,isDemo:U},Symbol.toStringTag,{value:"Module"})),W=()=>d("div",{children:[n(t,{round:!0,children:"默认"}),n(t,{btnType:"primary",round:!0,children:"主要"}),n(t,{btnType:"info",round:!0,children:"通知"}),n(t,{btnType:"success",round:!0,children:"成功"}),n(t,{btnType:"warning",round:!0,children:"警告"}),n(t,{btnType:"danger",round:!0,children:"危险"})]}),Y=`

import React from 'react'
import { Button } from 'wind-design'
import 'wind-design/dist/style.css'

const Round = () => {
  return (
    <div>
      <Button round>默认</Button>
      <Button btnType="primary" round>主要</Button>
      <Button btnType="info" round>通知</Button>
      <Button btnType="success" round>成功</Button>
      <Button btnType="warning" round>警告</Button>
      <Button btnType="danger" round>危险</Button>
    </div>
  )
}

export default Round
`,Z="Button 圆角按钮",nn="圆角按钮",tn={code:Y,title:Z,desc:nn},en=!0,on=Object.freeze(Object.defineProperty({__proto__:null,default:W,demoMeta:tn,isDemo:en},Symbol.toStringTag,{value:"Module"})),dn=()=>d("div",{children:[n(t,{size:"sm",children:"默认"}),n(t,{btnType:"primary",size:"md",children:"主要"}),n(t,{btnType:"info",size:"lg",children:"通知"}),n(t,{btnType:"success",size:"sm",children:"成功"}),n(t,{btnType:"warning",size:"md",children:"警告"}),n(t,{btnType:"danger",size:"lg",children:"危险"})]}),rn=`

import React from 'react'
import { Button } from 'wind-design'
import 'wind-design/dist/style.css'

const Size = () => {
  return (
    <div>
      <Button size="sm">默认</Button>
      <Button btnType="primary" size="md">主要</Button>
      <Button btnType="info" size="lg">通知</Button>
      <Button btnType="success" size="sm">成功</Button>
      <Button btnType="warning" size="md">警告</Button>
      <Button btnType="danger" size="lg">危险</Button>
    </div>
  )
}

export default Size
`,cn="Button 尺寸按钮",sn="尺寸按钮",un={code:rn,title:cn,desc:sn},an=!0,ln=Object.freeze(Object.defineProperty({__proto__:null,default:dn,demoMeta:un,isDemo:an},Symbol.toStringTag,{value:"Module"})),mn=()=>d("div",{children:[n(t,{iconName:"daimawangzhan",children:"Github Button"}),n(t,{iconName:"zhuye",btnType:"success",children:"主页按钮"}),n(t,{iconName:"aixin",btnType:"danger",children:"Love Button"}),n(t,{iconName:"huiyuan",btnType:"warning",children:"会员按钮"})]}),pn=`

import React from 'react'
import { Button } from 'wind-design'
import 'wind-design/dist/style.css'

const Icon = () => {
  return (
    <div>
      <Button iconName="daimawangzhan">Github Button</Button>
      <Button iconName="zhuye" btnType="success">主页按钮</Button>
      <Button iconName="aixin" btnType="danger">Love Button</Button>
      <Button iconName="huiyuan" btnType="warning">会员按钮</Button>
    </div>
  )
}

export default Icon
`,bn="Button 图标按钮",yn="图标按钮",Bn={code:pn,title:bn,desc:yn},gn=!0,hn=Object.freeze(Object.defineProperty({__proto__:null,default:mn,demoMeta:Bn,isDemo:gn},Symbol.toStringTag,{value:"Module"})),fn=()=>d("div",{children:[n(t,{iconName:"loading",loading:!0,children:"Loading Button"}),n(t,{iconName:"loading",loading:!0,btnType:"primary",children:"Loading Button"}),n(t,{iconName:"loading",loading:!0,btnType:"success",children:"Loading Button"})]}),Tn=`

import React from 'react'
import { Button } from 'wind-design'
import 'wind-design/dist/style.css'

const Load = () => {
  return (
    <div>
      <Button iconName="loading" loading>Loading Button</Button>
      <Button iconName="loading" loading btnType="primary">Loading Button</Button>
      <Button iconName="loading" loading btnType="success">Loading Button</Button>
    </div>
  )
}

export default Load
`,_n="Button 加载按钮",$n="加载按钮",vn={code:Tn,title:_n,desc:$n},wn=!0,Mn=Object.freeze(Object.defineProperty({__proto__:null,default:fn,demoMeta:vn,isDemo:wn},Symbol.toStringTag,{value:"Module"}));function r(i){const e=Object.assign({h1:"h1",h2:"h2"},c(),i.components),{Demo:o}=e;return o||zn("Demo",!0),d(s,{children:[n(e.h1,{id:"button-按钮",children:"Button 按钮"}),`
`,n(e.h2,{id:"按钮类型",children:"按钮类型"}),`
`,n(o,y),`
`,n(e.h2,{id:"禁用按钮",children:"禁用按钮"}),`
`,n(o,$),`
`,n(e.h2,{id:"链接按钮",children:"链接按钮"}),`
`,n(o,x),`
`,n(e.h2,{id:"文本按钮",children:"文本按钮"}),`
`,n(o,k),`
`,n(e.h2,{id:"虚线按钮",children:"虚线按钮"}),`
`,n(o,q),`
`,n(e.h2,{id:"朴素按钮",children:"朴素按钮"}),`
`,n(o,V),`
`,n(e.h2,{id:"圆角按钮",children:"圆角按钮"}),`
`,n(o,on),`
`,n(e.h2,{id:"尺寸按钮",children:"尺寸按钮"}),`
`,n(o,ln),`
`,n(e.h2,{id:"图标按钮",children:"图标按钮"}),`
`,n(o,hn),`
`,n(e.h2,{id:"加载按钮",children:"加载按钮"}),`
`,n(o,Mn)]})}function Dn(i={}){const{wrapper:e}=Object.assign({},c(),i.components);return e?n(e,Object.assign({},i,{children:n(r,i)})):r(i)}function zn(i,e){throw new Error("Expected "+(e?"component":"object")+" `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}const jn=Object.freeze(Object.defineProperty({__proto__:null,default:Dn},Symbol.toStringTag,{value:"Module"})),xn={};xn.main=jn;export{xn as default};
