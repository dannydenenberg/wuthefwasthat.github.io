---
layout: post
title:  "Backprop without synchronization"
date:   2016-06-29 10:18:32 -0700
categories: AI
comments: true
---

Dislcaimer: This idea is unlikely to be original. And I make no claim about whether the brain actually does this.

Our computer architectures are fundamentally synchronized - the cpu has a clock cycle.
Neurons, on the other hand, seem to fire off whenever they want.
Each neuron operates using fairly local state, without any kind of global synchronization.
In some sense, this means the atomic unit of work in brains is at a neuron level, whereas the atomic unit of work in our computers is at a cpu level.

Current machine learning algorithms are getting to be quite good in practice at many tasks.
Much like the architectures they run on, they are essentially synchronous algorithms, with massive parallelism only between each step.
There are explicitly synchronized forward and backwards passes, explicit processing of each input timestep, etc.
If one tried to implement global synchronization on top of neurons, it would probably incur a large computational overhead.

So what would be the natural way to run backpropagation if there were no global synchronization?
In place of the forward pass, one can imagine each neuron doing something like waiting for all inputs to be received, before firing the output.
In place of the backwards pass, one can imagine each neuron waiting for all gradients before sending back its gradient.
But what if one of your inputs fires twice while you're waiting?

Each neuron's algorithm would be something like:
- Accumulate gradients from output neurons. When it notifies us of a gradient update, we accumulate gradient equal to the weight of our connection.
- If the accumulated gradient for a given connection is above a certain threshold T, update that weight, then notify all input neurons.

Note some nice properties of this:
- Sparser backprop.  Automatically get dropout-like effects.
- Increasing T corresponds to changing the learning rate.
- Making T variable depending on the inputs or changing the accumulation strategy, we can implement other update algorithms (momentum, Adagrad, Adam, etc).
- We can easily get gradient clipping
- We can easily get noisy gradients
- Far less gradient updates.  Small noisy gradients will tend to cancel each other out, preventing firing.

Some problems:
- It's not obvious how to get a gradient value.  Each neuron could just keep a bunch of partial derivatives around, 

I don't think this is biologically plausible.  Minimally, you would probably do something similar in the forward pass.

If one thinks of the activation of a neuron as the atomic unit of work, 
   it would seem unlikely to me
that .
(whether biological or artificial) 

It seems highly unlikely that matrix multiplies are the fast atomic unit of work of neurons, and so seems highly unlikely to me that
the current deep learning approach is mimicking the brain too precisely.

