<script>
    import {Repo16, Star16, RepoForked24} from 'svelte-oct';

    function capitalize(value) {
        return value.charAt(0).toUpperCase() + value.slice(1);
    }

    const {repo} = $props();
</script>

<article class="rounded-xl bg-[#292929] shadow p-5 h-full">
    <header class="flex flex-row items-center gap-2">
        <Repo16 size="18"/>
        <span>{repo.name}</span>
        {#if repo.archived}
            <span>({capitalize(repo.visibility)} Archive)</span>
        {:else}
            <span>({capitalize(repo.visibility)})</span>
        {/if}
    </header>
    <p class="mb-4">{repo.description}</p>
    <footer class="flex flex-row gap-2 items-center">
        <Star16 size="18"/> {repo.watchers_count}
        <RepoForked24 size="18"/> {repo.forks}
    </footer>
</article>