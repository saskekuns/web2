function AnimationTarget(el, animationParams) {
    this.el = el;
    this.animationParams = animationParams;

    this.animate = function() {
        const randomTransformFirst = getRandomTransformProperty();
        const randomTransformSecond = getRandomTransformProperty();
        const animeParams = {
            targets: this.el,
            ...this.animationParams,
            [randomTransformFirst]: getRandomTransformValue(),
            [randomTransformSecond]: getRandomTransformValue(),
            'rotate': randomRotate(),
            'scale': `${Math.random() * 2}, ${Math.random() * 2}`,
            complete: () => {
                console.log('Animation completed on element:', this.el);
            },
        };
        anime(animeParams);
    };

    function getRandomTransformProperty() {
        const transformProperties = [
            'translateX',
            'translateY'
        ];
        const randomIndex = Math.floor(Math.random() * transformProperties.length);
        return transformProperties[randomIndex];
    }

    function randomRotate() {
        const randomBool = Math.random() > 0.5;
        if (randomBool) {
            return `${Math.floor(Math.random() * -90)}deg`;
        } else {
            return `${Math.floor(Math.random() * 90)}deg`;
        }
    }

    function getRandomTransformValue() {
        const randomBool = Math.random() > 0.5;
        if (randomBool) {
            return `${Math.floor(Math.random() * -800)}px`;
        } else {
            return `${Math.floor(Math.random() * 800)}px`;
        }
    }
}

const addBoxBtn = document.getElementById('add-box-btn');
const container = document.body;

addBoxBtn.addEventListener('click', () => {
    const box = document.createElement('div');
    box.classList.add('box');
    container.appendChild(box);

    const randomBool = Math.random() > 0.5;
    if (randomBool) {
        box.classList.add('red');
    } else {
        box.classList.add('blue');
    }

    const animationTarget = new AnimationTarget(box, {
        duration: 1000,
        easing: 'easeOutElastic',
    });
    animationTarget.animate();
});
