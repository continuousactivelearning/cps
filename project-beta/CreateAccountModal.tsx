interface CreateAccountModalProps {
  isOpen: boolean
  onClose: () => void
  onSignIn: () => void
}

const CreateAccountModal: React.FC<CreateAccountModalProps> = ({ isOpen, onClose, onSignIn }) => {
  if (!isOpen) return null

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>×</span>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Create Account</h2>
        <form>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', fontSize: '0.875rem', marginBottom: '0.25rem' }}>Username</label>
            <input type="text" style={{ width: '100%' }} placeholder="Username is required" required />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', fontSize: '0.875rem', marginBottom: '0.25rem' }}>Email</label>
            <input type="email" style={{ width: '100%' }} placeholder="A valid email is required" required />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', fontSize: '0.875rem', marginBottom: '0.25rem' }}>Password</label>
            <input type="password" style={{ width: '100%' }} placeholder="Password must be at least 8 characters long" required />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', fontSize: '0.875rem', marginBottom: '0.25rem' }}>Confirm Password</label>
            <input type="password" style={{ width: '100%' }} placeholder="Passwords do not match" required />
          </div>
          <button type="submit" style={{ width: '100%' }}>Create Account</button>
        </form>
        <div style={{ marginTop: '1rem', textAlign: 'center' }}>
          <p style={{ fontSize: '0.875rem' }}>Or sign up with:</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '0.5rem' }}>
            <button><img src="/src/assets/google-icon.png" alt="Google" style={{ width: '24px', height: '24px' }} /></button>
            <button><img src="/src/assets/facebook-icon.png" alt="Facebook" style={{ width: '24px', height: '24px' }} /></button>
            <button><img src="/src/assets/twitter-icon.png" alt="Twitter" style={{ width: '24px', height: '24px' }} /></button>
          </div>
        </div>
        <p style={{ marginTop: '1rem', fontSize: '0.875rem', textAlign: 'center' }}>
          Already have an account? <button onClick={onSignIn} style={{ color: '#1a73e8', background: 'none', border: 'none' }}>Sign In</button>
        </p>
      </div>
    </div>
  )
}

export default CreateAccountModal