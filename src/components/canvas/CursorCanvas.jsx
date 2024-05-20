import React, { useEffect, useRef } from 'react';
import './CursorCanvas.css';

const CursorCanvas = () => {
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const mouse = useRef({ x: undefined, y: undefined });
  const hue = useRef(0);
  const animationFrameId = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const resizeReset = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeReset();

    

    const mousemove = (e) => {
      mouse.current.x = e.x;
      mouse.current.y = e.y;
    };

    const mouseout = () => {
      mouse.current.x = undefined;
      mouse.current.y = undefined;
    };

    const animationLoop = () => {
      if (mouse.current.x !== undefined && mouse.current.y !== undefined) {
        hue.current += 2;
        particles.current.push(new Particle(mouse.current.x, mouse.current.y));
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = 'lighter';

      drawScene();
      arrayCleanup();
      animationFrameId.current = requestAnimationFrame(animationLoop);
    };

    const arrayCleanup = () => {
      particles.current = particles.current.filter(particle => particle.radius > 0);
    };

    const drawScene = () => {
      particles.current.forEach(particle => {
        particle.update();
        particle.draw();
      });
    };

    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radius = 5;
        this.size = 0;
        this.rotate = 0;
        this.hue = hue.current % 360;
        this.alpha = 0.5;
      }

      setPoint() {
        this.point = [];
        for (let a = 0; a < 360; a += 36) {
          let d = (a % 72 === 0) ? this.size : this.size / 2;
          let r = (Math.PI / 180) * (a + this.rotate);
          let x = this.x + d * Math.sin(r);
          let y = this.y + d * Math.cos(r);
          this.point.push({ x, y, r: this.radius });
        }
      }

      draw() {
        if (this.radius <= 0) return;

        this.point.forEach(p => {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(${this.hue}, 100%, 50%, ${this.alpha})`;
          ctx.fill();
          ctx.closePath();
        });

        ctx.beginPath();
        for (let i = 0; i < this.point.length; i++) {
          if (i === 0) {
            ctx.moveTo(this.point[i].x, this.point[i].y);
          } else {
            ctx.lineTo(this.point[i].x, this.point[i].y);
          }
        }
        ctx.closePath();
        ctx.strokeStyle = `hsla(${this.hue}, 100%, 50%, ${this.alpha})`;
        ctx.stroke();
      }

      update() {
        this.setPoint();
        this.radius -= 0.05;
        this.size += 0.5;
        this.rotate -= 1;
        this.alpha = Math.max(0, Math.min(0.5, this.radius * 0.5));
      }
    }

    const init = () => {
      window.addEventListener('resize', resizeReset);
      window.addEventListener('mousemove', mousemove);
      window.addEventListener('mouseout', mouseout);
      animationLoop();
    };

    init();

    return () => {
      window.removeEventListener('resize', resizeReset);
      window.removeEventListener('mousemove', mousemove);
      window.removeEventListener('mouseout', mouseout);
      cancelAnimationFrame(animationFrameId.current);
    };
  }, []);

  return <canvas id="canvas" ref={canvasRef}></canvas>;
};

export default CursorCanvas;
