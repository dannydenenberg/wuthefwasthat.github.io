---
layout: post
title:  "Handling bad datasets"
date:   2017-10-29 12:35:32 -0700
categories: machine-learning
comments: true
---

# Setup

Suppose we have a dataset which we know is imperfect, e.g. we know 10% of the labels were essentially random.
We would like to train a predictor with close to 100% accuracy.
Naively, the predictor will overfit on the training data by memorizing the 10% of labels that were corrupt, and thus have 10% generalization error.
How can we fix this in a principled way?

## Idea

Say we have a second network, which takes an (image, label) pair and outputs the probability the label is wrong.
... what to make loss of second netowrk?
want it to regularize to output 10% on average
want it to output 0 when first network agrees
want it to output 1 when first network disagrees

- a

Suppose we let the network have a second output, which is a probability it assigns to each label being wrong, if it were presented as the real label.


## Other kinds of imperfection

This kind of strategy generalizes to things besides pixel corruption.
For example, maybe we know 10% of the labels were essentially random.
For an image dataset, we might think the dataset has noise added to individual pixels, rather than

Looks basically like regularization for resnet?

## Idea to handle adversarial examples

First part of network is randomly adversarially perturbing input (takes random vector + input)
- outputs vector to add to input
- we enforce the vector is small
- we make the network loss prefer smaller logit on correct label
-

surely Ian would've thought of this
