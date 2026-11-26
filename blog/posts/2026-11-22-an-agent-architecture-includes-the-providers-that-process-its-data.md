**Source date and evidence:** First-party incident disclosures published November 22, 2026, following external security research.

An AI application’s boundary extends beyond the chat interface. A request may travel through a routing service, a hosting provider, and other processing systems before the answer returns. The November 22 disclosures make the actual path of that data an architectural question that deserves direct evidence.

## The development

OpenRouter reported offboarding three providers and removing 125 endpoints from Zero Data Retention eligibility after reviewing inference-provider findings. Some removals were precautionary. Its announcement said the findings did not show a breach or unauthorized access of OpenRouter itself.

Novita separately disclosed that some MiniMax requests had been forwarded to MiniMax’s official API instead of being processed on Novita-hosted infrastructure. Its notice identified a potential exposure window of May 28 through November 11, 2026. These disclosures concern processing paths and data-policy enforcement; they do not establish that every request on every removed endpoint was compromised.

## How I understand the change

I would distinguish the service receiving a request from every system that subsequently processes it. A description of where an application sends data should also explain authorized forwarding, retention commitments, and how changes in the route become visible to the application owner.

## A practical example

**Illustrative scenario, not a reported experiment.** Consider a hypothetical internal assistant that summarizes an employee handbook. Its interface may show one model name while its requests are processed through several services. If the route changes, the organization needs to understand whether the same handling commitments still apply. In my example, the evaluation would use synthetic documents with recognizable test markers rather than employee information. I would trace the configured route, compare it with the documented route, and investigate discrepancies before relying on the assistant for sensitive material.

## My view

I see this as a reminder that architecture includes the complete processing chain. An application diagram should identify where prompts, retrieved documents, and tool outputs travel, along with the evidence supporting the promised handling of that data.

This strengthens my view that assurance has to include the surrounding system. I would want a diagram that can be checked against configuration and observed behavior. It should identify the points where data leaves one party’s control and the evidence supporting the promises made at those points. I would also revisit that evidence when a provider or route changes.

## Questions I would discuss

### Would a provider’s stated retention policy be enough for me?

I would want that policy supported by technical verification of the actual processing route, clear disclosures about downstream providers, and a process for detecting changes. A configuration label would be one piece of evidence.

### Would I describe every endpoint removed from eligibility as compromised?

I would follow the disclosure’s distinction between confirmed findings and precautionary actions. I would state the known scope and uncertainty, rather than turn a defensive decision into evidence that every endpoint or request suffered the same event.

### What would I ask an application team to document?

I would ask for the authorized processing path, the exact services and configurations used, and the response to an unexpected route. I would want a record of which requests could be affected by a change, together with an owner responsible for investigating it.

## Original sources

- [OpenRouter data processing incidents on inference providers](https://openrouter.ai/blog/announcements/data-processing-incidents-on-inference-providers/)
- [Novita privacy notice regarding MiniMax requests](https://novita.ai/blog/minimax-requests-privacy-notice/)
