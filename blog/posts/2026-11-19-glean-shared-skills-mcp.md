An enterprise assistant needs access to capabilities and guidance about using them. Glean's November 19, 2026 release addresses both, alongside changes to how agents start and how administrators manage them.

## What changed

Its release notes describe sharing **Glean skills with connected MCP clients** through discovery and loading methods. They also introduce webhook-based Outlook triggers, a consolidated AI Gateway administration area, agent-version comparisons, and expanded administrative control over skills.

The release includes security changes involving API access, certificate validation, and MCP server details. It also fixes missing calendar results through MCP that could previously cause scheduling agents to report everyone as available.

These are documented product changes, not a new MCP specification or independent evidence that the resulting workflows are reliable.

## My view: reusable instructions are operational assets

I see value in making procedures available across compatible AI clients. Teams should be able to reuse reviewed guidance instead of recreating it for every assistant.

However, I would treat those instructions as maintained operational assets. Someone needs to own them, review changes, test their behavior, and withdraw versions that no longer work.

For example, a shared procedure might guide an assistant through handling an incoming customer request. Changing that procedure could alter many workflows, even if the underlying model and tools remain unchanged.

I would therefore want instruction changes evaluated with the same care as other changes that affect system behavior.

## Event-driven agents need deliberate limits

An event trigger can reduce the delay between a message arriving and a task beginning. It also creates questions about which events should lead to action.

Imagine an assistant that processes incoming messages and sends a response. If its own response generates another triggering event, the system needs a way to prevent repeated processing.

My preference would be explicit event filters, duplicate detection, bounded retries, and a clear owner who can pause execution.

## Missing information is not a negative finding

The calendar fix raises another evaluation question for me: can an agent distinguish *"the tool returned no information"* from *"the information confirms there is nothing scheduled"*?

I would test these states separately. A confident answer based on incomplete tool output can be misleading even when the language model interprets the returned text correctly.

## Questions I would discuss

- **Who approves shared skills?** What review is required before an instruction change affects users?
- **Can workflows use a reviewed version?** Can teams inspect changes and restore an earlier version?
- **Do permissions remain separate from instructions?** Loading a skill should not itself grant additional authority.
- **How are event failures handled?** What prevents duplicate processing, repeated responses, or runaway costs?
- **Can the agent recognize incomplete results?** Does it ask for clarification or report uncertainty when a tool fails?
- **How consistent is behavior across clients?** Does the same skill work reliably with different hosts and models?

For me, interoperability becomes useful when it comes with understandable ownership, bounded authority, and tests that cover failures as well as successful demonstrations.

---

**Source:** [Read Glean's full release notes](https://docs.glean.com/release-notes/releases/2026-11-19-november-release)

