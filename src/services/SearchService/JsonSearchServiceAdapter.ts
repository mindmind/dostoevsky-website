import ukRf from "content/ук-рф.json";
import { Clause, Chapter, Section } from "src/types";
import type {
  SearchResult,
  SearchServiceAdapter,
} from "./SearchServiceAdapter";

class JsonSearchAdapter implements SearchServiceAdapter {
  async getArticlesByText(
    query: string,
    locale: "ru"
  ): Promise<SearchResult[]> {
    const results: SearchResult[] = [];
    const queryRegexp = new RegExp(query.trim(), "i");
    for (const part of ukRf) {
      if (queryRegexp.test(part.text[locale])) {
        results.push(this.transformPart(part));
      }
      for (const section of part.children) {
        if (queryRegexp.test(section.text[locale])) {
          results.push(this.transformSection(part, section));
        }
        for (const clause of section.children) {
          if (clause.id.toString() === query.trim()) {
            results.push(this.transformClause(clause));
            continue;
          }
          if (queryRegexp.test(clause.text[locale])) {
            results.push(this.transformClause(clause));
            continue;
          }
        }
      }
    }
    return results;
  }

  private transformClause(clause: Clause): SearchResult {
    return {
      text: clause.text,
      id: clause.id.toString(),
      type: "clause",
    };
  }

  private transformPart(chapter: Chapter): SearchResult {
    return {
      text: chapter.text,
      id: chapter.id.toString(),
      type: "chapter",
    };
  }

  private transformSection(chapter: Chapter, section: Section): SearchResult {
    return {
      text: section.text,
      id: section.id.toString(),
      chapterId: chapter.id.toString(),
      type: "section",
    };
  }
}

export default JsonSearchAdapter;
