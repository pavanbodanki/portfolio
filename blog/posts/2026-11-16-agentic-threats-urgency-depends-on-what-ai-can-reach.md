## What Google reported

In its November 16, 2026 report, Google Threat Intelligence Group and Mandiant describe attackers moving beyond asking AI for assistance toward using agentic systems to execute parts of cyber operations. These systems connect models with tools, coordinate tasks, and use execution feedback to adjust their actions.

Google reports observing CAIRN and PentAGI in live intrusion activity, while identifying experimentation with other frameworks. It also discusses stolen AI credentials, automated vulnerability analysis, and the use of AI in influence operations. These are first-party threat-intelligence observations covering earlier activity, rather than a controlled comparison of agent capabilities.

One detail deserves attention: Google says familiar weaknesses, including compromised credentials and unpatched systems, remain important. AI can increase the speed and scale of exploiting them. The report also acknowledges limitations: autonomous tools can leave recognizable traces, generate noise, and produce unreliable results. Its findings do not establish that every attack is now fully autonomous.

## My view: the urgency depends on what AI can reach

I agree with Google's warning. For me, the next question is how quickly different areas need to respond as AI development accelerates.

I would judge that urgency through four factors: **access, autonomy, scale, and consequences.**

An assistant that summarizes public information has different requirements from an agent that can change infrastructure, access sensitive records, or initiate financial transactions. A small deployment with powerful permissions may need stronger controls than a widely used application with limited access.

Scale matters because it changes how quickly a problem can spread. One incorrect action may be recoverable. Thousands of repeated actions can overwhelm the people responsible for reviewing them. The practical question becomes: can the organization detect and interrupt harmful behavior before it causes significant damage?

In healthcare, for example, I would distinguish between an assistant drafting text for review and an agent modifying a clinical workflow. Both need evaluation, but the second requires closer attention to authorization, downstream effects, and recovery. This is how I would prioritize the response across sectors: examine the actions an AI system can take and the people or systems those actions could affect.

## Would a defined threat architecture be a solution?

I believe a defined architecture would be part of the solution. I would separate that work into two connected steps.

First, a **threat model** should identify what needs protection, where untrusted information enters, which permissions exist, and how a failure or attacker could reach a consequential action.

Second, a **security architecture** should turn those scenarios into enforceable controls.

For an agentic system, I would expect the design to answer these questions:

| Design question | What I would want established |
|---|---|
| What can the agent access? | Specific permissions for data, tools, and credentials |
| What can it change? | Explicit limits on actions and the systems affected |
| What happens during delegation? | Permissions that remain bounded when work passes between agents |
| How is suspicious behavior detected? | Traceable tool calls, alerts, and a responsible owner |
| How can execution be interrupted? | Stop mechanisms, isolation, and recovery procedures |

Consider an assistant that reads external documents and can update an internal database. A document could contain instructions attempting to redirect its behavior. My expectation would be that reading that document cannot expand the assistant's authority. The application should enforce that boundary even if the model misinterprets the content.

That is the architectural principle I find most important:

> A model's decision should not be sufficient to grant itself additional permission.

## Multi-agent systems need clear boundaries between agents

Dividing work among specialist agents can make a system easier to organize. It also raises questions about responsibility.

If one agent retrieves information, another interprets it, and a third executes an action, where is the final authorization checked? Can an unsupported claim become an accepted instruction as it moves through the system? Can several individually limited actions combine into an outcome nobody approved?

My view is that each handoff should preserve the source of information, the limits of authority, and enough context to review the action. Adding a reviewer agent may help, but I would still want enforceable controls outside the model.

## MCP makes the connection useful; the application must govern its use

Google's discussion includes MCP-connected security tooling. That is an example of how a connection protocol can support tool-enabled workflows, rather than evidence of a flaw in MCP itself.

For me, the design question is what happens after a connection is available. Which tools are exposed? Which arguments are permitted? What identity is used? Which actions require approval?

A standard interface can make integration easier. I would still evaluate the permissions and consequences of every capability exposed through it.

## The architecture must evolve with the deployment

A defined architecture is valuable only if its boundaries hold during execution. I would test realistic failure scenarios, measure how quickly problems are detected, and verify that interruption and recovery actually work.

I would also revisit those tests whenever the system gains a new model, tool, data source, or level of autonomy. A previously reviewed design may behave differently after its capabilities expand.

My takeaway from Google's report is that the response needs both urgency and specificity. Organizations should start with the systems that have the greatest access and the most consequential actions, then build controls that can keep pace with their execution.

We need to ask how capable an AI system is, and whether we can reliably constrain, observe, and stop what it does.

---

**Source:** [Google Threat Intelligence Group — Agentic Threat Activity Crosses a Significant Threshold](https://cloud.google.com/blog/topics/threat-intelligence/agentic-threat-activity-crosses-a-significant-threshold), November 16, 2026.
