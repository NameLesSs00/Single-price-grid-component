"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import React from "react";
import { z } from "zod";

export default function SignUp() {
  const router = useRouter();
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({ username: "", password: "" });

  const schema = z.object({
    username: z.string().regex(/^[A-Za-z]+$/, "Username must contain only English letters"),
    password: z.string().min(4, "Password must be at least 4 characters long"),
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = schema.safeParse(formData);

    if (!result.success) {
      const formattedErrors = result.error.flatten().fieldErrors;
      setErrors({
        username: formattedErrors.username ? formattedErrors.username[0] : "",
        password: formattedErrors.password ? formattedErrors.password[0] : "",
      });
    } else {
      setErrors({ username: "", password: "" });
      setTimeout(() => {
        router.push('/meme')
      }, 100);
    }
  };

  return (
    <div className="SignUp">
      <h1>Sign Up To Join The Community</h1>
      <form onSubmit={handleSubmit}>
        <span>Enter your Username:</span>
        <input type="text" name="username" value={formData.username} onChange={handleChange} />
        {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}

        <span>Enter your Password:</span>
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};
