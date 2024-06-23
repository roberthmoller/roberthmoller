<script>
    import Card from '$lib/card.svelte';
    import SvelteMarkdown from 'svelte-markdown'
    import Repository from '$lib/repository.svelte'
    import {base} from '$app/paths'
    const {data} = $props();
    const {profile, readme, repositories} = data;
</script>


<main class="grid grid-cols-5 gap-4 flex-grow">
    <Card class="md:col-span-2">
        <img src="{base}/profile.png" class="h-full object-cover" alt="{profile.name}s profile photo"/>
    </Card>

    <Card class="md:col-span-3 p-4">
        <sub class="text-gray-400 font-mono">{profile.login} / README.md</sub>
        <main class="mt-4 prose text-white prose-headings:text-white prose-a:underline prose-a:text-white overflow-ellipsis aspect-[4/2] ">
            <SvelteMarkdown source={readme.content}/>
        </main>
    </Card>

    <!--    <Card class="md:col-span-1 p-4">-->
    <!--        <h1>Achievements</h1>-->
    <!--    </Card>-->

    <Card class="col-span-5 p-4">
        <h1 class="text-2xl">Contributions</h1>
        <img class="w-full" src="https://ghchart.rshah.org/roberthmoller" alt="{profile.name}s contributions">

    </Card>

    <Card class="col-span-5 p-4">
        <h1 class="text-2xl">Repositories</h1>
        <ul class="grid grid-cols-2 gap-4 mt-2">
            {#each repositories.slice(0, 6) as repo}
                <li>
                    <Repository {repo}/>
                </li>
            {/each}
        </ul>
    </Card>

</main>