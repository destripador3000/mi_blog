function buildDork() {
  const query = document.getElementById("query").value.trim();
  const target = document.getElementById("target").value;
  const filetype = document.getElementById("filetype").value;
  const site = document.getElementById("site").value.trim();
  const exclude = document.getElementById("exclude").value.trim();

  let dork = "";

  if (query) {
    dork += `"${query}" `;
  }

  if (filetype) {
    dork += `filetype:${filetype} `;
  }

  if (site) {
    dork += `site:${site} `;
  }

  if (exclude) {
    exclude.split(" ").forEach(word => {
      dork += `-${word} `;
    });
  }

  if (target === "person") {
    dork += `intitle:"CV" OR intitle:"perfil" `;
  }

  if (target === "company") {
    dork += `intitle:"empresa" OR intitle:"company" `;
  }

  const finalDork = dork.trim();
  document.getElementById("dorkOutput").textContent = finalDork;

  if (finalDork.length > 0) {
    const googleUrl = `https://www.google.com/search?q=${encodeURIComponent(finalDork)}`;
    window.open(googleUrl, "_blank");
  }
}
