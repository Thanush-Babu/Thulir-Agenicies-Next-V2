"use client"

import { useState } from "react"

interface UseFormSubmissionOptions {
  onSuccess?: () => void
  onError?: (error: Error) => void
}

export function useFormSubmission<T>(options?: UseFormSubmissionOptions) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const submitForm = async (data: T, submitFn: (data: T) => Promise<void>) => {
    setIsSubmitting(true)
    setError(null)

    try {
      await submitFn(data)
      setIsSuccess(true)
      options?.onSuccess?.()
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "An error occurred"
      setError(errorMessage)
      options?.onError?.(err instanceof Error ? err : new Error(errorMessage))
    } finally {
      setIsSubmitting(false)
    }
  }

  const reset = () => {
    setIsSubmitting(false)
    setIsSuccess(false)
    setError(null)
  }

  return {
    isSubmitting,
    isSuccess,
    error,
    submitForm,
    reset,
  }
}
