/**
 * Biblia Para Mujeres - Language Toggle Script
 * Minimal vanilla JavaScript for switching between Spanish and English
 */

(function() {
    'use strict';

    // Get language preference from localStorage or default to Spanish
    const savedLang = localStorage.getItem('language') || 'es';
    let currentLang = savedLang;

    // Get DOM elements
    const langButtons = document.querySelectorAll('.lang-btn');
    const contentSections = document.querySelectorAll('.content');

    /**
     * Switch to specified language
     * @param {string} lang - Language code ('es' or 'en')
     */
    function switchLanguage(lang) {
        if (lang === currentLang) return;

        currentLang = lang;

        // Update content visibility
        contentSections.forEach(section => {
            const sectionLang = section.getAttribute('data-lang');
            if (sectionLang === lang) {
                section.classList.remove('hidden');
            } else {
                section.classList.add('hidden');
            }
        });

        // Update button states
        langButtons.forEach(btn => {
            const btnLang = btn.getAttribute('data-lang');
            if (btnLang === lang) {
                btn.classList.add('active');
                btn.setAttribute('aria-pressed', 'true');
            } else {
                btn.classList.remove('active');
                btn.setAttribute('aria-pressed', 'false');
            }
        });

        // Update HTML lang attribute for SEO and accessibility
        document.documentElement.setAttribute('lang', lang === 'es' ? 'es' : 'en');

        // Save preference to localStorage
        localStorage.setItem('language', lang);

        // Update page title based on language
        if (lang === 'en') {
            document.title = 'Bible For Women - Daily Christian Devotional for Women | iOS App';
        } else {
            document.title = 'Biblia Para Mujeres - Devocional Diario Cristiano para Mujeres | App iOS';
        }
    }

    /**
     * Initialize language toggle
     */
    function init() {
        // Set initial language
        switchLanguage(currentLang);

        // Add click event listeners to language buttons
        langButtons.forEach(btn => {
            btn.addEventListener('click', function() {
                const lang = this.getAttribute('data-lang');
                switchLanguage(lang);
            });
        });

        // Add keyboard navigation support
        langButtons.forEach(btn => {
            btn.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    const lang = this.getAttribute('data-lang');
                    switchLanguage(lang);
                }
            });
        });
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
