---
title: "The Loss-Data <em>Flywheel</em>"
description: "In the agent economy the moat isn't the model or the product. It's the loop that turns risk you carry into pricing nobody else can match."
pubDate: 2026-06-28
tags: ["ai", "insurance", "moats", "agent-economy"]
status: "evergreen"
readingTime: "5 min"
draft: true
---

Everyone building in the agent economy is hunting for the moat. Most point at the model, or the product, or the integrations. Those are all copyable. The thing that isn't copyable is the loop.

I've written before that the loop is the asset and the revenue is rent on the loop. In risk, the loop has a specific shape, and it is the whole strategy: **claims → loss priors → the pen → the toll.** You carry some risk to *learn* it. You learn it to price it. You price it to route everyone else's. Each turn makes the next one cheaper and sharper, and the gap to anyone starting later widens instead of closing.

## First you have to become the record

You can't run the loop if you don't see the events. And today nobody sees them cleanly — risk is fractured across forms, carriers and brokers that don't talk to each other. The broker is a PDF router. The relationship goes silent between the sale and the claim.

So the first move isn't a product, it's a position: ingest the whole thing end-to-end and *become the system of record* — the canonical version of what happened, upstream of the carriers and the claims. Own the record and the loop has fuel. Don't, and you're guessing from whatever leaks downstream.

This is why "we have lots of integrations" is not a moat and "we are the record" is. Integrations are spokes. The record is the hub.

## Hold risk to learn it, route risk to scale it

There's a tension people miss. To learn risk you have to *carry* some of it — a house book, real exposure, skin in the game. To scale you have to *not* carry it — route it to balance sheets that compete to take it, and skim the coordination.

These look contradictory. They're sequential. You hold early, on purpose, because that's the only way to manufacture proprietary loss data. You route late, on purpose, because holding caps your size and routing doesn't. The house book was never the business. It was the school.

<div class="callout">
<span class="callout-label">Worked example</span>

Two firms write the same new agent risk. Firm A brokers it and moves on — it never sees how the claims land. Firm B holds a slice and watches every one resolve.

A year in, Firm B has a loss curve and Firm A has a guess. A few points of loss ratio *is* the entire margin of an underwriter. So Firm B can price under Firm A and still make money — and every policy it writes sharpens the curve again. Firm A never catches up, because catching up requires the data it chose not to collect.

</div>

## Winner-take-most, in a market that usually isn't

Brokerage and underwriting are fragmented — nobody holds more than a slice — because being the biggest broker doesn't make the next client's experience any better. Scale doesn't compound.

A system of record breaks that. More risk ingested → more loss data → better pricing → more clients → more data. That's an operating-system curve, not a brokerage one. The capacity and the distribution concentrate on whoever is learning fastest, because that's who they make the most money routing through.

## The honest objection: insurance loops are slow

Here's where I have to be straight, because it's the real weakness. Claims take months, sometimes years, to resolve. A feedback loop that slow barely deserves the name. SaaS loops close in days; an insurance loop can close in quarters.

Three answers, in order of how much I trust them. **One:** you don't wait for the loss to learn — the fast signals (what gets corrected, what gets disputed, what gets re-quoted, the alterations that are two-thirds of policy volume) move daily and feed the model long before a claim settles. **Two:** certification works as a proxy — you price off attestable posture before you have history, and let history correct it. **Three:** the slowness is a moat too. A loop that takes two years to spin up is two years a competitor can't skip. Latency is a tax on entry, and you only pay it once.

---

I keep coming back to the same sentence: the artifact is the current crystallization, the loop is the asset. A skill file copies. A product gets cloned. The proprietary system that turns real-world signal into a better next decision does not — because to copy it you'd have had to run it, for as long as I have, on data only I collected.

That's the whole game. Become the record. Hold to learn. Route to scale. Let the loop do the compounding.
