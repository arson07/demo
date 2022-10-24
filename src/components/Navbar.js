function Navbar() {
  return (
    <nav className="navbar">
      <a className="site-title" href="/default">
        React App
      </a>
      <ul>
        <li>
          <a href="default.asp">Home</a>
        </li>
        <li>
          <a href="news.asp">News</a>
        </li>
        <li>
          <a href="contact.asp">Contact</a>
        </li>
        <li>
          <a href="about.asp">About</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
