import HomeIcon from "@mui/icons-material/Home";
const Sidebar = () => {
  return (
    <>
      <div class="sidebar">
        <span className="sidebar_li">
          <a class="sidebar_a" href="/">
            <span className="sidebar_icon">
              <HomeIcon />
            </span>
            &nbsp;<span className="sidebar_name">Home</span>
          </a>
        </span>
        <span className="sidebar_li">
          <a class="sidebar_a" href="/">
            <span className="sidebar_icon">
              <HomeIcon />
            </span>
            <span className="sidebar_name">Home</span>
          </a>
        </span>
        <span className="sidebar_li">
          <a class="sidebar_a" href="/">
            <span className="sidebar_icon">
              <HomeIcon />
            </span>
            &nbsp;<span className="sidebar_name">Home</span>
          </a>
        </span>
        <span className="sidebar_li">
          <a class="sidebar_a" href="/">
            <span className="sidebar_icon">
              <HomeIcon />
            </span>
            &nbsp;<span className="sidebar_name">Home</span>
          </a>
        </span>
      </div>
    </>
  );
};

export default Sidebar;
