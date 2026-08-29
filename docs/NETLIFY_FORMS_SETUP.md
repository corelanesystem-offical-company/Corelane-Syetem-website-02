# Netlify Forms Setup

Corelane Systems uses Netlify Forms to process leads from the `/contact` page directly in the Netlify Dashboard without requiring a backend database.

## Form Implementation

The lead capture form on the contact page (`src/pages/Contact.tsx`) is designed to trigger Netlify's automatic form detection and handling.

*   **Form Name:** `contact`
*   **Method:** `POST`
*   **Submission Type:** AJAX (`fetch` with `application/x-www-form-urlencoded`)

### Form Fields Captured
*   `fullName` (Required)
*   `companyName` (Required)
*   `email` (Required)
*   `phone` (Optional)
*   `country` (Optional)
*   `website` (Optional)
*   `service` (Required)
*   `projectType` (Required)
*   `budget` (Optional)
*   `timeline` (Optional)
*   `message` (Required)

### Spam Protection
Netlify's built-in honeypot protection is enabled.
*   **Honeypot Field:** `bot-field`
*   *Note: Normal users will not see this field. Bots that fill it out will have their submissions silently rejected by Netlify.*

---

## 1. Enable Form Detection (Netlify Dashboard)

The form configuration is built into the code via the `data-netlify="true"` attribute. When you deploy the site to Netlify, their build bots parse the HTML and automatically register the form.

1. Deploy the website to Netlify.
2. Open the **Netlify Dashboard**.
3. Select the **Corelane Systems** site.
4. Navigate to **Forms** in the left sidebar.
5. Confirm that the `contact` form appears in the Active Forms list.

*Note: Because this is a Vite/React SPA, Netlify relies on parsing the built HTML or detecting the attributes in the code. If Netlify fails to detect the form, you may need to add a static `<form name="contact" netlify netlify-honeypot="bot-field" hidden>...</form>` directly inside `public/index.html` as a fallback. However, the current React implementation is standard and should be detected.*

---

## 2. Configure Email Notifications

To ensure the Corelane sales team is alerted immediately when a lead is captured, you must set up email notifications. **Do not hardcode email credentials in the React app.**

1. In the **Netlify Dashboard**, go to **Site configuration** > **Forms**.
2. Scroll to the **Form notifications** section.
3. Click **Add notification** > **Email notification**.
4. Set the event to **New form submission**.
5. Set the **Form** to `contact`.
6. Enter the team email address (`corelanesystem@gmail.com`).
7. Save the notification.

---

## 3. Testing Procedure

To verify the setup is working correctly in production:

1. Open the live production website and navigate to `/contact`.
2. **Test Validation:** Attempt to submit the form while empty. Verify that the client-side validation errors appear.
3. **Test Invalid Email:** Enter `invalid-email` into the Work Email field and verify the inline error.
4. **Test Success Flow:** Fill out the form completely with valid test data.
5. Click **Submit Inquiry**.
6. **Verify Redirect:** Confirm that upon successful submission, the browser routes to `/thank-you`.
7. **Verify Analytics:** Open the browser console and verify `[Analytics Event]: contact_form_submit` is logged.
8. **Verify Netlify Capture:** Open the Netlify Dashboard > Forms > `contact` and verify the submission appears.
9. **Verify Notification:** Check `corelanesystem@gmail.com` to confirm the email notification was delivered successfully.
10. **Test Fallbacks:** Click the WhatsApp and Email fallback buttons on the `/contact` page sidebar to ensure they open the correct pre-filled templates.

---

## 4. Troubleshooting

*   **Form not appearing in Netlify Dashboard:**
    Netlify bots may have missed the form during the build step. Add a hidden static HTML form into `public/index.html`:
    ```html
    <form name="contact" netlify netlify-honeypot="bot-field" hidden>
      <input type="text" name="fullName" />
      <input type="text" name="companyName" />
      <input type="email" name="email" />
      <input type="text" name="phone" />
      <input type="text" name="country" />
      <input type="url" name="website" />
      <input type="text" name="service" />
      <input type="text" name="projectType" />
      <input type="text" name="budget" />
      <input type="text" name="timeline" />
      <textarea name="message"></textarea>
    </form>
    ```
*   **Submissions not appearing, but form is detected:**
    Check the browser Network tab during submission. Ensure the payload is formatted as `application/x-www-form-urlencoded` and that the `form-name=contact` field is included in the payload. Ensure the HTTP status is `200 OK`.
*   **Not receiving email notifications:**
    Check your email's Spam folder. Verify the notification configuration in Netlify (Site Configuration > Forms > Form notifications).
