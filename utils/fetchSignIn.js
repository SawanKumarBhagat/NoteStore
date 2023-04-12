export const fetchSignIn = async (data) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/signin`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: data.email,
      password: data.password,
    }),
  });
  return res.json();
};
