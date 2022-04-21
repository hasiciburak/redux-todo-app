import React from "react";
import ContentFooter from "./ContentFooter"
function Footer() {
  return (
    <footer className="info">
      <p>Click to edit a todo</p>
      <p>
        Created by <a href="https://d12n.me/">Dmitry Sharabin</a>
      </p>
      <p>
        Part of <a href="http://todomvc.com">TodoMVC</a>
      </p>
      <ContentFooter />
    </footer>
  );
}

export default Footer;
