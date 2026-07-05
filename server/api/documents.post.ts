import { defineEventHandler, readBody } from 'h3'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { email, documentId, documentTitle } = body

  if (!email) {
    return { success: false, error: 'Email is required' }
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return { success: false, error: 'Email không hợp lệ' }
  }

  // TODO: Store lead in database
  // TODO: Send download link via email (SendGrid / Resend)
  // TODO: Push lead to CRM

  const downloadLinks: Record<string, string> = {
    'hsk1-de-thi': 'https://storage.luoyuechinese.vn/docs/hsk1-de-thi.pdf',
    'hsk2-de-thi': 'https://storage.luoyuechinese.vn/docs/hsk2-de-thi.pdf',
    'hsk3-de-thi': 'https://storage.luoyuechinese.vn/docs/hsk3-de-thi.pdf',
    'flashcard-hsk12': 'https://storage.luoyuechinese.vn/docs/flashcard-hsk12.pdf',
  }

  const link = downloadLinks[documentId] || 'https://luoyuechinese.vn/tai-lieu'

  console.log(`[Document Request] email=${email}, doc=${documentTitle}`)

  return {
    success: true,
    message: 'Link tải đã được gửi về email của bạn!',
    downloadUrl: link,
  }
})
