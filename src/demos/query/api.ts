export type Repo = {
  id: number;
  name: string;
  stargazers_count: number;
};

export const REPOS_QUERY_KEY = ["github", "repos"];

export const STALE_TIME = 10_000;

const REPOS_URL =
  "https://api.github.com/users/stefegg/repos?per_page=5&sort=updated";

export const fetchRepos = async (
  onRequest: (label: string) => void,
): Promise<Repo[]> => {
  onRequest(`GET ${REPOS_URL}`);

  const response = await fetch(REPOS_URL);
  if (!response.ok) {
    throw new Error(`GitHub request failed: ${response.status}`);
  }

  return response.json();
};
