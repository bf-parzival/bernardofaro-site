---
title: "No Risk-Binding, No Agent <em>Economy</em>"
description: "Payments move the money. Identity proves who acted. Neither answers the question that decides whether an autonomous transaction can happen at all."
pubDate: 2026-06-28
tags: ["ai", "insurance", "agent-economy"]
status: "evergreen"
readingTime: "5 min"
draft: true
---

The agent economy is being built on two trust layers. It needs a third, and almost nobody is building it.

The first two are arriving fast. **Payments**: Stripe and OpenAI shipped an agentic commerce protocol; Visa, Mastercard and Google launched agent-payment standards. **Identity**: DIDs, verifiable credentials, eIDAS-2 wallets — the machinery to prove which agent, acting for whom, did a thing.

Both are necessary. Neither is sufficient. They move the money and they prove who acted. Neither answers the question that actually decides whether an autonomous transaction can happen: *who vouches for what happens if the agent is wrong?*

That is the risk-binding layer. And until it exists, anything with real downside stays on a human leash.

## The accountability gap

A human makes one bad decision a minute. An agent makes ten thousand. A buggy underwriting agent doesn't write one wrong policy — it writes 50,000 before anyone notices.

Now distribute the blame. The model was trained by one company, served by another, configured by a third, pointed at a fourth's data. When it acts wrong at machine speed, the liability is a knot nobody can untie in the moment.

Insurance is how you price a knot like that. Not as a product you bolt on afterwards — as the mechanism that lets a rational actor deploy something whose downside is open-ended. Without it, the expected-value math on a high-stakes agent never closes, and the agent never ships.

## Risk-binding is the gate, not a line item

Here is the part most people get backwards. They treat insurance as something that happens *after* — a claim, a payout, a cost of doing business. In an agent economy it has to happen *before*. The risk has to be bound at the moment of the transaction, or the transaction doesn't clear.

That inverts where the value sits. Payments and identity are plumbing the transaction flows *through*. Risk-binding is the gate the transaction has to *pass*. A payment can clear, an identity can check out, and the transaction can still be one nobody should have let happen.

<div class="callout">
<span class="callout-label">Worked example</span>

An agent with a company card books €40,000 of the wrong inventory. Or refunds nine thousand customers it never should have. Or executes a trade off a data feed someone poisoned last Tuesday.

The payment cleared. The identity checked out. The loss is real and the liability is a knot. Either someone bound that risk in advance — priced it, capped it, agreed who eats it — or the company simply never takes the agent off the leash. There is no third option.

</div>

## Whoever binds the risk takes the toll

The layer that decides whether a transaction can happen sits in the path of *every* transaction. That is Visa's position over payments and AWS's over compute: not the biggest balance sheet in the room, the one everyone has to route through.

Bind risk and you don't just protect — you gate. You decide what is bindable, which means you decide what is deployable. `uninsurable → undeployable`. That is the most valuable sentence in the agent economy, and whoever gets to write it takes a cut of everything that wants to clear.

This is not "AI will need insurance someday." It is now. Incumbent insurers are actively writing AI *out* of their policies. Two-thirds of companies name security and risk the number-one barrier to scaling agents. The demand is measured and the layer is missing — which is the rarest thing in markets: a gap that is both wide and unowned.

---

I've spent the better part of two years inside the largest carrier in my country, watching how risk actually gets bound — and how slowly. Thirty-to-eighty days to move a file that should move in minutes.

The agent economy will not wait for that. Someone is going to build the layer that binds risk at the speed agents transact. I'd rather it be someone who already knows what a claim costs.
