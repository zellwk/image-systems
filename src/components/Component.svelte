<script>
  // The prop approach: the page optimizes the image with `getImage` (or
  // Splendid's `img` utility) and passes the result in. We unpack the
  // attributes and write the `img` tag ourselves.
  const { image, alt } = $props()
  const { src, attributes, srcSet } = image
</script>

<img {...attributes} {src} {alt} srcset={srcSet.attribute} />
