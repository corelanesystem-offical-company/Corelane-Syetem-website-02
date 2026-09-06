import { Handler } from '@netlify/functions'

/**
 * Example Netlify Function for Custom Lead Submission to CRM
 * 
 * If you want to bypass standard Netlify Forms and send leads DIRECTLY 
 * to your CRM (HubSpot, Salesforce, etc.) from the frontend, you can POST to this endpoint.
 * 
 * Usage from frontend:
 * fetch('/.netlify/functions/submit-lead', { method: 'POST', body: JSON.stringify(formData) })
 */

export const handler: Handler = async (event) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' }
  }

  try {
    const payload = JSON.parse(event.body || '{}')
    
    // Example: Extract lead data
    const { name, email, company, message, source } = payload

    if (!email) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Email is required' }) }
    }

    // =========================================================================
    // CRM INTEGRATION POINT
    // =========================================================================
    
    // 1. Send to HubSpot Example:
    /*
    await fetch(`https://api.hubapi.com/crm/v3/objects/contacts`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.HUBSPOT_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        properties: {
          email,
          firstname: name,
          company,
          message
        }
      })
    })
    */

    // 2. Send to Slack Notification Example:
    /*
    await fetch(process.env.SLACK_WEBHOOK_URL!, {
      method: 'POST',
      body: JSON.stringify({
        text: `🚨 New Lead: ${name} from ${company}\nEmail: ${email}\nMessage: ${message}`
      })
    })
    */

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Lead successfully routed to CRM' })
    }

  } catch (error) {
    console.error('Lead submission error:', error)
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error processing lead' })
    }
  }
}
