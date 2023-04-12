export const fetchNotes = async () => {
  const token = localStorage.getItem("token");
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getNotes`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token: token }),
  });

  const data = await res.json();
  const notes = data.notes.reverse();
  return notes;
};
