import React from 'react'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'

import Breadcrumb from '../components/Breadcrumb'

export default {
  title: '组件/导航/Breadcrumb 面包屑',
  component: Breadcrumb,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Breadcrumb>

const Template: ComponentStory<typeof Breadcrumb> = (args) => (
  <Breadcrumb {...args}></Breadcrumb>
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
      to: '/Person',
    },
    {
      label: 'Info',
      to: '/info',
    },
  ],
}
Default.storyName = 'Default Breadcrumb 默认面包屑'
