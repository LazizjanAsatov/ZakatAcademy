const PrivacyPolicy = () => {
  return (
    <div className="py-10 md:py-16 bg-za-ivory min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-sm border border-za-line p-6 md:p-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-za-emerald mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm text-za-slate mb-8">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <div className="prose prose-lg max-w-none space-y-6 text-za-slate leading-relaxed">
            <section>
              <h2 className="text-2xl font-heading font-bold text-za-ink mt-8 mb-4">1. Introduction</h2>
              <p>
                Welcome to Zakat Academy. We are committed to protecting your privacy and ensuring the security of your personal information. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-za-ink mt-8 mb-4">2. Information We Collect</h2>
              <h3 className="text-xl font-semibold text-za-ink mt-6 mb-3">2.1 Personal Information</h3>
              <p>We may collect personal information that you voluntarily provide to us when you:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Register for an account</li>
                <li>Enroll in courses</li>
                <li>Subscribe to our newsletter</li>
                <li>Contact us for support</li>
                <li>Participate in surveys or events</li>
              </ul>
              <p className="mt-4">This information may include:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Name and contact information (email address, phone number)</li>
                <li>Demographic information (country, gender)</li>
                <li>Account credentials</li>
                <li>Payment information (processed securely through third-party providers)</li>
              </ul>

              <h3 className="text-xl font-semibold text-za-ink mt-6 mb-3">2.2 Automatically Collected Information</h3>
              <p>We automatically collect certain information when you visit our website, including:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>IP address and browser type</li>
                <li>Device information</li>
                <li>Usage data and browsing patterns</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-za-ink mt-8 mb-4">3. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Provide, maintain, and improve our services</li>
                <li>Process your registrations and course enrollments</li>
                <li>Send you educational content and updates</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send administrative information and service updates</li>
                <li>Monitor and analyze usage patterns to improve user experience</li>
                <li>Detect, prevent, and address technical issues</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-za-ink mt-8 mb-4">4. Information Sharing and Disclosure</h2>
              <p>We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our website and conducting our business</li>
                <li><strong>Legal Requirements:</strong> We may disclose information if required by law or in response to valid legal requests</li>
                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred</li>
                <li><strong>With Your Consent:</strong> We may share information with your explicit consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-za-ink mt-8 mb-4">5. Data Security</h2>
              <p>
                We implement appropriate technical and organizational security measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet 
                or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-za-ink mt-8 mb-4">6. Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Access and receive a copy of your personal data</li>
                <li>Rectify inaccurate or incomplete information</li>
                <li>Request deletion of your personal data</li>
                <li>Object to processing of your personal data</li>
                <li>Request restriction of processing</li>
                <li>Data portability</li>
                <li>Withdraw consent at any time</li>
              </ul>
              <p className="mt-4">To exercise these rights, please contact us at <a href="mailto:info@zakatacademy.com" className="text-za-emerald hover:underline">info@zakatacademy.com</a></p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-za-ink mt-8 mb-4">7. Cookies and Tracking Technologies</h2>
              <p>
                We use cookies and similar tracking technologies to track activity on our website and store certain information. 
                You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you 
                do not accept cookies, you may not be able to use some portions of our service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-za-ink mt-8 mb-4">8. Children's Privacy</h2>
              <p>
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information 
                from children. If you are a parent or guardian and believe your child has provided us with personal information, 
                please contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-za-ink mt-8 mb-4">9. Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy 
                Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically 
                for any changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-za-ink mt-8 mb-4">10. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="mt-4 space-y-2">
                <p><strong>Email:</strong> <a href="mailto:info@zakatacademy.com" className="text-za-emerald hover:underline">info@zakatacademy.com</a></p>
                <p><strong>Website:</strong> <a href="https://www.zakatacademy.com" className="text-za-emerald hover:underline">www.zakatacademy.com</a></p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy
