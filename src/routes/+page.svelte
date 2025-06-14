<script lang="ts">
  import { qrDataUrl, generateQRCode } from '$lib/qrcode';
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';

  const text = writable('');

  // Generate QR code on text change
  $: generateQRCode($text);
</script>

<div class="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-start py-12 dark">
  <form class="w-full max-w-md mb-8" on:submit|preventDefault>
    <input
      class="w-full px-4 py-3 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
      type="text"
      placeholder="Enter text to generate QR code"
      bind:value={$text}
      autocomplete="off"
    />
  </form>
  {#if $qrDataUrl}
    <div class="bg-white p-4 rounded shadow-lg">
      <img src="{$qrDataUrl}" alt="QR Code" class="w-64 h-64 object-contain" />
    </div>
  {/if}
</div>
