import { createElement, FC } from 'react'
import cn from 'classnames'

interface ContainerProps {
  className?: string
  variant?: keyof HTMLElementTagNameMap
}

const Container: FC<ContainerProps> = ({
  children,
  className,
  variant = 'div',
}) => {
  return createElement(
    variant,
    {
      className: cn(className, 'container mx-auto max-w-5xl px-4'),
    },
    children
  )
}

export default Container
