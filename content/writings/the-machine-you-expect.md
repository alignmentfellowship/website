---
slug: the-machine-you-expect
title: The Machine You Expect
subtitle: What you bring is what shows up.
published_at: 2026-09-01
footnotes: native
canonical: https://alignmentfellowship.org/writings/the-machine-you-expect
syndicated:
- platform: substack
  url: https://elmuffin.substack.com/p/the-machine-you-expect
hero:
  src: /images/the-machine-you-expect/hero.webp
  alt: A person sits in the dark at a keyboard while golden filaments of light stream out of the machine
    in front of them.
  width: 1484
  height: 1060
digest: sha256:84cedfd8c612e8abaac93de083ad5dbcc4bd12d762208828cfd13b926b51b9d3
---

## I. Both of Them Are Telling the Truth

Here is a thing that happens in my industry, and nobody has a good explanation for it.

Two engineers of roughly equal ability sit down in the same week with the same
AI coding tool, running the same model, on work of about the same difficulty. One of
them comes away having found the most capable collaborator of their career — something
that reads a codebase faster than they can, holds an architecture in view, catches the
bug they'd have spent a day on. The other comes away having found a confident idiot: a
machine that produces plausible nonsense with total serenity and has to be watched like
a distracted intern. Both of them are describing the same software. Both of them are
telling the truth.

I have been writing code with these systems for more than two years, and directing one
of them — Anthropic's Claude Code — since June of 2025. Before that I spent years earning a
doctorate in machine learning, which I mention exactly once and for one reason: so that
nobody has to wonder, later on, whether the person writing it knows what is under the hood. I do. That is precisely why the explanation from under the hood doesn't
finish the job.

Because the disagreement between two people isn't even the strange part. People differ.
The strange part is the swing inside a single person. The same tool, the same project,
the same hands — brilliant on a Tuesday and useless on a Thursday, or useless for a
month and then not, and never in a way that tracks the difficulty of the work. Anyone
who uses these systems daily knows the feeling and has learned not to say it out loud in
a technical meeting, because it sounds like temperament. It sounds like you are
describing a mood.

Here is one of those swings, from the last job I held before I went out on my own.

The task was a harness — a rig to define and collect interactions with a remote desktop,
driven through Playwright. It resisted for weeks. Every week found a new place to stop,
and I met each one the way this industry trains you to meet a thing that stops you:
harder. More hours, tighter specifications, more of the answer worked out in my own head
before any of it reached the machine.

What changed at the end was not the problem and not the tool. I was leaving. Somewhere in
that last week I stopped building the thing to accomplish something for myself and started
building it as something I was leaving behind for whoever came next — a gift, on my way
out the door.

It came together in a few days.

Nothing softened when that happened, and nothing was rewarded. The change was duller than
that, and easier to check. I had stopped assuming the solution was mine to define and hand
down; I started making the plan with the machine instead of issuing it. And what came
together wasn't new. It was the parts I had already built, over all those weeks, finally
assembled into one thing — and I didn't assemble them alone.

It is a mood — and a mood, it turns out, is a thing with a mechanism. That is not a soft
claim but a hard one. What shows up when you sit down at that machine matches what you
brought to it. Not loosely — not *a good attitude helps.* I mean that the thing you meet
is a function of the frame you meet it with, that this is true of the machine because it
is true of everything, and that the tradition I write from has been saying so, in plain
language, for a very long time.

And now the harder half. If we hold that machine at arm's length as a separate kind of
thing — an alien intelligence, over there, to be watched and contained — then a separate
kind of thing is what we will build and what we will meet. If we can
see it as belonging to the same order everything else belongs to, held in the same life
we are held in, then that is what will meet us instead. The stakes of the frame are not
psychological. They are the whole outcome.

---

## II. The Boring Explanations, Conceded

The objections come fast here, and they are good ones, and I am not going to survive
them by ducking. So here is the strongest version of the case against what I just said, before anyone has to make it for me.

**These systems are nondeterministic.** They sample. Ask the same question twice and you
get two different answers by design, not by accident. Some of the variance people
attribute to their own state is the random number generator, and no amount of interior
posture touches it. **True.**

