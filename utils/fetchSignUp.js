export const fetchSignUp = async (data) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: data.name,
      email: data.email,
      password: data.password,
    }),
  })
  return res.json();
};
