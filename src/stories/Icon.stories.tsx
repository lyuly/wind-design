import React from 'react'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import Icon from '../components/Icon'

export default {
  title: '组件/通用/Icon 图标',
  component: Icon,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Icon>

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args}></Icon>

export const Default = Template.bind({})
Default.args = {
  name: 'daimawangzhan',
  style: { color: 'black' },
}
Default.storyName = 'Default Icon 默认图标'

export const Loading = Template.bind({})
Loading.args = {
  name: 'loading',
  loading: true,
}
Loading.storyName = 'Loading Icon 加载图标'

export const Search = Template.bind({})
Search.args = {
  name: 'sousuo',
}
Search.storyName = 'Search Icon 搜索图标'

export const Color = Template.bind({})
Color.args = {
  name: 'aixin',
  style: { color: 'red' },
}
Color.storyName = 'Color Icon 多彩图标'
