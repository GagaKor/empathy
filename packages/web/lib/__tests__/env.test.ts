import { getApiBase } from "../env";
import { expect, test } from "vitest";

test("reads NEXT_PUBLIC_API_BASE", () => {
  process.env.NEXT_PUBLIC_API_BASE = "http://localhost:4000";
  expect(getApiBase()).toBe("http://localhost:4000");
});
