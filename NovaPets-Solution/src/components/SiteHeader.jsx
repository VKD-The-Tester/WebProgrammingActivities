import "../components-styling/SiteHeader.css";

const SiteHeader = ({ children }) => {
  return (
    <header className="site-header">
      <div className="container header-inner">{children}</div>
    </header>
  );
};

export default SiteHeader;
