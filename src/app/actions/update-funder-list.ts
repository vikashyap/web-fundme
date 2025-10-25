
'use server'

import { updateTag } from 'next/cache'; 

export async function updateFunderList() {
  // This will IMMEDIATELY update components with 'funders-list' tag
  await updateTag('funders-list');
  console.log('✅ Updated contract balance cache');
  return { success: true };
}
