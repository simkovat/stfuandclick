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
  const url = `${process.env.REACT_APP_API_URL}/klik`;

  try {
    const teamResponse = await axios.post<SessionDataT>(url, { team, session });

    return { data: teamResponse.data };
  } catch (err) {
    throw err;
  }
}
