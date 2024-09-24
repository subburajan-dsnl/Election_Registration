// src/components/layouts/MainLayout.tsx
import React from 'react';

const AuthLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="main-layout">
      <main>{children}</main>
    </div>
  );
};

export default AuthLayout;
