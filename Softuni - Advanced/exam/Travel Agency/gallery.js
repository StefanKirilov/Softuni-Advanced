class ArtGallery {
    constructor(creator){
        this.creator = creator;
        this.possibleArticles = { "picture":200,"photo":50,"item":250 };
        this.listOfArticles = [];
        this.guests = [];
    }
    addArticle( articleModel, articleName, quantity ){
        if(!this.possibleArticles.hasOwnProperty(articleModel.toLowerCase())){
            throw new Error ("This article model is not included in this gallery!");
        }
        let name = this.listOfArticles.find(x => x.articleName === articleName);

        if(name){
            name.quantity += quantity;
        }
        else{
            articleModel = articleModel.toLowerCase();
            this.listOfArticles.push({articleModel, articleName, quantity});
        }
        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
    }
    inviteGuest ( guestName, personality){
        if(this.guests.find(x => x.guestName === guestName)){
            throw new Error (`${guestName} has already been invited.`)
        }
        else{
            if(personality === 'Vip'){
                let points = 500;
                this.guests.push({guestName, points, purchaseArticle: 0});
                return `You have successfully invited ${guestName}!`;
            }
                let points = 250;
                this.guests.push({guestName, points, purchaseArticle: 0});
                return `You have successfully invited ${guestName}!`;
        }
    }
    buyArticle ( articleModel, articleName, guestName){
        if (this.listOfArticles.find(el => el.articleName === articleName) === undefined) {
            throw new Error(`This article is not found.`);
        } else {
            if (this.listOfArticles.find(el => el.articleName === articleName).articleModel !== articleModel) {
                throw new Error(`This article is not found.`);
            }
        }

        let currentArticle = this.listOfArticles.find(el => el.articleName === articleName);

        if (currentArticle.quantity === 0) {
            return `The ${articleName} is not available.`;
        }

        let currentGuest = this.guests.find(el => el.guestName === guestName);

        if (currentGuest === undefined) {
            return `This guest is not invited.`;
        }

        const neededPoints = this.possibleArticles[articleModel];

        if (neededPoints > currentGuest.points) {
            return `You need to more points to purchase the article.`;
        } else if (neededPoints <= currentGuest.points) {
            currentGuest.points -= neededPoints;
            currentArticle.quantity--;
            currentGuest.purchaseArticle++;
        }

        return `${guestName} successfully purchased the article worth ${neededPoints} points.`;
    }
    showGalleryInfo (criteria){
        if(criteria === 'article'){
            let result = [`Articles information:`];
            for (const list of this.listOfArticles) {
                result.push(`${list.articleModel} - ${list.articleName} - ${list.quantity}`);
            }
            return result.join('\n');
        }
        else if(criteria === 'guest'){
            let result = [`Guests information:`];
            for (const g of this.guests) {
                result.push(`${g.guestName} - ${g.purchaseArticle}`);
            }
            return result.join('\n');
        }
    }
}

const artGallery = new ArtGallery('Curtis Mayfield');

artGallery.addArticle('picture', 'Mona Liza', 3);

artGallery.addArticle('Item', 'Ancient vase', 2);

artGallery.addArticle('picture', 'Mona Liza', 1);

artGallery.inviteGuest('John', 'Vip');

artGallery.inviteGuest('Peter', 'Middle');

artGallery.buyArticle('picture', 'Mona Liza', 'John');

artGallery.buyArticle('item', 'Ancient vase', 'Peter');

console.log(artGallery.showGalleryInfo('article'));

console.log(artGallery.showGalleryInfo('guest'));