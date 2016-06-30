---
layout: post
title:  "Homomorphic encryption"
date:   2013-03-21 10:18:32 -0700
categories: computer science
---

Shafi Goldwasser and Silvio Micali won the Turing Award recently, for their foundational work in cryptography.  
I had the pleasure of working with Silvio (as his TA and as his student) while at MIT,
where he gave many of the most memorable and motivated lectures I've been part of.

In Silvio's honor, I'm writing a post which tries to teach some cryptography.
I can't hope to be as entertaining or lucid as Silvio, 
but my goal is to illustrate clearly, but to an even less technical audience.

The topic I chose was Gentry's construction of homomorphic encryption, for the following reasons:

- I presented on this topic in the past
- It was a huge breakthrough in cryptography
- It has a very nice proof idea, which I believe can be well-illustrated to a non-expert (though I may not succeed at it).
  Ive not seen this done elsewhere
- In particular, I've not heard Micali lecture about it

## Intro to encryption

Before we can talk about homomorphic encryption, we should explain encryption.

### History

Encryption in one form or another has been used for thousands of years.
Notably, governments used ciphers to pass war messages.

In the 70s, it became much more commonplace, thanks to a scheme called RSA.
Perhaps the most famous scheme, RSA was developed by and named after another group of Turing award winners
(including Rivest who I also TAed for!).
Later, Micali and Goldwasser formally defined security for such schemes.

Here, we'll give a very basic presentation

### Encryption

Say we start with a message, call it $$m$$.  Like so:

![A message](/assets/images/homomorphic/m.png)

**Encrypting** a message is basically just putting a lock around the message so others can't read it.
I'll denote an encrypted message by drawing a circle around the original message:

![An encrypted message](/assets/images/homomorphic/em.png)

So the "lock" is actually a function you apply: an encryption function.  
We'll denote the encrpyted version of the message $$ m $$ by $$ E(m) $$.
The message is not physically locked up, but is scrambled to look like complete gibberish.

### Decryption

Now, a lock is not a lock without a key!
With a certain secret key, call it $$ k $$, this lock can be removed, and the message can be recovered!

![Decryption](/assets/images/homomorphic/decrypt.png)

Decryption is also a function, call it $$ D $$.
It has the crucial property that $$ D(E(m), k) = m $$.

Equally important is that without this secret key $$ k $$, the message becomes very hard to recover.  
As far as we can tell, you need to use brute force, which takes an impractically long time.
(In practice, security breaches are rarely due to message recovery being mathematically easy)

![Security breach](/assets/images/homomorphic/insecure.png)

### Legacy

Encryption is fundamental to all security and privacy on the internet.
In fact, RSA remains extremely practical and commonplace -
if the security of the scheme were compromised, it would have a major impact on the world.
Until then, it puts the S in HTTPS!

## Homomorphic encryption

**Homomorphic encryption** is a different beast.  

### Motivation

Suppose Alice has a lot of private data, like her family's sequenced genome, on a hard drive.
But now she wants to search through it, or perform some more complicated algorithm on it.  
Unfortunately, her laptop isn't powerful enough to run the whole computation.
Bob offers an excellent cloud service for processing genomes.
In fact, his proprietary algorithm is much better for extracting relevant information
than the open-source algorithm Alice was thinking to run.
But Alice doesn't want to give away her genome to someone she doesn't know.
What does she do?

At the very least, she could encrypt her data before sending it off.
At least that way, the mailman can't steal the DNA.
But still, Bob seemingly needs to have a decryption key in order to do anything with it.

To solve this problem, we need something magical.

### Definition

In general, suppose Alice wishes to apply some arbitrary function, $$ f $$, to some data, $$ m $$.  
Unfortunately, $$ f $$ can only be computed by Bob, perhaps because it is computationally expensive.
However, Alice wishes for Bob not to see $$ m $$.
So how can she get from $$ m $$ to $$ f(m) $$?

