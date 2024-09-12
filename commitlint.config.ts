import { Plugin, UserConfig } from "@commitlint/types";

/**
 * `containIssueNumber`
 *
 * A plugin that enforces the presence of an issue number in commit messages.
 *
 * The plugin checks if the commit message contains an issue number in the format `#<number>`,
 * such as `#123`. This helps ensure that each commit is linked to a specific issue or task.
 *
 * Structure:
 * - `rules`
 *   - `"contains-issue-number"`: A validation rule that checks for the presence of an issue number in the commit message.
 *
 * Rule Details:
 * - The rule expects the commit message to contain an issue number in the format `#<number>` (e.g., `#123`).
 * - It returns a boolean indicating whether the rule is satisfied and a message explaining the requirement.
 *
 * Example Pattern:
 * - `/#\d+/` matches a string that includes a '#' character followed by one or more digits.
 */
const containIssueNumber = {
    rules: {
        "contains-issue-number": ({ raw }) => {
            const issueNumberPattern = /#\d+/; // Example: "#123"

            const isValid = issueNumberPattern.test(raw as string);
            ("?");

            return [
                isValid,
                "Commit message must contain an issue number (e.g., #123)",
            ];
        },
    },
} satisfies Plugin;

const config: UserConfig = {
    extends: ["@commitlint/config-conventional"],
    plugins: [containIssueNumber],
    rules: {
        "contains-issue-number": [2, "always"],
    },
};

export default config;
