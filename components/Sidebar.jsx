import NavLinks from "./NavLinks";

const Sidebar = () => {
  return (
    <div className="drawer-content bg-base-200 h-full">
      <div className="bg-base-200 p-4">
        <NavLinks />
      </div>
    </div>
  );
};

export default Sidebar;
