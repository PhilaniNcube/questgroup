import DesktopNav from "./_components/navigation/desktop-nav";
import MobileNavigation from "./_components/navigation/mobile-navigation";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <DesktopNav />
      <MobileNavigation />
      {children}
    </div>
  );
};
export default layout;
