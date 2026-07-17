<!--
  Framework components can't use Astro's image components directly.
  Instead, build the image in Astro and pass it in through a named slot.
-->
<div class="card vertical gap-2">
  <slot name="image" />
  <div class="vertical gap-1">
    <slot />
  </div>
</div>
