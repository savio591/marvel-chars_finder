import React from "react";
import "../styles/header.css";

export function Header() {
  return (
    <>
      <header>
        <img src="assets/logo.svg" alt="Logo Objective" />
        <div className="profile_header">
          <section>
            <h3>Savio Castelo</h3>
            <h4>Teste de Front-end</h4>
          </section>
          <button>
            <p>CB</p>
          </button>
        </div>
      </header>
    </>
  );
}
Header()