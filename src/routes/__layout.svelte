<script>
import "../app.css";
import Hero from "$lib/hero.svelte";
import Footer from "$lib/footer.svelte";
import Content from "$lib/content.svelte";
import FeatureList from "$lib/feature-list.svelte";
</script>


<Hero />
<main>
  <slot />
  <Content />
  <FeatureList />
</main>
<Footer />