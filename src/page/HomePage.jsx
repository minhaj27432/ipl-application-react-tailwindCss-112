import Heros from "../components/Heros";
import TeamStanding1 from "../components/TeamStanding1";
import StatsSection from "../components/StartSection";
import Footer from "../components/Footer";
export default function HomePage() {
  return (
    <div className="min-h-screen bg-[url('/Stadium1.jpg')] bg-cover bg-center bg-fixed">
      <div className="min-h-screen bg-black/40">
        <div className="space-y-12 pb-12">
          <div className="bg-opacity-90">
            <Heros />
          </div>

          <div className="bg-opacity-90">
            <TeamStanding1 />
          </div>

          <div className="bg-opacity-90">
            <StatsSection />
          </div>
        </div>
      </div>
      <div className="bg-opacity-90">
        <Footer />
      </div>
    </div>
  );
}
