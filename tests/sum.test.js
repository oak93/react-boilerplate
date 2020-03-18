import { sum } from "@/utils/sum";

test("sum", () => {
  const result = sum(2, 3);
  expect(result).toBe(5);
});
