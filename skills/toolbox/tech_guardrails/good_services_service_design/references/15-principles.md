# The 15 principles of good service design — practical guide

Use this as a **working checklist** when auditing or designing a service.
For each principle you'll find:

- **Intent**: what “good” means
- **Quick checks**: questions you can answer quickly
- **Failure modes**: common ways services break
- **Improvement moves**: practical design and operating changes
- **Evidence**: what to look at (research/analytics/ops signals)

---

## 1) Easy to find

**Intent**  
People can find the service when they need it, using the words they use — not your internal terminology.

**Quick checks**
- What would a user type into a search engine to find this?
- Is the service name a verb/outcome (“do X”), not a noun/programme/acronym?
- If the service is offline, is the *entry point* still discoverable online?

**Failure modes**
- Acronyms and internal product names
- “Portal/hub/platform” naming that describes technology, not user outcome
- Users call support because they can’t locate the right service

**Improvement moves**
- Rename using user language (verbs). Avoid legal/technical jargon where possible.
- Optimise entry points: search snippets, landing pages, navigation labels, in-product routing.
- Ensure related services cross-link using the user’s mental model (e.g., “moving house” links to “change address”, “redirect post”, “update payment details”).

**Evidence**
- Search terms and internal-site search logs
- Call-centre/CS “how do I…” contacts
- Drop-offs at “choose service” / “which option do you need?” screens

---

## 2) Clearly explains its purpose

**Intent**  
Within moments, a user with no prior knowledge can tell: *what this service will do for me* and *roughly how it works*.

**Quick checks**
- Can a first-time user explain the service back to you in one sentence?
- Is there a crisp value statement, not instructions or policy text?
- Do UI cues make the model obvious (paid/free, subscription, approval decision, etc.)?

**Failure modes**
- The service title is clear but the service promise is vague
- Users self-select into the wrong flow (because they’re “not sure”)
- Explanations are long and read like a manual

**Improvement moves**
- Tighten purpose copy: outcome, who it’s for, what happens next, what it doesn’t do.
- Use lightweight signals: progress indicators, eligibility hints, “takes ~5 minutes”, “requires documents X/Y”.
- Put explanations at the point of need (not a wall of text at the start).

**Evidence**
- Misrouted submissions / wrong form choice
- Users abandoning early steps
- Repeated questions in support logs (“what is this for?”)

---

## 3) Sets expectations

**Intent**  
Users understand what they need to do and what they’ll get in return — including **time, cost, eligibility, and next steps**.

**Quick checks**
- Does the service tell users how long each part takes and what happens after submission?
- Are requirements clear (documents, proof, appointments, payment)?
- Are status updates provided where waiting is involved?

**Failure modes**
- Users chase updates because they don’t know what “normal” looks like
- Hidden constraints (cooling-off periods, verification delays, review queues)
- Important complexity appears late, surprising users

**Improvement moves**
- Surface assumed expectations early, then reinforce at key moments.
- Provide transparent status + “what happens next” messaging.
- If a universal expectation can’t be met (e.g., outage), tell users fast and offer alternatives.

**Evidence**
- “Where is my…” contacts and complaints
- Rework/duplicates from users repeating steps
- Queue metrics and status visibility gaps

---

## 4) Enables the user to complete their outcome

**Intent**  
The service supports the full journey to “done” — including exceptions and aftercare — not just a single touchpoint.

**Quick checks**
- What is the “done” condition? Is it unambiguous?
- Does the service cover the steps users actually need to finish, not just what you own?
- Are there clear handoffs when another org/team completes part of the outcome?

**Failure modes**
- Beautiful onboarding, broken completion
- The service stops at “submit” with no next steps
- Users are bounced between channels/teams to finish

**Improvement moves**
- Design end-to-end (from “considering” to “resolved/achieved”, plus support after).
- Make handoffs explicit: ownership, timings, what the user should do next.
- Ensure the service works **front-to-back**: user-facing journey and internal processes.

**Evidence**
- Completion rates vs “submission” rates
- Escalations at the last step
- Manual workarounds by staff to finish outcomes

---

## 5) Works in a familiar way

**Intent**  
Where there are established conventions that help users, follow them. Don’t invent novelty where predictability is needed.

**Quick checks**
- Does the interaction model match similar services users already know?
- Are patterns consistent with platform conventions (web/mobile/phone)?
- Are there any “clever” interactions that require learning?

**Failure modes**
- Users make basic mistakes because controls behave unexpectedly
- The service needs instruction signs / guides for standard tasks
- “We changed it to be innovative” but usability drops

