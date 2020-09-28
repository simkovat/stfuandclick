import axios from 'axios';

export type SessionDataT = { your_clicks: number; team_clicks: number };

export type ClickResultT = { data: SessionDataT };

export async function recordClickApi({
  team,
  session,
}: {
  team: string;
  session: string;
}): Promise<ClickResultT> {
  const url = 'https://klikuj.herokuapp.com/api/v1/klik';

  try {
    const teamResponse = await axios.post<SessionDataT>(url, { team, session });

    return { data: teamResponse.data };
  } catch (err) {
    throw err;
  }
}
