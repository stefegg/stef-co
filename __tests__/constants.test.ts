import { experiences, projects, skills } from "@/app/_utils/constants";

describe("experiences data", () => {
  it("is a non-empty array of well-formed entries", () => {
    expect(Array.isArray(experiences)).toBe(true);
    expect(experiences.length).toBeGreaterThan(0);
    for (const exp of experiences) {
      expect(typeof exp.title).toBe("string");
      expect(typeof exp.dates).toBe("string");
      expect(typeof exp.company).toBe("string");
      expect(typeof exp.location).toBe("string");
      expect(Array.isArray(exp.duties)).toBe(true);
      expect(exp.duties.length).toBeGreaterThan(0);
      exp.duties.forEach((duty) => expect(typeof duty).toBe("string"));
    }
  });
});

describe("projects data", () => {
  it("is a non-empty array of well-formed entries", () => {
    expect(Array.isArray(projects)).toBe(true);
    expect(projects.length).toBeGreaterThan(0);
    for (const project of projects) {
      expect(typeof project.title).toBe("string");
      expect(typeof project.link).toBe("string");
      expect(typeof project.description).toBe("string");
      expect(Array.isArray(project.techStack)).toBe(true);
      expect(project.techStack.length).toBeGreaterThan(0);
      project.techStack.forEach((tech) => expect(typeof tech).toBe("string"));
    }
  });
});

describe("skills data", () => {
  it("is a non-empty array of categories, each with items", () => {
    expect(Array.isArray(skills)).toBe(true);
    expect(skills.length).toBeGreaterThan(0);
    for (const group of skills) {
      expect(typeof group.category).toBe("string");
      expect(Array.isArray(group.items)).toBe(true);
      expect(group.items.length).toBeGreaterThan(0);
      group.items.forEach((item) => expect(typeof item).toBe("string"));
    }
  });
});
