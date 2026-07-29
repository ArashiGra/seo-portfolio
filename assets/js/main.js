const siteConfig = {
  baseUrl: 'https://arashigra.github.io/seo-portfolio/',
  articleUrl: 'https://arashigra.github.io/seo-portfolio/article/chiayi-cafes-half-day/',
  ctaUrls: {
    route_map_click: '',
    two_hour_version_click: '',
    rainy_day_version_click: '',
    store_navigation_click: '',
    official_info_click: '',
    alternative_store_click: '',
  },
};

function estimateReadingTime(text) {
  const cjkMatches = text.match(/[\u3400-\u9FFF]/g) || [];
  const latinMatches = text.match(/[A-Za-z]+/g) || [];
  const chineseChars = cjkMatches.length;
  const latinWords = latinMatches.length;
  const chineseMinutes = chineseChars / 400;
  const latinMinutes = latinWords / 200;
  const totalMinutes = chineseMinutes + latinMinutes;
  const minutes = Math.max(2, Math.ceil(totalMinutes));
  return `${minutes} 分鐘`;
}

function trackEvent(eventName) {
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, { event_category: 'engagement' });
  } else {
    console.info(`[GA4 placeholder] ${eventName}`);
  }
}

function attachCtaHandlers() {
  document.querySelectorAll('[data-cta]').forEach((element) => {
    if (element.disabled || element.getAttribute('aria-disabled') === 'true') {
      return;
    }

    element.addEventListener('click', (event) => {
      const eventName = element.getAttribute('data-cta');
      const url = element.getAttribute('data-url');
      const href = element.getAttribute('href') || '';

      if (element.tagName === 'BUTTON' && !url) {
        event.preventDefault();
        return;
      }

      if (element.tagName === 'A' && href.startsWith('#')) {
        trackEvent(eventName);
        return;
      }

      if (!url) {
        event.preventDefault();
        return;
      }

      trackEvent(eventName);
    });
  });
}

function updateReadingTime() {
  const readingIndicator = document.querySelector('[data-reading-time]');
  const articleBody = document.querySelector('[data-article-body]');
  if (!readingIndicator || !articleBody) {
    return;
  }

  readingIndicator.textContent = `約 ${estimateReadingTime(articleBody.textContent)}`;
}

document.addEventListener('DOMContentLoaded', () => {
  updateReadingTime();
  attachCtaHandlers();
});
