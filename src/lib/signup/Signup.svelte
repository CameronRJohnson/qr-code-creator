<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  let email = '';
  let password = '';
  function handleLogin(e: Event) {
    e.preventDefault();
    dispatch('login', { email, password });
  }
</script>

<section class="w-full h-full flex items-center justify-center relative">
  <form class="flex flex-col gap-6 w-full max-w-sm bg-gray-900 p-8 rounded-2xl shadow-xl" on:submit|preventDefault={handleLogin}>
    <h2 class="text-2xl font-bold text-center mb-2">Login</h2>
    <input
      type="email"
      bind:value={email}
      placeholder="Email"
      required
      class="px-4 py-3 rounded-lg border border-gray-700 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 text-lg"
    />
    <input
      type="password"
      bind:value={password}
      placeholder="Password"
      required
      class="px-4 py-3 rounded-lg border border-gray-700 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 text-lg"
    />
    <button
      type="submit"
      class="bg-purple-700 hover:bg-purple-800 text-white font-bold py-3 rounded-lg transition text-lg mt-2"
    >
      Login
    </button>
  </form>
  <button
    type="button"
    class="absolute bottom-4 left-4 text-purple-700 hover:text-purple-800 bg-transparent rounded-full w-12 h-12 flex items-center justify-center shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
    on:click={() => dispatch('back')}
    aria-label="Back"
  >
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-7 h-7">
      <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
  </button>
</section>