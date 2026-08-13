document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const html = document.documentElement;

    const themeSwitch = document.getElementById("themeSwitch");
    const themeState = themeSwitch
        ? themeSwitch.querySelector(".theme-switch-state")
        : null;

    const mobileTrigger = document.getElementById("mobileTrigger");
    const mobilePanel = document.getElementById("mobilePanel");
    const mobileClose = document.getElementById("mobileClose");
    const currentYear = document.getElementById("currentYear");

    const desktopLinks = document.querySelectorAll(".topbar-nav a");
    const internalLinks = document.querySelectorAll('a[href^="#"]');

    const sections = [
        document.getElementById("about"),
        document.getElementById("experience"),
        document.getElementById("work"),
        document.getElementById("stack"),
        document.getElementById("contact")
    ].filter(Boolean);


    /* =========================================================
       CURRENT YEAR
    ========================================================= */

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }


    /* =========================================================
       LANGUAGE SYSTEM
    ========================================================= */

    const translations = {
        pt: {
            hero_description:
                "Estudante técnico em Redes e Arquitetura de Computadores, com experiência em suporte técnico corporativo e projetos de desenvolvimento.",

            about_title_1: "TECNOLOGIA",
            about_title_2: "NA PRÁTICA.",

            about_lead:
                "Minha relação com tecnologia não ficou só na sala de aula. A prática começou cedo.",

            about_1:
                "Sou estudante do Ensino Médio Técnico em Redes e Arquitetura de Computadores no COTEMIG.",

            about_2:
                "Minha primeira experiência profissional em TI foi na BHM Diesel, atuando diretamente com suporte técnico em ambiente corporativo.",

            about_3:
                "Paralelamente, venho ampliando meus conhecimentos em programação por meio de projetos acadêmicos e pessoais.",

            exp_1:
                "Suporte presencial e remoto aos usuários.",

            exp_2:
                "Instalação, formatação e configuração do Windows.",

            exp_3:
                "Preparação de desktops e notebooks.",

            exp_4:
                "Diagnóstico de hardware e software.",

            exp_5:
                "Troca de SSD, HD e memória RAM.",

            exp_6:
                "Administração básica do Active Directory.",

            exp_7:
                "Outlook, impressoras em rede e endereçamento IP.",

            exp_8:
                "Backups e apoio durante incidente de malware.",

            projects_intro:
                "Projetos que representam melhor minha evolução até aqui.",

            medconform_description:
                "Sistema acadêmico voltado à validação de OPMEs, desenvolvido em equipe com separação entre front-end e back-end, API REST, operações CRUD e persistência de dados.",

            medconform_learned:
                "Organização de back-end, integração entre camadas e trabalho em equipe.",

            cafe_description:
                "Website responsivo desenvolvido para uma cafeteria, com apresentação do estabelecimento, cardápio organizado e interações em JavaScript.",

            cafe_learned:
                "Responsividade, estrutura visual e experiência web.",

            stack_description:
                "Tecnologias com as quais já tive contato em estudos, projetos e experiência profissional.",

            education_description:
                "Ensino Médio Técnico em Redes e Arquitetura de Computadores.",

            cert_python:
                "Fundamentos do Python 1",

            cert_cyber:
                "Introdução à Cibersegurança",

            cert_hardware:
                "Fundamentos do Hardware do Computador",

            cert_packet:
                "Começando com o Cisco Packet Tracer",

            cert_digital:
                "Conscientização Digital",

            footer_location:
                "BELO HORIZONTE / BR"
        },

        en: {
            hero_description:
                "Technical student in Computer Networks and Architecture, with hands-on experience in corporate technical support and development projects.",

            about_title_1: "TECHNOLOGY",
            about_title_2: "IN PRACTICE.",

            about_lead:
                "My relationship with technology goes beyond the classroom. Hands-on experience started early.",

            about_1:
                "I am a Technical High School student in Computer Networks and Architecture at COTEMIG.",

            about_2:
                "My first professional experience in IT was at BHM Diesel, where I worked directly with technical support in a corporate environment.",

            about_3:
                "Alongside technical support, I have been expanding my programming knowledge through academic and personal projects.",

            exp_1:
                "On-site and remote technical support for users.",

            exp_2:
                "Windows installation, formatting and configuration.",

            exp_3:
                "Preparation of desktops and notebooks.",

            exp_4:
                "Hardware and software troubleshooting.",

            exp_5:
                "SSD, HDD and RAM replacement and upgrades.",

            exp_6:
                "Basic Active Directory administration.",

            exp_7:
                "Outlook, network printers and IP addressing configuration.",

            exp_8:
                "Backups and support during a malware incident.",

            projects_intro:
                "Projects that best represent my progress so far.",

            medconform_description:
                "Academic system focused on OPME validation, developed as a team with separate front-end and back-end layers, a REST API, CRUD operations and data persistence.",

            medconform_learned:
                "Back-end organization, integration between application layers and teamwork.",

            cafe_description:
                "Responsive website developed for a coffee shop, featuring the business, an organized menu and JavaScript interactions.",

            cafe_learned:
                "Responsive design, visual structure and web experience.",

            stack_description:
                "Technologies I have worked with through studies, projects and professional experience.",

            education_description:
                "Technical High School Program in Computer Networks and Architecture.",

            cert_python:
                "Python Essentials 1",

            cert_cyber:
                "Introduction to Cybersecurity",

            cert_hardware:
                "Computer Hardware Basics",

            cert_packet:
                "Getting Started with Cisco Packet Tracer",

            cert_digital:
                "Digital Awareness",

            footer_location:
                "BELO HORIZONTE / BR"
        }
    };


    /* =========================================================
       LANGUAGE HELPERS
    ========================================================= */

    function updateLanguageButtons(language) {
        const buttons = document.querySelectorAll(".language-option");

        buttons.forEach((button) => {
            const active =
                button.dataset.lang === language;

            button.classList.toggle(
                "active",
                active
            );

            button.setAttribute(
                "aria-pressed",
                active ? "true" : "false"
            );
        });
    }


    function translateMarkedElements(language) {
        const dictionary =
            translations[language];

        document
            .querySelectorAll("[data-i18n]")
            .forEach((element) => {
                const key =
                    element.dataset.i18n;

                if (
                    Object.prototype.hasOwnProperty.call(
                        dictionary,
                        key
                    )
                ) {
                    element.textContent =
                        dictionary[key];
                }
            });
    }


    function translateAria(language) {
        const ariaTranslations = {
            pt: {
                back_home: "Voltar ao início",
                toggle_theme: "Alternar tema",
                open_menu: "Abrir menu",
                close_menu: "Fechar menu"
            },

            en: {
                back_home: "Back to home",
                toggle_theme: "Toggle theme",
                open_menu: "Open menu",
                close_menu: "Close menu"
            }
        };

        document
            .querySelectorAll("[data-i18n-aria]")
            .forEach((element) => {
                const key =
                    element.dataset.i18nAria;

                const value =
                    ariaTranslations[language][key];

                if (value) {
                    element.setAttribute(
                        "aria-label",
                        value
                    );
                }
            });
    }


    function translateExtraElements(language) {
        const english =
            language === "en";


        /* HERO SIDE DATA */

        const heroData =
            document.querySelectorAll(
                ".hero-side-data .data-block"
            );

        if (heroData[0]) {
            const label =
                heroData[0].querySelector("span");

            const text =
                heroData[0].querySelector("p");

            if (label) {
                label.textContent =
                    english
                        ? "CURRENT"
                        : "CURRENT";
            }

            if (text) {
                text.textContent =
                    english
                        ? "Computer Networks and Architecture"
                        : "Redes e Arquitetura de Computadores";
            }
        }


        if (heroData[1]) {
            const label =
                heroData[1].querySelector("span");

            const text =
                heroData[1].querySelector("p");

            if (label) {
                label.textContent =
                    "EXPERIENCE";
            }

            if (text) {
                text.textContent =
                    english
                        ? "Corporate environment"
                        : "Ambiente corporativo";
            }
        }


        if (heroData[2]) {
            const label =
                heroData[2].querySelector("span");

            if (label) {
                label.textContent =
                    "BUILDING";
            }
        }


        /* EXPERIENCE ROLE */

        const role =
            document.querySelector(
                ".experience-role strong"
            );

        if (role) {
            role.textContent =
                english
                    ? "TECHNICAL SUPPORT"
                    : "SUPORTE TÉCNICO";
        }


        /* PROJECT PREVIEW */

        const cafePreview =
            document.querySelector(
                ".work-unit-secondary .visual-head span:last-child"
            );

        if (cafePreview) {
            cafePreview.textContent =
                "NOSSO CAFÉ";
        }


        /* FALLBACK IMAGE */

        document
            .querySelectorAll(
                ".image-fallback strong"
            )
            .forEach((element) => {
                element.textContent =
                    english
                        ? "IMAGE NOT FOUND"
                        : "IMAGEM NÃO ENCONTRADA";
            });
    }


    function updateMeta(language) {
        const english =
            language === "en";

        document.title =
            "JP//SYSTEM — João Pedro Santana";

        const metaDescription =
            document.querySelector(
                'meta[name="description"]'
            );

        if (metaDescription) {
            metaDescription.setAttribute(
                "content",
                english
                    ? "Portfolio of João Pedro Santana — technical student in Computer Networks and Architecture, with experience in technical support and development projects."
                    : "Portfólio de João Pedro Santana — estudante técnico em Redes e Arquitetura de Computadores, com experiência em suporte técnico e projetos de desenvolvimento."
            );
        }
    }


    function applyLanguage(language) {
        const selectedLanguage =
            language === "en"
                ? "en"
                : "pt";

        html.lang =
            selectedLanguage === "en"
                ? "en"
                : "pt-BR";

        html.setAttribute(
            "data-lang",
            selectedLanguage
        );

        localStorage.setItem(
            "jp-system-language",
            selectedLanguage
        );

        translateMarkedElements(
            selectedLanguage
        );

        translateAria(
            selectedLanguage
        );

        translateExtraElements(
            selectedLanguage
        );

        updateMeta(
            selectedLanguage
        );

        updateLanguageButtons(
            selectedLanguage
        );
    }


    /* =========================================================
       MOBILE LANGUAGE SWITCH
    ========================================================= */

    const desktopLanguageSwitch =
        document.getElementById(
            "languageSwitch"
        );

    if (
        desktopLanguageSwitch &&
        mobilePanel &&
        !mobilePanel.querySelector(
            ".mobile-language-switch"
        )
    ) {
        const mobileLanguageSwitch =
            desktopLanguageSwitch.cloneNode(true);

        mobileLanguageSwitch.removeAttribute(
            "id"
        );

        mobileLanguageSwitch.classList.add(
            "mobile-language-switch"
        );

        const mobileNav =
            mobilePanel.querySelector(
                ".mobile-panel-nav"
            );

        if (mobileNav) {
            mobileNav.prepend(
                mobileLanguageSwitch
            );
        }
    }


    /* =========================================================
       LANGUAGE EVENTS
    ========================================================= */

    document
        .querySelectorAll(".language-option")
        .forEach((button) => {
            button.addEventListener(
                "click",
                () => {
                    const language =
                        button.dataset.lang === "en"
                            ? "en"
                            : "pt";

                    applyLanguage(
                        language
                    );
                }
            );
        });


    const savedLanguage =
        localStorage.getItem(
            "jp-system-language"
        );

    applyLanguage(
        savedLanguage === "en"
            ? "en"
            : "pt"
    );


    /* =========================================================
       THEME SYSTEM
    ========================================================= */

    const savedTheme =
        localStorage.getItem(
            "jp-system-theme"
        );

    if (
        savedTheme === "light" ||
        savedTheme === "dark"
    ) {
        body.setAttribute(
            "data-theme",
            savedTheme
        );
    } else {
        body.setAttribute(
            "data-theme",
            "dark"
        );
    }

    updateThemeUI();


    function updateThemeUI() {
        const currentTheme =
            body.getAttribute(
                "data-theme"
            );

        const themeMeta =
            document.querySelector(
                'meta[name="theme-color"]'
            );

        if (themeState) {
            themeState.textContent =
                currentTheme === "dark"
                    ? "DARK"
                    : "LIGHT";
        }

        if (themeMeta) {
            themeMeta.setAttribute(
                "content",
                currentTheme === "dark"
                    ? "#07080b"
                    : "#dcd9d2"
            );
        }
    }


    function toggleTheme() {
        const currentTheme =
            body.getAttribute(
                "data-theme"
            );

        const nextTheme =
            currentTheme === "dark"
                ? "light"
                : "dark";

        body.setAttribute(
            "data-theme",
            nextTheme
        );

        localStorage.setItem(
            "jp-system-theme",
            nextTheme
        );

        updateThemeUI();
    }


    if (themeSwitch) {
        themeSwitch.addEventListener(
            "click",
            toggleTheme
        );
    }


    /* =========================================================
       MOBILE PANEL
    ========================================================= */

    function openMobilePanel() {
        if (
            !mobilePanel ||
            !mobileTrigger
        ) {
            return;
        }

        mobilePanel.classList.add(
            "open"
        );

        mobilePanel.setAttribute(
            "aria-hidden",
            "false"
        );

        mobileTrigger.setAttribute(
            "aria-expanded",
            "true"
        );

        mobileTrigger.classList.add(
            "active"
        );

        body.style.overflow =
            "hidden";
    }


    function closeMobilePanel() {
        if (
            !mobilePanel ||
            !mobileTrigger
        ) {
            return;
        }

        mobilePanel.classList.remove(
            "open"
        );

        mobilePanel.setAttribute(
            "aria-hidden",
            "true"
        );

        mobileTrigger.setAttribute(
            "aria-expanded",
            "false"
        );

        mobileTrigger.classList.remove(
            "active"
        );

        body.style.overflow =
            "";
    }


    if (mobileTrigger) {
        mobileTrigger.addEventListener(
            "click",
            () => {
                const isOpen =
                    mobilePanel &&
                    mobilePanel.classList.contains(
                        "open"
                    );

                if (isOpen) {
                    closeMobilePanel();
                } else {
                    openMobilePanel();
                }
            }
        );
    }


    if (mobileClose) {
        mobileClose.addEventListener(
            "click",
            closeMobilePanel
        );
    }


    if (mobilePanel) {
        mobilePanel
            .querySelectorAll("a")
            .forEach((link) => {
                link.addEventListener(
                    "click",
                    closeMobilePanel
                );
            });
    }


    document.addEventListener(
        "keydown",
        (event) => {
            if (event.key === "Escape") {
                closeMobilePanel();
            }
        }
    );


    /* =========================================================
       MOBILE ICON
    ========================================================= */

    if (mobileTrigger) {
        const bars =
            mobileTrigger.querySelectorAll(
                "span"
            );

        const updateMenuIcon = () => {
            const active =
                mobileTrigger.classList.contains(
                    "active"
                );

            if (bars.length < 2) {
                return;
            }

            if (active) {
                bars[0].style.transform =
                    "translateY(3px) rotate(45deg)";

                bars[1].style.transform =
                    "translateY(-3px) rotate(-45deg)";
            } else {
                bars[0].style.transform =
                    "";

                bars[1].style.transform =
                    "";
            }
        };

        const observer =
            new MutationObserver(
                updateMenuIcon
            );

        observer.observe(
            mobileTrigger,
            {
                attributes: true,
                attributeFilter: [
                    "class"
                ]
            }
        );
    }


    /* =========================================================
       SMOOTH INTERNAL NAVIGATION
    ========================================================= */

    internalLinks.forEach((link) => {
        link.addEventListener(
            "click",
            (event) => {
                const href =
                    link.getAttribute(
                        "href"
                    );

                if (
                    !href ||
                    href === "#"
                ) {
                    return;
                }

                const target =
                    document.querySelector(
                        href
                    );

                if (!target) {
                    return;
                }

                event.preventDefault();

                const header =
                    document.querySelector(
                        ".topbar"
                    );

                const offset =
                    header
                        ? header.offsetHeight + 14
                        : 14;

                const targetPosition =
                    target
                        .getBoundingClientRect()
                        .top +
                    window.scrollY -
                    offset;

                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth"
                });
            }
        );
    });


    /* =========================================================
       ACTIVE NAV
    ========================================================= */

    function updateActiveNav() {
        const position =
            window.scrollY + 180;

        let activeId = "";

        sections.forEach(
            (section) => {
                const top =
                    section.offsetTop;

                const bottom =
                    top +
                    section.offsetHeight;

                if (
                    position >= top &&
                    position < bottom
                ) {
                    activeId =
                        section.id;
                }
            }
        );

        desktopLinks.forEach(
            (link) => {
                link.classList.remove(
                    "active"
                );

                if (
                    link.getAttribute(
                        "href"
                    ) ===
                    `#${activeId}`
                ) {
                    link.classList.add(
                        "active"
                    );
                }
            }
        );
    }


    window.addEventListener(
        "scroll",
        updateActiveNav,
        {
            passive: true
        }
    );

    updateActiveNav();


    /* =========================================================
       REVEAL SYSTEM
    ========================================================= */

    const revealSelectors = [
        ".hero-left",
        ".hero-right",
        ".hero-footer-strip",
        ".about-content",
        ".about-panel",
        ".experience-head",
        ".experience-role",
        ".experience-terminal",
        ".experience-tags",
        ".work-header",
        ".work-unit",
        ".stack-head",
        ".stack-module",
        ".education-module",
        ".certification-module",
        ".contact-title",
        ".connection-line"
    ];

    const revealElements =
        document.querySelectorAll(
            revealSelectors.join(
                ","
            )
        );

    revealElements.forEach(
        (element) => {
            element.classList.add(
                "reveal-target"
            );
        }
    );


    if (
        "IntersectionObserver"
        in window
    ) {
        const revealObserver =
            new IntersectionObserver(
                (
                    entries,
                    observer
                ) => {
                    entries.forEach(
                        (entry) => {
                            if (
                                !entry.isIntersecting
                            ) {
                                return;
                            }

                            entry.target.classList.add(
                                "revealed"
                            );

                            observer.unobserve(
                                entry.target
                            );
                        }
                    );
                },
                {
                    threshold: 0.08,
                    rootMargin:
                        "0px 0px -45px 0px"
                }
            );

        revealElements.forEach(
            (element) => {
                revealObserver.observe(
                    element
                );
            }
        );
    } else {
        revealElements.forEach(
            (element) => {
                element.classList.add(
                    "revealed"
                );
            }
        );
    }


    /* =========================================================
       HERO INITIAL REVEAL
    ========================================================= */

    const heroInitial = [
        document.querySelector(
            ".hero-left"
        ),
        document.querySelector(
            ".hero-right"
        ),
        document.querySelector(
            ".hero-footer-strip"
        )
    ].filter(Boolean);

    heroInitial.forEach(
        (element, index) => {
            setTimeout(() => {
                element.classList.add(
                    "revealed"
                );
            }, index * 120);
        }
    );


    /* =========================================================
       IMAGE FALLBACK
    ========================================================= */

    document
        .querySelectorAll("img")
        .forEach((image) => {
            image.addEventListener(
                "error",
                () => {
                    const parent =
                        image.parentElement;

                    if (!parent) {
                        return;
                    }

                    if (
                        parent.querySelector(
                            ".image-fallback"
                        )
                    ) {
                        return;
                    }

                    image.style.display =
                        "none";

                    const fallback =
                        document.createElement(
                            "div"
                        );

                    fallback.className =
                        "image-fallback";

                    const title =
                        document.createElement(
                            "strong"
                        );

                    title.textContent =
                        html.getAttribute(
                            "data-lang"
                        ) === "en"
                            ? "IMAGE NOT FOUND"
                            : "IMAGEM NÃO ENCONTRADA";

                    const path =
                        document.createElement(
                            "small"
                        );

                    path.textContent =
                        image.getAttribute(
                            "src"
                        ) || "";

                    fallback.appendChild(
                        title
                    );

                    fallback.appendChild(
                        path
                    );

                    parent.appendChild(
                        fallback
                    );
                }
            );
        });


    /* =========================================================
       SYSTEM DATA REACTIVITY
    ========================================================= */

    const systemLogo =
        document.querySelector(
            ".system-logo-sub"
        );

    let ticking = false;


    function updateSystemScroll() {
        if (!systemLogo) {
            return;
        }

        const maxScroll =
            document.documentElement
                .scrollHeight -
            window.innerHeight;

        const percentage =
            maxScroll > 0
                ? Math.round(
                    (
                        window.scrollY /
                        maxScroll
                    ) * 100
                )
                : 0;

        const formatted =
            String(
                percentage
            ).padStart(
                2,
                "0"
            );

        systemLogo.textContent =
            `SYSTEM.${formatted}`;

        ticking = false;
    }


    window.addEventListener(
        "scroll",
        () => {
            if (!ticking) {
                window.requestAnimationFrame(
                    updateSystemScroll
                );

                ticking = true;
            }
        },
        {
            passive: true
        }
    );

    updateSystemScroll();


    /* =========================================================
       STATUS LIGHT PULSE
    ========================================================= */

    const statusLight =
        document.querySelector(
            ".status-light"
        );

    if (statusLight) {
        statusLight.animate(
            [
                {
                    opacity: 0.55,
                    transform:
                        "scale(0.9)"
                },
                {
                    opacity: 1,
                    transform:
                        "scale(1.15)"
                },
                {
                    opacity: 0.55,
                    transform:
                        "scale(0.9)"
                }
            ],
            {
                duration: 2200,
                iterations: Infinity,
                easing:
                    "ease-in-out"
            }
        );
    }


    /* =========================================================
       HERO TITLE MICRO-MOTION
    ========================================================= */

    const heroTitle =
        document.querySelector(
            ".hero-title"
        );

    const finePointer =
        window.matchMedia(
            "(pointer: fine)"
        ).matches;

    if (
        heroTitle &&
        finePointer
    ) {
        heroTitle.addEventListener(
            "mousemove",
            (event) => {
                const rect =
                    heroTitle
                        .getBoundingClientRect();

                const x =
                    (
                        event.clientX -
                        rect.left
                    ) /
                    rect.width -
                    0.5;

                const y =
                    (
                        event.clientY -
                        rect.top
                    ) /
                    rect.height -
                    0.5;

                heroTitle.style.transform =
                    `translate(
                        ${x * 4}px,
                        ${y * 3}px
                    )`;
            }
        );

        heroTitle.addEventListener(
            "mouseleave",
            () => {
                heroTitle.style.transform =
                    "";
            }
        );
    }


    /* =========================================================
       PROJECT VISUAL MICRO-MOTION
    ========================================================= */

    if (finePointer) {
        const visuals =
            document.querySelectorAll(
                ".visual-image"
            );

        visuals.forEach(
            (visual) => {
                const image =
                    visual.querySelector(
                        "img"
                    );

                if (!image) {
                    return;
                }

                visual.addEventListener(
                    "mousemove",
                    (event) => {
                        const rect =
                            visual
                                .getBoundingClientRect();

                        const x =
                            (
                                event.clientX -
                                rect.left
                            ) /
                            rect.width -
                            0.5;

                        const y =
                            (
                                event.clientY -
                                rect.top
                            ) /
                            rect.height -
                            0.5;

                        image.style.transform =
                            `scale(1.025)
                             translate(
                                ${x * -5}px,
                                ${y * -5}px
                             )`;
                    }
                );

                visual.addEventListener(
                    "mouseleave",
                    () => {
                        image.style.transform =
                            "";
                    }
                );
            }
        );
    }


    /* =========================================================
       CONNECTION LINE INDEX EFFECT
    ========================================================= */

    const connectionLines =
        document.querySelectorAll(
            ".connection-line"
        );

    connectionLines.forEach(
        (line, index) => {
            line.style.setProperty(
                "--connection-index",
                index
            );
        }
    );


    /* =========================================================
       REDUCED MOTION
    ========================================================= */

    const reducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

    if (reducedMotion) {
        revealElements.forEach(
            (element) => {
                element.classList.add(
                    "revealed"
                );
            }
        );
    }
});