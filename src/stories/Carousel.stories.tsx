import React from 'react'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'

import Carousel from '../components/Carousel'

export default {
  title: '组件/数据展示/Carousel 轮播图',
  component: Carousel,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Carousel>

const Template: ComponentStory<typeof Carousel> = (args) => (
  <Carousel></Carousel>
)

export const Default = Template.bind({})
Default.args = {}
Default.storyName = 'Default Carousel 默认轮播图'
