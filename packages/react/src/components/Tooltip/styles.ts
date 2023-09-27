import * as Tooltip from '@radix-ui/react-tooltip'
import { styled } from '../../styles'

export const TooltipContainer = styled(Tooltip.Content, {
  color: '$gray100',
  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$medium',
  padding: '$3 $4',
  borderRadius: '$xs',
  background: '$gray900',
  filter: 'drop-shadow(4px 16px 24px rgba(0, 0, 0, 0.25))',
})

export const TooltipArrow = styled(Tooltip.Arrow, {
  fill: '$gray900',
})
