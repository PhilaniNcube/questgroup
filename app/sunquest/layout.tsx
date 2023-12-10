import DesktopNavigation from "./_components/navigation/desktop";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <DesktopNavigation />
      {children}
    </div>
  );
};
export default layout;
