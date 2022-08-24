import MenuBar from "./MenuBar";

function Layout({ children }) {
  return (
    <div className="h-fit flex flex-row justify-start overflow-x-hidden">
      <MenuBar />
      <div className="flex-1 px-5">{children}</div>
    </div>
  );
}

export default Layout;
