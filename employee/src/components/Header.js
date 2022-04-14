import React from "react";

function Header({ title }) {
  return (
    <header className="p-5 bg-blue-500 text-white text-3xl font-bold">
      <div className="flex items-center">
        <img
          src="https://via.placeholder.com/50/E2E4F0?Text=Digital.com"
          alt=""
          className="rounded"
        />
        <h1 className="ml-5">{title}</h1>
      </div>
    </header>
  );
}

export default Header;
