# Example (fictional): “Cancel my subscription” service audit

This is a **made-up** example to show the artefacts and level of detail, not a real organisation.

## Service definition (short)

- **Service name (verb)**: Cancel my subscription
- **User outcome**: Stop future charges and receive confirmation that access ends on a specific date.
- **Start**: User decides to cancel and searches the help centre.
- **Done**: Subscription is cancelled, refund/credit policy is applied, user has a confirmation record.
- **Channels**: Web/app + email confirmation + optional human chat.

## Journey map (abridged)

| Step | User goal | Tasks | Channel(s) | Pain points |
|------|----------|-------|------------|-------------|
| 1 | Find how to cancel | Search help centre | Web | Content uses internal terms (“plan management”) |
| 2 | Confirm eligibility | Check renewal date/refund | Web | Refund policy unclear; fear of being charged |
| 3 | Authenticate | Login / 2FA | App | Dead end when phone is lost |
| 4 | Choose cancellation option | “Cancel now” vs “end of term” | Web | Options unclear; feels like dark pattern |
| 5 | Confirm cancellation | Click confirm | Web | Confirmation screen vague |
| 6 | Get confirmation record | Receive email + view in account | Email/Web | Email sometimes missing; users call support |

## Principles scorecard (abridged)

| # | Principle | Score | Evidence | Fix ideas |
|---|-----------|-------|----------|----------|
| 1 | Easy to find | 0 | Help-centre search logs show “cancel” leads to multiple articles | Rename article + improve routing |
| 2 | Explains purpose | 1 | Users unsure if cancellation is immediate | Clear promise + “what happens next” |
| 3 | Sets expectations | 0 | High “was I charged?” contacts | Show date, refunds, and confirmation record |
| 10 | No dead ends | 0 | 2FA failure locks users out | Add recovery routes + human help |
| 14 | Explains decisions | 1 | Refund decisions feel arbitrary | Explain inputs and appeal route |
| 15 | Human assistance | 1 | Chat hidden behind multiple pages | Make help discoverable at key steps |

## Backlog (Now/Next/Later)

| Priority | User outcome | Principle(s) | Proposed change | Acceptance criteria |
|----------|--------------|--------------|-----------------|---------------------|
| Now | Users can find cancellation instructions in 1 click | 1,2 | Add “Cancel subscription” entry point in account settings | ≥80% reach cancel flow without help-centre search |
| Now | Users understand charges/refunds before confirming | 3,14 | Show end date, next billing date, refund policy summary | “Was I charged?” contacts drop by 30% |
| Next | Users can cancel even if they lose their phone | 10,15 | Add account recovery + human verification path | Successful cancellations without primary device |
| Later | Consistent confirmation record across channels | 9 | Standardise confirmation artefacts | Email + account record always generated |

## Notes

- Most failures here are **expectation-setting + dead ends**, not “UI polish”.
- Fixes require content, policy clarity, and authentication ops — not just design tweaks.
