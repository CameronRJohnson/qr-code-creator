<script lang="ts">
  import { qrDataUrl, generateQRCode } from '$lib/qrcode';
  import { writable, get } from 'svelte/store';
  import { createEventDispatcher } from 'svelte';

  const text = writable('');
  const dispatch = createEventDispatcher();

  // Generate QR code on text change
  $: generateQRCode($text);

  function handleCreate() {
    dispatch('create', { text: $text });
  }
</script>

<div class="flex flex-col items-center w-full min-h-[20rem] relative">
  <input
    type="text"
    bind:value={$text}
    placeholder="Enter text for QR code"
    class="mb-8 px-4 py-3 rounded-lg border border-gray-700 bg-gray-800 text-white w-full max-w-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-lg"
  />
  <div class="flex items-center justify-center w-48 h-48 bg-white rounded-2xl shadow-lg">
    {#if $qrDataUrl}
      <img src={$qrDataUrl} alt="QR Code" class="w-40 h-40 object-contain" />
    {/if}
  </div>
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
  <button
    type="button"
    class="absolute bottom-4 right-4 bg-purple-700 hover:bg-purple-800 text-white font-bold rounded-full px-8 py-3 shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
    on:click={handleCreate}
  >
    Create
  </button>
</div>