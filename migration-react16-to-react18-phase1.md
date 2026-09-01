# Migration Plan: React 16 to React 18 (Phase 1)

## Purpose

This document defines Phase 1 of the React 16 to React 18 migration for this repository. It is intentionally structured as a durable guide for future work and for anyone who is facing the same compatibility issues in a similar project.

The goal of Phase 1 is to create the governance and documentation foundation before making code changes. In this phase, the project is not being refactored beyond what is needed to establish a clean migration path.

## Why this migration matters

The project still contains several React 16-era patterns:

- React and React DOM are pinned to an older major version in [Frontend/package.json](Frontend/package.json).
- The app root still uses the legacy render API in [Frontend/src/index.js](Frontend/src/index.js).
- The route structure in [Frontend/src/App.js](Frontend/src/App.js) reflects an older React Router pattern.

These are not random warnings; they are compatibility indicators. When a project is in this state, warning chasing becomes expensive and confusing. A disciplined migration process reduces the cost substantially.

## Scope and constraints

### In scope for this phase

- Repository guidance cleanup
- Migration planning and documentation
- Definition of the migration strategy and expected workflow
- Naming and ownership conventions for guidance files
- Establishing the source-of-truth rule for Copilot instructions

### Out of scope for this phase

The following are explicitly not part of this phase:

- Authentication feature completion
- Deployment configuration
- Broad app redesign
- Unrelated refactoring outside the compatibility migration
- Advanced improvements not required to reach a React 18-compatible baseline

The user specifically noted that the course content is still incomplete in those areas and that this migration should not be diluted by work that is not yet part of the needed compatibility work.

## Repository guidance decision

The repository should use one authoritative instruction file at the project root:

- .github/copilot-instructions.md

The backend-specific file should not be treated as repo-wide policy. It was intentionally removed because the project needs a single source of truth rather than multiple overlapping instruction files.

This decision is important because duplicated instruction files create ambiguity and waste time when the developer or AI system tries to decide which guidance to follow.

## Required file layout

This is the intended project guidance layout:

- .github/copilot-instructions.md
- migration-react16-to-react18-phase1.md
- Frontend/
- Backend/

This layout ensures:

- a single source of truth for repo-wide guidance
- a migration document that can be used as a reference later
- a clear separation between frontend and backend work

## Migration process standard

For each phase of this migration, the process should follow this pattern:

1. Define the target state.
2. Identify the files involved.
3. Limit the change to the required scope.
4. Make the minimal necessary modification.
5. Verify the affected project layer still runs without radical errors.
6. Document the outcome and the remaining risks.

This ensures the work remains controlled and reduces rework.

## Phase 1 deliverables

### Deliverable A: repo-level Copilot guidance

The root file should define:

- the repo-wide source of truth
- the architecture boundaries between frontend and backend
- the migration direction toward React 18
- the expected workflow for each phase
- the rule that nested instruction files are non-authoritative unless explicitly justified

### Deliverable B: migration documentation

This document should clearly state:

- why the migration is needed
- what the repo currently looks like
- what the target state is
- what is deliberately out of scope
- how validation should be performed for future phases

### Deliverable C: guardrails for future work

The migration should intentionally preserve focus and avoid scope creep.

The following are explicit guardrails:

- Do not expand into deployment work in the same phase.
- Do not revisit missing course sections unless they are directly required for compatibility.
- Do not chase every warning at once; handle warnings in migration order.
- Do not combine unrelated cleanup with the React 18 migration.

## Execution strategy for future phases

### Phase 2: dependency and runtime compatibility update

Once the documentation is in place, the next phase will be the actual compatibility update:

- update React and React DOM to React 18
- review the render entry point for the modern API
- inspect the route structure for compatibility with the selected router version
- validate the frontend builds and starts normally

### Phase 3: route and component harmonization

The next phase will focus on route flow and app-level component behavior:

- fix redirect logic
- verify auth gating behavior remains stable
- adjust route structure to match the targeted router version
- remove any remaining compile-time or runtime incompatibilities

### Phase 4: warning reduction and validation

The later phase will reduce warning noise and confirm the app still behaves normally after the migration.

This should not become a free-form cleanup. The goal is not to fix everything at once; the goal is to move toward the React 18-compatible baseline logically and safely.

## Validation standard

This repository should validate the app after every phase in the following way:

1. run the relevant frontend command
2. verify the app starts successfully
3. check for radical runtime errors or startup failures
4. record the result
5. move to the next phase only when the current phase is stable

This is the primary protection against introducing a migration that looks good on paper but breaks the app in practice.

## Definition of done for Phase 1

Phase 1 is complete when all of the following are true:

- a single root-level Copilot instruction file exists
- the migration document exists and clearly describes the phased strategy
- the migration scope is deliberately limited to the React 18 compatibility work
- the missing authentication and deployment sections are explicitly excluded from this migration path
- the repo has a clear source-of-truth rule for future AI-assisted and developer work

## Phase 2 status update

Phase 2 is the first actual compatibility upgrade step. The frontend dependency baseline was updated to React 18, and the app bootstrap was migrated from the legacy ReactDOM.render pattern to the React 18 createRoot API.

This was intentionally kept narrow and focused on the compatibility boundary that is required for the React 18 migration.

### Files changed in Phase 2

- [Frontend/package.json](Frontend/package.json)
- [Frontend/src/index.js](Frontend/src/index.js)

### Validation performed for Phase 2

The frontend was validated with the build command after the dependency and bootstrap changes. The current status is that the app compiles successfully after the React 18 upgrade step.

### Phase 2 target state

The frontend should now be aligned with the React 18 render model with no remaining legacy root render pattern in the app bootstrapping layer.

## Phase 3 status update

Phase 3 focuses on route and app-level compatibility cleanup. The app bootstrap has already been updated to React 18, and the next boundary is the route structure itself.

The route tree was simplified to use a single Switch per authentication state and to avoid the redundant nested Switch pattern that was being rendered inside the main layout.

### Files changed in Phase 3

- [Frontend/src/App.js](Frontend/src/App.js)

### Validation performed for Phase 3

The frontend build was re-run after the route cleanup to confirm the app still compiles normally with the React 18 baseline.

### Phase 3 target state

The app should now be aligned across the React 18 bootstrap layer and the route tree, without carrying the redundant nested routing structure that adds noise and maintenance overhead.

## Final note

This phase is intentionally conservative. It establishes the migration foundation, prevents confusion, and makes the later compatibility work easier to manage. The project does not need to be fully modernized in one jump; it needs a disciplined path that is documented, validated, and safe.
