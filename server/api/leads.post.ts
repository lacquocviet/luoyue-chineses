import { defineEventHandler, readBody } from 'h3'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { name, phone, email, course, note } = body

  // Validate required fields
  if (!name || !phone) {
    return { success: false, error: 'Thiếu họ tên hoặc số điện thoại' }
  }

  const leadData = {
    timestamp: new Date().toISOString(),
    name,
    phone,
    email: email || '',
    course: course || 'Chưa chọn',
    note: note || '',
    source: 'website',
  }

  // TODO: Send to Lark Suite webhook
  // const larkWebhookUrl = process.env.LARK_WEBHOOK_URL
  // if (larkWebhookUrl) {
  //   await $fetch(larkWebhookUrl, {
  //     method: 'POST',
  //     body: {
  //       msg_type: 'text',
  //       content: { text: `New Lead: ${name} | ${phone} | ${course}` }
  //     }
  //   })
  // }

  // TODO: Send to Google Sheets via Apps Script
  // const sheetsUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL
  // if (sheetsUrl) {
  //   await $fetch(sheetsUrl, { method: 'POST', body: leadData })
  // }

  console.log('[Lead Received]', leadData)

  return {
    success: true,
    message: 'Đăng ký thành công! Chúng tôi sẽ liên hệ trong 24h.',
    data: leadData,
  }
})
