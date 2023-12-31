export default function changePassword() { 
    return (
        <div className="flex items-center justify-center">
        <div className="max-w-md w-full px-6 py-8 bg-white shadow-md">
          <h2 className="text-2xl text-[#dc5777] font-bold mb-6">Change Password</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="currentPassword" className="block text-[#23a888] font-medium mb-2">
                Current Password
              </label>
              <input
                type="password"
                id="currentPassword"
                className="border border-gray-300 px-3 py-2 rounded-md w-full focus:outline-none focus:ring-[#23a888]"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="newPassword" className="block text-[#23a888] font-medium mb-2">
                New Password
              </label>
              <input
                type="password"
                id="newPassword"
                className="border border-gray-300 px-3 py-2 rounded-md w-full focus:outline-none focus:ring-[#23a888]"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="confirmPassword" className="block text-[#23a888] font-medium mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="border border-gray-300 px-3 py-2 rounded-md w-full focus:outline-none focus:ring-[#23a888]"
                required
              />
            </div>
            <button type="submit" className="bg-[#dc5777] text-white px-4 py-2 rounded-md hover:bg-[#5c1525] focus:outline-none">
              Change Password
            </button>
          </form>
        </div>
      </div>)}