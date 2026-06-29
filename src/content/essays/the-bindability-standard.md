---
title: "The <em>Bindability</em> Standard"
description: "Payments for agents have a standard. Identity has a standard. Risk doesn't — and whoever writes the open standard for what's bindable gets to decide what an agent is allowed to do."
pubDate: 2026-06-29
tags: ["ai", "insurance", "agent-economy", "standards"]
status: "growing"
readingTime: "5 min"
draft: true
---

Payments for agents are being standardised. So is identity. There's a protocol for how an agent pays (ACP, AP2, x402) and a protocol for proving who it is (eIDAS-2, ERC-8004, Entra Agent ID). Both arrived faster than anyone expected.

One layer has no standard at all: **risk**. There is no shared, machine-readable way to answer the question every counterparty is about to start asking before it lets an agent act — *can this be covered, and by whom?* That gap is not a footnote. It's the part of the stack that decides what an agent is actually allowed to do.

## Identity says who. The standard has to say whether.

Identity tells you the agent is who it claims and is allowed, in principle, to act. It does not tell you whether *this* action — paying a supplier, booking a clinic, signing a commitment — is one a serious platform should let run. A verified agent can still do something uninsurable. Knowing who is acting is necessary; it was never sufficient.

What's missing is a verdict. A way to take an action, look at what it actually risks, check whether the controls that make it coverable are in place, and emit a portable token that says: *this is bindable, to this limit, by this party.* Call it a **Bindability Profile**. Call the open framework that produces it the **bindability standard**.

## Uninsurable, therefore undeployable

The whole thing rests on one line: **if an action can't be bound, it shouldn't be deployed.** Not as a moral claim — as plumbing. A rail asks for the profile before it executes, the way it already asks for auth. Below the required level, the action is refused, throttled, or held in escrow.

That turns "is this insurable?" from a question someone asks after the fact into a gate the transaction passes through *before* it happens. `bindable → execute`. `not bindable → 402`. The same move payments made when they put fraud-scoring inline — except the thing being scored is whether anyone will stand behind the outcome.

<div class="callout">
<span class="callout-label">Worked example</span>

An agent wants to pay a €40,000 invoice on a marketplace. Identity checks out — it's verifiably acting for a real company. But its mandate caps single payments at €5,000, there's no tamper-evident log of its recent actions, and no party has agreed to stand behind a mistake.

A standard with a verdict reads that in one call: **not bindable at this value.** The marketplace doesn't refuse the agent — it refuses *this action at this tier*, and offers the path: raise the mandate cap, turn on logging, or route through a counterparty that will bind it. The €40 payment from the same agent sails through. Risk became a dial, not a door.

</div>

## Why it has to be open

The instinct is to build this as a proprietary moat — your standard, your gate, your toll. That instinct is wrong, and not for nice reasons.

A risk standard is worth exactly nothing until rails reference it. The value is in adoption, and adoption only happens if the spec is open, free to implement, and not owned by one party everyone else has to ask permission from. So you publish it. CC-BY, conformance tests, an RFC process, and a stated intent to hand it to a neutral body once it has traction — the path AP2 took to FIDO. The standard outliving you is the point.

Which raises the obvious question: if you give the standard away, where's the moat?

## The moat is underneath the standard, not in it

Three places, none of which is the spec itself.

You're the **reference implementation** — the standard is live in your product from day one, not a PDF. You're the **most trusted underwriter** — anyone can attest that controls exist, but binding real cover takes a licence and capacity, and that trust is earned, not forked. And you hold the **loss data** that makes the scoring credible — every action you bind returns an outcome that sharpens what the tiers mean, and nobody who only read the open spec has that.

That's the trick that makes the whole thing coherent: **the framework can be completely open precisely because the pricing engine behind it can't be.** Anyone can read what *bindable* means. Only the party with the loss curve can price it well. The open standard is just how the entire agent economy comes to point at your pricing.

---

I used to think the way to own the risk layer was to keep the definition of "insurable" proprietary — to be the gate. I think that's backwards now. You want the definition to be everywhere, referenced by every rail, taught as the default — because you're the one who can actually stand behind it, and the data that proves you can is the one thing the open standard doesn't carry.

Give away the grammar. Keep the loss curve. Let everything plug in.
