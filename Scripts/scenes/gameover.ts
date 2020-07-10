module scenes {
    export class GameOverScene extends objects.Scene {
        // Variables
        private gameOverLabel: objects.Label;
        private backButton: objects.Button;
        private background: any;
        // Constructor
        constructor(assetManager:createjs.LoadQueue) {
            super(assetManager);

            this.Start();
        }

        // Method
        public Start():void {
            // Initialize our variables

            this.background = new objects.Background(this.assetManager);
            this.gameOverLabel = new objects.Label(
                `Game Over! Your reaction time is ${objects.Game.reactionTime} milliseconds`, "25px", "Monospace", "#fff", 320, 140, true);

            this.backButton = new objects.Button(this.assetManager, "restartButton", 320, 240);
            this.Main();
        }

        public Update():void {}

        public Main():void {
            this.addChild(this.background);
            this.addChild(this.gameOverLabel);
            this.addChild(this.backButton);

            this.backButton.on("click", this.backButtonClick);
        }

        private backButtonClick():void {
            objects.Game.currentScene = config.Scene.GAME;
        }
    }
}