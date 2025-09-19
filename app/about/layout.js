import React from 'react'

export default function layout({children}) {
  return (
    <div>
        <nav>about || navigation</nav>
      {children}
    </div>
  )
}
