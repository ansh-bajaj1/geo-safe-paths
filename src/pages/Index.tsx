import { useState } from "react";
import Navigation from "@/components/Navigation";
import LandingPage from "@/components/LandingPage";
import TouristDashboard from "@/components/TouristDashboard";
import AuthorityDashboard from "@/components/AuthorityDashboard";

const Index = () => {
  const [currentPage, setCurrentPage] = useState("home");

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "tourist":
        return <TouristDashboard />;
      case "authority":
        return <AuthorityDashboard />;
      default:
        return <LandingPage onNavigate={handleNavigation} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPage={currentPage} onNavigate={handleNavigation} />
      <div className="pt-16">
        {renderPage()}
      </div>
    </div>
  );
};

export default Index;
