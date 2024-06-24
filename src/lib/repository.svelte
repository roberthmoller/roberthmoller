<script>
    import {Repo16, Star16, RepoForked24} from 'svelte-oct';
    import {base} from '$app/paths'
    function capitalize(value) {
        return value.charAt(0).toUpperCase() + value.slice(1);
    }

    const {repo} = $props();
</script>

<a href="{repo.html_url.replace('https://', '//')}">
    <article class="rounded-xl bg-[#292929] shadow p-5 h-full flex flex-col">
        <header class="flex flex-row items-center gap-2">
            <Repo16 size="18"/>
            <span class="font-bold">{repo.name}</span>
            {#if repo.archived}
                <span class="text-xs text-sub border-[1px] rounded-2xl px-2 py-0.5 text-yellow-500 border-yellow-500">{capitalize(repo.visibility)}
                    Archive</span>
            {:else}
                <span class="text-xs text-sub border-[1px] rounded-2xl px-2 py-0.5">{capitalize(repo.visibility)}</span>
            {/if}
        </header>
        <p class="mb-4 mt-1 text-sub flex-grow">{repo.description}</p>
        <footer class="flex flex-row gap-2 items-center text-sub">
            <Star16 size="18"/> {repo.watchers_count}
            <RepoForked24 size="18"/> {repo.forks}
            <span class="flex-grow"></span>
            <span>{repo.language}</span>
        </footer>
    </article>
</a>