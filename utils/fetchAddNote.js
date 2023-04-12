export const fetchAddNote = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/addNote`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: "",
      body: "",
      token: localStorage.getItem("token"),
    }),
  });
};
