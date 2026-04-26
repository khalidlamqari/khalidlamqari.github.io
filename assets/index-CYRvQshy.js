(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const t of o)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function c(o){const t={};return o.integrity&&(t.integrity=o.integrity),o.referrerPolicy&&(t.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?t.credentials="include":o.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(o){if(o.ep)return;o.ep=!0;const t=c(o);fetch(o.href,t)}})();const M=[];function N(){return localStorage.getItem("theme")||"light"}function B(e){localStorage.setItem("theme",e);const a=document.documentElement;e==="dark"?(a.classList.add("dark"),a.style.colorScheme="dark"):(a.classList.remove("dark"),a.style.colorScheme="light"),M.forEach(c=>c(e))}function K(){const e=N()==="dark"?"light":"dark";return B(e),e}function J(){B(N())}function Q(e){return M.push(e),()=>{const a=M.indexOf(e);a!==-1&&M.splice(a,1)}}function Y(){if(window.matchMedia("(hover: none), (pointer: coarse)").matches)return;const e=document.createElement("div");e.className="cursor-dot",document.body.appendChild(e);const a=document.createElement("div");a.className="cursor-ring",document.body.appendChild(a);let c=window.innerWidth/2,s=window.innerHeight/2,o=c,t=s;window.addEventListener("mousemove",i=>{c=i.clientX,s=i.clientY,e.style.left=c+"px",e.style.top=s+"px"});function l(){o+=(c-o)*.18,t+=(s-t)*.18,a.style.left=o+"px",a.style.top=t+"px",requestAnimationFrame(l)}l();const r='a, button, [role="button"], .hoverable, input, textarea, select';document.addEventListener("mouseover",i=>{i.target.closest(r)&&(a.classList.add("hover"),e.classList.add("hover"))}),document.addEventListener("mouseout",i=>{i.target.closest(r)&&(a.classList.remove("hover"),e.classList.remove("hover"))}),document.addEventListener("mousemove",i=>{document.querySelectorAll(".bento-card").forEach(h=>{const n=h.getBoundingClientRect(),u=(i.clientX-n.left)/n.width*100,g=(i.clientY-n.top)/n.height*100;h.style.setProperty("--mx",`${u}%`),h.style.setProperty("--my",`${g}%`)})}),document.addEventListener("mouseleave",()=>{e.style.opacity="0",a.style.opacity="0"}),document.addEventListener("mouseenter",()=>{e.style.opacity="1",a.style.opacity="1"})}const Z={nav:{about:"About",skills:"Skills",projects:"Projects",education:"Education",contact:"Contact"},hero:{greeting:"Hi, I'm",name:"Khalid Lamqari",subtitles:["Backend Developer","Fullstack Engineer","Systems Programmer"],bio:"Software engineering student at 1337 (École 42 / UM6P), currently in the 42 Advanced Part. Passionate about high-performance backend systems and fullstack web applications.",viewProjects:"View Projects",contactMe:"Contact Me"},about:{title:"About Me",description1:"I am a software engineering student at <strong>1337 Coding School</strong> (École 42 / UM6P network), an intensive peer-to-peer, project-based program. Completed the <strong>Common Core at 100%</strong> and currently in the <strong>42 Advanced Part</strong>.",description2:"Proficient in <strong>React, Spring Boot, Fastify, PostgreSQL</strong> and <strong>Docker</strong>. Passionate about backend, distributed systems and low-level programming. Seeking an internship or junior position in backend / fullstack development.",location:"Morocco",phone:"+212 6 18 80 49 55",email:"khalidlamqari@gmail.com",github:"github.com/khalidlamqari",spokenLanguages:"Spoken Languages",arabic:"Arabic",english:"English",french:"French",downloadCV:"Download CV",downloadCVEn:"CV English",downloadCVFr:"CV Français",statLevel:"42 Level",statProjects:"Projects",statCommonCore:"Common Core"},skills:{title:"Skills",programmingLangs:"Programming Languages",webFrameworks:"Web & Frameworks",databases:"Databases",tools:"Tools & Technologies"},projects:{title:"Projects",viewLive:"Live",showMore:"Show more projects",showLess:"Show less",inProgress:"in progress",moreHeading:"1337 / 42 curriculum",zetaspace:{name:"ZetaSpace.net",desc:"Full-stack platform for math courses, exams and live tests. Features user management, real-time scoring, and course administration."},gymadmin:{name:"GymAdmin",desc:"Web application for managing gym members and subscriptions. Handles member registration, subscription tracking, and payment management."},transcendence:{name:"ft_transcendence",desc:"Microservices-based platform featuring Pong, typing games, chat, tournaments, notifications, and multi-language support. Fully containerized."},webserver:{name:"C++ Web Server",desc:"HTTP server built from scratch inspired by Nginx — sockets, parsing, multithreading. Unix shell with pipes, redirections and signals."},cub3d:{name:"Cub3D",desc:"3D map and player rendering using only the C programming language and the raycasting algorithm."},minishell:{name:"Minishell",desc:"Functional Unix shell with command execution, environment variables, pipes, I/O redirections, and signal handling. Deep dive into process management."},inception:{name:"Inception",desc:"Multi-service Docker infrastructure with NGINX (SSL/TLS), WordPress + php-fpm, and MariaDB. Fully orchestrated with Docker Compose inside a personal VM."},philosophers:{name:"Philosophers",desc:"Dining Philosophers concurrency problem solved with threads and mutexes. No deadlocks, no race conditions — also implemented a multiprocess version."},netpractice:{name:"NetPractice",desc:"Hands-on networking labs covering IP addressing, subnet masks, default gateways, routing and OSI layers troubleshooting."},pushswap:{name:"push_swap",desc:"Sorting data across two stacks with the fewest possible moves. Implemented multiple algorithms and selected the optimal strategy per case."},pipex:{name:"pipex",desc:"Recreated the shell operator < in cmd1 | cmd2 > out. Deep dive into pipes, dup2 and process chaining."},libft:{name:"Libft",desc:"Reimplemented core functions from the C standard library plus additional utilities (linked lists, memory, strings) reused in every subsequent project."},ftprintf:{name:"ft_printf",desc:"Recoded printf from scratch with full variadic argument handling, conversion specifiers and format flags."},solong:{name:"so_long",desc:"Small 2D tile-based game built with MiniLibX — textures, sprites, map parsing, validation and event loop."},born2beroot:{name:"Born2beroot",desc:"Debian VM hardened from scratch: LVM partitioning, SSH, UFW firewall, sudo policy, cron jobs and strict password rules."}},education:{title:"Education",school1:{name:"1337 Coding School — École 42 Network",period:"2023 — Present",desc:"Intensive peer-to-peer, project-based software engineering program focused on system programming, algorithms, networking and infrastructure. Completed the Common Core at 100% — currently in the 42 Advanced Part (level 11.51 / 21)."},school2:{name:"Python Developer Certificate — OFPPT, Morocco",period:"2021 — 2022",desc:"Fundamental Python programming, data structures and practical application development."},school3:{name:"Specialized IT Network Technician — OFPPT, Morocco",period:"2020 — 2021",desc:"Network infrastructure, administration, routing, troubleshooting and security fundamentals."}},contact:{title:"Let's Connect",subtitle:"I'm open to opportunities, collaborations, and interesting projects. Don't hesitate to reach out.",emailLabel:"Email",phoneLabel:"Phone",locationLabel:"Location",githubLabel:"GitHub",downloadResume:"Download Resume",cvEnglish:"CV English",cvFrench:"CV Français",sendEmail:"Send Email"}},ee={nav:{about:"À propos",skills:"Compétences",projects:"Projets",education:"Formation",contact:"Contact"},hero:{greeting:"Bonjour, je suis",name:"Khalid Lamqari",subtitles:["Développeur Backend","Ingénieur Fullstack","Programmeur Systèmes"],bio:"Étudiant en génie logiciel à 1337 (École 42 / UM6P), actuellement en Partie Avancée de 42. Passionné par les systèmes backend haute performance et les applications web fullstack.",viewProjects:"Voir les projets",contactMe:"Me contacter"},about:{title:"À propos de moi",description1:"Je suis étudiant en génie logiciel à <strong>1337 Coding School</strong> (réseau École 42 / UM6P), un programme intensif par les pairs et par les projets. <strong>Tronc commun terminé à 100%</strong> — actuellement en <strong>Partie Avancée de 42</strong>.",description2:"Maîtrise de <strong>React, Spring Boot, Fastify, PostgreSQL</strong> et <strong>Docker</strong>. Passionné par le backend, les systèmes distribués et la programmation bas niveau. À la recherche d'un stage ou d'un poste junior en développement backend / fullstack.",location:"Maroc",phone:"+212 6 18 80 49 55",email:"khalidlamqari@gmail.com",github:"github.com/khalidlamqari",spokenLanguages:"Langues parlées",arabic:"Arabe",english:"Anglais",french:"Français",downloadCV:"Télécharger CV",downloadCVEn:"CV English",downloadCVFr:"CV Français",statLevel:"Niveau 42",statProjects:"Projets",statCommonCore:"Tronc commun"},skills:{title:"Compétences",programmingLangs:"Langages de programmation",webFrameworks:"Web & Frameworks",databases:"Bases de données",tools:"Outils & Technologies"},projects:{title:"Projets",viewLive:"Voir",showMore:"Voir plus de projets",showLess:"Voir moins",inProgress:"en cours",moreHeading:"Cursus 1337 / 42",zetaspace:{name:"ZetaSpace.net",desc:"Plateforme fullstack pour cours de maths, examens et tests en direct. Gestion des utilisateurs, notation en temps réel et administration des cours."},gymadmin:{name:"GymAdmin",desc:"Application web pour la gestion des membres de salle de sport et des abonnements. Inscription des membres, suivi des abonnements et gestion des paiements."},transcendence:{name:"ft_transcendence",desc:"Plateforme microservices avec Pong, jeux de frappe, chat, tournois, notifications et support multilingue. Entièrement conteneurisée."},webserver:{name:"Serveur Web C++",desc:"Serveur HTTP construit de zéro, inspiré de Nginx — sockets, parsing, multithreading. Shell Unix avec pipes, redirections et signaux."},cub3d:{name:"Cub3D",desc:"Rendu 3D de carte et joueur en C pur avec l'algorithme de raycasting."},minishell:{name:"Minishell",desc:"Shell Unix fonctionnel avec exécution de commandes, variables d'environnement, pipes, redirections E/S et gestion des signaux."},inception:{name:"Inception",desc:"Infrastructure Docker multi-services avec NGINX (SSL/TLS), WordPress + php-fpm et MariaDB. Orchestration complète via Docker Compose dans une VM personnelle."},philosophers:{name:"Philosophers",desc:"Problème des philosophes résolu avec threads et mutexes. Aucun deadlock, aucune race condition — version multiprocessus implémentée également."},netpractice:{name:"NetPractice",desc:"Exercices pratiques de réseau : adressage IP, masques de sous-réseaux, passerelles, routage et dépannage aux différentes couches OSI."},pushswap:{name:"push_swap",desc:"Tri de données sur deux piles avec un nombre minimal de mouvements. Plusieurs algorithmes implémentés et sélection de la stratégie optimale par cas."},pipex:{name:"pipex",desc:"Recréation de l'opérateur shell < in cmd1 | cmd2 > out. Immersion dans les pipes, dup2 et le chaînage de processus."},libft:{name:"Libft",desc:"Réimplémentation des fonctions de la libc + utilitaires additionnels (listes chaînées, mémoire, chaînes) réutilisés dans tous les projets suivants."},ftprintf:{name:"ft_printf",desc:"Recodage complet de printf avec gestion des arguments variadiques, spécificateurs de conversion et flags de format."},solong:{name:"so_long",desc:"Petit jeu 2D basé sur des tuiles avec MiniLibX — textures, sprites, parsing de cartes, validation et boucle d'événements."},born2beroot:{name:"Born2beroot",desc:"VM Debian sécurisée de zéro : partitionnement LVM, SSH, pare-feu UFW, politique sudo, tâches cron et règles de mots de passe strictes."}},education:{title:"Formation",school1:{name:"1337 Coding School — Réseau École 42",period:"2023 — Présent",desc:"Programme intensif de génie logiciel par les pairs et par les projets, axé sur la programmation système, les algorithmes, les réseaux et l'infrastructure. Tronc commun terminé à 100% — actuellement en Partie Avancée de 42 (niveau 11.51 / 21)."},school2:{name:"Certificat Développeur Python — OFPPT, Maroc",period:"2021 — 2022",desc:"Programmation Python fondamentale, structures de données et développement d'applications pratiques."},school3:{name:"Technicien Spécialisé Réseau Informatique — OFPPT, Maroc",period:"2020 — 2021",desc:"Infrastructure réseau, administration, routage, dépannage et fondamentaux de la sécurité."}},contact:{title:"Restons en contact",subtitle:"Je suis ouvert aux opportunités, collaborations et projets intéressants. N'hésitez pas à me contacter.",emailLabel:"Email",phoneLabel:"Téléphone",locationLabel:"Localisation",githubLabel:"GitHub",downloadResume:"Télécharger CV",cvEnglish:"CV English",cvFrench:"CV Français",sendEmail:"Envoyer un email"}},te={en:Z,fr:ee};let H=localStorage.getItem("lang")||"en";const E=[];function U(){return H}function _(e){H=e,localStorage.setItem("lang",e),document.documentElement.lang=e,E.forEach(a=>a())}function w(e){return E.push(e),()=>{const a=E.indexOf(e);a!==-1&&E.splice(a,1)}}function y(){return te[H]}function v(e,a=20,c={}){const s=c.viewBox??"0 0 24 24",o=c.fill?'fill="currentColor" stroke="none"':'fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"';return`<svg width="${a}" height="${a}" viewBox="${s}" ${o}>${e}</svg>`}const d={sun:v('<circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>'),moon:v('<path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>'),github:v('<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>'),mail:v('<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 7L2 7"/>'),phone:v('<path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>'),location:v('<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>'),download:v('<path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>'),externalLink:v('<path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>'),code:v('<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>'),image:v('<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 00-2.828 0L6 21"/>'),chevronDown:v('<polyline points="6 9 12 15 18 9"/>'),chevronLeft:v('<polyline points="15 18 9 12 15 6"/>'),chevronRight:v('<polyline points="9 18 15 12 9 6"/>'),zoom:v('<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>'),arrowRight:v('<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>'),globe:v('<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10A15.3 15.3 0 0112 2z"/>'),graduation:v('<path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 1 2 3 6 3s6-2 6-3v-5"/>'),user:v('<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>'),briefcase:v('<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/>'),menu:v('<line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/>'),close:v('<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>'),play:v('<polygon points="6 3 20 12 6 21 6 3" fill="currentColor"/>',20,{fill:!0}),youtube:v('<path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>',20,{fill:!0})};function ae(){const e=document.createElement("nav");e.className="fixed top-5 left-1/2 -translate-x-1/2 z-40 w-[calc(100%-2rem)] max-w-[1200px]";function a(){var m,h,n;const o=y(),t=U(),l=N();e.innerHTML=`
      <div class="flex items-center justify-between px-3 py-2 rounded-full backdrop-blur-xl"
           style="background:color-mix(in srgb, var(--bg-elev) 75%, transparent); border:1px solid var(--border);">
        <!-- Logo -->
        <a href="#hero" class="flex items-center gap-2 pl-3 pr-1 hoverable">
          <span class="w-2 h-2 rounded-full" style="background:var(--accent);"></span>
          <span class="mono text-sm font-semibold" style="color:var(--fg);">khalid<span style="color:var(--fg-subtle);">.lamqari</span></span>
        </a>

        <!-- Desktop nav -->
        <div class="hidden md:flex items-center gap-1" id="nav-links">
          ${["about","skills","projects","education","contact"].map(u=>`
            <a href="#${u}" class="nav-link px-3 py-1.5 text-xs mono uppercase tracking-wider rounded-full transition-colors"
               style="color:var(--fg-muted);"
               data-section="${u}">
              ${o.nav[u]}
            </a>
          `).join("")}
        </div>

        <!-- Controls -->
        <div class="flex items-center gap-1">
          <!-- Lang -->
          <div class="flex items-center text-[10px] mono font-bold">
            <button id="lang-en" class="px-2 py-1 rounded-full transition-all" style="${t==="en"?"background:var(--accent);color:var(--accent-fg);":"color:var(--fg-muted);"}">EN</button>
            <span style="color:var(--fg-subtle);">/</span>
            <button id="lang-fr" class="px-2 py-1 rounded-full transition-all" style="${t==="fr"?"background:var(--accent);color:var(--accent-fg);":"color:var(--fg-muted);"}">FR</button>
          </div>

          <!-- Theme -->
          <button id="theme-toggle"
            class="w-8 h-8 rounded-full flex items-center justify-center transition-colors"
            style="color:var(--fg-muted);border:1px solid var(--border);"
            aria-label="Toggle theme">
            ${l==="dark"?d.sun:d.moon}
          </button>

          <!-- Mobile menu -->
          <button id="mobile-btn"
            class="md:hidden w-8 h-8 rounded-full flex items-center justify-center"
            style="color:var(--fg-muted);border:1px solid var(--border);">
            ${d.menu}
          </button>
        </div>
      </div>

      <!-- Mobile menu -->
      <div id="mobile-menu" class="md:hidden hidden mt-2 p-3 rounded-2xl backdrop-blur-xl"
           style="background:color-mix(in srgb, var(--bg-elev) 90%, transparent); border:1px solid var(--border);">
        <div class="flex flex-col gap-1">
          ${["about","skills","projects","education","contact"].map(u=>`
            <a href="#${u}" class="mobile-link px-3 py-2 text-sm mono uppercase tracking-wider rounded-lg"
               style="color:var(--fg-muted);">
              ${o.nav[u]}
            </a>
          `).join("")}
        </div>
      </div>
    `,(m=e.querySelector("#lang-en"))==null||m.addEventListener("click",()=>_("en")),(h=e.querySelector("#lang-fr"))==null||h.addEventListener("click",()=>_("fr")),(n=e.querySelector("#theme-toggle"))==null||n.addEventListener("click",()=>K());const r=e.querySelector("#mobile-btn"),i=e.querySelector("#mobile-menu");r==null||r.addEventListener("click",()=>i==null?void 0:i.classList.toggle("hidden")),e.querySelectorAll(".mobile-link").forEach(u=>{u.addEventListener("click",()=>i==null?void 0:i.classList.add("hidden"))}),e.querySelectorAll(".nav-link").forEach(u=>{u.addEventListener("mouseenter",()=>u.style.color="var(--fg)"),u.addEventListener("mouseleave",()=>{u.classList.contains("active")||(u.style.color="var(--fg-muted)")})})}a(),w(a),Q(a);const c=["hero","about","skills","projects","education","contact"],s=new IntersectionObserver(o=>{o.forEach(t=>{t.isIntersecting&&e.querySelectorAll(".nav-link").forEach(l=>{const r=l.dataset.section===t.target.id;l.classList.toggle("active",r),l.style.color=r?"var(--fg)":"var(--fg-muted)",l.style.background=r?"color-mix(in srgb, var(--accent) 25%, transparent)":"transparent"})})},{rootMargin:"-45% 0px -50% 0px"});return setTimeout(()=>{c.forEach(o=>{const t=document.getElementById(o);t&&s.observe(t)})},200),e}function se(){const e=document.createElement("section");e.id="hero",e.className="relative min-h-screen flex flex-col justify-between pt-28 pb-8 overflow-hidden";let a=null,c=0,s=0,o=!1,t=null;function l(){if(!a)return;const i=y().hero.subtitles,m=i[c];if(o){if(s--,a.textContent=m.substring(0,s),s===0){o=!1,c=(c+1)%i.length,t=setTimeout(l,500);return}}else if(s++,a.textContent=m.substring(0,s),s===m.length){t=setTimeout(()=>{o=!0,l()},2500);return}t=setTimeout(l,o?40:75)}function r(){const i=y();t&&clearTimeout(t),e.innerHTML=`
      <!-- Ambient blob -->
      <div class="blob" style="width:500px;height:500px;background:var(--accent);top:-100px;right:-100px;opacity:.15;"></div>

      <!-- Status + location -->
      <div class="max-w-[1200px] mx-auto w-full px-6 reveal">
        <div class="flex flex-wrap items-center justify-between gap-4 mb-12">
          <div class="sticker">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style="background:var(--accent);"></span>
              <span class="relative inline-flex rounded-full h-2 w-2" style="background:var(--accent);"></span>
            </span>
            <span>Available for work</span>
          </div>
          <div class="eyebrow">Morocco · UTC+1 · 1337/42</div>
        </div>
      </div>

      <!-- Massive name -->
      <div class="max-w-[1200px] mx-auto w-full px-6 flex-1 flex flex-col justify-center gap-10">
        <div class="reveal">
          <div class="eyebrow mb-4">${i.hero.greeting}</div>
          <h1 class="display text-[14vw] md:text-[10vw] leading-[0.85]" style="color:var(--fg);">
            KHALID<br/>
            <span class="outline-text">LAMQARI.</span>
          </h1>
        </div>

        <!-- Typing subtitle -->
        <div class="reveal flex flex-wrap items-center gap-4">
          <span class="eyebrow">// role</span>
          <span id="hero-subtitle" class="mono text-xl md:text-2xl font-semibold caret" style="color:var(--fg);"></span>
        </div>

        <!-- Bio + CTA -->
        <div class="reveal grid md:grid-cols-[1.2fr_1fr] gap-8 items-end">
          <p class="text-base md:text-lg max-w-xl leading-relaxed" style="color:var(--fg-muted);">
            ${i.hero.bio}
          </p>
          <div class="flex flex-wrap gap-3 md:justify-end">
            <a href="#projects" class="btn-big">
              ${i.hero.viewProjects}
              <span>${d.arrowRight}</span>
            </a>
            <a href="#contact" class="btn-ghost">${i.hero.contactMe}</a>
          </div>
        </div>
      </div>

      <!-- Marquee -->
      <div class="mt-16 py-4 border-y reveal" style="border-color:var(--border);">
        <div class="marquee">
          <div class="marquee-track">
            ${Array(2).fill(0).map(()=>`
              <span class="mono text-2xl md:text-4xl font-bold uppercase flex items-center gap-12" style="color:var(--fg);">
                ${["Backend","Fullstack","Systems","APIs","Docker","Postgres","React","Fastify","C/C++","Linux"].map(m=>`
                  <span class="flex items-center gap-12">${m}<span style="color:var(--accent);">✦</span></span>
                `).join("")}
              </span>
            `).join("")}
          </div>
        </div>
      </div>
    `,a=e.querySelector("#hero-subtitle"),s=0,o=!1,c=0,l()}return r(),w(()=>{s=0,o=!1,c=0,r()}),e}function oe(){const e=document.createElement("section");e.id="about",e.className="section";function a(){const c=y(),s=c.about,o=c.contact;e.innerHTML=`
      <div class="max-w-[1200px] mx-auto px-6">
        <!-- Section header -->
        <div class="flex items-end justify-between gap-4 mb-20 reveal">
          <div>
            <span class="num-tag">[ 01 / ${s.title} ]</span>
            <h2 class="display text-5xl md:text-7xl mt-4" style="color:var(--fg);">
              who<br/>
              <span class="outline-text">am i?</span>
            </h2>
          </div>
        </div>

        <div class="grid md:grid-cols-12 gap-10">
          <!-- Left: photo card tilted -->
          <div class="md:col-span-5 reveal">
            <div class="relative max-w-sm mx-auto">
              <!-- Accent block behind -->
              <div class="absolute -top-4 -left-4 w-full h-full tilt-2" style="background:var(--accent);"></div>
              <!-- Photo -->
              <div class="relative tilt-1 overflow-hidden" style="border:1px solid var(--fg);">
                <img src="profile.png" alt="Khalid Lamqari" class="w-full h-auto block"
                     style="filter:grayscale(0.15) contrast(1.05);" />
                <!-- Status bar -->
                <div class="absolute bottom-0 left-0 right-0 px-4 py-2 flex items-center justify-between"
                     style="background:var(--fg);color:var(--bg);">
                  <span class="mono text-xs font-bold">KL</span>
                  <span class="mono text-[10px] uppercase tracking-widest">Online</span>
                </div>
              </div>
            </div>

            <!-- Spoken languages -->
            <div class="mt-12 text-center">
              <div class="eyebrow mb-4">${s.spokenLanguages}</div>
              <div class="flex gap-2 justify-center flex-wrap">
                ${[s.arabic,s.english,s.french].map((r,i)=>`
                  <span class="chip wiggle" style="transform:rotate(${(i-1)*2}deg);">${r}</span>
                `).join("")}
              </div>
            </div>
          </div>

          <!-- Right: bio + stats -->
          <div class="md:col-span-7 flex flex-col gap-8 reveal">
            <div class="space-y-5">
              <p class="text-xl md:text-2xl leading-snug font-medium" id="about-desc1" style="color:var(--fg);"></p>
              <p class="text-base md:text-lg leading-relaxed" id="about-desc2" style="color:var(--fg-muted);"></p>
            </div>

            <!-- Stats grid -->
            <div class="grid grid-cols-3 gap-4 mt-4">
              ${[{k:"11.51",sub:"/ 21",v:s.statLevel},{k:"22+",sub:"",v:s.statProjects},{k:"100%",sub:"",v:s.statCommonCore}].map(r=>`
                <div class="bento-card">
                  <div class="display text-3xl md:text-4xl mb-1" style="color:var(--fg);">
                    ${r.k}${r.sub?`<span class="mono text-sm align-baseline ml-1" style="color:var(--fg-subtle);">${r.sub}</span>`:""}
                  </div>
                  <div class="mono text-[10px] uppercase tracking-widest" style="color:var(--fg-subtle);">${r.v}</div>
                </div>
              `).join("")}
            </div>

            <!-- Contact grid -->
            <div class="grid sm:grid-cols-2 gap-3">
              ${[{i:d.mail,l:o.emailLabel,v:"khalidlamqari@gmail.com",h:"mailto:khalidlamqari@gmail.com"},{i:d.phone,l:o.phoneLabel,v:"+212 6 18 80 49 55",h:"tel:+212618804955"},{i:d.location,l:o.locationLabel,v:s.location,h:""},{i:d.github,l:o.githubLabel,v:"khalidlamqari",h:"https://github.com/khalidlamqari"}].map(r=>`
                <div class="flex items-center gap-3 px-4 py-3 bento-card">
                  <span style="color:var(--fg-muted);">${r.i}</span>
                  <div class="min-w-0 flex-1">
                    <div class="mono text-[9px] uppercase tracking-widest mb-0.5" style="color:var(--fg-subtle);">${r.l}</div>
                    ${r.h?`<a href="${r.h}" ${r.h.startsWith("http")?'target="_blank" rel="noopener"':""} class="link-underline text-sm font-medium truncate block" style="color:var(--fg);">${r.v}</a>`:`<span class="text-sm font-medium" style="color:var(--fg);">${r.v}</span>`}
                  </div>
                </div>
              `).join("")}
            </div>

            <!-- CV downloads -->
            <div class="flex flex-wrap gap-3 pt-2">
              <a href="cv_en_khalid_lamqari.pdf" download class="btn-big">
                ${d.download}
                ${s.downloadCVEn}
              </a>
              <a href="cv_fr_khalid_lamqari.pdf" download class="btn-ghost">
                ${d.download}
                ${s.downloadCVFr}
              </a>
            </div>
          </div>
        </div>
      </div>
    `;const t=e.querySelector("#about-desc1"),l=e.querySelector("#about-desc2");t&&(t.innerHTML=s.description1),l&&(l.innerHTML=s.description2)}return a(),w(a),e}const re=[{key:"programmingLangs",num:"01",items:["C","C++","Python","JavaScript","TypeScript","Java"]},{key:"webFrameworks",num:"02",items:["React","Django","Fastify","Spring Boot","NestJS"]},{key:"databases",num:"03",items:["PostgreSQL","MongoDB","MySQL"]},{key:"tools",num:"04",items:["Docker","Git","Nginx","Redis","RabbitMQ","Linux","TCP/IP"]}];function ne(e,a=4){let c=0;for(let s=0;s<e.length;s++)c=c*31+e.charCodeAt(s)|0;return c%(a*2+1)-a}function le(){const e=document.createElement("section");e.id="skills",e.className="section relative";function a(){const s=y().skills;e.innerHTML=`
      <div class="blob" style="width:420px;height:420px;background:var(--accent);bottom:-100px;left:-100px;opacity:.1;"></div>

      <div class="max-w-[1200px] mx-auto px-6 relative">
        <!-- Header -->
        <div class="flex items-end justify-between gap-4 mb-16 reveal">
          <div>
            <span class="num-tag">[ 02 / ${s.title} ]</span>
            <h2 class="display text-5xl md:text-7xl mt-4" style="color:var(--fg);">
              <span class="outline-text">tools</span><br/>
              of trade.
            </h2>
          </div>
          <div class="hidden md:block mono text-xs max-w-xs text-right" style="color:var(--fg-subtle);">
            // stack i reach for when i build things that need to survive production
          </div>
        </div>

        <!-- Groups -->
        <div class="grid md:grid-cols-2 gap-x-14 gap-y-12">
          ${re.map(o=>`
            <div class="reveal">
              <div class="flex items-baseline gap-3 mb-5 pb-3" style="border-bottom:1px solid var(--border);">
                <span class="mono text-xs" style="color:var(--accent);">${o.num}</span>
                <h3 class="display text-2xl md:text-3xl" style="color:var(--fg);">${s[o.key]}</h3>
                <span class="ml-auto mono text-xs" style="color:var(--fg-subtle);">${o.items.length} items</span>
              </div>
              <div class="flex flex-wrap gap-2">
                ${o.items.map(t=>`
                  <span class="chip" style="transform:rotate(${ne(t,3)}deg);">${t}</span>
                `).join("")}
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    `}return a(),w(a),e}let p=null,q=null,D=null,k=[],L=0;function ie(){var e,a,c;return p||(p=document.createElement("div"),p.id="lightbox",p.className="fixed inset-0 z-[9998] hidden items-center justify-center",p.style.background="rgba(0,0,0,.92)",p.style.backdropFilter="blur(8px)",p.style.webkitBackdropFilter="blur(8px)",p.setAttribute("role","dialog"),p.setAttribute("aria-modal","true"),p.setAttribute("aria-label","Image preview"),p.innerHTML=`
    <button class="lb-close hoverable absolute top-5 right-5 w-12 h-12 rounded-full flex items-center justify-center transition-all"
            style="background:rgba(255,255,255,.08);color:white;border:1px solid rgba(255,255,255,.15);"
            aria-label="Close">
      ${d.close}
    </button>

    <button class="lb-prev hoverable absolute left-5 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center transition-all"
            style="background:rgba(255,255,255,.08);color:white;border:1px solid rgba(255,255,255,.15);"
            aria-label="Previous image">
      ${d.chevronLeft}
    </button>

    <button class="lb-next hoverable absolute right-5 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center transition-all"
            style="background:rgba(255,255,255,.08);color:white;border:1px solid rgba(255,255,255,.15);"
            aria-label="Next image">
      ${d.chevronRight}
    </button>

    <div class="lb-stage relative max-w-[92vw] max-h-[88vh] flex items-center justify-center">
      <img class="lb-img max-w-full max-h-[88vh] object-contain select-none" alt="" />
    </div>

    <div class="lb-counter absolute bottom-5 left-1/2 -translate-x-1/2 mono text-xs uppercase tracking-widest px-3 py-1.5 rounded-full"
         style="background:rgba(255,255,255,.08);color:white;border:1px solid rgba(255,255,255,.15);"></div>
  `,document.body.appendChild(p),q=p.querySelector(".lb-img"),D=p.querySelector(".lb-counter"),(e=p.querySelector(".lb-close"))==null||e.addEventListener("click",I),(a=p.querySelector(".lb-prev"))==null||a.addEventListener("click",s=>{s.stopPropagation(),P(-1)}),(c=p.querySelector(".lb-next"))==null||c.addEventListener("click",s=>{s.stopPropagation(),P(1)}),p.addEventListener("click",s=>{s.target===p&&I()}),document.addEventListener("keydown",s=>{!p||p.classList.contains("hidden")||(s.key==="Escape"?I():s.key==="ArrowLeft"?P(-1):s.key==="ArrowRight"&&P(1))}),p)}function W(){!q||!D||(q.src=k[L],q.alt=`Image ${L+1} of ${k.length}`,D.textContent=`${L+1} / ${k.length}`)}function P(e){k.length&&(L=(L+e+k.length)%k.length,W())}function O(e,a=0){e.length&&(ie(),k=e,L=Math.max(0,Math.min(a,e.length-1)),W(),p.classList.remove("hidden"),p.classList.add("flex"),document.body.style.overflow="hidden")}function I(){p&&(p.classList.add("hidden"),p.classList.remove("flex"),document.body.style.overflow="")}const z=[{key:"transcendence",num:"01",year:"2025",tags:["React","Fastify","Redis","RabbitMQ","Docker"],span:"md:col-span-8",big:!0,youtubeId:"s0F1gx7FyUs",youtubeStart:1,repo:"https://github.com/khalidlamqari/ft_transcendence",xp:580},{key:"gymadmin",num:"02",year:"2024",tags:["React","Spring Boot","Postgres","Docker"],url:"https://www.gymadmin.ma",span:"md:col-span-4",youtubeId:"XYdSYOrzRSo"},{key:"zetaspace",num:"03",year:"2024",tags:["React","Fastify","Postgres","Docker","Nginx"],url:"https://www.zetaspace.net",span:"md:col-span-6",gallery:["projects/p1/1.png","projects/p1/2.png","projects/p1/3.png","projects/p1/4.png","projects/p1/5.png"]},{key:"webserver",num:"04",year:"2025",tags:["C++","HTTP","Sockets","Multithreading"],span:"md:col-span-6",repo:"https://github.com/khalidlamqari/webserver",xp:515,gallery:["projects/p2/1.png"]},{key:"cub3d",num:"05",year:"2024",tags:["C","Raycasting","Graphics"],span:"md:col-span-4",repo:"https://github.com/khalidlamqari/cub3d",xp:137,gallery:["projects/p3/1.png"]},{key:"minishell",num:"06",year:"2024",tags:["C","Unix","Process"],span:"md:col-span-8",xp:67,gallery:["projects/p4/1.png"]},{key:"inception",num:"07",year:"2025",tags:["Docker","NGINX","WordPress","MariaDB","SSL"],span:"",hidden:!0,xp:377},{key:"philosophers",num:"08",year:"2024",tags:["C","Threads","Mutex","Concurrency"],span:"",hidden:!0,xp:80},{key:"netpractice",num:"09",year:"2024",tags:["Network","TCP/IP","Routing"],span:"",hidden:!0,xp:75},{key:"pushswap",num:"10",year:"2024",tags:["C","Algorithms","Sorting"],span:"",hidden:!0,xp:44},{key:"pipex",num:"11",year:"2024",tags:["C","Unix","Pipes","dup2"],span:"",hidden:!0,xp:27},{key:"solong",num:"12",year:"2024",tags:["C","MiniLibX","2D Game"],span:"",hidden:!0,xp:23},{key:"ftprintf",num:"13",year:"2023",tags:["C","Variadic"],span:"",hidden:!0,xp:21},{key:"born2beroot",num:"14",year:"2023",tags:["Debian","LVM","SSH","UFW"],span:"",hidden:!0,xp:13},{key:"libft",num:"15",year:"2023",tags:["C","Stdlib"],span:"",hidden:!0,xp:11}];function ce(){const e=document.createElement("section");e.id="projects",e.className="section relative";let a=!1;function c(t,l){const r=l[t.key],i=t.youtubeId?`https://www.youtube.com/watch?v=${t.youtubeId}${t.youtubeStart?`&t=${t.youtubeStart}s`:""}`:null,m=[];t.repo&&m.push({href:t.repo,label:"Code",icon:d.github}),t.url&&m.push({href:t.url,label:"Live",icon:d.externalLink}),i&&m.push({href:i,label:"Video",icon:d.youtube});const h=t.xp?`<span class="mono text-xs font-semibold" style="color:var(--accent);">${t.xp} XP</span>`:`<span class="mono text-xs" style="color:var(--fg-subtle);">${t.tags[0]}</span>`;return`
      <article class="bento-card reveal ${t.span} group flex flex-col">
        <header class="flex items-start justify-between gap-3 mb-3">
          <span class="mono text-xs" style="color:var(--fg-subtle);">${t.num} / ${t.year}</span>
          ${h}
        </header>

        ${t.youtubeId?`
          <div class="yt-facade relative aspect-video w-full mb-4 overflow-hidden group/video"
               style="border:1px solid var(--border);"
               role="button" tabindex="0"
               data-yt-id="${t.youtubeId}" data-yt-start="${t.youtubeStart??0}"
               aria-label="Play ${r.name} demo">
            <img src="https://img.youtube.com/vi/${t.youtubeId}/hqdefault.jpg"
                 srcset="https://img.youtube.com/vi/${t.youtubeId}/hqdefault.jpg 480w,
                         https://img.youtube.com/vi/${t.youtubeId}/maxresdefault.jpg 1280w"
                 sizes="(max-width: 768px) 100vw, 640px"
                 alt="${r.name} demo" loading="lazy"
                 class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover/video:scale-105" />
            <div class="absolute inset-0" style="background:linear-gradient(to bottom,rgba(0,0,0,.1),rgba(0,0,0,.45));"></div>
            <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div class="w-16 h-16 rounded-full flex items-center justify-center transition-transform duration-300 group-hover/video:scale-110"
                   style="background:var(--accent);color:var(--accent-fg);box-shadow:0 8px 32px rgba(212,255,0,.4);">
                <span class="ml-1">${d.play}</span>
              </div>
            </div>
            <div class="absolute bottom-0 left-0 right-0 flex items-center justify-between px-3 py-2 pointer-events-none">
              <span class="flex items-center gap-1.5 mono text-[10px] uppercase tracking-widest text-white">
                <span class="w-1.5 h-1.5 rounded-full" style="background:var(--accent);"></span>
                live demo
              </span>
              <span class="mono text-[10px] uppercase tracking-widest text-white/80">click to play</span>
            </div>
          </div>
        `:t.gallery&&t.gallery.length?(()=>{const n=t.gallery.length>1;return`
          <div class="gallery mb-4" data-images='${JSON.stringify(t.gallery)}' data-project="${r.name}">
            <!-- Main image (clickable to open lightbox) -->
            <div class="gallery-main relative aspect-video w-full overflow-hidden group/gal hoverable"
                 role="button" tabindex="0"
                 style="border:1px solid var(--border);background:var(--bg);"
                 aria-label="Open ${r.name} image (click to zoom)">
              <img class="gallery-main-img absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
                   src="${t.gallery[0]}" alt="${r.name} screenshot 1" loading="lazy" />
              <!-- Hover zoom hint -->
              <div class="absolute top-2 right-2 flex items-center gap-1.5 mono text-[10px] uppercase tracking-widest px-2 py-1 rounded-full opacity-0 group-hover/gal:opacity-100 transition-opacity"
                   style="background:rgba(0,0,0,.65);color:white;backdrop-filter:blur(4px);">
                ${d.zoom}<span>zoom</span>
              </div>
              ${n?`
                <!-- Counter -->
                <div class="absolute bottom-2 left-2 mono text-[10px] uppercase tracking-widest px-2 py-1 rounded-full"
                     style="background:rgba(0,0,0,.65);color:white;backdrop-filter:blur(4px);">
                  <span class="gallery-counter">1</span> / ${t.gallery.length}
                </div>
                <!-- Prev/Next arrows -->
                <button class="gallery-prev hoverable absolute top-1/2 left-2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center opacity-0 group-hover/gal:opacity-100 transition-all"
                        style="background:rgba(0,0,0,.65);color:white;backdrop-filter:blur(4px);"
                        aria-label="Previous image">
                  ${d.chevronLeft}
                </button>
                <button class="gallery-next hoverable absolute top-1/2 right-2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center opacity-0 group-hover/gal:opacity-100 transition-all"
                        style="background:rgba(0,0,0,.65);color:white;backdrop-filter:blur(4px);"
                        aria-label="Next image">
                  ${d.chevronRight}
                </button>
              `:""}
            </div>
            ${n?`
              <!-- Thumbnails -->
              <div class="gallery-thumbs flex gap-2 mt-2 overflow-x-auto pb-1">
                ${t.gallery.map((u,g)=>`
                  <button class="gallery-thumb hoverable shrink-0 w-16 h-12 overflow-hidden transition-all"
                          data-index="${g}"
                          aria-label="View image ${g+1}"
                          style="border:1px solid ${g===0?"var(--accent)":"var(--border)"};opacity:${g===0?"1":"0.55"};">
                    <img src="${u}" alt="thumbnail ${g+1}" loading="lazy"
                         class="w-full h-full object-cover" />
                  </button>
                `).join("")}
              </div>
            `:""}
          </div>
        `})():`
          <div class="img-placeholder relative aspect-video w-full mb-4 overflow-hidden"
               style="border:1px dashed var(--border);">
            <div class="absolute inset-0 flex items-center justify-center flex-col gap-1" style="color:var(--fg-subtle);">
              <span>${d.image}</span>
              <span class="mono text-[10px] uppercase tracking-widest">image tbd</span>
            </div>
          </div>
        `}

        <h3 class="display ${t.big?"text-3xl md:text-4xl":"text-2xl md:text-3xl"} mb-2 group-hover:translate-x-1 transition-transform" style="color:var(--fg);">
          ${r.name}
        </h3>

        <p class="text-sm leading-relaxed mb-4" style="color:var(--fg-muted);">${r.desc}</p>

        ${m.length?`
          <div class="flex flex-wrap gap-2 mt-auto mb-3">
            ${m.map(n=>`
              <a href="${n.href}" target="_blank" rel="noopener"
                 class="flex items-center gap-1.5 mono text-[10px] uppercase tracking-widest px-2.5 py-1.5 transition-colors hoverable"
                 style="color:var(--fg);border:1px solid var(--border);">
                ${n.icon}<span>${n.label}</span>
              </a>
            `).join("")}
          </div>
        `:'<div class="mt-auto"></div>'}

        <div class="flex flex-wrap gap-1.5 pt-3" style="border-top:1px solid var(--border);">
          ${t.tags.map(n=>`
            <span class="mono text-[10px] uppercase tracking-wider px-2 py-1" style="color:var(--fg-muted);border:1px solid var(--border);">${n}</span>
          `).join("")}
        </div>
      </article>
    `}function s(t,l){const r=l[t.key],i=t.inProgress?`<span class="mono text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full" style="background:var(--accent);color:var(--accent-fg);">${l.inProgress}</span>`:t.xp?`<span class="mono text-xs font-semibold" style="color:var(--accent);">${t.xp} XP</span>`:"";return`
      <article class="bento-card reveal flex flex-col group">
        <header class="flex items-center justify-between gap-3 mb-3 pb-3" style="border-bottom:1px solid var(--border);">
          <span class="mono text-xs" style="color:var(--fg-subtle);">${t.num} / ${t.year}</span>
          ${i}
        </header>

        <h3 class="display text-xl md:text-2xl mb-2 group-hover:translate-x-1 transition-transform" style="color:var(--fg);">
          ${r.name}
        </h3>

        <p class="text-sm leading-relaxed mb-4 flex-1" style="color:var(--fg-muted);">${r.desc}</p>

        <div class="flex flex-wrap gap-1.5 mt-auto">
          ${t.tags.map(m=>`
            <span class="mono text-[10px] uppercase tracking-wider px-2 py-1" style="color:var(--fg-muted);border:1px solid var(--border);">${m}</span>
          `).join("")}
        </div>
      </article>
    `}function o(){const l=y().projects,r=z.filter(n=>!n.hidden),i=z.filter(n=>n.hidden);e.innerHTML=`
      <div class="max-w-[1200px] mx-auto px-6 relative">
        <!-- Header -->
        <div class="flex items-end justify-between gap-4 mb-16 reveal">
          <div>
            <span class="num-tag">[ 03 / ${l.title} ]</span>
            <h2 class="display text-5xl md:text-7xl mt-4" style="color:var(--fg);">
              stuff i<br/>
              <span class="outline-text">shipped.</span>
            </h2>
          </div>
          <a href="https://github.com/khalidlamqari" target="_blank" rel="noopener"
             class="hidden md:inline-flex items-center gap-2 mono text-xs uppercase tracking-widest link-underline hoverable" style="color:var(--fg);">
             ${d.github} view github
          </a>
        </div>

        <!-- Featured bento -->
        <div class="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[minmax(220px,auto)]">
          ${r.map(n=>c(n,l)).join("")}
        </div>

        <!-- Separator + toggle -->
        <div class="mt-20 reveal">
          <div class="flex items-center gap-4 mb-8">
            <span class="flex-1 h-px" style="background:var(--border);"></span>
            <span class="eyebrow">// ${l.moreHeading}</span>
            <span class="flex-1 h-px" style="background:var(--border);"></span>
          </div>

          <div class="text-center">
            <button id="toggle-more" class="btn-ghost hoverable" aria-expanded="${a}" aria-controls="more-projects">
              <span data-role="label">${a?l.showLess:`${l.showMore} (+${i.length})`}</span>
              <span data-role="chevron" class="transition-transform duration-300" style="${a?"transform:rotate(180deg);":""}">${d.chevronDown}</span>
            </button>
          </div>
        </div>

        <!-- Extras grid (hidden by default) -->
        <div id="more-projects" class="${a?"":"hidden "}mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[minmax(200px,auto)]">
          ${i.map(n=>s(n,l)).join("")}
        </div>

        <!-- Mobile github link -->
        <div class="mt-16 text-center md:hidden">
          <a href="https://github.com/khalidlamqari" target="_blank" rel="noopener" class="btn-ghost">
            ${d.github} github
          </a>
        </div>
      </div>
    `,e.querySelectorAll(".yt-facade").forEach(n=>{const u=()=>{const g=n.dataset.ytId,f=Number(n.dataset.ytStart??0);if(!g)return;const S=new URLSearchParams({autoplay:"1",rel:"0",modestbranding:"1",playsinline:"1"});f&&S.set("start",String(f)),n.innerHTML=`
          <iframe
            src="https://www.youtube.com/embed/${g}?${S.toString()}"
            title="YouTube video player"
            class="absolute inset-0 w-full h-full"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
        `};n.addEventListener("click",u),n.addEventListener("keydown",g=>{(g.key==="Enter"||g.key===" ")&&(g.preventDefault(),u())})}),e.querySelectorAll(".gallery").forEach(n=>{const u=n.dataset.images;if(!u)return;let g;try{g=JSON.parse(u)}catch{return}if(!g.length)return;const f=n.querySelector(".gallery-main"),S=n.querySelector(".gallery-main-img"),R=n.querySelector(".gallery-counter"),V=Array.from(n.querySelectorAll(".gallery-thumb")),T=n.querySelector(".gallery-prev"),A=n.querySelector(".gallery-next");let x=0;const F=b=>{x=(b+g.length)%g.length,S&&(S.src=g[x]),R&&(R.textContent=String(x+1)),V.forEach((j,C)=>{j.style.borderColor=C===x?"var(--accent)":"var(--border)",j.style.opacity=C===x?"1":"0.55"})};V.forEach((b,j)=>b.addEventListener("click",C=>{C.stopPropagation(),F(j)})),T==null||T.addEventListener("click",b=>{b.stopPropagation(),F(x-1)}),A==null||A.addEventListener("click",b=>{b.stopPropagation(),F(x+1)}),f==null||f.addEventListener("click",b=>{b.target.closest(".gallery-prev, .gallery-next")||O(g,x)}),f==null||f.addEventListener("keydown",b=>{(b.key==="Enter"||b.key===" ")&&(b.preventDefault(),O(g,x))})});const m=e.querySelector("#toggle-more"),h=e.querySelector("#more-projects");m==null||m.addEventListener("click",()=>{a=!a,h==null||h.classList.toggle("hidden",!a);const n=m.querySelector('[data-role="label"]'),u=m.querySelector('[data-role="chevron"]');n&&(n.textContent=a?l.showLess:`${l.showMore} (+${i.length})`),u&&(u.style.transform=a?"rotate(180deg)":""),m.setAttribute("aria-expanded",String(a)),a&&requestAnimationFrame(()=>{h==null||h.querySelectorAll(".reveal:not(.visible)").forEach((g,f)=>{setTimeout(()=>g.classList.add("visible"),f*50)})})})}return o(),w(o),e}function de(){const e=document.createElement("section");e.id="education",e.className="section";function a(){const s=y().education,o=[{num:"01",date:"2023 — now",school:s.school1,tags:["1337","École 42","UM6P"]},{num:"02",date:"2021 — 2022",school:s.school2,tags:["Python","OFPPT"]},{num:"03",date:"2020 — 2021",school:s.school3,tags:["Network","OFPPT"]}];e.innerHTML=`
      <div class="max-w-[1200px] mx-auto px-6">
        <!-- Header -->
        <div class="flex items-end justify-between gap-4 mb-16 reveal">
          <div>
            <span class="num-tag">[ 04 / ${s.title} ]</span>
            <h2 class="display text-5xl md:text-7xl mt-4" style="color:var(--fg);">
              where i<br/>
              <span class="outline-text">studied.</span>
            </h2>
          </div>
        </div>

        <!-- List -->
        <div class="flex flex-col" style="border-top:1px solid var(--border);">
          ${o.map(t=>`
            <div class="reveal group grid grid-cols-12 gap-4 py-8 transition-colors"
                 style="border-bottom:1px solid var(--border);">
              <!-- num -->
              <div class="col-span-2 md:col-span-1 mono text-xs pt-1" style="color:var(--fg-subtle);">${t.num}</div>
              <!-- date -->
              <div class="col-span-10 md:col-span-2 mono text-xs uppercase tracking-widest pt-1" style="color:var(--fg);">
                ${t.date}
              </div>
              <!-- school -->
              <div class="col-span-12 md:col-span-6">
                <h3 class="display text-2xl md:text-3xl mb-2 group-hover:translate-x-2 transition-transform" style="color:var(--fg);">
                  ${t.school.name}
                </h3>
                <p class="text-sm leading-relaxed" style="color:var(--fg-muted);">
                  ${t.school.desc}
                </p>
              </div>
              <!-- tags -->
              <div class="col-span-12 md:col-span-3 flex flex-wrap gap-1.5 md:justify-end items-start">
                ${t.tags.map(l=>`
                  <span class="mono text-[10px] uppercase tracking-widest px-2 py-1 h-fit" style="color:var(--fg);border:1px solid var(--border);">${l}</span>
                `).join("")}
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    `}return a(),w(a),e}function pe(){const e=document.createElement("section");e.id="contact",e.className="section relative overflow-hidden";function a(){const s=y().contact;e.innerHTML=`
      <div class="blob" style="width:600px;height:600px;background:var(--accent);top:30%;left:50%;transform:translate(-50%,-50%);opacity:.12;"></div>

      <div class="max-w-[1200px] mx-auto px-6 relative">
        <!-- Header -->
        <div class="reveal mb-10">
          <span class="num-tag">[ 05 / ${s.title} ]</span>
        </div>

        <!-- Huge mailto -->
        <div class="reveal mb-14">
          <div class="eyebrow mb-4">${s.subtitle}</div>
          <a href="mailto:khalidlamqari@gmail.com" class="mega-link text-[14vw] md:text-[10vw]" style="line-height:0.9;">
            khalidlamqari<br/>
            <span class="outline-text">@gmail.com</span>
          </a>
        </div>

        <!-- Actions -->
        <div class="reveal flex flex-wrap gap-3 mb-16">
          <a href="mailto:khalidlamqari@gmail.com" class="btn-big">
            ${d.mail} ${s.sendEmail}
          </a>
          <a href="cv_en_khalid_lamqari.pdf" download class="btn-ghost">
            ${d.download} ${s.cvEnglish}
          </a>
          <a href="cv_fr_khalid_lamqari.pdf" download class="btn-ghost">
            ${d.download} ${s.cvFrench}
          </a>
        </div>

        <!-- Info grid -->
        <div class="grid sm:grid-cols-2 md:grid-cols-4 gap-4 reveal mb-20">
          ${[{i:d.mail,l:s.emailLabel,v:"khalidlamqari@gmail.com",h:"mailto:khalidlamqari@gmail.com"},{i:d.phone,l:s.phoneLabel,v:"+212 6 18 80 49 55",h:"tel:+212618804955"},{i:d.location,l:s.locationLabel,v:"Morocco",h:""},{i:d.github,l:s.githubLabel,v:"khalidlamqari",h:"https://github.com/khalidlamqari"}].map(o=>`
            <div class="bento-card">
              <div class="mb-6" style="color:var(--fg-muted);">${o.i}</div>
              <div class="mono text-[10px] uppercase tracking-widest mb-1" style="color:var(--fg-subtle);">${o.l}</div>
              ${o.h?`<a href="${o.h}" ${o.h.startsWith("http")?'target="_blank" rel="noopener"':""} class="link-underline text-sm font-medium break-all" style="color:var(--fg);">${o.v}</a>`:`<span class="text-sm font-medium" style="color:var(--fg);">${o.v}</span>`}
            </div>
          `).join("")}
        </div>

        <!-- Footer -->
        <div class="flex flex-wrap items-end justify-between gap-6 pt-10" style="border-top:1px solid var(--border);">
          <div>
            <div class="display text-3xl md:text-4xl mb-2" style="color:var(--fg);">KL.</div>
            <div class="mono text-xs" style="color:var(--fg-subtle);">
              © ${new Date().getFullYear()} Khalid Lamqari. Built with ts + tailwind.
            </div>
          </div>
          <div class="flex items-center gap-3">
            <a href="https://github.com/khalidlamqari" target="_blank" rel="noopener"
               aria-label="GitHub"
               class="w-10 h-10 flex items-center justify-center rounded-full transition-colors"
               style="border:1px solid var(--border);color:var(--fg);">
              ${d.github}
            </a>
            <a href="https://www.youtube.com/@khalidlamqari9780" target="_blank" rel="noopener"
               aria-label="YouTube"
               class="w-10 h-10 flex items-center justify-center rounded-full transition-colors"
               style="border:1px solid var(--border);color:var(--fg);">
              ${d.youtube}
            </a>
            <a href="mailto:khalidlamqari@gmail.com"
               aria-label="Email"
               class="w-10 h-10 flex items-center justify-center rounded-full transition-colors"
               style="border:1px solid var(--border);color:var(--fg);">
              ${d.mail}
            </a>
            <a href="#hero" class="btn-ghost">↑ back to top</a>
          </div>
        </div>
      </div>
    `}return a(),w(a),e}J();document.documentElement.lang=U();const $=document.getElementById("app");$.appendChild(ae());$.appendChild(se());$.appendChild(oe());$.appendChild(le());$.appendChild(ce());$.appendChild(de());$.appendChild(pe());Y();const G=new IntersectionObserver(e=>{e.forEach(a=>{a.isIntersecting&&(a.target.classList.add("visible"),G.unobserve(a.target))})},{threshold:.12,rootMargin:"0px 0px -40px 0px"});function X(){document.querySelectorAll(".reveal:not(.visible)").forEach(e=>G.observe(e))}requestAnimationFrame(X);w(()=>requestAnimationFrame(X));
