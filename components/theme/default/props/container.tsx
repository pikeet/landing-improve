import React from 'react'

interface IContainer{
  children: React.ReactNode;
  classes: string;
}

export const Container = ({children, classes}: IContainer) => {
  return (
    <div className={classes}>
      {children}
    </div>
  )
}
