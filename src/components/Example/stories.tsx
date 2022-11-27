import { ComponentMeta, ComponentStory } from '@storybook/react'

import Example from '.'

export default {
  title: 'Example',
  component: Example,
  args: { message: 'example' }
} as ComponentMeta<typeof Example>

export const Default: ComponentStory<typeof Example> = (args) => (
  <Example {...args} />
)
