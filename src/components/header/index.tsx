import Link from 'next/link'
import Image from 'next/image'
import { HeaderStyled } from './styled'
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  }

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <HeaderStyled>
      <div className="container">
        <div className="logo">
          <Link href="/#home">
            <a>
              <Image src="/logo.png" width={150} height={60} />
            </a>
          </Link>
        </div>
        <ul className={`menu ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <Link href="#home">
              <a onClick={closeMenu}>INÍCIO</a>
            </Link>
          </li>
          <li>
            <Link href="#home">
              <a onClick={closeMenu}>QUEM SOMOS</a>
            </Link>
          </li>
          <li>
            <Link href="#home">
              <a onClick={closeMenu}>PRODUTOS</a>
            </Link>
          </li>
          <li>
            <Link href="#home">
              <a onClick={closeMenu}>EQUIPE</a>
            </Link>
          </li>
          <li>
            <Link href="#home">
              <a onClick={closeMenu}>CONTATO</a>
            </Link>
          </li>
        </ul>

        <div className="btn_menu" onClick={handleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" /></svg>
        </div>
      </div>
    </HeaderStyled>
  )
}

export default Header;
