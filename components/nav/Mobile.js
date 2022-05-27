import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { links } from "./Links";
import { useRouter } from "next/router";
import { Header, Nav, Logo, MobileList, Hamburger } from "./NavStyles";
import Banner from "./Banner";

const Mobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const router = useRouter();

  return (
    <Header>
      <Banner />

      <Nav>
        <Logo>
          <Link href='/'>
            <a>
              <Image
                src='/images/logos/logo.png'
                alt='Header Logo'
                layout='fill'
              />
            </a>
          </Link>
        </Logo>
        <Hamburger onClick={toggle} isOpen={isOpen}>
          <div className='line line1'></div>
          <div className='line line2'></div>
          <div className='line line3'></div>
        </Hamburger>
        <MobileList toggle={toggle} isOpen={isOpen}>
          <li>
            {links.map(link => (
              <Link href={link.url} key={link.name}>
                <a
                  className={router.pathname === link.url ? "active" : ""}
                  onClick={toggle}
                >
                  {link.name}
                </a>
              </Link>
            ))}
          </li>
        </MobileList>
      </Nav>
    </Header>
  );
};

export default Mobile;
