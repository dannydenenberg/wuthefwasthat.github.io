---
layout: post
title:  "Smart TODO scheduling"
date:   2018-12-03
categories: productivity
comments: true
---

I would like an app where the main interface is extremely minimal: in big font, it tells me what I should do.

Whenever there's something I would like to do later, I simply speak to the app - it parses my request and reorganizes my schedule.

The app should be dead simple to use, and give you the best of todo lists, calendars, time-tracking apps, and more.

## Motivation: premeditated planning

In general, I often find myself with free time and no particular idea of what I should do.
On the other hand, occasionally I think of things which aren't habitual, but that I should be doing more of, e.g. calling my family.
But when the free time comes along, it takes much more effort to remember things I should be doing.
Ideally, I should premeditate about how I'd like to spend my time, and then later act faithfully on that without with low cognitive overhead.

You can imagine yourself in two possible modes, "CEO" and "worker".  Most time is spent in "worker" mode, doing things "CEO" you decided.
(Realistically, you might fluidly switch between the two modes, but ideally not too much.)
To facilitate this, we use software:  CEO me enters a list of things to do (and priorities and deadlines) into some app, and worker me repeatedly does *whatever the app says*.

If I take longer to do a task than expected or lacked the willpower to do it, I tell the app, so that I can plan better next time.
The app is my boss, but since I program it, I'm my own boss.

## Advantages over existing solutions

Absorbing the functionality of both todo lists and calendars gives additional advantages.
Fundamentally, this is because both are tracking ways you should spend time.
Here are some examples:

- When I add an event, it can tell me what the marginal time would've been used for.  Is that acquaintance's birthday party really better than an hour of running or playing music? This is especially useful for people who tend to over-schedule themselves.
- There's less cognitive overhead if only using a single mechanism to decide what to do.  When I have todo list only for unstructured time, it's hard to make a habit of following it.  If that list is also your calendar, you might find it easier to stick to.
- It's easy to see overviews of your time spent, if it's all in one place.  So time-tracking comes nearly for free.

## Interface details

Here's an idealized version of the app I imagine, at a high level.

### Idealized version

There are three main classes of actions, **Plan**, **Do**, and **Reflect**.
The default screen is a "Do" screen, but you can enter the other modes either by switching explicitly or simply by prompting the app with the right query.

#### **Plan**

You can add tasks, in natural language, like:
- I'd like to sleep 8 hours a day.  I don't need more than 9 hours and can't function on less than 6
- I'd like to go for a 30 minute run on days with no other exercise planned, preferably in the morning.  Then I should shower right after.
- I should make an doctor's appointment every April and then enter the appointment time as a new task afterwards
- I'd like to get eggs and milk the next time I'm at the grocery store
- I have dinner with Bob on Friday at 6 PM, at his apartment.

The app may ask clarifying questions, that you can optionally respond to.

You can query and edit tasks.
- Show me all planned exercise in the next month
- I'd like to sleep 15 extra minutes per day
- Move my dinner meeting with Bob to 7
- I'd like to attend Saturday book club every other month, instead of every month.
- Cancel my meeting with Bob

#### **Do**

There's a screen that tells you what to do.
You can say "Done", and optionally enter additional feedback.
You can also give additional context, such as "I only have 10 minutes" or "I'm at the mall" (it can also use location services, of course!).
There's also a highly discouraged "Skip" button which forces you to justify.

#### **Reflect**

You can also ask for summaries of what you've done, which brings you to a different set of screens. For example, you might
- Check trends in your time spent
- See a list of tasks that were neglected compared to your stated priority levels or desired time spent
- See a list of tasks that took longer than you expected

### Bells and whistles

Obviously this app is not entirely fleshed out.  For example:

- At a minimum, you probably need integration with Google Calendar, and notifications for scheduled events.
- It would be good to be able to attaching notes to existing tasks
  - Add "buy bananas" to my shopping list
  - Add "Increase leisure time" to my next planning session

The list of feature requests is probably endless :)

### Some realistic relaxations of the interface

I think the idealized interface is hard to implement, but there is a large spectrum of simpler versions.

For example, instead of natural language, you could plan by entering:
- Events in a way similar to existing calendar apps
- Todo items with explicit marginal utility/priority levels
- Explicit constraints, e.g. sleep should be at night time, exercise on days with time for a shower with no meetings in between

## Conclusion

I would be very happy if someone implemented something like this.  If you are interested, please let me know!

Some suggestions for the name of such an app:
- Lachesis or Decima, the second of the Three Fates who measured and apportioned the thread of life.
- Remembear, in the spirit of Beeminder (if the Fates are too serious!)
