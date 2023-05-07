import React from 'react'
const PageTitle = ({children, title}) => {
    document.title = `ZAStore - ${title}`;
  return (
    <div>{children}</div>
  )
}

export default PageTitle;