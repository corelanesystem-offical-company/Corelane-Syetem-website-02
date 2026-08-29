# Corelane Systems: CRM System Specification

This specification outlines the internal CRM and prospect management structure for Corelane Systems' B2B sales operations across Pakistan, UAE, UK, USA, and Canada. The system is designed to be tool-agnostic (compatible with Google Sheets, HubSpot, Pipedrive, Zoho, etc.).

## 1. Core Principles
*   **Verified Information:** Every prospect must have verified data. No assumptions.
*   **Clear Qualification:** Lead Score and Lead Status are independent metrics.
*   **Mandatory Next Actions:** Every active prospect must have a Next Action and Next Follow-up Date.
*   **Pipeline Hygiene:** Stale opportunities must be flagged and reviewed. Closed opportunities must not remain in active stages.

## 2. Prospect Qualification
*   **Lead Score:** Objective evaluation of the opportunity.
    *   `A — High Priority`
    *   `B — Medium Priority`
    *   `C — Low Priority`
*   **Lead Status:** Internal assessment of the prospect's current engagement.
    *   `HOT`
    *   `WARM`
    *   `EXPLORING`
    *   `NOT QUALIFIED`

## 3. Geographic & Industry Focus
*   **Geographies:** Pakistan (Karachi, Lahore, Islamabad, etc.), UAE, UK, USA, Canada.
*   **Priority Industries:** Law Firms, Real Estate, Healthcare/Clinics, Restaurants, Professional Services, Architecture/Construction, E-commerce, SMEs, Startups.

## 4. Activity & Outreach Tracking
Every interaction must be logged with the following details:
*   Activity Date & Type (Research, LinkedIn Message, Cold Email, Meeting, etc.)
*   Channel, Summary, Outcome
*   Next Action & Next Follow-up Date
*   Outreach limits apply: Do not contact prospects after the defined outreach sequence unless they re-engage.

## 5. Free Sample Homepage Tracker
For highly qualified leads, track the free sample homepage process:
*   **Status:** Not Started, In Progress, Sent, Viewed/Discussed, Converted, Not Relevant.
*   **Sample URL & Date Sent**

## 6. Nurture System
Prospects who are relevant but not ready are moved to NURTURE.
*   Require a **Nurture Reason** (e.g., "Project planned next quarter").
*   Require a **Next Review Date**.

## 7. Pipeline Hygiene & Stale Rules
*   **No Duplicates:** Maintain clean company and contact records.
*   **No Unverified Data:** Remove outdated information when verified data is found.
*   **Stale Leads:** Flag prospects with no activity for 7, 14, and 30 days. Move to Needs Review or Nurture.
*   **No Dead Ends:** Active opportunities without a next action must be flagged immediately.

## 8. Handoff Process
Once a deal is marked WON, responsibility shifts systematically:
Sales → Technical Discovery → Project Scope → Architecture → Proposal / Agreement → Development. The CRM must reflect the change in Sales Owner to Delivery Owner.
