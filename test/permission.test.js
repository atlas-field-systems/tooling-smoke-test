import assert from "node:assert/strict";
import test from "node:test";
import { hasAccess } from "../src/permission.js";

test("allows the resource owner", () => {
  assert.equal(hasAccess({ id: "operator-1" }, { ownerId: "operator-1" }), true);
});

test("denies a different identity", () => {
  assert.equal(hasAccess({ id: "operator-2" }, { ownerId: "operator-1" }), false);
});
