---
name: good-services-service-design
description: End-to-end service design and service improvement workflow based on Lou Downe's "Good Services" (15 principles). Use when the user asks for a service audit, service blueprint, customer journey map/service map, designing a new service, fixing a broken service, improving findability/clarity/accessibility, or creating an actionable backlog and service standard.
metadata:
  author: generated-skill
  version: "2.25.13"
  category: service-design
  tags: [service-design, journey-mapping, service-blueprint, good-services]
compatibility: Works without external tools; outputs Markdown. Pairs well with docx/pptx/xlsx creation skills if available.
---

# Good Services Service Design

This skill helps you **design, diagnose, and improve services end-to-end** using the _Good Services_ model: define the service from the user's perspective, map the steps/tasks across channels and operations, and then assess and improve using the **15 principles of good service design**.

A service here means: **something that helps someone to do something** — defined by the user's goal, not your org chart.

## When to use

Use this skill when the user asks for any of the following:

- “Design a service” / “redesign a service” / “fix our service”
- “Service audit” / “service review” / “why is our service failing?”
- “Service blueprint” / “journey map” / “service map”
- “How do we make this service easier to find / understand / use?”
- “Apply the Good Services principles” / “the 15 principles”

## When NOT to use

- Pure UI styling/visual design requests (unless tied to a service journey or ops)
- Marketing/copywriting that isn't part of explaining the service purpose/expectations
- Narrow technical debugging with no service context (use engineering/debug skills instead)

## Operating modes

Choose the lightest mode that fits the user's need.

1) **Quick audit (30–60 min)**
- Output: principles scorecard + top issues + recommended fixes/backlog
- Best when: user wants fast prioritisation or a “why is this broken?” diagnosis

2) **Full design / improvement plan**
- Output: service definition + journey map + service blueprint + scorecard + prioritised backlog + service standard
- Best when: user is (re)designing a service or needs cross-team alignment

3) **Workshop facilitation**
- Output: agenda + exercises + artefacts to fill live (templates)
- Best when: multiple stakeholders need to align on scope, ownership, and priorities

## Inputs to collect (progressive)

Start with the minimum and expand only as needed.

**Minimum (always ask):**
- What is the service (in one sentence) and what outcome does the user want?
- Who are the primary users? (2–3 groups is enough)
- What channels exist today? (web/app/phone/post/in-person/physical)
- What is the main problem you're trying to solve? (symptoms + suspected causes)

**Helpful (ask if doing more than a quick audit):**
- Known constraints (policy/legal/technical/budget/SLAs)
- Current volume + failure points (drop-offs, call deflection, complaint themes)
- Any research, analytics, or frontline insights you already have
- Where support happens today (humans, scripts, escalation routes)

If information is missing, **make assumptions explicit** and provide a “data needed next” list.

---

# Core workflow

## Step 1 — Define the service (user-first)

Goal: anchor on what the user is trying to achieve, and where the service starts/ends.

Use: `references/templates/service-definition-canvas.md`

Do:
1. Rewrite the service name as a **verb phrase** users would search for.
2. Define **start trigger** and **done condition** (what does “complete” mean?).
3. Identify user groups + accessibility needs.
4. List channels and key touchpoints.
5. Capture success measures (user + organisation + societal).

Output: a filled Service Definition Canvas.

## Step 2 — Map the journey (steps and tasks)

Goal: describe the service as one continuous set of actions towards the user's goal — across org boundaries and channels.

Use:
- `references/templates/service-map.md` (journey map)
- `references/templates/service-blueprint.md` (frontstage/backstage/support)

Do:
1. Break the service into **steps** (major decision points / moments needing visibility).
2. Break steps into **tasks** (individual actions).
3. Note channel(s) per step/task and any handoffs between teams/orgs.
4. Capture pain points, drop-offs, and where users seek help.

Output: a journey map (minimum) and blueprint (if ops matter, which they usually do).

## Step 3 — Assess against the 15 principles

Goal: identify where the service violates universal good-service needs.

Use:
- `references/templates/principles-scorecard.md`
- `references/15-principles.md` (detailed guidance + checks)

Do:
1. Score each principle (0–2) and record evidence.
2. List the top failure modes and where they appear in the journey.
3. Highlight cross-cutting root causes (language, data silos, incentives, policy).

Output: completed principles scorecard + summary of top 5 issues.

## Step 4 — Design improvements and prioritise

Goal: turn findings into a realistic plan.

Use: `references/templates/improvement-backlog.md`

