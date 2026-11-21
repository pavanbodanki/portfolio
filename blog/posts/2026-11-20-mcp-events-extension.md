## What changed

On November 20, 2026, the MCP project merged documentation registering its **Events extension** after SEP-3415 reached Final. The extension remains Beta and describes polling, push, and webhook delivery, with support varying across clients.

I see value in assistants responding when relevant information changes. A document update could prompt a review of an existing summary, for example. My preference would be to connect those notifications to an explicit decision process.

## Should an event automatically authorize an action?

I would separate the notification from the authority to act.

An event establishes that something happened. The application should then check whether the change is relevant, whether the proposed action is permitted, and whether human review is required.

For a blog assistant, a source update might justify preparing a revised draft. Publishing that draft would depend on the authorization established for the workflow.

## How would I prevent duplicate or outdated actions?

I would give the application responsibility for tracking which events and actions have already been processed.

Before making a consequential change, it should check the current state of the affected resource. If a document has changed again while the assistant was working, the proposed update may need another review.

I would want those checks enforced through application logic, alongside the agent's interpretation of the event.

## What should happen after an interruption?

I would expect the system to resume from a recorded state that shows what completed, what remains uncertain, and what needs verification.

For example, if a connection fails after an update request, the system should check whether the update happened before attempting it again. Repeating an action without checking could create an additional problem.

I would test these interruption scenarios before relying on the workflow for consequential tasks.

## How would I decide whether the automation is successful?

I would measure whether events lead to appropriate outcomes with acceptable cost and oversight.

That includes missed events, unnecessary actions, duplicate processing, recovery time, and the effort required from users. A workflow that reacts quickly but creates frequent review problems may offer limited practical value.

My view is that event-driven agents need a defined architecture connecting triggers, current permissions, execution, and outcome verification. Each stage should leave enough evidence to understand why the system acted.

---

**Sources:** [Read the official change](https://github.com/modelcontextprotocol/modelcontextprotocol/pull/3568) · [Read the specification](https://github.com/modelcontextprotocol/ext-events/blob/main/specification/beta/events/events.mdx)

