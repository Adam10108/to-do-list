import './poppins.css'

import React from 'react'
import { createRoot } from 'react-dom/client'
import { ErrorBoundary } from 'react-error-boundary'

import { App } from '@/components/App'
import { AppError } from '@/components/AppError'
import { ThemeProvider } from '@/libs'

createRoot(document.getElementById('root') as HTMLDivElement).render(
  <React.StrictMode>
    <ErrorBoundary FallbackComponent={AppError}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ErrorBoundary>
  </React.StrictMode>,
)
