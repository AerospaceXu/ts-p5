export const map = (target: number, s1: number, e1: number, s2: number, e2: number) =>
  ((e2 - s2) * (target - s1) + s2 * (e1 - s1)) / (e1 - s1);
