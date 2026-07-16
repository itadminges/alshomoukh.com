---
name: update-website-content
description: Updates the website text content based on a provided text file while strictly preserving the UI design and layout.
---

# Update Website Content Skill

When the user asks to update the website content from a text file, follow these instructions strictly:

1. **Read the Source File:** Use the appropriate tool to read the contents of the provided text file (e.g., `content.txt`).
2. **Identify Target Files:** Locate the corresponding files in the codebase (e.g., in the `app`, `components`, or `content` directories) that currently hold the text to be replaced.
3. **Update Text ONLY:** Carefully replace the old text with the new text from the source file.
4. **CRITICAL CONSTRAINT - NO UI/DESIGN CHANGES:** 
   - DO NOT edit any CSS, Tailwind classes, or styled-components.
   - DO NOT change any HTML/JSX structure, tags, or layout.
   - DO NOT modify component props that dictate styling, behavior, or layout.
   - Your changes MUST be limited exclusively to the text content within the existing tags.
5. **Verify:** Ensure that no syntax errors were introduced during the text replacement.
