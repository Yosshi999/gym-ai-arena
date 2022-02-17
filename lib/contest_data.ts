export type Contest = {
  name: string; 
  id: number;
  startUnixTime: number;
  endUnixTime: number;
  description: {ja: string, en: string};
};

const contests: {[id: number]: Contest} = {
  1: {
    name: "The first contest",
    id: 1,
    startUnixTime: new Date('2022-01-01T00:00:00+09:00').getTime(),
    endUnixTime: new Date('2023-01-01T00:00:00+09:00').getTime(),
    description: {
      ja: "はろーわーるど!",
      en: "Hello, world!",
    },
  },
  2: {
    name: "The second contest",
    id: 2,
    startUnixTime: new Date('2023-01-01T00:00:00+09:00').getTime(),
    endUnixTime: new Date('2024-01-01T00:00:00+09:00').getTime(),
    description: {
      ja: "はろーわーるど2!",
      en: "Hello, world 2!",
    },
  },
};

export const getContests = (): {[id: number]: Contest} => {
  const now = new Date().getTime();
  const info = {};
  for (const key of Object.keys(contests)) {
    const { name, id, startUnixTime, endUnixTime, description } = contests[key];
    const isRevealed = startUnixTime <= now;
    info[key] = {
      name,
      id,
      startUnixTime,
      endUnixTime,
      description: {
        ja: (isRevealed ? description.ja : "**まだ開始していません**"),
        en: (isRevealed ? description.en : "**Not started yet**"),
      }
    };
  }
  return info;
}