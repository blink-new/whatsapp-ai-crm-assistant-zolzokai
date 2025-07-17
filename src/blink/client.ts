import { createClient } from '@blinkdotnew/sdk'

export const blink = createClient({
  projectId: 'whatsapp-ai-crm-assistant-zolzokai',
  authRequired: true
})

export default blink