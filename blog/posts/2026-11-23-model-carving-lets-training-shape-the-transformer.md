**Topic:** Transformer architecture

**Source date and evidence:** Author-reported preprint. Blog coverage date November 23; manuscript submitted November 20, 2026.

Transformer design is often discussed as a choice made before training begins. Model Carving explores a different possibility: allowing training to help determine which parts of the network remain. The practical question is whether a model can remove unnecessary computation while preserving the behavior its users need.

## The development

Model Carving investigates whether a Transformer should learn which attention and feed-forward sublayers to retain during training. Trainable gates guide the removal of sublayers, producing a smaller final network whose removed components no longer run.

Across the tested standard and looped models, the authors report 8–34% fewer inference FLOPs per token while matching or improving evaluated quality. Standard-model experiments reached 2.7 billion parameters. Reported decoding gains depend on hardware, context length, and batch settings; they should not be read as a universal speedup.

## How I understand the change

The method changes the model during training and leaves a smaller structure for inference. I would distinguish that from deciding how many processing steps to use for each request. One learns a structure to retain; the other changes how much work a particular response receives.

## A practical example

**Illustrative scenario, not a reported experiment.** Consider a hypothetical assistant that classifies short product-support messages. I would compare a carved model with an appropriate baseline on ordinary requests, mixed-intent messages, and examples containing rare product names. I would run the comparison on the hardware intended for deployment. If the carved version uses less memory but performs poorly on rare requests, I would investigate whether those requests matter enough to outweigh the saving. If the models perform similarly but latency changes with batch size, I would report the workload conditions behind the result.

## My view

I find the idea of learning the structure alongside the weights useful. It shifts the efficiency question toward identifying which computation the task needs. I would still want to understand whether the removed capacity supported unusual or difficult cases that averages conceal.

I find it useful to ask which computation the task actually needs. I would want the answer supported by several kinds of evidence, including downstream behavior after any adaptation I apply. I would also resist treating the best reported speedup as the expected benefit in every environment. Deployment choices should reflect the conditions under which the application will run.

## Questions I would discuss

### Would fewer FLOPs automatically make this the better deployment choice?

I would measure actual latency and memory on the intended hardware, alongside quality on ordinary and difficult examples. I would also examine whether the gains persist after the instruction tuning or other adaptations my application requires.

### Would a smaller final network necessarily retain every useful behavior?

I would not assume that from an average score. I would evaluate behaviors that matter to the application, including uncommon cases, instruction following, and uncertainty. A small numerical change can have different practical consequences across tasks.

### How would I compare architecture methods fairly?

I would state the training budget, inference budget, hardware, context length, and batch settings. I would decide which resources are being matched before comparing results. That would help prevent a difference in resources from being mistaken for a difference in architecture quality.

## Original sources

- [Model Carving original research paper](https://arxiv.org/abs/2611.27962)
- [Model Carving full text](https://arxiv.org/html/2611.27962v1)
