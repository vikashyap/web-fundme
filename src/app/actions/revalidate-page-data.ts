// app/actions/contract-actions.ts
'use server'

import { revalidatePath, revalidateTag, updateTag,  } from 'next/cache';

export async function revalidatePageData() {
 
  
  // Or use updateTag for immediate updates (Next.js 16 only)
 await  revalidateTag('funders-list', "max");
 await revalidateTag('contract-balance', "max");
  
 revalidatePath('/');
  
  console.log('✅ Revalidated the page data');
  
  return { success: true };
}
