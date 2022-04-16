import cn from 'classnames'
import React, { FC, MouseEventHandler, useMemo } from 'react'

interface IconButton {
  size?: 'sm' | 'md' | 'lg'
  hidden?: boolean
  handleClick?: MouseEventHandler
}

const IconButton: FC<IconButton> = ({
  size = 'md',
  children,
  hidden = false,
  handleClick,
}) => {
  const sizeToken = useMemo(
    () => `text-${size === 'md' ? 'base' : size}`,
    [size]
  )
  const style = useMemo(
    () =>
      cn('rounded-full p-2 hover:bg-gray-200 active:bg-gray-300', sizeToken, {
        hidden,
      }),
    [sizeToken, hidden]
  )

  return (
    <button className={style} onClick={handleClick}>
      {children}
    </button>
  )
}

export default IconButton
