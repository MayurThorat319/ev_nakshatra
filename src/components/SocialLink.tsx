import { useState } from "react"

type SocialLinkProps = {
  href: string
  label: string
  icon: React.ReactNode
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, label, icon }) => {
  const [clicked, setClicked] = useState(false)

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!clicked) {
      e.preventDefault() // stop navigation on first click
      setClicked(true)   // trigger animation
      // reset after some time if needed
      setTimeout(() => setClicked(false), 2000)
    }
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      onClick={handleClick}
      className={`social-link ${clicked ? "animate" : ""}`}
    >
      {icon}
    </a>
  )
}

export default SocialLink