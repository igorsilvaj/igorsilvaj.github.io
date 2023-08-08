import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h2>CMS Layout</h2>
      {children}
    </div>
  );
}