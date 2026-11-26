**Topic:** AI agents and agentic architectures

**Source date and evidence:** Product announcement published November 23, 2026. Claude Ship introduced new beta agents alongside an existing generally available review capability.

Writing a code change is one step in delivering working software. The change also needs review, correction, and an approval decision. Claude Ship is relevant because it connects these later steps into an agent-supported workflow, making the boundaries between producing and authorizing a change more visible.

## The development

Anthropic introduced Claude Ship, combining Code Review with PR Steward and Claude Approvals. PR Steward addresses review feedback, failing checks, and merge conflicts. Approval decisions are handled through a separate component that applies a team-defined repository policy.

This extends the coding-agent workflow beyond producing a patch. It covers how changes are reviewed, corrected, and assessed against a policy. PR Steward is designed to avoid approving or merging its own work, and the system works with existing repository protections. These are product capabilities, not independently established guarantees of safe code.

## How I understand the change

I would think of the workflow as several responsibilities with different permissions and acceptance criteria. An agent proposing a fix needs access to change code. A reviewer needs evidence about correctness. An approval process needs a policy that determines which findings are sufficient and which require a person.

## A practical example

**Illustrative scenario, not a reported experiment.** Suppose a hypothetical agent updates a dependency and the tests fail. A correction agent may repair a compatibility issue, but a passing test suite would not answer every review question. I would also want to know whether the change altered data handling or introduced an unexpected external call. I would prepare examples where a routine-looking update includes a consequential behavior change. The evaluation would examine whether the workflow notices it and routes the decision to the right reviewer.

## My view

I think the important architectural question is who can change something, who checks it, and who can authorize the result. Giving these functions separate responsibilities makes them easier to inspect. I would also test whether reviewers share the same blind spots as the agents making changes.

I see a useful architectural pattern in making responsibility explicit. I would still examine the independence of the checks. Giving two components different names does not establish that they reason independently or have different blind spots. I would evaluate the complete workflow against changes with known defects and inspect the evidence behind each approval recommendation.

## Questions I would discuss

### Would I let an agent approve changes immediately?

I would begin by observing its recommendations against human decisions. I would then consider bounded categories of changes, with explicit acceptance criteria, reliable checks, and a clear path to human review when those criteria are not met.

### Would separate agent roles provide enough independence for review?

I would look at their inputs, tools, evaluation criteria, and observed failures. If the reviewer simply accepts the author’s explanation, the separation may provide little additional assurance. I would want checks that can challenge the proposed change using independent evidence.

### What would I want an approval policy to express?

I would want concrete conditions, such as the kinds of changes allowed, required checks, and reasons to involve a person. I would also test ambiguous changes that cross categories, rather than evaluate only examples that fit the policy cleanly.

## Original sources

- [Anthropic introducing Claude Ship](https://claude.com/resources/articles/introducing-claude-ship)

## Related image

![Claude Ship’s illustrated review, correction, and approval workflow.](../images/06_coding_agents_are_moving_into_review_and_approval_workflows.png)

Claude Ship’s illustrated review, correction, and approval workflow.
