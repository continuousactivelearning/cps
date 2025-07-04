interface ProfileModalProps {
  isOpen: boolean
  onClose: () => void
}

const ProfileModal: React.FC<ProfileModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>×</span>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>My Profile</h2>
        <form>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', fontSize: '0.875rem', marginBottom: '0.25rem' }}>Username</label>
            <input type="text" style={{ width: '100%' }} />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', fontSize: '0.875rem', marginBottom: '0.25rem' }}>Email</label>
            <input type="email" style={{ width: '100%' }} />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Edit Password</h3>
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', fontSize: '0.875rem', marginBottom: '0.25rem' }}>Current Password</label>
              <input type="password" style={{ width: '100%' }} />
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', fontSize: '0.875rem', marginBottom: '0.25rem' }}>New Password</label>
              <input type="password" style={{ width: '100%' }} placeholder="Password must be at least 8 characters long" />
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', fontSize: '0.875rem', marginBottom: '0.25rem' }}>Confirm New Password</label>
              <input type="password" style={{ width: '100%' }} placeholder="Passwords do not match" />
            </div>
            <button type="submit" style={{ width: '100%' }}>Update Password</button>
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button type="button" style={{ width: '50%', background: '#ccc', color: '#333' }} onClick={onClose}>Cancel</button>
            <button type="submit" style={{ width: '50%' }}>Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ProfileModal