import React from "react";

function Main({ children }) {
  return (
    <main className="max-w-[80ch] mx-auto py-10 md:py-20 px-5">{children}</main>
  );
}

export default Main;
