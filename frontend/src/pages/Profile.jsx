import { useAuth } from '../contexts/AuthContext'

const Profile = () => {
  const { user } = useAuth()

  return (
    <div className="py-10 md:py-16">
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-za-ink mb-8">
          Profile
        </h1>

        <div className="bg-za-ivory rounded-2xl shadow-sm border border-za-line p-6 md:p-8">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-za-slate mb-2">Email</label>
              <div className="text-lg text-za-ink">{user?.email}</div>
            </div>

            {user?.first_name && (
              <div>
                <label className="block text-sm font-medium text-za-slate mb-2">First Name</label>
                <div className="text-lg text-za-ink">{user.first_name}</div>
              </div>
            )}

            {user?.last_name && (
              <div>
                <label className="block text-sm font-medium text-za-slate mb-2">Last Name</label>
                <div className="text-lg text-za-ink">{user.last_name}</div>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-za-slate mb-2">Account Status</label>
              <div className="flex items-center gap-2">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  user?.is_active
                    ? 'bg-za-emerald/10 text-za-emerald'
                    : 'bg-za-gold/20 text-za-gold'
                }`}>
                  {user?.is_active ? 'Active' : 'Pending Approval'}
                </span>
              </div>
            </div>

            {user?.created_at && (
              <div>
                <label className="block text-sm font-medium text-za-slate mb-2">Member Since</label>
                <div className="text-lg text-za-ink">
                  {new Date(user.created_at).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile

