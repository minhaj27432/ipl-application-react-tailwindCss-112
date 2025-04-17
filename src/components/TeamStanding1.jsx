// TeamStanding.jsx
import { useState, useEffect } from "react";
import { getPointsTable } from "../services/api1";
import LoadingSpinner from "../ui/Loader";

const TeamStanding = () => {
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Map team IDs to emojis/colors
  const teamEmojis = {
    CSK: "🟩", // Chennai Super Kings
    RCB: "🟪", // Royal Challengers Bangalore
    MI: "🟫", // Mumbai Indians
    GT: "🟦", // Gujarat Titans
    LSG: "🟧", // Lucknow Super Giants
    RR: "🟨", // Rajasthan Royals
    DC: "🟥", // Delhi Capitals
    PBKS: "🟧", // Punjab Kings
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPointsTable();
        setTableData(data);
      } catch (err) {
        setError("Failed to load points table. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <LoadingSpinner size="lg" className="mx-auto mt-8" />;
  if (error) return <div className="text-red-500 text-center p-4">{error}</div>;

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        IPL Points Table 2024
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50">
              <th className="p-3 text-left">Team</th>
              <th className="p-3 text-center">P</th>
              <th className="p-3 text-center">W</th>
              <th className="p-3 text-center">L</th>
              <th className="p-3 text-center">Points</th>
              <th className="p-3 text-center">NRR</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((team, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="p-3">
                  <span className="mr-2 text-xl">
                    {teamEmojis[team.team] || "⬜"}
                  </span>
                  {team.team}
                </td>
                <td className="p-3 text-center">{team.played}</td>
                <td className="p-3 text-center">{team.won}</td>
                <td className="p-3 text-center">{team.loss}</td>
                <td className="p-3 text-center font-semibold">{team.points}</td>
                <td className="p-3 text-center">{team.nrr}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TeamStanding;
