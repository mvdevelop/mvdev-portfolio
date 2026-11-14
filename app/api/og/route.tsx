import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get('title') || 'MvDev Portfolio';
  const subtitle = searchParams.get('subtitle') || 'Full Stack Developer';
  const project = searchParams.get('project');

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#071108',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: '80px',
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}
      >
        {/* Subtle background pattern */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'linear-gradient(rgba(77, 139, 233, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(77, 139, 233, 0.05) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            pointerEvents: 'none',
          }}
        />

        {/* Content */}
        <div style={{ zIndex: 1 }}>
          {/* Top label */}
          <div
            style={{
              fontSize: '24px',
              fontWeight: '600',
              color: '#4d8be9',
              marginBottom: '24px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            {project ? `${project.toUpperCase()} — CASE STUDY` : 'MVDEV PORTFOLIO'}
          </div>

          {/* Main title */}
          <h1
            style={{
              fontSize: '72px',
              fontWeight: 'bold',
              color: '#ffffff',
              lineHeight: 1.1,
              margin: '0 0 32px 0',
              maxWidth: '800px',
            }}
          >
            {title}
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: '32px',
              color: '#a5adb8',
              margin: '0',
              maxWidth: '700px',
            }}
          >
            {subtitle}
          </p>

          {/* Bottom accent line */}
          <div
            style={{
              position: 'absolute',
              bottom: '80px',
              left: '80px',
              right: '80px',
              height: '2px',
              background: 'linear-gradient(90deg, #4d8be9 0%, transparent 100%)',
            }}
          />

          {/* Footer info */}
          <div
            style={{
              position: 'absolute',
              bottom: '40px',
              left: '80px',
              fontSize: '20px',
              color: '#6b7280',
            }}
          >
            Full Stack Developer · Backend Engineering
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
