import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@ignite-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/lucasadsr.png',
    alt: 'Lucas Ribeiro'
  },
  argTypes: {
    src: {
      control: {
        type: 'text'
      }
    }
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const withFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined
  }
}