AI terminology moves fast. RAG, Transformers, agents, multi-agent systems, agentic architectures, and MCP often appear in the same conversation. But each describes a different part of how an AI system works.

This blog starts by explaining those building blocks. From there, I'll track meaningful advancements: what changed, how it works, what the evidence shows, and why it matters.

Let's connect the concepts through one example: **an AI assistant that researches a topic and prepares a blog update.**

## 1. Transformers: the model architecture

A Transformer is a neural network architecture introduced in the 2017 paper [*Attention Is All You Need*](https://arxiv.org/abs/1706.03762). Its defining mechanism, **attention**, helps the model weigh relationships between tokens when processing a sequence. Tokens can represent words, parts of words, or other units of information.

Consider this sentence:

> "The researcher reviewed the paper because **it** introduced a useful method."

Understanding what "it" refers to requires connecting different parts of the sentence. Attention helps a model represent those relationships.

For our blog assistant, a Transformer-based language model could explain a research paper and draft an article. However, the architecture alone does not give the assistant access to newly published research.

**What I'll track:** changes to attention mechanisms, context handling, model efficiency, and architectural design.

## 2. RAG: bringing relevant information into the answer

Retrieval-augmented generation, or RAG, combines information retrieval with text generation. Instead of relying only on information encoded during training, the system retrieves relevant material and uses it to help produce an answer. The [foundational RAG paper](https://arxiv.org/abs/2005.11401) explored combining a language model's learned knowledge with an external document index.

For our blog assistant, a possible workflow is:

1. Search an indexed collection of research papers.
2. Retrieve passages relevant to the chosen topic.
3. Include those passages in the model's context.
4. Draft an explanation grounded in the retrieved material.

A practical limitation follows: if retrieval misses an important paper or selects an outdated passage, the answer can still be incomplete. Providing sources helps readers inspect the evidence; it does not automatically prove every claim.

**What I'll track:** retrieval quality, document preparation, ranking methods, grounding, and ways to evaluate the resulting answers.

## 3. AI agents: choosing the next action

An AI agent uses a model to decide what to do next while working toward a goal. It can use tools, inspect the results, and adjust its approach. A [useful distinction](https://www.anthropic.com/engineering/building-effective-agents) is that a predefined **workflow** follows steps set by developers, while an **agent** has more control over its next steps.

Suppose we ask our blog assistant:

> "Find an important RAG development and explain whether its results justify the headline."

An agent could search for announcements, locate the underlying paper, inspect the evaluation, and search again when information is missing.

That flexibility introduces design questions: Which tools can it use? When should it stop? What counts as enough evidence?

**What I'll track:** tool use, task completion, recovery from errors, and the reliability of autonomous decisions.

## 4. Multi-agent systems: dividing the work

A multi-agent system coordinates multiple agents. Each may have a different role, set of tools, or working context. Tasks can be divided into parallel work or delegated by a coordinating agent. These patterns can help with separable subtasks, although the coordination adds complexity.

For our blog assistant, one possible design is:

| Agent | Responsibility |
|---|---|
| Researcher | Find relevant papers and announcements |
| Evidence reviewer | Check whether sources support the proposed claims |
| Writer | Turn the findings into an accessible article |
| Editor | Check clarity, repetition, and missing qualifications |

This is an illustrative design, not a guarantee of better output. Several agents can repeat the same mistake, and an editor cannot verify evidence it never receives.

**What I'll track:** delegation, communication, shared context, and whether multiple agents improve results enough to justify their cost.

## 5. Agentic architectures: organizing the whole system

An agentic architecture describes how models, tools, state, decisions, and checks fit together. It may use one agent, several agents, predefined workflows, or a combination. Common patterns include routing requests, running tasks in parallel, and using an evaluator to guide revisions.

For our blog assistant, I would start with this design:

1. A **scheduled trigger** starts the research.
2. A **research component** gathers candidate developments.
3. An **evidence check** filters unsupported claims.
4. A **writing component** drafts the update.
5. A **history** records which developments have already been covered.

The schedule and history are application features. They do not require a multi-agent system by themselves.

**What I'll track:** orchestration patterns, state management, evaluation, and where human review improves the workflow.

## 6. MCP: connecting AI applications to capabilities

[Model Context Protocol](https://modelcontextprotocol.io/), or MCP, is a protocol for connecting AI applications with external capabilities. Its architecture includes a **host** application, **clients**, and **servers**. Servers can expose capabilities such as tools and resources.

In our example, an MCP server could expose a tool that searches a research collection. Another could provide access to saved blog drafts.

MCP defines how the application communicates with those capabilities. The surrounding application still needs to decide which actions are allowed and how their results are checked.

**What I'll track:** protocol changes, interoperability, useful integrations, and practical access controls.

## How the pieces connect

These concepts answer different questions:

| Concept | Question it answers |
|---|---|
| Transformer | How does the model process information? |
| RAG | How does the system retrieve supporting knowledge? |
| Agent | How does the system choose its next action? |
| Multi-agent system | How do multiple agents divide and coordinate work? |
| Agentic architecture | How is the complete workflow organized? |
| MCP | How does the application connect to external capabilities? |

A research assistant could combine all six. It could also work well with a smaller design. The useful question is which components improve the task, and what evidence demonstrates that improvement.

## What comes next

Each topic will have a foundational explanation and a dated record of meaningful developments.

For every update, I'll ask:

- What changed?
- How does it work?
- What evidence supports it?
- What limitations remain?
- Why should a reader care?

The aim is to give readers a place to understand the foundations, follow progress, and judge new claims with context.

## Foundational reading

- [Attention Is All You Need](https://arxiv.org/abs/1706.03762)
- [Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks](https://arxiv.org/abs/2005.11401)
- [Building Effective Agents](https://www.anthropic.com/engineering/building-effective-agents)
- [Model Context Protocol documentation](https://modelcontextprotocol.io/)

