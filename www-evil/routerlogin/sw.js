const SNIPPET = `<script>
console.log("All your base are belong to us");
</script>
<iframe width="560" height="315"
src="https://www.youtube.com/embed/8410qUT4QtA?autoplay=1" frameborder="0"
allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%)"
allowfullscreen></iframe>`;

self.addEventListener("fetch", (event) => {
  event.respondWith((async () => {
    const response = await fetch(event.request);

    if (response.status !== 200 || event.request.destination !== "document") {
      return response;
    }

    const contentType = response.headers.get("Content-Type");
    if (!contentType || contentType.split(";")[0].toLowerCase() !== "text/html") {
      return response;
    }

    const body = await response.blob();
    const bodyText = await body.text();

    return new Response(SNIPPET + bodyText, response);
  })());
});