Do:
1. Propose fixes that directly address failures (avoid “nice-to-haves”).
2. Prefer changes that reduce user effort, clarify purpose/expectations, and remove dead ends.
3. Prioritise by user impact, risk, frequency, and implementation effort.
4. Write acceptance criteria in user-outcome language.

Output: prioritised backlog (Now / Next / Later).

## Step 5 — Define the service standard and measurement

Goal: make the service operable and improvable over time.

Use: `references/templates/service-standard.md`

Do:
1. Define what “good” looks like: promises, service levels, accessibility bar, support model.
2. Define key measures (not just what’s easy to count).
3. Make incentives explicit: what behaviours are you encouraging in users and staff?

Output: service standard + measurement plan.

## Step 6 — Validate and iterate

Goal: ensure improvements work for real users and real staff.

Do:
1. List the riskiest assumptions (who/what/when/why/how).
2. Propose a lightweight validation plan (research, prototype, pilot, operational test).
3. Plan for change: what user circumstances can change, and how will the service respond?

Output: validation plan + “unknowns / next evidence to collect”.

---

# The 15 principles (as checks)

1. A good service is easy to find  
2. A good service clearly explains its purpose  
3. A good service sets the expectations a user has of it  
4. A good service enables a user to complete the outcome they set out to do  
5. A good service works in a way that’s familiar  
6. A good service requires no prior knowledge to use  
7. A good service is agnostic to organisational structures  
8. A good service requires as few steps as possible to complete  
9. A good service is consistent throughout  
10. A good service should have no dead ends  
11. A good service is usable by everyone, equally  
12. A good service encourages the right behaviours from users and staff  
13. A good service should respond to change quickly  
14. A good service clearly explains why a decision has been made  
15. A good service makes it easy to get human assistance  

(Use `references/15-principles.md` for practical tests and improvement moves.)

---

# Output format (recommended)

When delivering results, structure the response like this:

1. **Service definition** (1–2 paragraphs + canvas)
2. **Journey map** (table)
3. **Service blueprint** (if relevant)
4. **Principles scorecard** (table + top issues)
5. **Prioritised backlog** (Now/Next/Later)
6. **Service standard + measures**
7. **Validation plan** (what to test next)

Keep everything in **plain language**, using the user's terms (verbs), not internal acronyms.

---

# Quality checklist (before finalising)

- The service name is a verb users would search for (not an internal noun/acronym).
- Purpose is clear in the first 10 seconds of the journey.
- Time/cost/eligibility expectations are set at the right moments.
- The journey supports the full user outcome (including aftercare and exceptions).
- Patterns and language are familiar and consistent across channels.
- No step assumes prior knowledge of your organisation or process.
- No user is stranded: every “no” has a next step (alternative, referral, appeal, human help).
- Accessibility is treated as a baseline, not a bolt-on.
- Metrics and incentives encourage the right behaviours (users + staff + organisation + society).
- The service can handle change (user details, circumstances, policy, operational variance).

---

# Ejemplos

**[EJEMPLO DE ESTRUCTURA A GENERAR POR LA IA]**
## Example 1 — Quick audit
User: “Can you audit our online appointment booking service? Drop-off is high.”
Actions:
1. Collect minimal context (users, outcome, channels, evidence).
2. Produce journey map + scorecard (0–2 per principle).
3. Identify top 5 root causes and propose a Now/Next/Later backlog.

## Example 2 — Blueprint + improvement plan
User: “Design an end-to-end ‘cancel my subscription’ service across web + phone.”
Actions:
1. Define service boundaries (start, done, aftercare).
2. Map journey and blueprint (frontstage/backstage/support).
3. Check dead ends, expectations, and human assistance.
4. Produce a service standard (what “good” means) + measures.

## Example 3 — Workshop
User: “We need a workshop agenda to align teams around our service redesign.”
Actions:
1. Use `references/workshop-agenda.md`.
2. Provide templates to fill and facilitation notes.
3. End with an agreed backlog and ownership map.

---

# Troubleshooting

### The request is too broad (“fix our whole customer experience”)
- Narrow to one user outcome and define service boundaries.
- If needed, split into multiple services (each with its own “done”).

### The org is siloed / no single owner
- Run Step 2 (map) explicitly across handoffs.
- Use Principle 7 guidance to propose shared standards/goals/incentives.

### Users keep calling / staff are overwhelmed
- Check Principle 3 (expectations), 10 (dead ends), and 15 (human help model).
- Look for incentive problems (Principle 12).

### Not enough data
- Make assumptions explicit.
- Provide a “minimum evidence to collect next” list: top drop-off steps, complaint themes, frontline pain points, accessibility issues.
