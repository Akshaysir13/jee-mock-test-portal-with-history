// pages/download.tsx
import Head from 'next/head';

export default function Download() {
  return (
    <>
      <Head>
        <title>Download | Moghe’s Institute</title>
        <meta name="description" content="JEE Mock Test App — Full-screen, screenshot-proof, offline-ready." />
      </Head>

      <div style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        backgroundColor: '#f8fafc',
        fontFamily: '"Inter", -apple-system, sans-serif',
        textAlign: 'center',
      }}>
        <div style={{
          maxWidth: '600px',
          backgroundColor: 'white',
          borderRadius: '16px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
          padding: '2.5rem',
        }}>
          {/* Institute Logo Placeholder */}
          <div style={{
            width: '80px',
            height: '80px',
            backgroundColor: '#1e40af',
            borderRadius: '16px',
            margin: '0 auto 1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '28px',
            fontWeight: 'bold',
          }}>
            M
          </div>

          <h1 style={{
            fontSize: '1.8rem',
            fontWeight: '700',
            color: '#1e293b',
            marginBottom: '0.5rem',
          }}>
            Moghe’s Institute
          </h1>

          <p style={{
            fontSize: '1.1rem',
            color: '#475569',
            marginBottom: '1.5rem',
          }}>
            JEE Mock Test App — Full-screen practice, screenshot-proof, and offline-ready.
          </p>

          <a
            href="/moghes-institute.apk"
            download
            style={{
              display: 'inline-block',
              padding: '14px 32px',
              fontSize: '1.15rem',
              fontWeight: '600',
              backgroundColor: '#1e40af',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '12px',
              boxShadow: '0 4px 6px rgba(30, 64, 175, 0.2)',
              transition: 'transform 0.1s, background-color 0.2s',
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            📲 Download APK (v1.0)
          </a>

          <div style={{
            marginTop: '2rem',
            fontSize: '0.9rem',
            color: '#64748b',
            lineHeight: '1.6',
          }}>
            <p>✅ Works on all Android phones (Android 8.0+)</p>
            <p>🔒 Screenshots & screen recording disabled during tests</p>
            <p>⚠️ On first install: Allow <em>“Install unknown apps”</em> for Chrome</p>
          </div>

          {/* QR Code Placeholder */}
          <div style={{ marginTop: '2rem' }}>
            <p style={{ fontSize: '0.95rem', color: '#475569' }}>
              Or scan to download:
            </p>
            <div style={{
              display: 'inline-block',
              padding: '8px',
              backgroundColor: 'white',
              borderRadius: '8px',
              border: '1px solid #e2e8f0',
            }}>
              {/* Replace with real QR later */}
              <div style={{
                width: '150px',
                height: '150px',
                backgroundColor: '#f1f5f9',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#94a3b8',
                fontSize: '12px',
                fontWeight: 'bold',
              }}>
                [QR Code]
              </div>
            </div>
          </div>
        </div>

        <footer style={{
          marginTop: '2rem',
          fontSize: '0.85rem',
          color: '#94a3b8',
        }}>
          © {new Date().getFullYear()} Moghe’s Institute. For authorized students only.
        </footer>
      </div>
    </>
  );
}
