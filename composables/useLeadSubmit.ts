export const useLeadSubmit = () => {
  const loading = ref(false)
  const success = ref(false)
  const error = ref<string | null>(null)

  const submit = async (formData: {
    name: string
    phone: string
    email?: string
    course?: string
    note?: string
  }) => {
    loading.value = true
    success.value = false
    error.value = null

    try {
      const response = await $fetch('/api/leads', {
        method: 'POST',
        body: formData,
      })

      if (response.success) {
        success.value = true
      } else {
        error.value = response.error || 'Có lỗi xảy ra, vui lòng thử lại.'
      }
    } catch (err) {
      error.value = 'Không thể kết nối server. Vui lòng thử lại sau.'
      console.error('[useLeadSubmit] Error:', err)
    } finally {
      loading.value = false
    }
  }

  return { submit, loading, success, error }
}
