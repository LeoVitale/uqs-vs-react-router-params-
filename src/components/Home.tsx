import { Link } from 'react-router';

export default function Home() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Comparison: React Router vs. nuqs</h1>
      <p>Choose a demonstration to see how to manage URL parameters:</p>
      
      <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', marginTop: '2rem' }}>
        <Link 
          to="/url-params" 
          style={{ 
            padding: '1rem 2rem', 
            backgroundColor: '#007bff', 
            color: 'white', 
            textDecoration: 'none', 
            borderRadius: '8px',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          React Router URL Params
        </Link>
        
        <Link 
          to="/nuqs" 
          style={{ 
            padding: '1rem 2rem', 
            backgroundColor: '#28a745', 
            color: 'white', 
            textDecoration: 'none', 
            borderRadius: '8px',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          nuqs Query Params
        </Link>
      </div>
      
      <div style={{ marginTop: '3rem', color: '#666' }}>
        <h3>What you'll compare:</h3>
        <ul style={{ textAlign: 'left', maxWidth: '600px', margin: '0 auto' }}>
          <li><strong>React Router URL Params:</strong> Demonstrates how to use useParams and useSearchParams from React Router 7</li>
          <li><strong>nuqs:</strong> Library that simplifies query parameter management with type safety</li>
        </ul>
      </div>
    </div>
  );
}
