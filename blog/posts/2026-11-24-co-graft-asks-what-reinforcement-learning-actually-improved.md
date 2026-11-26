**Topic:** AI agents and retrieval-augmented generation

**Source date and evidence:** Author-reported preprint. Blog coverage date November 24; manuscript submitted November 23, 2026.

An agent may improve after reinforcement learning, but the final score does not explain what changed. Better search queries, different stopping decisions, stronger answer extraction, or more compatible formatting could all contribute. CO-GRAFT is useful because it turns that attribution question into a structured experiment.

## The development

CO-GRAFT separates a search agent into four functional roles: intermediate reasoning, the decision to search or answer, query generation, and final answer extraction. It mixes the policies before and after reinforcement learning across all 16 role assignments to attribute changes in performance.

In the tested Search-R1 setups, query generation accounted for no more than 15% of the total reinforcement-learning gain. Other contributions depended on model size, answer formatting, search behavior, and the task-level search budget. This is an attribution method within tested systems, rather than a universal ranking of agent components.

## How I understand the change

The four roles are functional parts of a trajectory, not necessarily four separately deployed agents. Switching which policy controls each role creates comparisons that help attribute the overall gain. I would interpret those comparisons within the studied models, retrieval environment, and evaluation rules.

## A practical example

**Illustrative scenario, not a reported experiment.** Imagine a hypothetical research assistant whose score improves after an update. I would construct a comparison where the old version still writes search queries while the new version extracts the final answer, and another where those responsibilities are reversed. If most of the gain follows answer extraction, that would change my next development priority. I would also check whether the evaluation simply recognizes the new output format more reliably. The example illustrates why identifying a cause can be more informative than labeling the entire update as better reasoning.

## My view

I would like agent evaluation to explain where an improvement came from. If better formatting accounts for part of a score increase, I should describe that accurately. Understanding the cause helps decide which component deserves further development.

I would like improvement claims to identify the behavior they actually support. If a model learns to present the right answer in the required format, that is useful, but it should receive an accurate description. If the improvement depends on coupling between decisions and reasoning, I would want to understand that dependency before changing one component independently.

## Questions I would discuss

### Would I describe every gain after reinforcement learning as better reasoning?

I would first separate reasoning, tool decisions, retrieval, and answer extraction. I would also hold budgets and scoring rules consistent so that a change in output format or resource use does not receive the wrong explanation.

### Would I expect the same role to matter most in every agent?

I would expect the answer to depend on the workflow and would test it. A task with poor retrieval may have a different bottleneck from one with good evidence but unreliable extraction. I would avoid copying a role ranking into an unrelated application.

### How would this change my development process?

I would first identify a measurable failure, then change the component most plausibly responsible and test the result under consistent conditions. Where components interact, I would evaluate the combination rather than assume each improvement adds independently.

## Original sources

- [CO-GRAFT original research paper](https://arxiv.org/abs/2611.31185)