**Improvement moves**
- Use common patterns first; innovate only when evidence shows conventions are failing users.
- Prefer clear affordances and feedback (what happened? what will happen next?).
- Remove customs that exist only for organisational convenience and harm users.

**Evidence**
- Usability tests: repeated misclicks/errors on basic tasks
- Training burden for staff/users
- High rates of “I didn’t realise…” complaints

---

## 6) Requires no prior knowledge

**Intent**  
A first-time user can succeed without understanding your organisation, jargon, or process history.

**Quick checks**
- What do you assume users already know? (documents, terms, eligibility, steps)
- Could someone who has never used a similar service complete it unaided?
- Is expert help required only because the service is confusing?

**Failure modes**
- Services that reward “insider” knowledge
- Long policy explanations instead of designing complexity out
- Emergence of “helper services” and intermediaries just to navigate the process

**Improvement moves**
- List presumptions explicitly; remove as many as you can; explain the rest at the moment they matter.
- Use plain language and progressive disclosure.
- Make the service navigable without knowing which team provides which part (see Principle 7).

**Evidence**
- Drop-offs clustered around jargon-heavy steps
- Differences in success rates between experienced vs new users
- High support demand for “how does this work?” questions

---

## 7) Agnostic to organisational structures

**Intent**  
Users can complete the service without being exposed to internal silos, departments, or ownership boundaries.

**Quick checks**
- Where does the user have to “figure out who owns this”?
- Are users asked for the same data multiple times because teams don’t share it?
- Do policies/processes between steps conflict (timelines, eligibility rules, naming)?

**Failure modes**
- Data silos cause repeated form-filling
- Broken handoffs: incompatible timelines or requirements
- Different teams use different words for the same thing

**Improvement moves**
- Map end-to-end data: who collects what, who needs access, where duplicates occur.
- Align processes and criteria across steps (timelines, eligibility, required artefacts).
- Create a permissive environment for collaboration: shared standards, shared goals, shared incentives.

**Evidence**
- Rework caused by missing/duplicated data
- Complaints about being “passed around”
- Staff time spent compensating for handoff failures

---

## 8) As few steps as possible

**Intent**  
Minimise user effort *without removing necessary decision points*. Design the **number and pace** of steps deliberately.

**Quick checks**
- Which steps exist only because of internal constraints or historic habits?
- Where should the user pause to make a decision (and where should they not)?
- Is the tempo right for the risk/complexity of the service?

**Failure modes**
- Extra steps that add no user value (“because we’ve always done it”)
- Mandatory waits inserted in the wrong place (confusing users)
- Services that are too fast for high-stakes decisions, or too slow for simple transactions

**Improvement moves**
- Remove steps that don’t provide user visibility/control.
- For involved/high-stakes parts, slow down with deliberate pauses and clearer guidance.
- For transactional parts, streamline and automate where safe (including proactive fulfilment).

**Evidence**
- Step-by-step drop-off analysis
- Time-to-complete vs perceived effort
- Users calling for help because they’re forced to decide without context

---

## 9) Consistent throughout

**Intent**  
The service feels like one coherent service across the journey, across channels, and over time — while allowing appropriate variation by context.

**Quick checks**
- Do the same terms mean the same things everywhere?
- Are patterns and messages consistent between web/app/phone/post/in-person?
- Do updates in one place create mismatches elsewhere?

**Failure modes**
- “Desert island” MVP: one polished touchpoint with no end-to-end service
- Inconsistent language creates confusion and errors
- Different channels give different answers

**Improvement moves**
- Design a **minimum viable service** (an end-to-end path most users can complete), not just an MVP screen.
- Create shared content/style standards across channels.
- Treat operational communications (letters, emails, scripts) as part of the design system.

**Evidence**
- Channel-switching complaints (“website says X, phone says Y”)
- Inconsistent terminology in artefacts
- Release notes creating new mismatches across the journey

---

## 10) No dead ends

**Intent**  
No user is stranded. Even if they’re ineligible, stuck, or missing something, they get a clear next step.

**Quick checks**
- What happens when something goes wrong (wrong details, lost device, no documents)?
- If the user can’t proceed, do they get alternatives or only a hard stop?
- Are there non-digital routes for users who can’t use the primary channel?

**Failure modes**
- Two-factor auth / account recovery traps
- Hard stops with no appeal, referral, or human contact route
- Services that presume everyone has: phone/email/bank account/ID/proof of address/internet

**Improvement moves**
- Provide fallback routes and backups for critical requirements.
- Distribute complexity evenly: don’t hide the hardest requirements at the end.
- Design explicit “no” journeys: explain why, what to do instead, and how to get help.

**Evidence**
- Abandonment at error states
- Spike in support contacts after “no” decisions
- Manual rescues by staff

