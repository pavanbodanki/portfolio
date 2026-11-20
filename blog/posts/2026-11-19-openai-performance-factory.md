An AI agent that identifies a possible problem has completed only part of the job. Someone still needs to check the explanation, assess the proposed fix, and establish whether the system recovered.

## What OpenAI described

OpenAI's November 19, 2026 article about its **Performance Factory** describes an architecture built around that process. Performance alerts create tasks; agents investigate, challenge diagnoses, and propose fixes. Engineers review changes, and agents check recovery after deployment. Persistent task records allow work to continue across sessions.

OpenAI reports more than 1,700 investigations and over 600 root-cause identifications in just over three months. In a manual review of 100 root-cause suggestions, 70% were graded accurate; the remainder needed refinement or stronger causal evidence. These figures describe different measures and should not be interpreted as an overall resolution rate.

The article also describes historical evaluations, separate assessment of engineer-facing summaries, and monitoring for failures in the agents' own tools. This is first-party operational evidence, rather than independently replicated research.

## My view: the architecture makes the capability useful

What interests me is the separation between **investigation, challenge, approval, and outcome verification.**

Consider a website that becomes slower after a deployment. An agent might identify a recent code change and propose reversing it. That explanation sounds reasonable, but timing alone does not establish causation. Traffic patterns, dependencies, or infrastructure changes could also explain the slowdown.

I would want the workflow to test competing explanations and preserve the evidence behind its decision.

The recovery step is equally important. A merged fix is an engineering action; verified improvement is an outcome. I would evaluate both.

## More agents need to earn their place

A separate reviewer can challenge an investigator's assumptions. However, I would not assume that another agent provides independent assurance simply because it runs in a different session.

My preference would be to measure which errors the reviewer catches, which it misses, and whether it introduces unnecessary objections. The review stage should demonstrate value against a simpler workflow.

## Questions I would discuss

- **How many investigations end in verified recovery?** Root-cause suggestions, accepted fixes, and resolved incidents need separate denominators.
- **How independent is the reviewer?** Can investigator and reviewer share the same blind spots?
- **What is the total human workload?** Does automation reduce investigation time while increasing review and rework?
- **How realistic are historical evaluations?** Do they preserve the evidence available when the incident originally happened?
- **How is recovery attributed to the fix?** Could changing traffic or another deployment explain the improvement?
- **Where should autonomy stop?** What evidence would justify letting an agent ship a change without human approval?

For me, this is a useful example of agentic architecture because it makes the path from observation to action inspectable. Its value should be judged through reliable outcomes and the effort required to achieve them.

---

**Source:** [Read OpenAI's original article](https://openai.com/index/how-openai-performance-factory-keeps-chatgpt-fast/)

