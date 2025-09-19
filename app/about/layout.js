import Link from 'next/link'
import React from 'react'

export default function layout({children}) {
  return (
    <div>
          {/* navbar  */}
        <nav>
          <ul className="flex gap-4 mb-4">
            <li>
                <Link href={"/about/mission"}> mission </Link>
            </li>
            <li>
              <Link href={"/about/vission"}> Vission </Link>
            </li>
          </ul>
        </nav>
      {children}
    </div>
  )
}
