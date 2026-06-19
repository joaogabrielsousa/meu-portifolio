
  // ── helpers ──
  const wait = ms => new Promise(r => setTimeout(r, ms));
  const el   = id => document.getElementById(id);

  // ── REDIRECT URL — altere aqui ──
  const REDIRECT_URL = 'https://meu-cartao-ten.vercel.app'; // URL de destino do redirect
  const REDIRECT_DELAY = 2200; // ms da barra de progresso

  async function runIntro() {

    // 1. Icon entra
    await wait(200);
    el('icon-wrap').classList.add('visible');

    // 2. Chevron se desenha
    await wait(400);
    el('chevron-path').classList.add('drawn');

    // 3. Cursor aparece piscando
    await wait(1100);
    el('cursor-rect').classList.add('blink');
    el('cursor-rect').classList.add('solid');

    // 4. Lockup sobe
    await wait(800);
    el('lockup-wrap').classList.add('visible');

    // 5. Nome aparece
    await wait(300);
    el('wm-name').classList.add('visible');

    // 6. Sub + barras
    await wait(320);
    el('wm-sub').classList.add('visible');
    await wait(80);
    el('bar1').classList.add('visible');
    await wait(100);
    el('bar2').classList.add('visible');

    // 7. Hint de redirect
    await wait(600);
    el('hint').classList.add('visible');
    el('progress-track').classList.add('visible');

    // 8. Barra de progresso animada
    await wait(50);
    el('progress-fill').style.transition = `width ${REDIRECT_DELAY}ms linear`;
    el('progress-fill').style.width = '100%';

    // 9. Fade out e redirect
    await wait(REDIRECT_DELAY + 200);
    el('stage').classList.add('fade-out');

    await wait(800);
    window.location.href = REDIRECT_URL;
  }

  runIntro();