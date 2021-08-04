import React, { ReactNode } from "react";
import { Header } from "../Header";
import { Footer } from "../Footer";

type ContentWrapperProps = {
  children: ReactNode | ReactNode[];
};

export function ContentWrapper({ children }: ContentWrapperProps): JSX.Element {
  return (
    <div
      className="h-screen flex flex-col mx-auto px-3"
      style={{ maxWidth: 680 }}
    >
      <Header className="mt-4 mb-8" />
      <main className="flex-grow">{children}</main>
      <Footer className="my-4 text-center" />
    </div>
  );
}
