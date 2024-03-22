export const Sidebar = () => {
  return (
    <aside>
      {/* <!-- Company Info --> */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold mb-6">Company Info</h3>
        <h2 className="text-2xl">NewTek Solutions</h2>
        <p className="my-2">
          NewTek Solutions is a leading technology company specializing in web
          development and digital solutions. We pride ourselves on delivering
          high-quality products and services to our clients while fostering a
          collaborative and innovative work environment.
        </p>
        <hr className="my-4" />
        <h3 className="text-xl">Contact Email:</h3>
        <p className="my-2 bg-indigo-100 p-2 font-bold">
          contact@newteksolutions.com
        </p>
        <h3 className="text-xl">Contact Phone:</h3>
        <p className="my-2 bg-indigo-100 p-2 font-bold">555-555-5555</p>
      </div>

      {/* <!-- Manage --> */}
      <div className="bg-white p-6 rounded-lg shadow-md mt-6">
        <h3 className="text-xl font-bold mb-6">Manage Job</h3>
        <a
          href="/add-job.html"
          className="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
        >
          Edit Job
        </a>
        <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block">
          Delete Job
        </button>
      </div>
    </aside>
  )
}
