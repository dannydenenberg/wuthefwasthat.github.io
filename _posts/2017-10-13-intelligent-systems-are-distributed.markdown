---
layout: post
title:  "Intelligent systems are distributed"
date:   2016-06-29 10:18:32 -0700
categories: programming math
comments: true
---

Personally, I find it very hard to imagine scaling up society/intelligence without distributed systems.

First, let me describe what I mean by a distributed system.
Imagine there are a bunch of functions, which all must pass messages to each other.
Think of these messages as groups of bits of influence - the sender is telling the receiver how to act.
Distribution is an informal property of the topology of this influence bit sending network.
A top-down tree-like network is not distributed, whereas something like a complete symmetric graph is completely distributed.

When I think about systems of governance and networks of institutions, systems of computers, or even systems of functions in a particular program,
I can think in this framework.  For example:

- In a representative democracy, influence flows from all citizens, to selection of representative.
  These representatives then make decisions that flow in a top down way to affect all citizens.
- In a dictatorship

- In Bitcoin (and most other cryptocrurrencies), bits go from transactors to a network of mining nodes (which interact minimally with each other),
  to a network of clients which all influence each other.  This is very distributed.
- In the US banking system, bits go from the Fed, to people and banks.

- In a typical Javascript program,
- The actor model of programming will get more popular, since it makes it easier and more natural to write distributed algorithms.

To me, all trends point towards more distribution.
We're seeing a rise in cryptocurrencies, we're seeing democracy prevail over dictatorships, and we're seeing distributed computer systems prevail over central ones.
It's fundamentally more scalable, because it means you *don't have an information bottleneck*.
Thus as society/systems scale, I posit that we must see more distribution.

One can imagine a singular superintelligence, but ultimately this intelligence must compute many tasks in parallel.
In doing so, it must very likely have functionally independent units which are sub-routines to its top level routine.
These units may then engage in message passing to avoid an information bottleneck in the main routine.

I think, because of this bottleneck problem, a singular superintelligence actually looks like a single agent which somehow maintains power over other agents by
distributing work, incentives, and means for these sub-agents to coordinate.

I think this is probably a bold claim, given that deep learning techniques right now tend to learn giant networks that do very dense computations.
Furthermore, the human is the best example of an intelligence architecture we know today, and we know it's mostly centralized - we're controlled by the brain and the brain seems to have one central thread of thought.
But we know also the brain does a lot to avoid information bottlenecks.
We filter out unimportant details and keep only high-level abstractions.

Firstly, there the extents to which it *is* distributed.  Our heart beats independently, our immune system works independently, etc.
At a lower level, the brain is a distributed system of neurons.

If the message passing is top-down,


