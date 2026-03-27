# Live Preview Plan

This note records how live preview publishing from a fork should be handled during the MkDocs migration.

## Decision

Branch-based live preview publishing is a later-step improvement, not part of the first implementation pass.

For now, implementation work should continue locally using MkDocs local preview. Fork-hosted online preview should be added after the core 2.12 site and publishing flow are stable enough to review in a browser outside the local machine.

## Why This Is Deferred

- local iteration is faster than remote preview publishing
- the 2.12 site structure and workflow are still evolving
- it is better to avoid extra GitHub Actions and Pages work until the docs shape is more stable
- preview infrastructure is most useful once there is substantial site work ready for review

## Recommended Order

1. implement the 2.12 docs and MkDocs site locally
2. validate the site with local preview
3. finish the core publish workflow for 2.12, `dev`, and `latest`
4. add branch-based live preview publishing for fork branches
5. use live previews for review, polish, and upstream PR preparation

## Intended Future Workflow

When live preview support is added, the preferred workflow should be:

1. create a feature branch in the fork
2. push the branch to the fork
3. publish a live preview from that branch
4. review and fix issues
5. open or update the upstream PR

This keeps the fork `main` branch clean and makes previewable work align with the PR workflow.

## Non-Goal

The project does not need fork-hosted live preview before the core migration work is done locally.
