(function () {
  const path = location.pathname.split("/").pop() || "index.html";
  const header = `
  <header>
    <div class="wrap nav">
      <a class="logo" href="index.html">Amberlane <em>Spa</em></a>
      <button class="burger" id="burger" aria-label="Menu">☰</button>
      <ul class="menu" id="menu">
        <li><a href="index.html">Home</a></li>
        <li class="has-drop">
          <button class="drop-btn" type="button">Rituals ▾</button>
          <div class="drop">
            <a href="rituals.html">All rituals</a>
            <a href="rituals.html?cat=massage">Massage</a>
            <a href="rituals.html?cat=facial">Facials</a>
            <a href="rituals.html?cat=body">Body</a>
            <a href="amber-stone.html">Amber Stone</a>
            <a href="rose-quartz.html">Rose Quartz Facial</a>
          </div>
        </li>
        <li class="has-drop">
          <button class="drop-btn" type="button">The House ▾</button>
          <div class="drop">
            <a href="the-house.html">Rooms & courtyard</a>
            <a href="membership.html">Membership</a>
            <a href="hours.html">Hours & visit</a>
            <a href="gift.html">Gift certificates</a>
          </div>
        </li>
        <li class="has-drop">
          <button class="drop-btn" type="button">Visit ▾</button>
          <div class="drop">
            <a href="stories.html">Guest stories</a>
            <a href="team.html">Therapists</a>
            <a href="faq.html">FAQ</a>
            <a href="contact.html">Contact</a>
          </div>
        </li>
        <li><a class="btn" href="book.html" style="padding:10px 18px">Book</a></li>
      </ul>
    </div>
  </header>`;
  const footer = `
  <footer>
    <div class="wrap">
      <div class="fgrid">
        <div>
          <div class="logo">Amberlane <em style="color:#e8b4bc">Spa</em></div>
          <p style="color:#c9b8a8;margin-top:10px">Restorative rituals in a private townhouse. Phones stay at the desk.</p>
        </div>
        <div>
          <strong>Explore</strong>
          <a href="rituals.html">Rituals</a>
          <a href="the-house.html">The House</a>
          <a href="membership.html">Membership</a>
          <a href="gift.html">Gifts</a>
        </div>
        <div>
          <strong>Visit</strong>
          <a href="hours.html">Hours</a>
          <a href="team.html">Therapists</a>
          <a href="faq.html">FAQ</a>
          <a href="book.html">Book</a>
        </div>
        <div>
          <strong>Contact</strong>
          <a href="mailto:hello@amberlane.example">hello@amberlane.example</a>
          <a href="tel:+18005550142">+1 800 555 0142</a>
          <p style="color:#c9b8a8;margin-top:8px">18 Willow Lane<br />Westbridge</p>
        </div>
      </div>
      <p class="copy">© 2026 Amberlane Spa & Wellness. All rights reserved.</p>
    </div>
  </footer>
  <div class="toast" id="toast">Ritual selected. Complete the form to hold a time.</div>`;
  document.body.insertAdjacentHTML("afterbegin", header);
  document.body.insertAdjacentHTML("beforeend", footer);
  const menu = document.getElementById("menu");
  document.getElementById("burger").onclick = () => menu.classList.toggle("open");
  document.querySelectorAll(".has-drop > .drop-btn").forEach((btn) => {
    btn.onclick = (e) => {
      if (window.innerWidth <= 900) {
        e.preventDefault();
        btn.parentElement.classList.toggle("open");
      }
    };
  });
  document.querySelectorAll("#menu a").forEach((a) => {
    const href = (a.getAttribute("href") || "").split("?")[0];
    if (href === path) a.classList.add("active");
    a.addEventListener("click", () => menu.classList.remove("open"));
  });
})();
