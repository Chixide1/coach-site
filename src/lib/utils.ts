import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function removeHtmlTags(str: string) {
  const regex = /<[^>]*>/g;
  return str.replace(regex, '');
}