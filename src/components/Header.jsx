function Header() {
  return (
    <header className="h-28 w-screen bg-teal-300 object-contain">
      <img
        className="h-full w-full"
        // src="../images/bg-header-mobile.svg"
        srcSet="../images/bg-header-mobile.svg 600w, ../images/bg-header-desktop.svg 1024w"
        alt=""
      />
    </header>
  );
}

export default Header;
