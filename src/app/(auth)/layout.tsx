import React from "react";

interface ReactDomNode {
  children: React.ReactNode;
}

const layout = ({ children }: ReactDomNode) => {
  return (
    <main className="flex min-h-screen w-full items-center justify-center">
      {children}
    </main>
  );
};

export default layout;
