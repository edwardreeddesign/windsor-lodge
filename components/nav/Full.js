import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Banner from "./Banner";
import { links } from "./Links";
import { Header, Nav, Logo, ListItems } from "./NavStyles";

const Full = () => {
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
        <ListItems>
          <li>
            {links.map(link => (
              <Link href={link.url} key={link.name}>
                <a className={router.pathname === link.url ? "active" : ""}>
                  {link.name}
                </a>
              </Link>
            ))}
          </li>
        </ListItems>
      </Nav>
    </Header>
  );
};

export default Full;
