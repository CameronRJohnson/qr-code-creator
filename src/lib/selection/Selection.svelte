<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  let expanded = false;
</script>

<section class="w-full h-full flex flex-col items-center justify-center">
  <!-- Top Buttons -->
  <div class="w-full h-full grid grid-cols-3 gap-8 mb-8">
    {#each ['url', 'vcard', 'email', 'sms', 'wifi', 'event', 'location', 'app', 'file'] as format}
      <button
        type="button"
        class="bg-purple-700 hover:bg-purple-800 text-white font-bold py-8 rounded-xl flex items-center justify-center text-2xl cursor-pointer transition"
        on:click={() => dispatch('formatSelect', { format })}
      >
        {format.toUpperCase()}
      </button>
    {/each}
  </div>

  <!-- Toggle Bar as Button (for accessibility) -->
  <button
    type="button"
    class="w-full max-w-2xl flex items-center gap-4 cursor-pointer my-4 focus:outline-none"
    on:click={() => expanded = !expanded}
  >
    <div class="flex-grow h-px bg-gray-400"></div>
    <span class="text-white font-semibold text-lg select-none">Static QR Codes</span>
    <div class="flex-grow h-px bg-gray-400"></div>
  </button>

  <!-- Bottom Buttons -->
  {#if expanded}
    <div class="w-full max-w-2xl bg-gray-900 rounded-xl shadow-lg p-6 flex flex-col gap-4 mt-2">
      <div class="grid grid-cols-3 gap-4">
        {#each ['png', 'jpeg', 'html', 'svg', 'pdf', 'txt'] as format}
          <button
            type="button"
            class="bg-purple-700 hover:bg-purple-800 text-white font-bold py-8 rounded-xl flex items-center justify-center text-2xl cursor-pointer transition"
            on:click={() => dispatch('formatSelect', { format })}
          >
            {format.toUpperCase()}
          </button>
        {/each}
      </div>
    </div>
  {/if}
</section>
