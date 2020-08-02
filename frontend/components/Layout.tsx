import React, { ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styled from 'styled-components';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{' '}
        |{' '}
        <Link href="/about">
          <a>About</a>
        </Link>{' '}
        |{' '}
        <Link href="/users">
          <a>Users List</a>
        </Link>{' '}
        | <a href="/api/users">Users API</a>
      </nav>
    </Header>
    {children}
    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
  </div>
);

const Header = styled.header`
  display: flex;
  background-color: #3c3c3c;
  height: 64px;
  align-items: center;
  justify-content: center;

  > nav {
    a {
      font-size: 16px;
      margin: 16px;
      color: #ffffff;
    }
  }
`;

export default Layout;
