function initSearchTo() {
    document.querySelector(".input-search").addEventListener("input", function () {
        const e = document.querySelector(".container");
        "" !== this.value.trim() ? e.classList.add("container__search") : e.classList.remove("container__search");
        const t = this.value.toLowerCase();
        document.querySelectorAll(".box").forEach((e) => {
            const n = e.querySelectorAll(".element");
            let o = !1;
            n.forEach((e) => {
                const n = (e.getAttribute("data-search")?.toLowerCase() || "").includes(t);
                (e.style.display = n ? "" : "none"), n && (o = !0);
            }),
                (e.style.display = o ? "" : "none");
        });
    });
}
initSearchTo();