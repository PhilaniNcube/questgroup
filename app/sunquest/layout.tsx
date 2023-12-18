import DesktopNavigation from "./_components/navigation/desktop";
import MobileNav from "./_components/navigation/mobile";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <DesktopNavigation />
      <MobileNav />
      {children}
    </div>
  );
};
export default layout;
