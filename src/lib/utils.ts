import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function removeHtmlTags(str: string | null | undefined) {
  const regex = /<[^>]*>/g;
  return str ? str.replace(regex, '') : '';
}