---
title: "Identity Says Who. Risk Says <em>Whether</em>."
description: "2026 is the year every agent gets an identity. Identity settles who an agent is and what it may do. It never settles who pays when it's wrong."
pubDate: 2026-06-28
tags: ["ai", "identity", "insurance", "agent-economy"]
status: "growing"
readingTime: "5 min"
draft: true
---

2026 is the year every agent got an identity.

In the space of a few months: Microsoft shipped Entra Agent ID and Okta shipped Auth for AI Agents, both general availability. Google's agent-payments protocol — built on verifiable credentials — got donated to the FIDO Alliance. Cloudflare turned on cryptographic bot-and-agent verification at its edge. NIST opened an agent-identity initiative. The EU's digital identity wallets, covering companies and not just people, are mandated by the end of the year. There are even agent "passports" with on-chain reputation.

This is real, and it's necessary. It's also not the thing people think it is.

## What identity actually settles

Strip the announcements down and agent identity answers a stack of questions, all variations of one: *can I trust this thing in front of me?*

- **Who is it** — is this really that company's agent, this specific instance?
- **Who does it act for** — what human or company delegated to it, and through what chain?
- **What may it do** — the mandate: a signed, tamper-evident statement of "allowed to spend up to X on Y."
- **What's its track record** — reputation, the agent with ten thousand clean transactions versus the one with ten.

Every one of those is worth building. None of them answers the only question that decides whether a high-stakes agent actually gets let off the leash: *who pays when it's wrong?*

## Necessary, and not sufficient

A mandate is not a guarantee. "This agent was authorized to spend €50,000" and "the €50,000 was a mistake nobody will reimburse" are both true at the same time, and identity has nothing to say about the second one. Authorization is not absorption. Proving who acted is not the same as carrying what they did.

So identity is the **rail**, and risk-binding is the **toll on top of it**. The rail moves the agent through the world and records that it was allowed to. The toll decides whether the movement can happen at all, because somebody priced and agreed to carry the downside first. You need the rail before you can build the toll — you can't underwrite an actor you can't name — but the rail is not the toll, and the people building it are mostly not trying to be.

<div class="callout">
<span class="callout-label">Worked example</span>

An agent is flawlessly identified. Verified provenance, a valid signed mandate, a spotless reputation score. It buys, exactly as authorized, off a data feed that was quietly poisoned last week. €50,000 of damage.

The identity stack performs perfectly: it tells you precisely which agent did it, for whom, under what mandate, at what millisecond. And then it stops. None of that pays the €50,000. The better the identity, the more precisely we know whose loss it is — and the more obvious it is that someone still has to carry it.

</div>

## Identity makes the case for insurance *stronger*

Here's the twist most people miss. Better identity doesn't reduce the need for risk-binding — it sharpens it. The accountability gap is hardening into law: a 2026 California statute bars defendants from blaming the AI, and courts are converging on a "reasonable oversight" standard that lands the liability squarely on whoever deployed the agent. Identity is what makes that liability *provable*. It turns "an AI did something, who knows who's responsible" into "this agent, this operator, this mandate, this loss."

Provable liability is exactly the condition under which people buy insurance. You don't insure against fog; you insure against a bill with your name on it. The identity layer is busy putting names on the bills.

## So build the toll, not the rail

If you're me, this is the best news of the year. The hard, capital-soaking, standards-committee work of agent identity is being done — for free, by Microsoft and Okta and Google and Cloudflare and the EU. That's the substrate I'd otherwise have had to wait for. I get to consume it: ingest the identities, the signed mandates, the audit logs as the raw inputs to underwriting, so "verified activity" becomes "verified-*identity* activity," which is a far more underwritable thing.

The one discipline is to stay rail-agnostic. There will be no single winner of agent identity for years — there'll be Entra and Okta and AP2 and Web Bot Auth and the EU wallet, all at once. Betting on one is a mistake. Sitting on top of all of them is the position.

---

I'm not building agent identity. Plenty of giants are, and they'll do it better than I would. I'm building the layer that sits on top of whichever ones win — the one that answers the question the rail never will.

Identity says who. I say whether.
