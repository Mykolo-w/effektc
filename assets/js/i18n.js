
const translations = {
    de: {
        common: {
            title: "effekt:C - Dein High. Dein Profil. Deine Kontrolle.",
            nav_home: "Startseite",
            nav_premium: "Premium",
            nav_download: "Download",
            nav_legal: "Rechtliches",
            footer_copyright: "&copy; 2024 effekt:C. Alle Rechte vorbehalten.",
            footer_imprint: "Impressum",
            footer_privacy: "Datenschutz",
            footer_disclaimer: "Hinweis: Diese App fördert keinen Drogenkonsum. Bitte informiere dich über die geltenden Gesetze in deiner Region.",
            btn_app_store: "Laden im",
            btn_google_play: "JETZT BEI"
        },
        index: {
            hero_title: "Dein High. Dein Profil. Deine Kontrolle.",
            hero_subtitle: "Erfasse Wirkungen, entdecke Muster und finde genau die Sorten, die zu dir passen. Deine, private, Cannabis-Datenbank.",
            feature_1_title: "Wirkungsprofile",
            feature_1_desc: "Dokumentiere exakt, wie verschiedene Sorten auf dich wirken – von Fokus bis Entspannung.",
            feature_2_title: "Strain-Datenbank",
            feature_2_desc: "Behalte den Überblick über deine Sorten, Terpene und THC-Gehalte.",
            feature_3_title: "Schlaue Analyse",
            feature_3_desc: "Erkenne Zusammenhänge: Welche Terpene machen dich kreativ? Was hilft dir beim Schlafen?",
            cta_title: "Bereit für besseres Verständnis?",
            cta_subtitle: "Lade effekt:C jetzt kostenlos herunter und starte dein persönliches Tracking.",
            label_positive: "Positive Effekte",
            label_negative: "Negative Effekte",
            label_intensity: "Intensität",
            chart_explanation: "Interaktives Beispiel: Klicke auf die Buttons, um verschiedene Wirkungsprofile zu sehen."
        },
        premium: {
            title: "effekt:C Premium",
            subtitle: "Unbegrenzte Möglichkeiten für dein Tracking.",
            price_monthly: "2,99 € / Monat",
            price_yearly: "29,99 € / Jahr",
            benefit_1: "Unbegrenzte Analysen & Charts",
            benefit_2: "Daten-Export (Backup) als CSV/JSON",
            benefit_3: "Vergleichs-Modus für Sorten",
            benefit_4: "Entwickler unterstützen ❤️",
            cta_start: "Jetzt Premium holen"
        },
        download: {
            title: "Download effekt:C",
            subtitle: "Verfügbar für iOS und Android.",
            beta_notice: "Aktuell in der offenen Beta. Wir freuen uns über dein Feedback!",
            changelog_title: "Was ist neu?",
            changelog_desc: "Version 1.2.0 - Jetzt mit erweitertem Terpen-Scanner."
        }
    },
    en: {
        common: {
            title: "effekt:C - Your High. Your Profile. Your Control.",
            nav_home: "Home",
            nav_premium: "Premium",
            nav_download: "Download",
            nav_legal: "Legal",
            footer_copyright: "&copy; 2024 effekt:C. All rights reserved.",
            footer_imprint: "Imprint",
            footer_privacy: "Privacy Policy",
            footer_disclaimer: "Note: This app does not encourage drug use. Please inform yourself about applicable laws in your region.",
            btn_app_store: "Download on the",
            btn_google_play: "GET IT ON"
        },
        index: {
            hero_title: "Your High. Your Profile. Your Control.",
            hero_subtitle: "Track effects, discover patterns, and find exactly the strains that suit you. Your private cannabis database.",
            feature_1_title: "Effect Profiles",
            feature_1_desc: "Document exactly how different strains affect you – from focus to relaxation.",
            feature_2_title: "Strain Database",
            feature_2_desc: "Keep track of your strains, terpenes, and THC levels.",
            feature_3_title: "Smart Analysis",
            feature_3_desc: "Recognize connections: Which terpenes make you creative? What helps you sleep?",
            cta_title: "Ready for better understanding?",
            cta_subtitle: "Download effekt:C now for free and start your personal tracking.",
            label_positive: "Positive Effects",
            label_negative: "Negative Effects",
            label_intensity: "Intensity",
            chart_explanation: "Interactive Example: Click the buttons to see different effect profiles."
        },
        premium: {
            title: "effekt:C Premium",
            subtitle: "Unlimited possibilities for your tracking.",
            price_monthly: "2.99 € / Month",
            price_yearly: "29.99 € / Year",
            benefit_1: "Unlimited Analysis & Charts",
            benefit_2: "Data Export (Backup) as CSV/JSON",
            benefit_3: "Comparison Mode for Strains",
            benefit_4: "Support the Developers ❤️",
            cta_start: "Get Premium Now"
        },
        download: {
            title: "Download effekt:C",
            subtitle: "Available for iOS and Android.",
            beta_notice: "Currently in open beta. We appreciate your feedback!",
            changelog_title: "What's new?",
            changelog_desc: "Version 1.2.0 - Now with advanced terpene scanner."
        }
    }
};

const chartLabels = {
    de: {
        positive: ['Klarheit & Fokus', 'Kreativität', 'Stimmung (Euphorie)', 'Körperliche Entspannung', 'Schläfrigkeit'],
        negative: ['Kopflastigkeit / Trübung', 'Angst / Paranoia', 'Couch-Lock', 'Übelkeit / Schwindel', 'Kater am nächsten Tag'],
        intensity: ["Nicht spürbar", "Minimal", "Leicht", "Mittel", "Stark", "Extrem"]
    },
    en: {
        positive: ['Clarity & Focus', 'Creativity', 'Mood (Euphoria)', 'Physical Relaxation', 'Sleepiness'],
        negative: ['Headiness / Fog', 'Anxiety / Paranoia', 'Couch-Lock', 'Nausea / Dizziness', 'Hangover next day'],
        intensity: ["Not noticeable", "Minimal", "Light", "Medium", "Strong", "Extreme"]
    }
};


function changeLanguage(lang) {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const parts = key.split('.');
        
        let translation = translations[lang];
        for (const part of parts) {
            translation = translation ? translation[part] : null;
        }

        if (translation) {
            if (element.tagName === 'INPUT' && element.type === 'placeholder') {
                element.placeholder = translation;
            } else {
                element.innerHTML = translation;
            }
        }
    });

    // Update Language Switcher UI
    document.getElementById('lang-de').classList.toggle('active', lang === 'de');
    document.getElementById('lang-en').classList.toggle('active', lang === 'en');
    
    // Trigger custom event for page-specific JS (like charts)
    document.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: lang } }));
}

// Initial setup
document.addEventListener('DOMContentLoaded', () => {
    const userLang = navigator.language.startsWith('de') ? 'de' : 'en';
    changeLanguage(userLang);

    document.getElementById('lang-de').addEventListener('click', (e) => {
        e.preventDefault();
        changeLanguage('de');
    });

    document.getElementById('lang-en').addEventListener('click', (e) => {
        e.preventDefault();
        changeLanguage('en');
    });
});
