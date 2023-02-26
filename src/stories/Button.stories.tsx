import React from 'react'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'

import Button from '../components/Button'

export default {
  title: '组件/通用/Button 按钮',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}></Button>

export const Default = Template.bind({})
Default.args = {
  children: 'Default Button',
}
Default.storyName = 'Default Button 默认按钮'

export const Primary = Template.bind({})
Primary.args = {
  btnType: 'primary',
  children: 'Primary Button',
}
Primary.storyName = 'Primary Button 主要按钮'

export const Success = Template.bind({})
Success.args = {
  btnType: 'success',
  children: 'Success Button',
}
Success.storyName = 'Success Button 成功按钮'

export const Warning = Template.bind({})
Warning.args = {
  btnType: 'warning',
  children: 'Warning Button',
}
Warning.storyName = 'Warning Button 警告按钮'

export const Info = Template.bind({})
Info.args = {
  btnType: 'info',
  children: 'Info Button',
}
Info.storyName = 'Info Button 信息按钮'

export const Danger = Template.bind({})
Danger.args = {
  btnType: 'danger',
  children: 'Danger Button',
}
Danger.storyName = 'Danger Button 危险按钮'

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
  children: 'Disabled Button',
}
Disabled.storyName = 'Disabled Button 禁用按钮'

export const Link = Template.bind({})
Link.args = {
  btnType: 'link',
  href: 'https://www.google.com',
  children: 'Link Button',
}
Link.storyName = 'Link Button 链接按钮'

export const Text = Template.bind({})
Text.args = {
  btnType: 'text',
  children: 'Text Button',
}
Text.storyName = 'Text Button 文本按钮'

export const Dashed = Template.bind({})
Dashed.args = {
  btnType: 'dashed',
  children: 'Dashed Button',
}
Dashed.storyName = 'Dashed Button 虚线按钮'

export const Gost = Template.bind({})
Gost.args = {
  btnType: 'primary',
  gost: true,
  children: 'Gost Button',
}
Gost.storyName = 'Gost Button 幽灵按钮'

export const Large = Template.bind({})
Large.args = {
  size: 'lg',
  children: 'Large Button',
}
Large.storyName = 'Large Button 大按钮'

export const Small = Template.bind({})
Small.args = {
  size: 'sm',
  children: 'Small Button',
}
Small.storyName = 'Small Button 小按钮'
