// スクロールアニメーション用の関数
function animateScroll() {
    const posters = document.querySelectorAll('.poster');

    posters.forEach((poster, index) => {
        const entryStart = index * 100;
        const entryEnd = (index + 1) * 100;
        const exitStart = entryStart + 100;
      // const exitEnd = entryEnd + 100;
        const exitEnd = exitStart + 100;

        poster.animate({
            opacity: [0.25, 1, 0],
            transform: ['scale(1.3)', 'scale(1)', 'scale(1.5)'],
        }, {
            fill: 'both',
            timeline: new ViewTimeline({ subject: poster }),
            rangeStart: [
                { rangeName: 'entry', offset: CSS.percent(entryStart) },
                { rangeName: 'exit', offset: CSS.percent(exitStart) }
            ],
            rangeEnd: [
                { rangeName: 'entry', offset: CSS.percent(entryEnd) },
                { rangeName: 'exit', offset: CSS.percent(exitEnd) }
            ],
        });

        // ビューポート内にあるときはアニメーション開始
        let animationStarted = false;
        poster.addEventListener('animationstart', () => {
            if (isElementInViewport(poster) && !animationStarted) {
                poster.style.transform = 'scale(1)';
                animationStarted = true;
            }
        });
    });
}


        // 初期化関数
        function init() {
            animateScroll();
        }

        // ページ読み込み時に初期化
        document.addEventListener('DOMContentLoaded', init);