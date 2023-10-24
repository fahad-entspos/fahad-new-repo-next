
function Logout() {
  return <>
  
{/* <div>

<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Start a 14 day free trial
            </a>
          </p>
        </div>
      </div>

    </div>   */}

<div className="max-w-lg mx-auto my-10 bg-transparent p-8 rounded-xl  shadow-slate-300">
  <h1 className="text-3xl text-black font-medium">Get’s started.</h1>
  <p className="text-slate-500">Don’t have an account? <span className="text-[#7437ca]">Sign up</span></p>
  <div className="my-5">
    <button className="w-full text-center py-3 my-3 border flex space-x-2 items-center justify-center border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
      <img
        src="https://www.svgrepo.com/show/355037/google.svg"
        className="w-6 h-6"
        alt=""
      />{" "}
      <span>Login with Google</span>
    </button>
  </div>
  <form action="" className="my-10">
    <div className="flex flex-col space-y-5">
      <label htmlFor="email">
        <p className="font-medium text-slate-700 pb-2">Email address</p>
        <input
          id="email"
          name="email"
          type="email"
          className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
          placeholder="Enter email address"
        />
      </label>
      <label htmlFor="password">
        <p className="font-medium text-slate-700 pb-2">Password</p>
        <input
          id="password"
          name="password"
          type="password"
          className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
          placeholder="Enter your password"
        />
      </label>
      <div className="flex flex-row justify-between">
        <div>
          <label htmlFor="remember" className="">
            <input
              type="checkbox"
              id="remember"
              className="w-4 h-4 border-slate-200 focus:bg-[#A162F7]"
            />
            Remember me
          </label>
        </div>
        <div>
          <a href="#" className="font-medium text-[#A162F7]">
            Forgot Password?
          </a>
        </div>
      </div>
      <button className="w-full py-3 font-medium text-white bg-[#A162F7] rounded-lg hover:shadow inline-flex space-x-2 items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
          />
        </svg>
        <span>Login</span>
      </button>
     
    </div>
  </form>
</div>


  </>
}

export default Logout