---
layout: post
title:  "Differential privacy and data poisoning"
date:   2017-10-29 12:35:32 -0700
categories: privacy security machine-learning
comments: true
---

This is an elaboration upon [my stackoverflow question](https://cstheory.stackexchange.com/questions/39350/differential-privacy-and-data-poisoning).

# Contents
{:.no_toc}

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Idea

A differentially private algorithm takes datasets containing inputs and produces randomized outputs, such that no small change in the dataset can shift the distribution of outputs by too much.
This is normally discussed in the context of privacy - when you observe the output, you cannot infer anything about a given input.
But it also implies that an attacker with control over just a single input cannot effectively poison the data to change outcomes.

## Justifying a weak threat model

One might say this is useful only in a very weak threat model, compared to, say, a model in which a constant fraction of (or even [most][1]) inputs can be poisoned.
Generally, it's against the security mindset to weaken threat models in order to get guarantees.
However, this problem seems more difficult than typical security problems, and I suspect the current real-world baselines have essentially no guarantees.

So the critical assumption would be that it's costly to create new inputs.
But one typical case to want a differential privacy guarantee for is when the unit that the datasets are being measured with respect to is a user of a service, e.g. collaborative filtering settings.
In these settings, account creation is often costly, in which case this model might be reasonable.

### Example

Consider the Netflix dataset, with ~100M ratings from ~500K users, to ~20K movies.
In this case, the average movie has only 5K ratings.
Thus 1% of users being adversarial would negate any real signals - i.e. many malicious users rating a single movie well to boost it may be indistinguishable from normal behavior (if they rate other movies in a plausible way).

A realistic threat model for Netflix might reasonably assume costly account creation.
So the number of poisoned ratings for a given movie is at least proportional to the cost to the attacker.

This sugggests a more practical attack - a single user giving bad ratings to all but one movie.
This sort of attack would be mitigated by differential privacy.

### Preliminary analysis

Formally, $$(\epsilon, \delta)$$ differential privacy says that the increase in probability when changing the dataset by one user, is limited to a multiplicative blowup of $$e^{\epsilon}$$ and additive blowup of $$\delta$$.

It's easy to see that:
1. Any $$(\epsilon, 0)$$ differentially private algorithm has the property of group privacy, which says a group of size $$g$$ can blow up outcome probabilities by $$e^{g\epsilon}$$ instead of $$e^\epsilon$$.
  Since cost is assumed to be linear in group size, this would be reasonable for small $$g\epsilon$$, in which case $$e^{g\epsilon} \approx 1 + g\epsilon$$.
2. A $$(0, \delta)$$ differentially private algorithm would also limit a group's damage to an additive $$g\delta$$, which is exactly what you'd want.

This simple analysis is not particularly compelling.  Some simple rebuttals:
1. The attacker gets to choose $$g$$ and thus $$g\epsilon$$ can't be assumed to be small.
2. It's not easy to actually get $$\epsilon = 0$$ for any useful algorithm.
And if both $$\epsilon$$ and $$\delta$$ are non-zero, the guarantee for large $$g$$ will be even worse.

Nevertheless, this is enough to convince me that we may be able to engineer systems in which data poisoning attacks aren't scalable.
Some points for hope:

- It's possible that for particular algorithms, we can get better analysis for $$g > 1$$ than by naively composing guarantees.
  The [moment's accountant technique][2] gives an example of this, although they are analyzing composition of algorithms (which is entirely different from composition of the guarantee for group size).
- We can hope for a guarantee that only holds when $$g < \alpha n$$, for some fraction $$\alpha$$ of all users.
  Then when a group is larger than $$\alpha n$$, we can explicitly detect them via other means (e.g. look at the patterns of account creation, or detected outliers by using verifiable points).
  In other words, "large" threats can be delegated to something outside of the differentially private algorithm.

Overall, this still leaves a lot to be desired.
It's not clear to me how good a guarantee one could achieve in theory or practice.
But it seems promising enough to be a worthwhile idea to explore.

## The big picture

### Data poisoning in the wild

Historically, I think Google search is the most prevalent example of a single algorithm trained on external data whose outputs are extremely important.
And guess what?
The SEO industry spends over $50 billion a year trying to deliberately change the inputs of this algorithm in order to change the outputs.
Note that Google can't do anything about people creating new websites and spurious links on them.
However, they've spent lots of effort using a diversified set of signals to make their algorithms more robust, as well as more explicit combatting of ["Black Hat" SEO techniques][3].

Other examples of data poisoning:
- Market manipulation to affect stock prices
- Fake news in Facebook's news feed algorithm

So it seems clear to me that whenever a sufficiently important algorithm is trained on data that can be manipulated, such manipulation will occur.

### The rise of user data

Companies like Amazon, Facebook and Google are collecting huge amounts of data on individual users.
Already, much fuss is made about protecting honest user data.
Privacy conscious users will often take inconvenient measures to hide their data entirely from such companies.
These companies would suffer large PR mishaps if they leaked large amounts of sensitive user data.

Now, these companies are increasingly turning this data into useful services (shopping recommendations, Youtube recommendations, news feed personalization, etc).
Based on the previous section, the obvious conclusion is that as these services become more important, we will see increasingly many attempts at poisoning their datasets.
If they're not already, I suspect these companies will have to combat such techniques, possibly by making their algorithms robust to poisoned datasets.

### Conclusion

So in addition to protecting honest data, algorithms should *protect against* dishonest data!
It turns out these goals are related and aligned, and differential privacy can potentially be a good solution to both.



  [1]: https://arxiv.org/abs/1611.02315
  [2]: https://arxiv.org/pdf/1607.00133.pdf
  [3]: http://www.wordstream.com/black-hat-seo
