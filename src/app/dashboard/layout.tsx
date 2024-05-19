import { NavBar } from "../components/NavBar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`bg-[#10141E]`}>
      <div className=" flex flex-col lg:flex-row">
        <NavBar />
        {children}
      </div>
    </div>
  );
}
