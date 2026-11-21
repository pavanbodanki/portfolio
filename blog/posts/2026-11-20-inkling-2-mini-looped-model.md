## What was released

Thinking Machines Lab's November 20, 2026 release of **Inkling 2 Mini** explores an interesting architectural direction: repeatedly processing information through shared layers.

The company reports a model with 26.4 billion total parameters, an approximately 20 GB memory footprint, and strengths in agentic coding. It also acknowledges weaknesses in multi-turn conversations and instructions with many constraints. These are developer-reported findings, with varying evaluation setups across comparisons.

I see promise in making capable models more accessible. My assessment would focus on whether that efficiency produces reliable outcomes in a complete workflow.

## Does looping represent a meaningful improvement?

I think it is a worthwhile direction because it explores how much capability we can obtain from existing parameters through additional computation.

However, I would want comparisons with similar processing budgets before attributing an improvement specifically to looping. Accuracy, elapsed time, and resource use should be considered together. The practical question is how much useful work the architecture delivers for the resources it consumes.

## How important are its limitations with complex instructions?

For an agent that can take actions, I consider adherence to instructions part of correctness.

A coding assistant could produce working software while changing a file it was told to leave alone. That would still be a failure. I would evaluate functional performance and compliance with task constraints separately, especially across longer interactions where requirements can be overlooked.

## Would running the model locally make it a better choice?

Local execution gives us another deployment option, but I would make the choice based on the workload.

I would measure response time, memory consumption, energy use, task completion, and the effort required to correct mistakes. I would also examine connected tools and data access. Running inference locally does not, by itself, establish appropriate permissions or reliable behavior.

## How would I oversee a model that writes less reasoning?

I would use its explanation as supporting evidence and compare it with observable behavior.

For a coding task, I would inspect the changes, commands, test results, and remaining uncertainty. I would want to establish whether the model followed the requested process and whether its claimed result actually occurred.

My position is that architectural efficiency becomes valuable when it improves dependable task completion. That is the standard I would apply before expanding the model's responsibilities.

---

**Source:** [Read the original release](https://thinkingmachines.ai/news/inkling-2-mini/)

