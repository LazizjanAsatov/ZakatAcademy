const CookiePolicy = () => {
  return (
    <div className="py-10 md:py-16 bg-za-ivory min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-sm border border-za-line p-6 md:p-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-za-emerald mb-4">
            Cookie Policy
          </h1>
          <p className="text-sm text-za-slate mb-8">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <div className="prose prose-lg max-w-none space-y-6 text-za-slate leading-relaxed">
            <section>
              <h2 className="text-2xl font-heading font-bold text-za-ink mt-8 mb-4">1. What Are Cookies</h2>
              <p>
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. 
                Cookies are widely used to make websites work more efficiently and to provide information to the website owners.
              </p>
              <p className="mt-4">
                Cookies allow a website to recognize your device and store some information about your preferences or past actions. 
                This helps us provide you with a better experience when you browse our website and also allows us to improve our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-za-ink mt-8 mb-4">2. How We Use Cookies</h2>
              <p>Zakat Academy uses cookies for several purposes:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li><strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility.</li>
                <li><strong>Performance Cookies:</strong> These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.</li>
                <li><strong>Functionality Cookies:</strong> These cookies allow the website to remember choices you make (such as your username, language, or region) and provide enhanced, more personal features.</li>
                <li><strong>Analytics Cookies:</strong> These cookies help us understand how visitors use our website by collecting information about pages visited, time spent on pages, and any errors encountered.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-za-ink mt-8 mb-4">3. Types of Cookies We Use</h2>
              
              <h3 className="text-xl font-semibold text-za-ink mt-6 mb-3">3.1 Strictly Necessary Cookies</h3>
              <p>
                These cookies are essential for you to browse the website and use its features. Without these cookies, 
                services you have asked for cannot be provided. These cookies do not store any personally identifiable information.
              </p>

              <h3 className="text-xl font-semibold text-za-ink mt-6 mb-3">3.2 Performance and Analytics Cookies</h3>
              <p>
                These cookies collect information about how you use our website, such as which pages you visit most often 
                and if you get error messages. This data helps us improve how our website works. These cookies don't collect 
                information that identifies you personally.
              </p>

              <h3 className="text-xl font-semibold text-za-ink mt-6 mb-3">3.3 Functionality Cookies</h3>
              <p>
                These cookies allow the website to remember choices you make and provide enhanced, more personal features. 
                They may also be used to provide services you have requested, such as watching a video or commenting on a blog.
              </p>

              <h3 className="text-xl font-semibold text-za-ink mt-6 mb-3">3.4 Targeting/Advertising Cookies</h3>
              <p>
                These cookies are used to deliver advertisements relevant to you and your interests. They are also used to 
                limit the number of times you see an advertisement and help measure the effectiveness of advertising campaigns.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-za-ink mt-8 mb-4">4. Third-Party Cookies</h2>
              <p>
                In addition to our own cookies, we may also use various third-party cookies to report usage statistics of 
                the service, deliver advertisements, and so on. These third-party cookies are placed by services that appear 
                on our pages and are not under our control.
              </p>
              <p className="mt-4">
                Examples of third-party services that may use cookies on our website include:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Analytics services (e.g., Google Analytics)</li>
                <li>Social media platforms (for social sharing features)</li>
                <li>Payment processors (for secure payment processing)</li>
                <li>Content delivery networks</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-za-ink mt-8 mb-4">5. Managing Cookies</h2>
              <p>You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in your browser settings.</p>
              
              <h3 className="text-xl font-semibold text-za-ink mt-6 mb-3">5.1 Browser Settings</h3>
              <p>Most web browsers allow you to control cookies through their settings preferences. However, limiting cookies may impact your experience using our website. Here's how to manage cookies in popular browsers:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li><strong>Google Chrome:</strong> Settings → Privacy and Security → Cookies and other site data</li>
                <li><strong>Mozilla Firefox:</strong> Options → Privacy & Security → Cookies and Site Data</li>
                <li><strong>Safari:</strong> Preferences → Privacy → Cookies and website data</li>
                <li><strong>Microsoft Edge:</strong> Settings → Privacy, search, and services → Cookies and site permissions</li>
              </ul>

              <h3 className="text-xl font-semibold text-za-ink mt-6 mb-3">5.2 Cookie Consent</h3>
              <p>
                When you first visit our website, you may be presented with a cookie consent banner. You can choose to accept 
                or reject non-essential cookies. You can also change your preferences at any time by accessing our cookie settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-za-ink mt-8 mb-4">6. Cookies We Use</h2>
              <p>The following is a list of cookies we use on our website:</p>
              <div className="mt-4 overflow-x-auto">
                <table className="min-w-full border border-za-line rounded-lg">
                  <thead className="bg-za-ivory">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-za-ink border-b border-za-line">Cookie Name</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-za-ink border-b border-za-line">Purpose</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-za-ink border-b border-za-line">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-3 text-sm border-b border-za-line">session_id</td>
                      <td className="px-4 py-3 text-sm border-b border-za-line">Maintains your session while using the website</td>
                      <td className="px-4 py-3 text-sm border-b border-za-line">Session</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm border-b border-za-line">auth_token</td>
                      <td className="px-4 py-3 text-sm border-b border-za-line">Stores authentication information</td>
                      <td className="px-4 py-3 text-sm border-b border-za-line">30 days</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm border-b border-za-line">preferences</td>
                      <td className="px-4 py-3 text-sm border-b border-za-line">Stores your website preferences</td>
                      <td className="px-4 py-3 text-sm border-b border-za-line">1 year</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-za-ink mt-8 mb-4">7. Impact of Disabling Cookies</h2>
              <p>
                If you choose to disable cookies, some features of our website may not function properly. For example:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>You may not be able to stay logged in to your account</li>
                <li>Your preferences may not be saved</li>
                <li>Some interactive features may not work</li>
                <li>Course progress may not be tracked</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-za-ink mt-8 mb-4">8. Updates to This Cookie Policy</h2>
              <p>
                We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, 
                legal, or regulatory reasons. We will notify you of any changes by posting the new Cookie Policy on this page 
                and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-za-ink mt-8 mb-4">9. Contact Us</h2>
              <p>
                If you have any questions about our use of cookies or this Cookie Policy, please contact us:
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

export default CookiePolicy
