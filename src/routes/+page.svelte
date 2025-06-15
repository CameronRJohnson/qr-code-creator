<script lang="ts">
  import { qrDataUrl, generateQRCode } from '$lib/qrcode';
  import { writable } from 'svelte/store';
  import Selection from '$lib/selection/Selection.svelte';
  import Creation from '$lib/creation/Creation.svelte';
  import Signup from '$lib/signup/Signup.svelte';

  const text = writable('');
  const section = writable<'selection' | 'creation' | 'signup'>('selection');

  // Generate QR code on text change
  $: generateQRCode($text);

  function handleFormatSelect() {
    section.set('creation');
  }
  function handleBack() {
    section.set('selection');
  }
  function handleCreate() {
    section.set('signup');
  }
  function handleSignupBack() {
    section.set('creation');
  }
</script>
<div class="min-h-screen flex items-center justify-center bg-gray-950 text-white">
  <div class="bg-gray-900 rounded-2xl shadow-2xl p-16 flex flex-col items-center w-full max-w-4xl">
    <div class="flex items-center justify-center w-full mb-16">
      <span class="font-bold text-3xl">Selection</span>
      <span class="mx-4 text-purple-400 text-3xl">&#8212;&#8212;&#8212;</span>
      <span class="font-bold text-3xl">Creation</span>
      <span class="mx-4 text-purple-400 text-3xl">&#8212;&#8212;&#8212;</span>
      <span class="font-bold text-3xl">Specialization</span>
    </div>
    {#if $section === 'selection'}
      <Selection on:formatSelect={handleFormatSelect}/>
    {:else if $section === 'creation'}
      <Creation on:back={handleBack} on:create={handleCreate}/>
    {:else if $section === 'signup'}
      <Signup on:back={handleSignupBack}/>
    {/if}
  </div>
</div>
