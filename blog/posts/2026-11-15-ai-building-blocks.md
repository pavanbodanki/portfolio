AI conversations are full of terms like Transformers, RAG, agents, multi-agent systems, agentic architectures, and MCP. They are related, but each describes a different part of an AI system.

Let's explore them through a familiar example: **an AI shopping assistant helping someone choose a laptop.**

## 1. Transformers: understanding the request

A Transformer is a neural network architecture used in many language models. Its attention mechanism helps the model process relationships between tokens in the input. The architecture was introduced in the paper [*Attention Is All You Need*](https://arxiv.org/abs/1706.03762).

Imagine asking:

> "I need a lightweight laptop for work, occasional gaming, and travel. My budget is $1,200."

A Transformer-based model can interpret those requirements and generate a relevant response. But knowing what the request means does not automatically give it current laptop prices or availability.

## 2. RAG: looking up relevant information

Retrieval-augmented generation, or RAG, combines information retrieval with answer generation. The system retrieves relevant material and supplies it to the model as context ([Lewis et al., 2020](https://arxiv.org/abs/2005.11401)).

For the shopping assistant, that material could include product specifications, warranty documents, and reviews.

The assistant retrieves information about suitable laptops, then uses it to explain the options.

**Example:** "These two models meet your weight and budget requirements. One has better battery life; the other has a stronger graphics processor."

The answer still depends on the quality and freshness of the retrieved information. RAG can support an answer without guaranteeing that it is correct.

## 3. AI agents: deciding what to do next

An AI agent uses a model to select actions while working toward a goal. It can call tools, examine results, and adjust its approach. This differs from a workflow whose steps are entirely predefined ([Anthropic, *Building Effective Agents*](https://www.anthropic.com/engineering/building-effective-agents)).

Our shopping assistant might:

1. Search for laptops within the budget.
2. Check their specifications.
3. Compare available prices.
4. Ask whether battery life or gaming performance matters more.
5. Refine its recommendations.

The important feature is its ability to choose the next step based on what it learns.

## 4. Multi-agent systems: sharing the work

A multi-agent system uses multiple coordinated agents. Work may be divided by specialty or delegated to agents that handle separate subtasks ([Anthropic, *Building Effective Agents*](https://www.anthropic.com/engineering/building-effective-agents)).

For example, a shopping assistant could use:

| Agent | Responsibility |
|---|---|
| Product researcher | Find laptops that meet the requirements |
| Price checker | Compare current offers |
| Review analyst | Identify recurring strengths and complaints |
| Coordinator | Combine the findings into a recommendation |

This is one possible design. Multiple agents also introduce extra communication, cost, and opportunities for inconsistent results. Their value needs to be tested against a simpler approach.

## 5. Agentic architectures: organizing the system

An agentic architecture is the overall design that connects models, tools, decisions, and working state. It can combine predefined workflows with one or more agents ([Anthropic, *Building Effective Agents*](https://www.anthropic.com/engineering/building-effective-agents)).

For our shopping assistant, the design would determine:

- When to ask the shopper a question.
- Which searches or tools to use.
- How to remember the shopper's requirements.
- How to handle conflicting prices.
- When enough information has been gathered.

An agent is a component within this design. The architecture defines how that component works with everything around it.

## 6. MCP: connecting to tools and information

Model Context Protocol, or MCP, provides a standard way for AI applications to connect to external capabilities. It uses a host, client, and server architecture; servers can expose tools and resources ([MCP documentation](https://modelcontextprotocol.io/)).

In our example, a retailer could provide an MCP server with tools for checking product details and inventory. A compatible AI application could connect to those tools.

MCP handles the communication structure. The application still needs permissions, reliable tool implementations, and checks around consequential actions.

## Putting the pieces together

| Concept | Role in the laptop example |
|---|---|
| **Transformer** | Processes the request and generates responses |
| **RAG** | Retrieves supporting product information |
| **Agent** | Chooses searches and follow-up actions |
| **Multi-agent system** | Divides research among coordinated agents |
| **Agentic architecture** | Organizes the complete shopping workflow |
| **MCP** | Connects the application to external tools and resources |

These components can work together, but every AI application does not need all six. A straightforward product comparison might need only a model and retrieval. A more involved assistant may benefit from tools, adaptive decisions, and coordination.

This series will explain these foundations and follow their development through dated updates, practical examples, and original sources, helping readers understand both what is changing and why it matters.

## Sources

- [Attention Is All You Need](https://arxiv.org/abs/1706.03762)
- [Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks](https://arxiv.org/abs/2005.11401)
- [Building Effective Agents](https://www.anthropic.com/engineering/building-effective-agents)
- [Model Context Protocol documentation](https://modelcontextprotocol.io/)
