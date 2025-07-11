"use client";
import {
  logInAction,
  logInFacebookAction,
  signInAction,
} from "../utils/actions";
import facebookimg from "../../../public/facebook.svg";
import goggleimg from "../../../public/google.webp";
import Image from "next/image";
import { useState, useTransition } from "react";

export default function LoginForm() {
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [isFacebookLoading, setIsFacebookLoading] = useState(false);

  const handleGoogleLogin = () => {
    setIsGoogleLoading(true);
    startTransition(async () => {
      await logInAction();
      setIsGoogleLoading(false);
    });
  };

  const handleFacebookLogin = () => {
    setIsFacebookLoading(true);
    startTransition(async () => {
      await logInFacebookAction();
      setIsFacebookLoading(false);
    });
  };

  return (
    <div className="bg-white py-8 px-6 shadow-2xl rounded-xl border border-gray-100">
      <div className="space-y-6">
        {/* Social Login Buttons */}
        <div className="space-y-3">
          <button
            onClick={handleGoogleLogin}
            disabled={isGoogleLoading || isPending}
            className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isGoogleLoading ? (
              <div className="w-5 h-5 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin mr-3"></div>
            ) : (
              <Image
                src={goggleimg}
                width={20}
                height={20}
                alt="Google"
                className="mr-3"
              />
            )}
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
}