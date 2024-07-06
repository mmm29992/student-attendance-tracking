import SideNave from "./_components/SideNave";

export default function layout({ children }) {
  return (
    <div>
      <div className="w-64 fixed md:block">
        <SideNave />
      </div>
      <div className="md:ml-64">{children}</div>
    </div>
  );
}
