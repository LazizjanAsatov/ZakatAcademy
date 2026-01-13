const TermsOfService = () => {
  return (
    <div className="py-10 md:py-16 bg-za-ivory min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-sm border border-za-line p-6 md:p-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-za-emerald mb-4">
            Terms of Service
          </h1>
          <p className="text-sm text-za-slate mb-8">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <div className="prose prose-lg max-w-none space-y-6 text-za-slate leading-relaxed">
            <section>
              <h2 className="text-2xl font-heading font-bold text-za-ink mt-8 mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using Zakat Academy's website and services, you accept and agree to be bound by the terms 
                and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-za-ink mt-8 mb-4">2. Use License</h2>
              <p>
                Permission is granted to temporarily access the materials on Zakat Academy's website for personal, 
                non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-za-ink mt-8 mb-4">3. User Accounts</h2>
              <p>When you create an account with us, you must provide information that is accurate, complete, and current at all times. You are responsible for:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Maintaining the security of your account and password</li>
                <li>All activities that occur under your account</li>
                <li>Notifying us immediately of any unauthorized use of your account</li>
                <li>Ensuring that you exit from your account at the end of each session</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-za-ink mt-8 mb-4">4. Course Enrollment and Access</h2>
              <p>By enrolling in our courses, you agree to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Use course materials solely for personal, non-commercial educational purposes</li>
                <li>Not share, distribute, or resell course content</li>
                <li>Respect intellectual property rights of all course materials</li>
                <li>Complete courses in accordance with our guidelines</li>
              </ul>
              <p className="mt-4">
                We reserve the right to revoke access to courses if you violate these terms or engage in any 
                behavior that we deem inappropriate or harmful to our community.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-za-ink mt-8 mb-4">5. User Conduct</h2>
              <p>You agree not to use the service to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon the rights of others</li>
                <li>Transmit any harmful, offensive, or inappropriate content</li>
                <li>Interfere with or disrupt the service or servers</li>
                <li>Attempt to gain unauthorized access to any portion of the service</li>
                <li>Impersonate any person or entity</li>
                <li>Collect or store personal data about other users</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-za-ink mt-8 mb-4">6. Intellectual Property</h2>
              <p>
                All content, features, and functionality of the service, including but not limited to text, graphics, 
                logos, images, audio clips, video clips, and software, are the exclusive property of Zakat Academy 
                and its licensors and are protected by international copyright, trademark, and other intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-za-ink mt-8 mb-4">7. Disclaimer</h2>
              <p>
                The materials on Zakat Academy's website are provided on an 'as is' basis. Zakat Academy makes no warranties, 
                expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, 
                implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement 
                of intellectual property or other violation of rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-za-ink mt-8 mb-4">8. Limitations</h2>
              <p>
                In no event shall Zakat Academy or its suppliers be liable for any damages (including, without limitation, 
                damages for loss of data or profit, or due to business interruption) arising out of the use or inability to 
                use the materials on Zakat Academy's website, even if Zakat Academy or a Zakat Academy authorized 
                representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-za-ink mt-8 mb-4">9. Accuracy of Materials</h2>
              <p>
                The materials appearing on Zakat Academy's website could include technical, typographical, or photographic errors. 
                Zakat Academy does not warrant that any of the materials on its website are accurate, complete, or current. 
                Zakat Academy may make changes to the materials contained on its website at any time without notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-za-ink mt-8 mb-4">10. Links to Other Websites</h2>
              <p>
                Our service may contain links to third-party websites or services that are not owned or controlled by Zakat Academy. 
                Zakat Academy has no control over, and assumes no responsibility for, the content, privacy policies, or practices 
                of any third-party websites or services. You acknowledge and agree that Zakat Academy shall not be responsible or 
                liable for any damage or loss caused by or in connection with the use of any such content, goods, or services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-za-ink mt-8 mb-4">11. Termination</h2>
              <p>
                We may terminate or suspend your account and access to the service immediately, without prior notice or liability, 
                for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to 
                use the service will immediately cease.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-za-ink mt-8 mb-4">12. Changes to Terms</h2>
              <p>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is 
                material, we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes 
                a material change will be determined at our sole discretion.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-za-ink mt-8 mb-4">13. Governing Law</h2>
              <p>
                These Terms shall be interpreted and governed by the laws of the jurisdiction in which Zakat Academy operates, 
                without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms 
                will not be considered a waiver of those rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-za-ink mt-8 mb-4">14. Contact Information</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us:
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

export default TermsOfService