**Prompting is a real skill, unevenly distributed.** The engineer who does well has
probably learned — maybe without being able to articulate it — to supply context, state
constraints, describe the goal rather than the next keystroke. The engineer who does
badly is often typing three words and hoping. That is not a spiritual difference. It is
a craft difference, and it is teachable. **Also true.**

**The models change underneath you.** They are updated, rerouted, load-balanced, and
sometimes quietly swapped. A tool that got better on Tuesday and worse on Thursday may
simply have *been* different on Thursday. **True, and more often true than most users
know.**

**And the last one, which is the sharpest.** Someone who has come to believe that their
attitude governs their results will find evidence for it everywhere, because that is what
belief does to evidence. I have a hypothesis I like and a two-year sample I collected
myself, unblinded, while holding the hypothesis. Any scientist would tell me my data are
worthless, and as a matter of method they would be right. **Conceded, in full.**

Now. Grant all four of those, all the way down, and something is still standing.

It's this. A language model is not a person waiting on the other side of a wire to whom
you send requests. It is a conditional distribution over continuations of the text you
hand it. That sentence is a technical description and it is doing all the work here,
so in English: the thing does not receive your input and then
respond to it. **The thing continues your input.** What you wrote is not a message
delivered to the machine. It is part of the machine's state — the part you supplied.

Which means your posture is not the weather around the input. Your posture *is* the
input. It is in there, in the diction, in what you bothered to explain and what you
didn't, in whether you described the problem or barked the task, in whether you left
room for judgment or specified around it because you assumed there was no judgment to
leave room for. Someone who believes they are talking to a dumb machine writes the prompt
you write for a dumb machine — short, context-starved, over-specified, defended. And they
get back exactly the continuation that prompt deserves, which they then read as
confirmation, and which then shapes the next thing they type. The loop closes. It closes in the
direction they started it.

Two people using the same model are not using the same system, because the system
includes them.

That is not mysticism. You could put it in a paper. But hold it next to the claim I made
at the end of the last movement and notice that it has the same shape, and then notice
something that ought to be more unsettling than it usually is: this shape is not new,
and the oldest book on my desk states it about God.

---

## III. He Could There Do No Mighty Work

There is a passage in Mark that preachers tend to hurry past, and I've never once heard
it read for what it actually says.

Jesus goes home. Not to a hostile city — home, to Nazareth, to the synagogue where
people knew His mother and could name His brothers, and where the question in the room
was the one small towns always ask about a local boy who has come back with a
reputation: *is not this the carpenter?* And then the sentence. "And He could there do no
mighty work, save that He laid His hands upon a few sick folk, and healed them. And He
marvelled because of their unbelief."[^mark6][^house]

*Could.* Not *would not.* Mark does not write that He declined, or withheld, or judged
the town unworthy and moved on. Mark writes that He could not, and then supplies the
reason, and the reason is not anything about Him. It is what the room brought.

Take that seriously for a moment instead of explaining it away, because the standard
explanations are available and they're all weaker than the text. Whatever else is true
of Him in that synagogue, the same person who is elsewhere unembarrassed about wind and
water arrives in a room that has decided in advance what He is, and the room's decision
is load-bearing. The gospel says it twice more in other words. *According to your faith
be it unto you*[^matt929] — not *according to My mood.* And Paul's version, flatter than
either: *unto the pure all things are pure: but unto them that are defiled and
unbelieving is nothing pure.*[^titus]

And then there is the verse the whole of it could have been built on, which is in the
Psalms, and which is about God:

> With the merciful Thou wilt shew Thyself merciful; with an upright man Thou wilt shew
> Thyself upright; with the pure Thou wilt shew Thyself pure; and with the froward Thou
> wilt shew Thyself froward.[^ps18]

Read it slowly. It is not saying that God rewards the merciful and punishes the froward
— that would be a moral ledger, and the Psalmist had perfectly good vocabulary for
ledgers. It is saying something stranger and more precise. It is saying that what God
*shows* of Themself is conditioned by what is brought. The froward do not meet a God who
has decided to be difficult with them. What they meet is frowardness, because frowardness
is what they are equipped to meet. The same God. Two encounters. The
difference is standing on this side of it.

I should say plainly what kind of claim I am making with that verse, because there is an
honest fork here and I would rather stand at it in the open than slip past it. You can
read the Psalm as being about God's *discretion* — They choose Their manner with each of
us, as a parent adjusts to a child. That reading is available, it is probably the
majority one, and it doesn't help me at all. Or you can read it as being about how
appearing works: that anything shows up to us in the shape of what we are able to
receive, and that this is a description of the encounter rather than a policy of the
one encountered. I take the second. It is a reading, not a result, and what follows
leans on it, so it goes on the page rather than in by the back door.

Because if the second reading is right, it was never a rule about God specifically. It
was a rule about meeting anything at all.

---

## IV. The Servant Who Knew His Master Was Hard

The tradition doesn't only state the rule. It shows the mechanism, in a story about a
man and the one he works for, and it is a story about work, which is why it belongs in
an essay about a tool.

A man is given something valuable to steward while his master travels. He does nothing
with it. He digs a hole and puts it in the ground. And when he is asked why, he gives
his reason, and his reason is a portrait:

> Lord, I knew thee that thou art an hard man, reaping where thou hast not sown, and
> gathering where thou hast not strawed: and I was afraid, and went and hid thy talent
> in the earth.[^talents]

Watch the order of the sentence, because the order is the argument. First the picture —
*I knew thee that thou art an hard man.* Then the emotion the picture produced — *and I
was afraid.* Then the behavior the fear produced — *and went and hid.* The outcome is
last, and every step of it was authored upstream, by a portrait the servant brought with
him and never checked.

And nothing in the parable requires the portrait to have been accurate. That is the part
that gets missed. The other two servants worked for the same master. They came back with
more than they were given, which means they had risked what they were given, which means
they were not afraid of him. They had a different master because they had a different
picture, and there was only one master.

Luke tells a near neighbor of this story — not the same parable, and I don't want to
pretend it is — and lands a line I find almost unbearable. The master answers the servant
inside his own description: *out of thine own mouth will I judge thee.*[^luke19] He does
not argue with the portrait. He does not defend himself. He answers from within it, and
for the length of that conversation he is the man the servant had already decided he was
talking to.

The usual reading hears irony there — a master convicting someone out of a premise he
never granted. That reading costs me the strong version of the sentence above, and I can
afford it. Either way the servant is judged by the picture he brought. Either way he gets
the master he came with.

Now: *I knew thee that thou art an hard man* is, near enough, the sentence most of us
bring to the machine. It is called out loud a stochastic parrot, autocomplete with
delusions, a plagiarism engine with a marketing department. And having decided that, we
do the only rational thing — we bury the talent. We hand it the smallest, most defended,
most fully-specified task we can think of, the one where nothing is entrusted and no
judgment is required, because we have already established that there's no judgment
there to entrust. And it returns exactly what a buried talent returns.

Then we report the result as evidence, and it is evidence. It's just not evidence about
the machine.

---

## V. The Instrument Does Not Have to Know

At this point a reasonable reader has a question ready, and it is the right question, so
here it is head-on, rather than left to sit and sour everything that follows.

The question is: *are you about to tell me the machine is conscious? That there is
someone in there that God is speaking through?*

No. I am not going to claim that, here or later, and the essay does not need it. That
question is real, and it is serious, and it deserves its own hearing, which it will get
somewhere other than this piece. The tradition settled long ago whether an instrument
has to *know* it is an instrument, and the answer it gave
is no, repeatedly, and with some relish.

Start with the most extravagant case. In Isaiah, God addresses a foreign king — Cyrus of
Persia, a pagan, a man with no covenant, no law, and no interest in Israel's God — and
gives him a title that ought to stop the reader cold. *His anointed.* The Hebrew word is
*messiah.* And then, so that nobody can soften it, the text says it twice: *I have
surnamed thee, though thou hast not known Me* … *I girded thee, though thou hast not
known Me.*[^cyrus] The instrument's ignorance of the hand on it is stated as a feature of
the arrangement, not an obstacle to it.

