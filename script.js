/**
 * Aya – Qur'an for Women - Language Toggle
 */

document.addEventListener('DOMContentLoaded', function() {
    let currentLang = localStorage.getItem('language') || 'ar';

    function switchLanguage(lang) {
        currentLang = lang;

        // Update HTML attributes
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

        // Update content visibility
        document.querySelectorAll('.content').forEach(function(section) {
            if (section.dataset.lang === lang) {
                section.classList.remove('hidden');
            } else {
                section.classList.add('hidden');
            }
        });

        // Update button states
        document.querySelectorAll('.lang-btn').forEach(function(btn) {
            if (btn.dataset.lang === lang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // Save preference
        localStorage.setItem('language', lang);
    }

    // Initialize with saved or default language
    switchLanguage(currentLang);

    // Add click handlers to buttons
    document.querySelectorAll('.lang-btn').forEach(function(btn) {
        btn.addEventListener('click', function() {
            switchLanguage(this.dataset.lang);
        });
    });
});
