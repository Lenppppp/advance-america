import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { handleFormSubmission, getSubmissions } from './server/formBackend.js'

function handleFormRequest(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ error: 'Method not allowed' }))
    return
  }

  let body = ''
  req.on('data', (chunk) => {
    body += chunk
  })

  req.on('end', async () => {
    try {
      const payload = JSON.parse(body || '{}')
      const result = await handleFormSubmission(payload)
      res.statusCode = 200
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify(result))
    } catch (err) {
      console.error('[Vite Form Plugin] Error processing submission:', err)
      res.statusCode = 500
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify({ success: false, error: err.message }))
    }
  })
}

function handleGetSubmissions(req, res) {
  const data = getSubmissions()
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(data, null, 2))
}

function formSubmissionPlugin() {
  return {
    name: 'form-submission-plugin',
    configureServer(server) {
      server.middlewares.use('/api/submit-form', handleFormRequest)
      server.middlewares.use('/api/submissions', handleGetSubmissions)
    },
    configurePreviewServer(server) {
      server.middlewares.use('/api/submit-form', handleFormRequest)
      server.middlewares.use('/api/submissions', handleGetSubmissions)
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  server: {
    watch: {
      ignored: ['**/submissions.json', '**/.env', '**/server/**'],
    },
  },
  plugins: [react(), tailwindcss(), formSubmissionPlugin()],
})
