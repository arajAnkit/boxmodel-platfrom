import { BestPractices } from "./best-practices";
import { CommonMistakes } from "./common-mistakes";
import { Examples } from "./examples";
import { KeyPoints } from "./key-points";

import { TheorySection as TheorySectionType } from "@/data/theory";

interface TheoryContentProps {
  section: TheorySectionType;
}

export function TheoryContent({ section }: TheoryContentProps) {
  return (
    <div className="theory-content space-y-8">
      <div>
        <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-fuchsia-600 to-teal-500 bg-clip-text text-transparent">
          {section.title}
        </h2>
        <div className="prose prose-lg max-w-none dark:prose-invert">
          <div className="text-foreground leading-relaxed whitespace-pre-line">
            {section.content}
          </div>
        </div>
      </div>

      <KeyPoints keyPoints={section.keyPoints} />
      <Examples examples={section.examples} />
      <BestPractices bestPractices={section.bestPractices} />
      <CommonMistakes commonMistakes={section.commonMistakes} />
    </div>
  );
}
