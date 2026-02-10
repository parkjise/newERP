import { Dashboard, DashboardLayout } from "./Home.styles";
import Profile from "./components/profile/Profile";
import Favorites from "./components/favorites/Favorites";
import CardUsage from "./components/card/CardUsage";
import ParthnersSales from "./components/partnersSales/PartnersSales";
import SalesOverview from "./components/salesOverview/SalesOverview";
import ErpApproval from "./components/erpApproval/ErpApproval";
import MyVouchers from "./components/myVouchers/MyVouchers";
import PnlOverview from "./components/pnlOverview/PnlOverview";
import Notice from "./components/notice/Notice";
import Notifications from "./components/notifications/Notifications";
const Home = () => {
  return (
    <Dashboard className="dashboard" aria-label="대시보드">
      <DashboardLayout className="dashboard__layout">
        <Profile />
        <div className="dashboard__col dashboard__col--stack">
          <Favorites />
          <CardUsage />
        </div>
        <ParthnersSales />
        <SalesOverview />
        <MyVouchers />
        <div className="dashboard__col dashboard__col--stack">
          <Notifications />
          <Notice />
        </div>
        <ErpApproval />
        <PnlOverview />
      </DashboardLayout>
    </Dashboard>
  );
};

export default Home;
