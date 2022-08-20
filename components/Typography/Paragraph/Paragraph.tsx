import { ReactNode } from 'react'

interface ParagraphTypes {
  children: ReactNode
  className?: String
}

const Paragraph = ({ children, className }: ParagraphTypes) => {
  return (
    <p className={`text-sm leading-5 md:text-base text-gray-200 ${className ? className : ''}`}>
      {children}
    </p>
  )
}

export default Paragraph
