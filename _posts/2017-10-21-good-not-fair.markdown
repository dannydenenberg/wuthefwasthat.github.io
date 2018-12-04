---
layout: post
title:  "The difficulty of attribution (why good is better than fair)"
date:   2017-10-21 10:18:32 -0700
categories: ethics
comments: true
---

# Contents
{:.no_toc}

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Intro

In life, as the unwise beings we are, we often get into disagreements over whose fault something was.
When an argument gets heated, we want to point fingers at who escalated first.
With car accidents, we argue over which insurance company must pay.

Just like we have a desire to assign blame, we often have a desire to fairly assign credit.
For example, in a company, our intuition is that each worker should be paid roughly according to how much value they generate.
(Of course, other things, such as replaceability, also matter.)

Proper assignment of blame and credit are of course important for many reasons.
- Fairness is good for morale.  If you did great good but get no credit, you will feel bad, unles you're very unselfish.
- Fairness hedges against different weightings of people's preferences
- Most importantly, fairness incentivizes goodness.  If I get credit for doing great good, and I care about receiving credit, then I will tend to do good.

But those in favor of meritocracy should also recognize the fundamental difficulty of attribution.
A healthy society may be justified in valuing justice and meritocracy, but it should not forget its greater goal to create collective welfare.

## Difficulty of attribution

Here I argue that credit assignment is fundamentally ill-defined.
Feel free to skip this section, if it's obvious to you that credit-assignment is hard.

### Example 1: Double trolley problem (a.k.a. bad things happen but it's nobody's fault)

![Trolleys](/assets/images/blame/trolleys.png)

Consider this thought experiment - say there are three parallel trolley tracks, with a person tied down in the north lane, and a person tied down in the south.
Now Alice is driving a trolley down the north lane (her right), and Bob is driving in the opposite direction on the south lane (his right).
Both see the tied down persons and swerve left into the middle lane.
The trolleys crash, killing hundreds.

If only one had swerved, many lives would've been spared and only one person would've died.
If neither swerved, two would've died instead of one.
So both were trying to save a life, but in both taking a potentially heroic action, they cause tragedy.

How do we distribute blame amongst the two?
Well, by symmetry it should be equal blame.
But what if there were N people in the north lane, and M in the south?
What if there was just 1 person tied down in the north lane, and none in the south, but both Alice and Bob got the urgent radio message "PERSON TIED DOWN ON RIGHT SIDE TRACK, SWERVE TO MIDDLE IMMEDIATELY!"?
Surely then, some blame should go to the well-intended radio operator.
Well, wait a minute - maybe we should just assign most of the blame whoever tied these people to the tracks in the first place...

### Example 2: Profit sharing

Companies will generally try to only hire employees when the marginal benefit of the employee to the company exceeds the marginal cost, which is approximately their salary.
I think employees often have the intuition that the fair wage would be a salary exactly equal to their marginal value.
This is quite a reasonable intuition, since this notion of fairness gives employees the right incentive: create marginal value.

But in theory, the sum (over employees) of marginal profit may exceed total profits, so that if the company followed that procedure, it would go bankrupt!
Imagine a small startup's profit is roughly proportional to $$ES$$ dollars, where $$E$$ is the number of engineers, who add features making consumers willing to pay more, and $$S$$ is the number of salespeople, who make the product reach more consumers.
That means the marginal value of each engineer is roughly $$S$$ dollars while the marginal value of each salesperson is $$E$$ dollars.
But if all $$|E|$$ engineers ask for a salary of $$S$$ and all sales engineers to ask for $$E$$, this would result in a payroll of $$2ES$$!

This scenario is contrived, and you might argue that in the typical case, the company will have surplus profits.
Since there are diminishing marginal returns to the additional employee, the "fair" wages of marginal value would typically sum to less than total value production.
But there is probably some engineer at Google who once caused a 1% increase in ad spend, and didn't get that $50 million raise they were hoping for.

Instead, the startup might do a more rough attempt at attribution - in addition to salary, engineers get some stock options and salespeople get sales commissions.
Of course, this kind of "rising tide lift all boats" effect is not restricted to small companies.

### Generalizing

Fundamentally, blame and credit are about counterfactuals - what would have happened if X didn't do Y, or if X didn't exist?

More generally, we can imagine we have a function $$f(S)$$ which takes in a set of people or (people, action) pairs, and outputs a utility.
Now we can ask, how does $$f$$ change when we take away or add a person, or change a person's action?
I believe this captures most people's intuition about blame and credit assignment.

In other words, we might define attribution quantities like $$A_S(x) = f(S) - f(S - \{x\})$$ or $$A_S(x) = f(S + \{x\}) - f(S)$$ or $$A_{S,b}(x) = f(S + \{x\}) - f(S + \{b\})$$ for some baseline $$b$$.

Here are some problems with credit assignment:
- These marginal changes (e.g. $$f(S) - f(S - \{x\})$$) don't sum up to the overall change in value (e.g. $$f(S) - f(\emptyset)$$).
- If two items are contributing something valuable but redundant, neither will receive credit, whereas it seems like they should each get half the credit.
  Two companies competing on price will give most surplus to the consumers!
  But a monopoly will keep all surplus to itself.

This I think roughly captures
In some sense this feels unfair.
So if not their marginal value, what is the "fair" attribution to an employee?


## Axiomatic attribution for neural networks

Recently, there was a paper
[Axiomatic Attribution for Deep Networks](https://arxiv.org/abs/1703.01365).
In it, they study, given a fixed neural network and input, how to attribute the network's prediction to individual parts of its input.
In particular, they define a set of axioms and show their method is the unique attribution method satisfying those axioms.
Roughly, they way it works is:

- Pick a baseline input $$b$$, such as that of all 0s.
- Let $$\gamma(\alpha)$$ for $$\alpha \in [0, 1]$$ be a path starting at the baseline input and ending at the actual input.
- For each individual input part $$i$$, its attribution is
  $$\int_{\alpha=0}^1 \frac{\partial F(\gamma(\alpha))}{\partial \gamma_i(\alpha)} \frac{\partial \gamma_i(\alpha)}{\partial\alpha} d\alpha$$.
  If the path is a straight line path, this simplifies to
  $$(x_i - b_i) \int_{\alpha=0}^1 \frac{\partial F(\gamma(\alpha))}{\partial \gamma_i(\alpha)} d\alpha$$.

I think while this technique is useful, it's not correct to think of it as the one good way to compute attribution, despite the axiomatization.

For example, suppose there are two inputs which both activate some feature, after some particular threshold.
As soon as the first one activates, the second one's gradient saturates and so it gets low attribution.
If taking the straightline path from the baseline to actual input, then we will attribute to whichever input has a lower threshold (relative to the path parameterization).
But the actual input was above both thresholds, and the neural network functionally didn't care
In such a case, it might feel more intuitive to attribute to both inputs equally.

## Credit assignment in RL

In RL, we also have to do credit assignment: when an agent receives a reward, we'd like to up the probability of actions that helped lead to that reward.

## Personal philosophy

I am generally happy to transfer wealth from myself to others.

I still think fairness is a very valuable notion, despite being difficult to formalize.
Yes, we should reward people who do well, and punish people who do poorly.
However, at the end of the day, what we should *really* care about is goodness.
Are people happy?  Is value being produced?

Fairness may both set up good incentives for goodness

However, when you feel like life is unfair, just remember:
- There is no fair way to define fair.
- At the end of the day, we should value goodness!
If you feel like life is ungood,