---

## 11) Usable by everyone, equally

**Intent**  
Everyone can use the service regardless of ability, access needs, or circumstances. Accessibility is baseline.

**Quick checks**
- Does the service work for users with different abilities, languages, devices, connectivity?
- Can users complete tasks without relying on memory, perfect vision/hearing, or fine motor control?
- Are there safe alternatives for people at risk?

**Failure modes**
- Accessibility treated as “later”
- Key steps require abilities some users don’t have (reading long IDs, complex instructions)
- Unsafe support routes (e.g., requiring sensitive disclosure without protection)

**Improvement moves**
- Design for: safe, perceivable, understandable, operable, robust.
- Include accessibility checks early (content, interaction, support, physical environments).
- Test with diverse users; don’t rely only on automated checkers.

**Evidence**
- Accessibility audits + user testing
- Disproportionate failure rates for certain groups
- Complaints about exclusion (“I can’t use this”)

---

## 12) Encourages the right behaviours (users + staff)

**Intent**  
The service nudges users and staff towards behaviours that are safe, productive, and mutually beneficial — supported by incentives and measures.

**Quick checks**
- What behaviour are your metrics/incentives actually rewarding?
- Do staff targets push them to rush or deflect users?
- Does the service normalise risky user behaviour (oversharing, unsafe shortcuts)?

**Failure modes**
- Perverse targets (“average handling time” causing poor resolutions)
- Users gaming the system because it’s the only way to succeed
- Sustainability ignored (cost, capacity, environmental impact)

**Improvement moves**
- Define four behaviour sets: benefit the user, benefit staff, sustain the organisation, do no harm.
- Measure outcomes, not just throughput.
- Align incentives across channels (and across org boundaries where relevant).

**Evidence**
- Staff workarounds and moral injury stories
- KPI dashboards vs user outcomes mismatch
- Policy breaches and “shadow processes” emerging

---

## 13) Responds to change quickly

**Intent**  
When a user’s circumstances change, the service updates quickly and consistently across channels and operations.

**Quick checks**
- What user attributes can change (name, address, phone, identity details)?
- If a user updates info in one channel, does every channel reflect it?
- Does the service handle indirect changes (tone/wording, safeguarding, context) appropriately?

**Failure modes**
- Data updates propagate slowly or not at all
- Identity is anchored to the wrong attribute (hard to change)
- Staff and digital channels disagree because systems are out of sync

**Improvement moves**
- Identify direct vs indirect changes and design for both.
- Choose stable identity anchors and plan safe change processes.
- Treat data synchronisation and operational readiness as part of service design.

**Evidence**
- Repeat contacts after “I updated this already”
- Channel mismatches after account changes
- Incident reports caused by stale data

---

## 14) Explains why decisions are made

**Intent**  
When the service makes a decision (eligibility, pricing, acceptance/rejection), users understand *why* and have a route to challenge it.

**Quick checks**
- Is it clear what data was used and why it matters?
- Is the decision communicated at the moment it happens (not discovered later)?
- Is there an appeal/escalation route and clear evidence requirements?

**Failure modes**
- “Computer says no” decisions with no rationale
- Decisions appear retroactively (surprising users)
- Staff can’t explain the rules because they’re opaque

**Improvement moves**
- Validate decisions for dead ends and bias.
- Make decision logic legible: what factors, what thresholds, what users can do next.
- Provide an appeal path (human review, additional evidence, correction route).

**Evidence**
- Complaints about unfairness/lack of transparency
- High rework and repeated applications
- Escalations driven by “why was I rejected?”

---

## 15) Easy to get human assistance

**Intent**  
Users can reach a human when they need one — especially for complex, risky, high-value, or physical-world services — and humans are empowered to help.

**Quick checks**
- For which steps is human help essential (complexity/risk/value/physical constraints)?
- Is human contact discoverable and fast enough when time-critical?
- Are staff empowered to resolve issues, or only to repeat scripts?

**Failure modes**
- Help hidden behind dead ends or long queues
- Human support only available after repeated failures
- Staff lack authority to make exceptions or solve root causes

**Improvement moves**
- Design a support model: tiers, escalation, response times, and handoffs.
- Use humans proportionally: enough for complex needs, sustainable at scale.
- Make human assistance consistent with the rest of the service (shared info, shared language).

**Evidence**
- Escalation rates and repeat contacts
- Cases that “die” because no one can intervene
- Staff frustration about lacking authority

---

## Using this guide during an audit

A practical loop:

1. Map the journey (steps/tasks).
2. For each step, ask: which principles are at risk here?
3. Capture evidence and score (0–2).
4. Turn failures into backlog items with acceptance criteria.
