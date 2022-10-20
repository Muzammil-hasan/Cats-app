import { Fragment, ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';
import Header from './Header';

type Props = { children: ReactNode };

export default function Layout({ children }: Props) {
  return (
    <Fragment>
      <Header />
      <main>{children}</main>
      <Toaster position="top-right" />
    </Fragment>
  );
}
