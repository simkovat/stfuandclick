import { TeamDataT } from '../types';
import axios from 'axios';

export type LeaderboardResultT = { data: TeamDataT[] };

export async function getLeaderboardApi(): Promise<LeaderboardResultT> {
  const url = `${process.env.REACT_APP_API_URL}/leaderboard`;

  const leaderboardResponse = await axios.get<TeamDataT[]>(url);

  return { data: leaderboardResponse.data };
}
