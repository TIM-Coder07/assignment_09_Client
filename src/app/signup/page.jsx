"use client";

import { authClient } from "@/lib/auth-client";
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
  Card,
  Separator,
} from "@heroui/react";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { Mail, Lock, Eye, EyeOff, UserPlus } from "lucide-react";
import toast from "react-hot-toast";
import { Icon } from "@iconify/react";

const SignUpPage = () => {
  const router = useRouter();

  const [isShow, setIsShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  // EMAIL & PASSWORD SIGNUP
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());

    try {
      setLoading(true);

      const { data, error } = await authClient.signUp.email({
        name: userData.name,
        image: userData.image,
        email: userData.email,
        password: userData.password,
      });

      if (error) {
        toast.error(error?.message || "Signup failed");
        return;
      }

      if (!data) {
        toast.error("Signup failed");
        return;
      }

      toast.success("Account created successfully");
      router.push("/");
    } catch (err) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  // GOOGLE LOGIN
  const handleGoogleLogin = async () => {
    try {
      setGoogleLoading(true);

      const { error } = await authClient.signIn.social({
        provider: "google",
      });

      if (error) {
        toast.error(error?.message || "Google login failed");
      }
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong");
    } finally {
      setGoogleLoading(false);
    }
  };

  return (
    <div className="relative my-5 min-h-screen overflow-hidden bg-[#070B14] flex items-center justify-center px-4 py-10">
      {/* BACKGROUND */}
      <div className="absolute top-[-100px] left-[-100px] w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-[-100px] right-[-100px] w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse" />

      {/* CARD */}
      <Card className="relative w-full max-w-5xl overflow-hidden rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_0_60px_rgba(0,0,0,0.5)]">
        <div className="grid md:grid-cols-2">
          {/* LEFT SIDE */}
          <div className="hidden md:flex flex-col justify-between p-12 bg-gradient-to-br from-purple-500/20 via-blue-500/10 to-cyan-500/20 border-r border-white/10">
            <div>
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center border border-white/20">
                <UserPlus className="text-purple-300" size={28} />
              </div>

              <h1 className="mt-8 text-5xl font-black text-white">
                Join Us <br /> Today.
              </h1>

              <p className="mt-5 text-gray-300">
                Create your account and start exploring the platform instantly.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="p-8 md:p-12">
            {/* HEADER */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-white">Create Account</h2>

              <p className="text-gray-400 mt-2">
                Fill in your details to register
              </p>
            </div>

            {/* FORM */}
            <Form className="flex flex-col gap-6" onSubmit={onSubmit}>
              {/* NAME */}
              <TextField>
                <Label className="text-gray-300">Full Name</Label>

                <div className="relative">
                  <UserPlus
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <Input
                    name="name"
                    placeholder="John Doe"
                    className="pl-12 h-14 rounded-2xl bg-white/5 border border-white/10 text-white"
                  />
                </div>

                <FieldError />
              </TextField>

              {/* IMAGE */}
              <TextField>
                <Label className="text-gray-300">Photo URL</Label>

                <div className="relative">
                  <UserPlus
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <Input
                    name="image"
                    placeholder="https://example.com/photo.jpg"
                    className="pl-12 h-14 rounded-2xl bg-white/5 border border-white/10 text-white"
                  />
                </div>

                <FieldError />
              </TextField>

              {/* EMAIL */}
              <TextField>
                <Label className="text-gray-300">Email</Label>

                <div className="relative">
                  <Mail
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <Input
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    className="pl-12 h-14 rounded-2xl bg-white/5 border border-white/10 text-white"
                  />
                </div>

                <FieldError />
              </TextField>

              {/* PASSWORD */}
              <TextField>
                <Label className="text-gray-300">Password</Label>

                <div className="relative">
                  <Lock
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <Input
                    name="password"
                    type={isShow ? "text" : "password"}
                    placeholder="Enter password"
                    className="pl-12 pr-14 h-14 rounded-2xl bg-white/5 border border-white/10 text-white"
                  />

                  <button
                    type="button"
                    tabIndex={-1}
                    onClick={() => setIsShow(!isShow)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                  >
                    {isShow ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>

                <FieldError />
              </TextField>

              {/* SUBMIT BUTTON */}
              <Button
                type="submit"
                disabled={loading}
                className="w-full h-14 rounded-2xl bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 text-white font-bold hover:scale-[1.02] active:scale-[0.98] transition"
              >
                {loading ? "Creating..." : "Create Account"}
              </Button>
            </Form>

            {/* DIVIDER */}
            <Separator className="mt-6"><p>Or</p></Separator>

            {/* GOOGLE BUTTON */}
            <Button
              onClick={handleGoogleLogin}
              disabled={googleLoading}
              type="button"
              className="w-full mt-6 h-12 rounded-2xl bg-white text-black font-semibold hover:bg-gray-100 transition"
            >
              {googleLoading ? (
                "Signing in..."
              ) : (
                <div className="flex items-center gap-2">
                  <Icon icon="devicon:google" />
                  Continue with Google
                </div>
              )}
            </Button>

            {/* FOOTER */}
            <p className="text-center text-sm text-gray-400 mt-8">
              Already have an account?
              <Link href="/login">
                <span className="ml-2 text-purple-400 font-semibold">
                  Login
                </span>
              </Link>
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SignUpPage;
