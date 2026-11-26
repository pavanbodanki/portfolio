**Topic:** Agentic architectures

**Source date and evidence:** First-party project announcement published November 23, 2026. The project repository identifies Shirudo as pre-release.

As AI systems act faster, the time between identifying a threat and applying a defense becomes important. Shirudo addresses part of that operating problem through runtime mitigations. It also gives a concrete setting for the question I keep returning to: what can a defined architecture actually enforce when an agent takes action?

## The development

Cisco and OpenAI announced Shirudo, an open-source effort to help protect running Linux systems while permanent fixes are prepared. It uses signed runtime mitigations and eBPF-based enforcement, with agents helping develop and test protective changes.

The announcement includes first-party demonstrations against selected vulnerabilities. The repository specifies production requirements including kernel changes and TPM 2.0. This is an early project with a defined threat model and operating assumptions, so its demonstrations should be interpreted within those boundaries.

## How I understand the change

I would separate the model’s proposal from the mechanism authorized to apply it. A defensive workflow needs evidence that a mitigation addresses a threat and does not unnecessarily disrupt normal operation. Signing, deployment controls, and verification help define who can authorize and inspect that change.

## A practical example

**Illustrative scenario, not a reported experiment.** Consider a hypothetical service with a newly identified vulnerability that cannot be patched immediately. I would want a proposed mitigation tested against a reproducible exploit and representative legitimate requests. I would also include cases where the mitigation blocks too broadly or cannot be applied to one host. The example would not end when the attack is blocked once. It would examine rollout, observability, expiration, and the process for replacing the temporary measure with a permanent fix.

## My view

This connects to my question about whether a defined architecture can address AI-enabled threats. I think it can provide a useful foundation when it makes controls enforceable outside the model’s instructions. Its value depends on the threats it covers, the evidence used to approve a mitigation, and what happens when that mitigation disrupts legitimate work.

I agree with investing in defenses as agent capabilities develop. My question is how early each environment needs particular controls. I would prioritize systems with broad privileges, external exposure, or hard-to-reverse effects. A defined architecture can make the intended boundaries concrete, but I would expect evidence that those boundaries hold under the operating conditions that matter.

## Questions I would discuss

### Is a defined defensive architecture the solution?

I would treat it as an essential part of the solution. I would still require testing against evolving attacks, measurable effects on normal operations, controlled rollout, and recovery procedures. The urgency would depend on the system’s access, exposure, and consequences of failure.

### How would I decide where the need is most urgent?

I would consider what the agent can access, the scale of possible action, and the time available to detect and correct mistakes. I would begin with enforceable limits around consequential actions and expand the assurance effort as capability and exposure increase.

### What would persuade me that a defensive demonstration generalizes?

I would want additional threat cases, different supported environments, and measurements of legitimate work. I would also ask what happens when the mitigation itself fails. A demonstration against selected vulnerabilities would be useful evidence within its tested scope.

## Original sources

- [Cisco and OpenAI Shirudo announcement](https://newsroom.cisco.com/c/r/newsroom/en/us/a/y2026/m11/cisco-and-openai-launch-shirudo-a-new-project-to-safeguard-agentic-ai.html)
- [Shirudo repository and operating requirements](https://github.com/shirudo-dev/shirudo)

## Related image

![Shirudo’s illustrated signing, delivery, enforcement, and verification workflow.](../images/07_shirudo_makes_the_case_for_enforceable_defenses_around_agents.svg)

Shirudo’s illustrated signing, delivery, enforcement, and verification workflow.
