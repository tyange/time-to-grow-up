'use client'

import parse from 'html-react-parser'
import Image from 'next/image'

interface PortfolioProps {
  content: string
}

export default function Portfolio({ content }: PortfolioProps) {
  return (
    <>
      <Image width={50} height={50} src="/the_sun_computer.png" alt="emoji - sun with computer" />
      {parse(content)}
    </>
  )
}
