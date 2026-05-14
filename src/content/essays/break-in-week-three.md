---
title: "Why most AI content systems break in week <em>three</em>"
description: "Skills compose. Context goes stale. Routing breaks first. A field report from a system I shipped, broke, and rebuilt."
pubDate: 2026-05-04
tags: ["agentic-systems", "shipping"]
status: "growing"
readingTime: "6 min"
---

I have shipped four AI content systems. Three of them broke in week three. The fourth broke in week four, which counts.

There is a pattern. The pattern is not about the model, the prompts, or the platform. It is about which primitive you neglected to build.

## The four primitives, in order

Every agentic content system has four moving parts. I have written about them at length elsewhere, but the short version: *skills, context, routing, feedback*. Skills are what the agent can do. Context is what the agent knows when it runs. Routing is how the system picks the right skill at the right moment. Feedback is how the system learns from what it shipped.

Most builders build skills first because skills are the most fun. You write a clever prompt that does a thing. It works. You write three more. They all work. Week one feels great.

Week two, you start composing them. The compose step needs context. You hadn't built context, so you stuff everything into a long prompt. It still works.

Week three, the context drifts out of date. The agent makes a confident, wrong call. Then it does it again. Then it does it three more times before you notice. By the time you intervene, the system has produced a body of work in the wrong direction.

That is the week-three break.

## Why routing breaks first inside the break

When the system breaks at week three, the symptom is usually not "the skill is wrong" or "the context is wrong." The symptom is *the wrong skill fired at the wrong moment*. Bad routing makes a great skill library useless. Good routing makes a mediocre one shippable.

Builders skip routing because it feels like glue code. It is not glue code. It is the system's nervous system. If your routing is "user clicks button → run skill," you do not have an agentic system, you have a UI.

## What I do now

I build in this order: context first, routing second, skills third, feedback fourth. The order is the opposite of what feels fun. It is also the only order that does not break in week three.

<div class="callout">
<span class="callout-label">The discipline</span>

You can build skills without context, but they guess. You can build context without routing, but the agent fires the wrong skill. You can build routing without feedback, but the agent's mistakes are immortal. Build them in order, and each one earns the next.

</div>

## A field-tested checklist

Before I start, I now ask three questions:

1. **What state must the agent know to do this well?** That answer becomes the context schema, before anything else.
2. **What decision is the agent making, and what are the options?** That answer becomes the routing logic.
3. **How will I know the agent was wrong?** That answer becomes the feedback loop, written *before* the first skill ships.

If I cannot answer those three questions for the system I am about to build, I am not ready to build it. I am ready to break it in week three.

The next essay in this thread is about the feedback loop and why analytics is not feedback. Soon.
