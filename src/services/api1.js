// api.js
import axios from "axios";

const API_URL = "https://cricket-live-line1.p.rapidapi.com";
const HEADERS = {
  "x-rapidapi-key": "bf28bf9e08msh8cd6bcab1b37395p1ec4e4jsn3ee8f13b1fe2",
  "x-rapidapi-host": "cricket-live-line1.p.rapidapi.com",
};

export const getPointsTable = async () => {
  try {
    const response = await axios.get(`${API_URL}/points-table`, {
      headers: HEADERS,
    });

    return response.data.pointsTable[0].pointsTableData.map((team) => ({
      team: team.teamShortName,
      played: team.matchesPlayed,
      won: team.matchesWon,
      loss: team.matchesLost,
      points: team.points,
      nrr: team.nrr,
      teamId: team.teamId,
    }));
  } catch (error) {
    console.error(
      "Error fetching points table:",
      error.response?.data || error.message || error
    );
    throw error;
  }
};
