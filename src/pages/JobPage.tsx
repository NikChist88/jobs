import { Breadcrumbs } from '@components/Breadcrumbs'
import { Sidebar } from '@components/Sidebar'

export const JobPage = () => {
  return (
    <>
      <Breadcrumbs />
      <section className="bg-indigo-50">
        <div className="container m-auto py-10 px-6">
          <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
            <main>
              <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
                <div className="text-gray-500 mb-4">Full-Time</div>
                <h1 className="text-3xl font-bold mb-4">Senior React Developer</h1>
                <div className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
                  <i className="fa-solid fa-location-dot text-lg text-orange-700 mr-2"></i>
                  <p className="text-orange-700">Boston, MA</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-indigo-800 text-lg font-bold mb-6">
                  Job Description
                </h3>
                <p className="mb-4">
                  We are seeking a talented Front-End Developer to join our team
                  in Boston, MA. The ideal candidate will have strong skills in
                  HTML, CSS, and JavaScript, with experience working with modern
                  JavaScript frameworks such as React or Angular.
                </p>
                <h3 className="text-indigo-800 text-lg font-bold mb-2">
                  Salary
                </h3>
                <p className="mb-4">$70k - $80K / Year</p>
              </div>
            </main>
            <Sidebar />
          </div>
        </div>
      </section>
    </>
  )
}
