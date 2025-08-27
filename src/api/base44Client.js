import { createClient } from '@base44/sdk';
// import { getAccessToken } from '@base44/sdk/utils/auth-utils';

// Create a client with authentication required
export const base44 = createClient({
  appId: "68ac4589d0c91658c019180a", 
  requiresAuth: true // Ensure authentication is required for all operations
});
