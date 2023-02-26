import React from 'react'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'

import Alert from '../components/Alert'

export default {
  title: '组件/反馈/Alert 警告提示',
  component: Alert,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Alert>

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args}></Alert>

export const Default = Template.bind({})
Default.args = {
  type: 'default',
  children: 'Default Alert',
}
Default.storyName = 'Default Alert 默认警告'

export const Success = Template.bind({})
Success.args = {
  type: 'success',
  children: 'Success Alert',
}
Success.storyName = 'Success Alert 成功警告'

export const Warning = Template.bind({})
Warning.args = {
  type: 'warning',
  children: 'Warning Alert',
}
Warning.storyName = 'Warning Alert 危险警告'

export const Info = Template.bind({})
Info.args = {
  type: 'info',
  children: 'Info Alert',
}
Info.storyName = 'Info Alert 信息警告'

export const Danger = Template.bind({})
Danger.args = {
  type: 'danger',
  children: 'Danger Alert',
}
Danger.storyName = 'Danger Alert 错误警告'

export const Large = Template.bind({})
Large.args = {
  type: 'default',
  size: 'lg',
  children: 'Large Alert',
}
Large.storyName = 'Large Alert 大警告'

export const Small = Template.bind({})
Small.args = {
  type: 'default',
  size: 'sm',
  children: 'Small Alert',
}
Small.storyName = 'Small Alert 小警告'
