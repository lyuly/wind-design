import React from 'react'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import { BrowserRouter as Router } from 'react-router-dom'

import Breadcrumb from '../components/Breadcrumb'

export default {
  title: '组件/导航/Breadcrumb 面包屑',
  component: Breadcrumb,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Breadcrumb>

const Template: ComponentStory<typeof Breadcrumb> = (args) => (
  <Router>
    <Breadcrumb {...args}></Breadcrumb>
  </Router>
)

export const Default = Template.bind({})
Default.args = {
  options: [
    {
      label: 'Home',
      to: 'https://www.google.com',
    },
    {
      label: 'Person',
      to: '/',
    },
    {
      label: 'Info',
      to: '/info',
    },
  ],
}
Default.storyName = 'Default Breadcrumb 默认面包屑'

export const Active = Template.bind({})
Active.args = {
  options: [
    {
      label: 'Home',
      to: 'https://www.google.com',
      active: true,
    },
    {
      label: 'Person',
      to: '',
    },
    {
      label: 'Info',
      to: '/info',
    },
  ],
}
Active.storyName = 'Active Breadcrumb 活跃面包屑'
