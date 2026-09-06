# Phase 18: CRM & Lead Automation Guide

This document outlines how Corelane Systems can automatically route incoming leads from the website directly into CRMs (HubSpot, Salesforce, Pipedrive) and notification channels (Slack, Discord).

Since the website is built on a modern Jamstack architecture and hosted on Netlify, you have **two highly reliable options** for lead automation.

---

## Option A: Netlify Outgoing Webhooks (Recommended)
This is the easiest and most robust method. It requires **zero custom backend code**. Netlify intercepts all form submissions and securely forwards them to any URL.

### How to set it up:
1. Go to your **Netlify Dashboard** -> Site Settings -> **Forms**.
2. Scroll down to **Form notifications**.
3. Click **Add notification** and select **Outgoing webhook**.
4. Choose the form (e.g., `contact` or `landing_page_lead`).
5. Paste a **Zapier or Make.com Webhook URL**.

### How Zapier/Make handles it:
- **Trigger:** Webhook catches the Netlify Form data.
- **Action 1:** Filter spam (optional).
- **Action 2:** Create a Contact in **HubSpot/Salesforce**.
- **Action 3:** Send a message to the `#sales-leads` channel in **Slack**.

---

## Option B: Custom API Route (Serverless Function)
If you want to avoid third-party automation tools like Zapier and send data directly from your domain to your CRM, we have created a boilerplate Serverless Function.

- **File Location:** `netlify/functions/submit-lead.ts`
- **How it works:** You can modify your frontend forms to `POST` JSON data to `/.netlify/functions/submit-lead`.
- **Security:** This method allows you to securely store API keys (like `HUBSPOT_API_KEY`) in Netlify Environment Variables without exposing them to the frontend.

### Next Steps for Option B:
1. Uncomment the HubSpot or Slack `fetch` calls in the `submit-lead.ts` file.
2. Add your API keys to the Netlify Dashboard.
3. Update `src/pages/Contact.tsx` to use `fetch('/.netlify/functions/submit-lead')` instead of the default HTML form submission.
