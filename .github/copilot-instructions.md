# Copilot Instructions

This repository uses a single authoritative Copilot instruction file at the repository root.

## Source of truth

- The root file at .github/copilot-instructions.md is the repository-wide source of truth.
- There is no active backend-specific repo-wide Copilot instruction file in this project.
- If a local or historical override exists, it must be treated as non-authoritative and must not override repo-wide rules.

## Scope

This project contains a full-stack MERN-style application:

- Frontend/: React client app
- Backend/: Express.js API and supporting files

Keep the responsibilities of each layer clear. Unless a task explicitly spans both layers, keep changes scoped to the relevant area.

## Working conventions

- Prefer small, focused changes that respect the current project structure.
- Preserve the existing naming patterns and architectural conventions used around the changed code.
- Reuse established implementation patterns before introducing new abstractions.
- Keep code readable, explicit, and consistent with nearby files.
- Update the root repo instruction before introducing any nested or local override guidance.

## Migration guidance

This repository is in a staged migration toward a React 18-compatible frontend.

### Phase 1 objective

Phase 1 is documentation and repo governance for the migration. The goal is to make the migration traceable, reproducible, and future-proof without introducing unrelated scope.

### Out-of-scope for this migration

The following are intentionally out of scope for the React 18 migration unless a later phase explicitly includes them:

- Authentication flow completion
- Application deployment setup
- Broad feature redesigns
- Unrelated refactoring not required by React 18 compatibility

### Required workflow for each phase

For each migration phase:

1. Define the objective and the expected target state.
2. Identify the exact files involved.
3. Make only the changes required by that phase.
4. Run the project check for the affected area.
5. Confirm the app still starts without radical runtime errors.
6. Record the result in the migration document.

## Validation expectations

- Prefer the smallest relevant validation command for the changed layer.
- Do not broaden the task into unrelated features or missing course sections.
- Keep the migration trackable: each phase must be clearly documented and verifiable.

## Maintenance note

This repository should maintain a single clear source of truth for AI guidance. Legacy or local guidance may exist only as historical context and must never become the primary repository policy.
