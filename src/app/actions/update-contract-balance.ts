// app/actions/contract-actions.ts
'use server'

import { updateTag } from 'next/cache'; // NEW in Next.js 16!

export async function updateContractBalance() {
  // This will IMMEDIATELY update components with 'contract-balance' tag
  await updateTag('contract-balance');
  console.log('✅ Updated contract balance cache');
  return { success: true };
}
