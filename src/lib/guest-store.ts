export type GuestEntry = {
  id: string;
  name: string;
  status: string;
  message?: string;
  createdAt: string;
};

const STORAGE_KEY = "birthday-party-guests";

export function getGuests(): GuestEntry[] {
  if (typeof window === "undefined") return [];
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? (JSON.parse(data) as GuestEntry[]) : [];
  } catch {
    return [];
  }
}

export function addGuest(entry: GuestEntry): void {
  const guests = getGuests();
  guests.push(entry);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(guests));
}
