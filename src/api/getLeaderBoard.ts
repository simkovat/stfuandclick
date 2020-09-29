import { TeamDataT } from '../types';
import axios from 'axios';

export type LeaderBoardResultT = { data: TeamDataT[] };

export async function getLeaderboardApi(): Promise<LeaderBoardResultT> {
  const url = 'https://klikuj.herokuapp.com/api/v1/leaderboard';

  try {
    const leaderboardResponse = await axios.get<TeamDataT[]>(url);

    return { data: leaderboardResponse.data };
  } catch (err) {
    throw err;
  }
}
