import { supabase } from "@/lib/supabase";

export type GuestEntry = {
  id: string;
  name: string;
  status: string;
  message?: string;
  created_at: string;
};

export async function getGuests(): Promise<GuestEntry[]> {
  const { data, error } = await supabase
    .from("guests")
    .select("*")
    .order("created_at", { ascending: true });

  if (error) {
    console.error("Failed to fetch guests:", error);
    return [];
  }

  return data as GuestEntry[];
}

export async function addGuest(
  entry: Omit<GuestEntry, "id" | "created_at">,
): Promise<GuestEntry | null> {
  const { data, error } = await supabase
    .from("guests")
    .insert({ name: entry.name, status: entry.status, message: entry.message })
    .select()
    .single();

  if (error) {
    console.error("Failed to add guest:", error);
    return null;
  }

  return data as GuestEntry;
}
