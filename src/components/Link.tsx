import { FC, PropsWithChildren } from "react"

interface LinkProps {
    href: string
}

export const Link: FC<PropsWithChildren<LinkProps>> = ({ href, children }) => {
    return <a href={href} target="_blank" rel='noreferrer'>{children}</a>
}