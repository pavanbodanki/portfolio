An AI system may retrieve additional evidence, generate an improved answer, and still return its original mistake.

## What the paper found

*RagHarnessDebugger: Jev-Guided Agentic RAG in Contract Inference Repair Auditing*, submitted on November 17, 2026, investigates how this happens.

The framework records retrieval, candidate answers, evidence revisions, validation, and final selection. Its audit checks whether decisions are linked correctly and whether acceptance rules allow proposed corrections to reach the output.

In contract-inference experiments, the authors found acceptance policies blocking many available corrections. After revising the workflow, they report accuracy improvements and fewer regressions (cases where correct initial answers became incorrect). The study uses two reader models and separate development and replication contracts; broader generalization remains to be demonstrated.

## My view: evaluate the path to the answer

A final accuracy score tells us how often the system was correct. It does not explain whether additional processing helped, caused harm, or consumed resources without changing anything.

Consider a document assistant that initially overlooks an exception. Another retrieval finds the missing clause, and a revised answer accounts for it. If the acceptance policy rejects that answer for an unrelated reason, the system has the evidence and candidate correction but still fails.

The appropriate fix could be in the decision logic rather than the language model.

## Corrections and regressions need separate measures

I would distinguish four outcomes:

| Initial answer | Final answer | Interpretation |
|---|---|---|
| Incorrect | Correct | Successful correction |
| Correct | Incorrect | Regression |
| Incorrect | Incorrect | Unresolved error |
| Correct | Correct | Correctness preserved |

Similar final accuracy can conceal very different patterns across these outcomes.

## Questions I would ask

- **Does repair improve reliability?** How many errors are corrected, and how many previously correct answers become wrong?
- **Where are useful corrections lost?** Does the system fail to generate them, reject them, or choose another candidate?
- **Is validation attached to the exact candidate?** Could a check performed on an earlier answer be incorrectly reused after an edit?
- **Can the follow-up action change the outcome?** Is the system gathering more evidence while an unchanged acceptance rule continues to block correction?
- **How trustworthy is the evaluator?** Has it been checked against expert judgments, and does it share the answering model's blind spots?
- **What is the cost of repair?** How much latency and computation are required for each additional correct answer?
- **Will the approach transfer?** Do improvements persist across different document types, models, and error patterns?

My expectation is that traceability should help explain and fix failures. More recorded events are useful when they reveal why a justified correction did, or did not, reach the user.

---

**Source:** [Read the paper](https://arxiv.org/abs/2611.22991)
