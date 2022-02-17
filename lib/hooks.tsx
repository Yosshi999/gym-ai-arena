import useSWR from "swr";
import { Contest } from "./contest_data";

export const fetcher = (url: string) => fetch(url).then((r) => r.json());

export function useContests() {
  const { data, mutate } = useSWR('/api/contests', fetcher);
  const loading = !data;
  const contests = data?.contests as Contest[];
  return { data: contests, mutate, loading };
}

export function useContest(id: string) {
  const { data, mutate } = useSWR(`/api/contest/${id}`, fetcher);
  const loading = !data;
  return { data: data?.contest, mutate, loading };
}