![This doesn't work](/assets/images/homomorphic/homomorphictry1.png)

Homomorphic encryption essentially lets you take encrypted inputs, and apply some function to get an encrypted output.

![Homomorphic function application](/assets/images/homomorphic/homomorphicapply1.png)

More precisely, homomorphic encryption is an encryption scheme, with an additional, amazing property.  
For any function $$ f $$, you can easily transform it into a "homomorphic" version of the function, call it $$ f^* $$.  
This transformation has the "homomorphic" property that $$ f^*(E(m)) = E(f(m)) $$, for any message $$ m $$.

With such a scheme, here's how Alice would get $$ f(m) $$:  

- Alice generates a secret, $$ k $$, and takes her data $$ m $$, and encrypt it, to get $$ E(m) $$.  
- Alice hands $$ E(m) $$ to Bob, and tells him a function $$ f $$ she'd like to compute on it.
- As far as Bob can tell, $$ E(m) $$ is gibberish, since he doesn't know $$ k $$.
  However, he transforms $$ f $$ into its homomorphic version, $$ f^* $$
- Bob uses his super computer to apply $$ f^* $$ to $$ E(m) $$, producing $$ f^*(E(m)) = E(f(m)) $$.  
- Bob hands $$ E(f(m)) $$ to Alice, who then decrypts with her key: $$ D(E(f(m)), k) = f(m) $$!

Of course, if you have a decryption key $$ k $$, this transformation from $$ f $$ to $$ f^* $$ is easy.
Simply let $$ f^*(x) = E(f(D(x, k))) $$.  That is, decrypt, apply $$ f $$, and re-encrypt!
Then, if $$ x = E(m) $$, we have $$ f^*(E(m)) = E(f(D(E(m), k))) = E(f(m)) $$, as desired.

But in homomorphic encryption, the security of the original scheme is not compromised.
So Bob is not allowed to be able to recover $$ m $$ as an intermediate step.
He must compute a function on inputs he can't even see, resulting in an output he can't see either!
To reiterate, this somehow happens, without ever opening either lock:

![Magic](/assets/images/homomorphic/homomorphicapply1.png)

In fact, if homomorphic encryption is possible, then Alice can even make the function itself secret.
That is, she wants Bob to neither know $$ f $$ nor $$ m $$, and yet to compute $$ f(m) $$ for her!
Can you see how?  (Hint: it involves something called a Universal Turing Machine)

### History

Homomorphic encryption is an incredibly useful tool, and is considered a holy grail of cryptography.  
While tons of encryption schemes were known by the 70s, nobody knew how to construct a homomorphic one.  
Often times, when things are too good to be true, theoreticians go ahead and prove it so.
But nobody could show a homomorphic scheme was impossible either!  
So even with plenty of geniuses were thinking about it, homomorphic encryption
was a huge question mark for 30 years.

*... drumroll*

### A candidate scheme

Finally in 2009, Craig Gentry produced a candidate homomorphic encryption scheme.  

To do so, he first constructed a **"somewhat" homomorphic encryption scheme**.

#### Somewhat homomorphic encryption

In a somewhat homomorphic scheme, each time you apply a homomorphic function, the shape of the lock gets a little bit warped.  
The more complicated the function, the more warped the lock would get.  
If the lock was only warped a little bit, then the key could still open it.  
But if it got warped too much, the key would stop working.  
Unfortunately, this meant you couldn't do very much computation before the output became impossible to read, even for someone with the key.

To illustrate, I'll use green circles to denote locks that can still be unlocked, and red circles to denote locks that are hopeless.  
So a dark green circle is a perfectly fine encryption:

![Good decryption](/assets/images/homomorphic/greendecrypt.png)

But a red one makes it so even a key can't recover a message:

![Bad decryption](/assets/images/homomorphic/reddecrypt.png)

Now suppose we wanted to go from $$ m $$ to $$ m + 6 $$, by repeatedly adding one.  What might happen is this:

![Decryption worsening](/assets/images/homomorphic/worsen.png)

It turns out coming up with a somewhat homomorphic scheme is not so hard.
But the scheme is not very useful, if you can't even add 6 to a number homomorphically!

So where do we go from here?  

#### Bootstrapping

Here's where an amazingly idea called **bootstrapping** comes in.
What we'd like is a way to get from a bad encryption to a good one.
First, the picture:

![Bootstrapping!](/assets/images/homomorphic/bootstrap.png)

What the hell is going on here?

1. We start with an encryption that is almost red, i.e. almost unusable.
1. We encrypt this encryption, freshly!  That is, we put a very new, shiny lock around it.
1. We *homomorphically* apply the decryption function!  
   Remember, this means that function is magically applied to whatever is on the inside of the lock.
   In this case, what's inside is an encryption, and the function is decryption.  So the result is that our original message sits inside the lock!

Unfortunately, when we apply the decryption function, our shiny new lock will get worse.  
But if it doesn't get too bad, and is still better than the original lock, then we've made progress!  
And we can do this over and over, whenever our lock is starting to get bad, in order to continue our computation.
And that's it.  This bootstrapping process turns a somewhat homomorphic encryption scheme into a "fully" homomorphic one.

Take a moment to understand - it's really quite beautiful!

A few things of note:

- Remember, the person doing all this is the person we don't trust.  
  But as an input to the decryption function, they need the secret key!  
  Luckily, their decryption function is homomorphic, so we can just give them *an encryption of the secret key*.  
  It's a necessary assumption that this is safe (luckily, it appears to be, for all we know).
- A lot of technical details went into making the decryption function simple enough that it didn't make the new lock worse than the old one.

## Conclusion

So this amazing trick makes it so that we can now have someone blindly apply arbitrary functions to encrypted data.  
Unfortunately, because the bootstrapping procedure must be ran often, this scheme is too slow to be practically useful.  
But research in this area has accelerating, and cryptographers are now working on bringing this dream to reality.

Imagine a world where

- cloud email services like Gmail could search through your mail for you without being able reading it,
  so you would never have to worry about the NSA pressuring Google into giving away sensitive information.
- where voters could vote electronically without worrying about someone knowing who they voted for
  (this is a special case of multi-party secure computation, which is possible with homomorphic encryption)
- where you could give away truly obfuscated source code, but still let others run your algorithm

Can you imagine ways in which the world might be better off with homomorphic encryption?
