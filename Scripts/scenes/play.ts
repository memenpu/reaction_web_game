module scenes {
    export class PlayScene extends objects.Scene {
        // Variables
        private background: objects.Background;
        private player:objects.Player;
        // private enemy:objects.Enemy;
        private enemies:objects.Enemy[];
        private enemyNum:number;
        public start = 0;
        public reactionTime;
        public timeOutText;
        public pause: boolean = false;
        public shapeProperties = [['lavender', 'mediumvioletred'], ['lavender', 'dodgerblue'], ['lavender', 'crimson'], ['lavender', 'darkslategray'], ['pink', 'mediumvioletred'], ['pink', 'dodgerblue'], ['pink', 'crimson'], ['pink', 'darkslategray'], ['ivory', 'mediumvioletred'], ['ivory', 'dodgerblue'], ['ivory', 'crimson'], ['ivory', 'darkslategray'], ['powderblue', 'mediumvioletred'], ['powderblue', 'dodgerblue'], ['powderblue', 'crimson'], ['powderblue', 'darkslategray']];

        public shape = new createjs.Shape();

        // Constructor
        constructor(assetManager:createjs.LoadQueue) {
            super(assetManager);
            this.background = new objects.Background(this.assetManager);
            this.addChild(this.background);

            setTimeout(()=>this.Start(), 1000);
        }

        public Start():void {
            console.log("Play scene start");
            // Inintialize our variables

            this.start = Date.now();
            this.timeOutText = new createjs.Text(`reaction time ${this.start.toString()} milliseconds`, "40px Arial",);
            this.timeOutText.x = 0;
            this.timeOutText.y = 0;
            this.shuffle(this.shapeProperties);
            let num = Math.floor(Math.random() * 3);
            if (num == 0) {
                this.shape.graphics.beginFill(this.shapeProperties[0][1])
                    .drawRoundRect(Math.random() * (600 - 60) + 60,
                        Math.random() * (350 - 60)+50,
                        80, 80, 15);
            } else if (num == 1) {
                this.shape.graphics.beginFill(this.shapeProperties[0][1])
                    .drawCircle(Math.random() * (600 - 70) + 60,
                        Math.random() * (350 - 70)+50,
                        40);
            } else if (num == 2) {
                this.shape.graphics.beginFill(this.shapeProperties[0][1])
                    .drawPolyStar(Math.random() * (600 - 70) + 60,
                        Math.random() * (350 - 70)+50,
                        40, 5, 5, 5);
            }
            this.Main();
        }

        public Update():void {
            // this.background.Update();
            // this.player.Update();
            // // this.enemy.Update();
            // this.enemies.forEach(e => {
            //     e.Update();
            // })
            if(!this.pause&&this.timeOutText !=null){

                this.reactionTime = Date.now() - this.start;
                this.timeOutText.text = `reaction time ${this.reactionTime.toString()} milliseconds`;
            }
        }

        public Main():void {
            this.addChild(this.timeOutText);
            this.addChild(this.shape);
            this.shape.addEventListener("click", ()=> {
                this.pause = true;

                setTimeout(()=>{

                objects.Game.reactionTime = this.reactionTime;
                objects.Game.currentScene = config.Scene.OVER;
                console.log(config.Scene.OVER);
                console.log(objects.Game.currentScene);
                }, 1000)

            });
        }
        shuffle(array) {
            array.sort(() => Math.random() - 0.5);
        }
    }
}