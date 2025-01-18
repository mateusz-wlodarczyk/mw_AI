import NavLinks from "./NavLinks";

const Sidebar = () => {
  return (
    <div className="drawer-content">
      <div className="bg-base-200 p-4">
        <NavLinks />
      </div>
    </div>
  );
};

export default Sidebar;
