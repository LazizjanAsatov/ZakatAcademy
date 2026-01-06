import { Link } from 'react-router-dom'

const PendingApproval = () => {
  return (
    <div className="py-10 md:py-16">
      <div className="max-w-md mx-auto px-4">
        <div className="bg-za-ivory rounded-2xl shadow-sm border border-za-line p-8 text-center">
          <div className="w-16 h-16 bg-za-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-za-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h1 className="text-3xl font-heading font-bold text-za-ink mb-4">
            Account Pending Approval
          </h1>
          <p className="text-za-slate mb-6">
            Thank you for signing up! Your account request has been submitted and is currently 
            being reviewed by our admin team. You will be able to access courses once your 
            account is approved.
          </p>
          <p className="text-za-slate mb-8 text-sm">
            We'll notify you via email once your account has been approved. This usually takes 
            24-48 hours.
          </p>
          <div className="space-y-3">
            <Link
              to="/"
              className="block px-6 py-3 bg-za-emerald text-white rounded-full hover:bg-za-forest transition font-semibold"
            >
              Back to Home
            </Link>
            <Link
              to="/courses"
              className="block px-6 py-3 bg-za-ivory border border-za-line text-za-ink rounded-full hover:bg-za-sand transition font-semibold"
            >
              Browse Courses
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PendingApproval

