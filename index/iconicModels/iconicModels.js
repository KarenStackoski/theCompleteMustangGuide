document.addEventListener('DOMContentLoaded', () => {
    const data = {
        "models": [
            {
                "image": "./img/shelbytGt3501965.webp",
                "name": "Shelby GT350",
                "year": 1965,
                "engine": "V8",
                "litter": 4.7,
                "horsePower": 310,
                "rating": 0
            },
            {
                "image": "./img/shelbyGt500Eleanor.webp",
                "name": "Shelby GT500 Eleanor",
                "year": 1967,
                "engine": "V8",
                "litter": 5.0,
                "horsePower": 400,
                "rating": 0
            },
            {
                "image": "./img/bullit1968.webp",
                "name": "Bullit",
                "year": 1968,
                "engine": "V8",
                "litter": 6.2,
                "horsePower": 340,
                "rating": 0
            },
            {
                "image": "./img/boss3021969.jpg",
                "name": "Boss 302",
                "year": 1969,
                "engine": "302 Ci V8",
                "litter": 5.0,
                "horsePower": 290,
                "rating": 0
            },
            {
                "image": "./img/boss4291969.jpg",
                "name": "Boss 429",
                "year": 1969,
                "engine": "429 V8",
                "litter": 4.9,
                "horsePower": 375,
                "rating": 0
            },
            {
                "image": "./img/mach11970.jpg",
                "name": "Mach1",
                "year": 1970,
                "engine": "428 Cobra Jet",
                "litter": 7.0,
                "horsePower": 335,
                "rating": 0
            },
            {
                "image": "./img/bullitt2001.avif",
                "name": "Bullit",
                "year": 2001,
                "engine": "V8",
                "litter": 4.6,
                "horsePower": 265,
                "rating": 0
            },
            {
                "image": "./img/mach12003.avif",
                "name": "Mach1",
                "year": 2003,
                "engine": "V8",
                "litter": 4.6,
                "horsePower": 305,
                "rating": 0
            },
            {
                "image": "./img/shelbyGt5002013.webp",
                "name": "Shelby GT500",
                "year": 2013,
                "engine": "V8 supercharged",
                "litter": 5.8,
                "horsePower": 662,
                "rating": 0
            },
            {
                "image": "./img/50th2014.webp",
                "name": "50th Year Limited Edition",
                "year": 2014,
                "engine": "V8",
                "litter": 5.0,
                "horsePower": 420,
                "rating": 0
            },
            {
                "image": "./img/shelbyGt3502016.jpg",
                "name": "Shelby GT350",
                "year": 2016,
                "engine": "V8",
                "litter": 5.2,
                "horsePower": 500,
                "rating": 0
            },
            {
                "image": "./img/shelbyGt350R2016.webp",
                "name": "Shelby GT350R",
                "year": 2016,
                "engine": "V8",
                "litter": 5.2,
                "horsePower": 553,
                "rating": 0
            },
            {
                "image": "./img/bullitt2019.jpg",
                "name": "Bullit",
                "year": 2019,
                "engine": "V8",
                "litter": 5.0,
                "horsePower": 480,
                "rating": 0
            },
            {
                "image": "./img/shelbyGt5002020.avif",
                "name": "Shelby GT500",
                "year": 2020,
                "engine": "V8",
                "litter": 5.2,
                "horsePower": 760,
                "rating": 0
            },
            {
                "image": "./img/blackShadow2020.jpg",
                "name": "Black Shadow",
                "year": 2020,
                "engine": "V8",
                "litter": 5.0,
                "horsePower": 466,
                "rating": 0
            },
            {
                "image": "./img/mach12021.jpg",
                "name": "Mach1",
                "year": 2021,
                "engine": "V8",
                "litter": 5.0,
                "horsePower": 483,
                "rating": 0
            }
        ]
    }

    console.log(data);

    function createModels(models) {
        const container = document.getElementById('models-container');
        if (!container) {
            console.error('Elemento com ID "models-container" não encontrado.');
            return;
        }

        models.forEach(modelInfo => {
            const model = document.createElement('div');
            model.classList.add('model');

            const img = document.createElement('img');
            img.src = modelInfo.image || 'default-image.jpg'; // Add a default image if the URL is empty
            img.alt = modelInfo.name;

            const modelContent = document.createElement('div');
            modelContent.classList.add('model-content');

            const modelName = document.createElement('div');
            modelName.classList.add('model-name');
            modelName.textContent = modelInfo.name;

            const modelYear = document.createElement('div');
            modelYear.classList.add('model-year');
            modelYear.textContent = `Ano: ${modelInfo.year}`;

            const modelEngine = document.createElement('div');
            modelEngine.classList.add('model-engine');
            modelEngine.textContent = `Motor: ${modelInfo.engine}`;

            const modelLitter = document.createElement('div');
            modelLitter.classList.add('model-litter');
            modelLitter.textContent = `Litragem: ${modelInfo.litter}L`;

            const modelPower = document.createElement('div');
            modelPower.classList.add('model-power');
            modelPower.textContent = `Potência: ${modelInfo.horsePower}`;

            // Calculate rating for each model
            const power = modelInfo.horsePower;
            const litter = modelInfo.litter;
            const rating = ((power / 100) + litter) / 2;

            const modelRating = document.createElement('div');
            modelRating.classList.add('model-rating');

            const horseEmoji = '🐴';

            // Dynamically create rating based on calculated value
            const ratingText = horseEmoji.repeat(Math.round(rating));

            modelRating.textContent = `${ratingText} ${rating.toFixed(1)}`;

            modelContent.appendChild(modelName);
            modelContent.appendChild(modelYear);
            modelContent.appendChild(modelEngine);
            modelContent.appendChild(modelLitter);
            modelContent.appendChild(modelPower);
            modelContent.appendChild(modelRating);

            model.appendChild(img);
            model.appendChild(modelContent);

            container.appendChild(model);
        });
    }

    createModels(data.models);
});
