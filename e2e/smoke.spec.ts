import { test, expect } from "@playwright/test";

const routes = [
  { path: "/", anchor: "Stef Egbert" },
  { path: "/about", anchor: "Technical Skills" },
  { path: "/experience", anchor: "Palla Financial" },
  { path: "/projects", anchor: "StefCo. Store" },
  { path: "/contact", anchor: "Get in touch" },
];

test.describe("route smoke", () => {
  for (const { path, anchor } of routes) {
    test(`${path} renders`, async ({ page }) => {
      await page.goto(path);
      await expect(
        page.getByText(anchor, { exact: false }).first(),
      ).toBeVisible();
    });
  }
});

test.describe("navigation", () => {
  test("nav links move between the main routes", async ({ page }) => {
    await page.goto("/");

    await page.getByRole("link", { name: "About" }).click();
    await expect(page).toHaveURL(/\/about$/);
    await expect(page.getByText("Technical Skills")).toBeVisible();

    await page.getByRole("link", { name: "Experience" }).click();
    await expect(page).toHaveURL(/\/experience$/);

    await page.getByRole("link", { name: "Projects" }).click();
    await expect(page).toHaveURL(/\/projects$/);

    await page.getByRole("link", { name: "Contact" }).click();
    await expect(page).toHaveURL(/\/contact$/);
  });
});
