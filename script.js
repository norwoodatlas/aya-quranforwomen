/**
 * Aya – Qur'an for Women - Language Toggle Script
 * Minimal vanilla JavaScript with RTL support for Arabic
 */

(function() {
    'use strict';

    // Get language preference from localStorage or default to Arabic
    const savedLang = localStorage.getItem('language') || 'ar';
    let currentLang = savedLang;

    // Get DOM elements
    const langButtons = document.querySelectorAll('.lang-btn');
    const contentSections = document.querySelectorAll('.content');

    /**
     * Switch to specified language
     * @param {string} lang - Language code ('ar' or 'en')
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

        // Update HTML lang and dir attributes for RTL support
        const htmlEl = document.documentElement;
        if (lang === 'ar') {
            htmlEl.setAttribute('lang', 'ar');
            htmlEl.setAttribute('dir', 'rtl');
            document.title = 'آية – القرآن للنساء | Aya – Qur\'an for Women';
        } else {
            htmlEl.setAttribute('lang', 'en');
            htmlEl.setAttribute('dir', 'ltr');
            document.title = 'Aya – Qur\'an for Women | Daily Islamic Devotional App';
        }

        // Save preference to localStorage
        localStorage.setItem('language', lang);
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
