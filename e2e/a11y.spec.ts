import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const routes = ["/", "/about", "/experience", "/projects", "/contact"];

test.describe("accessibility (WCAG 2 AA)", () => {
  for (const path of routes) {
    test(`${path} has no axe violations`, async ({ page }) => {
      await page.goto(path);
      const { violations } = await new AxeBuilder({ page })
        .exclude(".font-outline-3")
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
        .analyze();

      if (violations.length) {
        const summary = violations
          .map(
            (v) =>
              `  [${v.impact}] ${v.id}: ${v.help} (${v.nodes.length} node(s))\n    ${v.helpUrl}`,
          )
          .join("\n");
        console.log(
          `\n${path} — ${violations.length} violation(s):\n${summary}\n`,
        );
      }

      expect(violations).toEqual([]);
    });
  }
});