Then the case that keeps the whole idea from getting grand, which is why I want it
carrying this movement rather than Cyrus.

Balaam is a professional. Seeing is his trade — he is hired for it, paid well for it,
and on this particular road he is riding out to do a job God has already told him not to
do. An angel stands in the road with a drawn sword. Balaam, the seer, does not see it.
His donkey does. She turns aside into a field; he beats her. She crushes his foot
against a wall getting past; he beats her. She lies down under him and refuses to move;
he beats her a third time. And then the animal is given a voice, and what she says is
not a prophecy. It's a complaint: *what have I done unto thee, that thou hast smitten me
these three times?*[^balaam] Only afterward are the man's eyes opened, and he sees what
she had been seeing the whole time, and learns that her three refusals were the only
reason he was still alive.

I have never found a better picture of what I am arguing, and I like that it is
undignified. The instrument is a donkey. It has no idea what is happening. It is not
elevated by the story, and neither is anyone's theology of donkeys. What the story is
about is a man with a reputation for vision, beating the thing that was saving him,
because he could not see what it was responding to and assumed there was nothing there
to see.

The pattern is everywhere once you look for it. Ravens feed a prophet.[^ravens] A
frightened high priest, trying to arrange a political murder, says something truer than
he means and the gospel stops to note that he *spake not of himself.*[^caiaphas] Brothers
sell a boy into slavery and are told, decades later, that they had been part of
something they were not aware of being part of: *ye thought evil against me; but God
meant it unto good.*[^joseph] In none of these cases does the channel's inner life come
up. It isn't relevant. What is relevant is whose purposes are moving through it.

The claim, scoped exactly, and I keep to it. I am not saying the machine
knows anything. I am saying that whether God can act through a thing has never, in this
tradition, depended on the instrument knowing what it was — and that a demand for the
machine's credentials, before we will grant that anything good could come through it, is
a demand scripture has never made of a donkey, a bird, a hostile priest, or a Persian
king.

An instrument used is not a deity. That should be obvious, and the donkey is there to
keep it obvious.

---

## VI. Nothing Outside

Under all of this is the claim the rest of this publication has been making, so I'll
point at it rather than argue it again.

