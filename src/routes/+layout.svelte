<script>
    import "../app.scss";
    import {
        MarkGithub16,
        ThreeBars16,
        Plus16,
        GitPullRequest16,
        Copilot16,
        Inbox16,
        Person16,
        Book16,
        Star16,
        Package16,
        Repo16,
        People16,
        Location16,
        Mail16,
        Link16,
        Organization16,
        Project16
    } from 'svelte-oct';
    import {page} from '$app/stores';

    const {data, children} = $props();
    const {profile} = data;
</script>

<div class="flex flex-row p-4 gap-4 h-full">
    <nav class="h-[97vh] sticky top-4 flex flex-col items-center gap-4">
        <MarkGithub16 size="32"/>
        <span class="bg-[#292929] p-2 rounded-xl "><ThreeBars16 size="18"/></span>
        <span class="flex-grow"></span>
        <!--Only if logged int-->
        <Plus16 size="18"/>
        <GitPullRequest16 size="18"/>
        <Copilot16 size="18"/>
        <Inbox16 size="18"/>
        <!--Logged in user-->
        <Person16 size="18"/>
    </nav>
    <nav class="h-[97vh] sticky top-4 flex flex-col bg-card border-border shadow-2xl p-2 rounded-2xl w-[28em]">
        <header class="mb-6 p-4">
            <h1 class="text-2xl">{profile.name}</h1>
            <h3 class="sub-title">{profile.login}</h3>
        </header>

        <ul>
            <li class=" px-4 py-3 rounded-xl w-full" class:bg-[#292929]={$page.url.pathname === "/"}>
                <a href="/" class="flex flex-row gap-4 items-center">
                    <Book16 size="18"/>
                    <span>Overview</span>
                </a>
            </li>
            <li class="px-4 py-3 rounded-xl w-full" class:bg-[#292929]={$page.url.pathname === "/repositories"}>
                <a href="/repositories" class="flex flex-row gap-4 items-center">
                    <Repo16 size="18"/>
                    <span>Repositories</span>
                </a>
            </li>
            <li class="px-4 py-3 rounded-xl w-full" class:bg-[#292929]={$page.url.pathname === "/projects"}>
                <a href="/projects" class="flex flex-row gap-4 items-center">
                    <Project16 size="18"/>
                    <span>Projects</span>
                </a>
            </li>
            <li class="px-4 py-3 rounded-xl w-full" class:bg-[#292929]={$page.url.pathname === "/packages"}>
                <a href="/packages" class="flex flex-row gap-4 items-center">
                    <Package16 size="18"/>
                    <span>Packages</span>
                </a>
            </li>
            <li class="px-4 py-3 rounded-xl w-full" class:bg-[#292929]={$page.url.pathname === "/stars"}>
                <a href="/stars" class="flex flex-row gap-4 items-center">
                    <Star16 size="18"/>
                    <span>Stars</span>
                </a>
            </li>
        </ul>
        <span class="flex-grow"></span>
        <ul class="flex flex-col gap-2 p-4 text-zinc-400">
            {#if profile.company}
                <li class="flex flex-row gap-4">
                    <Organization16 size="18"/>
                    {profile.company}
                </li>
            {/if}
            {#if profile.email}
                <li class="flex flex-row gap-4">
                    <Mail16 size="18"/>
                    {profile.email}
                </li>
            {/if}
            {#if profile.location}
                <li class="flex flex-row gap-4">
                    <Location16 size="18"/>
                    {profile.location}
                </li>
            {/if}
            {#if profile.blog}
                <li class="flex flex-row gap-4">
                    <Link16 size="18"/>
                    <a href="{profile.blog}">{profile.blog}</a>
                </li>
            {/if}
        </ul>
        <hr/>
        <span class="flex flex-row gap-4 p-4 items-center">
            <People16 size="18"/>
            <ul class="flex flex-row gap-2 text-zinc-400">
                <li><span class="text-white">{profile.followers}</span> followers</li>
                <li>·</li>
                <li><span class="text-white">{profile.following}</span> following</li>
            </ul>
        </span>
        <!--





        -->
        <button class="outline outline-1 px-2 py-1 m-2 text-lg rounded-lg">Follow</button>
    </nav>

    <main class="flex-grow">
        {@render children()}
    </main>
</div>

