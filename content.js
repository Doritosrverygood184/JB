(function() {
  console.log("[PrivateServerJoin] Script started.");

  const playBtnSelector = 'button.btn-common-play-game-lg.btn-primary-md.btn-full-width[data-testid="play-button"]';
  const privateServerBtnSelector = 'button.rbx-private-game-server-join.game-server-join-btn';

  function moveButtons() {
    const url = window.location.href;

    if (!url.includes("/game-instances")) {
      console.log("[PrivateServerJoin] Not on private server list page, skipping...");
      return;
    }

    const playBtn = document.querySelector(playBtnSelector);
    const privateBtn = document.querySelector(privateServerBtnSelector);

    if (!playBtn) {
      console.log("[PrivateServerJoin] Play button not found yet.");
      return;
    }
    if (!privateBtn) {
      console.log("[PrivateServerJoin] Private server Join button not found yet.");
      return;
    }

    if (privateBtn.dataset.moved === "true") {
      return;
    }

    playBtn.style.width = "66.66%";
    playBtn.style.display = "inline-block";
    playBtn.style.verticalAlign = "middle";

    privateBtn.style.width = "33.33%";
    privateBtn.style.backgroundColor = "#d9534f";
    privateBtn.style.borderColor = "#d43f3a";
    privateBtn.style.color = "white";
    privateBtn.style.display = "inline-block";
    privateBtn.style.marginLeft = "6px";
    privateBtn.style.verticalAlign = "middle";
    privateBtn.style.cursor = "pointer";

    playBtn.parentNode.insertBefore(privateBtn, playBtn.nextSibling);

    privateBtn.dataset.moved = "true";

    console.log("[PrivateServerJoin] Moved private server Join button next to Play button.");
  }

  moveButtons();

  const observer = new MutationObserver(() => {
    moveButtons();
  });

  observer.observe(document.body, { childList: true, subtree: true });

  console.log("[PrivateServerJoin] MutationObserver started.");
})();