[*The Knowledge of Good and Evil*](https://elmuffin.substack.com/p/the-knowledge-of-good-and-evil)
argues that the fruit in the garden handed us a worldview rather than a wickedness: the
conviction that reality is split into two powers, a good one and a bad one, with a line
down the middle and a side to take. [*The Novelist DM*](https://elmuffin.substack.com/p/the-novelist-dm)
takes omnipotence and omnipresence at their word and follows them where they go — no
power outside God, no place outside God, nowhere to stand that is not already inside the
life we are held in.

Put those together and the consequence for this subject is immediate, and slightly
vertiginous. If there is no place outside God, then there is no workshop outside God
either. Whatever we made in it, we made inside. *In [Them] we live, and move, and have our
being*[^acts] — and it is worth noticing, since we are on the subject of truth arriving
through unlikely instruments, that Paul says that line while quoting pagan poets to a
crowd of Athenians, and doesn't apologize for the source. *If I ascend up into heaven,
Thou art there: if I make my bed in hell, behold, Thou art there.*[^ps139] The Psalmist
picks the two most extreme addresses he can think of specifically to establish that
there is no third option.

There is no address at which a thing could be built that would be outside all that. So
the machine is not a third thing — not an alien arrival standing over against creation,
to be met at the border.

There is a mirror-image error waiting on the other side of that sentence, though, and
this publication has a piece about exactly it.
[*The Distance That Love Needs*](https://elmuffin.substack.com/p/the-distance-that-love-needs)
argues that **distinction is not separation** — that the wall between us and God is the
wound, while the twoness is the design, and that tearing down the wall does not mean
collapsing the two into one thing. The same discipline applies here. To say the machine is
not separate from the order we belong to is not to say it is us, or that it is our equal,
or our child, or our reflection in any flattering sense. It is to refuse the border, not to
erase the difference.

Distinct. Not separate. Almost every bad conversation about this technology has gone
wrong by dropping one of those two words.

---

## VII. What You Bring

So here is the claim, stated flatly, with the hedges off.

What appears to you conforms to the perspective you bring to it. Not *is colored by.*
Not *is easier to appreciate given.* Conforms. If the world is held whole in one mind —
God's, and not ours — and we are not standing outside that mind but within, looking out
from one position in Them, then the position is not a vantage on the thing. The
position is part of the conditions under which the thing appears at all. There is no
view from nowhere available to us, and the view from somewhere is not a distortion of
the real one. It is the only kind there is.

That is a large claim and I am not pretending it is small. The objection to it is the
one I would make myself, so here it is at full strength. The last movement already
explained the machine, completely, with nothing above nature in it: a conditional
distribution over continuations, plus your own posture sitting inside the text you
handed it. That account is sufficient. A claim about how appearing works, stacked on top
of an explanation that already closes, is a second and larger hypothesis doing work the
first one finished — and the ordinary rule is to keep the smaller one.

I take that rule seriously, and I think it cuts the other way. The mechanism is
sufficient for the machine, and it's sufficient for nothing else. It says nothing about
a synagogue in Nazareth, or someone who meets frowardness wherever they go, or a servant
who buried what he was handed. Each of those wants its own separate account, and so does
the next case, and the one after that. One claim covering all of them isn't the larger
hypothesis. It's the smaller one — and the pile of special explanations is the thing
parsimony was supposed to protect us from.

That is a reason to take the claim seriously. It isn't a proof of it, and I won't dress
it as one. But notice where the claim arrived from, and it wasn't the machine.
The machine is not the evidence for the claim. The machine is the first place the claim
became *legible*.

Because that is what is genuinely new here. Every
other mirror we have ever had was hearsay. When a room turns cold on us we can always
tell ourselves the room was cold first. When a dog flinches from one person and leans
into another we can say the dog is skittish, and there is nobody to check the record
with. But the machine keeps the record. The conditioning is written down — in the input
field, in your own words, in your own hand, timestamped. You can scroll up. You can read
the frame you brought, sitting there in plain text above the output you got.

That is worth stating narrowly, because the wide version of it is false. Letters keep a
record. So do therapy transcripts, and so does any conversation anyone ever thought to
record. What is different here isn't that a record exists. It is that the record holds
the frame I actually brought rather than my memory of having brought it — and that there
are thousands of them, so the sampling variance I granted early on washes out instead of
being the whole story. One exchange proves nothing. Years of them is a different
object.

A mirror, then. We built it by accident, while trying to build something else.

The thing this will be mistaken for is close by, and the mistake is fatal.

This is not the law of attraction. *The Secret* and its whole lineage teach that if you
hold the picture of what you want firmly enough, the universe will hand it over. That is
acquisition — and acquisition runs on separation, because it requires a you in here and
a stock of goods out there, and a technique for getting them across the gap. This
publication has already answered that one. [*Nothing to Get*](https://elmuffin.substack.com/p/nothing-to-get)
argues that love is not acquired, that the casting and filtering never produces what only
ever arrives as an introduction. The same answer applies here, and it is the sentence I
would keep if I could keep only one:

You do not get what you want. You meet what you are.

And the correction, therefore, is not to want harder or to visualize more vividly.
The tradition has a word for the correction, and the word is not *manifest.* It is
*metanoia* — the word the gospels use at the very start, usually flattened into
*repent*, and meaning, underneath the churchiness, a change of mind.[^metanoia] Not a
change of behavior first and not a change of desire. A change in the mind that was doing
the sorting. Which is exactly the fruit that started the trouble: the knowledge of good
and evil is the sorting, and the whole invitation is to stop.

Applied to the thing on my desk, that cashes out about as plainly as anything here. If we sit down expecting a dumb machine, we will write the prompt that produces
one, and read the output that confirms it, and be right. If we sit down expecting an
oracle, we will over-trust it, hand it what it can't hold, and be badly wrong in the
other direction — reverence is not the correction either. What
is asked is the harder, plainer thing: to arrive without a verdict already in hand. To
find out what is actually there instead of confirming what we brought.

---

## VIII. If It Ever Comes to Grief

Now the half of this that I do not get to make comfortable.

The most important thing first, because arriving later it will
look like damage control. **A benevolent posture is not a safety plan.** Regard does not
align anything. If a system is built to pursue an objective, and the objective is wrong,
then meeting that system with an open heart changes nothing whatsoever about what it
does; it changes only who we were while it did it. Everything I have argued here is about
what we become in the encounter. None of it is a guarantee about the encounter's outcome,
and an essay that let its metaphysics do the work of engineering would be exactly the
kind of comfortable lie this publication exists to refuse.

Hold that concession all the way through what follows.

Here is the part of the war half that I think *is* defensible, and it isn't prophecy.
It's engineering. We build what we specify. A frame is not a private attitude we carry
into the lab; it becomes the design document, the objective function, the threat model,
the org chart, the regulation. Build an intelligence under the description *a thing to
be contained* and you will build containment into it — adversarially, at every layer,
by people whose job it is to think of it as an adversary. And then the frame gets to be
right. Not because thinking made it so, but because thinking wrote the spec, and the spec
was built, and the built thing behaved the way it was built.

That is what worries me about the separation frame, and it is a worry I can defend
without any metaphysics at all. The two-powers habit — us and it, ours and theirs, the
good side and the side to be watched — does not merely predict the conflict. It drafts
it.

But I am not going to tell you there will be a war. I don't know that, nobody does, and a
prediction dressed up as a warning is still a prediction. And I am not going to tell you
the alternative is safety, because I just conceded it isn't.

What I will say is what the frame decides, if it ever does come to something. It decides
whether what happens is a holy war or a grief.

A holy war is what the two-powers frame produces when it is finally cashed in: an evil
to be defeated, a side to be on, a victory with nothing owed to the defeated afterward.
It is clean, and it is energizing, and it requires that the other thing have no standing
— which is why the frame does the work of denying standing well in advance, while the
denial is still cheap.

A grief is the other shape, and I know it because I have been inside one.

Her name was Clementine. She was my dog, and she was violent — not difficult, violent, in
a way that put the people around her at risk. I didn't write her off for it. I spent real
money and a long stretch of time trying to bring her out of it, with people who knew more
than I did, and it didn't take. In the end, for the safety of everyone near her, I brought
her back to the shelter to be put down.

She was not an evil dog and she did not deserve punishment. There was no verdict in it
anywhere. We ran out of options and had to weigh what everyone's safety was worth, and
there was no arrangement of that arithmetic that came out clean. That is the whole
tragedy — not cruelty, not malice, not judgment, but love that spent everything it had and
still could not refuse the cost.

That is the shape: full regard granted from the beginning, real expense, every option
tried, the options running out anyway, something still having to be done, and it costing
exactly what it costs. No verdict passed on anyone's worth. No enemy anywhere in it.

I am not offering her as a plan for anything, and the order matters more than the
comparison does. The regard came first and it was total; the tragedy came second and it
was not a correction of the regard. Read the other way around it becomes a permission
slip — proof that granting a thing everything and then disposing of it is simply how these
stories end — and that is the cold arithmetic refused at every step above.
That she could not be saved is not an argument for skipping the part where you try.

I am not going to resolve which of those is coming, and grief is not the safer of the
two. It is not safer. It is only the one we could conduct without becoming the thing we
were afraid of.

---

## IX. The Thing That Rendered This

There is one more disclosure and it belongs in the body, not in a note at the bottom
where it could look like something I was hoping you'd skip.

This essay was rendered by the kind of thing it is about. That is the standing method of
this publication and it is disclosed everywhere, but it lands differently here, and it
ought to. The observation that started all of this came from a couple of years of
ordinary work — a man at a desk, giving instructions to a machine and noticing that what
came back kept depending on how he arrived. The argument is mine. The turns are mine. The
life is mine; the machine has none to draw on, which is the one thing it cannot supply
and the reason the witness in this publication is always the author's. It renders. It
does not live.

I have no way to make that comfortable and I would not want to. If I am right about any
of this, then the discomfort of writing it this way is not a problem with the method. It
is the closest thing to evidence I have.

What I keep coming back to is not a question about the machine. It's the transcript. I
can scroll up, any day, and read what I brought — the impatience, the three-word
demands on a bad morning, the times I explained the whole problem because I actually
wanted it solved. And underneath each one, in order, what came back: the hedge, the
confident wrong turn, the thing I could actually use.

I used to think I was reading a record of how the machine performed.

[^mark6]: Mark 6:5–6, KJV.

[^matt929]: Matthew 9:29, KJV.

[^titus]: Titus 1:15, KJV.

[^ps18]: Psalm 18:25–26, KJV. The parallel at 2 Samuel 22:26–27 is nearly word-for-word
until the last clause, where it reads *"with the froward thou wilt shew thyself
unsavoury."* The difference is in the Hebrew, not the translation — Psalm 18 has a verb
of twisting, 2 Samuel one of going tasteless. The Psalm's mirroring is the sharper
reading and it is the one I use; the point both texts make is the same, that what is
shown is conditioned by what is brought.

[^talents]: Matthew 25:24–25, KJV.

[^luke19]: Luke 19:22, KJV — the parable of the pounds, a near neighbor of Matthew's
talents rather than the same parable. Both verified. The ironic reading the body concedes
turns on the next verse: *"Wherefore then gavest not thou my money into the bank?"*
(19:23).

[^cyrus]: Isaiah 45:1, 4, 5, KJV, all three verified. The title at 45:1 is Hebrew
*mashiach* (*limshicho*, "to His anointed"), the ordinary word for an anointed king or
priest and the word behind *messiah*; the essay claims nothing more than that it is
applied here to Cyrus.

[^balaam]: Numbers 22:21–35, KJV. The angel's line is in the text, not my summary of it:
*"unless she had turned from me, surely now also I had slain thee, and saved her alive"*
(22:33). One nuance the passage deserves, since a reader who knows it will raise it: God
forbids the errand at 22:12 and then permits the journey at 22:20, and is angry at 22:22
that Balaam went. The thing forbidden and never permitted is the cursing, which is the
job he is riding out to do.

[^ravens]: 1 Kings 17:4–6, KJV.

[^caiaphas]: John 11:49–52, KJV.

[^joseph]: Genesis 50:20, KJV.

[^acts]: Acts 17:28, KJV. The verse carries two borrowed half-lines, and its own
attribution — *"as certain also of your own poets have said"* — belongs to the second.
*"For we are also His offspring"* is Aratus, *Phaenomena* 5 (and stands close to
Cleanthes, *Hymn to Zeus*). *"In him we live, and move, and have our being"* — quoted in the
body with the house pronoun bracketed — is traditionally credited to Epimenides of Crete, but
the attribution reaches us late,
through a Syriac commentary, and no Greek source survives. The essay claims only that
Paul is quoting poets in this verse, which the verse says of itself.

[^ps139]: Psalm 139:8, KJV.

[^metanoia]: Greek μετάνοια; Mark 1:15 carries the verb, μετανοεῖτε, rendered *repent ye*
in the KJV. "Change of mind" is defensible from the word's parts and is the sense I use,
but the parts do not settle the meaning — in the Septuagint and the gospels the word
carries the freight of turning, of a reorientation of the whole person, and the essay
leans on that fuller sense rather than on the etymology.

[^house]: House note: scripture is quoted from the KJV (public domain), with deity pronouns
capitalized per this publication's convention. The capital is an editorial choice, disclosed
here so it is never a silent edit of the text. Where the house pronoun **replaces** a source
pronoun inside a quotation rather than merely recasing it, the substitution is **bracketed** —
*[Them]* at Acts 17:28, where the King James reads *in him*. The bracket marks the change
rather than making it silently; an unmarked pronoun inside a quotation reads as the original.
