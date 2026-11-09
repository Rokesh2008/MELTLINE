/* MELTLINE static runtime loader */
(async () => {
  const loadGzipText = async (url) => {
    if (!("DecompressionStream" in window)) {
      throw new Error("This browser does not support the required gzip streaming API. Please use a recent version of Chrome, Edge, Firefox or Safari.");
    }
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Could not load ${url}: HTTP ${response.status}`);
    const stream = response.body.pipeThrough(new DecompressionStream("gzip"));
    return await new Response(stream).text();
  };
  try {
    const [css, js] = await Promise.all([
      loadGzipText("./styles.css.gz"),
      loadGzipText("./app.js.gz")
    ]);
    const style = document.createElement("style");
    style.id = "meltline-runtime-styles";
    style.textContent = css;
    document.head.appendChild(style);
    const blob = new Blob([js], { type: "text/javascript" });
    const script = document.createElement("script");
    script.src = URL.createObjectURL(blob);
    script.onload = () => URL.revokeObjectURL(script.src);
    document.body.appendChild(script);
  } catch (error) {
    const app = document.getElementById("app");
    app.innerHTML = '<main style="font:16px system-ui;padding:48px;max-width:760px;margin:auto"><h1>MELTLINE could not start</h1><p>The compressed application assets could not be loaded. Check the deployment and reload the page.</p><pre style="white-space:pre-wrap;background:#eee;padding:16px;border-radius:8px"></pre></main>';
    app.querySelector("pre").textContent = String(error);
  }
})();