interface SignInModalProps {
  isOpen: boolean
  onClose: () => void
  onCreateAccount: () => void
}

const SignInModal: React.FC<SignInModalProps> = ({ isOpen, onClose, onCreateAccount }) => {
  if (!isOpen) return null

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>×</span>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Sign In</h2>
        <form>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', fontSize: '0.875rem', marginBottom: '0.25rem' }}>Email</label>
            <input type="email" style={{ width: '100%' }} placeholder="Please enter your email" required />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', fontSize: '0.875rem', marginBottom: '0.25rem' }}>Password</label>
            <input type="password" style={{ width: '100%' }} placeholder="Please enter your password" required />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <label style={{ display: 'flex', alignItems: 'center' }}>
              <input type="checkbox" style={{ marginRight: '0.5rem' }} />
              <span style={{ fontSize: '0.875rem' }}>Remember me</span>
            </label>
            <a href="#" style={{ fontSize: '0.875rem', color: '#1a73e8' }}>Forgot your password?</a>
          </div>
          <button type="submit" style={{ width: '100%' }}>Sign In</button>
        </form>
        <div style={{ marginTop: '1rem', textAlign: 'center' }}>
          <p style={{ fontSize: '0.875rem' }}>Or sign in with:</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '0.5rem' }}>
            <button><img src="/src/assets/google-icon.png" alt="Google" style={{ width: '24px', height: '24px' }} /></button>
            <button><img src="/src/assets/facebook-icon.png" alt="Facebook" style={{ width: '24px', height: '24px' }} /></button>
            <button><img src="/src/assets/twitter-icon.png" alt="Twitter" style={{ width: '24px', height: '24px' }} /></button>
          </div>
        </div>
        <p style={{ marginTop: '1rem', fontSize: '0.875rem', textAlign: 'center' }}>
          Don't have an account? <button onClick={onCreateAccount} style={{ color: '#1a73e8', background: 'none', border: 'none' }}>Create Account</button>
        </p>
      </div>
    </div>
  )
}

export default SignInModal