import { memo, type FC } from 'react'
import { Flex, type FlexProps } from './Flex'

type VStackProps = Omit<FlexProps, "direction">

export const VStack: FC<VStackProps> = memo(({ ...rest }) => {
  return (
     <Flex direction='column' {...rest}/>
  )
})
