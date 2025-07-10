import LoginForm from "../_components/LogBtn";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            Welcome back to EverLane
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Sign in to your account and continue your fashion journey
          </p>
        </div>

        {/* Login Form Component */}
        <LoginForm />

        {/* Footer */}
        <div className="text-center">
          <p className="text-sm text-gray-600">
            New to EverLane?{" "}
            <a
              href="#"
              className="font-medium text-black hover:text-gray-700 transition-colors"
            >
              Create an account
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}