document.addEventListener('DOMContentLoaded', () => {
    const data = {
        "cards": [
            {
                "image": "./img/cSharp.png",
                "title": "C# (.NET 6.0)",
                "description": "Desenvolvimento de APIs REST e aplicações utilizando outras tecnologias.",
                "level": "Intermediário",
                "rating": 3.5
            },
            {
                "image": "./img/cPlusPlus.png",
                "title": "C++",
                "description": "Desenvolvimento de projetos com foco no aprendizado de lógica de programação",
                "level": "Avançado",
                "rating": 4.5
            },
            {
                "image": "./img/delphi.png",
                "title": "Delphi",
                "description": "Desenvolvimento de aplicações desktop CRUD com banco de dados",
                "level": "Avançado",
                "rating": 4.3
            },
            {
                "image": "./img/progress.png",
                "title": "Progress 4GL",
                "description": "Desenvolvimento de funcionalidades para sistema ERP",
                "level": "Avançado",
                "rating": 4.5
            },
            {
                "image": "./img/java.png",
                "title": "Java",
                "description": "Desenvolvimento de projetos com foco no aprendizado de POO e integração com banco de dados",
                "level": "Aprendendo",
                "rating": 1.5
            },
            {
                "image": "./img/js.png",
                "title": "Javascript",
                "description": "Desenvolvimento de carrosel e algumas funcionalidades, além de testes automatizados",
                "level": "Avançado",
                "rating": 4.2
            },
            {
                "image": "./img/ts.png",
                "title": "Typescript",
                "description": "Desenvolvimento de projetos envolvendo framework Angular",
                "level": "Avançado",
                "rating": 4.5
            },
            {
                "image": "./img/html.png",
                "title": "HTML",
                "description": "Desenvolvimento de diversos web sites com estruturas simples e até utilizando frameworks",
                "level": "Dominante",
                "rating": 5.0
            },
            {
                "image": "./img/css.png",
                "title": "CSS",
                "description": "Desenvolvimento de visuais para diversos projetos",
                "level": "Dominante",
                "rating": 5.0
            },
            {
                "image": "./img/angular.png",
                "title": "Angular",
                "description": "Desenvolvimento de projetos WEB envolvendo CRUD",
                "level": "Satisfatório",
                "rating": 2.9
            },
            {
                "image": "./img/postgresql.png",
                "title": "PostgreSQL",
                "description": "Utilizado em projetos envolvendo API",
                "level": "Dominante",
                "rating": 5.0
            },
            {
                "image": "./img/mariadb.png",
                "title": "MariaDB",
                "description": "Utilizado em projetos desktop com Delphi e WEB",
                "level": "Dominante",
                "rating": 5.0
            },
            {
                "image": "./img/mysql.png",
                "title": "MySQL",
                "description": "Utilizado como ferramenta de aprendizado",
                "level": "Domiante",
                "rating": 5.0
            },
            {
                "image": "./img/git.png",
                "title": "Git (GitBash)",
                "description": "Gerenciamento de todos os meus projetos",
                "level": "Dominante",
                "rating": 5.0
            },
            {
                "image": "./img/cy.png",
                "title": "Cypress",
                "description": "Ferramenta utilizada para programar testes automatizados de aplicações WEB",
                "level": "Satisfatório",
                "rating": 2.7
            },
            {
                "image": "./img/cucumber.png",
                "title": "Cucumber",
                "description": "Ferramenta urilizada para montagem de cenário de testes automatizados",
                "level": "Avançado",
                "rating": 4.2
            }
        ]
    };
    console.log(data);

    function createCards(cards) {
        const container = document.getElementById('card-container');
        if (!container) {
            console.error('Elemento com ID "card-container" não encontrado.');
            return;
        }

        cards.forEach(cardInfo => {
            const card = document.createElement('div');
            card.classList.add('card');

            const img = document.createElement('img');
            img.src = cardInfo.image;
            img.alt = cardInfo.title;

            const cardContent = document.createElement('div');
            cardContent.classList.add('card-content');

            const cardTitle = document.createElement('div');
            cardTitle.classList.add('card-title');
            cardTitle.textContent = cardInfo.title;

            const cardDescription = document.createElement('div');
            cardDescription.classList.add('card-description');
            cardDescription.textContent = cardInfo.description;

            const cardInfoContainer = document.createElement('div');
            cardInfoContainer.classList.add('card-info');

            const cardLevel = document.createElement('span');
            cardLevel.classList.add('card-level');
            cardLevel.textContent = cardInfo.level;

            const cardRating = document.createElement('span');
            cardRating.classList.add('card-rating');
            if(cardInfo.rating > 1 && cardInfo.rating < 2){
                cardRating.textContent = `⭐ ${cardInfo.rating.toFixed(1)}`;
            }
            else if(cardInfo.rating > 2 && cardInfo.rating < 3){
                cardRating.textContent = `⭐⭐ ${cardInfo.rating.toFixed(1)}`;
            }
            else if(cardInfo.rating > 3 && cardInfo.rating < 4){
                cardRating.textContent = `⭐⭐⭐ ${cardInfo.rating.toFixed(1)}`;
            }
            else if(cardInfo.rating > 4 && cardInfo.rating < 5){
                cardRating.textContent = `⭐⭐⭐⭐ ${cardInfo.rating.toFixed(1)}`;
            }
            else if(cardInfo.rating == 5){
                cardRating.textContent = `⭐⭐⭐⭐⭐ ${cardInfo.rating.toFixed(1)}`;
            }

            cardInfoContainer.appendChild(cardRating);
            
            cardContent.appendChild(cardTitle);
            cardContent.appendChild(cardDescription);
            cardContent.appendChild(cardLevel);
            cardContent.appendChild(cardInfoContainer);
            card.appendChild(img);
            card.appendChild(cardContent);

            container.appendChild(card);
        });
    }

    createCards(data.cards);
});
