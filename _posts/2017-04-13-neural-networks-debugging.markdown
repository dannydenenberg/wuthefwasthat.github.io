---
layout: post
title:  "Modularity and debuggability of neural networks"
date:   2016-06-29 10:18:32 -0700
categories: machine-learning
comments: true
---

When we build software, it's typically good practice to build it modularly, that is, in many small pieces that are individually simple to reason about.
There are a number of reasons this is desirable:
- Each piece can be individually tested
- Debugging can be contained to a small piece of code
- Reuse is easier
- Ownership/stewardship is easier, i.e. this person is in charge of this piece of code

On the other hand, when we train neural networks,
although we may reuse architecture of other networks (and initialize weights to those of a learned one),
we typically train them end to end.
This works better since then the weights get tweaked for our particular problem.

However, this has downsides:
- It's generally hard to debug since there's no obvious interpretation of hidden layer features
- If you reuse part of another architecture, there's no guarantee it will behave similarly or learn equally well
- This isn't scalable

Reasons for hope
- The brain seems to be modular to some extent
- It may be difficult to train networks with too many parameters
- Imagine a network which has to carry out two tasks, A and B.  B is a significantly harder task than A.
  In order to learn task B, we need many parameters, but it can only use a small fraction of them for A, in order to not overfit.
- We can export embeddings that can get reused in other tasks

dropout fixes overfitting by forcing redundancy - it's plausible to me that this works essentially because it adds a factor of 2 in the window of number of parameters


- Use of fixed embeddings, like word2vec


There are a number of ways in which

