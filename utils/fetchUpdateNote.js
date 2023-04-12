export const fetchUpdateNote = async (data) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/updateNote`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      _id: data._id,
      title: data.title,
      body: data.body,
    }),
  });
};
