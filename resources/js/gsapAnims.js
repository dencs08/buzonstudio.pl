import { gsap } from "gsap";

const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

gsap.fromTo(".gsap-left-to-right-slide-in", { x: "-30%" }, { x: "0%", duration: 1 });
gsap.fromTo(".gsap-right-to-left-slide-in", { x: "30%" }, { x: "0%", duration: 1 });
gsap.fromTo(".gsap-botton-to-top-slide-in", { y: "150%" }, { y: "0%", duration: 1 });
gsap.fromTo(".gsap-top-to-bottom-slide-in", { y: "-150%" }, { y: "0%", duration: 1 });
gsap.fromTo(".gsap-fade-in", { opacity: 0 }, { opacity: 1, duration: 1 });

gsap.set(".section_aboutus_phonemockup", { opacity: 0 })
gsap.set(".section_aboutus_phonemockup_content", { opacity: 0 })