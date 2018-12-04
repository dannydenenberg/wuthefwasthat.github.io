---
layout: post
title:  "Provable program annotations"
date:   2016-06-29 10:18:32 -0700
categories: programming math
comments: true
---

## Intro

Currently, formal verification is constrained to programming language with powerful type systems and obscure syntax, which
the average programmer would probably take months to learn.

In fact, even the exceptional programmer trying to build a practical system may not want to use dependent types to encode all the things they care about.
In essence, this is requiring the programmer to write out many proofs, when they might hope to simply declare the properties and have them be automatically proven,
or to only have to help prove non-trivial things.
Just like the programmer may want to leave out writing most types and let the compiler to do type inference, they may want to offload verification to a compiler.

This points towards an obvious direction, which I think strikes a nice compromise between languages for doing formal proofs, and languages that normal programmers use to program normal things.

### Example 1

Consider this javascript implementation of merge sort:

```
function merge(as, bs) {
  const merged = [];
  let ia = 0;
  let next_a = as.length ? as[0] : null;
  let ib = 0;
  let next_b = bs.length ? bs[0] : null;
  while (next_a !== null && next_b !== null) {
    if (next_a < next_b) {
      merged.push(next_a);
      ia++;
      next_a = ia < as.length ? as[ia] : null;
    } else {
      merged.push(next_b);
      ib++;
      next_b = ib < bs.length ? bs[ib] : null;
    }
  }
  if (next_a !== null) {
    merged.push(...as.slice(ia));
  }
  if (next_b !== null) {
    merged.push(...bs.slice(ib));
  }
  return merged;
}

function merge_sort(xs) {
  if (xs.length < 2) { return; }
  const mid = Math.floor(xs.length / 2);
  return merge(
      merge_sort(xs.slice(0, mid)), merge_sort(xs.slice(mid))
  );
}
```

Hopefully, this version of merge sort isn't too hard to read.
Maybe you can convince yourself that it's 90% likely to be correct.
However, it's very far from something provable with current techniques.

At this point, a typical programmer will write a bunch of tests, being sure to cover various corner cases.
Every programmer knows that this method will occasionally fail us, and result in buggy code getting pushed.

What if the programmer could instead write this:

```
function sorted(xs: Array<number>) => is_sorted: boolean
  @ensures(
    is_sorted === !(exists(i: integer, j: integer) {
      i < xs.length && i >= 0 &&
      j < xs.length && j >= 0 &&
      i < j && xs[i] > xs[j]
    })),
  // test cases, for sanity
  @prove(sorted([1, 2, 3])),
  @prove(!sorted([1, 3, 2])),
  @prove(xs.length < 2 => sorted(xs)),
{
  if (xs.length === 0) { return true; }
  for (let i = 1; i < xs.length; i++) {
    if (xs[i-1] > xs[i]) { return false; }
  }
  return true;
}

function merge(as: Array<number>, bs: Array<number>) => merged: Array<number>
  @assumes(sorted(as) && sorted(bs)),
  @ensures(sorted(merged)),
{
  const merged = [];
  @invariant(sorted(merged));

  let ia = 0;
  let next_a = as.length ? as[0] : null;
  let ib = 0;
  let next_b = bs.length ? bs[0] : null;
  while (next_a !== null && next_b !== null) {
    if (next_a < next_b) {
      merged.push(next_a);
      ia++;
      next_a = ia < as.length ? as[ia] : null;
    } else {
      merged.push(next_b);
      ib++;
      next_b = ib < bs.length ? bs[ib] : null;
    }
  }
  if (next_a !== null) {
    merged.push(...as.slice(ia));
  }
  if (next_b !== null) {
    merged.push(...bs.slice(ib));
  }
  return merged;
}

function merge_sort(xs: Array<number>) => output: Array<number>
  @ensures(sorted(output)),
  @ensures(xs.length === output.length),
  // output contains same set of numbers
  @ensures(
      forall(y: number) {
        xs.filter((x) => x == y).length === output.filter((x) => x == y)
      }),
{
  if (xs.length < 2) { return xs.slice(); }
  const mid = Math.floor(xs.length / 2);
  return merge(
      merge_sort(xs.slice(0, mid)), merge_sort(xs.slice(mid))
  );
}
```

`@ensures` is the same as `@prove`, except that it additionally can be used as a lemma for other proofs.

Sure, it's a bit longer, but you'll spend a lot less time writing tests and debugging!

### Example 2


I should note that there are projects like this today, such as Dafny
