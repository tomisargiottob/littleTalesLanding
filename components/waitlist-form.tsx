"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, CheckCircle, AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { getServerMessages } from "@/lib/server-messages"

interface WaitlistFormProps {
  locale: 'en' | 'es' | 'it'
  className?: string
}

export function WaitlistForm({ 
  locale, 
  className = ""
}: WaitlistFormProps) {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const placeholder = getServerMessages(locale, 'waitlist.placeholder')
  const successMessage = getServerMessages(locale, 'waitlist.success')
  const errorMessage = getServerMessages(locale, 'waitlist.error')
  const buttonText = getServerMessages(locale, 'waitlist.cta')

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateEmail(email)) {
      setStatus('error')
      return
    }

    setIsLoading(true)
    setStatus('idle')

    try {
      const response = await fetch('https://api.freewaitlists.com/waitlists/cmkkbs4z300az01mrkrvchk1w', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          meta: {
            source: 'landing-page',
            locale: locale
          }
        })
      })

      if (response.ok) {
        setStatus('success')
        setEmail('')
      } else {
        setStatus('error')
      }
    } catch (error) {
      console.error('Waitlist signup error:', error)
      setStatus('error')
    } finally {
      setIsLoading(false)
    }
  }

  if (status === 'success') {
    return (
      <div className={`flex items-center justify-center ${className}`}>
        <Alert className="w-full max-w-md border-green-200 bg-green-50">
          <CheckCircle className="h-4 w-4 text-green-600" />
          <AlertDescription className="text-green-800">
            {successMessage}
          </AlertDescription>
        </Alert>
      </div>
    )
  }

  return (
    <div className={className}>
      <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
        <div className="w-full sm:w-80">
          <Input
            type="email"
            placeholder={placeholder}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full ${status === 'error' ? 'border-red-500' : ''}`}
            disabled={isLoading}
          />
        </div>
        <Button 
          type="submit" 
          size="lg" 
          className="w-full sm:w-auto text-base" 
          disabled={isLoading || !email}
        >
          {isLoading ? (
            <div className="mr-2 h-5 w-5 animate-spin rounded-full border-2 border-background border-t-transparent" />
          ) : (
            <Mail className="mr-2 h-5 w-5" />
          )}
          {isLoading ? 'Joining...' : buttonText}
        </Button>
      </form>
      
      {status === 'error' && (
        <Alert className="mt-4 max-w-md mx-auto border-red-200 bg-red-50">
          <AlertCircle className="h-4 w-4 text-red-600" />
          <AlertDescription className="text-red-800">
            {!validateEmail(email) && email ? 'Please enter a valid email address.' : errorMessage}
          </AlertDescription>
        </Alert>
      )}
    </div>
  )
}