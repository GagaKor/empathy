<script lang="ts">
  import { streamChat } from '$lib/api';
  let messages: string[] = [];
  let input = '';
  function send() {
    const sse = streamChat(input);
    sse.onmessage = (e) => {
      messages = [...messages, e.data];
    };
  }
</script>

<h1 class="text-2xl">Empathy Chat</h1>
<div class="flex gap-2">
  <input class="border p-1" bind:value={input} />
  <button class="bg-blue-500 text-white px-2" on:click={send}>Send</button>
</div>
<ul>{#each messages as m}<li>{m}</li>{/each}</ul>
