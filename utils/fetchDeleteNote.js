export const fetchDeleteNote = async (id) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/deleteNote`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      _id: id,
    }),
  });
};
