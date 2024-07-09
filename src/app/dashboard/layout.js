import Header from "./_components/Header";
import SideNave from "./_components/SideNave";

export default function layout({ children }) {
  return (
    <div>
      <div className="md:w-64 fixed hidden md:block">
        <SideNave />
      </div>
      <div className="md:ml-64">
        {" "}
        <Header /> {children}
      </div>
    </div>
  );
}
