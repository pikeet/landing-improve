import React from 'react'

interface IContainerFluid{
  classes: string;
  children: React.ReactNode;
}

export const ContainerFluid = ({children, classes} : IContainerFluid) => {
  return (
    <div className={classes}>
      {children}
    </div>
  )
}
