import { memo, type FC } from 'react'
import { Flex, type FlexProps } from './Flex'

type HStackProps = Omit<FlexProps, "direction">

export const HStack: FC<HStackProps> = memo(({ ...rest }) => {
  return (
     <Flex direction='row' {...rest}/>
  )
})
