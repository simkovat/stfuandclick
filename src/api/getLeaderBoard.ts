import { TeamDataT } from '../types';
import axios from 'axios';

export type LeaderBoardResultT = { data: TeamDataT[] };

export async function getLeaderboard(): Promise<LeaderBoardResultT> {
  const url = 'https://klikuj.herokuapp.com/api/v1/leaderboard';

  try {
    const leaderboardResponse = await axios.get<TeamDataT[]>(url);
    // let pageCount = 0
    // const pageLinks = parseLink(issuesResponse.headers.link)

    // if (pageLinks !== null) {
    //   pageCount = getPageCount(pageLinks)
    // }

    return { data: leaderboardResponse.data };
  } catch (err) {
    throw err;
  }
}
