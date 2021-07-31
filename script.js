let hydra, hydraCanvas;
hydraCanvas = document.createElement("canvas");
hydraCanvas.width = 512;
hydraCanvas.height = 512;
hydraCanvas.id = "hydraCanvas";

hydra = new Hydra({
  canvas: hydraCanvas,
  detectAudio: false,
  enableStreamCapture: false,
  width: 512,
  height: 512,
});

const codeblocks = document.getElementsByClassName("codeblock");

for(const cb of codeblocks) {
  const cd = cb.querySelector("div");
  cd.style.width = "512px";
  cd.style.height = "512px";
  cd.style.left = "50%";
  cd.style.position = "relative";
  cd.style.transform = "translate(-50%, 0%)";

  var observer = new IntersectionObserver(function (entries) {
    if (entries[0].isIntersecting === true) {
      hush();
      solid(0,0,0,0).out(o0)
      solid(0,0,0,0).out(o1)
      solid(0,0,0,0).out(o2)
      solid(0,0,0,0).out(o3)
      render(o0);
      setTimeout(()=>{
        eval(cb.querySelector("code").textContent)
      }, 60);
      cd.appendChild(hydraCanvas);
    }
  }, { threshold: [0.7] });

  observer.observe(cb);
}
      