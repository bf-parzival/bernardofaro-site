---
title: "Two Positionings for Agentic <em>AI</em>"
description: "Most operators picking up agents are picking a side without knowing it. One question separates substitution from leverage."
pubDate: 2026-05-12
tags: ["ai", "strategy"]
status: "evergreen"
readingTime: "4 min"
---

Most operators picking up agentic AI are picking a side without knowing it.

**Position #1** treats agents as cheaper executors. The job stays the same. The agent does what the human did, faster and at lower cost. The tradeoff is named honestly: you give up nuance, you accept brittleness, you take the margin.

**Position #2** treats agents as decision layers. The job changes. The agent is not paid to execute the old workflow. It is paid to make a class of decisions a human shouldn't be the bottleneck for. The tradeoff is different: you give up control over the per-instance output, you accept that the system will sometimes be wrong on edges, and you take the leverage.

Most market-facing AI products today are Position #1 dressed as Position #2. The marketing is decision-layer. The implementation is cheaper-executor.

## One question separates them

You can tell which one a system actually is by asking it: *when the agent fails, what fails with it?*

If the answer is "a task gets done worse, slower, or not at all," it's Position #1. The agent was a substitution.

If the answer is "a decision gets made worse, with the same speed and the same cost," it's Position #2. The agent was a layer.

<div class="callout">
<span class="callout-label">Worked example</span>

An AI that drafts your weekly report is Position #1. The report still gets written. An AI that decides which of forty incidents this week deserves a report is Position #2. The decision still gets made. Swap them and the org keeps running. Remove either and the org notices a different kind of loss.

</div>

## Why most operators drift into Position #1

The substitution math is easier to defend at the next budget review. `cost_human - cost_agent = savings`. You can model it in a quarter. You can present it to a CFO. You can show it on a deck.

The compounding belongs to Position #2 and the budget review can't see it yet. The decision layer doesn't save a job. It changes what a job is for. That gets harder to model, easier to dismiss, and slower to show.

So Position #1 gets funded. Position #2 gets a paragraph in the strategy doc.

---

The work, both as a builder and as the operator inside an institution, is to know which one you are building. To say so out loud. And to be honest, in particular with yourself, about whether the system you shipped this quarter is the one the deck described.

I am building both. Position #1 to fund the next quarter. Position #2 because the next ten years belong to whoever shipped a real one before the budget review noticed.
