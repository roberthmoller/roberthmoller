<script>
    const {class: classes, children, ...props} = $props();
</script>

<section class="{classes} overflow-hidden bg-card rounded-xl border-[1px] shadow-2xl border-border" {...props}>
    {@render children()}
</section>