/**
 * Aya – Qur'an for Women - Simplified Language Toggle
 */

(function() {
    'use strict';

    let currentLang = localStorage.getItem('language') || 'ar';

    function switchLanguage(lang) {
        if (lang === currentLang) return;
        currentLang = lang;

        // Update HTML attributes
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

        // Update content visibility
        document.querySelectorAll('.content').forEach(section => {
            section.classList.toggle('hidden', section.dataset.lang !== lang);
        });

        // Update button states
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });

        // Save preference
        localStorage.setItem('language', lang);
    }

    // Initialize on load
    switchLanguage(currentLang);

    // Add click handlers
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.onclick = () => switchLanguage(btn.dataset.lang);
    });
})();
