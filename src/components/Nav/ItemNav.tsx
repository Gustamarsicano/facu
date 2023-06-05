import Link from "next/link"
import { ReactNode } from "react"

type ItemNavProps = {
  children: ReactNode,
  href: string
}

export default function ItemNav({ children, href }: ItemNavProps) {

  return (
    <li id="itemNav" className="rotate-90  opacity-0 transition hover:text-yellow-800 list-none mobile:rotate-0 mobile:ml-4">
      <Link href={href} className="text-lg font-light whitespace-nowrap">
        {children}
      </Link>
    </li>
  )
}