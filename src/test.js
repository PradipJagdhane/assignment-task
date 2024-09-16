const Navbar = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const userRole = localStorage.getItem("userRole"); // Get the role from localStorage

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("userRole"); // Clear the role from localStorage on logout
    setOpen(false);
  };

  return (
    <div className="container-fluid">
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ backgroundColor: "#e3f2fd" }}
      >
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            {userRole === "admin" && (
              <Link to="/home" className="nav-item nav-link">
                Dashboard
              </Link>
            )}
            {userRole === "patient" && (
              <Link to="/about" className="nav-item nav-link">
                Patient
              </Link>
            )}
            <Link to="/setting" className="nav-item nav-link">
              Setting
            </Link>
          </div>
        </div>
        <div className="ml-auto">
          <FaSmile
            size={40}
            style={{ cursor: "pointer" }}
            onClick={handleClickOpen}
          />
        </div>
      </nav>

      <DialogBox open={open} onClose={handleClose} handleLogout={handleLogout} />
    </div>
  );
};

export default Navbar;
